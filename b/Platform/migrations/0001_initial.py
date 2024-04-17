# Generated by Django 5.0.4 on 2024-04-16 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('prename', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=1000)),
                ('password', models.CharField(max_length=200)),
            ],
        ),
    ]
