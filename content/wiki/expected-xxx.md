
# 缺少 'XXX'

----

| Language | Message            |
|----------|--------------------|
| 简体中文 | 缺少 'XXX'         |
| 繁体中文 | 必須要有 ‘XXX'    |
| 日文     | '}' がありません。 |
| 英文     | Expected ')'       |
| 韩文     | '}'가 필요합니다.  |
| 德文     | '}' erwartet       |

## 案例

* 缺少 ']'
* 必須要有 ']'
* 缺少 '}'
* 缺少 ':'

多见于数组或对象的语法错误，提示缺少括号，但也有可能是有逗号造成。

----

| 异常字段 | 值           |
|----------|--------------|
| Message  | 缺少 'catch' |

try/catch 语法错误。


----

| 异常字段 | 值       |
|----------|----------|
| Message  | 缺少 '}' |

```javascript
if(false){
  // do something.
// } // missing '}'
```


----

| Browser | Language | Message                                                                                                                                                                                                                | Number |
|---------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| IE      | 简体中文 | 缺少 '}'                                                                                                                                                                                                               |        |
| Firefox | 英文     | missing } in compound statement                                                                                                                                                                                        |        |
| Chrome  | 英文     | Uncaught SyntaxError: Unexpected end of input                                                                                                                                                                          |        |
| Safari  | 英文     | SyntaxError: Expected token '}'                                                                                                                                                                                        |        |
| Opera   | 英文     | Syntax error at line 4 while loading:<br/>//}<br/>^<br/>expected expression, got &lt;end of file&gt; &nbsp; &nbsp; &nbsp; &nbsp; // } <br/> &nbsp; &nbsp; &nbsp; &nbsp; ^ <br/> expected expression, got <end of file> |        |

同样的异常脚本，放在不同的场景中，会抛出不同的异常信息。例如：

```javascript
try{
  if(false){
    // do something.
  //}
}catch(ex){}
```

| Browser | Language | Message                                                                                                                                                                        | Number |
|---------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| IE      | 简体中文 | 语法错误                                                                                                                                                                       |        |
| Firefox | 英文     | catch without try                                                                                                                                                              |        |
| Chrome  | 英文     | Uncaught SyntaxError: Unexpected token catch                                                                                                                                   |        |
| Safari  | 英文     | SyntaxError: Unexpected token 'catch'                                                                                                                                          |        |
| Opera   | 英文     | Syntax error at line 6 while loading: <br/> &nbsp; &nbsp; &nbsp; &nbsp; }catch(ex){}&nbsp; <br/> &nbsp; &nbsp; &nbsp; &nbsp; _^ <br/> expected expression, got keyword 'catch' |        |


----

| 异常字段 | 值       |
|----------|----------|
| Message  | 缺少 ']' |

```javascript
var a = [1,2;
```

| Browser | Language | Message                                                                                                                                                      | Number |
|---------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| IE      | 简体中文 | 缺少 ']'                                                                                                                                                     |        |
| Firefox | 英文     | missing ] after element list                                                                                                                                 |        |
| Chrome  | 英文     | Uncaught SyntaxError: Unexpected token ;                                                                                                                     |        |
| Safari  | 英文     | SyntaxError: Expected token ']'                                                                                                                              |        |
| Opera   | 英文     | Syntax error at line 2 while loading: <br/> &nbsp; &nbsp; &nbsp; &nbsp; var a = [1,2; <br/> &nbsp; &nbsp; &nbsp; &nbsp; ----------------^ <br/> syntax error |        |


----

| 异常字段 | 值       |
|----------|----------|
| Message  | 缺少 ')' |

```javascript
if(false{}
```

| Browser | Language | Message                                                                                                                                                        | Number |
|---------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| IE      | 简体中文 | 缺少 ')'                                                                                                                                                       |        |
| Firefox | 英文     | missing ) after condition                                                                                                                                      |        |
| Chrome  | 英文     | Uncaught SyntaxError: Unexpected token {                                                                                                                       |        |
| Safari  | 英文     | SyntaxError: Expected token ')'                                                                                                                                |        |
| Opera   | 英文     | Syntax error at line 2 while loading: <br/> &nbsp; &nbsp; &nbsp; &nbsp; if(false{} <br/> &nbsp; &nbsp; &nbsp; &nbsp; ------------^ <br/> expected ')', got '{' |        |


----

| 异常字段 | 值       |
|----------|----------|
| Message  | 缺少 ':' |

```javascript
var o = {a};
```

| Browser | Language | Message                                                                                                                                                 | Number |
|---------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| IE      | 简体中文 | 缺少 ':'                                                                                                                                                |        |
| Firefox | 英文     | invalid object initializer                                                                                                                              |        |
| Chrome  | 英文     | Uncaught SyntaxError: Unexpected token }                                                                                                                |        |
| Safari  | 英文     | SyntaxError: Expected an identifier but found '}' instead                                                                                               |        |
| Opera   | 英文     | Syntax error at line 2 while loading: <br/> &nbsp; &nbsp; &nbsp; &nbsp; var o = { a }; <br/> &nbsp; &nbsp; &nbsp; &nbsp; ----------^ <br/> syntax error |        |

## 相关异常

* [语法错误](syntax-error.md)

##  参考

* [JScript 缺少 ':'](http://www.0djx.com/article/20100307/5259.html)
