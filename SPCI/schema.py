from graphene import relay, ObjectType, AbstractType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from .models import PersonalDetails, NextOfKin, Programme, PaymentDetail, Semester, Courses, Enquiries, Registered


class PersonalDetailNode(DjangoObjectType):
    class Meta:
        model = PersonalDetails
        filter_fields = ['sur_name', 'first_name']
        interfaces = (relay.Node,)


class RegisteredNode(DjangoObjectType):
    class Meta:
        model = Registered
        filter_fields = ['reg_num']
        interfaces = (relay.Node,)


class NextOfKinNode(DjangoObjectType):
    class Meta:
        model = NextOfKin
        filter_fields = ['sur_name', 'other_name']
        interfaces = (relay.Node,)


class ProgrammeNode(DjangoObjectType):
    class Meta:
        model = Programme
        filter_fields = ['program', 'duration']
        interfaces = (relay.Node,)


class PaymentDetailNode(DjangoObjectType):
    class Meta:
        model = PaymentDetail
        filter_fields = ['payment_complete', 'balance', 'receipt_num']
        interfaces = (relay.Node,)


class SemesterNode(DjangoObjectType):
    class Meta:
        model = Semester
        filter_fields = ['semester']
        interfaces = (relay.Node,)


class CoursesNode(DjangoObjectType):
    class Meta:
        model = Courses
        filter_fields = ['title', 'semester']
        interfaces = (relay.Node,)


class EnquiriesNode(DjangoObjectType):
    class Meta:
        model = Enquiries
        filter_fields = ['telephone']
        interfaces = (relay.Node,)


class Query(AbstractType):
    personalDetail = relay.Node.Field(PersonalDetailNode)
    all_personalDetail = DjangoFilterConnectionField(PersonalDetailNode)

    registered = relay.Node.Field(RegisteredNode)
    all_Registered = DjangoFilterConnectionField(RegisteredNode)

    nextOfKin = relay.Node.Field(NextOfKinNode)
    all_nextOfKin = DjangoFilterConnectionField(NextOfKinNode)

    programme = relay.Node.Field(ProgrammeNode)
    all_programme = DjangoFilterConnectionField(ProgrammeNode)

    paymentDetail = relay.Node.Field(PaymentDetailNode)
    all_paymentDetail = DjangoFilterConnectionField(PaymentDetailNode)

    semester = relay.Node.Field(SemesterNode)
    all_semester = DjangoFilterConnectionField(SemesterNode)

    courses = relay.Node.Field(CoursesNode)
    all_courses = DjangoFilterConnectionField(CoursesNode)

    enquiries = relay.Node.Field(EnquiriesNode)
    all_enquiries = DjangoFilterConnectionField(EnquiriesNode)
