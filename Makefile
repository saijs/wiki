
watch:
	@nico server --watch
build: clear
	@nico build
publish: build
	@ghp-import _site
	@git push origin gh-pages
clear:
	@rm -rf _site
