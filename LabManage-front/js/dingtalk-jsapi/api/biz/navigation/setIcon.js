"use strict";function setIcon$(e){return ddSdk_1.ddSdk.invokeAPI(apiName,e)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.setIcon$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiHelper_1=require("../../../lib/apiHelper"),apiName="biz.navigation.setIcon",paramsDeal=apiHelper_1.genDefaultParamsDealFn({watch:!0,showIcon:!0,iconIndex:1});ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.4.0",paramsDeal:paramsDeal},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.4.0",paramsDeal:paramsDeal},_a)),exports.setIcon$=setIcon$,exports.default=setIcon$;