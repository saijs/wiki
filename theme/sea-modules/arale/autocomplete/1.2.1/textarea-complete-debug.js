define("arale/autocomplete/1.2.1/textarea-complete-debug", [ "$-debug", "lepture/selection/0.9.0/selection-debug", "./autocomplete-debug", "arale/overlay/1.0.1/overlay-debug", "arale/position/1.0.0/position-debug", "arale/iframe-shim/1.0.1/iframe-shim-debug", "arale/widget/1.0.3/widget-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug", "arale/widget/1.0.3/templatable-debug", "gallery/handlebars/1.0.0/handlebars-debug", "./data-source-debug", "./filter-debug", "./autocomplete-debug.tpl" ], function(require, exports, module) {
    var $ = require("$-debug");
    var selection = require("lepture/selection/0.9.0/selection-debug");
    var AutoComplete = require("./autocomplete-debug");
    var TextareaComplete = AutoComplete.extend({
        attrs: {
            cursor: false
        },
        setup: function() {
            TextareaComplete.superclass.setup.call(this);
            this.sel = selection(this.get("trigger"));
            var inputFilter = this.get("inputFilter"), that = this;
            this.set("inputFilter", function(val) {
                var v = val.substring(0, that.sel.cursor()[1]);
                return inputFilter.call(that, v);
            });
            if (this.get("cursor")) {
                this.mirror = Mirror.init(this.get("trigger"));
                this.dataSource.before("getData", function() {
                    that.mirror.setContent(that.get("inputValue"), that.queryValue, that.sel.cursor());
                });
            }
        },
        _keyUp: function(e) {
            if (this.get("visible")) {
                e.preventDefault();
                if (this.get("data").length) {
                    this._step(-1);
                }
            }
        },
        _keyDown: function(e) {
            if (this.get("visible")) {
                e.preventDefault();
                if (this.get("data").length) {
                    this._step(1);
                }
            }
        },
        _keyEnter: function(e) {
            // 如果没有选中任一一项也不会阻止
            if (this.get("visible")) {
                if (this.currentItem) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    // 阻止冒泡及绑定的其他 keydown 事件
                    this.selectItem();
                } else {
                    this.hide();
                }
            }
        },
        show: function() {
            var cursor = this.get("cursor");
            if (cursor) {
                if ($.isArray(cursor)) {
                    var offset = cursor;
                } else {
                    var offset = [ 0, 0 ];
                }
                var pos = this.mirror.getFlagRect();
                var align = this.get("align");
                align.baseXY = [ pos.left + offset[0], pos.bottom + offset[1] ];
                align.selfXY = [ 0, 0 ];
                this.set("align", align);
            }
            TextareaComplete.superclass.show.call(this);
        },
        selectItem: function() {
            this.hide();
            var item = this.currentItem, index = this.get("selectedIndex"), data = this.get("data")[index];
            if (item) {
                var matchKey = item.attr("data-value");
                var right = this.sel.cursor()[1];
                var left = right - this.queryValue.length;
                this.sel.cursor(left, right).text("").append(matchKey, "right");
                var value = this.get("trigger").val();
                this.set("inputValue", value);
                this.mirror && this.mirror.setContent(value, "", this.sel.cursor());
                this.trigger("itemSelect", data);
                this._clear();
            }
        }
    });
    // 计算光标位置
    // MIT https://github.com/ichord/At.js/blob/master/js/jquery.atwho.js
    var Mirror = {
        mirror: null,
        css: [ "overflowY", "height", "width", "paddingTop", "paddingLeft", "paddingRight", "paddingBottom", "marginTop", "marginLeft", "marginRight", "marginBottom", "fontFamily", "borderStyle", "borderWidth", "wordWrap", "fontSize", "lineHeight", "overflowX" ],
        init: function(origin) {
            origin = $(origin);
            var css = {
                position: "absolute",
                left: -9999,
                top: 0,
                zIndex: -2e4,
                "white-space": "pre-wrap"
            };
            $.each(this.css, function(i, p) {
                return css[p] = origin.css(p);
            });
            this.mirror = $("<div><span></span></div>").css(css).insertAfter(origin);
            return this;
        },
        setContent: function(content, query, cursor) {
            var left = query ? cursor[1] - query.length : cursor[1];
            var right = cursor[1];
            var v = [ "<span>", content.substring(0, left), "</span>", '<span id="flag">', query || "", "</span>", "<span>", content.substring(right), "</span>" ].join("");
            this.mirror.html(v);
            return this;
        },
        getFlagRect: function() {
            var pos, rect, flag;
            flag = this.mirror.find("span#flag");
            pos = flag.position();
            rect = {
                left: pos.left,
                right: flag.width() + pos.left,
                top: pos.top,
                bottom: flag.height() + pos.top
            };
            return rect;
        }
    };
    module.exports = TextareaComplete;
});

define("arale/autocomplete/1.2.1/data-source-debug", [ "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug", "$-debug" ], function(require, exports, module) {
    var Base = require("arale/base/1.0.1/base-debug");
    var $ = require("$-debug");
    var DataSource = Base.extend({
        attrs: {
            source: null,
            type: "array"
        },
        initialize: function(config) {
            DataSource.superclass.initialize.call(this, config);
            // 每次发送请求会将 id 记录到 callbacks 中，返回后会从中删除
            // 如果 abort 会清空 callbacks，之前的请求结果都不会执行
            this.id = 0;
            this.callbacks = [];
            var source = this.get("source");
            if (isString(source)) {
                this.set("type", "url");
            } else if ($.isArray(source)) {
                this.set("type", "array");
            } else if ($.isPlainObject(source)) {
                this.set("type", "object");
            } else if ($.isFunction(source)) {
                this.set("type", "function");
            } else {
                throw new Error("Source Type Error");
            }
        },
        getData: function(query) {
            return this["_get" + capitalize(this.get("type") || "") + "Data"](query);
        },
        abort: function() {
            this.callbacks = [];
        },
        // 完成数据请求，getData => done
        _done: function(data) {
            this.trigger("data", data);
        },
        _getUrlData: function(query) {
            var that = this, options;
            var obj = {
                query: query ? encodeURIComponent(query) : "",
                timestamp: new Date().getTime()
            };
            var url = this.get("source").replace(/{{(.*?)}}/g, function(all, match) {
                return obj[match];
            });
            var callbackId = "callback_" + this.id++;
            this.callbacks.push(callbackId);
            if (/^(https?:\/\/)/.test(url)) {
                options = {
                    dataType: "jsonp"
                };
            } else {
                options = {
                    dataType: "json"
                };
            }
            $.ajax(url, options).success(function(data) {
                if ($.inArray(callbackId, that.callbacks) > -1) {
                    delete that.callbacks[callbackId];
                    that._done(data);
                }
            }).error(function() {
                if ($.inArray(callbackId, that.callbacks) > -1) {
                    delete that.callbacks[callbackId];
                    that._done({});
                }
            });
        },
        _getArrayData: function() {
            var source = this.get("source");
            this._done(source);
            return source;
        },
        _getObjectData: function() {
            var source = this.get("source");
            this._done(source);
            return source;
        },
        _getFunctionData: function(query) {
            var that = this, func = this.get("source");
            // 如果返回 false 可阻止执行
            function done(data) {
                that._done(data);
            }
            var data = func.call(this, query, done);
            if (data) {
                this._done(data);
            }
        }
    });
    module.exports = DataSource;
    function isString(str) {
        return Object.prototype.toString.call(str) === "[object String]";
    }
    function capitalize(str) {
        return str.replace(/^([a-z])/, function(f, m) {
            return m.toUpperCase();
        });
    }
});

define("arale/autocomplete/1.2.1/filter-debug", [ "$-debug" ], function(require, exports, module) {
    var $ = require("$-debug");
    var Filter = {
        "default": function(data, query, options) {
            var result = [];
            $.each(data, function(index, item) {
                var o = {}, matchKey = getMatchKey(item, options);
                if ($.isPlainObject(item)) {
                    o = $.extend({}, item);
                }
                o.matchKey = matchKey;
                result.push(o);
            });
            return result;
        },
        // options: {
        //   key: 'value'
        // }
        startsWith: function(data, query, options) {
            var result = [], l = query.length, reg = new RegExp("^" + escapeKeyword(query));
            if (!l) return [];
            $.each(data, function(index, item) {
                var o = {}, matchKey = getMatchKey(item, options);
                if ($.isPlainObject(item)) {
                    o = $.extend({}, item);
                }
                // 生成 item
                // {
                //   ...   // self property
                //   matchKey: '', // 匹配的内容
                //   highlightIndex: [] // 高亮的索引
                // }
                if (reg.test(matchKey)) {
                    o.matchKey = matchKey;
                    if (l > 0) {
                        o.highlightIndex = [ [ 0, l ] ];
                    }
                    result.push(o);
                }
            });
            return result;
        },
        stringMatch: function(data, query, options) {
            query = query || "";
            var result = [], l = query.length;
            if (!l) return [];
            $.each(data, function(index, item) {
                var o = {}, matchKey = getMatchKey(item, options);
                if ($.isPlainObject(item)) {
                    o = $.extend({}, item);
                }
                if (matchKey.indexOf(query) > -1) {
                    o.matchKey = matchKey;
                    o.highlightIndex = stringMatch(matchKey, query);
                    result.push(o);
                }
            });
            return result;
        }
    };
    module.exports = Filter;
    function getMatchKey(item, options) {
        if ($.isPlainObject(item)) {
            // 默认取对象的 value 属性
            var key = options && options.key || "value";
            return item[key] || "";
        } else {
            return item;
        }
    }
    function stringMatch(matchKey, query) {
        var r = [], a = matchKey.split("");
        var queryIndex = 0, q = query.split("");
        for (var i = 0, l = a.length; i < l; i++) {
            var v = a[i];
            if (v == q[queryIndex]) {
                if (queryIndex === q.length - 1) {
                    r.push([ i - q.length + 1, i + 1 ]);
                    queryIndex = 0;
                    continue;
                }
                queryIndex++;
            } else {
                queryIndex = 0;
            }
        }
        return r;
    }
    // 转义正则关键字
    var keyword = /(\[|\[|\]|\^|\$|\||\(|\)|\{|\}|\+|\*|\?)/g;
    function escapeKeyword(str) {
        return (str || "").replace(keyword, "\\$1");
    }
});

define("arale/autocomplete/1.2.1/autocomplete-debug.tpl", [], '<div class="{{classPrefix}}">\n    <ul class="{{classPrefix}}-ctn" data-role="items">\n        {{#each items}}\n            <li data-role="item" class="{{../classPrefix}}-item" data-value="{{matchKey}}">{{highlightItem ../classPrefix matchKey}}</li>\n        {{/each}}\n    </ul>\n</div>\n');
