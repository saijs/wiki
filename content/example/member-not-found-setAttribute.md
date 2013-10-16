
# jQuery attr setting

- template: index.html

----

<div style="display:none">

<form id="idform">
  <fieldset id="idfieldset">
    <label id="idlabel">label</label>
    <input id="idinput" />
    <select id="idselect">
      <optgroup id="idoptgroup">
        <option id="idoption">opt</option>
      </optgroup>
    </select>
    <textarea id="idtextarea"></textarea>
    <button id="idbutton">button</button>
  </fieldset>
  <a id="ida">a link</a>
  <div id="iddiv">div</div>
</form>

</div>

jQuery.attr() set:
<div id="output-jqset"></div>

----

JavaScript setAttribute():
<div id="output-jsset"></div>

<script type="text/javascript">
var jsset = function( elem, value, name ) {
    return elem.setAttribute(name, value);
}

var jqset = function( elem, value, name ) {
    // Set the existing or create a new attribute node
    var ret = elem.getAttributeNode( name );
    if ( !ret ) {
        ret = document.createAttribute( name );
        elem.setAttributeNode( ret );
    }
    return ( ret.nodeValue = value + "" );
}

var tags = [
  "form", "input", "select", "label", "textarea", "button",
  "option", "optgroup", "fieldset", "a", "div"
];
var attrs = [
"autocomplete",
    "autofocus",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "width",
    "height",
    "list",
    "min",
    "max",
    "multipie",
    "novalidate",
    "pattern",
    "placeholder",
    "required",
    "step",
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-controls",
    "aria-describedby",
    "aria-disabled",
    "aria-dropeffect",
    "aria-expanded",
    "aria-flowto",
    "aria-grabbed",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext"
];

var output_jq = document.getElementById("output-jqset");
var output_js = document.getElementById("output-jsset");

for(var j=0,m=attrs.length; j<m; j++){
    for(var i=0,l=tags.length; i<l; i++){
        try{
            jsset(document.getElementById("id"+tags[i]), "", attrs[j]);
        }catch(exjs){
            output_js.innerHTML += tags[i]+"["+attrs[j]+"]: "+exjs.message+"<br/>";
        }
        try{
            jqset(document.getElementById("id"+tags[i]), "", attrs[j]);
        }catch(ex){
            output_jq.innerHTML += tags[i]+"["+attrs[j]+"]: "+ex.message+"<br/>";
        }
    }
}

</script>
