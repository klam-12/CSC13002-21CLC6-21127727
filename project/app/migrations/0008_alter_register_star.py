# Generated by Django 4.2.3 on 2023-08-30 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0007_alter_register_star"),
    ]

    operations = [
        migrations.AlterField(
            model_name="register",
            name="star",
            field=models.IntegerField(
                blank=True, choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], null=True
            ),
        ),
    ]
