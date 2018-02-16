install:
	npm install

start:
	npm run babel-node src/bin/brain-even.js
	
lint:
	npm run eslint .

build:
	npm run build

publish:
	npm publish
