from django.conf import settings
from django.db import models


class RecipientInformation(models.Model):
    "Generated Model"
    recipient_name = models.CharField(
        max_length=255,
    )
    email = models.EmailField(
        unique=True,
        max_length=254,
    )
    addition_time = models.DateTimeField(
        auto_now_add=True,
    )
