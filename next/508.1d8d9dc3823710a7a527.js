(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{UzLJ:function(n,t,e){"use strict";e.r(t),t.default='<tui-primitive-textfield\n    [invalid]="computedInvalid"\n    [focusable]="focusable"\n    [disabled]="disabled"\n    [readOnly]="readOnly"\n    [iconContent]="iconContent"\n    [value]="value"\n    (valueChange)="onValueChange($event)"\n    (focusedChange)="onFocused($event)"\n>\n    <ng-content></ng-content>\n    <input tuiTextfield [type]="inputType" />\n</tui-primitive-textfield>\n\n<ng-template #iconContent>\n    <tui-svg\n        tuiHintId="not_required"\n        class="icon"\n        [tuiHint]="hintContent"\n        [src]="icon"\n        (click)="togglePasswordVisibility()"\n    ></tui-svg>\n</ng-template>\n\n<ng-template #hintContent>{{hint}}</ng-template>\n'}}]);