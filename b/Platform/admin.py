from django.contrib import admin
from .models import Member
# Register your models here.
class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'prename', 'email', 'password', 'signInDate', 'birth', 'profilPicture')

# Register your models here.

admin.site.register(Member, MemberAdmin)
