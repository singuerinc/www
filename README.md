# singuerinc / www

## Build docker image

    docker build -t singuerinc/www .

## Compile css + js

    docker run --rm -it -v $PWD:/usr/src/app --name singuerinc_www singuerinc/www gulp

## Server

    docker run --rm -it -v "$PWD/src:/src" -p 4000:4000 grahamc/jekyll serve -H 0.0.0.0

## Build

    docker run --rm -it -v "$PWD/src:/src" -v "$PWD/public:/public" -p 4000:4000 grahamc/jekyll build
    docker run --rm -it -v "$PWD:/src" -v "$PWD/public:/public" grahamc/jekyll build

## Serve static

    docker run --rm -it -v $PWD/public:/usr/share/nginx/html:ro -p 8080:80 nginx
