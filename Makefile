# This command is useful on first repo cloning 
# or after deleting 'node-modules'
install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run