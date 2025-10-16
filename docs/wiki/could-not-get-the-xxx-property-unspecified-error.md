
# 无法得到 XXX 属性。 未指明的错误。

----

| Language | Message                                            |
|----------|----------------------------------------------------|
| 简体中文 | 无法得到 XXX 属性。 未指明的错误。                 |
| 繁体中文 | 無法取得未定義或 Null 參考的屬性 'XXX'             |
| 英文     | Could not get the XXX property. Unspecified error. |

## 案例

| 异常字段 | 值                                       |
|----------|------------------------------------------|
| Message  | 无法得到 outerHTML 属性。 未指明的错误。 |

----

| 异常字段 | 值                                           |
|----------|----------------------------------------------|
| Message  | 無法取得未定義或 Null 參考的屬性 'innerHTML' |

----

| 异常字段 | 值                                                       |
|----------|----------------------------------------------------------|
| Message  | Could not get the outerHTML property. Unspecified error. |

## 相关异常


## 延伸阅读

* [IE7:未指明的错误，解决办法](http://samueli.iteye.com/blog/237461) - 安装了Internet Explorer 增强的安全配置的原因，
    在添加或删除程序里的添加删除WINDOWS组件里把这个Internet Explorer 增强的安全配置删除掉
* [无法设置selected属性。未指明的错误](http://hi.baidu.com/jghc/blog/item/5e28c4d7faeb9f2106088b2c.html) - IE6 select.options[x].selected = true, +setTimeout()
* [未知的运行时错误(ie6的未指明的错误)](http://www.cnblogs.com/wangxiang/articles/1653429.html) - 对 table 这种元素使用 innerHTML。
* [IE6&lt;select&gt;问题: "无法设置selected属性。未指明的错误。”](http://topic.csdn.net/u/20091104/14/ad18500c-e037-4190-a4ce-8d600e7db305.html) - IE6, 代码执行时机过早，使用 `setTimeout` 延迟执行解决。
* [Internet Explorer 错误：30 未指明的错误](http://www.luckb.com/read-1805.html) - IE6, 动态链接库异常，重新注册即可。

    ```
    regsvr32 urlmon.dll
    regsvr32 actxprxy.dll
    regsvr32 shdocvw.dll
    regsvr32 mshtml.dll
    regsvr32 browseui.dll
    regsvr32 jscript.dll
    regsvr32 vbscript.dll
    regsvr32 oleaut32.dll
    ```

    如何仍然未解决，需要注册核心 Internet Explorer DLL 文件：
    注：需要在系统安装了 Microsoft Windows XP Service Pack 2 (SP2)

    开始-运行：

    ```
    "%ProgramFiles%Internet Exploreriexplore.exe" /rereg
    ```
