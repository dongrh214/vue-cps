webpackJsonp([2,33],{2:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.Mark=void 0;var d=c(7),e=function(g){return g&&g.__esModule?g:{default:g}}(d);b.Mark=e.default},3:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(e){var f=document.createElement('div');return f.innerHTML=e,f.innerText||f.textContent};b.default={data:function(){return{mark:''}},ready:function(){this.mark=window.marked(c(this.$el.getElementsByClassName('ex-mark-text')[0].innerHTML))}}},4:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,'\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: "#";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: "!";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n','',{version:3,sources:['/./docs/views/mark.vue'],names:[],mappings:';AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,oBAAoB;IACpB,eAAe;CAClB;AACD;IACI,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,eAAe;CAClB;AACD;IACI,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;CACpB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;IACnB,cAAc;IACd,oBAAoB;IACpB,cAAc;CACjB;AACD;IACI,UAAU;CACb;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,6EAA6E;IAC7E,gBAAgB;CACnB;AACD;IACI,gBAAgB;IAChB,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,2BAA2B;IAC3B,aAAa;IACb,iCAAiC;CACpC;AACD;IACI,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,aAAa;IACb,kBAAkB;IAClB,iCAAiC;CACpC;AACD;IACI;QACI,UAAU;KACb;CACJ',file:'mark.vue',sourcesContent:['\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: "#";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: "!";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n'],sourceRoot:'webpack://'}])},5:function(a,b,c){var d=c(4);'string'==typeof d&&(d=[[a.id,d,'']]);var e=c(10)(d,{});d.locals&&(a.exports=d.locals)},6:function(a,b){a.exports='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class="marked">\n    <div>\n        {{{mark}}}\n    </div>\n    <slot></slot>\n</div>\n'},7:function(a,b,c){var d,e,f={};c(5),d=c(3),Object.keys(d).some(function(h){return'default'!==h&&'__esModule'!==h})&&console.warn('[vue-loader] docs/views/mark.vue: named exports in *.vue files are ignored.'),e=c(6),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default);var g='function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports;e&&(g.template=e),g.computed||(g.computed={}),Object.keys(f).forEach(function(h){var i=f[h];g.computed[h]=function(){return i}})},346:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(2),e=c(8);b.default={components:{rdCardGroup:e.rdCardGroup,rdCard:e.rdCard,rdTag:e.rdTag,Mark:d.Mark}}},424:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,'\n.ex-caxh-content {\n    background: #f5f5f5;\n    padding: 1rem;\n}\n','',{version:3,sources:['/./docs/views/basic/card.vue'],names:[],mappings:';AACA;IACI,oBAAoB;IACpB,cAAc;CACjB',file:'card.vue',sourcesContent:['\n.ex-caxh-content {\n    background: #f5f5f5;\n    padding: 1rem;\n}\n'],sourceRoot:'webpack://'}])},431:function(a,b,c){var d=c(424);'string'==typeof d&&(d=[[a.id,d,'']]);var e=c(10)(d,{});d.locals&&(a.exports=d.locals)},614:function(a,b){a.exports='\n\n\n\n\n\n\n<div class="ex-content">\n    <div class="ex-card">\n    <mark>\n        <textarea class="ex-mark-text">\n# Card \u5361\u7247\n\n\u7B80\u5355\u7684\u5E03\u5C40\u5361\u7247\n\n### \u793A\u4F8B\n        </textarea>\n    </mark>\n    <div class="ex-card-content">\n        <xh-card title="\u666E\u901A\u5361\u7247\u6807\u9898">\n            <p>\n                \u5F53\u60A8\u4F7F\u7528 Google \u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u5904\u7406\u6709\u5173\u60A8\u5B9E\u9645\u6240\u5728\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u4F1A\u4F7F\u7528\u5404\u79CD\u6280\u672F\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u8FD9\u4E9B\u6280\u672F\u5305\u62EC IP \u5730\u5740\u3001GPS \u4EE5\u53CA\u80FD\u591F\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\u7684\u5176\u4ED6\u4F20\u611F\u5668\uFF08\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u4E3A Google \u63D0\u4F9B\u9644\u8FD1\u8BBE\u5907\u3001Wi-Fi \u63A5\u5165\u70B9\u548C\u57FA\u7AD9\u7684\u4FE1\u606F\uFF09\u3002\n            </p>\n        </xh-card>\n        <xh-card>\n            <p>\u6CA1\u6709\u6807\u9898</p>\n            <p>\n                \u5F53\u60A8\u4F7F\u7528 Google \u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u5904\u7406\u6709\u5173\u60A8\u5B9E\u9645\u6240\u5728\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u4F1A\u4F7F\u7528\u5404\u79CD\u6280\u672F\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u8FD9\u4E9B\u6280\u672F\u5305\u62EC IP \u5730\u5740\u3001GPS \u4EE5\u53CA\u80FD\u591F\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\u7684\u5176\u4ED6\u4F20\u611F\u5668\uFF08\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u4E3A Google \u63D0\u4F9B\u9644\u8FD1\u8BBE\u5907\u3001Wi-Fi \u63A5\u5165\u70B9\u548C\u57FA\u7AD9\u7684\u4FE1\u606F\uFF09\u3002\n            </p>\n        </xh-card>\n\n        <xh-card-group>\n            <xh-card class="xh-col-sm-24"  title="\u5728 xh-card-group \u4E2D\u7684\u5361\u7247">\n                <p>\n                    \u5F53\u60A8\u4F7F\u7528 Google \u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u5904\u7406\u6709\u5173\u60A8\u5B9E\u9645\u6240\u5728\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u4F1A\u4F7F\u7528\u5404\u79CD\u6280\u672F\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u8FD9\u4E9B\u6280\u672F\u5305\u62EC IP \u5730\u5740\u3001GPS \u4EE5\u53CA\u80FD\u591F\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\u7684\u5176\u4ED6\u4F20\u611F\u5668\uFF08\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u4E3A Google \u63D0\u4F9B\u9644\u8FD1\u8BBE\u5907\u3001Wi-Fi \u63A5\u5165\u70B9\u548C\u57FA\u7AD9\u7684\u4FE1\u606F\uFF09\u3002\n                </p>\n            </xh-card>\n            <xh-card class="xh-col-sm-24"  title="\u5728 xh-card-group \u4E2D\u7684\u5361\u7247">\n                <p>\n                    \u5F53\u60A8\u4F7F\u7528 Google \u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u5904\u7406\u6709\u5173\u60A8\u5B9E\u9645\u6240\u5728\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u4F1A\u4F7F\u7528\u5404\u79CD\u6280\u672F\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u8FD9\u4E9B\u6280\u672F\u5305\u62EC IP \u5730\u5740\u3001GPS \u4EE5\u53CA\u80FD\u591F\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\u7684\u5176\u4ED6\u4F20\u611F\u5668\uFF08\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u4E3A Google \u63D0\u4F9B\u9644\u8FD1\u8BBE\u5907\u3001Wi-Fi \u63A5\u5165\u70B9\u548C\u57FA\u7AD9\u7684\u4FE1\u606F\uFF09\u3002\n                </p>\n            </xh-card>\n        </xh-card-group>\n        <xh-card-group>\n            <xh-card class="xh-col-sm-24" title="\u5728 xh-card-group \u4E2D\u7684\u5361\u7247" bg-color="#1ae5ff" font-color="#fff">\n                <p>\n                    \u5F53\u60A8\u4F7F\u7528 Google \u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u5904\u7406\u6709\u5173\u60A8\u5B9E\u9645\u6240\u5728\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u4F1A\u4F7F\u7528\u5404\u79CD\u6280\u672F\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u8FD9\u4E9B\u6280\u672F\u5305\u62EC IP \u5730\u5740\u3001GPS \u4EE5\u53CA\u80FD\u591F\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\u7684\u5176\u4ED6\u4F20\u611F\u5668\uFF08\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u4E3A Google \u63D0\u4F9B\u9644\u8FD1\u8BBE\u5907\u3001Wi-Fi \u63A5\u5165\u70B9\u548C\u57FA\u7AD9\u7684\u4FE1\u606F\uFF09\u3002\n                </p>\n            </xh-card>\n            <xh-card class="xh-col-sm-24"  title="\u5728 xh-card-group \u4E2D\u7684\u5361\u7247" bg-color="#FFC107" font-color="#fff">\n                <p>\n                    \u5F53\u60A8\u4F7F\u7528 Google \u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u5904\u7406\u6709\u5173\u60A8\u5B9E\u9645\u6240\u5728\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u4F1A\u4F7F\u7528\u5404\u79CD\u6280\u672F\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u8FD9\u4E9B\u6280\u672F\u5305\u62EC IP \u5730\u5740\u3001GPS \u4EE5\u53CA\u80FD\u591F\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\u7684\u5176\u4ED6\u4F20\u611F\u5668\uFF08\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u4E3A Google \u63D0\u4F9B\u9644\u8FD1\u8BBE\u5907\u3001Wi-Fi \u63A5\u5165\u70B9\u548C\u57FA\u7AD9\u7684\u4FE1\u606F\uFF09\u3002\n                </p>\n            </xh-card>\n            <xh-card class="xh-col-sm-24"  title="\u5728 xh-card-group \u4E2D\u7684\u5361\u7247" bg-color="#CDDC39" font-color="#fff">\n                <p>\n                    \u5F53\u60A8\u4F7F\u7528 Google \u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u5904\u7406\u6709\u5173\u60A8\u5B9E\u9645\u6240\u5728\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u4F1A\u4F7F\u7528\u5404\u79CD\u6280\u672F\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u8FD9\u4E9B\u6280\u672F\u5305\u62EC IP \u5730\u5740\u3001GPS \u4EE5\u53CA\u80FD\u591F\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\u7684\u5176\u4ED6\u4F20\u611F\u5668\uFF08\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u4E3A Google \u63D0\u4F9B\u9644\u8FD1\u8BBE\u5907\u3001Wi-Fi \u63A5\u5165\u70B9\u548C\u57FA\u7AD9\u7684\u4FE1\u606F\uFF09\u3002\n                </p>\n            </xh-card>\n        </xh-card-group>\n    </div>\n    <mark>\n        <textarea class="ex-mark-text">\n### \u4EE3\u7801\n```html\n<xh-card title="tag">\n    <p>\n        \u5F53\u60A8\u4F7F\u7528 Google \u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u5904\u7406\u6709\u5173\u60A8\u5B9E\u9645\u6240\u5728\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u4F1A\u4F7F\u7528\u5404\u79CD\u6280\u672F\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u8FD9\u4E9B\u6280\u672F\u5305\u62EC IP \u5730\u5740\u3001GPS \u4EE5\u53CA\u80FD\u591F\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\u7684\u5176\u4ED6\u4F20\u611F\u5668\uFF08\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u4E3A Google \u63D0\u4F9B\u9644\u8FD1\u8BBE\u5907\u3001Wi-Fi \u63A5\u5165\u70B9\u548C\u57FA\u7AD9\u7684\u4FE1\u606F\uFF09\u3002\n    </p>\n</xh-card>\n```\n\n```html\n <xh-card-group>\n    <xh-card title="tag">\n        <p>\n            \u5F53\u60A8\u4F7F\u7528 Google \u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u5904\u7406\u6709\u5173\u60A8\u5B9E\u9645\u6240\u5728\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u4F1A\u4F7F\u7528\u5404\u79CD\u6280\u672F\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u8FD9\u4E9B\u6280\u672F\u5305\u62EC IP \u5730\u5740\u3001GPS \u4EE5\u53CA\u80FD\u591F\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\u7684\u5176\u4ED6\u4F20\u611F\u5668\uFF08\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u4E3A Google \u63D0\u4F9B\u9644\u8FD1\u8BBE\u5907\u3001Wi-Fi \u63A5\u5165\u70B9\u548C\u57FA\u7AD9\u7684\u4FE1\u606F\uFF09\u3002\n        </p>\n    </xh-card>\n    <xh-card title="tag">\n        <p>\n            \u5F53\u60A8\u4F7F\u7528 Google \u670D\u52A1\u65F6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6536\u96C6\u548C\u5904\u7406\u6709\u5173\u60A8\u5B9E\u9645\u6240\u5728\u4F4D\u7F6E\u7684\u4FE1\u606F\u3002\u6211\u4EEC\u4F1A\u4F7F\u7528\u5404\u79CD\u6280\u672F\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u8FD9\u4E9B\u6280\u672F\u5305\u62EC IP \u5730\u5740\u3001GPS \u4EE5\u53CA\u80FD\u591F\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\u7684\u5176\u4ED6\u4F20\u611F\u5668\uFF08\u6BD4\u5982\u8BF4\u53EF\u80FD\u4F1A\u4E3A Google \u63D0\u4F9B\u9644\u8FD1\u8BBE\u5907\u3001Wi-Fi \u63A5\u5165\u70B9\u548C\u57FA\u7AD9\u7684\u4FE1\u606F\uFF09\u3002\n        </p>\n    </xh-card>\n</xh-card-group>\n```\n\n### API\n\n`props`\uFF1A\n\n| \u53C2\u6570            | \u7C7B\u578B         | \u8BF4\u660E           |\n| :------------- |:-------------|:--------------|\n| title          | String       | \u5361\u7247\u6807\u9898       |\n| bg-color       | String       | \u5361\u7247\u989C\u8272       |\n| font-color     | String       | \u5361\u7247\u5B57\u4F53\u989C\u8272    |\n\n        </textarea>\n    </mark>\n    </div>\n</div>\n'},650:function(a,b,c){var d,e,f={};c(431),d=c(346),Object.keys(d).some(function(h){return'default'!==h&&'__esModule'!==h})&&console.warn('[vue-loader] docs/views/basic/card.vue: named exports in *.vue files are ignored.'),e=c(614),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default);var g='function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports;e&&(g.template=e),g.computed||(g.computed={}),Object.keys(f).forEach(function(h){var i=f[h];g.computed[h]=function(){return i}})}});