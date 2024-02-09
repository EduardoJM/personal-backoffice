from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .viewsets import NoteViewSet

app_label = "notes"

router = SimpleRouter()
router.register("", NoteViewSet, "Note")

urlpatterns = [
    path("", include(router.urls)),
]
