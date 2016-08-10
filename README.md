# www

[![build status](https://gitlab.com/singuerinc-works/com.singuerinc.www/badges/master/build.svg)](https://gitlab.com/singuerinc-works/com.singuerinc.www/commits/master)

## Build docker image (to compile css and js)

    docker build -t singuerinc/www .

## Compile css + js

    docker run --rm -it -v $PWD:/usr/src/app --name singuerinc_www singuerinc/www gulp

## Serve inside a Docker container

```sh
docker-compose up
open 'http://localhost:4000'
```

## Test

```sh
docker run -v $PWD/public:/site 18fgsa/html-proofer /site --disable-external
```

## SSL Certificate

- Run the letsencrypt Docker container

Read before: [https://about.gitlab.com/2016/04/11/tutorial-securing-your-gitlab-pages-with-tls-and-letsencrypt/](https://about.gitlab.com/2016/04/11/tutorial-securing-your-gitlab-pages-with-tls-and-letsencrypt/)

```sh
docker run -it --rm -p 443:443 -p 80:80 --name certbot -v ~/letsencrypt/etc/letsencrypt:/etc/letsencrypt -v ~/letsencrypt/var/lib/letsencrypt:/var/lib/letsencrypt quay.io/letsencrypt/letsencrypt:latest certonly -a manual --email nahuel.scotti@gmail.com -d www.singuerinc.com
```

- Follow the instructions
- Upload the verification file
- Continue with the verification
- Upload Certificate to GitLab
- Verify: [https://www.ssllabs.com/ssltest/analyze.html?d=blog.singuerinc.com&latest](https://www.ssllabs.com/ssltest/analyze.html?d=www.singuerinc.com&latest)
