"use strict";function externalEditForm$(d){return ddSdk_1.ddSdk.invokeAPI(apiName,d)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.externalEditForm$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiName="biz.contact.externalEditForm";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"3.0"},_a[ddSdk_1.ENV_ENUM.android]={vs:"3.0"},_a)),exports.externalEditForm$=externalEditForm$,exports.default=externalEditForm$;