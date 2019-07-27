FROM python:3.7

RUN apt-get update

WORKDIR /core
COPY requirements.txt /core
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]