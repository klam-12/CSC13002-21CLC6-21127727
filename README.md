# CSC13002-21CLC6-21127727
# How to import the required libraries
We will use the venv provided to run this project, the venv is located in the root of the project, to activate it you must run the following command:
```bash
python -m venv venv
source venv/bin/activate
```

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

# How to run the project backend
To run the project you must run the following command:
```powershell
pip install django
pip install pymysql
pip install djangorestframework
pip install django-cors-headers
pip install djangorestframework-simplejwt
pip install Pillow
```

```powershell
cd .\project\
python manage.py makemigrations
python manage.py makemigrations user
python manage.py makemigrations app
python manage.py migrate
python manage.py runserver
```

# How to run project frontend
Open another terminal and run the following commands:
```powershell
cd .\frontend\
npm install -force
npm start
```
