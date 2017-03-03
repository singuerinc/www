# Nahuel Scotti - Portfolio
Here is what I have been working on.

[![Build Status](https://gitlab.com/singuerinc-works/com.singuerinc.www/badges/master/build.svg)](https://gitlab.com/singuerinc-works/com.singuerinc.www/commits/master)
[![Coverage Report](https://gitlab.com/singuerinc-works/com.singuerinc.www/badges/master/coverage.svg)](https://gitlab.com/singuerinc-works/com.singuerinc.www/commits/master)

This is my portfolio, a place to show some work and experiments I have
been working in the last few years.

![](screenshot.png)

## Installation

Althougth it is possible to install all dependencies on a local environment
(Node, Ruby, yarn, etc), the setup is highly optimized to work with Docker.

1. Install [Docker](https://www.docker.com/products/docker)
2. Clone the project
	
	```sh
	git clone https://gitlab.com/singuerinc-works/com.singuerinc.www.git && cd $
	cd www
	```
3. Start the Docker container

	```sh
	docker-compose up jekyll
	```

4. Open a browser and navigate to `http://localhost:4000`

## Usage example

All versions are available as Docker images.
If your idea is serve the website, start it by executing these commands:

```sh
docker login registry.gitlab.com
docker run -p 8080:80 registry.gitlab.com/singuerinc-works/com.singuerinc.www
open 'http://localhost:8080'
```

## Development setup

The project is made with [Jekyll](https://jekyllrb.com/)

The Jekyll Docker container is in charge of compile the project every
time a change is made.

A compiled version could be found in the `public` folder.

The Jekyll container also relay on another container called `webpack` that
compiles the Javascript code every time a change is done to a js file.

### Tests

#### Unit test - AVA/Javascript
Test all the Javascript code.

```sh
docker-compose run webpack yarn run test
```

#### E2E tests - CasperJS
Tests in a (headless) browser if all the pages and elements are ok.

```sh
docker-compose up tests
```

#### Links tests
Checks if all the links (internal and extenal) are working.

```sh
docker-compose run tests-links
```

## Make a change

Usually, to make a change follow the next workflow:

1. Create an Issue on GitLab
2. Create a new branch for that Issue
3. Check out the branch
4. Make your changes
5. Commit and push the changes
6. The CI build, tests, and release the feature branch to [http://test.www.singuerinc.com.surge.sh/](http://test.www.singuerinc.com.surge.sh/)
7. If the status is green, merge into `master` from GitLab.
8. The CI build, tests, and release the master branch to [http://staging.www.singuerinc.com.surge.sh/](http://staging.www.singuerinc.com.surge.sh/)
9. If the status is green, tag the `master` in GitLab.
10. The CI build, tests, and release the tag to [https://www.singuerinc.com/](https://www.singuerinc.com/)

## Release History

See [https://gitlab.com/singuerinc-works/com.singuerinc.www/blob/master/CHANGELOG](https://gitlab.com/singuerinc-works/com.singuerinc.www/blob/master/CHANGELOG)

## Meta

Nahuel Scotti – [@singuerinc](https://twitter.com/singuerinc) – nahuel.scotti@gmail.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/singuerinc/](https://github.com/singuerinc/)
