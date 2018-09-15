INPUT_FOLDER=./html
OUTPUT_FOLDER=./html/_site


all:
	jekyll build -s $(INPUT_FOLDER) -d $(OUTPUT_FOLDER)

regenerative:
	jekyll build -s $(INPUT_FOLDER) -d $(OUTPUT_FOLDER) --watch