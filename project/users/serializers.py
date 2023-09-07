from rest_framework import serializers
from users.models import NewUser
from .validators import PasswordValidator, PhoneValidator
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import authenticate
from django.core.exceptions import ValidationError
ROLE=[
      ("TG","Hướng dẫn viên"),
      ("USER","Khách hàng"),
]
GENDER=[
      ("M","Nam"),
      ("W","Nữ"),
      ]
def validate_password(password):
    if not any(char.isdigit() for char in password):
        raise ValidationError(_("The password must contain at least one digit."))
    if not any(char.isalpha() for char in password):
        raise ValidationError(_("The password must contain at least one letter."))
    if len(password) < 9:
        raise ValidationError(_("The password must be at least 9 characters long."))
    if len(password) > 30:
        raise ValidationError(_("The password cannot exceed 30 characters."))
     
class CustomUserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(max_length=100, required=True)
    password = serializers.CharField(
    max_length=30,
    write_only=True,  
    required=True,
    validators=[validate_password],  
    )
    phone = serializers.CharField(
    max_length=10,
    required=False,
    allow_null=True,
    )

    def validate_email(self, value):
    # Check if the email is already in use
        if NewUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value

    def validate_phone(self, value):
        # Custom phone number validation
        if value:
            if not value.isdigit():
                raise serializers.ValidationError("Phone number must contain only digits.")
            if len(value) != 10:
                raise serializers.ValidationError("Phone number must have exactly 10 digits.")
        return value

    class Meta:
        model = NewUser
        fields = ['email', 'password', 'full_name', 'role', 'birth_date', 'address', 'gender', 'phone', 'avatar']
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