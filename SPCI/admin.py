from django.contrib import admin
from .models import *


# Register your models here.
class NextOfKinInline(admin.StackedInline):
    model = NextOfKin


class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'telephone', 'date')
    list_filter = ['date']
    search_fields = ['telephone']


class ProgrammeAdmin(admin.ModelAdmin):
    list_display = ('student', 'program', 'duration', 'programme_fee')
    list_filter = ['duration', 'program']
    search_fields = ['student']


class PaymentAdmin(admin.ModelAdmin):
    list_display = ('date', 'description', 'receipt_num', 'programme',  'deposit', 'balance')
    list_filter = ['date']
    search_fields = ['receipt_num']


class PersonalDetailsAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Personal Details', {'fields': [
            'sur_name',
            'first_name',
            'other_name',
            'title',
            'date_of_birth',
            'sex',
            'marital_status',
            'home_town',
            'local_gov',
            'state',
            'nationality',
            'contact_phone',
            'home_address',
            'passport'
        ]}),
    ]
    inlines = [NextOfKinInline]
    list_display = ('sur_name', 'first_name', 'contact_phone', 'home_address')
    list_filter = ['sex', 'state']
    search_fields = ['sur_name']


admin.site.register(PersonalDetails, PersonalDetailsAdmin)
admin.site.register(Programme, ProgrammeAdmin)
admin.site.register(PaymentDetail, PaymentAdmin)
admin.site.register(Enquiries, EnquiryAdmin)
admin.site.register(Semester)
admin.site.register(Courses)
admin.site.register(Registered)