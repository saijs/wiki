
# 意外地调用了方法或属性访问。 - 演示

- template: index.html

----

````html
<table>
</table>
    <tbody id="tbody">
    </tbody>
````

````js
window.onload = function(){
    var row = document.createElement("tr");
    document.getElementById("tbody").appendChild(row);
};
````
