from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/<str:email>', views.hello, name='hello'),
]