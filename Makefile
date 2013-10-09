
watch:
	@nico server --watch
build:
	@nico build
publish: clear build
	@ghp-import _site
	@git push origin gh-pages
clear:
	@rm -rf _site
