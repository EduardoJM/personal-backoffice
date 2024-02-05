from django.urls import path, include

urlpatterns = [
    path('auth/', include('features.authentication.urls')),
]
