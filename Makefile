install:
	npm install

run:
	npm run babel-node -- 'src/bin/hexlet.js' 10

test:
	npm test

watch:
	npm test -- --watch

build:
	rm -rf dist
	npm run build

check-types:
	npm run flow

publish:
	npm publish

lint:
	npm run eslint .
