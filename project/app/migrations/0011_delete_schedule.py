# Generated by Django 4.2.3 on 2023-08-02 12:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0010_rename_start_register_star"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Schedule",
        ),
    ]
