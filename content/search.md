# 搜索

- template: search.html

----

<!-- http://fis.io/ajax-google-custom-search-engine.html -->

<div id='cse' style='width: 100%;'>正在加载...</div>

<script src='//www.google.com/jsapi' type='text/javascript'></script>
<script type='text/javascript'>
function getQueryString(query, key){
  var q = query.replace(/^\?/, "");
  var list = q.split("&");
  var k = key + "=";

  for(var i=0,l=list.length; i<l; i++){
    if(list[i].indexOf(k) === 0){
      return list[i].replace(k, "");
    }
  }
  return null;
}
google.load('search', '1', {language: 'zh-Hans', style: google.loader.themes.V2_DEFAULT});
google.setOnLoadCallback(function() {
  var customSearchOptions = {};
  var orderByOptions = {};
  orderByOptions['keys'] = [{label: 'Relevance', key: ''} , {label: 'Date', key: 'date'}];
  customSearchOptions['enableOrderBy'] = true;
  customSearchOptions['orderByOptions'] = orderByOptions;
  var customSearchControl =   new google.search.CustomSearchControl('010739172100154220412:vnb-hg9epu0', customSearchOptions);
  customSearchControl.setResultSetSize(google.search.Search.SMALL_RESULTSET);
  var options = new google.search.DrawOptions();
  options.setAutoComplete(true);
  customSearchControl.draw('cse', options);

  var key = getQueryString(location.search, "key");
  if(key){
    customSearchControl.execute(decodeURIComponent(key));
  }
}, true);
</script>
<style type='text/css'>
  .gsc-control-cse {
    font-family: Arial, sans-serif;
    border-color: #FFFFFF;
    background-color: #FFFFFF;
  }
  .gsc-control-cse .gsc-table-result {
    font-family: Arial, sans-serif;
  }
  input.gsc-input, .gsc-input-box, .gsc-input-box-hover, .gsc-input-box-focus {
    border-color: #D9D9D9;
  }
  input.gsc-search-button, input.gsc-search-button:hover, input.gsc-search-button:focus {
    border-color: #666666;
    background-color: #CECECE;
    background-image: none;
    filter: none;

  }
  .gsc-tabHeader.gsc-tabhInactive {
    border-color: #FF9900;
    background-color: #FFFFFF;
  }
  .gsc-tabHeader.gsc-tabhActive {
    border-color: #E9E9E9;
    background-color: #E9E9E9;
    border-bottom-color: #FF9900
  }
  .gsc-tabsArea {
    border-color: #FF9900;
  }
  .gsc-webResult.gsc-result, .gsc-results .gsc-imageResult {
    border-color: #FFFFFF;
    background-color: #FFFFFF;
  }
  .gsc-webResult.gsc-result:hover, .gsc-imageResult:hover {
    border-color: #FFFFFF;
    background-color: #FFFFFF;
  }
  .gs-webResult.gs-result a.gs-title:link, .gs-webResult.gs-result a.gs-title:link b, .gs-imageResult a.gs-title:link, .gs-imageResult a.gs-title:link b  {
    color: #0000CC;
  }
  .gs-webResult.gs-result a.gs-title:visited, .gs-webResult.gs-result a.gs-title:visited b, .gs-imageResult a.gs-title:visited, .gs-imageResult a.gs-title:visited b {
    color: #0000CC;
  }
  .gs-webResult.gs-result a.gs-title:hover, .gs-webResult.gs-result a.gs-title:hover b, .gs-imageResult a.gs-title:hover, .gs-imageResult a.gs-title:hover b {
    color: #0000CC;
  }
  .gs-webResult.gs-result a.gs-title:active, .gs-webResult.gs-result a.gs-title:active b, .gs-imageResult a.gs-title:active, .gs-imageResult a.gs-title:active b {
    color: #0000CC;
  }
  .gsc-cursor-page {
    color: #0000CC;
  }
  a.gsc-trailing-more-results:link {
    color: #0000CC;
  }
  .gs-webResult .gs-snippet, .gs-imageResult .gs-snippet, .gs-fileFormatType {
    color: #000000;
  }
  .gs-webResult div.gs-visibleUrl, .gs-imageResult div.gs-visibleUrl {
    color: #008000;
  }
  .gs-webResult div.gs-visibleUrl-short {
    color: #008000;
  }
  .gs-webResult div.gs-visibleUrl-short  {
    display: none;
  }
  .gs-webResult div.gs-visibleUrl-long {
    display: block;
  }
  .gs-promotion div.gs-visibleUrl-short {
    display: none;
  }
  .gs-promotion div.gs-visibleUrl-long  {
    display: block;
  }
  .gsc-cursor-box {
    border-color: #FFFFFF;
  }
  .gsc-results .gsc-cursor-box .gsc-cursor-page {
    border-color: #E9E9E9;
    background-color: #FFFFFF;
    color: #0000CC;
  }
  .gsc-results .gsc-cursor-box .gsc-cursor-current-page {
    border-color: #FF9900;
    background-color: #FFFFFF;
    color: #0000CC;
  }
  .gsc-webResult.gsc-result.gsc-promotion {
    border-color: #336699;
    background-color: #FFFFFF;
  }
  .gsc-completion-title {
    color: #0000CC;
  }
  .gsc-completion-snippet {
    color: #000000;
  }
  .gs-promotion a.gs-title:link,.gs-promotion a.gs-title:link *,.gs-promotion .gs-snippet a:link  {
    color: #0000CC;
  }
  .gs-promotion a.gs-title:visited,.gs-promotion a.gs-title:visited *,.gs-promotion .gs-snippet a:visited {
    color: #0000CC;
  }
  .gs-promotion a.gs-title:hover,.gs-promotion a.gs-title:hover *,.gs-promotion .gs-snippet a:hover  {
    color: #0000CC;
  }
  .gs-promotion a.gs-title:active,.gs-promotion a.gs-title:active *,.gs-promotion .gs-snippet a:active {
    color: #0000CC;
  }
  .gs-promotion .gs-snippet, .gs-promotion .gs-title .gs-promotion-title-right, .gs-promotion .gs-title .gs-promotion-title-right * {
    color: #000000;
  }
  .gs-promotion .gs-visibleUrl,.gs-promotion .gs-visibleUrl-short  {
    color: #008000;
  }
</style>
