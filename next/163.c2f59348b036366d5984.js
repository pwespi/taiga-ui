(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{xggc:function(e,t,n){"use strict";n.r(t),n.d(t,"IconsModule",(function(){return B}));var i=n("An66"),c=n("3kIJ"),o=n("1VvW"),a=n("SVIu"),r=n("Qq0t"),s=n("dvRg"),l=n("kZht"),p=n("4C5Q");const u=["tuiIconElectron","tuiIconMaestro","tuiIconMastercard","tuiIconMir","tuiIconVisa"],{LARGE:d,NORMAL:f}=function(){const e=[],t=[],n=new Set(u);for(const i in p)n.has(i)||"tuiCoreIcons"===i||"tuiKitIcons"===i||(i.includes("Large")?e.push(i):t.push(i));return{LARGE:e,NORMAL:t}}(),m={"Description and examples":{"Normal interface icons (16px)":f,"Large interface icons (24px)":d,"Payment systems":u}},g=new l.InjectionToken("Icons",{factory:()=>m});var h=n("OZlg"),b=n("e0eB"),y=n("yZWP"),v=n("D57K"),I=n("wdR4"),C=n("l4xa"),O=n("GdrL"),x=n("71sB"),w=n("RlDx"),k=n("2wTY"),M=n("gEyt"),S=n("zV1d");let E=(()=>{class e{transform(e,t){return t.length>1&&Object(C.C)(e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=l["\u0275\u0275definePipe"]({name:"iconHighlight",type:e,pure:!0}),e})();var L,$,T;L=$localize`:␟d3482a2fe17d28c2051e895925c9f35d47dbcc29␟1035150703896968730:Search by name`,$=$localize`:␟c8c9758c8595df7a1f438b97d0bdb29ee9eaf6b2␟696084215486677597: Input icon name to highlight
`,T=$localize`:␟6dcdb49844a66f097baad6ff6e439198e1240ce8␟3794049220169119758:${"\ufffd0\ufffd"}:INTERPOLATION:`;const j=["title",$localize`:␟1979da7460819153e11d2078244645d94291b69c␟4323470180912194028:Copy`];function F(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",5),l["\u0275\u0275i18nAttributes"](1,j),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit;return l["\u0275\u0275nextContext"](2).copyPath(n)})),l["\u0275\u0275pipe"](2,"iconHighlight"),l["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=l["\u0275\u0275nextContext"](2);l["\u0275\u0275classProp"]("icon_highlighted",l["\u0275\u0275pipeBind2"](2,4,e,n.search)),l["\u0275\u0275property"]("icon",e),l["\u0275\u0275attribute"]("aria-label",e)}}function P(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275elementStart"](1,"h2",0),l["\u0275\u0275i18n"](2,T),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275template"](4,F,3,7,"button",4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275i18nExp"](e),l["\u0275\u0275i18nApply"](2),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",n.iconsValues[e])}}let z=(()=>{class e{constructor(e,t){this.clipboard=e,this.notifications=t,this.iconsValues={},this.keys=[],this.search=""}set icons(e){this.keys=Object.keys(e),this.iconsValues=e}copyPath(e){this.clipboard.copy(e),this.notifications.show(`The name ${e} copied`,{status:"success"}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](I.b),l["\u0275\u0275directiveInject"](r.Eb))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["icons-group"]],inputs:{icons:"icons"},decls:5,vars:3,consts:[[1,"title"],["tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"icons"],["tuiIconButton","","type","button","size","m","appearance","icon","class","icon",3,"icon_highlighted","icon","click",4,"ngFor","ngForOf",6,"title"],["tuiIconButton","","type","button","size","m","appearance","icon",1,"icon",3,"icon","click",6,"title"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"h2",0),l["\u0275\u0275i18n"](1,L),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-input",1),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search=e})),l["\u0275\u0275i18n"](3,$),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](4,P,5,2,"ng-container",2)),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("ngModel",t.search),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.keys))},directives:[O.a,x.a,w.a,k.b,M.b,c.NgControlStatus,c.NgModel,i.s,S.a],pipes:[E],styles:[".title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:1.875rem 0 .75rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem}.icon[_ngcontent-%COMP%]{margin:.75rem;border-radius:0}.icon_highlighted[_ngcontent-%COMP%]{transform:scale(1.6);filter:drop-shadow(.125rem .0625rem 0 var(--tui-primary))}"],changeDetection:0}),Object(v.b)([Object(C.ed)()],e.prototype,"icons",null),e})();const A=["header",$localize`:␟c51604c3bfceeac96ceabb51c1a0caee70f85aa6␟990341683702498937:Icons`];var N;function R(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18nStart"](1,N),l["\u0275\u0275element"](2,"a",3),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](3,"icons-group",4)),2&e){const e=l["\u0275\u0275nextContext"]().$implicit,t=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("icons",t.icons[e])}}function V(e,t){1&e&&l["\u0275\u0275template"](0,R,4,1,"ng-template",2),2&e&&l["\u0275\u0275property"]("pageTab",t.$implicit)}N=$localize`:␟160ab2f8367182879bce31a0124ff3bbdf2af420␟6811848323908488450: These icons can be used by name in ${"\ufffd#2\ufffd"}:START_LINK:Svg${"\ufffd/#2\ufffd"}:CLOSE_LINK: component and all Taiga UI component accepting icons as input. `;let _=(()=>{class e{constructor(e){this.icons=e,this.keys=Object.keys(this.icons)}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](g))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["icons"]],decls:3,vars:1,consts:[[6,"header"],[4,"ngFor","ngForOf"],[3,"pageTab"],["tuiLink","","routerLink","/components/svg"],[3,"icons"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,A),l["\u0275\u0275template"](2,V,1,1,void 0,1),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.keys))},directives:[h.a,i.s,b.a,y.a,o.e,z],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.ReactiveFormsModule,c.FormsModule,i.c,r.ub,r.Sb,s.lb,s.Y,r.W,r.Vb,r.pb,a.i,o.f.forChild(Object(a.p)(_))]]}),e})()}}]);