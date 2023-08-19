from django.utils.translation import gettext_lazy as _
from django.core import validators
from django.core.exceptions import ValidationError

class PasswordValidator(validators.RegexValidator):
    regex=r'^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$',
    message=_("Password must contain both letters, numbers"),
    flags = 0
    
    def validate(self, password, user=None):
        temp = password
        if len(password) < 9:
            raise ValidationError("Password must be at least 9 characters.")
        if len(password) > 30:
            raise ValidationError("Password can't exceed 30 characters.")
        if not any(char.isdigit() for char in password):
            raise ValidationError("Password must contain at least 1 digit.")
        if not any(char.isalpha() for char in password):
            raise ValidationError("Password must contain at least 1 letter.")


    def get_help_text(self):
        return (
            "Your password must be at least 9 characters, contain least one letter, one digit "
           
        )
    
    
class PhoneValidator(validators.RegexValidator):
  regex = r'^[0-9]{10}$'
  message = _(
    "Số điện thoại là số có 10 chữ số"
  )
  flags = 0
  
  def validate(self, phone):
    if len(phone) != 10:
        raise ValidationError("Số điện thoại phải có 10 số")
    if not all(char.isdigit() for char in phone):
        raise ValidationError("Số điện thoại chỉ chứa chữ số")