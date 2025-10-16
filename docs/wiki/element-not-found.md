
# 找不到元素。

----

| Language | Message      |
|----------|--------------|
| 简体中文 | 找不到元素。 |

由客户端安装、卸载不同版本、类型的浏览器造成。类似问题应该 try/catch 并尝试提醒用户。

客户端解决办法：

* 打开注册表 `HKEY_CLASSES_ROOT/TypeLib/{EAB22AC0-30C1-11CF-A7EB-0000C05BAE0B}/1.1/0/win32`
* 将 (默认)/(Default) 项的值 `C:/WINDOWS/system32/shdocvw.dll` 改成 `C:/WINDOWS/system32/ieframe.dll`

## 案例


## 相关异常


## 延伸阅读

* [IE7报错，找不到元素](http://blog.csdn.net/zjl5231123/article/details/4027422)
* [网页上有错误 找不到元素 解决办法](http://hi.baidu.com/rrliushui/blog/item/f5438ecb82fec0f452664fac.html/cmtid/e78f6222557456ab4623e883)
* [IE8新建选项卡“网页有错误，找不到元素”](http://answers.microsoft.com/zh-hans/ie/forum/ie8-windows_xp/ie8%E6%96%B0%E5%BB%BA%E9%80%89%E9%A1%B9%E5%8D%A1%E7%BD%91%E9%A1%B5%E6%9C%89%E9%94%99%E8%AF%AF%E6%89%BE%E4%B8%8D%E5%88%B0%E5%85%83%E7%B4%A0/d5e3e2c3-60e4-4aac-be46-41d63a3bb0f7)
* [解决IE7 添加收藏功能报“找不到元素”问题](http://www.cnblogs.com/jimmydm/archive/2009/05/15/1457932.html)
* [IE7 找不到元素](http://www.dearda.com/index.php/archives/446)
