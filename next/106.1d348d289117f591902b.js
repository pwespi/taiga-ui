(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{uSPj:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiSliderModule",(function(){return ee}));var o=n("An66"),a=n("3kIJ"),l=n("1VvW"),r=n("SVIu"),i=n("Qq0t"),c=n("dvRg"),m=n("kZht"),s=n("OZlg"),d=n("e0eB"),p=n("yZWP"),u=n("iyc4"),f=n("VONa");let g=(()=>{class e{constructor(){this.value=4,this.formControl=new a.FormControl(60)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-1"]],decls:2,vars:2,consts:[["tuiSlider","","type","range","max","10","step","1","size","s",3,"ngModel","ngModelChange"],["tuiSlider","","type","range","value","60","size","m",3,"formControl"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"input",0),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](1,"input",1)),2&e&&(m["\u0275\u0275property"]("ngModel",t.value),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formControl",t.formControl))},directives:[f.a,a.RangeValueAccessor,a.DefaultValueAccessor,a.NgControlStatus,a.NgModel,a.FormControlDirective],encapsulation:2,changeDetection:0}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-2"]],decls:3,vars:0,consts:[["tuiSlider","","type","range","value","65",1,"first"],["tuiSlider","","type","range","value","80",1,"second"],["tuiSlider","","type","range","value","40",1,"third"]],template:function(e,t){1&e&&(m["\u0275\u0275element"](0,"input",0),m["\u0275\u0275element"](1,"input",1),m["\u0275\u0275element"](2,"input",2))},directives:[f.a],styles:[".first[_ngcontent-%COMP%]{color:var(--tui-support-01)}.second[_ngcontent-%COMP%]{color:var(--tui-support-03)}.third[_ngcontent-%COMP%]{color:var(--tui-support-12)}"],changeDetection:0}),e})();function b(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"span",3),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"]("$",e,"")}}let C=(()=>{class e{constructor(){this.labels=[0,250,500,750,1e3],this.formControl=new a.FormControl(250)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-3"]],decls:7,vars:6,consts:[["tuiSlider","","type","range","size","m",3,"max","step","segments","formControl"],[1,"labels"],["class","label",4,"ngFor","ngForOf"],[1,"label"]],template:function(e,t){1&e&&(m["\u0275\u0275element"](0,"input",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275template"](2,b,2,1,"span",2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"p"),m["\u0275\u0275text"](4," Control value: "),m["\u0275\u0275elementStart"](5,"code"),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("max",1e3)("step",250)("segments",4)("formControl",t.formControl),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngForOf",t.labels),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate"](t.formControl.value))},directives:[f.a,a.RangeValueAccessor,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlDirective,o.s],styles:[".labels[_ngcontent-%COMP%]{display:flex;font:var(--tui-font-text-s)}.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{flex:2;text-align:center}.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:first-child{flex:1;text-align:left}.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:last-child{flex:1;text-align:right}"],changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-4"]],decls:1,vars:0,consts:[["tuiSlider","","type","range","disabled","","value","80"]],template:function(e,t){1&e&&m["\u0275\u0275element"](0,"input",0)},directives:[f.a],encapsulation:2,changeDetection:0}),e})();var T=n("kwWx");function h(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"span",4),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](e)}}let x=(()=>{class e{constructor(){this.labels=["5 000","100 000","300 000","1 000 000"],this.formControl=new a.FormControl(72e4),this.segments=this.labels.length-1,this.keySteps=[[0,5e3],[100/3,1e5],[100/3*2,3e5],[100,1e6]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-slider-example-5"]],decls:8,vars:8,consts:[["tuiSlider","","type","range",3,"keySteps","max","segments","formControl"],[1,"labels"],["class","label",4,"ngFor","ngForOf"],["automation-id","key-steps-example-control-value"],[1,"label"]],template:function(e,t){1&e&&(m["\u0275\u0275element"](0,"input",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275template"](2,h,2,1,"span",2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"p",3),m["\u0275\u0275text"](4," Control value: "),m["\u0275\u0275elementStart"](5,"code"),m["\u0275\u0275text"](6),m["\u0275\u0275pipe"](7,"number"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("keySteps",t.keySteps)("max",10*t.segments)("segments",t.segments)("formControl",t.formControl),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngForOf",t.labels),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](7,6,t.formControl.value)))},directives:[T.a,f.a,a.RangeValueAccessor,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlDirective,o.s],pipes:[o.g],styles:[".labels[_ngcontent-%COMP%]{display:flex;font:var(--tui-font-text-s)}.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{flex:2;text-align:center}.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:first-child{flex:1;text-align:left}.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:last-child{flex:1;text-align:right}"],changeDetection:0}),e})();var _,E,v=n("EPR0"),A=n("yHor"),P=n("zGJC"),O=n("u8jZ");_=$localize`:␟adbed55b9ad040f016b7224d2376dcc556c96cde␟5051981916551990985:${"\ufffd#2\ufffd"}:START_TAG_DT:${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:tuiSlider${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#2\ufffd"}:CLOSE_TAG_DT:${"\ufffd#4\ufffd"}:START_TAG_DD: attribute component for native html tag ${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:<input type="range" />${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: to choose a value from a limited range. ${"\ufffd/#4\ufffd"}:CLOSE_TAG_DD:`,_=m["\u0275\u0275i18nPostprocess"](_),E=$localize`:␟b8e40b0cc91d33efec07223ffbc08dbf4e9918f5␟881568504699206751:${"\ufffd#13\ufffd"}:START_TAG_STRONG:Usage:${"\ufffd/#13\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd#14\ufffd"}:START_TAG_CODE: <input tuiSlider type="range" min="0" max="100" step="1" /> ${"\ufffd/#14\ufffd"}:CLOSE_TAG_CODE: . `;const $=["heading",$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`],D=["heading",$localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`],V=["heading",$localize`:␟2491f5c0a188387f341fc89ca14558c666c96dc9␟3070830036852627562:With visual segments`],M=["heading",$localize`:␟f39256070bfc0714020dfee08895421fc1527014␟5769292297914455214:Disabled`],L=["heading",$localize`:␟21e3d6f0be967074ebe7bfc308ce12e1e9ef0763␟2043510449142398319:With key steps`];var G,z,R,w,N,k,F,I,H;function W(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"dl"),m["\u0275\u0275i18nStart"](1,_),m["\u0275\u0275elementStart"](2,"dt"),m["\u0275\u0275element"](3,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"dd"),m["\u0275\u0275element"](5,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"p"),m["\u0275\u0275text"](7," Read more about current input's type in "),m["\u0275\u0275elementStart"](8,"a",2),m["\u0275\u0275text"](9," MDN Docs "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](10," . "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"p"),m["\u0275\u0275i18nStart"](12,E),m["\u0275\u0275element"](13,"strong"),m["\u0275\u0275element"](14,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](16,$),m["\u0275\u0275element"](17,"tui-slider-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](19,D),m["\u0275\u0275element"](20,"tui-slider-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](21,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](22,V),m["\u0275\u0275element"](23,"tui-slider-example-3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](24,"tui-doc-example",6),m["\u0275\u0275i18nAttributes"](25,M),m["\u0275\u0275element"](26,"tui-slider-example-4"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](27,"tui-doc-example",7),m["\u0275\u0275i18nAttributes"](28,L),m["\u0275\u0275elementStart"](29,"dl",8),m["\u0275\u0275i18nStart"](30,G),m["\u0275\u0275elementStart"](31,"dt"),m["\u0275\u0275element"](32,"strong"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](33,"dd"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](34,"tui-slider-example-5"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](15),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example3),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example4),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example5)}}function K(e,t){if(1&e&&m["\u0275\u0275element"](0,"input",16),2&e){const e=m["\u0275\u0275nextContext"](2);m["\u0275\u0275property"]("max",e.max)("min",e.min)("step",e.step)("formControl",e.control)("size",e.size)("segments",e.segments)}}function j(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,z),m["\u0275\u0275element"](1,"code"),m["\u0275\u0275i18nEnd"]())}function J(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,R),m["\u0275\u0275element"](1,"a",17),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"]())}function Z(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,w),m["\u0275\u0275element"](1,"a",18),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"]())}function U(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,N),m["\u0275\u0275element"](1,"a",19),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"]())}function B(e,t){1&e&&m["\u0275\u0275i18n"](0,k)}function q(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,F),m["\u0275\u0275element"](1,"p"),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"]())}function Q(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo",9),m["\u0275\u0275template"](1,K,1,6,"ng-template"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,j,2,0,"ng-template",10),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().disabled=t})),m["\u0275\u0275template"](4,J,3,0,"ng-template",11),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().max=t})),m["\u0275\u0275template"](5,Z,3,0,"ng-template",12),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().min=t})),m["\u0275\u0275template"](6,U,3,0,"ng-template",13),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().step=t})),m["\u0275\u0275template"](7,B,1,0,"ng-template",14),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().size=t})),m["\u0275\u0275template"](8,q,3,0,"ng-template",15),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().segments=t})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("control",e.control),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("documentationPropertyValue",e.disabled),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.max),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.min),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.step),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.segments)}}function Y(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",20),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275text"](2," Import an Angular module for forms and "),m["\u0275\u0275elementStart"](3,"code"),m["\u0275\u0275text"](4,"TuiSliderModule"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](5," in the same module where you want to use our component: "),m["\u0275\u0275element"](6,"tui-doc-code",21),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"li"),m["\u0275\u0275elementStart"](8,"p"),m["\u0275\u0275i18nStart"](9,I),m["\u0275\u0275element"](10,"code"),m["\u0275\u0275element"](11,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](12,"tui-doc-code",22),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"li"),m["\u0275\u0275elementStart"](14,"p"),m["\u0275\u0275i18n"](15,H),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](16,"tui-doc-code",23),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("code",e.exampleDeclareForm),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}G=$localize`:␟968d4f0cffb2bf2b0747a84b02410011aff3b035␟1485036497695329333:${"\ufffd#31\ufffd"}:START_TAG_DT:${"\ufffd#32\ufffd"}:START_TAG_STRONG:Key steps${"\ufffd/#32\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#31\ufffd"}:CLOSE_TAG_DT:${"\ufffd#33\ufffd"}:START_TAG_DD: anchor points of non-uniform format between value and position ${"\ufffd/#33\ufffd"}:CLOSE_TAG_DD:`,z=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,R=$localize`:␟7a9c2463dd2db1c76ddb6ab9b5ac72155b3febd3␟2441366795513240531: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: max ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,w=$localize`:␟0f9865bd37150fde43d1803c880f50904f4c19e5␟8291402794161186662: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: min ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,N=$localize`:␟3ef21ae73998ca229a066c4ebe6df772bcb4e1ff␟3867818126343854694: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: step ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<input type="range" />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,k=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,F=$localize`:␟a02033b049807cde07365ac37e1d79258c6f8b38␟1000197536572415972:${"\ufffd#1\ufffd"}:START_PARAGRAPH:A number of visual segments${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH: (use ${"\ufffd#2\ufffd"}:START_TAG_CODE:1${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: for no ticks) `,I=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,I=m["\u0275\u0275i18nPostprocess"](I),H=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let X=(()=>{class e{constructor(){this.sizeVariants=["s","m"],this.control=new a.FormControl(1),this.max=5,this.min=0,this.step=1,this.size=this.sizeVariants[1],this.segments=this.max,this.exampleImportModule=n.e(620).then(n.bind(null,"9onM")),this.exampleDeclareForm=n.e(619).then(n.bind(null,"WkiS")),this.exampleInsertTemplate=n.e(621).then(n.bind(null,"C16L")),this.example1={HTML:n.e(606).then(n.bind(null,"L19o")),TypeScript:n.e(607).then(n.bind(null,"JdZO"))},this.example2={HTML:n.e(608).then(n.bind(null,"jPzD")),LESS:n.e(609).then(n.bind(null,"FYff")),TypeScript:n.e(610).then(n.bind(null,"fxdJ"))},this.example3={HTML:n.e(611).then(n.bind(null,"s8uW")),LESS:n.e(612).then(n.bind(null,"fkFy")),TypeScript:n.e(613).then(n.bind(null,"hS2T"))},this.example4={HTML:n.e(614).then(n.bind(null,"Pdsk")),TypeScript:n.e(615).then(n.bind(null,"uI4/"))},this.example5={HTML:n.e(616).then(n.bind(null,"qrso")),TypeScript:n.e(618).then(n.bind(null,"RrIZ")),LESS:n.e(617).then(n.bind(null,"wGMC"))}}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-slider"]],decls:4,vars:0,consts:[["header","Slider","package","KIT","type","components"],["pageTab",""],["tuiLink","","target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/range"],["id","sizes",3,"content",6,"heading"],["id","colors",3,"content",6,"heading"],["id","segments",3,"content",6,"heading"],["id","disabled",3,"content",6,"heading"],["id","keySteps",3,"content",6,"heading"],[1,"tui-space_bottom-8","tui-space_top-0"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiSlider","","type","range",3,"max","min","step","formControl","size","segments"],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#max","target","_blank"],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#min","target","_blank"],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step","target","_blank"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,W,35,5,"ng-template",1),m["\u0275\u0275template"](2,Q,9,8,"ng-template",1),m["\u0275\u0275template"](3,Y,17,3,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[s.a,d.a,p.a,u.a,g,S,C,y,x,v.a,A.a,P.a,f.a,a.RangeValueAccessor,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlDirective,O.a],encapsulation:2,changeDetection:0}),e})(),ee=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,r.i,c.Bb,a.FormsModule,a.ReactiveFormsModule,i.ub,l.f.forChild(Object(r.p)(X))]]}),e})()}}]);