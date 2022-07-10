from django.contrib import admin
from django.urls import path
from demo_server import views

urlpatterns = [
    path('483650905687263869583748572945/', admin.site.urls),
    path('', views.home,name='home'),
    path('aboutus', views.aboutus,name='aboutus'),
    path('login', views.login,name='login'),
]