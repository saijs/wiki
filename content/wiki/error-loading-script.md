
# Error loading script

----

| Language | Message              | Browser |
|----------|----------------------|---------|
| 英文     | Error loading script | Firefox |

这个异常一般出现在 Firefox 浏览器中，在页面加载脚本失败的时候抛出。

加载失败的原因有多种，比如：

* 防火墙阻挡了请求，常见于使用外部 CDN 资源造成，墙出没注意。
* 发送 json/jsonp 请求的地址、参数不正确。
* 服务器不稳定或出现异常，常见于异步装载脚本。
* 用户行为导致浏览器误认为页面跳转而 abrot 请求。

## 案例

## 相关异常

## 延伸阅读

* [Firefox: “Error loading script”](http://stackoverflow.com/questions/1087518/firefox-error-loading-script)
* [Firefox 'Error loading script' loading Google Analytics in FF2](http://stackoverflow.com/questions/192570/firefox-error-loading-script-loading-google-analytics-in-ff2)
* ["Error loading script" errors in Firefox](http://help.airbrake.io/discussions/suggestions/335-error-loading-script-errors-in-firefox)
* [Firefox 'Error loading script ' issue when implementing GA scripts.](http://groups.google.com/a/googleproductforums.com/forum/#!category-topic/analytics/discuss-tracking-and-implementation-issues/cDyJXTH4dLE)
