webpackJsonp([0,33],{2:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.Mark=void 0;var d=c(7),e=function(g){return g&&g.__esModule?g:{default:g}}(d);b.Mark=e.default},3:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(e){var f=document.createElement('div');return f.innerHTML=e,f.innerText||f.textContent};b.default={data:function(){return{mark:''}},ready:function(){this.mark=window.marked(c(this.$el.getElementsByClassName('ex-mark-text')[0].innerHTML))}}},4:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,'\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: "#";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: "!";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n','',{version:3,sources:['/./docs/views/mark.vue'],names:[],mappings:';AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,oBAAoB;IACpB,eAAe;CAClB;AACD;IACI,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,eAAe;CAClB;AACD;IACI,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;CACpB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;IACnB,cAAc;IACd,oBAAoB;IACpB,cAAc;CACjB;AACD;IACI,UAAU;CACb;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,6EAA6E;IAC7E,gBAAgB;CACnB;AACD;IACI,gBAAgB;IAChB,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,2BAA2B;IAC3B,aAAa;IACb,iCAAiC;CACpC;AACD;IACI,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,aAAa;IACb,kBAAkB;IAClB,iCAAiC;CACpC;AACD;IACI;QACI,UAAU;KACb;CACJ',file:'mark.vue',sourcesContent:['\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: "#";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: "!";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n'],sourceRoot:'webpack://'}])},5:function(a,b,c){var d=c(4);'string'==typeof d&&(d=[[a.id,d,'']]);var e=c(10)(d,{});d.locals&&(a.exports=d.locals)},6:function(a,b){a.exports='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class="marked">\n    <div>\n        {{{mark}}}\n    </div>\n    <slot></slot>\n</div>\n'},7:function(a,b,c){var d,e,f={};c(5),d=c(3),Object.keys(d).some(function(h){return'default'!==h&&'__esModule'!==h})&&console.warn('[vue-loader] docs/views/mark.vue: named exports in *.vue files are ignored.'),e=c(6),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default);var g='function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports;e&&(g.template=e),g.computed||(g.computed={}),Object.keys(f).forEach(function(h){var i=f[h];g.computed[h]=function(){return i}})},372:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(2);b.default={data:function(){return{imgs:['http://covteam.u.qiniudn.com/test14.jpg','http://covteam.u.qiniudn.com/test15.jpg','http://covteam.u.qiniudn.com/test16.jpg','http://covteam.u.qiniudn.com/test17.jpg','http://covteam.u.qiniudn.com/test18.jpg','http://covteam.u.qiniudn.com/test19.jpg','http://covteam.u.qiniudn.com/test20.jpg','http://covteam.u.qiniudn.com/test21.jpg','http://covteam.u.qiniudn.com/test22.jpg','http://covteam.u.qiniudn.com/test23.jpg']}},components:{Mark:d.Mark}}},427:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,'\n.doc-preview-imglist {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.doc-preview-imgbox {\n    width: 10rem;\n    height: 10rem;\n    background-size: cover;\n}\n','',{version:3,sources:['/./docs/views/global/preview.vue'],names:[],mappings:';AACA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,oBAAoB;QAChB,gBAAgB;CACvB;AACD;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;CAC1B',file:'preview.vue',sourcesContent:['\n.doc-preview-imglist {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.doc-preview-imgbox {\n    width: 10rem;\n    height: 10rem;\n    background-size: cover;\n}\n'],sourceRoot:'webpack://'}])},434:function(a,b,c){var d=c(427);'string'==typeof d&&(d=[[a.id,d,'']]);var e=c(10)(d,{});d.locals&&(a.exports=d.locals)},640:function(a,b){a.exports='\n\n\n\n\n\n\n\n\n\n\n\n\n<div class="ex-content">\n    <div class="ex-card">\n    <mark>\n        <textarea class="ex-mark-text">\n# Preview \u56FE\u7247\u9884\u89C8\n\n### \u793A\u4F8B\n\n\u53EF\u4EE5\u5C1D\u8BD5\u70B9\u51FB\u4E0B\u9762\u7684\u56FE\u7247\n        </textarea>\n    </mark>\n    <div class="doc-preview-imglist">\n        <div\n            v-for="img in imgs"\n            v-preview="img"\n            class="doc-preview-imgbox"\n            :style="{ \'background-image\':  \'url(\' + img + \'?imageView2/1/w/100/h/100)\'}"\n        >\n        </div>\n    </div>\n    <mark>\n        <textarea class="ex-mark-text">\n### \u5B89\u88C5\n\n\u9996\u5148\u5728\u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6\u4E2D\u5F15\u5165 RadonUI, \u8C03\u7528 `Vue.use` \u5B89\u88C5\u3002\n\n```javascript\n// main.js\nimport { RadonInstall } from \'xhqb-ui\'\n\nVue.use(RadonInstall, {\n    Preview: true\n})\n```\n\n\u5728\u6839\u7EC4\u4EF6\u6DFB\u52A0 `xh-preview` \u7EC4\u4EF6\u7684\u4F4D\u7F6E\n\n```\n<!-- Vue root compoment template -->\n<div id="app">\n    <router-view></router-view>\n    <xh-preview></xh-preview>\n</div>\n```\n\n\u5BF9\u4E8E\u6240\u6709\u56FE\u7247\u90FD\u53EF\u4EE5\u4F7F\u7528 `v-preview` \u6307\u4EE4\u6765\u7ED1\u5B9A\u4ED6\u4EEC\u7684\u9884\u89C8\u529F\u80FD\n\n```html\n<img v-for="img in imgs" v-preview="img" :src="img">\n\nor\n\n<div\n    v-for="img in imgs"\n    v-preview="img"\n    class="doc-preview-imgbox"\n    :style="{ \'background-image\':  \'url(\' + img + \')\'}"\n>\n</div>\n```\n\n```javascript\nexport default {\n    data () {\n        return {\n            imgs: [\'http://covteam.u.qiniudn.com/ka2.jpg\', \'http://covteam.u.qiniudn.com/poster.png\']\n        }\n    }\n}\n```\n        </textarea>\n    </mark>\n    </div>\n</div>\n'},676:function(a,b,c){var d,e,f={};c(434),d=c(372),Object.keys(d).some(function(h){return'default'!==h&&'__esModule'!==h})&&console.warn('[vue-loader] docs/views/global/preview.vue: named exports in *.vue files are ignored.'),e=c(640),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default);var g='function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports;e&&(g.template=e),g.computed||(g.computed={}),Object.keys(f).forEach(function(h){var i=f[h];g.computed[h]=function(){return i}})}});