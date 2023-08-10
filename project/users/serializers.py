from rest_framework import serializers
from users.models import NewUser
from .validators import PasswordValidator, UsernameValidator,PhoneValidator
from django.utils.translation import gettext_lazy as _
ROLE=(
      ["TG","Hướng dẫn viên"],
      ["USER","Khách hàng"],
    )
GENDER=[
      ["M","Nam"],
      ["W","Nữ"],
      ]
class CustomUserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)   
    username = serializers.CharField(
        max_length=30,
        validators=[],
    )
    password = serializers.CharField(
        max_length=30,
        validators=[],)
    full_name = serializers.CharField(max_length=150,required=True)
    
    role = serializers.ChoiceField(choices = [('TG', 'Hướng dẫn viên'), ('USER', 'Khách hàng')],required=False,default="USER")
    birth_date=serializers.DateField(required=False, allow_null=True)
    address=serializers.CharField(max_length=200,required=False, allow_null=True)
       
    gender = serializers.ChoiceField(choices=[('M', 'Nam'), ('W', 'Nữ')], required=False,default="N")
    phone = serializers.CharField(max_length=10,
          validators=[],required=False, allow_null=True)
    avatar = serializers.FileField(max_length=None,required=False, allow_null=True)
    class Meta:
        model = NewUser
        fields = ['email', 'username','password','full_name','role','birth_date','email','address','gender','phone','avatar']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
