from django.db.models import Q
from django.db.models.functions import Greatest
from django.contrib.postgres.search import (
    SearchQuery,
    SearchVector,
    SearchRank,
    TrigramSimilarity,
)
from rest_framework.filters import BaseFilterBackend
from rest_framework.settings import api_settings


class FullTextSearchFilter(BaseFilterBackend):
    search_param = api_settings.SEARCH_PARAM

    def get_config(self, view, request):
        return getattr(view, "search_config", None)

    def get_search_fields(self, view, request):
        return getattr(view, "search_fields", None)

    def get_similarity_threshold(self, view, request):
        return getattr(view, "similarity_threshold", 0)

    def get_search_term(self, request):
        params = request.query_params.get(self.search_param, "")
        params = params.replace("\x00", "")  # strip null characters
        params = params.replace(",", " ")
        return params

    def filter_queryset(self, request, queryset, view):
        search_fields = self.get_search_fields(view, request)
        search_term = self.get_search_term(request)
        config = self.get_config(view, request)
        threshold = self.get_similarity_threshold(view, request)

        if not search_term or not search_fields:
            return queryset

        search_vector = SearchVector(*search_fields, config=config)
        search_query = SearchQuery(search_term, config=config)

        if len(search_fields) == 1:
            similarity = TrigramSimilarity(*search_fields, search_term)
        else:
            similarities = map(
                lambda field: TrigramSimilarity(field, search_term), search_fields
            )
            similarity = Greatest(*similarities)

        queryset = (
            queryset.annotate(
                search=search_vector,
                rank=SearchRank(
                    search_vector,
                    search_query,
                ),
                similarity=similarity,
            )
            .filter(Q(search=search_query) | Q(similarity__gt=threshold))
            .order_by("-rank", "-similarity")
        )

        return queryset
