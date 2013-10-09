
watch:
	@nico server --watch
build:
	@nico build
publish: build
	@ghp-import _site
	@git push origin gh-pages
