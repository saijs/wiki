
# JavaScript 异常档案

这个项目用于收集、沉淀、分享、交流 JavaScript 异常的相关经验。

这里是原始档案，你可以直接查看 [Home.md](./docs/index.md) 或
[index.md](./docs/wiki/index.md) ，也可以查看生成好的站点页面
[saijs.github.io](https://saijs.github.io/) 或索引页
[saijs.github.io/wiki](https://saijs.github.io/wiki/)

## 目录结构

```
/- _theme
|- docs
|  |- example           -- 最小的异常案例代码演示，文件名同异常文档文件名。
|  |  |- expected-xxx-in-regular-expression.md
|  |  `- ...
|  |- public/
|  |    `- images       -- 异常用到的相关图片。
|  |- wiki/             -- 异常文档目录。
|  |  |- index.md       -- 异常文档索引。
|  |  |- expected-xxx-in-regular-expression.md
|  |  `- ...
|  `- index.md
|- Makefile
`- README.md
```

所有的异常文档均放置与 `/docs/wiki/` 目录下，异常文档的文件名建议使用异常消息
的英文版。使用小写字符，横线连接符。

异常消息中与上下文相关的变量部分使用 `XXX` 替代。

演示代码放置于 `/docs/example` 目录下，建议文件名与相关异常的文档文件名相同。

## 可以贡献什么？

1. 实际异常案例及其分析。
2. 异常分析工具、方法或经验。
3. TODO: 访问这个异常用例页面。

## 如何贡献

你可以选择下面的任意一种方式来贡献自己的知识和经验。

1. Fork 这个项目，更新、提交、推送并 Pull Request。
    （一般情况下，你只需要推送 master 分支即可。）
2. [提交 Issues](https://github.com/saijs/wiki/issues/new)。
3. 发邮件至 `hotoo.cn+javascript-exceptions[AT]gmail.com`
