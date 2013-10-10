exports = module.exports = {
  "source": "content",
  "output": "_site",
  "theme": "theme",
  "permalink": "{{directory}}/{{filename}}",
  "navigation":[
    {
      "link":"/index.html",
      "title":"首页"
    },
    {
      "link":"/wiki",
      "title":"异常列表"
    }
  ],
  "writers": [
    "nico.PageWriter",
    "nico.PostWriter",
    "nico.FileWriter",
    "nico.StaticWriter"
  ]
}

var INTERNAL_KEY_WORD = {
  "案例": "case",
  "相关异常": "related",
  "延伸阅读": "see-also",
  "参考": "see-also"
};
var INTERNAL_REGEXP = [], _k;
for(var k in INTERNAL_KEY_WORD){
  _k = encodeURIComponent(k);
  //INTERNAL_REGEXP.push({
    //regexp: new RegExp('href="#'+k+'"', "g"),
    //value: 'href='+INTERNAL_KEY_WORD[k]+'"'
  //});
  INTERNAL_REGEXP.push({
    regexp: new RegExp('id="'+_k+'"', "g"),
    value: 'id="'+INTERNAL_KEY_WORD[k]+'"'
  });
}

exports.filters = {
  fixlink: function(html) {
    // format permalink, ends without .html
    html = html.replace(/(href="[^"]+)\.md(">)/ig, "$1$2");
    // set columns width.
    html = html.replace(/<th>Language<\/th>/g, '<th width="100">Language</th>');
    html = html.replace(/<th>Browser<\/th>/g, '<th width="100">Browser</th>');
    html = html.replace(/<th>Number<\/th>/g, '<th width="100">Number</th>');
    html = html.replace(/<th>异常字段<\/th>/g, '<th width="100">异常字段</th>');
    // fix internal relative link.
    for(var i=0,l=INTERNAL_REGEXP.length; i<l; i++){
      html = html.replace(INTERNAL_REGEXP[i].regexp, INTERNAL_REGEXP[i].value);
    }

    // TODO: 自动附加相关异常。
    return html;
  }
}
