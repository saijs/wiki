
# Variable uses an Automation type not supported in JavaScript

----

| Language | Message                                                      |
|----------|--------------------------------------------------------------|
| 简体中文 | 变量使用了一个 JavaScript 中不支持的 Automation 类型         |
| 简体中文 | 变量使用了一个 JScript 中不支持的 Automation 类型            |
| 英文     | Variable uses an Automation type not supported in JavaScript |
| 英文     | Variable uses an Automation type not supported in JScript    |
| 繁体中文 | 此變數使用了 JScript 不支援的 Automation 型態                |


已知 `eval()` 方法及 `ActiveXObject()` 在 IE9 中可能会抛出这个异常。


## 案例

```js
eval("_TMP_FOR_EVAL_ = function (event){ showContinueContextMenu(event)}")
```

上面这个在 IE8 中工作正常，但是在 IE9 中抛出异常。
可以使用下面的替代方案：

```js
this.ownerDocument.defaultView.eval("_TMP_FOR_EVAL_ = function (event){ showContinueContextMenu(event)}")
```


## 相关异常


## 参考

* [无法从子窗口中访问父窗口的位置对象](http://support.microsoft.com/kb/314209)
* [IE9 RC giving errors - Variable uses an automation type not supported in Javascript](http://answers.microsoft.com/en-us/ie/forum/ie9-windows_7/ie9-rc-giving-errors-variable-uses-an-automation/7e34fca5-aa31-4a25-b136-8c58b2fd9dfb)
* [Variable uses an Automation type not supported in JScript](http://stackoverflow.com/questions/6551198/variable-uses-an-automation-type-not-supported-in-jscript)
