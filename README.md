## Running

Install [docker-compose](https://docs.docker.com/compose/install/)

```
docker-compose build
docker-compose up

docker run -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=docker library/postgres
```

- [http://127.0.0.1:8000](http://127.0.0.1:8000) is the Django app
- [http://127.0.0.1:3000](http://127.0.0.1:3000) is the React app
