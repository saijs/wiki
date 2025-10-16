
# 未執行

----

| Language | Message            |
|----------|--------------------|
| 繁体中文 | 未執行             |

现象：正常情况下应该会执行到的代码，实际未执行，并抛出未执行的异常。

有已知案例是由于客户端动态链接库不正常造成的，修复这个动态链接库即可。

Windows -> Run:

```
regsvr32 VBScript.dll
regsvr32 JScript.dll
```

## 案例

| 异常字段 | 值                                                                                                                                                            |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL      | https://memberexprod.alipay.com/home/exterfaceAssign.htm                                                                                                      |
| File     | https://static.alipay.com/build/js/app/tracker.js                                                                                                             |
| Date     | 2011/8/12                                                                                                                                                     |
| UA       | Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; QQPinyinSetup 620; GTB6.6; SE 2.X; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; SE 2.X) |

## 相关异常


## 延伸阅读

* [IE浏览器Javascript脚本不执行的解决办法](http://cjiecy.blog.163.com/blog/static/5500670200905114749621/)
