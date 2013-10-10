/**
 * @overview
 *
 * @author 闲耘™ (hotoo.cn[AT]gmail.com)
 * @version 2013/04/02
 */

(function(){
  function getPreviousSibling(node){
    while(node = node.previousSibling){
      switch(node.nodeType){
      case 1: // text.
        return node;
      case 3: // text.
        break;
      case 8: // comment.
        return node;
      default:
        break;
      }
      if(node.nodeType === 3){
      }
    }
  }
  function parseLineNumber(commentElement){
    var lineNode = getPreviousSibling(commentElement);
    if(lineNode.nodeType !== 8){return 1;}
    var m = (lineNode.data||"").match(/\bstart-line=([0-9]+)/);
    return m ? parseInt(m[1], 10) : 1;
  }
  function lines(elem, idx){
    // 起始行号。
    var startLineNumber = parseLineNumber(elem.parentNode);

    var code = elem.innerHTML;
    //var m = code.match(/\r\n|\r|\n/g);
    //var l = (m ? m.length : 0)+1;
    var m = code.split('\n');
    var l = m.length - 1;
    if(m[0]==""){l -= 1;}
    if(m[m.length-1]==""){l -= 1;}

    var container = document.createElement("div");
    container.className = "codes";

    var content = document.createElement("div");
    content.className = "code";

    line = document.createElement("pre");
    line.className = "line";
    line.style.width = (String(l).length+2)+"em";
    elem.style.marginLeft = (String(l).length+2)+"em";
    var ln = [];
    for(var i=startLineNumber; i<=startLineNumber+l-1; i++){
      ln.push('<a name="L'+idx+"-"+i+'" href="#L'+idx+"-"+i+'">'+i+'</a>');
    }
    if("innerText" in line && "outerHTML" in line){
      line.innerHTML = ln.join("<br/>");
    }else{
      line.innerHTML = ln.join("\n");
    }

    container.appendChild(content);
    container.appendChild(line);
    elem.parentNode.insertBefore(container, elem);
    var childNode = elem.firstChild;
    if(childNode.tagName == "CODE"){
      elem.innerHTML = childNode.innerHTML;
    }
    content.appendChild(elem);
  }

  var pre = document.getElementsByTagName("pre");
  for(var i=pre.length-1; i>=0; i--){
    lines(pre[i], i+1);
  }
})();

(function(){
  return;
  var ths = document.getElementsByTagName("th");
  for(var i=0,l=ths.length; i<l; i++){
    switch(ths[i].innerHTML){
    case 'Language':
      ths[i].width = "100";
      break;
    case 'Browser':
      ths[i].width = "80";
      break;
    case 'Number':
      ths[i].width = "120";
      break;
    case '异常字段':
      ths[i].width = "80";
      break;
    default:
      break;
    }
  }
})();
