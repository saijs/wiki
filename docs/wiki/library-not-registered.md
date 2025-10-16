
# 库没有注册。

----

| Language | Message                 |
|----------|-------------------------|
| 简体中文 | 库没有注册。            |
| 英文     | Library not registered. |

客户端修复方案：Windows -> Run

```
regsvr32 vbscript.dll
```


## 案例

PPS 和 QQ 也会遇到类似的情况，

![](../public/images/pps-not-reg.png)

![](../public/images/qq-not-reg.png)

Windows -> Run:

```
regsvr32 %systemroot%\system32\Macromed\Flash\Flash10b.ocx
```

通常是因为您的计算机系统有重要DLL文件注册丢失，需要重新注册。通常注册一下动态链接库就可以了：

```
regsvr32 scrrun.dll
regsvr32 jscript.dll
regsvr32 vbscript.dll
```

如果仍然不行，不知道是哪个动态链接库问题有问题，可以在命令行下执行：

```
for %1 in (%windir%\system32\*.dll) do regsvr32.exe /s %1
```

## 相关异常


## 延伸阅读
