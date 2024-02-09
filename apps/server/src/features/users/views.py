from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer


class AuthenticatedUserAPIView(APIView):
    def get(self, request):
        user = request.user
        serializer = UserSerializer(instance=user)
        return Response(serializer.data)
