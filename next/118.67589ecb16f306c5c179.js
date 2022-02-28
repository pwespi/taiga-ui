(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{OFrn:function(t,e,n){"use strict";n.r(e),n.d(e,"DialogsModule",(function(){return T}));var o=n("An66"),r=n("1VvW"),i=n("SVIu"),a=n("Qq0t"),s=n("dvRg"),p=n("kZht"),c=n("OZlg"),l=n("iyc4"),m=n("TLy2"),u=n("fmdS"),d=n("zV1d"),g=n("cweO");function f(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"div",4),p["\u0275\u0275element"](1,"tui-avatar",5),p["\u0275\u0275text"](2," \xabChoose wisely\xbb "),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("rounded",!0))}function h(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"div",4),p["\u0275\u0275element"](1,"tui-avatar",6),p["\u0275\u0275text"](2," \xabYou chose poorly\xbb "),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("rounded",!0))}function y(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"div",4),p["\u0275\u0275text"](1," \xabYou have chosen wisely\xbb "),p["\u0275\u0275element"](2,"tui-avatar",7),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("rounded",!0))}let v=(()=>{class t{constructor(t,e){this.notifications=t,this.promptService=e}onClick(t,e,n){this.promptService.open(t,{heading:"Taiga UI is the best",buttons:["Absolutely!","No way!"]}).pipe(Object(m.a)(t=>t?this.notifications.show(n,{status:"success"}):this.notifications.show(e,{status:"error"}))).subscribe()}}return t.\u0275fac=function(e){return new(e||t)(p["\u0275\u0275directiveInject"](a.Eb),p["\u0275\u0275directiveInject"](u.b))},t.\u0275cmp=p["\u0275\u0275defineComponent"]({type:t,selectors:[["tui-dialogs-example-1"]],decls:8,vars:0,consts:[["tuiButton","",3,"click"],["choose",""],["poorly",""],["wisely",""],[1,"wrapper"],["avatarUrl","assets/images/choose.png","size","l",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/poorly.png",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/wisely.png",1,"tui-space_left-1",3,"rounded"]],template:function(t,e){if(1&t){const t=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",0),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](t);const n=p["\u0275\u0275reference"](3),o=p["\u0275\u0275reference"](5),r=p["\u0275\u0275reference"](7);return e.onClick(n,o,r)})),p["\u0275\u0275text"](1,"Show prompt"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](2,f,3,1,"ng-template",null,1,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275template"](4,h,3,1,"ng-template",null,2,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275template"](6,y,3,1,"ng-template",null,3,p["\u0275\u0275templateRefExtractor"])}},directives:[d.a,g.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),t})();const b=["header",$localize`:␟9d6e1408c0a40d04f5eeb6f5d16b8706aded4261␟8564515230059500750:Dialogs`];var w;w=$localize`:␟a961c44abe17a269b883d349b02e8226016895fd␟3463395013752872705: You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. `;const x=["heading",$localize`:␟bd9aa8d13320476087ef2b67437c8078fbb05a07␟2620483019814878192:Custom dialog`];let P=(()=>{class t{constructor(){this.example1={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {switchMap} from 'rxjs/operators';\n\nimport {PromptService} from './prompt/prompt.service';\n\n@Component({\n    selector: 'tui-dialogs-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport class TuiDialogsExample1 {\n    constructor(\n        @Inject(TuiNotificationsService)\n        private readonly notifications: TuiNotificationsService,\n        @Inject(PromptService) private readonly promptService: PromptService,\n    ) {}\n\n    onClick(\n        choose: PolymorpheusContent<any>,\n        poorly: PolymorpheusContent<any>,\n        wisely: PolymorpheusContent<any>,\n    ) {\n        this.promptService\n            .open(choose, {\n                heading: 'Taiga UI is the best',\n                buttons: ['Absolutely!', 'No way!'],\n            })\n            .pipe(\n                switchMap(response =>\n                    response\n                        ? this.notifications.show(wisely, {\n                              status: TuiNotification.Success,\n                          })\n                        : this.notifications.show(poorly, {\n                              status: TuiNotification.Error,\n                          }),\n                ),\n            )\n            .subscribe();\n    }\n}\n",HTML:'<button tuiButton (click)="onClick(choose, poorly, wisely)">Show prompt</button>\n<ng-template #choose>\n    <div class="wrapper">\n        <tui-avatar\n            avatarUrl="assets/images/choose.png"\n            size="l"\n            class="tui-space_right-2"\n            [rounded]="true"\n        ></tui-avatar>\n        \xabChoose wisely\xbb\n    </div>\n</ng-template>\n<ng-template #poorly>\n    <div class="wrapper">\n        <tui-avatar\n            avatarUrl="assets/images/poorly.png"\n            class="tui-space_right-2"\n            [rounded]="true"\n        ></tui-avatar>\n        \xabYou chose poorly\xbb\n    </div>\n</ng-template>\n<ng-template #wisely>\n    <div class="wrapper">\n        \xabYou have chosen wisely\xbb\n        <tui-avatar\n            avatarUrl="assets/images/wisely.png"\n            class="tui-space_left-1"\n            [rounded]="true"\n        ></tui-avatar>\n    </div>\n</ng-template>\n',LESS:".wrapper {\n    display: flex;\n    align-items: center;\n}\n","prompt/prompt.service.ts":"import {Injectable, Provider} from '@angular/core';\nimport {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\nimport {PromptComponent} from './prompt.component';\nimport {PromptOptions} from './prompt-options';\n\n@Injectable({\n    providedIn: 'root',\n})\nexport class PromptService extends AbstractTuiDialogService<PromptOptions> {\n    readonly defaultOptions = {\n        heading: 'Are you sure?',\n        buttons: ['Yes', 'No'],\n    } as const;\n\n    readonly component = new PolymorpheusComponent(PromptComponent);\n}\n\n// Add this provider to app module\nexport const PROMPT_PROVIDER: Provider = {\n    provide: TUI_DIALOGS,\n    useExisting: PromptService,\n    multi: true,\n};\n","prompt/prompt-options.ts":"export interface PromptOptions {\n    readonly heading: string;\n    readonly buttons: readonly [string, string];\n}\n","prompt/prompt.component.ts":"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\nimport {PromptOptions} from './prompt-options';\n\n@Component({\n    selector: 'prompt',\n    templateUrl: './prompt.template.html',\n    styleUrls: ['./prompt.style.less'],\n    changeDetection,\n})\nexport class PromptComponent {\n    // Here you get options + content + id + observer\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<PromptOptions, boolean>,\n    ) {}\n\n    onClick(response: boolean) {\n        this.context.completeWith(response);\n    }\n}\n","prompt/prompt.template.html":'\x3c!-- Add id for accessibility purposes --\x3e\n<h2 [id]="context.id">{{ context.heading }}</h2>\n<section\n    polymorpheus-outlet\n    [content]="context.content"\n    [context]="context"\n></section>\n<p class="buttons">\n    <button tuiButton class="tui-space_right-3" (click)="onClick(true)">\n        {{ context.buttons[0] }}\n    </button>\n    <button tuiButton appearance="secondary" (click)="onClick(false)">\n        {{ context.buttons[1] }}\n    </button>\n</p>\n',"prompt/prompt.style.less":":host {\n    display: block;\n    padding: 1.5rem;\n    margin: auto;\n    border-radius: 0 0 0.75rem 0.75rem;\n    background: var(--tui-base-01);\n    box-shadow: inset 0 4px var(--tui-accent);\n    animation: tuiReveal var(--tui-duration), tuiFadeIn var(--tui-duration);\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    margin: 1.5rem 0 0;\n}\n","prompt/prompt.module.ts":"import {CommonModule} from '@angular/common';\nimport {NgModule} from '@angular/core';\nimport {TuiButtonModule} from '@taiga-ui/core';\nimport {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\n\nimport {PromptComponent} from './prompt.component';\nimport {PROMPT_PROVIDER} from './prompt.service';\n\n@NgModule({\n    imports: [TuiButtonModule, PolymorpheusModule, CommonModule],\n    // Add this provider to app module (it is here for stackblitz demonstration purpose only)\n    providers: [PROMPT_PROVIDER],\n    declarations: [PromptComponent],\n    exports: [PromptComponent],\n    entryComponents: [PromptComponent],\n})\nexport class PromptModule {}\n"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p["\u0275\u0275defineComponent"]({type:t,selectors:[["dialogs"]],decls:7,vars:1,consts:[[6,"header"],["id","custom-dialog",3,"content",6,"heading"]],template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,b),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18n"](3,w),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-doc-example",1),p["\u0275\u0275i18nAttributes"](5,x),p["\u0275\u0275element"](6,"tui-dialogs-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("content",e.example1))},directives:[c.a,l.a,v],encapsulation:2,changeDetection:0}),t})();var C=n("cWK9");let S=(()=>{class t{}return t.\u0275mod=p["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},providers:[u.a],imports:[[a.W,C.c,o.c]]}),t})(),T=(()=>{class t{}return t.\u0275mod=p["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.c,S,a.W,s.y,i.i,r.f.forChild(Object(i.p)(P))]]}),t})()}}]);