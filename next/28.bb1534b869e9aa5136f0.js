(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{tdHe:function(e,n,t){"use strict";t.r(n),t.d(n,"ExampleTuiLineDaysChartModule",(function(){return xe}));var a=t("An66"),r=t("3kIJ"),i=t("1VvW"),o=t("UTYu"),l=t("SVIu"),u=t("l4xa"),c=t("Qq0t"),m=t("dvRg"),s=t("YtkY"),d=t("kZht"),p=t("OZlg"),y=t("e0eB"),h=t("iyc4"),g=t("D57K"),f=t("Yj6K"),x=t("y9tQ"),b=t("ae/2"),T=t("ItKm");function D(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",3),d["\u0275\u0275element"](1,"tui-line-days-chart",4),d["\u0275\u0275pipe"](2,"async"),d["\u0275\u0275elementEnd"]()),2&e){const e=n.ngIf,t=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("verticalLines",e.length)("horizontalLines",4)("axisXLabels",e),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("height",200)("value",t.value)("yStringify",t.yStringify)("xStringify",d["\u0275\u0275pipeBind1"](2,7,t.xStringify$))}}let v=(()=>{class e{constructor(e){this.months$=e,this.range=new u.TuiDayRange(u.TuiDay.currentLocal(),u.TuiDay.currentLocal().append({year:1})),this.maxLength={month:12},this.xStringify$=this.months$.pipe(Object(s.a)(e=>({month:n,day:t})=>`${e[n]}, ${t}`)),this.yStringify=e=>(10*e).toLocaleString("en-US",{maximumFractionDigits:0})+" $"}get value(){return this.computeValue(this.range)}computeLabels$({from:e,to:n}){return this.months$.pipe(Object(s.a)(t=>Array.from({length:u.TuiMonth.lengthBetween(e,n)+1},(n,a)=>t[e.append({month:a}).month])))}computeValue({from:e,to:n}){return new Array(u.TuiDay.lengthBetween(e,n)+1).fill(0).reduce((n,t,a)=>[...n,[e.append({day:a}),(a?n[a-1][1]:100)+10*Math.random()-5]],[])}}return e.\u0275fac=function(n){return new(n||e)(d["\u0275\u0275directiveInject"](c.TUI_MONTHS))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-days-chart-example-1"]],decls:5,vars:5,consts:[[1,"b-form"],[3,"maxLength","ngModel","ngModelChange"],["class","axes",3,"verticalLines","horizontalLines","axisXLabels",4,"ngIf"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels"],[1,"chart",3,"height","value","yStringify","xStringify"]],template:function(e,n){1&e&&(d["\u0275\u0275elementStart"](0,"p",0),d["\u0275\u0275elementStart"](1,"tui-input-date-range",1),d["\u0275\u0275listener"]("ngModelChange",(function(e){return n.range=e})),d["\u0275\u0275text"](2," Range "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,D,3,9,"tui-axes",2),d["\u0275\u0275pipe"](4,"async")),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("maxLength",n.maxLength)("ngModel",n.range),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",d["\u0275\u0275pipeBind1"](4,3,n.computeLabels$(n.range))))},directives:[f.a,x.a,r.NgControlStatus,r.NgModel,a.t,b.a,T.a],pipes:[a.b],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;color:#bc71c9}"],changeDetection:0}),Object(g.b)([u.tuiPure],e.prototype,"computeLabels$",null),Object(g.b)([u.tuiPure],e.prototype,"computeValue",null),e})();var C=t("aPft"),S=t("JPmT"),P=t("+JAB"),L=t("Hot6"),M=t("ROBh");let w=(()=>{class e{constructor(e){this.months$=e}transform({from:e,to:n}){const t=u.TuiDay.lengthBetween(e,n);if(t>90)return this.months$.pipe(Object(s.a)(t=>Array.from({length:u.TuiMonth.lengthBetween(e,n)+1},(n,a)=>t[e.append({month:a}).month])));const a=Array.from({length:t},(n,t)=>e.append({day:t})),r=function(e){return e.filter(e=>!e.dayOfWeek()).map(String)}(a),i=a.map(String);return t>60?Object(M.a)(O(r)):t>14?Object(M.a)(r):t>7?Object(M.a)(O(i)):Object(M.a)(i)}}return e.\u0275fac=function(n){return new(n||e)(d["\u0275\u0275directiveInject"](c.TUI_MONTHS))},e.\u0275pipe=d["\u0275\u0275definePipe"]({name:"labels",type:e,pure:!0}),e})();function O(e){return e.filter((e,n)=>!(n%2))}var $,V=t("DzXc"),R=t("M03u");function A(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"span",7),d["\u0275\u0275elementStart"](1,"small",8),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=n.index;d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("Chart ",e+1,"")}}function E(e,n){if(1&e&&(d["\u0275\u0275element"](0,"tui-line-days-chart",13),d["\u0275\u0275pipe"](1,"tuiFilter")),2&e){const e=n.$implicit,t=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("height",200)("value",d["\u0275\u0275pipeBind3"](1,2,e,t.filter,t.range))}}function _(e,n){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275template"](1,E,2,6,"tui-line-days-chart",12),d["\u0275\u0275elementContainerEnd"]()),2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.days)}}function F(e,n){if(1&e&&(d["\u0275\u0275element"](0,"tui-line-chart",15),d["\u0275\u0275pipe"](1,"tuiMapper"),d["\u0275\u0275pipe"](2,"tuiFilter")),2&e){const e=n.$implicit,t=d["\u0275\u0275nextContext"](3);d["\u0275\u0275property"]("height",200)("width",t.getWidth(t.range))("value",d["\u0275\u0275pipeBind3"](1,3,d["\u0275\u0275pipeBind3"](2,7,e,t.filter,t.range),t.toNumbers,t.range))}}function I(e,n){if(1&e&&d["\u0275\u0275template"](0,F,3,11,"tui-line-chart",14),2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("ngForOf",e.days)}}function j(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",9),d["\u0275\u0275template"](1,_,2,1,"ng-container",10),d["\u0275\u0275template"](2,I,1,1,"ng-template",null,11,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"]()),2&e){const e=n.ngIf,t=d["\u0275\u0275reference"](3),a=d["\u0275\u0275nextContext"](),r=d["\u0275\u0275reference"](14);d["\u0275\u0275property"]("verticalLines",e.length)("horizontalLines",4)("axisXLabels",e)("tuiLineChartHint",r),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",a.getWidth(a.show)>90)("ngIfElse",t)}}function B(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",7),d["\u0275\u0275elementStart"](1,"span",17),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=n.$implicit;d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("$",e[1].toFixed(0),"")}}function k(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",16),d["\u0275\u0275elementStart"](1,"strong"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"div"),d["\u0275\u0275template"](4,B,3,1,"div",4),d["\u0275\u0275elementEnd"]()),2&e){const e=n.$implicit,t=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](t.getDate(e[0][0],t.range.from)),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",e)}}$=$localize`:␟b531bdcd2946536395ab29b2d7130911e7e22ada␟844234805878457:${"\ufffd#2\ufffd"}:START_TAG_CODE:TuiLineDaysChart${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is used to show data of several months to simplify working with different number of days in months
`;let z=(()=>{class e{constructor(){this.data=new u.TuiDayRange(u.TuiDay.currentLocal(),u.TuiDay.currentLocal().append({month:5})),this.show=this.data,this.days=this.computeArrays(this.data),this.maxLength={month:6},this.filter=([e],{from:n,to:t})=>e.daySameOrAfter(n)&&e.daySameOrBefore(t),this.toNumbers=(e,{from:n})=>e.map(([e,t])=>[u.TuiDay.lengthBetween(n,e),t])}get range(){return this.computeRange(this.show)}getWidth({from:e,to:n}){return u.TuiDay.lengthBetween(e,n)}getDate(e,n){return e instanceof u.TuiDay?e:n.append({day:e})}onDataChange(e){this.days=this.computeArrays(e)}computeRange(e){const{from:n,to:t}=e,a=u.TuiDay.lengthBetween(n,t),r=n.dayOfWeek(),i=t.dayOfWeek(),o=r?n.append({day:7-r}):n,l=i?t.append({day:7-i}):t,c=u.TuiDay.lengthBetween(o,l);return a>60?new u.TuiDayRange(o,l.append({day:c%14})):a>14?new u.TuiDayRange(o,l):a>7?new u.TuiDayRange(n,t.append({day:a%2})):e}computeData({from:e,to:n},t){return new Array(u.TuiDay.lengthBetween(e,n)+1).fill(0).reduce((n,a,r)=>[...n,[e.append({day:r}),Math.max((r?n[r-1][1]:t)+10*Math.random()-5,0)]],[]).filter(([e])=>e.dayOfWeek()<5)}computeArrays(e){return[this.computeData(e,100),this.computeData(e,75),this.computeData(e,50)]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-days-chart-example-2"]],decls:15,vars:10,consts:[[1,"controls"],[1,"b-form",3,"maxLength","ngModel","ngModelChange"],[1,"b-form","tui-space_left-4",3,"maxLength","ngModel","ngModelChange"],[1,"legend"],["class","item",4,"ngFor","ngForOf"],["class","axes",3,"verticalLines","horizontalLines","axisXLabels","tuiLineChartHint",4,"ngIf"],["hint",""],[1,"item"],[1,"name"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels","tuiLineChartHint"],[4,"ngIf","ngIfElse"],["line",""],["class","chart",3,"height","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","value"],["class","chart",3,"height","width","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","width","value"],[1,"tui-space_bottom-2"],[1,"value"]],template:function(e,n){1&e&&(d["\u0275\u0275elementStart"](0,"tui-notification"),d["\u0275\u0275i18nStart"](1,$),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"p",0),d["\u0275\u0275elementStart"](4,"tui-input-date-range",1),d["\u0275\u0275listener"]("ngModelChange",(function(e){return n.data=e}))("ngModelChange",(function(e){return n.onDataChange(e)})),d["\u0275\u0275text"](5," Data "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"tui-input-date-range",2),d["\u0275\u0275listener"]("ngModelChange",(function(e){return n.show=e})),d["\u0275\u0275text"](7," Visible range "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"p",3),d["\u0275\u0275template"](9,A,3,1,"span",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](10,j,4,6,"tui-axes",5),d["\u0275\u0275pipe"](11,"async"),d["\u0275\u0275pipe"](12,"labels"),d["\u0275\u0275template"](13,k,5,2,"ng-template",null,6,d["\u0275\u0275templateRefExtractor"])),2&e&&(d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("maxLength",n.maxLength)("ngModel",n.data),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("maxLength",n.maxLength)("ngModel",n.show),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngForOf",n.days),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",d["\u0275\u0275pipeBind1"](11,6,d["\u0275\u0275pipeBind1"](12,8,n.show))))},directives:[C.a,f.a,x.a,r.NgControlStatus,r.NgModel,a.s,a.t,b.a,S.a,P.a,T.a,L.a],pipes:[a.b,w,V.a,R.a],styles:['.axes[_ngcontent-%COMP%]{height:12.5rem}.controls[_ngcontent-%COMP%]{display:flex}.controls[_ngcontent-%COMP%]   .b-form[_ngcontent-%COMP%]{flex:1}.legend[_ngcontent-%COMP%]{justify-content:center}.item[_ngcontent-%COMP%], .legend[_ngcontent-%COMP%]{display:flex;align-items:center}.item[_ngcontent-%COMP%]{color:var(--tui-support-01);margin:0 .75rem}.item[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.item[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}.item[_ngcontent-%COMP%]:before{content:"";border-bottom:.125rem solid;width:1rem;margin-right:.5rem}.name[_ngcontent-%COMP%]{color:var(--tui-text-01)}.value[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.chart[_ngcontent-%COMP%]{color:var(--tui-support-01);position:absolute;top:0;left:0;width:100%;height:100%}.chart[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.chart[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}'],changeDetection:0}),Object(g.b)([u.tuiPure],e.prototype,"getWidth",null),Object(g.b)([u.tuiPure],e.prototype,"getDate",null),Object(g.b)([u.tuiPure],e.prototype,"computeRange",null),Object(g.b)([u.tuiPure],e.prototype,"computeData",null),e})();var N=t("EPR0"),H=t("yHor"),W=t("zGJC"),U=t("u8jZ");const X=["header",$localize`:␟564c05c6be43d102bc2b0bbeace4ff3bdc8b5fea␟8320178618805624268:LineDaysChart`];var G;G=$localize`:␟8b3686ee0181ab81f9ff51025cf35b0a03e625e7␟590759144044987818:Line chart but for days`;const Y=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],J=["heading",$localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`];function K(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,G),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,Y),d["\u0275\u0275element"](4,"tui-line-days-chart-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,J),d["\u0275\u0275element"](7,"tui-line-days-chart-example-2"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2)}}var Z,Q,q,ee,ne,te,ae,re,ie,oe;function le(e,n){1&e&&d["\u0275\u0275i18n"](0,Z)}function ue(e,n){1&e&&(d["\u0275\u0275i18nStart"](0,Q),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"]())}function ce(e,n){1&e&&d["\u0275\u0275i18n"](0,q)}function me(e,n){1&e&&d["\u0275\u0275i18n"](0,ee)}function se(e,n){1&e&&d["\u0275\u0275i18n"](0,ne)}function de(e,n){1&e&&d["\u0275\u0275i18n"](0,te)}function pe(e,n){1&e&&d["\u0275\u0275i18n"](0,ae)}function ye(e,n){1&e&&d["\u0275\u0275i18n"](0,re)}function he(e,n){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275elementStart"](1,"tui-axes",4),d["\u0275\u0275pipe"](2,"async"),d["\u0275\u0275element"](3,"tui-line-days-chart",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-doc-documentation"),d["\u0275\u0275template"](5,le,1,0,"ng-template",6),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().dots=n})),d["\u0275\u0275template"](6,ue,3,0,"ng-template",7),d["\u0275\u0275pipe"](7,"async"),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().hintContent=n})),d["\u0275\u0275template"](8,ce,1,0,"ng-template",8),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().height=n})),d["\u0275\u0275template"](9,me,1,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().y=n})),d["\u0275\u0275template"](10,se,1,0,"ng-template",10),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().smoothingFactor=n})),d["\u0275\u0275template"](11,de,1,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().value=n})),d["\u0275\u0275template"](12,pe,1,0,"ng-template",12),d["\u0275\u0275pipe"](13,"async"),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().xStringify=n})),d["\u0275\u0275template"](14,ye,1,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().yStringify=n})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("verticalLines",3)("horizontalLines",4)("axisXLabels",d["\u0275\u0275pipeBind1"](2,23,e.labels$)),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("value",e.value)("y",e.y)("height",e.height)("hintContent",e.hintContent)("xStringify",e.xStringify)("yStringify",e.yStringify)("smoothingFactor",e.smoothingFactor)("dots",e.dots),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValue",e.dots),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",d["\u0275\u0275pipeBind1"](7,25,e.hintContentVariants$))("documentationPropertyValue",e.hintContent),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValue",e.height),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.y),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.smoothingFactor),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",d["\u0275\u0275pipeBind1"](13,27,e.xStringifyVariants$))("documentationPropertyValue",e.xStringify),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValues",e.yStringifyVariants)("documentationPropertyValue",e.yStringify)}}function ge(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",14),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,ie),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,oe),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",16),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}Z=$localize`:␟c4d83e70435953f62ccae3cbf6016420df475424␟4740076445307023096: Show dots on chart `,Q=$localize`:␟bedcb3b37d5f24d2f77a8c3cb483fdf13759efd7␟6338178794566893901: Content of hint for hover. It has ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:$implicit${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: in context with a tuple ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:[TuiDay, number]${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE:`,Q=d["\u0275\u0275i18nPostprocess"](Q),q=$localize`:␟1148b851b9d07a503fe83074185fada4c56bc932␟4329060505650601384: Axis Y range, pixel scale is 1:1 `,ee=$localize`:␟f33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7␟9084820970498059965: Start of Y axis `,ne=$localize`:␟dbcff3658adbc7241a4e120d0403b9b59203cf6f␟7622132382477188848: Smoothing factor from 0 to 99 `,te=$localize`:␟2eb20b3adec45476e892d48624603eec29f04ca7␟620827304048157009: Array of data `,ae=$localize`:␟a95376fd00f2c7de89ef1205191f686e9bb93ceb␟8840512580092681625: Function to stringify a value number to a string in axis X hint `,re=$localize`:␟aa03eea8f292367391947b1ee6d45d8e5fe1c884␟8439308556823064311: Function to stringify a value number to a string in axis Y hint `,ie=$localize`:␟3faf4a45d660c91f821e2f11c0184ec80a25404a␟5226796676451500758: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLineDaysChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,oe=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let fe=(()=>{class e{constructor(e){this.months$=e,this.exampleModule="import {TuiLineDaysChartModule} from '@taiga-ui/addon-charts';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiLineDaysChartModule,\n    ],\n...\n",this.exampleHtml='<tui-line-days-chart [y]="0" [height]="100" [value]="value"></tui-line-days-chart>\n',this.example1={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiDay,\n    TuiDayLike,\n    TuiDayRange,\n    TuiMonth,\n    tuiPure,\n    TuiStringHandler,\n} from '@taiga-ui/cdk';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n// @dynamic\n@Component({\n    selector: 'tui-line-days-chart-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineDaysChartExample1 {\n    range = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({year: 1}),\n    );\n\n    readonly maxLength: TuiDayLike = {month: 12};\n\n    readonly xStringify$: Observable<TuiStringHandler<TuiDay>> = this.months$.pipe(\n        map(\n            months =>\n                ({month, day}) =>\n                    `${months[month]}, ${day}`,\n        ),\n    );\n\n    constructor(\n        @Inject(TUI_MONTHS) private readonly months$: Observable<readonly string[]>,\n    ) {}\n\n    get value(): ReadonlyArray<[TuiDay, number]> {\n        return this.computeValue(this.range);\n    }\n\n    @tuiPure\n    computeLabels$({from, to}: TuiDayRange): Observable<readonly string[]> {\n        return this.months$.pipe(\n            map(months =>\n                Array.from(\n                    {length: TuiMonth.lengthBetween(from, to) + 1},\n                    (_, i) => months[from.append({month: i}).month],\n                ),\n            ),\n        );\n    }\n\n    readonly yStringify: TuiStringHandler<number> = y =>\n        `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`;\n\n    @tuiPure\n    private computeValue({from, to}: TuiDayRange): ReadonlyArray<[TuiDay, number]> {\n        return new Array(TuiDay.lengthBetween(from, to) + 1)\n            .fill(0)\n            .reduce<ReadonlyArray<[TuiDay, number]>>(\n                (array, _, i) => [\n                    ...array,\n                    [\n                        from.append({day: i}),\n                        (i ? array[i - 1][1] : 100) + Math.random() * 10 - 5,\n                    ],\n                ],\n                [],\n            );\n    }\n}\n",HTML:'<p class="b-form">\n    <tui-input-date-range [maxLength]="maxLength" [(ngModel)]="range">\n        Range\n    </tui-input-date-range>\n</p>\n<tui-axes\n    *ngIf="computeLabels$(range) | async as labels"\n    class="axes"\n    [verticalLines]="labels.length"\n    [horizontalLines]="4"\n    [axisXLabels]="labels"\n>\n    <tui-line-days-chart\n        class="chart"\n        [height]="200"\n        [value]="value"\n        [yStringify]="yStringify"\n        [xStringify]="xStringify$ | async"\n    ></tui-line-days-chart>\n</tui-axes>\n',LESS:".axes {\n    height: 12.5rem;\n    color: #bc71c9;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {\n    TuiDay,\n    TuiDayLike,\n    TuiDayRange,\n    TuiMapper,\n    TuiMatcher,\n    tuiPure,\n} from '@taiga-ui/cdk';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-line-days-chart-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport class TuiLineDaysChartExample2 {\n    data = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({month: 5}),\n    );\n\n    show = this.data;\n\n    days: ReadonlyArray<ReadonlyArray<[TuiDay, number]>> = this.computeArrays(this.data);\n\n    readonly maxLength: TuiDayLike = {month: 6};\n\n    get range(): TuiDayRange {\n        return this.computeRange(this.show);\n    }\n\n    @tuiPure\n    getWidth({from, to}: TuiDayRange): number {\n        return TuiDay.lengthBetween(from, to);\n    }\n\n    @tuiPure\n    getDate(day: number | TuiDay, date: TuiDay): TuiDay {\n        return day instanceof TuiDay ? day : date.append({day});\n    }\n\n    readonly filter: TuiMatcher<[TuiDay, number]> = ([day], {from, to}: TuiDayRange) =>\n        day.daySameOrAfter(from) && day.daySameOrBefore(to);\n\n    readonly toNumbers: TuiMapper<\n        ReadonlyArray<[TuiDay, number]>,\n        ReadonlyArray<TuiPoint>\n    > = (days, {from}: TuiDayRange) =>\n        days.map(\n            ([day, value]) =>\n                [TuiDay.lengthBetween(from, day), value] as [number, number],\n        );\n\n    onDataChange(data: TuiDayRange) {\n        this.days = this.computeArrays(data);\n    }\n\n    @tuiPure\n    private computeRange(range: TuiDayRange): TuiDayRange {\n        const {from, to} = range;\n        const length = TuiDay.lengthBetween(from, to);\n        const dayOfWeekFrom = from.dayOfWeek();\n        const dayOfWeekTo = to.dayOfWeek();\n        const mondayFrom = dayOfWeekFrom ? from.append({day: 7 - dayOfWeekFrom}) : from;\n        const mondayTo = dayOfWeekTo ? to.append({day: 7 - dayOfWeekTo}) : to;\n        const mondaysLength = TuiDay.lengthBetween(mondayFrom, mondayTo);\n\n        if (length > 60) {\n            return new TuiDayRange(\n                mondayFrom,\n                mondayTo.append({day: mondaysLength % 14}),\n            );\n        }\n\n        if (length > 14) {\n            return new TuiDayRange(mondayFrom, mondayTo);\n        }\n\n        if (length > 7) {\n            return new TuiDayRange(from, to.append({day: length % 2}));\n        }\n\n        return range;\n    }\n\n    // Random data generation\n    @tuiPure\n    private computeData(\n        {from, to}: TuiDayRange,\n        initial: number,\n    ): ReadonlyArray<[TuiDay, number]> {\n        return new Array(TuiDay.lengthBetween(from, to) + 1)\n            .fill(0)\n            .reduce<ReadonlyArray<[TuiDay, number]>>(\n                (array, _, i) => [\n                    ...array,\n                    [\n                        from.append({day: i}),\n                        Math.max(\n                            (i ? array[i - 1][1] : initial) + Math.random() * 10 - 5,\n                            0,\n                        ),\n                    ],\n                ],\n                [],\n            )\n            .filter(([day]) => day.dayOfWeek() < 5);\n    }\n\n    private computeArrays(\n        data: TuiDayRange,\n    ): ReadonlyArray<ReadonlyArray<[TuiDay, number]>> {\n        return [\n            this.computeData(data, 100),\n            this.computeData(data, 75),\n            this.computeData(data, 50),\n        ];\n    }\n}\n",HTML:'<tui-notification i18n>\n    <code>TuiLineDaysChart</code>\n    is used to show data of several months to simplify working with different\n    number of days in months\n</tui-notification>\n<p class="controls">\n    <tui-input-date-range\n        class="b-form"\n        [maxLength]="maxLength"\n        [(ngModel)]="data"\n        (ngModelChange)="onDataChange($event)"\n    >\n        Data\n    </tui-input-date-range>\n    <tui-input-date-range\n        class="b-form tui-space_left-4"\n        [maxLength]="maxLength"\n        [(ngModel)]="show"\n    >\n        Visible range\n    </tui-input-date-range>\n</p>\n<p class="legend">\n    <span *ngFor="let chart of days; let index = index" class="item">\n        <small class="name">Chart {{index + 1}}</small>\n    </span>\n</p>\n<tui-axes\n    *ngIf="show | labels | async as labels"\n    class="axes"\n    [verticalLines]="labels.length"\n    [horizontalLines]="4"\n    [axisXLabels]="labels"\n    [tuiLineChartHint]="hint"\n>\n    <ng-container *ngIf="getWidth(show) > 90; else line">\n        <tui-line-days-chart\n            *ngFor="let chart of days"\n            class="chart"\n            [height]="200"\n            [value]="chart | tuiFilter : filter : range"\n        ></tui-line-days-chart>\n    </ng-container>\n    <ng-template #line>\n        <tui-line-chart\n            *ngFor="let chart of days"\n            class="chart"\n            [height]="200"\n            [width]="getWidth(range)"\n            [value]="chart | tuiFilter : filter : range | tuiMapper : toNumbers : range"\n        ></tui-line-chart>\n    </ng-template>\n</tui-axes>\n\n<ng-template #hint let-data>\n    <div class="tui-space_bottom-2">\n        <strong>{{getDate(data[0][0], range.from)}}</strong>\n    </div>\n    <div>\n        <div *ngFor="let point of data" class="item">\n            <span class="value">${{point[1].toFixed(0)}}</span>\n        </div>\n    </div>\n</ng-template>\n',LESS:"@import 'taiga-ui-local';\n\n.color() {\n    color: var(--tui-support-01);\n\n    &:first-child {\n        color: var(--tui-support-08);\n    }\n\n    &:last-child {\n        color: var(--tui-support-12);\n    }\n}\n\n.axes {\n    height: 12.5rem;\n}\n\n.controls {\n    display: flex;\n\n    .b-form {\n        flex: 1;\n    }\n}\n\n.legend {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item {\n    .color();\n    display: flex;\n    align-items: center;\n    margin: 0 0.75rem;\n\n    &:before {\n        content: '';\n        border-bottom: 0.125rem solid;\n        width: 1rem;\n        margin-right: 0.5rem;\n    }\n}\n\n.name {\n    color: var(--tui-text-01);\n}\n\n.value {\n    color: var(--tui-text-01-night);\n}\n\n.chart {\n    .color();\n    .fullsize();\n}\n",Pipe:"import {Inject, Pipe, PipeTransform} from '@angular/core';\nimport {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {Observable, of} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n// @dynamic\n@Pipe({\n    name: 'labels',\n})\nexport class LabelsPipe implements PipeTransform {\n    constructor(\n        @Inject(TUI_MONTHS) private readonly months$: Observable<readonly string[]>,\n    ) {}\n\n    transform({from, to}: TuiDayRange): Observable<readonly string[]> {\n        const length = TuiDay.lengthBetween(from, to);\n\n        if (length > 90) {\n            return this.months$.pipe(\n                map(months =>\n                    Array.from(\n                        {length: TuiMonth.lengthBetween(from, to) + 1},\n                        (_, i) => months[from.append({month: i}).month],\n                    ),\n                ),\n            );\n        }\n\n        const range = Array.from({length}, (_, day) => from.append({day}));\n        const mondays = onlyMondays(range);\n        const days = range.map(String);\n\n        if (length > 60) {\n            return of(even(mondays));\n        }\n\n        if (length > 14) {\n            return of(mondays);\n        }\n\n        if (length > 7) {\n            return of(even(days));\n        }\n\n        return of(days);\n    }\n}\n\nfunction onlyMondays(range: ReadonlyArray<TuiDay>): readonly string[] {\n    return range.filter(day => !day.dayOfWeek()).map(String);\n}\n\nfunction even<T>(array: ReadonlyArray<T>): ReadonlyArray<T> {\n    return array.filter((_, i) => !(i % 2));\n}\n"},this.valueVariants=[new Array(91).fill(0).reduce((e,n,t)=>[...e,[new u.TuiDay(2020,0,1).append({day:t}),(t?e[t-1][1]:100)+20*Math.random()-10]],[]),[[new u.TuiDay(2020,1,10),10],[new u.TuiDay(2020,1,15),150],[new u.TuiDay(2020,1,17),10],[new u.TuiDay(2020,1,20),10],[new u.TuiDay(2020,1,25),150],[new u.TuiDay(2020,1,27),10]]],this.value=this.valueVariants[0],this.labels$=this.months$.pipe(Object(s.a)(e=>Array.from({length:3},(n,t)=>e[t]))),this.yStringifyVariants=[e=>(10*e).toLocaleString("en-US",{maximumFractionDigits:0})+" $"],this.xStringifyVariants$=this.months$.pipe(Object(s.a)(e=>[({month:n,day:t})=>`${e[n]}, ${t}`])),this.hintContentVariants$=this.months$.pipe(Object(s.a)(e=>["",({$implicit:n})=>`${e[n[0].month]}, ${n[0].day}\n${(10*n[1]).toLocaleString("en-US",{maximumFractionDigits:0})} $`])),this.yStringify=null,this.xStringify=null,this.hintContent="",this.dots=!1,this.smoothingFactor=0,this.y=0,this.height=200}}return e.\u0275fac=function(n){return new(n||e)(d["\u0275\u0275directiveInject"](c.TUI_MONTHS))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-line-days-chart"]],decls:5,vars:0,consts:[["package","ADDON-CHARTS","type","components",6,"header"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","complex",3,"content",6,"heading"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels"],[3,"value","y","height","hintContent","xStringify","yStringify","smoothingFactor","dots"],["documentationPropertyName","dots","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hintContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","height","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","y","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","smoothingFactor","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","[TuiDay, number][]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","xStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<TuiDay> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","yStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<number> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,n){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,X),d["\u0275\u0275template"](2,K,8,2,"ng-template",1),d["\u0275\u0275template"](3,he,15,29,"ng-template",1),d["\u0275\u0275template"](4,ge,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[p.a,y.a,h.a,v,z,N.a,b.a,T.a,H.a,W.a,U.a],pipes:[a.b],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:45.5rem;color:#bc71c9}"],changeDetection:0}),e})(),xe=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[a.c,r.FormsModule,o.TuiAxesModule,m.TuiSelectModule,o.TuiLineChartModule,u.TuiMapperPipeModule,c.TuiNotificationModule,u.TuiFilterPipeModule,o.TuiLineDaysChartModule,m.TuiInputDateRangeModule,l.i,i.f.forChild(Object(l.p)(fe))]]}),e})()}}]);