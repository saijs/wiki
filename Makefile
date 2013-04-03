html = _site
tmpfile = tmp.tar.gz
publish:
	@rm -f ${tmpfile}
	@nico build
	@tar --exclude='.git/*' -czf ${tmpfile} ${html}
	@curl -F name=awa -F file=@${tmpfile} http://site.alipay.im/repository/upload/site
	@rm -f ${tmpfile}
build:
	@nico build
server:
	@nico server --watch
