
# 'XXX' is not an object

`eval`, `setTimeout`, `setIntever` 等方法中的代码执行失败。

```js
setTimeout(function(){
    if($.browser.msie){
        $('.ovy').animate({top:"0"})
    }
},ct);
```

## 案例

## 相关异常

## 参考

* [TypeError: 'undefined' is not an object (evaluating '$.browser.msie')](http://stackoverflow.com/questions/14518300/typeerror-undefined-is-not-an-object-evaluating-browser-msie)
