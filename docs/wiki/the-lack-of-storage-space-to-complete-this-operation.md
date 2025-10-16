
# 存储空间不足，无法完成此操作。

----

| Language | Message                                |
|----------|----------------------------------------|
| 简体中文 | 存储空间不足，无法处理此命令。         |
|          | 存储空间不足，无法完成此操作。         |
| 繁体中文 | 存放體空間不足，無法處理此命令。       |
| 英文     | There is not enough space on the disk. |

网络上多有酷狗(Kugoo)或魔兽争霸里抛出这个异常的案例。
清除浏览器缓存，或者设置虚拟内存可以修复。

## 案例

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message  | 存储空间不足，无法完成此操作。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| URL      | https://cashier.alipay.com/standard/gateway/ebankPay.htm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| File     | https://a.alipayobjects.com/??static/ar/arale.class-1.0.js,static/ar/arale.tmpl-1.0.js,static/ar/arale.aspect-1.0.js,static/ar/arale.array-1.1.js,static/ar/arale.hash-1.0.js,static/ar/arale.string-1.0.js,static/ar/arale.dom-1.1.js,static/ar/arale.event-1.1.js,static/ar/aralex.base-1.1.js,static/ar/arale.uri-1.0.js,static/ar/arale.http-1.1.js,static/ar/alipay.finance.AsyncHtml-1.0.js,static/ar/alipay.finance.Flexible-1.0.js,static/ar/alipay.finance.Apop-1.4.js,static/ar/aralex.utils.IframeShim-1.2.js,static/ar/arale.json2-1.0.js,static/ar/alipay.droplist-1.3.js,cashier/cashier.Icon-1.2.js,static/ar/alipay.finance.InstallmentsAndFavorable-1.5.js,cashier/cashier.module-2.19.js |
| Line     | 605                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

<!-- start-line=604; -->
```javascript
});this._xhr.onreadystatechange=function(){};if(options.timeoutTimer){clearTimeout(options.timeoutTimer);
options.timeoutTimer=null}this._response.status=this._xhr.status;if(this._xhr.status==200){this._response.text=this._xhr.responseText;
this._response.xml=this._xhr.responseXML;if(this._options.dataType=="json"){try{this._response.json=parseJSON(this._xhr.responseText)
```


----

| 异常字段 | 值                                                                                                                                                                       |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL      | https://securitycenter.alipay.com/cert/updateCert.htm                                                                                                                    |
| File     | https://static.alipay.com/build/js/sc/light.alipay.js                                                                                                                    |
| Line     | 10                                                                                                                                                                       |
| UA       | Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/4.0; GTB7.1; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; Maxthon 2.0) |
| Date     | 2011-09-25                                                                                                                                                               |

所有代码都压缩到一行，无法判断这个案例对应的代码信息。


----

故障现象一：本公司这边所有电脑都是用域来管理了，上周开始慢慢有电脑出现域用户无法正常登录？
连本地的管理员帐户也无法正常登录，系统弹出一个对话窗：

windows不能加载用户的配置文件。但是用系统的默认配置文件让您登陆。
详细信息 - 系统资源不足，无法完成请求的服务。

unerinit.exe报错。

----

故障现象二：开机正常，但电脑桌面只显640 x 480、4位色，显卡驱动正常，无法调整。
但删除显卡驱动后，显示又可以恢复正常。

用安全模式和带网络连接的安全模式可以都登录系统，查看系统日志，有如下信息：

事件：Windows不能加载注册表。这通常是由于内存或安全权限不足造成的。
详细信息：系统资源不足，无法完成请求的服务。

*解决方法如下：*

要解决此问题，请修改注册表以增大 PoolUsageMaximum 值和 PagedPoolSize 值。
为此，请按照下列步骤操作：

* 依次单击“开始”、“运行”，键入 regedit，然后单击“确定”。
* 找到并单击下面的注册表子项：
    `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management`
* 在“编辑”菜单上，指向“新建”，然后单击“DWORD 值”。
* 在“新值 #1”框中，键入 PoolUsageMaximum，然后按 Enter。
* 右键单击“PoolUsageMaximum”，然后单击“修改”。
* 在“数值数据”框中，键入 60，再单击“十进制”，然后单击“确定”。
* 如果 PagedPoolSize 注册表项存在，请转到步骤 8。
    如果 PagedPoolSize 注册表项不存在，请创建它。为此，请按照下列步骤操作：
    * 在“编辑”菜单上，指向“新建”，然后单击“DWORD 值”。
    * 在“新值 #1”框中，键入 PagedPoolSize，然后按 Enter。
* 右键单击“PagedPoolSize”，然后单击“修改”。
* 在“数值数据”框中键入 ffffffff，然后单击“确定”。
* 退出注册表编辑器，然后重新启动计算机

另类解决方法二：停用显卡。即可正常！（不推荐）

## 相关异常


## 延伸阅读
