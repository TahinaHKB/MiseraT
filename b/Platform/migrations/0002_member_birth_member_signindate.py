# Generated by Django 5.0.4 on 2024-04-16 16:47

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Platform', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='birth',
            field=models.DateField(default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='member',
            name='signInDate',
            field=models.DateField(default=datetime.datetime.now),
        ),
    ]
