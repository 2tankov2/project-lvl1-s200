install:
	npm install

start:
	npm run babel-node src/bin/brain-prime.js

lint:
	npm run eslint .

build:
	npm run build

publish:
	npm publish
