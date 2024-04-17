from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from datetime import datetime
from django.forms import ModelForm, TextInput, PasswordInput, DateInput, EmailInput

# Create your models here.
class Member(models.Model):
    name = models.CharField(max_length=20)
    prename = models.CharField(max_length=50)
    email = models.CharField(max_length=1000)
    password = models.CharField(max_length=200)
    signInDate = models.DateField(default = datetime.now)
    birth = models.DateField(default = datetime.now)
    profilPicture = models.ImageField(upload_to='profilPictures', default='pictures/user.png')