from django.utils.translation import gettext_lazy as _
from django.core import validators
from django.core.exceptions import ValidationError

class PasswordValidator(validators.RegexValidator):
    regex=r'^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@%^*()_~+\-=[\]{}<>])(?=.*[0-9])[a-zA-Z0-9!@%^*()_~+\-=[\]{}<>]{9,30}$',
    message=_("Password must contain both letters, numbers, and special characters."),
    flags = 0
    
    def validate(self, password, user=None):
        temp = password
        if len(password) < 9:
            raise ValidationError("Password must be at least 9 characters.")
        if len(password) > 30:
            raise ValidationError("Password can't exceed 30 characters.")
        if not any(char.isdigit() for char in password):
            raise ValidationError("Password must contain at least one digit.")
        if not any(char.islower() for char in password):
            raise ValidationError("Password must contain at least one lowercase letter.")
        if not any(char.isupper() for char in temp):
            raise ValidationError("Password must contain at least one uppercase letter.")
        if not any(char in "!@%^*()_~+-=[]{}<>" for char in password):
            raise ValidationError("Password must contain at least one of the following special characters: ! @ % ^ * ( ) _ ~ + - = [ ] { } < >.")

    def get_help_text(self):
        return (
            "Your password must be at least 9 characters, contain one lowercase letter, "
            "one uppercase letter, one digit, and one of the following special characters: "
            "! @ % ^ * ( ) _ ~ + - = [ ] { } < >."
        )
        
class UsernameValidator(validators.RegexValidator):
    regex = r"^[A-Za-z0-9]{3,30}$"
    message = _(
        "Min 3 char and max 30 char. No special characters allowed"
    )
    flags = 0
    
    
class PhoneValidator(validators.RegexValidator):
  regex = r'^[0-9]{10}$'
  message = _(
    "Số điện thoại là số có 10 chữ số"
  )
  flags = 0
  
  def validate(self, phone):
    if len(phone) != 0:
        raise ValidationError("Số điện thoại phải có 10 số")
    if not all(char.isdigit() for char in phone):
        raise ValidationError("Số điện thoại chỉ chứa chữ số")