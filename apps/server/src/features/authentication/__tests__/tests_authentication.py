from django.urls import reverse
from django.contrib.auth import get_user_model
from rest_framework_supertest.test import APITestCase

User = get_user_model()


class JWTAuthenticationTests(APITestCase):
    url = reverse("authentication:token_obtain_pair")

    def setUp(self) -> None:
        self.username = "username"
        self.password = "password"

        self.user = User()
        self.user.username = self.username
        self.user.set_password(self.password)
        self.user.save()

    def test_a_b(self):
        response = self.client.post(
            self.url, {"username": self.username, "password": self.password}
        )

        self.assertEqual(response.status_code, 200)
