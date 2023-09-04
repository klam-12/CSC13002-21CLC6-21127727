# Generated by Django 4.2.3 on 2023-09-04 09:22

import app.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='picture',
            field=models.ImageField(default='tour/defaults.png', null=True, upload_to=app.models.upload_to, verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='tour',
            name='main_picture',
            field=models.ImageField(default='tour/defaults.png', null=True, upload_to=app.models.upload_to, verbose_name='Image'),
        ),
    ]
