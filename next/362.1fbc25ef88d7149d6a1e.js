(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{"24QG":function(e,n,i){"use strict";i.r(n),n.default='<tui-input-files\n    accept="image/*"\n    [multiple]="true"\n    [formControl]="control"\n    (reject)="onReject($event)"\n></tui-input-files>\n\n<tui-files class="tui-space_top-1">\n    <tui-file\n        *ngFor="let file of control.valueChanges | async"\n        [file]="file"\n        (removed)="removeFile(file)"\n    ></tui-file>\n\n    <tui-file\n        *ngFor="let file of rejectedFiles"\n        state="error"\n        [file]="file"\n        (removed)="clearRejected(file)"\n    ></tui-file>\n</tui-files>\n'}}]);