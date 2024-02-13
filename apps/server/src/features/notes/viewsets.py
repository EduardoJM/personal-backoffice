from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.renderers import BaseRenderer
from core.fulltextsearch import FullTextSearchFilter
from .models import Note
from .serializers import NoteSerializer


class MarkdownRenderer(BaseRenderer):
    media_type = "text/markdown"
    format = "md"

    def render(self, data, accepted_media_type=None, renderer_context=None):
        return data


class NoteViewSet(ModelViewSet):
    serializer_class = NoteSerializer
    filter_backends = [FullTextSearchFilter]
    search_config = "portuguese"
    search_fields = ["text", "title"]
    similarity_threshold = 0.3

    def get_queryset(self):
        return Note.objects.filter(user=self.request.user).order_by("-updated_at").all()

    @action(methods=["GET"], detail=True, renderer_classes=[MarkdownRenderer])
    def text(self, request, pk=None):
        note = self.get_object()
        return Response(note.text)
