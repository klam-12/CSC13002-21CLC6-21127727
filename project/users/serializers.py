from rest_framework import serializers
from users.models import NewUser
from .validators import PasswordValidator, UsernameValidator,PhoneValidator
from django.utils.translation import gettext_lazy as _

class CustomUserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)   
    username = serializers.CharField(
        max_length=30,
        validators=[UsernameValidator()],
    )
    password = serializers.CharField(
        max_length=30,
        validators=[PasswordValidator()],)
    full_name = serializers.CharField(max_length=150,required=True)
    ROLE=(
      ("TG","Hướng dẫn viên"),
      ("USER","Khách hàng"),
    )
    role = serializers.ChoiceField(choices = ROLE,required=False,default="USER")
    birth_date=serializers.DateField(required=False)
    address=serializers.CharField(max_length=200,required=False)
    GENDER=[
      ("M","Nam"),
      ("W","Nữ"),
      ]   
    gender = serializers.ChoiceField(choices=GENDER, required=False,default="N")
    phone = serializers.CharField(max_length=10,
          validators=[PhoneValidator()],required=False)
    avatar = serializers.FileField(max_length=None,)
    class Meta:
        model = NewUser
        fields = ('email', 'username','password','full_name','role','birth_date','email','address','gender','phone','avatar')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
