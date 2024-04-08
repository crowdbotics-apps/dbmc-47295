from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import testconnectorViewSet

router = DefaultRouter()
router.register("testconnector", testconnectorViewSet, basename="testconnector")

urlpatterns = [
    path("connectors/", include(router.urls)),
]
