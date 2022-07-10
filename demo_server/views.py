from django.shortcuts import render,HttpResponse
from demo_server.models import Login
from datetime import datetime
# Create your views here.
def home(request):
    return render(request, 'home.html')

def aboutus(request):
    return render(request, 'aboutus.html')

def login(request):
    if (request.method=='POST'):
        username = request.POST.get('username')
        password = request.POST.get('password')
        login = Login(username = username, password=password, date=datetime.today())
        login.save()
        return render(request, 'home.html')
    else:
        return render(request, 'login.html')
