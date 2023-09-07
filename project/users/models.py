from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.exceptions import ValidationError
from .validators import PasswordValidator,PhoneValidator

def upload_to(instance, filename):
    return 'users/{filename}'.format(filename=filename)

class CustomAccountManager(BaseUserManager):
    def create_superuser(self, email,  password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email=email, password=password, **other_fields)

    def create_user(self, email, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an user_name address'))

        if not password:
            raise ValueError(_('You must provide an password address'))

        password_validator = PasswordValidator()
        try:
            password_validator.validate(password)
        except ValidationError as e:
            raise ValidationError({'password': e.message})

        user = self.model(email=email, **other_fields)
        user.set_password(password)
        user.save()
        return user

class NewUser(AbstractBaseUser, PermissionsMixin):

    password_validator = PasswordValidator()
    password = models.CharField(_("password"),
        max_length=100,
        help_text=_(
            "Min 3 char and max 30 char. No special characters allowed"
        ),
        validators=[],)
    full_name = models.CharField(max_length=150, blank=True)
    ROLE=(
      ("TG","Hướng dẫn viên"),
      ("USER","Khách hàng"),
    )
    role=models.CharField(max_length=30,choices=ROLE,default="Khách hàng")
    birth_date=models.DateField(null=True)
    email = models.EmailField(_('email address'), unique=True)
    address=models.CharField(max_length=200,null=True)
    GENDER=[
      ("M","Nam"),
      ("W","Nữ"),
      ]   
    gender = models.CharField(max_length=30,choices=GENDER,default="Nam")
    phone_validator = PhoneValidator()
    phone = models.CharField(max_length=10,
        help_text=_(
              "Số điện thoại là số có 10 chữ số"
          ),
          validators=[phone_validator],)
    avatar = models.ImageField(_("Image"), upload_to=upload_to, default='users/defaults.png',null=True)
  
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_(
        'about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [ 'full_name']

    def __str__(self):
        return self.full_name
