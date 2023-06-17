create-network:
	docker network create main

remove-network:
	docker network rm main
start-redis:
	docker-compose -f docker-compose.redis.yml up -d

start-app:
	docker-compose -f docker-compose.app.yml up -d

build-redis:
	docker-compose -f docker-compose.redis.yml build

build-app:
	docker-compose -f docker-compose.app.yml build

build:
	make build-redis && make build-app

start:
	make create-network && make start-redis && make start-app

up:
	make build && make start

stop-redis:
	docker-compose -f docker-compose.redis.yml down

stop-app:
	docker-compose -f docker-compose.app.yml down

down:
	make stop-app && make stop-redis && make remove-network