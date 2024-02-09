from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Note(models.Model):
    user = models.ForeignKey(User, verbose_name="User", on_delete=models.CASCADE)
    title = models.CharField("Title", max_length=150, blank=True, default="")
    text = models.TextField("Text", blank=True, default="")
    created_at = models.DateTimeField("Created At", auto_now_add=True)
    updated_at = models.DateTimeField("Updated At", auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Note"
        verbose_name_plural = "Notes"
