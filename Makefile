sitefolder = ~/Sites/errors.totorojs.org/

build:
	@nico build
watch:
	@nico server --watch
publish: build
	@cd ${sitefolder}; git add .
	@cd ${sitefolder}; git ci -m "U: update javascript exceptions archives."
	@cd ${sitefolder}; git push origin gh-pages
