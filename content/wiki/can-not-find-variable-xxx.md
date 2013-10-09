
# ReferenceError: Can't find variable: BdPlayer

----

| Language | Message                  |
|----------|--------------------------|
| 英文     | Can't find variable: XXX |


`iPad (iPad; CPU OS 7_0 like Mac OS X) BaiduHD` 浏览器，`onerror` 事件可能有问题，
如果监测 `window.onerror` 事件，会不停抛出异常。

建议：在浏览器修复这个问题前用 UA 判断 `BaiduHD` 并做相应处理。


## 案例

| 异常字段 | 值                                                                                                                           |
|----------|------------------------------------------------------------------------------------------------------------------------------|
| URL      | http://v.pptv.com/show/M7kcmwNp2Rd6ibAQ.html                                                                                 |
| File     | -                                                                                                                            |
| Line     | 1                                                                                                                            |
| UA       | Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A406 Safari/8536.25 |


## 相关异常

* ReferenceError: Can't find variable: BdPlayer
* TypeError: 'undefined' is not an object (evaluating 'window.frames[xxx].Player['url']')
* ReferenceError: Can't find variable: Player

相关代码

```js
window.onerror = function(message, url, line){
  alert(message); //注意：会死循环
}
```

## 延伸阅读
