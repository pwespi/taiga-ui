(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{"n1A/":function(n,e,t){"use strict";t.r(e),e.default="import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {tuiScaleIn} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-scale-in-example',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n    animations: [tuiScaleIn],\n})\nexport class TuiScaleInExample {\n    @Input()\n    speed = 0;\n\n    readonly todoTasks = [\n        {title: 'Install Angular', completed: true},\n        {title: 'Install Taiga UI', completed: false},\n        {title: 'Look into \"Getting Started\"', completed: false},\n    ] as const;\n\n    @tuiPure\n    getAnimation(duration: number) {\n        return {\n            value: '',\n            params: {duration},\n        } as const;\n    }\n}\n"}}]);