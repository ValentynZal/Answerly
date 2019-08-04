FROM python:3.7

ENV PYTHONNUNBUFFERED 1

RUN apt-get update
RUN pip install --upgrade pip

RUN mkdir /core
WORKDIR /core
COPY . /core/

RUN pip install -r requirements.txt