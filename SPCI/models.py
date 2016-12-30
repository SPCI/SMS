from django.db import models

# choices
Title = (
    ('Mr', 'Mr'),
    ('Mrs', 'Mrs')
)

SEX = (
    ('M', 'Male'),
    ('F', 'Female')
)

MARITAL_STATUS = (
    ('S', 'Single'),
    ('M', 'Married')
)

RELATION = (
    ('Bro', 'Brother'),
    ('Sis', 'Sister'),
    ('Cousin', 'Cousin'),
    ('Uncle', 'Uncle'),
    ('Aunt', 'Aunt')
)

SEMESTER = (
    ('1', 'First semester'),
    ('2', 'Second semester')
)


# Create your models here.
class PersonalDetails(models.Model):
    sur_name = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    other_name = models.CharField(max_length=30)
    title = models.CharField(max_length=30, choices=Title)
    date_of_birth = models.DateField()
    sex = models.CharField(max_length=30, choices=SEX)
    marital_status = models.CharField(max_length=30, choices=MARITAL_STATUS)
    home_town = models.CharField(max_length=100)
    local_gov = models.CharField(max_length=100)
    state = models.CharField(max_length=30)
    nationality = models.CharField(max_length=30, default='Nigeria')
    contact_phone = models.CharField(max_length=11)
    home_address = models.CharField(max_length=100)
    passport = models.ImageField()

    def __str__(self):
        return '%s %s' % (self.sur_name, self.first_name)


class NextOfKin(models.Model):
    sur_name = models.CharField(max_length=30)
    other_name = models.CharField(max_length=30)
    relationship = models.CharField(max_length=30, choices=RELATION)
    contact_Address = models.CharField(max_length=100)
    telephone = models.CharField(max_length=11)
    referrer = models.OneToOneField(PersonalDetails, on_delete=models.CASCADE, primary_key=True)


class Registered(models.Model):
    student = models.ForeignKey(PersonalDetails, on_delete=models.CASCADE)
    reg_num = models.CharField(max_length=30)

    def __str__(self):
        return self.reg_num


class Programme(models.Model):
    student = models.OneToOneField(Registered, on_delete=models.CASCADE)
    program = models.CharField(max_length=100, primary_key=True)
    program_code = models.CharField(max_length=4, null=True)
    duration = models.CharField(max_length=30)
    programme_fee = models.IntegerField()

    def __str__(self):
        return self.program


class PaymentDetail(models.Model):
    date = models.DateTimeField()
    description = models.CharField(max_length=100)
    receipt_num = models.CharField(max_length=4, unique=True, primary_key=True)
    programme = models.ForeignKey(Programme, on_delete=models.CASCADE)
    deposit = models.IntegerField()
    balance = models.IntegerField()
    payment_complete = models.BooleanField(default=False)


class Semester(models.Model):
    semester = models.CharField(max_length=30, primary_key=True)
    programme = models.ForeignKey(Programme, on_delete=models.CASCADE)

    def __str__(self):
        return self.semester


class Courses(models.Model):
    title = models.CharField(max_length=30, primary_key=True)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Enquiries(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    telephone = models.CharField(max_length=11)
    date = models.DateTimeField()

    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)
