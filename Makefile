INPUT_FOLDER=./html
OUTPUT_FOLDER=./html/_site
DOCKER ?= OFF # If set to ON jekyll container is used to build and serve
JEKYLL = jekyll

ifeq (${DOCKER},ON)
	JEKYLL = docker run --network=host -v "$(shell pwd)":/srv/jekyll jekyll/jekyll jekyll
endif

all:
	$(JEKYLL) build -s $(INPUT_FOLDER) -d $(OUTPUT_FOLDER)

regenerative:
	$(JEKYLL) build -s $(INPUT_FOLDER) -d $(OUTPUT_FOLDER) --watch

serve:
	$(JEKYLL) serve build -s $(INPUT_FOLDER) -d $(OUTPUT_FOLDER) --watch
