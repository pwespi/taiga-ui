(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{"+6K6":function(t,e,n){"use strict";n.r(e),e.default='<tui-select\n    *tuiLet="items$ | async as items"\n    class="b-form"\n    [tuiTextfieldLabelOutside]="true"\n    [valueContent]="items ? stringify(items) : loading"\n    [(ngModel)]="value"\n>\n    <ng-template tuiDataList>\n        <tui-data-list *ngIf="items else loading">\n            <button *ngFor="let item of items" tuiOption [value]="item.id">\n                {{item.name}}\n            </button>\n        </tui-data-list>\n    </ng-template>\n    <ng-template #loading>\n        <tui-loader class="tui-space_vertical-3 loader"></tui-loader>\n    </ng-template>\n</tui-select>\n'}}]);