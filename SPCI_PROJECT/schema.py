import graphene
import SPCI.schema
from graphene_django.debug import DjangoDebug


class Query(SPCI.schema.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass
    debug = graphene.Field(DjangoDebug, name='__debug')


schema = graphene.Schema(query=Query)
