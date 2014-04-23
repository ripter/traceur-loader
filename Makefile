.PHONEY:

all: build

build: node_modules

node_modules:
	npm install
