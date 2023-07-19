from rest_framework import serializers
from .models import *
from rest_framework.views import APIView

class ReactSerializer(serializers.ModelSerializer):
  class Meta:
    model = React
    fields = ['employee','department']

