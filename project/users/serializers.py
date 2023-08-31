from rest_framework import serializers
from users.models import NewUser
from .validators import PasswordValidator, PhoneValidator
from django.utils.translation import gettext_lazy as _
ROLE=[
      ("TG","Hướng dẫn viên"),
      ("USER","Khách hàng"),
]
GENDER=[
      ("M","Nam"),
      ("W","Nữ"),
      ]
class CustomUserSerializer(serializers.ModelSerializer):

    # password = serializers.CharField(
    #     max_length=30,
    #     validators=[],)
    # full_name = serializers.CharField(max_length=150,required=True)
    
    role = serializers.ChoiceField(choices = ROLE,required=False,default="USER")
    # birth_date=serializers.DateField(required=False, allow_null=True)
    # address=serializers.CharField(max_length=200,required=False, allow_null=True)
       
    gender = serializers.ChoiceField(choices=GENDER, required=False,default="N")
    # phone = serializers.CharField(max_length=10,validators=[],required=False, allow_null=True)
    # avatar = serializers.FileField(max_length=None,required=False, allow_null=True)
    class Meta:
        model = NewUser
        fields = ['email','password','full_name','role','birth_date','email','address','gender','phone','avatar']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)