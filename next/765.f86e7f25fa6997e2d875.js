(window.webpackJsonp=window.webpackJsonp||[]).push([[765],{VQP5:function(t,n,a){"use strict";a.r(n),n.default='<table tuiTable class="table" [columns]="columns">\n    <thead>\n        <tr tuiThGroup>\n            <th tuiTh [resizable]="true">Name</th>\n            <th tuiTh>Balance</th>\n        </tr>\n    </thead>\n    <tbody tuiTbody [data]="data">\n        <tr *tuiRow="let item of data" tuiTr>\n            <td *tuiCell="\'balance\'" tuiTd>\n                {{item.balance | tuiFormatNumber}}\n            </td>\n        </tr>\n    </tbody>\n</table>\n'}}]);