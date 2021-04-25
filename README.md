# TON Tickets QR-generator
## Requirements
* [Ubuntu](https://ubuntu.com)  >= `20.04`
* [Docker](https://www.docker.com)  >= `20.x`
* [Docker Compose](https://docs.docker.com/compose/install/) >= `1.25.x`
* [Monitoring](https://github.com/kokkekpek/monitoring)  >= `1.x`

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
