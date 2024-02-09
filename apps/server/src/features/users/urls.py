from django.urls import path
from .views import AuthenticatedUserAPIView

app_label = "users"

urlpatterns = [
    path("me", AuthenticatedUserAPIView.as_view(), name="authenticated_user"),
]
