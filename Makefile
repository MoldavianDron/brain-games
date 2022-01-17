# This command is useful on first repo cloning 
# or after deleting 'node-modules'
install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

lint: 
	npx eslint .