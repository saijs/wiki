define(function(require) {
  var $ = require("gallery/jquery/1.8.2/jquery");
  var JS_ERROR = require("./jserr");
  //var codes = require("./codes");

  // permalink on headers.
  $(".entry-content h2, .entry-content h3, .entry-content h4, .entry-content h5").each(function(index, item) {
    var $item = $(item);
    var link = [
      '<a class="title-permalink" title="Permalink to this title" href="#',
      $item.attr('id'),
      '">¶</a>'
    ].join('');
    $item.append(link);
  });

  /**
   * 将异常消息实体转换为通用的异常消息，去除实体特征。
   * @param {String} key, 实体异常消息。
   * @return {String} 通用异常消息。
   */
  function filterKey(key){
    return key;
  }

  $("input.search").keydown(function(evt){
    if(evt.which !== 13){return;}
    var key = this.value;
    key = filterKey(key);
    if(JS_ERROR.hasOwnProperty(key)){
      location.href = "/wiki/"+JS_ERROR[key]+".html";
    }else{
      location.href = "/search?key="+encodeURIComponent(key);
    }
    evt.preventDefault();
  });
});
