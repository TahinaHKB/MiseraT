# Generated by Django 5.0.4 on 2024-04-16 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Platform', '0002_member_birth_member_signindate'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='profilPicture',
            field=models.ImageField(default='pictures/user.png', upload_to='profilPictures'),
        ),
    ]
