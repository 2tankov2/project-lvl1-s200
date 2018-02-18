install:
	npm install

start:
	npm run babel-node src/bin/brain-progression.js

lint:
	npm run eslint .

build:
	npm run build

publish:
	npm publish
