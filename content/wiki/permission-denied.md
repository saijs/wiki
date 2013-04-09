
# 没有权限

----

| Language | Message               |
|----------|-----------------------|
| 简体中文 | 没有权限              |
| 繁体中文 | 沒有使用權限          |
| 英文     | Permission denied     |
| 韩文     | 사용 권한이 없습니다. |

* 跨域访问资源，常见的是访问不同域的框架页 (frame,iframe)。
* AJAX 跨域访问。

同主域的系统，可以通过设置为同一主域达到同源：

```javascript
document.domain = "alipay.com";
```

## 案例

| 异常字段 | 值                                                 |
|----------|----------------------------------------------------|
| Message  | Permission denied                                  |
| URL      | https://auth.alipay.com/login/certCheck.htm        |
| File     | https://static.alipay.com/build/js/sc/itruscert.js |
| Line     | 1                                                  |


----

| 异常字段 | 值                                     |
|----------|----------------------------------------|
| Message  | 沒有使用權限                           |
| URL      | https://auth.alipay.com/login/home.htm |
| File     | https://auth.alipay.com/login/home.htm |
| Line     | 289                                    |

相关代码

<!-- start-line=278; -->
```javascript
//设置定时控制外层高度变化自适应
var adjust_ = function(){
    var adjust_ = parent_.adjust;
    if(adjust_){
        adjust_.showLogin();
        system.auth.adjustheight(ISCENTER);
        setTimeout(function(){
            $('J_safeSignCheck').setStyle('zoom','1') && $('btn-submit').parent().setStyle('zoom','1');
            adjust_.heightAdjust(22);
        },500);
        timeId && clearTimeout(timeId);
     }else{
        timeId = setTimeout(arguments.callee,500);
    }
};
```


----

| 异常字段 | 值                                          |
|----------|---------------------------------------------|
| Message  | 사용 권한이 없습니다.                       |
| Message  | 没有权限                                    |
| URL      | https://auth.alipay.com/login/index.htm     |
| File     | https://static.alipay.com/build/js/um/um.js |
| Line     | 1                                           |

## 相关异常

* [拒绝访问。](access-is-denied.md)

## 延伸阅读

* [js提示“没有权限”的问题](http://kinglyhum.iteye.com/blog/565230)
* [看看baidu是如何AJAX跨域的](http://topic.csdn.net/u/20081224/09/26aff992-d0ba-4f6f-a023-e0e96ecbe1fc.html)
* [Google Analytics统计代码出现JavaScript没有权限错误](http://www.zhujun.org/web/google-analytics-javascript-permission-denied/)
* [解决js在iframe页面跨域提示没有权限的方法](http://hi.baidu.com/slandi/blog/item/f8462cc6aafa0fd7d0006039.html)
