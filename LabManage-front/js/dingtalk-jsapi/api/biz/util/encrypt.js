"use strict";function encrypt$(d){return ddSdk_1.ddSdk.invokeAPI(apiName,d)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.encrypt$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiName="biz.util.encrypt";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.pc]={vs:"3.0.0"},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.9.1"},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.9.1"},_a)),exports.encrypt$=encrypt$,exports.default=encrypt$;