# Generated by Django 4.2.3 on 2023-08-17 05:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('register_date', models.DateField(null=True)),
                ('comment', models.CharField(max_length=200, null=True)),
                ('star', models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], default=5)),
                ('acc_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='register_accid', to=settings.AUTH_USER_MODEL)),
                ('tour_startdate_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='register_tourstartdateid', to='app.tourstartdate')),
            ],
        ),
        migrations.DeleteModel(
            name='Schedule',
        ),
    ]
