from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MemberSerializer
from .models import Member
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

class MemberView(viewsets.ModelViewSet):
    serializer_class = MemberSerializer
    queryset = Member.objects.all()

@api_view(['GET'])
def hello(request, email):
    email = email+"@gmail.com"
    member = Member.objects.get(email=email)
    return Response({'password' : member.password})