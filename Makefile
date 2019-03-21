DOCKER ?= OFF # If set to ON jekyll container is used to build and serve
JEKYLL = jekyll

ifeq (${DOCKER},ON)
	JEKYLL = docker run --network=host -v "$(shell pwd)":/srv/jekyll jekyll/jekyll jekyll
endif

all:
	$(JEKYLL) build

regenerative:
	$(JEKYLL) build --watch

deploy:
	$(JEKYLL) serve --host=0.0.0.0 build --watch

serve:
	$(JEKYLL) serve build --watch
