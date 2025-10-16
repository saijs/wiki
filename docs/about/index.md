# 关于

这是一个关于 JavaScript 异常的收集、分析、并提供解决方案的网站，收录各种常见的 JavaScript 异常档案。

----

注： MSDN 等网站的 URL 中可能带有英文括号`()`，这与 Markdown 链接语法有冲突。

解决方案 I：转义字符。

- `(`: `%28`
- `)`: `%29`

```
// 例如
[name](https://www.example.com/link/to/path_with(parentheses))

// 改为
[name](https://www.example.com/link/to/path_with%28parentheses%29)
```

解决方案 II：使用备注链接形式。

```
// 例如
[name](https://www.example.com/link/to/path_with(parentheses))

// 改为
[name][1]
[1]: https://www.example.com/link/to/path_with(parentheses)
```