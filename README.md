# TON Tickets QR-generator
## Requirements
* Ubuntu 20.04
* Docker
* Docker Compose
* [Monitoring](https://github.com/kokkekpek/monitoring)

## Installation
### Install packages
```sh
cd app
yarn install
```

### Copy config.example.json to config.json and edit
```sh
cp config.example.json config.json
```

### Run configurator
```sh
sh ./configurator.sh
```

### Run
```sh
docker-compose up -d
```
