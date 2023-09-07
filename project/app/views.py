from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class ReactView(APIView):

  def get(self,request):
    # output = [{'employee': output.employee,
    #           "department": output.department}
    #           for output in React.objects.all()]
    # output = React.objects.all()
    # listt=ReactSerializer(output,many=True)
    return Response(data='hi',status=status.HTTP_200_OK)

  # def post(self,request):
  #   serializer = ReactSerializer(data=request.data)
  #   if serializer.is_valid(raise_exception=True):
  #     serializer.save()
  #     return Response(serializer.data)