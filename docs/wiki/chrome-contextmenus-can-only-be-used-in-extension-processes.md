
# Uncaught Error: chrome.contextMenus can only be used in extension processes.

----

| Language | Message                                                                      |
|----------|------------------------------------------------------------------------------|
| 英文     | Uncaught Error: chrome.contextMenus can only be used in extension processes. |

Google Chrome 插件异常。

## 案例

| 异常字段 |                                                                                                                                      |
|----------|--------------------------------------------------------------------------------------------------------------------------------------|
| Message  | Uncaught Error: chrome.contextMenus can only be used in extension processes. See the content scripts documentation for more details. |
| URL      | https://vip.alipay.com/vip/member/grow_task.htm                                                                                      |
| File     | chrome/RendererExtensionBindings#L282                                                                                                |
| UA       | Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.15 Safari/535.2                                   |

这个很奇怪，File 居然不是 `chrome-extension:` 协议的。
