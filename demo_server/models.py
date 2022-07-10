from django.db import models

# Create your models here.
class Login(models.Model):
    username = models.CharField(max_length=15)
    password = models.CharField(max_length=15)
    date = models.DateField()

    def __str__(self):
        return self.username
