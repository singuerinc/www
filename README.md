# www

[![build status](https://gitlab.com/singuerinc-works/com.singuerinc.www/badges/master/build.svg)](https://gitlab.com/singuerinc-works/com.singuerinc.www/commits/master)
[![coverage report](https://gitlab.com/singuerinc-works/com.singuerinc.www/badges/master/coverage.svg)](https://gitlab.com/singuerinc-works/com.singuerinc.www/commits/master)

## Serve inside a Docker container

```sh
docker-compose up jekyll
open 'http://localhost:4000'
```

## Test

```sh
docker-compose up tests
docker-compose up tests-links
```