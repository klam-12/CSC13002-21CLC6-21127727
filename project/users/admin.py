from django.contrib import admin
from users.models import NewUser
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models


class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ('email', 'username', 'full_name',)
    list_filter = ('email', 'username', 'full_name', 'is_active', 'is_staff','avatar')
    ordering = ('-start_date',)
    list_display = ('email',  'full_name',
                    'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ['email',  'full_name','avatar''avatar']}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {'fields': ('about',)}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields':['email',  'full_name', 'password',  'is_active', 'is_staff','role']}
         ),
    )


admin.site.register(NewUser,UserAdminConfig)