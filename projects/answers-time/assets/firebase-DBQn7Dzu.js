(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Na={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],c=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,c=a?n[i+1]:0,h=i+2<n.length,g=h?n[i+2]:0,I=o>>2,b=(o&3)<<4|c>>4;let C=(c&15)<<2|g>>6,V=g&63;h||(V=64,a||(C=64)),r.push(t[I],t[b],t[C],t[V])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ku(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const g=i<n.length?t[n.charAt(i)]:64;++i;const b=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||c==null||g==null||b==null)throw new Nh;const C=o<<2|c>>4;if(r.push(C),g!==64){const V=c<<4&240|g>>2;if(r.push(V),b!==64){const k=g<<6&192|b;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oh=function(n){const e=Ku(n);return Qu.encodeByteArray(e,!0)},ci=function(n){return Oh(n).replace(/\./g,"")},Yu=function(n){try{return Qu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=()=>Lh().__FIREBASE_DEFAULTS__,xh=()=>{if(typeof process>"u"||typeof Na>"u")return;const n=Na.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Uh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yu(n[1]);return e&&JSON.parse(e)},Si=()=>{try{return Mh()||xh()||Uh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ju=n=>{var e,t;return(t=(e=Si())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Fh=n=>{const e=Ju(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xu=()=>{var n;return(n=Si())===null||n===void 0?void 0:n.config},Zu=n=>{var e;return(e=Si())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ci(JSON.stringify(t)),ci(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function $h(){var n;const e=(n=Si())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gh(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Kh(){return!$h()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qh(){try{return typeof indexedDB=="object"}catch{return!1}}function Yh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="FirebaseError";class wt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Jh,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Xh(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new wt(i,c,r)}}function Xh(n,e){return n.replace(Zh,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Zh=/\{\$([^}]+)}/g;function ed(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function li(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Oa(o)&&Oa(a)){if(!li(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Oa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function er(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function tr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function td(n,e){const t=new nd(n,e);return t.subscribe.bind(t)}class nd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");rd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ls),i.error===void 0&&(i.error=ls),i.complete===void 0&&(i.complete=ls);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ls(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n){return n&&n._delegate?n._delegate:n}class Zt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Bh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(od(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sd(n){return n===Yt?void 0:n}function od(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new id(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const ud={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},cd=re.INFO,ld={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},hd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=ld[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hs{constructor(e){this.name=e,this._logLevel=cd,this._logHandler=hd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ud[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const dd=(n,e)=>e.some(t=>n instanceof t);let La,Ma;function fd(){return La||(La=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pd(){return Ma||(Ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ec=new WeakMap,Is=new WeakMap,tc=new WeakMap,hs=new WeakMap,Ws=new WeakMap;function gd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Dt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ec.set(t,n)}).catch(()=>{}),Ws.set(e,n),e}function md(n){if(Is.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Is.set(n,e)}let Ts={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Is.get(n);if(e==="objectStoreNames")return n.objectStoreNames||tc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _d(n){Ts=n(Ts)}function yd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ds(this),e,...t);return tc.set(r,e.sort?e.sort():[e]),Dt(r)}:pd().includes(n)?function(...e){return n.apply(ds(this),e),Dt(ec.get(this))}:function(...e){return Dt(n.apply(ds(this),e))}}function vd(n){return typeof n=="function"?yd(n):(n instanceof IDBTransaction&&md(n),dd(n,fd())?new Proxy(n,Ts):n)}function Dt(n){if(n instanceof IDBRequest)return gd(n);if(hs.has(n))return hs.get(n);const e=vd(n);return e!==n&&(hs.set(n,e),Ws.set(e,n)),e}const ds=n=>Ws.get(n);function Ed(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),c=Dt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Dt(a.result),h.oldVersion,h.newVersion,Dt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",g=>i(g.oldVersion,g.newVersion,g))}).catch(()=>{}),c}const wd=["get","getKey","getAll","getAllKeys","count"],Id=["put","add","delete","clear"],fs=new Map;function xa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fs.get(e))return fs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Id.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wd.includes(t)))return;const o=async function(a,...c){const h=this.transaction(a,i?"readwrite":"readonly");let g=h.store;return r&&(g=g.index(c.shift())),(await Promise.all([g[t](...c),i&&h.done]))[0]};return fs.set(e,o),o}_d(n=>({...n,get:(e,t,r)=>xa(e,t)||n.get(e,t,r),has:(e,t)=>!!xa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ad(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ad(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const As="@firebase/app",Ua="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Hs("@firebase/app"),bd="@firebase/app-compat",Rd="@firebase/analytics-compat",Sd="@firebase/analytics",Pd="@firebase/app-check-compat",Cd="@firebase/app-check",kd="@firebase/auth",Dd="@firebase/auth-compat",Vd="@firebase/database",Nd="@firebase/data-connect",Od="@firebase/database-compat",Ld="@firebase/functions",Md="@firebase/functions-compat",xd="@firebase/installations",Ud="@firebase/installations-compat",Fd="@firebase/messaging",Bd="@firebase/messaging-compat",jd="@firebase/performance",qd="@firebase/performance-compat",$d="@firebase/remote-config",zd="@firebase/remote-config-compat",Hd="@firebase/storage",Wd="@firebase/storage-compat",Gd="@firebase/firestore",Kd="@firebase/vertexai",Qd="@firebase/firestore-compat",Yd="firebase",Jd="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]",Xd={[As]:"fire-core",[bd]:"fire-core-compat",[Sd]:"fire-analytics",[Rd]:"fire-analytics-compat",[Cd]:"fire-app-check",[Pd]:"fire-app-check-compat",[kd]:"fire-auth",[Dd]:"fire-auth-compat",[Vd]:"fire-rtdb",[Nd]:"fire-data-connect",[Od]:"fire-rtdb-compat",[Ld]:"fire-fn",[Md]:"fire-fn-compat",[xd]:"fire-iid",[Ud]:"fire-iid-compat",[Fd]:"fire-fcm",[Bd]:"fire-fcm-compat",[jd]:"fire-perf",[qd]:"fire-perf-compat",[$d]:"fire-rc",[zd]:"fire-rc-compat",[Hd]:"fire-gcs",[Wd]:"fire-gcs-compat",[Gd]:"fire-fst",[Qd]:"fire-fst-compat",[Kd]:"fire-vertex","fire-js":"fire-js",[Yd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Map,Zd=new Map,Rs=new Map;function Fa(n,e){try{n.container.addComponent(e)}catch(t){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function An(n){const e=n.name;if(Rs.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;Rs.set(e,n);for(const t of hi.values())Fa(t,n);for(const t of Zd.values())Fa(t,n);return!0}function Gs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ft(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new Er("app","Firebase",ef);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=Jd;function nc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(t||(t=Xu()),!t)throw Vt.create("no-options");const o=hi.get(i);if(o){if(li(t,o.options)&&li(r,o.config))return o;throw Vt.create("duplicate-app",{appName:i})}const a=new ad(i);for(const h of Rs.values())a.addComponent(h);const c=new tf(t,r,a);return hi.set(i,c),c}function rc(n=bs){const e=hi.get(n);if(!e&&n===bs&&Xu())return nc();if(!e)throw Vt.create("no-app",{appName:n});return e}function Nt(n,e,t){var r;let i=(r=Xd[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(c.join(" "));return}An(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="firebase-heartbeat-database",rf=1,lr="firebase-heartbeat-store";let ps=null;function ic(){return ps||(ps=Ed(nf,rf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),ps}async function sf(n){try{const t=(await ic()).transaction(lr),r=await t.objectStore(lr).get(sc(n));return await t.done,r}catch(e){if(e instanceof wt)_t.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(t.message)}}}async function Ba(n,e){try{const r=(await ic()).transaction(lr,"readwrite");await r.objectStore(lr).put(e,sc(n)),await r.done}catch(t){if(t instanceof wt)_t.warn(t.message);else{const r=Vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_t.warn(r.message)}}}function sc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=1024,af=30*24*60*60*1e3;class uf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ja();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=af}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ja(),{heartbeatsToSend:r,unsentEntries:i}=cf(this._heartbeatsCache.heartbeats),o=ci(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return _t.warn(t),""}}}function ja(){return new Date().toISOString().substring(0,10)}function cf(n,e=of){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),qa(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),qa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class lf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qh()?Yh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ba(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ba(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qa(n){return ci(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n){An(new Zt("platform-logger",e=>new Td(e),"PRIVATE")),An(new Zt("heartbeat",e=>new uf(e),"PRIVATE")),Nt(As,Ua,n),Nt(As,Ua,"esm2017"),Nt("fire-js","")}hf("");var df="firebase",ff="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(df,ff,"app");function Ks(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function oc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pf=oc,ac=new Er("auth","Firebase",oc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Hs("@firebase/auth");function gf(n,...e){di.logLevel<=re.WARN&&di.warn(`Auth (${Nn}): ${n}`,...e)}function ei(n,...e){di.logLevel<=re.ERROR&&di.error(`Auth (${Nn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,...e){throw Qs(n,...e)}function rt(n,...e){return Qs(n,...e)}function uc(n,e,t){const r=Object.assign(Object.assign({},pf()),{[e]:t});return new Er("auth","Firebase",r).create(e,{appName:n.name})}function Ot(n){return uc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ac.create(n,...e)}function J(n,e,...t){if(!n)throw Qs(e,...t)}function pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ei(e),new Error(e)}function yt(n,e){n||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function mf(){return $a()==="http:"||$a()==="https:"}function $a(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mf()||Hh()||"connection"in navigator)?navigator.onLine:!0}function yf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,yt(t>e,"Short delay should be less than long delay!"),this.isMobile=qh()||Wh()}get(){return _f()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n,e){yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=new Ir(3e4,6e4);function sn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qt(n,e,t,r,i={}){return lc(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=wr(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:h},o);return zh()||(g.referrerPolicy="no-referrer"),cc.fetch()(hc(n,n.config.apiHost,t,c),g)})}async function lc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},vf),e);try{const i=new If(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Gr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[h,g]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Gr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Gr(n,"user-disabled",a);const I=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw uc(n,I,g);tt(n,I)}}catch(i){if(i instanceof wt)throw i;tt(n,"network-request-failed",{message:String(i)})}}async function Pi(n,e,t,r,i={}){const o=await qt(n,e,t,r,i);return"mfaPendingCredential"in o&&tt(n,"multi-factor-auth-required",{_serverResponse:o}),o}function hc(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ys(n.config,i):`${n.config.apiScheme}://${i}`}function wf(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class If{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),Ef.get())})}}function Gr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=rt(n,e,r);return i.customData._tokenResponse=t,i}function za(n){return n!==void 0&&n.enterprise!==void 0}class Tf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return wf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Af(n,e){return qt(n,"GET","/v2/recaptchaConfig",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(n,e){return qt(n,"POST","/v1/accounts:delete",e)}async function dc(n,e){return qt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rf(n,e=!1){const t=qe(n),r=await t.getIdToken(e),i=Js(r);J(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:sr(gs(i.auth_time)),issuedAtTime:sr(gs(i.iat)),expirationTime:sr(gs(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function gs(n){return Number(n)*1e3}function Js(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yu(t);return i?JSON.parse(i):(ei("Failed to decode base64 JWT payload"),null)}catch(i){return ei("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ha(n){const e=Js(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wt&&Sf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Sf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await hr(n,dc(t,{idToken:r}));J(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?fc(o.providerUserInfo):[],c=kf(n.providerData,a),h=n.isAnonymous,g=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),I=h?g:!1,b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ps(o.createdAt,o.lastLoginAt),isAnonymous:I};Object.assign(n,b)}async function Cf(n){const e=qe(n);await fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kf(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fc(n){return n.map(e=>{var{providerId:t}=e,r=Ks(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(n,e){const t=await lc(n,{},async()=>{const r=wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=hc(n,i,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",cc.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vf(n,e){return qt(n,"POST","/v2/accounts:revokeToken",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ha(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=Ha(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Df(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new En;return r&&(J(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(J(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Ks(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ps(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await hr(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rf(this,e)}reload(){return Cf(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await fi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(Ot(this.auth));const e=await this.getIdToken();return await hr(this,bf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,c,h,g,I;const b=(r=t.displayName)!==null&&r!==void 0?r:void 0,C=(i=t.email)!==null&&i!==void 0?i:void 0,V=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,A=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,L=(g=t.createdAt)!==null&&g!==void 0?g:void 0,U=(I=t.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:M,emailVerified:x,isAnonymous:G,providerData:S,stsTokenManager:v}=t;J(M&&v,e,"internal-error");const d=En.fromJSON(this.name,v);J(typeof M=="string",e,"internal-error"),bt(b,e.name),bt(C,e.name),J(typeof x=="boolean",e,"internal-error"),J(typeof G=="boolean",e,"internal-error"),bt(V,e.name),bt(k,e.name),bt(O,e.name),bt(A,e.name),bt(L,e.name),bt(U,e.name);const p=new gt({uid:M,auth:e,email:C,emailVerified:x,displayName:b,isAnonymous:G,photoURL:k,phoneNumber:V,tenantId:O,stsTokenManager:d,createdAt:L,lastLoginAt:U});return S&&Array.isArray(S)&&(p.providerData=S.map(f=>Object.assign({},f))),A&&(p._redirectEventId=A),p}static async _fromIdTokenResponse(e,t,r=!1){const i=new En;i.updateFromServerResponse(t);const o=new gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fi(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];J(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?fc(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new En;c.updateFromIdToken(r);const h=new gt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ps(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,g),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Map;function mt(n){yt(n instanceof Function,"Expected a class definition");let e=Wa.get(n);return e?(yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wa.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pc.type="NONE";const Ga=pc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n,e,t){return`firebase:${n}:${e}:${t}`}class wn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ti(this.userKey,i.apiKey,o),this.fullPersistenceKey=ti("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new wn(mt(Ga),e,r);const i=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let o=i[0]||mt(Ga);const a=ti(r,e.config.apiKey,e.name);let c=null;for(const g of t)try{const I=await g._get(a);if(I){const b=gt._fromJSON(e,I);g!==o&&(c=b),o=g;break}}catch{}const h=i.filter(g=>g._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new wn(o,e,r):(o=h[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async g=>{if(g!==o)try{await g._remove(a)}catch{}})),new wn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ec(e))return"Blackberry";if(wc(e))return"Webos";if(mc(e))return"Safari";if((e.includes("chrome/")||_c(e))&&!e.includes("edge/"))return"Chrome";if(vc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gc(n=je()){return/firefox\//i.test(n)}function mc(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _c(n=je()){return/crios\//i.test(n)}function yc(n=je()){return/iemobile/i.test(n)}function vc(n=je()){return/android/i.test(n)}function Ec(n=je()){return/blackberry/i.test(n)}function wc(n=je()){return/webos/i.test(n)}function Xs(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Nf(n=je()){var e;return Xs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Of(){return Gh()&&document.documentMode===10}function Ic(n=je()){return Xs(n)||vc(n)||wc(n)||Ec(n)||/windows phone/i.test(n)||yc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n,e=[]){let t;switch(n){case"Browser":t=Ka(je());break;case"Worker":t=`${Ka(je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,c)=>{try{const h=e(o);a(h)}catch(h){c(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(n,e={}){return qt(n,"GET","/v2/passwordPolicy",sn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=6;class Uf{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:xf,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,c;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(c=h.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qa(this),this.idTokenSubscription=new Qa(this),this.beforeStateQueue=new Lf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ac,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dc(this,{idToken:e}),r=await gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(Ot(this));const t=e?qe(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(Ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(Ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mf(this),t=new Uf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vf(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mt(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function On(n){return qe(n)}class Qa{constructor(e){this.auth=e,this.observer=null,this.addObserver=td(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bf(n){Ci=n}function Ac(n){return Ci.loadJS(n)}function jf(){return Ci.recaptchaEnterpriseScript}function qf(){return Ci.gapiScript}function $f(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class zf{constructor(){this.enterprise=new Hf}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Hf{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Wf="recaptcha-enterprise",bc="NO_RECAPTCHA";class Gf{constructor(e){this.type=Wf,this.auth=On(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{Af(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const g=new Tf(h);return o.tenantId==null?o._agentRecaptchaConfig=g:o._tenantRecaptchaConfigs[o.tenantId]=g,a(g.siteKey)}}).catch(h=>{c(h)})})}function i(o,a,c){const h=window.grecaptcha;za(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(g=>{a(g)}).catch(()=>{a(bc)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zf().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(c=>{if(!t&&za(window.grecaptcha))i(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=jf();h.length!==0&&(h+=c),Ac(h).then(()=>{i(c,o,a)}).catch(g=>{a(g)})}}).catch(c=>{a(c)})})}}async function Ya(n,e,t,r=!1,i=!1){const o=new Gf(n);let a;if(i)a=bc;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,g=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:g,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ja(n,e,t,r,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ya(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ya(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n,e){const t=Gs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(li(o,e??{}))return i;tt(i,"already-initialized")}return t.initialize({options:e})}function Qf(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(mt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Yf(n,e,t){const r=On(n);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Rc(e),{host:a,port:c}=Jf(e),h=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Xf()}function Rc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Jf(n){const e=Rc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Xa(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Xa(a)}}}function Xa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Xf(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}async function Zf(n,e){return qt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(n,e){return Pi(n,"POST","/v1/accounts:signInWithPassword",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(n,e){return Pi(n,"POST","/v1/accounts:signInWithEmailLink",sn(n,e))}async function np(n,e){return Pi(n,"POST","/v1/accounts:signInWithEmailLink",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Zs{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new dr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new dr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ja(e,t,"signInWithPassword",ep);case"emailLink":return tp(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ja(e,r,"signUpPassword",Zf);case"emailLink":return np(e,{idToken:t,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(n,e){return Pi(n,"POST","/v1/accounts:signInWithIdp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="http://localhost";class en extends Zs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Ks(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new en(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return In(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,In(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,In(e,t)}buildRequest(){const e={requestUri:rp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sp(n){const e=er(tr(n)).link,t=e?er(tr(e)).deep_link_id:null,r=er(tr(n)).deep_link_id;return(r?er(tr(r)).link:null)||r||t||e||n}class eo{constructor(e){var t,r,i,o,a,c;const h=er(tr(e)),g=(t=h.apiKey)!==null&&t!==void 0?t:null,I=(r=h.oobCode)!==null&&r!==void 0?r:null,b=ip((i=h.mode)!==null&&i!==void 0?i:null);J(g&&I&&b,"argument-error"),this.apiKey=g,this.operation=b,this.code=I,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=h.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=sp(e);try{return new eo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.providerId=Ln.PROVIDER_ID}static credential(e,t){return dr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=eo.parseLink(t);return J(r,"argument-error"),dr._fromEmailAndCode(e,r.code,r.tenantId)}}Ln.PROVIDER_ID="password";Ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Sc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Tr{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return en._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return St.credential(t,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Tr{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Tr{constructor(){super("twitter.com")}static credential(e,t){return en._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ct.credential(t,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await gt._fromIdTokenResponse(e,r,i),a=Za(r);return new bn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Za(r);return new bn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Za(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends wt{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pi.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new pi(e,t,r,i)}}function Pc(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?pi._fromErrorAndOperation(n,o,e,r):o})}async function op(n,e,t=!1){const r=await hr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return bn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(Ot(r));const i="reauthenticate";try{const o=await hr(n,Pc(r,i,e,n),t);J(o.idToken,r,"internal-error");const a=Js(o.idToken);J(a,r,"internal-error");const{sub:c}=a;return J(n.uid===c,r,"user-mismatch"),bn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(n,e,t=!1){if(ft(n.app))return Promise.reject(Ot(n));const r="signIn",i=await Pc(n,r,e),o=await bn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function up(n,e){return Cc(On(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(n){const e=On(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function lp(n,e,t){return ft(n.app)?Promise.reject(Ot(n)):up(qe(n),Ln.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cp(n),r})}function hp(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function dp(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}function kc(n,e,t,r){return qe(n).onAuthStateChanged(e,t,r)}function Dc(n){return qe(n).signOut()}const gi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gi,"1"),this.storage.removeItem(gi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=1e3,pp=10;class Nc extends Vc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ic(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Of()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},fp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nc.type="LOCAL";const gp=Nc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends Vc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Oc.type="SESSION";const Lc=Oc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ki(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async g=>g(t.origin,o)),h=await mp(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ki.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,h)=>{const g=to("",20);i.port1.start();const I=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(b){const C=b;if(C.data.eventId===g)switch(C.data.status){case"ack":clearTimeout(I),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(C.data.response);break;default:clearTimeout(I),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function yp(n){it().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function vp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ep(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wp(){return Mc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="firebaseLocalStorageDb",Ip=1,mi="firebaseLocalStorage",Uc="fbase_key";class Ar{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Di(n,e){return n.transaction([mi],e?"readwrite":"readonly").objectStore(mi)}function Tp(){const n=indexedDB.deleteDatabase(xc);return new Ar(n).toPromise()}function Cs(){const n=indexedDB.open(xc,Ip);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(mi,{keyPath:Uc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(mi)?e(r):(r.close(),await Tp(),e(await Cs()))})})}async function eu(n,e,t){const r=Di(n,!0).put({[Uc]:e,value:t});return new Ar(r).toPromise()}async function Ap(n,e){const t=Di(n,!1).get(e),r=await new Ar(t).toPromise();return r===void 0?null:r.value}function tu(n,e){const t=Di(n,!0).delete(e);return new Ar(t).toPromise()}const bp=800,Rp=3;class Fc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Rp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ki._getInstance(wp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vp(),!this.activeServiceWorker)return;this.sender=new _p(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ep()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cs();return await eu(e,gi,"1"),await tu(e,gi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>eu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ap(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Di(i,!1).getAll();return new Ar(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fc.type="LOCAL";const Sp=Fc;new Ir(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n,e){return e?mt(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Zs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,t){return In(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cp(n){return Cc(n.auth,new no(n),n.bypassAuthState)}function kp(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),ap(t,new no(n),n.bypassAuthState)}async function Dp(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),op(t,new no(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cp;case"linkViaPopup":case"linkViaRedirect":return Dp;case"reauthViaPopup":case"reauthViaRedirect":return kp;default:tt(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=new Ir(2e3,1e4);class vn extends Bc{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const e=to();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vp.get())};e()}}vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="pendingRedirect",ni=new Map;class Op extends Bc{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ni.get(this.auth._key());if(!e){try{const r=await Lp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ni.set(this.auth._key(),e)}return this.bypassAuthState||ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lp(n,e){const t=Up(e),r=xp(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Mp(n,e){ni.set(n._key(),e)}function xp(n){return mt(n._redirectPersistence)}function Up(n){return ti(Np,n.config.apiKey,n.name)}async function Fp(n,e,t=!1){if(ft(n.app))return Promise.reject(Ot(n));const r=On(n),i=Pp(r,e),a=await new Op(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=10*60*1e3;class jp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!jc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(rt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bp&&this.cachedEventUids.clear(),this.cachedEventUids.has(nu(e))}saveEventToCache(e){this.cachedEventUids.add(nu(e)),this.lastProcessedEventTime=Date.now()}}function nu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(n,e={}){return qt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hp=/^https?/;async function Wp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $p(n);for(const t of e)try{if(Gp(t))return}catch{}tt(n,"unauthorized-domain")}function Gp(n){const e=Ss(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Hp.test(t))return!1;if(zp.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Ir(3e4,6e4);function ru(){const n=it().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Qp(n){return new Promise((e,t)=>{var r,i,o;function a(){ru(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ru(),t(rt(n,"network-request-failed"))},timeout:Kp.get()})}if(!((i=(r=it().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=it().gapi)===null||o===void 0)&&o.load)a();else{const c=$f("iframefcb");return it()[c]=()=>{gapi.load?a():t(rt(n,"network-request-failed"))},Ac(`${qf()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw ri=null,e})}let ri=null;function Yp(n){return ri=ri||Qp(n),ri}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new Ir(5e3,15e3),Xp="__/auth/iframe",Zp="emulator/auth/iframe",eg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ng(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ys(e,Zp):`https://${n.config.authDomain}/${Xp}`,r={apiKey:e.apiKey,appName:n.name,v:Nn},i=tg.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${wr(r).slice(1)}`}async function rg(n){const e=await Yp(n),t=it().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:ng(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eg,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=rt(n,"network-request-failed"),c=it().setTimeout(()=>{o(a)},Jp.get());function h(){it().clearTimeout(c),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sg=500,og=600,ag="_blank",ug="http://localhost";class iu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cg(n,e,t,r=sg,i=og){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h=Object.assign(Object.assign({},ig),{width:r.toString(),height:i.toString(),top:o,left:a}),g=je().toLowerCase();t&&(c=_c(g)?ag:t),gc(g)&&(e=e||ug,h.scrollbars="yes");const I=Object.entries(h).reduce((C,[V,k])=>`${C}${V}=${k},`,"");if(Nf(g)&&c!=="_self")return lg(e||"",c),new iu(null);const b=window.open(e||"",c,I);J(b,n,"popup-blocked");try{b.focus()}catch{}return new iu(b)}function lg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="__/auth/handler",dg="emulator/auth/handler",fg=encodeURIComponent("fac");async function su(n,e,t,r,i,o){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Nn,eventId:i};if(e instanceof Sc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ed(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,b]of Object.entries({}))a[I]=b}if(e instanceof Tr){const I=e.getScopes().filter(b=>b!=="");I.length>0&&(a.scopes=I.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const I of Object.keys(c))c[I]===void 0&&delete c[I];const h=await n._getAppCheckToken(),g=h?`#${fg}=${encodeURIComponent(h)}`:"";return`${pg(n)}?${wr(c).slice(1)}${g}`}function pg({config:n}){return n.emulator?Ys(n,dg):`https://${n.authDomain}/${hg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="webStorageSupport";class gg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lc,this._completeRedirectFn=Fp,this._overrideRedirectResult=Mp}async _openPopup(e,t,r,i){var o;yt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await su(e,t,r,Ss(),i);return cg(e,a,to())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await su(e,t,r,Ss(),i);return yp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(yt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await rg(e),r=new jp(e);return t.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ms,{type:ms},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ms];a!==void 0&&t(!!a),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ic()||mc()||Xs()}}const mg=gg;var ou="@firebase/auth",au="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vg(n){An(new Zt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;J(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tc(n)},g=new Ff(r,i,o,h);return Qf(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),An(new Zt("auth-internal",e=>{const t=On(e.getProvider("auth").getImmediate());return(r=>new _g(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(ou,au,yg(n)),Nt(ou,au,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=5*60,wg=Zu("authIdTokenMaxAge")||Eg;let uu=null;const Ig=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>wg)return;const i=t==null?void 0:t.token;uu!==i&&(uu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tg(n=rc()){const e=Gs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Kf(n,{popupRedirectResolver:mg,persistence:[Sp,gp,Lc]}),r=Zu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Ig(o.toString());dp(t,a,()=>a(t.currentUser)),hp(t,c=>a(c))}}const i=Ju("auth");return i&&Yf(t,`http://${i}`),t}function Ag(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Bf({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=rt("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Ag().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vg("Browser");var cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,qc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,d){function p(){}p.prototype=d.prototype,v.D=d.prototype,v.prototype=new p,v.prototype.constructor=v,v.C=function(f,m,E){for(var w=Array(arguments.length-2),K=2;K<arguments.length;K++)w[K-2]=arguments[K];return d.prototype[m].apply(f,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,d,p){p||(p=0);var f=Array(16);if(typeof d=="string")for(var m=0;16>m;++m)f[m]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(m=0;16>m;++m)f[m]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=v.g[0],p=v.g[1],m=v.g[2];var E=v.g[3],w=d+(E^p&(m^E))+f[0]+3614090360&4294967295;d=p+(w<<7&4294967295|w>>>25),w=E+(m^d&(p^m))+f[1]+3905402710&4294967295,E=d+(w<<12&4294967295|w>>>20),w=m+(p^E&(d^p))+f[2]+606105819&4294967295,m=E+(w<<17&4294967295|w>>>15),w=p+(d^m&(E^d))+f[3]+3250441966&4294967295,p=m+(w<<22&4294967295|w>>>10),w=d+(E^p&(m^E))+f[4]+4118548399&4294967295,d=p+(w<<7&4294967295|w>>>25),w=E+(m^d&(p^m))+f[5]+1200080426&4294967295,E=d+(w<<12&4294967295|w>>>20),w=m+(p^E&(d^p))+f[6]+2821735955&4294967295,m=E+(w<<17&4294967295|w>>>15),w=p+(d^m&(E^d))+f[7]+4249261313&4294967295,p=m+(w<<22&4294967295|w>>>10),w=d+(E^p&(m^E))+f[8]+1770035416&4294967295,d=p+(w<<7&4294967295|w>>>25),w=E+(m^d&(p^m))+f[9]+2336552879&4294967295,E=d+(w<<12&4294967295|w>>>20),w=m+(p^E&(d^p))+f[10]+4294925233&4294967295,m=E+(w<<17&4294967295|w>>>15),w=p+(d^m&(E^d))+f[11]+2304563134&4294967295,p=m+(w<<22&4294967295|w>>>10),w=d+(E^p&(m^E))+f[12]+1804603682&4294967295,d=p+(w<<7&4294967295|w>>>25),w=E+(m^d&(p^m))+f[13]+4254626195&4294967295,E=d+(w<<12&4294967295|w>>>20),w=m+(p^E&(d^p))+f[14]+2792965006&4294967295,m=E+(w<<17&4294967295|w>>>15),w=p+(d^m&(E^d))+f[15]+1236535329&4294967295,p=m+(w<<22&4294967295|w>>>10),w=d+(m^E&(p^m))+f[1]+4129170786&4294967295,d=p+(w<<5&4294967295|w>>>27),w=E+(p^m&(d^p))+f[6]+3225465664&4294967295,E=d+(w<<9&4294967295|w>>>23),w=m+(d^p&(E^d))+f[11]+643717713&4294967295,m=E+(w<<14&4294967295|w>>>18),w=p+(E^d&(m^E))+f[0]+3921069994&4294967295,p=m+(w<<20&4294967295|w>>>12),w=d+(m^E&(p^m))+f[5]+3593408605&4294967295,d=p+(w<<5&4294967295|w>>>27),w=E+(p^m&(d^p))+f[10]+38016083&4294967295,E=d+(w<<9&4294967295|w>>>23),w=m+(d^p&(E^d))+f[15]+3634488961&4294967295,m=E+(w<<14&4294967295|w>>>18),w=p+(E^d&(m^E))+f[4]+3889429448&4294967295,p=m+(w<<20&4294967295|w>>>12),w=d+(m^E&(p^m))+f[9]+568446438&4294967295,d=p+(w<<5&4294967295|w>>>27),w=E+(p^m&(d^p))+f[14]+3275163606&4294967295,E=d+(w<<9&4294967295|w>>>23),w=m+(d^p&(E^d))+f[3]+4107603335&4294967295,m=E+(w<<14&4294967295|w>>>18),w=p+(E^d&(m^E))+f[8]+1163531501&4294967295,p=m+(w<<20&4294967295|w>>>12),w=d+(m^E&(p^m))+f[13]+2850285829&4294967295,d=p+(w<<5&4294967295|w>>>27),w=E+(p^m&(d^p))+f[2]+4243563512&4294967295,E=d+(w<<9&4294967295|w>>>23),w=m+(d^p&(E^d))+f[7]+1735328473&4294967295,m=E+(w<<14&4294967295|w>>>18),w=p+(E^d&(m^E))+f[12]+2368359562&4294967295,p=m+(w<<20&4294967295|w>>>12),w=d+(p^m^E)+f[5]+4294588738&4294967295,d=p+(w<<4&4294967295|w>>>28),w=E+(d^p^m)+f[8]+2272392833&4294967295,E=d+(w<<11&4294967295|w>>>21),w=m+(E^d^p)+f[11]+1839030562&4294967295,m=E+(w<<16&4294967295|w>>>16),w=p+(m^E^d)+f[14]+4259657740&4294967295,p=m+(w<<23&4294967295|w>>>9),w=d+(p^m^E)+f[1]+2763975236&4294967295,d=p+(w<<4&4294967295|w>>>28),w=E+(d^p^m)+f[4]+1272893353&4294967295,E=d+(w<<11&4294967295|w>>>21),w=m+(E^d^p)+f[7]+4139469664&4294967295,m=E+(w<<16&4294967295|w>>>16),w=p+(m^E^d)+f[10]+3200236656&4294967295,p=m+(w<<23&4294967295|w>>>9),w=d+(p^m^E)+f[13]+681279174&4294967295,d=p+(w<<4&4294967295|w>>>28),w=E+(d^p^m)+f[0]+3936430074&4294967295,E=d+(w<<11&4294967295|w>>>21),w=m+(E^d^p)+f[3]+3572445317&4294967295,m=E+(w<<16&4294967295|w>>>16),w=p+(m^E^d)+f[6]+76029189&4294967295,p=m+(w<<23&4294967295|w>>>9),w=d+(p^m^E)+f[9]+3654602809&4294967295,d=p+(w<<4&4294967295|w>>>28),w=E+(d^p^m)+f[12]+3873151461&4294967295,E=d+(w<<11&4294967295|w>>>21),w=m+(E^d^p)+f[15]+530742520&4294967295,m=E+(w<<16&4294967295|w>>>16),w=p+(m^E^d)+f[2]+3299628645&4294967295,p=m+(w<<23&4294967295|w>>>9),w=d+(m^(p|~E))+f[0]+4096336452&4294967295,d=p+(w<<6&4294967295|w>>>26),w=E+(p^(d|~m))+f[7]+1126891415&4294967295,E=d+(w<<10&4294967295|w>>>22),w=m+(d^(E|~p))+f[14]+2878612391&4294967295,m=E+(w<<15&4294967295|w>>>17),w=p+(E^(m|~d))+f[5]+4237533241&4294967295,p=m+(w<<21&4294967295|w>>>11),w=d+(m^(p|~E))+f[12]+1700485571&4294967295,d=p+(w<<6&4294967295|w>>>26),w=E+(p^(d|~m))+f[3]+2399980690&4294967295,E=d+(w<<10&4294967295|w>>>22),w=m+(d^(E|~p))+f[10]+4293915773&4294967295,m=E+(w<<15&4294967295|w>>>17),w=p+(E^(m|~d))+f[1]+2240044497&4294967295,p=m+(w<<21&4294967295|w>>>11),w=d+(m^(p|~E))+f[8]+1873313359&4294967295,d=p+(w<<6&4294967295|w>>>26),w=E+(p^(d|~m))+f[15]+4264355552&4294967295,E=d+(w<<10&4294967295|w>>>22),w=m+(d^(E|~p))+f[6]+2734768916&4294967295,m=E+(w<<15&4294967295|w>>>17),w=p+(E^(m|~d))+f[13]+1309151649&4294967295,p=m+(w<<21&4294967295|w>>>11),w=d+(m^(p|~E))+f[4]+4149444226&4294967295,d=p+(w<<6&4294967295|w>>>26),w=E+(p^(d|~m))+f[11]+3174756917&4294967295,E=d+(w<<10&4294967295|w>>>22),w=m+(d^(E|~p))+f[2]+718787259&4294967295,m=E+(w<<15&4294967295|w>>>17),w=p+(E^(m|~d))+f[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(m+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+m&4294967295,v.g[3]=v.g[3]+E&4294967295}r.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var p=d-this.blockSize,f=this.B,m=this.h,E=0;E<d;){if(m==0)for(;E<=p;)i(this,v,E),E+=this.blockSize;if(typeof v=="string"){for(;E<d;)if(f[m++]=v.charCodeAt(E++),m==this.blockSize){i(this,f),m=0;break}}else for(;E<d;)if(f[m++]=v[E++],m==this.blockSize){i(this,f),m=0;break}}this.h=m,this.o+=d},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var p=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=p&255,p/=256;for(this.u(v),v=Array(16),d=p=0;4>d;++d)for(var f=0;32>f;f+=8)v[p++]=this.g[d]>>>f&255;return v};function o(v,d){var p=c;return Object.prototype.hasOwnProperty.call(p,v)?p[v]:p[v]=d(v)}function a(v,d){this.h=d;for(var p=[],f=!0,m=v.length-1;0<=m;m--){var E=v[m]|0;f&&E==d||(p[m]=E,f=!1)}this.g=p}var c={};function h(v){return-128<=v&&128>v?o(v,function(d){return new a([d|0],0>d?-1:0)}):new a([v|0],0>v?-1:0)}function g(v){if(isNaN(v)||!isFinite(v))return b;if(0>v)return A(g(-v));for(var d=[],p=1,f=0;v>=p;f++)d[f]=v/p|0,p*=4294967296;return new a(d,0)}function I(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return A(I(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=g(Math.pow(d,8)),f=b,m=0;m<v.length;m+=8){var E=Math.min(8,v.length-m),w=parseInt(v.substring(m,m+E),d);8>E?(E=g(Math.pow(d,E)),f=f.j(E).add(g(w))):(f=f.j(p),f=f.add(g(w)))}return f}var b=h(0),C=h(1),V=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-A(this).m();for(var v=0,d=1,p=0;p<this.g.length;p++){var f=this.i(p);v+=(0<=f?f:4294967296+f)*d,d*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(O(this))return"-"+A(this).toString(v);for(var d=g(Math.pow(v,6)),p=this,f="";;){var m=x(p,d).g;p=L(p,m.j(d));var E=((0<p.g.length?p.g[0]:p.h)>>>0).toString(v);if(p=m,k(p))return E+f;for(;6>E.length;)E="0"+E;f=E+f}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=L(this,v),O(v)?-1:k(v)?0:1};function A(v){for(var d=v.g.length,p=[],f=0;f<d;f++)p[f]=~v.g[f];return new a(p,~v.h).add(C)}n.abs=function(){return O(this)?A(this):this},n.add=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],f=0,m=0;m<=d;m++){var E=f+(this.i(m)&65535)+(v.i(m)&65535),w=(E>>>16)+(this.i(m)>>>16)+(v.i(m)>>>16);f=w>>>16,E&=65535,w&=65535,p[m]=w<<16|E}return new a(p,p[p.length-1]&-2147483648?-1:0)};function L(v,d){return v.add(A(d))}n.j=function(v){if(k(this)||k(v))return b;if(O(this))return O(v)?A(this).j(A(v)):A(A(this).j(v));if(O(v))return A(this.j(A(v)));if(0>this.l(V)&&0>v.l(V))return g(this.m()*v.m());for(var d=this.g.length+v.g.length,p=[],f=0;f<2*d;f++)p[f]=0;for(f=0;f<this.g.length;f++)for(var m=0;m<v.g.length;m++){var E=this.i(f)>>>16,w=this.i(f)&65535,K=v.i(m)>>>16,X=v.i(m)&65535;p[2*f+2*m]+=w*X,U(p,2*f+2*m),p[2*f+2*m+1]+=E*X,U(p,2*f+2*m+1),p[2*f+2*m+1]+=w*K,U(p,2*f+2*m+1),p[2*f+2*m+2]+=E*K,U(p,2*f+2*m+2)}for(f=0;f<d;f++)p[f]=p[2*f+1]<<16|p[2*f];for(f=d;f<2*d;f++)p[f]=0;return new a(p,0)};function U(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function M(v,d){this.g=v,this.h=d}function x(v,d){if(k(d))throw Error("division by zero");if(k(v))return new M(b,b);if(O(v))return d=x(A(v),d),new M(A(d.g),A(d.h));if(O(d))return d=x(v,A(d)),new M(A(d.g),d.h);if(30<v.g.length){if(O(v)||O(d))throw Error("slowDivide_ only works with positive integers.");for(var p=C,f=d;0>=f.l(v);)p=G(p),f=G(f);var m=S(p,1),E=S(f,1);for(f=S(f,2),p=S(p,2);!k(f);){var w=E.add(f);0>=w.l(v)&&(m=m.add(p),E=w),f=S(f,1),p=S(p,1)}return d=L(v,m.j(d)),new M(m,d)}for(m=b;0<=v.l(d);){for(p=Math.max(1,Math.floor(v.m()/d.m())),f=Math.ceil(Math.log(p)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),E=g(p),w=E.j(d);O(w)||0<w.l(v);)p-=f,E=g(p),w=E.j(d);k(E)&&(E=C),m=m.add(E),v=L(v,w)}return new M(m,v)}n.A=function(v){return x(this,v).h},n.and=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],f=0;f<d;f++)p[f]=this.i(f)&v.i(f);return new a(p,this.h&v.h)},n.or=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],f=0;f<d;f++)p[f]=this.i(f)|v.i(f);return new a(p,this.h|v.h)},n.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],f=0;f<d;f++)p[f]=this.i(f)^v.i(f);return new a(p,this.h^v.h)};function G(v){for(var d=v.g.length+1,p=[],f=0;f<d;f++)p[f]=v.i(f)<<1|v.i(f-1)>>>31;return new a(p,v.h)}function S(v,d){var p=d>>5;d%=32;for(var f=v.g.length-p,m=[],E=0;E<f;E++)m[E]=0<d?v.i(E+p)>>>d|v.i(E+p+1)<<32-d:v.i(E+p);return new a(m,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=g,a.fromString=I,Xt=a}).apply(typeof cu<"u"?cu:typeof self<"u"?self:typeof window<"u"?window:{});var Kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $c,nr,zc,ii,ks,Hc,Wc,Gc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,l){return s==Array.prototype||s==Object.prototype||(s[u]=l.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kr=="object"&&Kr];for(var u=0;u<s.length;++u){var l=s[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,u){if(u)e:{var l=r;s=s.split(".");for(var _=0;_<s.length-1;_++){var P=s[_];if(!(P in l))break e;l=l[P]}s=s[s.length-1],_=l[s],u=u(_),u!=_&&u!=null&&e(l,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var l=0,_=!1,P={next:function(){if(!_&&l<s.length){var D=l++;return{value:u(D,s[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function g(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function I(s,u,l){return s.call.apply(s.bind,arguments)}function b(s,u,l){if(!s)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,_),s.apply(u,P)}}return function(){return s.apply(u,arguments)}}function C(s,u,l){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:b,C.apply(null,arguments)}function V(s,u){var l=Array.prototype.slice.call(arguments,1);return function(){var _=l.slice();return _.push.apply(_,arguments),s.apply(this,_)}}function k(s,u){function l(){}l.prototype=u.prototype,s.aa=u.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(_,P,D){for(var q=Array(arguments.length-2),he=2;he<arguments.length;he++)q[he-2]=arguments[he];return u.prototype[P].apply(_,q)}}function O(s){const u=s.length;if(0<u){const l=Array(u);for(let _=0;_<u;_++)l[_]=s[_];return l}return[]}function A(s,u){for(let l=1;l<arguments.length;l++){const _=arguments[l];if(h(_)){const P=s.length||0,D=_.length||0;s.length=P+D;for(let q=0;q<D;q++)s[P+q]=_[q]}else s.push(_)}}class L{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(s){return/^[\s\xa0]*$/.test(s)}function M(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function x(s){return x[" "](s),s}x[" "]=function(){};var G=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function S(s,u,l){for(const _ in s)u.call(l,s[_],_,s)}function v(s,u){for(const l in s)u.call(void 0,s[l],l,s)}function d(s){const u={};for(const l in s)u[l]=s[l];return u}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(s,u){let l,_;for(let P=1;P<arguments.length;P++){_=arguments[P];for(l in _)s[l]=_[l];for(let D=0;D<p.length;D++)l=p[D],Object.prototype.hasOwnProperty.call(_,l)&&(s[l]=_[l])}}function m(s){var u=1;s=s.split(":");const l=[];for(;0<u&&s.length;)l.push(s.shift()),u--;return s.length&&l.push(s.join(":")),l}function E(s){c.setTimeout(()=>{throw s},0)}function w(){var s=de;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class K{constructor(){this.h=this.g=null}add(u,l){const _=X.get();_.set(u,l),this.h?this.h.next=_:this.g=_,this.h=_}}var X=new L(()=>new W,s=>s.reset());class W{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,me=!1,de=new K,le=()=>{const s=c.Promise.resolve(void 0);ue=()=>{s.then(Xe)}};var Xe=()=>{for(var s;s=w();){try{s.h.call(s.g)}catch(l){E(l)}var u=X;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}me=!1};function Ze(){this.s=this.s,this.C=this.C}Ze.prototype.s=!1,Ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var kr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return s}();function lt(s,u){if(Ee.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,_=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(G){e:{try{x(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else l=="mouseover"?u=s.fromElement:l=="mouseout"&&(u=s.toElement);this.relatedTarget=u,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Bn[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&lt.aa.h.call(this)}}k(lt,Ee);var Bn={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Ht="closure_listenable_"+(1e6*Math.random()|0),z=0;function y(s,u,l,_,P){this.listener=s,this.proxy=null,this.src=u,this.type=l,this.capture=!!_,this.ha=P,this.key=++z,this.da=this.fa=!1}function T(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function R(s){this.src=s,this.g={},this.h=0}R.prototype.add=function(s,u,l,_,P){var D=s.toString();s=this.g[D],s||(s=this.g[D]=[],this.h++);var q=F(s,u,_,P);return-1<q?(u=s[q],l||(u.fa=!1)):(u=new y(u,this.src,D,!!_,P),u.fa=l,s.push(u)),u};function B(s,u){var l=u.type;if(l in s.g){var _=s.g[l],P=Array.prototype.indexOf.call(_,u,void 0),D;(D=0<=P)&&Array.prototype.splice.call(_,P,1),D&&(T(u),s.g[l].length==0&&(delete s.g[l],s.h--))}}function F(s,u,l,_){for(var P=0;P<s.length;++P){var D=s[P];if(!D.da&&D.listener==u&&D.capture==!!l&&D.ha==_)return P}return-1}var $="closure_lm_"+(1e6*Math.random()|0),ne={};function fe(s,u,l,_,P){if(Array.isArray(u)){for(var D=0;D<u.length;D++)fe(s,u[D],l,_,P);return null}return l=xo(l),s&&s[Ht]?s.K(u,l,g(_)?!!_.capture:!1,P):Te(s,u,l,!1,_,P)}function Te(s,u,l,_,P,D){if(!u)throw Error("Invalid event type");var q=g(P)?!!P.capture:!!P,he=nt(s);if(he||(s[$]=he=new R(s)),l=he.add(u,l,_,q,D),l.proxy)return l;if(_=Ke(),l.proxy=_,_.src=s,_.listener=l,s.addEventListener)kr||(P=q),P===void 0&&(P=!1),s.addEventListener(u.toString(),_,P);else if(s.attachEvent)s.attachEvent(we(u.toString()),_);else if(s.addListener&&s.removeListener)s.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ke(){function s(l){return u.call(s.src,s.listener,l)}const u=_e;return s}function ke(s,u,l,_,P){if(Array.isArray(u))for(var D=0;D<u.length;D++)ke(s,u[D],l,_,P);else _=g(_)?!!_.capture:!!_,l=xo(l),s&&s[Ht]?(s=s.i,u=String(u).toString(),u in s.g&&(D=s.g[u],l=F(D,l,_,P),-1<l&&(T(D[l]),Array.prototype.splice.call(D,l,1),D.length==0&&(delete s.g[u],s.h--)))):s&&(s=nt(s))&&(u=s.g[u.toString()],s=-1,u&&(s=F(u,l,_,P)),(l=-1<s?u[s]:null)&&Pe(l))}function Pe(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Ht])B(u.i,s);else{var l=s.type,_=s.proxy;u.removeEventListener?u.removeEventListener(l,_,s.capture):u.detachEvent?u.detachEvent(we(l),_):u.addListener&&u.removeListener&&u.removeListener(_),(l=nt(u))?(B(l,s),l.h==0&&(l.src=null,u[$]=null)):T(s)}}}function we(s){return s in ne?ne[s]:ne[s]="on"+s}function _e(s,u){if(s.da)s=!0;else{u=new lt(u,this);var l=s.listener,_=s.ha||s.src;s.fa&&Pe(s),s=l.call(_,u)}return s}function nt(s){return s=s[$],s instanceof R?s:null}var ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function xo(s){return typeof s=="function"?s:(s[ln]||(s[ln]=function(u){return s.handleEvent(u)}),s[ln])}function Le(){Ze.call(this),this.i=new R(this),this.M=this,this.F=null}k(Le,Ze),Le.prototype[Ht]=!0,Le.prototype.removeEventListener=function(s,u,l,_){ke(this,s,u,l,_)};function $e(s,u){var l,_=s.F;if(_)for(l=[];_;_=_.F)l.push(_);if(s=s.M,_=u.type||u,typeof u=="string")u=new Ee(u,s);else if(u instanceof Ee)u.target=u.target||s;else{var P=u;u=new Ee(_,s),f(u,P)}if(P=!0,l)for(var D=l.length-1;0<=D;D--){var q=u.g=l[D];P=Dr(q,_,!0,u)&&P}if(q=u.g=s,P=Dr(q,_,!0,u)&&P,P=Dr(q,_,!1,u)&&P,l)for(D=0;D<l.length;D++)q=u.g=l[D],P=Dr(q,_,!1,u)&&P}Le.prototype.N=function(){if(Le.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var l=s.g[u],_=0;_<l.length;_++)T(l[_]);delete s.g[u],s.h--}}this.F=null},Le.prototype.K=function(s,u,l,_){return this.i.add(String(s),u,!1,l,_)},Le.prototype.L=function(s,u,l,_){return this.i.add(String(s),u,!0,l,_)};function Dr(s,u,l,_){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,D=0;D<u.length;++D){var q=u[D];if(q&&!q.da&&q.capture==l){var he=q.listener,De=q.ha||q.src;q.fa&&B(s.i,q),P=he.call(De,_)!==!1&&P}}return P&&!_.defaultPrevented}function Uo(s,u,l){if(typeof s=="function")l&&(s=C(s,l));else if(s&&typeof s.handleEvent=="function")s=C(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function Fo(s){s.g=Uo(()=>{s.g=null,s.i&&(s.i=!1,Fo(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class oh extends Ze{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Fo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jn(s){Ze.call(this),this.h=s,this.g={}}k(jn,Ze);var Bo=[];function jo(s){S(s.g,function(u,l){this.g.hasOwnProperty(l)&&Pe(u)},s),s.g={}}jn.prototype.N=function(){jn.aa.N.call(this),jo(this)},jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ki=c.JSON.stringify,ah=c.JSON.parse,uh=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Qi(){}Qi.prototype.h=null;function qo(s){return s.h||(s.h=s.i())}function $o(){}var qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yi(){Ee.call(this,"d")}k(Yi,Ee);function Ji(){Ee.call(this,"c")}k(Ji,Ee);var Wt={},zo=null;function Vr(){return zo=zo||new Le}Wt.La="serverreachability";function Ho(s){Ee.call(this,Wt.La,s)}k(Ho,Ee);function $n(s){const u=Vr();$e(u,new Ho(u))}Wt.STAT_EVENT="statevent";function Wo(s,u){Ee.call(this,Wt.STAT_EVENT,s),this.stat=u}k(Wo,Ee);function ze(s){const u=Vr();$e(u,new Wo(u,s))}Wt.Ma="timingevent";function Go(s,u){Ee.call(this,Wt.Ma,s),this.size=u}k(Go,Ee);function zn(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function Hn(){this.g=!0}Hn.prototype.xa=function(){this.g=!1};function ch(s,u,l,_,P,D){s.info(function(){if(s.g)if(D)for(var q="",he=D.split("&"),De=0;De<he.length;De++){var ae=he[De].split("=");if(1<ae.length){var Me=ae[0];ae=ae[1];var xe=Me.split("_");q=2<=xe.length&&xe[1]=="type"?q+(Me+"="+ae+"&"):q+(Me+"=redacted&")}}else q=null;else q=D;return"XMLHTTP REQ ("+_+") [attempt "+P+"]: "+u+`
`+l+`
`+q})}function lh(s,u,l,_,P,D,q){s.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+P+"]: "+u+`
`+l+`
`+D+" "+q})}function hn(s,u,l,_){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+dh(s,l)+(_?" "+_:"")})}function hh(s,u){s.info(function(){return"TIMEOUT: "+u})}Hn.prototype.info=function(){};function dh(s,u){if(!s.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var _=l[s];if(!(2>_.length)){var P=_[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var q=1;q<P.length;q++)P[q]=""}}}}return Ki(l)}catch{return u}}var Nr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ko={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xi;function Or(){}k(Or,Qi),Or.prototype.g=function(){return new XMLHttpRequest},Or.prototype.i=function(){return{}},Xi=new Or;function It(s,u,l,_){this.j=s,this.i=u,this.l=l,this.R=_||1,this.U=new jn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qo}function Qo(){this.i=null,this.g="",this.h=!1}var Yo={},Zi={};function es(s,u,l){s.L=1,s.v=Ur(ht(u)),s.m=l,s.P=!0,Jo(s,null)}function Jo(s,u){s.F=Date.now(),Lr(s),s.A=ht(s.v);var l=s.A,_=s.R;Array.isArray(_)||(_=[String(_)]),ha(l.i,"t",_),s.C=0,l=s.j.J,s.h=new Qo,s.g=Ca(s.j,l?u:null,!s.m),0<s.O&&(s.M=new oh(C(s.Y,s,s.g),s.O)),u=s.U,l=s.g,_=s.ca;var P="readystatechange";Array.isArray(P)||(P&&(Bo[0]=P.toString()),P=Bo);for(var D=0;D<P.length;D++){var q=fe(l,P[D],_||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=s.H?d(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),$n(),ch(s.i,s.u,s.A,s.l,s.R,s.m)}It.prototype.ca=function(s){s=s.target;const u=this.M;u&&dt(s)==3?u.j():this.Y(s)},It.prototype.Y=function(s){try{if(s==this.g)e:{const xe=dt(this.g);var u=this.g.Ba();const pn=this.g.Z();if(!(3>xe)&&(xe!=3||this.g&&(this.h.h||this.g.oa()||ya(this.g)))){this.J||xe!=4||u==7||(u==8||0>=pn?$n(3):$n(2)),ts(this);var l=this.g.Z();this.X=l;t:if(Xo(this)){var _=ya(this.g);s="";var P=_.length,D=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),Wn(this);var q="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,s+=this.h.i.decode(_[u],{stream:!(D&&u==P-1)});_.length=0,this.h.g+=s,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=l==200,lh(this.i,this.u,this.A,this.l,this.R,xe,l),this.o){if(this.T&&!this.K){t:{if(this.g){var he,De=this.g;if((he=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(he)){var ae=he;break t}}ae=null}if(l=ae)hn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ns(this,l);else{this.o=!1,this.s=3,ze(12),Gt(this),Wn(this);break e}}if(this.P){l=!0;let et;for(;!this.J&&this.C<q.length;)if(et=fh(this,q),et==Zi){xe==4&&(this.s=4,ze(14),l=!1),hn(this.i,this.l,null,"[Incomplete Response]");break}else if(et==Yo){this.s=4,ze(15),hn(this.i,this.l,q,"[Invalid Chunk]"),l=!1;break}else hn(this.i,this.l,et,null),ns(this,et);if(Xo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xe!=4||q.length!=0||this.h.h||(this.s=1,ze(16),l=!1),this.o=this.o&&l,!l)hn(this.i,this.l,q,"[Invalid Chunked Response]"),Gt(this),Wn(this);else if(0<q.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),us(Me),Me.M=!0,ze(11))}}else hn(this.i,this.l,q,null),ns(this,q);xe==4&&Gt(this),this.o&&!this.J&&(xe==4?ba(this.j,this):(this.o=!1,Lr(this)))}else kh(this.g),l==400&&0<q.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),Gt(this),Wn(this)}}}catch{}finally{}};function Xo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function fh(s,u){var l=s.C,_=u.indexOf(`
`,l);return _==-1?Zi:(l=Number(u.substring(l,_)),isNaN(l)?Yo:(_+=1,_+l>u.length?Zi:(u=u.slice(_,_+l),s.C=_+l,u)))}It.prototype.cancel=function(){this.J=!0,Gt(this)};function Lr(s){s.S=Date.now()+s.I,Zo(s,s.I)}function Zo(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=zn(C(s.ba,s),u)}function ts(s){s.B&&(c.clearTimeout(s.B),s.B=null)}It.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(hh(this.i,this.A),this.L!=2&&($n(),ze(17)),Gt(this),this.s=2,Wn(this)):Zo(this,this.S-s)};function Wn(s){s.j.G==0||s.J||ba(s.j,s)}function Gt(s){ts(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,jo(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function ns(s,u){try{var l=s.j;if(l.G!=0&&(l.g==s||rs(l.h,s))){if(!s.K&&rs(l.h,s)&&l.G==3){try{var _=l.Da.g.parse(u)}catch{_=null}if(Array.isArray(_)&&_.length==3){var P=_;if(P[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)zr(l),qr(l);else break e;as(l),ze(18)}}else l.za=P[1],0<l.za-l.T&&37500>P[2]&&l.F&&l.v==0&&!l.C&&(l.C=zn(C(l.Za,l),6e3));if(1>=na(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Qt(l,11)}else if((s.K||l.g==s)&&zr(l),!U(u))for(P=l.Da.g.parse(u),u=0;u<P.length;u++){let ae=P[u];if(l.T=ae[0],ae=ae[1],l.G==2)if(ae[0]=="c"){l.K=ae[1],l.ia=ae[2];const Me=ae[3];Me!=null&&(l.la=Me,l.j.info("VER="+l.la));const xe=ae[4];xe!=null&&(l.Aa=xe,l.j.info("SVER="+l.Aa));const pn=ae[5];pn!=null&&typeof pn=="number"&&0<pn&&(_=1.5*pn,l.L=_,l.j.info("backChannelRequestTimeoutMs_="+_)),_=l;const et=s.g;if(et){const Wr=et.g?et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wr){var D=_.h;D.g||Wr.indexOf("spdy")==-1&&Wr.indexOf("quic")==-1&&Wr.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(is(D,D.h),D.h=null))}if(_.D){const cs=et.g?et.g.getResponseHeader("X-HTTP-Session-Id"):null;cs&&(_.ya=cs,pe(_.I,_.D,cs))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),_=l;var q=s;if(_.qa=Pa(_,_.J?_.ia:null,_.W),q.K){ra(_.h,q);var he=q,De=_.L;De&&(he.I=De),he.B&&(ts(he),Lr(he)),_.g=q}else Ta(_);0<l.i.length&&$r(l)}else ae[0]!="stop"&&ae[0]!="close"||Qt(l,7);else l.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Qt(l,7):os(l):ae[0]!="noop"&&l.l&&l.l.ta(ae),l.v=0)}}$n(4)}catch{}}var ph=class{constructor(s,u){this.g=s,this.map=u}};function ea(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ta(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function na(s){return s.h?1:s.g?s.g.size:0}function rs(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function is(s,u){s.g?s.g.add(u):s.h=u}function ra(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}ea.prototype.cancel=function(){if(this.i=ia(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ia(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const l of s.g.values())u=u.concat(l.D);return u}return O(s.i)}function gh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],l=s.length,_=0;_<l;_++)u.push(s[_]);return u}u=[],l=0;for(_ in s)u[l++]=s[_];return u}function mh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var l=0;l<s;l++)u.push(l);return u}u=[],l=0;for(const _ in s)u[l++]=_;return u}}}function sa(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var l=mh(s),_=gh(s),P=_.length,D=0;D<P;D++)u.call(void 0,_[D],l&&l[D],s)}var oa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _h(s,u){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var _=s[l].indexOf("="),P=null;if(0<=_){var D=s[l].substring(0,_);P=s[l].substring(_+1)}else D=s[l];u(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Kt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Kt){this.h=s.h,Mr(this,s.j),this.o=s.o,this.g=s.g,xr(this,s.s),this.l=s.l;var u=s.i,l=new Qn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),aa(this,l),this.m=s.m}else s&&(u=String(s).match(oa))?(this.h=!1,Mr(this,u[1]||"",!0),this.o=Gn(u[2]||""),this.g=Gn(u[3]||"",!0),xr(this,u[4]),this.l=Gn(u[5]||"",!0),aa(this,u[6]||"",!0),this.m=Gn(u[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}Kt.prototype.toString=function(){var s=[],u=this.j;u&&s.push(Kn(u,ua,!0),":");var l=this.g;return(l||u=="file")&&(s.push("//"),(u=this.o)&&s.push(Kn(u,ua,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Kn(l,l.charAt(0)=="/"?Eh:vh,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Kn(l,Ih)),s.join("")};function ht(s){return new Kt(s)}function Mr(s,u,l){s.j=l?Gn(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function xr(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function aa(s,u,l){u instanceof Qn?(s.i=u,Th(s.i,s.h)):(l||(u=Kn(u,wh)),s.i=new Qn(u,s.h))}function pe(s,u,l){s.i.set(u,l)}function Ur(s){return pe(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Gn(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Kn(s,u,l){return typeof s=="string"?(s=encodeURI(s).replace(u,yh),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function yh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ua=/[#\/\?@]/g,vh=/[#\?:]/g,Eh=/[#\?]/g,wh=/[#\?@]/g,Ih=/#/g;function Qn(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Tt(s){s.g||(s.g=new Map,s.h=0,s.i&&_h(s.i,function(u,l){s.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=Qn.prototype,n.add=function(s,u){Tt(this),this.i=null,s=dn(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(u),this.h+=1,this};function ca(s,u){Tt(s),u=dn(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function la(s,u){return Tt(s),u=dn(s,u),s.g.has(u)}n.forEach=function(s,u){Tt(this),this.g.forEach(function(l,_){l.forEach(function(P){s.call(u,P,_,this)},this)},this)},n.na=function(){Tt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let _=0;_<u.length;_++){const P=s[_];for(let D=0;D<P.length;D++)l.push(u[_])}return l},n.V=function(s){Tt(this);let u=[];if(typeof s=="string")la(this,s)&&(u=u.concat(this.g.get(dn(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)u=u.concat(s[l])}return u},n.set=function(s,u){return Tt(this),this.i=null,s=dn(this,s),la(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function ha(s,u,l){ca(s,u),0<l.length&&(s.i=null,s.g.set(dn(s,u),O(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var _=u[l];const D=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var P=D;q[_]!==""&&(P+="="+encodeURIComponent(String(q[_]))),s.push(P)}}return this.i=s.join("&")};function dn(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Th(s,u){u&&!s.j&&(Tt(s),s.i=null,s.g.forEach(function(l,_){var P=_.toLowerCase();_!=P&&(ca(this,_),ha(this,P,l))},s)),s.j=u}function Ah(s,u){const l=new Hn;if(c.Image){const _=new Image;_.onload=V(At,l,"TestLoadImage: loaded",!0,u,_),_.onerror=V(At,l,"TestLoadImage: error",!1,u,_),_.onabort=V(At,l,"TestLoadImage: abort",!1,u,_),_.ontimeout=V(At,l,"TestLoadImage: timeout",!1,u,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=s}else u(!1)}function bh(s,u){const l=new Hn,_=new AbortController,P=setTimeout(()=>{_.abort(),At(l,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:_.signal}).then(D=>{clearTimeout(P),D.ok?At(l,"TestPingServer: ok",!0,u):At(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),At(l,"TestPingServer: error",!1,u)})}function At(s,u,l,_,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),_(l)}catch{}}function Rh(){this.g=new uh}function Sh(s,u,l){const _=l||"";try{sa(s,function(P,D){let q=P;g(P)&&(q=Ki(P)),u.push(_+D+"="+encodeURIComponent(q))})}catch(P){throw u.push(_+"type="+encodeURIComponent("_badmap")),P}}function Fr(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Fr,Qi),Fr.prototype.g=function(){return new Br(this.l,this.j)},Fr.prototype.i=function(s){return function(){return s}}({});function Br(s,u){Le.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Br,Le),n=Br.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,Jn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;da(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function da(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?Yn(this):Jn(this),this.readyState==3&&da(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Yn(this))},n.Qa=function(s){this.g&&(this.response=s,Yn(this))},n.ga=function(){this.g&&Yn(this)};function Yn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Jn(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=u.next();return s.join(`\r
`)};function Jn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function fa(s){let u="";return S(s,function(l,_){u+=_,u+=":",u+=l,u+=`\r
`}),u}function ss(s,u,l){e:{for(_ in l){var _=!1;break e}_=!0}_||(l=fa(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):pe(s,u,l))}function ye(s){Le.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ye,Le);var Ph=/^https?$/i,Ch=["POST","PUT"];n=ye.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,l,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xi.g(),this.v=this.o?qo(this.o):qo(Xi),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(D){pa(this,D);return}if(s=l||"",l=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var P in _)l.set(P,_[P]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())l.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(l.keys()).find(D=>D.toLowerCase()=="content-type"),P=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ch,u,void 0))||_||P||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,q]of l)this.g.setRequestHeader(D,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_a(this),this.u=!0,this.g.send(s),this.u=!1}catch(D){pa(this,D)}};function pa(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,ga(s),jr(s)}function ga(s){s.A||(s.A=!0,$e(s,"complete"),$e(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,$e(this,"complete"),$e(this,"abort"),jr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jr(this,!0)),ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ma(this):this.bb())},n.bb=function(){ma(this)};function ma(s){if(s.h&&typeof a<"u"&&(!s.v[1]||dt(s)!=4||s.Z()!=2)){if(s.u&&dt(s)==4)Uo(s.Ea,0,s);else if($e(s,"readystatechange"),dt(s)==4){s.h=!1;try{const q=s.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var l;if(!(l=u)){var _;if(_=q===0){var P=String(s.D).match(oa)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),_=!Ph.test(P?P.toLowerCase():"")}l=_}if(l)$e(s,"complete"),$e(s,"success");else{s.m=6;try{var D=2<dt(s)?s.g.statusText:""}catch{D=""}s.l=D+" ["+s.Z()+"]",ga(s)}}finally{jr(s)}}}}function jr(s,u){if(s.g){_a(s);const l=s.g,_=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||$e(s,"ready");try{l.onreadystatechange=_}catch{}}}function _a(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function dt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),ah(u)}};function ya(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function kh(s){const u={};s=(s.g&&2<=dt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<s.length;_++){if(U(s[_]))continue;var l=m(s[_]);const P=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const D=u[P]||[];u[P]=D,D.push(l)}v(u,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(s,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||u}function va(s){this.Aa=0,this.i=[],this.j=new Hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,s),this.cb=Xn("retryDelaySeedMs",1e4,s),this.Wa=Xn("forwardChannelMaxRetries",2,s),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ea(s&&s.concurrentRequestLimit),this.Da=new Rh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=va.prototype,n.la=8,n.G=1,n.connect=function(s,u,l,_){ze(0),this.W=s,this.H=u||{},l&&_!==void 0&&(this.H.OSID=l,this.H.OAID=_),this.F=this.X,this.I=Pa(this,null,this.W),$r(this)};function os(s){if(Ea(s),s.G==3){var u=s.U++,l=ht(s.I);if(pe(l,"SID",s.K),pe(l,"RID",u),pe(l,"TYPE","terminate"),Zn(s,l),u=new It(s,s.j,u),u.L=2,u.v=Ur(ht(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Ca(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Lr(u)}Sa(s)}function qr(s){s.g&&(us(s),s.g.cancel(),s.g=null)}function Ea(s){qr(s),s.u&&(c.clearTimeout(s.u),s.u=null),zr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function $r(s){if(!ta(s.h)&&!s.s){s.s=!0;var u=s.Ga;ue||le(),me||(ue(),me=!0),de.add(u,s),s.B=0}}function Dh(s,u){return na(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=zn(C(s.Ga,s,u),Ra(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const P=new It(this,this.j,s);let D=this.o;if(this.S&&(D?(D=d(D),f(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var u=0,l=0;l<this.i.length;l++){t:{var _=this.i[l];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(u+=_,4096<u){u=l;break e}if(u===4096||l===this.i.length-1){u=l+1;break e}}u=1e3}else u=1e3;u=Ia(this,P,u),l=ht(this.I),pe(l,"RID",s),pe(l,"CVER",22),this.D&&pe(l,"X-HTTP-Session-Id",this.D),Zn(this,l),D&&(this.O?u="headers="+encodeURIComponent(String(fa(D)))+"&"+u:this.m&&ss(l,this.m,D)),is(this.h,P),this.Ua&&pe(l,"TYPE","init"),this.P?(pe(l,"$req",u),pe(l,"SID","null"),P.T=!0,es(P,l,null)):es(P,l,u),this.G=2}}else this.G==3&&(s?wa(this,s):this.i.length==0||ta(this.h)||wa(this))};function wa(s,u){var l;u?l=u.l:l=s.U++;const _=ht(s.I);pe(_,"SID",s.K),pe(_,"RID",l),pe(_,"AID",s.T),Zn(s,_),s.m&&s.o&&ss(_,s.m,s.o),l=new It(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),u&&(s.i=u.D.concat(s.i)),u=Ia(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),is(s.h,l),es(l,_,u)}function Zn(s,u){s.H&&S(s.H,function(l,_){pe(u,_,l)}),s.l&&sa({},function(l,_){pe(u,_,l)})}function Ia(s,u,l){l=Math.min(s.i.length,l);var _=s.l?C(s.l.Na,s.l,s):null;e:{var P=s.i;let D=-1;for(;;){const q=["count="+l];D==-1?0<l?(D=P[0].g,q.push("ofs="+D)):D=0:q.push("ofs="+D);let he=!0;for(let De=0;De<l;De++){let ae=P[De].g;const Me=P[De].map;if(ae-=D,0>ae)D=Math.max(0,P[De].g-100),he=!1;else try{Sh(Me,q,"req"+ae+"_")}catch{_&&_(Me)}}if(he){_=q.join("&");break e}}}return s=s.i.splice(0,l),u.D=s,_}function Ta(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;ue||le(),me||(ue(),me=!0),de.add(u,s),s.v=0}}function as(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=zn(C(s.Fa,s),Ra(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Aa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=zn(C(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),qr(this),Aa(this))};function us(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Aa(s){s.g=new It(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=ht(s.qa);pe(u,"RID","rpc"),pe(u,"SID",s.K),pe(u,"AID",s.T),pe(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&pe(u,"TO",s.ja),pe(u,"TYPE","xmlhttp"),Zn(s,u),s.m&&s.o&&ss(u,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Ur(ht(u)),l.m=null,l.P=!0,Jo(l,s)}n.Za=function(){this.C!=null&&(this.C=null,qr(this),as(this),ze(19))};function zr(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function ba(s,u){var l=null;if(s.g==u){zr(s),us(s),s.g=null;var _=2}else if(rs(s.h,u))l=u.D,ra(s.h,u),_=1;else return;if(s.G!=0){if(u.o)if(_==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var P=s.B;_=Vr(),$e(_,new Go(_,l)),$r(s)}else Ta(s);else if(P=u.s,P==3||P==0&&0<u.X||!(_==1&&Dh(s,u)||_==2&&as(s)))switch(l&&0<l.length&&(u=s.h,u.i=u.i.concat(l)),P){case 1:Qt(s,5);break;case 4:Qt(s,10);break;case 3:Qt(s,6);break;default:Qt(s,2)}}}function Ra(s,u){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*u}function Qt(s,u){if(s.j.info("Error code "+u),u==2){var l=C(s.fb,s),_=s.Xa;const P=!_;_=new Kt(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Mr(_,"https"),Ur(_),P?Ah(_.toString(),l):bh(_.toString(),l)}else ze(2);s.G=0,s.l&&s.l.sa(u),Sa(s),Ea(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Sa(s){if(s.G=0,s.ka=[],s.l){const u=ia(s.h);(u.length!=0||s.i.length!=0)&&(A(s.ka,u),A(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function Pa(s,u,l){var _=l instanceof Kt?ht(l):new Kt(l);if(_.g!="")u&&(_.g=u+"."+_.g),xr(_,_.s);else{var P=c.location;_=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var D=new Kt(null);_&&Mr(D,_),u&&(D.g=u),P&&xr(D,P),l&&(D.l=l),_=D}return l=s.D,u=s.ya,l&&u&&pe(_,l,u),pe(_,"VER",s.la),Zn(s,_),_}function Ca(s,u,l){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new ye(new Fr({eb:l})):new ye(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ka(){}n=ka.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hr(){}Hr.prototype.g=function(s,u){return new Qe(s,u)};function Qe(s,u){Le.call(this),this.g=new va(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!U(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new fn(this)}k(Qe,Le),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){os(this.g)},Qe.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Ki(s),s=l);u.i.push(new ph(u.Ya++,s)),u.G==3&&$r(u)},Qe.prototype.N=function(){this.g.l=null,delete this.j,os(this.g),delete this.g,Qe.aa.N.call(this)};function Da(s){Yi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){e:{for(const l in u){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}k(Da,Yi);function Va(){Ji.call(this),this.status=1}k(Va,Ji);function fn(s){this.g=s}k(fn,ka),fn.prototype.ua=function(){$e(this.g,"a")},fn.prototype.ta=function(s){$e(this.g,new Da(s))},fn.prototype.sa=function(s){$e(this.g,new Va)},fn.prototype.ra=function(){$e(this.g,"b")},Hr.prototype.createWebChannel=Hr.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,Gc=function(){return new Hr},Wc=function(){return Vr()},Hc=Wt,ks={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nr.NO_ERROR=0,Nr.TIMEOUT=8,Nr.HTTP_ERROR=6,ii=Nr,Ko.COMPLETE="complete",zc=Ko,$o.EventType=qn,qn.OPEN="a",qn.CLOSE="b",qn.ERROR="c",qn.MESSAGE="d",Le.prototype.listen=Le.prototype.K,nr=$o,ye.prototype.listenOnce=ye.prototype.L,ye.prototype.getLastError=ye.prototype.Ka,ye.prototype.getLastErrorCode=ye.prototype.Ba,ye.prototype.getStatus=ye.prototype.Z,ye.prototype.getResponseJson=ye.prototype.Oa,ye.prototype.getResponseText=ye.prototype.oa,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Ha,$c=ye}).apply(typeof Kr<"u"?Kr:typeof self<"u"?self:typeof window<"u"?window:{});const lu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Hs("@firebase/firestore");function gn(){return tn.logLevel}function H(n,...e){if(tn.logLevel<=re.DEBUG){const t=e.map(ro);tn.debug(`Firestore (${Mn}): ${n}`,...t)}}function vt(n,...e){if(tn.logLevel<=re.ERROR){const t=e.map(ro);tn.error(`Firestore (${Mn}): ${n}`,...t)}}function Rn(n,...e){if(tn.logLevel<=re.WARN){const t=e.map(ro);tn.warn(`Firestore (${Mn}): ${n}`,...t)}}function ro(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n="Unexpected state"){const e=`FIRESTORE (${Mn}) INTERNAL ASSERTION FAILED: `+n;throw vt(e),new Error(e)}function ce(n,e){n||Z()}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Fe.UNAUTHENTICATED))}shutdown(){}}class Rg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Sg{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Lt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new Kc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Fe(e)}}class Pg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Cg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Pg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ce(this.o===void 0);const r=o=>{o.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string"),this.R=t.token,new kg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Vg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function Sn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Re(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Re(0,0))}static max(){return new ee(new Re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Z(),r===void 0?r=e.length-t:r>e.length-t&&Z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ve extends fr{construct(e,t,r){return new ve(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ve(t)}static emptyPath(){return new ve([])}}const Ng=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends fr{construct(e,t,r){return new Ne(e,t,r)}static isValidIdentifier(e){return Ng.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Q(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new Q(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new Q(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new Q(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ve.fromString(e))}static fromName(e){return new Y(ve.fromString(e).popFirst(5))}static empty(){return new Y(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ve(e.slice()))}}function Og(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Re(t+1,0):new Re(t,r));return new xt(i,Y.empty(),e)}function Lg(n){return new xt(n.readTime,n.key,-1)}class xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xt(ee.min(),Y.empty(),-1)}static max(){return new xt(ee.max(),Y.empty(),-1)}}function Mg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ug{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n){if(n.code!==j.FAILED_PRECONDITION||n.message!==xg)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,o=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const o=e.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const g=h;t(e[g]).next(I=>{a[g]=I,++c,c===o&&r(a)},I=>i(I))}})}static doWhile(e,t){return new N((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function Fg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Un(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vi.oe=-1;function Ni(n){return n==null}function _i(n){return n===0&&1/n==-1/0}function Bg(n){return typeof n=="number"&&Number.isInteger(n)&&!_i(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hu(e)),e=qg(n.get(t),e);return hu(e)}function qg(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function hu(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $t(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qr(this.root,e,this.comparator,!0)}}class Qr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=o??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new Ve(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,t,r,i,o){return this}insert(e,t,r){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fu(this.data.getIterator())}getIteratorFrom(e){return new fu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class fu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new Se(Ne.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Sn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Jc("Invalid base64 string: "+o):o}}(e);return new Oe(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const $g=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(n){if(ce(!!n),typeof n=="string"){let e=0;const t=$g.exec(n);if(ce(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(n.seconds),nanos:Ie(n.nanos)}}function Ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ft(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Oi(n){const e=n.mapValue.fields.__previous_value__;return io(e)?Oi(e):e}function pr(n){const e=Ut(n.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,r,i,o,a,c,h,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=g}}class gr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={mapValue:{}};function Bt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?io(n)?4:Wg(n)?9007199254740991:Hg(n)?10:11:Z()}function ut(n,e){if(n===e)return!0;const t=Bt(n);if(t!==Bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pr(n).isEqual(pr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Ut(i.timestampValue),c=Ut(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Ft(i.bytesValue).isEqual(Ft(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return Ie(i.geoPointValue.latitude)===Ie(o.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ie(i.integerValue)===Ie(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Ie(i.doubleValue),c=Ie(o.doubleValue);return a===c?_i(a)===_i(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Sn(n.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(du(a)!==du(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!ut(a[h],c[h])))return!1;return!0}(n,e);default:return Z()}}function mr(n,e){return(n.values||[]).find(t=>ut(t,e))!==void 0}function Pn(n,e){if(n===e)return 0;const t=Bt(n),r=Bt(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=Ie(o.integerValue||o.doubleValue),h=Ie(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,e);case 3:return pu(n.timestampValue,e.timestampValue);case 4:return pu(pr(n),pr(e));case 5:return se(n.stringValue,e.stringValue);case 6:return function(o,a){const c=Ft(o),h=Ft(a);return c.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let g=0;g<c.length&&g<h.length;g++){const I=se(c[g],h[g]);if(I!==0)return I}return se(c.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=se(Ie(o.latitude),Ie(a.latitude));return c!==0?c:se(Ie(o.longitude),Ie(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return gu(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,h,g,I;const b=o.fields||{},C=a.fields||{},V=(c=b.value)===null||c===void 0?void 0:c.arrayValue,k=(h=C.value)===null||h===void 0?void 0:h.arrayValue,O=se(((g=V==null?void 0:V.values)===null||g===void 0?void 0:g.length)||0,((I=k==null?void 0:k.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:gu(V,k)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Yr.mapValue&&a===Yr.mapValue)return 0;if(o===Yr.mapValue)return 1;if(a===Yr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),g=a.fields||{},I=Object.keys(g);h.sort(),I.sort();for(let b=0;b<h.length&&b<I.length;++b){const C=se(h[b],I[b]);if(C!==0)return C;const V=Pn(c[h[b]],g[I[b]]);if(V!==0)return V}return se(h.length,I.length)}(n.mapValue,e.mapValue);default:throw Z()}}function pu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=Ut(n),r=Ut(e),i=se(t.seconds,r.seconds);return i!==0?i:se(t.nanos,r.nanos)}function gu(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Pn(t[i],r[i]);if(o)return o}return se(t.length,r.length)}function Cn(n){return Ds(n)}function Ds(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ut(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ft(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Ds(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ds(t.fields[a])}`;return i+"}"}(n.mapValue):Z()}function si(n){switch(Bt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oi(n);return e?16+si(e):16;case 5:return 2*n.stringValue.length;case 6:return Ft(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+si(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return $t(r.fields,(o,a)=>{i+=o.length+si(a)}),i}(n.mapValue);default:throw Z()}}function Vs(n){return!!n&&"integerValue"in n}function so(n){return!!n&&"arrayValue"in n}function mu(n){return!!n&&"nullValue"in n}function _u(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function oi(n){return!!n&&"mapValue"in n}function Hg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function or(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return $t(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=or(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=or(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Wg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!oi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=or(t)}setAll(e){let t=Ne.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=or(a):i.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());oi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];oi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){$t(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new We(or(this.value))}}function Xc(n){const e=[];return $t(n.fields,(t,r)=>{const i=new Ne([t]);if(oi(r)){const o=Xc(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,r,i,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Be(e,0,ee.min(),ee.min(),ee.min(),We.empty(),0)}static newFoundDocument(e,t,r,i){return new Be(e,1,t,ee.min(),r,i,0)}static newNoDocument(e,t){return new Be(e,2,t,ee.min(),ee.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,ee.min(),ee.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.position=e,this.inclusive=t}}function yu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),t.key):r=Pn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function vu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ut(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{}class be extends Zc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Qg(e,t,r):t==="array-contains"?new Xg(e,r):t==="in"?new Zg(e,r):t==="not-in"?new em(e,r):t==="array-contains-any"?new tm(e,r):new be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Yg(e,r):new Jg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Pn(t,this.value)):t!==null&&Bt(this.value)===Bt(t)&&this.matchesComparison(Pn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ct extends Zc{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ct(e,t)}matches(e){return el(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function el(n){return n.op==="and"}function tl(n){return Kg(n)&&el(n)}function Kg(n){for(const e of n.filters)if(e instanceof ct)return!1;return!0}function Ns(n){if(n instanceof be)return n.field.canonicalString()+n.op.toString()+Cn(n.value);if(tl(n))return n.filters.map(e=>Ns(e)).join(",");{const e=n.filters.map(t=>Ns(t)).join(",");return`${n.op}(${e})`}}function nl(n,e){return n instanceof be?function(r,i){return i instanceof be&&r.op===i.op&&r.field.isEqual(i.field)&&ut(r.value,i.value)}(n,e):n instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&nl(a,i.filters[c]),!0):!1}(n,e):void Z()}function rl(n){return n instanceof be?function(t){return`${t.field.canonicalString()} ${t.op} ${Cn(t.value)}`}(n):n instanceof ct?function(t){return t.op.toString()+" {"+t.getFilters().map(rl).join(" ,")+"}"}(n):"Filter"}class Qg extends be{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yg extends be{constructor(e,t){super(e,"in",t),this.keys=il("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Jg extends be{constructor(e,t){super(e,"not-in",t),this.keys=il("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function il(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Xg extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return so(t)&&mr(t.arrayValue,this.value)}}class Zg extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mr(this.value.arrayValue,t)}}class em extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(mr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!mr(this.value.arrayValue,t)}}class tm extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!so(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>mr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t=null,r=[],i=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Eu(n,e=null,t=[],r=[],i=null,o=null,a=null){return new nm(n,e,t,r,i,o,a)}function oo(n){const e=te(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ns(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ni(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cn(r)).join(",")),e.ue=t}return e.ue}function ao(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vu(n.startAt,e.startAt)&&vu(n.endAt,e.endAt)}function Os(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t=null,r=[],i=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rm(n,e,t,r,i,o,a,c){return new Li(n,e,t,r,i,o,a,c)}function uo(n){return new Li(n)}function wu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function im(n){return n.collectionGroup!==null}function ar(n){const e=te(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Se(Ne.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(g=>{g.isInequality()&&(c=c.add(g.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new vi(o,r))}),t.has(Ne.keyField().canonicalString())||e.ce.push(new vi(Ne.keyField(),r))}return e.ce}function st(n){const e=te(n);return e.le||(e.le=sm(e,ar(n))),e.le}function sm(n,e){if(n.limitType==="F")return Eu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new vi(i.field,o)});const t=n.endAt?new yi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yi(n.startAt.position,n.startAt.inclusive):null;return Eu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ls(n,e,t){return new Li(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Mi(n,e){return ao(st(n),st(e))&&n.limitType===e.limitType}function sl(n){return`${oo(st(n))}|lt:${n.limitType}`}function mn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>rl(i)).join(", ")}]`),Ni(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Cn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Cn(i)).join(",")),`Target(${r})`}(st(n))}; limitType=${n.limitType})`}function xi(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Y.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of ar(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,h){const g=yu(a,c,h);return a.inclusive?g<=0:g<0}(r.startAt,ar(r),i)||r.endAt&&!function(a,c,h){const g=yu(a,c,h);return a.inclusive?g>=0:g>0}(r.endAt,ar(r),i))}(n,e)}function om(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ol(n){return(e,t)=>{let r=!1;for(const i of ar(n)){const o=am(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function am(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(o,a,c){const h=a.data.field(o),g=c.data.field(o);return h!==null&&g!==null?Pn(h,g):Z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$t(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Yc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=new ge(Y.comparator);function Et(){return um}const al=new ge(Y.comparator);function rr(...n){let e=al;for(const t of n)e=e.insert(t.key,t);return e}function ul(n){let e=al;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Jt(){return ur()}function cl(){return ur()}function ur(){return new on(n=>n.toString(),(n,e)=>n.isEqual(e))}const cm=new ge(Y.comparator),lm=new Se(Y.comparator);function ie(...n){let e=lm;for(const t of n)e=e.add(t);return e}const hm=new Se(se);function dm(){return hm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_i(e)?"-0":e}}function ll(n){return{integerValue:""+n}}function fm(n,e){return Bg(e)?ll(e):co(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this._=void 0}}function pm(n,e,t){return n instanceof Ei?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&io(o)&&(o=Oi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof _r?dl(n,e):n instanceof yr?fl(n,e):function(i,o){const a=hl(i,o),c=Iu(a)+Iu(i.Pe);return Vs(a)&&Vs(i.Pe)?ll(c):co(i.serializer,c)}(n,e)}function gm(n,e,t){return n instanceof _r?dl(n,e):n instanceof yr?fl(n,e):t}function hl(n,e){return n instanceof wi?function(r){return Vs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Ei extends Ui{}class _r extends Ui{constructor(e){super(),this.elements=e}}function dl(n,e){const t=pl(e);for(const r of n.elements)t.some(i=>ut(i,r))||t.push(r);return{arrayValue:{values:t}}}class yr extends Ui{constructor(e){super(),this.elements=e}}function fl(n,e){let t=pl(e);for(const r of n.elements)t=t.filter(i=>!ut(i,r));return{arrayValue:{values:t}}}class wi extends Ui{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Iu(n){return Ie(n.integerValue||n.doubleValue)}function pl(n){return so(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mm(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof _r&&i instanceof _r||r instanceof yr&&i instanceof yr?Sn(r.elements,i.elements,ut):r instanceof wi&&i instanceof wi?ut(r.Pe,i.Pe):r instanceof Ei&&i instanceof Ei}(n.transform,e.transform)}class _m{constructor(e,t){this.version=e,this.transformResults=t}}class ot{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ot}static exists(e){return new ot(void 0,e)}static updateTime(e){return new ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ai(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fi{}function gl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new _l(n.key,ot.none()):new br(n.key,n.data,ot.none());{const t=n.data,r=We.empty();let i=new Se(Ne.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new zt(n.key,r,new Ye(i.toArray()),ot.none())}}function ym(n,e,t){n instanceof br?function(i,o,a){const c=i.value.clone(),h=Au(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof zt?function(i,o,a){if(!ai(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Au(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(ml(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function cr(n,e,t,r){return n instanceof br?function(o,a,c,h){if(!ai(o.precondition,a))return c;const g=o.value.clone(),I=bu(o.fieldTransforms,h,a);return g.setAll(I),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),null}(n,e,t,r):n instanceof zt?function(o,a,c,h){if(!ai(o.precondition,a))return c;const g=bu(o.fieldTransforms,h,a),I=a.data;return I.setAll(ml(o)),I.setAll(g),a.convertToFoundDocument(a.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(b=>b.field))}(n,e,t,r):function(o,a,c){return ai(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function vm(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=hl(r.transform,i||null);o!=null&&(t===null&&(t=We.empty()),t.set(r.field,o))}return t||null}function Tu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Sn(r,i,(o,a)=>mm(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class br extends Fi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zt extends Fi{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ml(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Au(n,e,t){const r=new Map;ce(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,c=e.data.field(o.field);r.set(o.field,gm(a,c,t[i]))}return r}function bu(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,pm(o,a,e))}return r}class _l extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Em extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&ym(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=cr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=cr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cl();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(i.key)?null:c;const h=gl(a,c);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ie())}isEqual(e){return this.batchId===e.batchId&&Sn(this.mutations,e.mutations,(t,r)=>Tu(t,r))&&Sn(this.baseMutations,e.baseMutations,(t,r)=>Tu(t,r))}}class lo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ce(e.mutations.length===r.length);let i=function(){return cm}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new lo(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,oe;function Am(n){switch(n){default:return Z();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function yl(n){if(n===void 0)return vt("GRPC error has no .code"),j.UNKNOWN;switch(n){case Ae.OK:return j.OK;case Ae.CANCELLED:return j.CANCELLED;case Ae.UNKNOWN:return j.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return j.INTERNAL;case Ae.UNAVAILABLE:return j.UNAVAILABLE;case Ae.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ae.NOT_FOUND:return j.NOT_FOUND;case Ae.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ae.ABORTED:return j.ABORTED;case Ae.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ae.DATA_LOSS:return j.DATA_LOSS;default:return Z()}}(oe=Ae||(Ae={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=new Xt([4294967295,4294967295],0);function Ru(n){const e=bm().encode(n),t=new qc;return t.update(e),new Uint8Array(t.digest())}function Su(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Xt([t,r],0),new Xt([i,o],0)]}class ho{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ir(`Invalid padding: ${t}`);if(r<0)throw new ir(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ir(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ir(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Xt.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(Xt.fromNumber(r)));return i.compare(Rm)===1&&(i=new Xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Ru(e),[r,i]=Su(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new ho(o,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const t=Ru(e),[r,i]=Su(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Rr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Bi(ee.min(),i,new ge(se),Et(),ie())}}class Rr{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Rr(r,t,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class vl{constructor(e,t){this.targetId=e,this.me=t}}class El{constructor(e,t,r=Oe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Pu{constructor(){this.fe=0,this.ge=Cu(),this.pe=Oe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),t=ie(),r=ie();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Rr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Cu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Sm{constructor(e){this.Le=e,this.Be=new Map,this.ke=Et(),this.qe=Jr(),this.Qe=Jr(),this.Ke=new ge(se)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){const o=i.target;if(Os(o))if(r===0){const a=new Y(o.path);this.We(t,a,Be.newNoDocument(a,ee.min()))}else ce(r===1);else{const a=this.Ze(t);if(a!==r){const c=this.Xe(e),h=c?this.et(c,e,a):1;if(h!==0){this.He(t);const g=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,g)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,c;try{a=Ft(r).toUint8Array()}catch(h){if(h instanceof Jc)return Rn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ho(a,i,o)}catch(h){return Rn(h instanceof ir?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.We(t,o,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((o,a)=>{const c=this.Ye(a);if(c){if(o.current&&Os(c.target)){const h=new Y(c.target.path);this.st(h).has(a)||this.ot(a,h)||this.We(a,h,Be.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=ie();this.Qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const g=this.Ye(h);return!g||g.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new Bi(e,t,this.Ke,this.ke,r);return this.ke=Et(),this.qe=Jr(),this.Qe=Jr(),this.Ke=new ge(se),i}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Pu,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Se(se),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Se(se),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Pu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Jr(){return new ge(Y.comparator)}function Cu(){return new ge(Y.comparator)}const Pm={asc:"ASCENDING",desc:"DESCENDING"},Cm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},km={and:"AND",or:"OR"};class Dm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ms(n,e){return n.useProto3Json||Ni(e)?e:{value:e}}function Ii(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Vm(n,e){return Ii(n,e.toTimestamp())}function at(n){return ce(!!n),ee.fromTimestamp(function(t){const r=Ut(t);return new Re(r.seconds,r.nanos)}(n))}function fo(n,e){return xs(n,e).canonicalString()}function xs(n,e){const t=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Il(n){const e=ve.fromString(n);return ce(Sl(e)),e}function Us(n,e){return fo(n.databaseId,e.path)}function _s(n,e){const t=Il(e);if(t.get(1)!==n.databaseId.projectId)throw new Q(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Q(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Al(t))}function Tl(n,e){return fo(n.databaseId,e)}function Nm(n){const e=Il(n);return e.length===4?ve.emptyPath():Al(e)}function Fs(n){return new ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Al(n){return ce(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ku(n,e,t){return{name:Us(n,e),fields:t.value.mapValue.fields}}function Om(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(g,I){return g.useProto3Json?(ce(I===void 0||typeof I=="string"),Oe.fromBase64String(I||"")):(ce(I===void 0||I instanceof Buffer||I instanceof Uint8Array),Oe.fromUint8Array(I||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(g){const I=g.code===void 0?j.UNKNOWN:yl(g.code);return new Q(I,g.message||"")}(a);t=new El(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_s(n,r.document.name),o=at(r.document.updateTime),a=r.document.createTime?at(r.document.createTime):ee.min(),c=new We({mapValue:{fields:r.document.fields}}),h=Be.newFoundDocument(i,o,a,c),g=r.targetIds||[],I=r.removedTargetIds||[];t=new ui(g,I,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_s(n,r.document),o=r.readTime?at(r.readTime):ee.min(),a=Be.newNoDocument(i,o),c=r.removedTargetIds||[];t=new ui([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_s(n,r.document),o=r.removedTargetIds||[];t=new ui([],o,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Tm(i,o),c=r.targetId;t=new vl(c,a)}}return t}function Lm(n,e){let t;if(e instanceof br)t={update:ku(n,e.key,e.value)};else if(e instanceof _l)t={delete:Us(n,e.key)};else if(e instanceof zt)t={update:ku(n,e.key,e.data),updateMask:zm(e.fieldMask)};else{if(!(e instanceof Em))return Z();t={verify:Us(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Ei)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _r)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof yr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof wi)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw Z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Vm(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Z()}(n,e.precondition)),t}function Mm(n,e){return n&&n.length>0?(ce(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?at(i.updateTime):at(o);return a.isEqual(ee.min())&&(a=at(o)),new _m(a,i.transformResults||[])}(t,e))):[]}function xm(n,e){return{documents:[Tl(n,e.path)]}}function Um(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Tl(n,i);const o=function(g){if(g.length!==0)return Rl(ct.create(g,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(g){if(g.length!==0)return g.map(I=>function(C){return{field:_n(C.field),direction:jm(C.dir)}}(I))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Ms(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ct:t,parent:i}}function Fm(n){let e=Nm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ce(r===1);const I=t.from[0];I.allDescendants?i=I.collectionId:e=e.child(I.collectionId)}let o=[];t.where&&(o=function(b){const C=bl(b);return C instanceof ct&&tl(C)?C.getFilters():[C]}(t.where));let a=[];t.orderBy&&(a=function(b){return b.map(C=>function(k){return new vi(yn(k.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(C))}(t.orderBy));let c=null;t.limit&&(c=function(b){let C;return C=typeof b=="object"?b.value:b,Ni(C)?null:C}(t.limit));let h=null;t.startAt&&(h=function(b){const C=!!b.before,V=b.values||[];return new yi(V,C)}(t.startAt));let g=null;return t.endAt&&(g=function(b){const C=!b.before,V=b.values||[];return new yi(V,C)}(t.endAt)),rm(e,i,a,o,c,"F",h,g)}function Bm(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=yn(t.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=yn(t.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=yn(t.unaryFilter.field);return be.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yn(t.unaryFilter.field);return be.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(n):n.fieldFilter!==void 0?function(t){return be.create(yn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ct.create(t.compositeFilter.filters.map(r=>bl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(t.compositeFilter.op))}(n):Z()}function jm(n){return Pm[n]}function qm(n){return Cm[n]}function $m(n){return km[n]}function _n(n){return{fieldPath:n.canonicalString()}}function yn(n){return Ne.fromServerFormat(n.fieldPath)}function Rl(n){return n instanceof be?function(t){if(t.op==="=="){if(_u(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NAN"}};if(mu(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_u(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NAN"}};if(mu(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(t.field),op:qm(t.op),value:t.value}}}(n):n instanceof ct?function(t){const r=t.getFilters().map(i=>Rl(i));return r.length===1?r[0]:{compositeFilter:{op:$m(t.op),filters:r}}}(n):Z()}function zm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Sl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,r,i,o=ee.min(),a=ee.min(),c=Oe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.ht=e}}function Wm(n){const e=Fm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ls(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.ln=new Km}addToCollectionParentIndex(e,t){return this.ln.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(xt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(xt.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Km{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Se(ve.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(41943040,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new kn(0)}static Qn(){return new kn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu([n,e],[t,r]){const i=se(n,t);return i===0?se(e,r):i}class Qm{constructor(e){this.Gn=e,this.buffer=new Se(Vu),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Vu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ym{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){H("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Un(t)?H("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await xn(t)}await this.Yn(3e5)})}}class Jm{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Vi.oe);const r=new Qm(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Du)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Du):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,o,a,c,h,g;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),i=this.params.maximumSequenceNumbersToCollect):i=b,a=Date.now(),this.nthSequenceNumber(e,i))).next(b=>(r=b,c=Date.now(),this.removeTargets(e,r,t))).next(b=>(o=b,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(b=>(g=Date.now(),gn()<=re.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-I}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${b} documents in `+(g-h)+`ms
Total Duration: ${g-I}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:b})))}}function Xm(n,e){return new Jm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.changes=new on(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&cr(r.mutation,i,Ye.empty(),Re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ie()){const i=Jt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=rr();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Jt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ie()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let o=Et();const a=ur(),c=function(){return ur()}();return t.forEach((h,g)=>{const I=r.get(g.key);i.has(g.key)&&(I===void 0||I.mutation instanceof zt)?o=o.insert(g.key,g):I!==void 0?(a.set(g.key,I.mutation.getFieldMask()),cr(I.mutation,g,I.mutation.getFieldMask(),Re.now())):a.set(g.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((g,I)=>a.set(g,I)),t.forEach((g,I)=>{var b;return c.set(g,new e_(I,(b=a.get(g))!==null&&b!==void 0?b:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ur();let i=new ge((a,c)=>a-c),o=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(h=>{const g=t.get(h);if(g===null)return;let I=r.get(h)||Ye.empty();I=c.applyToLocalView(g,I),r.set(h,I);const b=(i.get(c.batchId)||ie()).add(h);i=i.insert(c.batchId,b)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),g=h.key,I=h.value,b=cl();I.forEach(C=>{if(!o.has(C)){const V=gl(t.get(C),r.get(C));V!==null&&b.set(C,V),o=o.add(C)}}),a.push(this.documentOverlayCache.saveOverlays(e,g,b))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):im(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):N.resolve(Jt());let c=-1,h=o;return a.next(g=>N.forEach(g,(I,b)=>(c<b.largestBatchId&&(c=b.largestBatchId),o.get(I)?N.resolve():this.remoteDocumentCache.getEntry(e,I).next(C=>{h=h.insert(I,C)}))).next(()=>this.populateOverlays(e,g,o)).next(()=>this.computeViews(e,h,g,ie())).next(I=>({batchId:c,changes:ul(I)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let i=rr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=rr();return this.indexManager.getCollectionParents(e,o).next(c=>N.forEach(c,h=>{const g=function(b,C){return new Li(C,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,g,r,i).next(I=>{I.forEach((b,C)=>{a=a.insert(b,C)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,g)=>{const I=g.getKey();a.get(I)===null&&(a=a.insert(I,Be.newInvalidDocument(I)))});let c=rr();return a.forEach((h,g)=>{const I=o.get(h);I!==void 0&&cr(I.mutation,g,Ye.empty(),Re.now()),xi(t,g)&&(c=c.insert(h,g))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return N.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:at(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:Wm(i.bundledQuery),readTime:at(i.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.overlays=new ge(Y.comparator),this.Er=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Jt();return N.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.Tt(e,t,o)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=Jt(),o=t.length+1,a=new Y(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,g=h.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new ge((g,I)=>g-I);const a=this.overlays.getIterator();for(;a.hasNext();){const g=a.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let I=o.get(g.largestBatchId);I===null&&(I=Jt(),o=o.insert(g.largestBatchId,I)),I.set(g.getKey(),g)}}const c=Jt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((g,I)=>c.set(g,I)),!(c.size()>=i)););return N.resolve(c)}Tt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Im(t,r));let o=this.Er.get(t);o===void 0&&(o=ie(),this.Er.set(t,o)),this.Er.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.dr=new Se(Ce.Ar),this.Rr=new Se(Ce.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new Ce(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new Y(new ve([])),r=new Ce(t,e),i=new Ce(t,e+1),o=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new Y(new ve([])),r=new Ce(t,e),i=new Ce(t,e+1);let o=ie();return this.Rr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new Ce(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return Y.comparator(e.key,t.key)||se(e.br,t.br)}static Vr(e,t){return se(e.br,t.br)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Se(Ce.Ar)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wm(o,t,r,i);this.mutationQueue.push(a);for(const c of i)this.vr=this.vr.add(new Ce(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Fr(r),o=i<0?0:i;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),i=new Ce(t,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,i],a=>{const c=this.Cr(a.br);o.push(c)}),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Se(se);return t.forEach(i=>{const o=new Ce(i,0),a=new Ce(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],c=>{r=r.add(c.br)})}),N.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;Y.isDocumentKey(o)||(o=o.child(""));const a=new Ce(new Y(o),0);let c=new Se(se);return this.vr.forEachWhile(h=>{const g=h.key.path;return!!r.isPrefixOf(g)&&(g.length===i&&(c=c.add(h.br)),!0)},a),N.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ce(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return N.forEach(t.mutations,i=>{const o=new Ce(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new Ce(t,0),i=this.vr.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.Nr=e,this.docs=function(){return new ge(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Be.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Et();const a=t.path,c=new Y(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:g,value:{document:I}}=h.getNext();if(!a.isPrefixOf(g.path))break;g.path.length>a.length+1||Mg(Lg(I),r)<=0||(i.has(I.key)||xi(t,I))&&(o=o.insert(I.key,I.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(e,t,r,i){Z()}Lr(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new a_(this)}getSize(e){return N.resolve(this.size)}}class a_ extends Zm{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.persistence=e,this.Br=new on(t=>oo(t),ao),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.kr=0,this.qr=new po,this.targetCount=0,this.Qr=kn.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),N.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new kn(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Un(t),N.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Br.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),N.waitFor(o).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Vi(0),this.Ur=!1,this.Ur=!0,this.Wr=new i_,this.referenceDelegate=e(this),this.Gr=new u_(this),this.indexManager=new Gm,this.remoteDocumentCache=function(i){return new o_(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Hm(t),this.jr=new n_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new r_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new s_(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){H("MemoryPersistence","Starting transaction:",e);const i=new c_(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(e,t){return N.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class c_ extends Ug{constructor(e){super(),this.currentSequenceNumber=e}}class go{constructor(e){this.persistence=e,this.Zr=new po,this.Xr=null}static ei(e){return new go(e)}get ti(){if(this.Xr)return this.Xr;throw Z()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),N.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.ti,r=>{const i=Y.fromPath(r);return this.ni(e,i).next(o=>{o||t.removeEntry(i,ee.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return N.or([()=>N.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Ti{constructor(e,t){this.persistence=e,this.ri=new on(r=>jg(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Xm(this,t)}static ei(e,t){return new Ti(e,t)}Hr(){}Jr(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return N.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(o=>o?N.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(r++,o.removeEntry(a,ee.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),N.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=si(e.data.value)),t}ir(e,t,r){return N.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return N.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=ie(),i=ie();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new mo(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Kh()?8:Fg(je())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Xi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new l_;return this.ts(e,t,a).next(c=>{if(o.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>o.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(gn()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),N.resolve()):(gn()<=re.DEBUG&&H("QueryEngine","Query:",mn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(gn()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):N.resolve())}Xi(e,t){if(wu(t))return N.resolve(null);let r=st(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ls(t,null,"F"),r=st(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=ie(...o);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const g=this.rs(t,c);return this.ss(t,g,a,h.readTime)?this.Xi(e,Ls(t,null,"F")):this.os(e,g,t,h)}))})))}es(e,t,r,i){return wu(t)||i.isEqual(ee.min())?N.resolve(null):this.Zi.getDocuments(e,r).next(o=>{const a=this.rs(t,o);return this.ss(t,a,r,i)?N.resolve(null):(gn()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mn(t)),this.os(e,a,t,Og(i,-1)).next(c=>c))})}rs(e,t){let r=new Se(ol(e));return t.forEach((i,o)=>{xi(e,o)&&(r=r.add(o))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(e,t,r){return gn()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",mn(t)),this.Zi.getDocumentsMatchingQuery(e,t,xt.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new ge(se),this.cs=new on(o=>oo(o),ao),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new t_(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function f_(n,e,t,r){return new d_(n,e,t,r)}async function Cl(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=ie();for(const g of i){a.push(g.batchId);for(const I of g.mutations)h=h.add(I.key)}for(const g of o){c.push(g.batchId);for(const I of g.mutations)h=h.add(I.key)}return t.localDocuments.getDocuments(r,h).next(g=>({Ts:g,removedBatchIds:a,addedBatchIds:c}))})})}function p_(n,e){const t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,h,g,I){const b=g.batch,C=b.keys();let V=N.resolve();return C.forEach(k=>{V=V.next(()=>I.getEntry(h,k)).next(O=>{const A=g.docVersions.get(k);ce(A!==null),O.version.compareTo(A)<0&&(b.applyToRemoteDocument(O,g),O.isValidDocument()&&(O.setReadTime(g.commitVersion),I.addEntry(O)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(h,b))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=ie();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(h=h.add(c.batch.mutations[g].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function kl(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function g_(n,e){const t=te(n),r=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const c=[];e.targetChanges.forEach((I,b)=>{const C=i.get(b);if(!C)return;c.push(t.Gr.removeMatchingKeys(o,I.removedDocuments,b).next(()=>t.Gr.addMatchingKeys(o,I.addedDocuments,b)));let V=C.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(b)!==null?V=V.withResumeToken(Oe.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):I.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(I.resumeToken,r)),i=i.insert(b,V),function(O,A,L){return O.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(C,V,I)&&c.push(t.Gr.updateTargetData(o,V))});let h=Et(),g=ie();if(e.documentUpdates.forEach(I=>{e.resolvedLimboDocuments.has(I)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,I))}),c.push(m_(o,a,e.documentUpdates).next(I=>{h=I.Is,g=I.Es})),!r.isEqual(ee.min())){const I=t.Gr.getLastRemoteSnapshotVersion(o).next(b=>t.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(I)}return N.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,g)).next(()=>h)}).then(o=>(t.us=i,o))}function m_(n,e,t){let r=ie(),i=ie();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=Et();return t.forEach((c,h)=>{const g=o.get(c);h.isFoundDocument()!==g.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(ee.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!g.isValidDocument()||h.version.compareTo(g.version)>0||h.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):H("LocalStore","Ignoring outdated watch update for ",c,". Current version:",g.version," Watch version:",h.version)}),{Is:a,Es:i}})}function __(n,e){const t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function y_(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(o=>o?(i=o,N.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new kt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Bs(n,e,t){const r=te(n),i=r.us.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Un(a))throw a;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Nu(n,e,t){const r=te(n);let i=ee.min(),o=ie();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,g,I){const b=te(h),C=b.cs.get(I);return C!==void 0?N.resolve(b.us.get(C)):b.Gr.getTargetData(g,I)}(r,a,st(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:ee.min(),t?o:ie())).next(c=>(v_(r,om(e),c),{documents:c,ds:o})))}function v_(n,e,t){let r=n.ls.get(e)||ee.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(e,r)}class Ou{constructor(){this.activeTargetIds=dm()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E_{constructor(){this._o=new Ou,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Ou,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr=null;function ys(){return Xr===null?Xr=function(){return 268435456+Math.round(2147483648*Math.random())}():Xr++,"0x"+Xr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection";class A_ extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(t,r,i,o,a){const c=ys(),h=this.No(t,r.toUriEncodedString());H("RestConnection",`Sending RPC '${t}' ${c}:`,h,i);const g={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(g,o,a),this.Bo(t,h,g,i).then(I=>(H("RestConnection",`Received RPC '${t}' ${c}: `,I),I),I=>{throw Rn("RestConnection",`RPC '${t}' ${c} failed with error: `,I,"url: ",h,"request:",i),I})}ko(t,r,i,o,a,c){return this.Oo(t,r,i,o,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}No(t,r){const i=I_[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){const o=ys();return new Promise((a,c)=>{const h=new $c;h.setWithCredentials(!0),h.listenOnce(zc.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ii.NO_ERROR:const I=h.getResponseJson();H(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(I)),a(I);break;case ii.TIMEOUT:H(Ue,`RPC '${e}' ${o} timed out`),c(new Q(j.DEADLINE_EXCEEDED,"Request time out"));break;case ii.HTTP_ERROR:const b=h.getStatus();if(H(Ue,`RPC '${e}' ${o} failed with status:`,b,"response text:",h.getResponseText()),b>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const V=C==null?void 0:C.error;if(V&&V.status&&V.message){const k=function(A){const L=A.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(L)>=0?L:j.UNKNOWN}(V.status);c(new Q(k,V.message))}else c(new Q(j.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new Q(j.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(Ue,`RPC '${e}' ${o} completed.`)}});const g=JSON.stringify(i);H(Ue,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",g,r,15)})}qo(e,t,r){const i=ys(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Gc(),c=Wc(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(h.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Lo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const I=o.join("");H(Ue,`Creating RPC '${e}' stream ${i}: ${I}`,h);const b=a.createWebChannel(I,h);let C=!1,V=!1;const k=new T_({Eo:A=>{V?H(Ue,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(C||(H(Ue,`Opening RPC '${e}' stream ${i} transport.`),b.open(),C=!0),H(Ue,`RPC '${e}' stream ${i} sending:`,A),b.send(A))},Ao:()=>b.close()}),O=(A,L,U)=>{A.listen(L,M=>{try{U(M)}catch(x){setTimeout(()=>{throw x},0)}})};return O(b,nr.EventType.OPEN,()=>{V||(H(Ue,`RPC '${e}' stream ${i} transport opened.`),k.So())}),O(b,nr.EventType.CLOSE,()=>{V||(V=!0,H(Ue,`RPC '${e}' stream ${i} transport closed`),k.Do())}),O(b,nr.EventType.ERROR,A=>{V||(V=!0,Rn(Ue,`RPC '${e}' stream ${i} transport errored:`,A),k.Do(new Q(j.UNAVAILABLE,"The operation could not be completed")))}),O(b,nr.EventType.MESSAGE,A=>{var L;if(!V){const U=A.data[0];ce(!!U);const M=U,x=(M==null?void 0:M.error)||((L=M[0])===null||L===void 0?void 0:L.error);if(x){H(Ue,`RPC '${e}' stream ${i} received error:`,x);const G=x.status;let S=function(p){const f=Ae[p];if(f!==void 0)return yl(f)}(G),v=x.message;S===void 0&&(S=j.INTERNAL,v="Unknown error status: "+G+" with message "+x.message),V=!0,k.Do(new Q(S,v)),b.close()}else H(Ue,`RPC '${e}' stream ${i} received:`,U),k.vo(U)}}),O(c,Hc.STAT_EVENT,A=>{A.stat===ks.PROXY?H(Ue,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===ks.NOPROXY&&H(Ue,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(n){return new Dm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t,r=1e3,i=1.5,o=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t,r,i,o,a,c,h){this.li=e,this.Yo=r,this.Zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Dl(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===j.RESOURCE_EXHAUSTED?(vt(t.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{const i=new Q(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class b_ extends Vl{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Om(this.serializer,e),r=function(o){if(!("targetChange"in o))return ee.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?ee.min():a.readTime?at(a.readTime):ee.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Fs(this.serializer),t.addTarget=function(o,a){let c;const h=a.target;if(c=Os(h)?{documents:xm(o,h)}:{query:Um(o,h).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=wl(o,a.resumeToken);const g=Ms(o,a.expectedCount);g!==null&&(c.expectedCount=g)}else if(a.snapshotVersion.compareTo(ee.min())>0){c.readTime=Ii(o,a.snapshotVersion.toTimestamp());const g=Ms(o,a.expectedCount);g!==null&&(c.expectedCount=g)}return c}(this.serializer,e);const r=Bm(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Fs(this.serializer),t.removeTarget=e,this.c_(t)}}class R_ extends Vl{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Mm(e.writeResults,e.commitTime),r=at(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Fs(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Lm(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_ extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new Q(j.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(e,xs(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(j.UNKNOWN,o.toString())})}ko(e,t,r,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,xs(t,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(j.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class P_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(vt(t),this.C_=!1):H("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{an(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(h){const g=te(h);g.k_.add(4),await Sr(g),g.K_.set("Unknown"),g.k_.delete(4),await qi(g)}(this))})}),this.K_=new P_(r,i)}}async function qi(n){if(an(n))for(const e of n.q_)await e(!0)}async function Sr(n){for(const e of n.q_)await e(!1)}function Nl(n,e){const t=te(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Eo(t)?vo(t):Fn(t).s_()&&yo(t,e))}function _o(n,e){const t=te(n),r=Fn(t);t.B_.delete(e),r.s_()&&Ol(t,e),t.B_.size===0&&(r.s_()?r.a_():an(t)&&t.K_.set("Unknown"))}function yo(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fn(n).V_(e)}function Ol(n,e){n.U_.xe(e),Fn(n).m_(e)}function vo(n){n.U_=new Sm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Fn(n).start(),n.K_.F_()}function Eo(n){return an(n)&&!Fn(n).i_()&&n.B_.size>0}function an(n){return te(n).k_.size===0}function Ll(n){n.U_=void 0}async function k_(n){n.K_.set("Online")}async function D_(n){n.B_.forEach((e,t)=>{yo(n,e)})}async function V_(n,e){Ll(n),Eo(n)?(n.K_.O_(e),vo(n)):n.K_.set("Unknown")}async function N_(n,e,t){if(n.K_.set("Online"),e instanceof El&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(n,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ai(n,r)}else if(e instanceof ui?n.U_.$e(e):e instanceof vl?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(ee.min()))try{const r=await kl(n.localStore);t.compareTo(r)>=0&&await function(o,a){const c=o.U_.it(a);return c.targetChanges.forEach((h,g)=>{if(h.resumeToken.approximateByteSize()>0){const I=o.B_.get(g);I&&o.B_.set(g,I.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,g)=>{const I=o.B_.get(h);if(!I)return;o.B_.set(h,I.withResumeToken(Oe.EMPTY_BYTE_STRING,I.snapshotVersion)),Ol(o,h);const b=new kt(I.target,h,g,I.sequenceNumber);yo(o,b)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ai(n,r)}}async function Ai(n,e,t){if(!Un(e))throw e;n.k_.add(1),await Sr(n),n.K_.set("Offline"),t||(t=()=>kl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await qi(n)})}function Ml(n,e){return e().catch(t=>Ai(n,t,e))}async function $i(n){const e=te(n),t=jt(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;O_(e);)try{const i=await __(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,L_(e,i)}catch(i){await Ai(e,i)}xl(e)&&Ul(e)}function O_(n){return an(n)&&n.L_.length<10}function L_(n,e){n.L_.push(e);const t=jt(n);t.s_()&&t.f_&&t.g_(e.mutations)}function xl(n){return an(n)&&!jt(n).i_()&&n.L_.length>0}function Ul(n){jt(n).start()}async function M_(n){jt(n).w_()}async function x_(n){const e=jt(n);for(const t of n.L_)e.g_(t.mutations)}async function U_(n,e,t){const r=n.L_.shift(),i=lo.from(r,e,t);await Ml(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await $i(n)}async function F_(n,e){e&&jt(n).f_&&await async function(r,i){if(function(a){return Am(a)&&a!==j.ABORTED}(i.code)){const o=r.L_.shift();jt(r).__(),await Ml(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await $i(r)}}(n,e),xl(n)&&Ul(n)}async function Mu(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=an(t);t.k_.add(3),await Sr(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await qi(t)}async function B_(n,e){const t=te(n);e?(t.k_.delete(2),await qi(t)):e||(t.k_.add(2),await Sr(t),t.K_.set("Unknown"))}function Fn(n){return n.W_||(n.W_=function(t,r,i){const o=te(t);return o.b_(),new b_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:k_.bind(null,n),mo:D_.bind(null,n),po:V_.bind(null,n),R_:N_.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Eo(n)?vo(n):n.K_.set("Unknown")):(await n.W_.stop(),Ll(n))})),n.W_}function jt(n){return n.G_||(n.G_=function(t,r,i){const o=te(t);return o.b_(),new R_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:M_.bind(null,n),po:F_.bind(null,n),p_:x_.bind(null,n),y_:U_.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await $i(n)):(await n.G_.stop(),n.L_.length>0&&(H("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,c=new wo(e,t,a,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Io(n,e){if(vt("AsyncQueue",`${e}: ${n}`),Un(n))return new Q(j.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{static emptySet(e){return new Tn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=rr(),this.sortedSet=new ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Tn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.z_=new ge(Y.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Z():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Dn{constructor(e,t,r,i,o,a,c,h,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Dn(e,t,Tn.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class q_{constructor(){this.queries=Uu(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const i=te(t),o=i.queries;i.queries=Uu(),o.forEach((a,c)=>{for(const h of c.J_)h.onError(r)})})(this,new Q(j.ABORTED,"Firestore shutting down"))}}function Uu(){return new on(n=>sl(n),Mi)}async function $_(n,e){const t=te(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.Y_()&&e.Z_()&&(r=2):(o=new j_,r=e.Z_()?0:1);try{switch(r){case 0:o.H_=await t.onListen(i,!0);break;case 1:o.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=Io(a,`Initialization of query '${mn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,o),o.J_.push(e),e.ea(t.onlineState),o.H_&&e.ta(o.H_)&&To(t)}async function z_(n,e){const t=te(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.J_.indexOf(e);a>=0&&(o.J_.splice(a,1),o.J_.length===0?i=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function H_(n,e){const t=te(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const c of a.J_)c.ta(i)&&(r=!0);a.H_=i}}r&&To(t)}function W_(n,e,t){const r=te(n),i=r.queries.get(e);if(i)for(const o of i.J_)o.onError(t);r.queries.delete(e)}function To(n){n.X_.forEach(e=>{e.next()})}var js,Fu;(Fu=js||(js={})).na="default",Fu.Cache="cache";class G_{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Dn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==js.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.key=e}}class Bl{constructor(e){this.key=e}}class K_{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ie(),this.mutatedKeys=ie(),this.Va=ol(e),this.ma=new Tn(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new xu,i=t?t.ma:this.ma;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,g=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((I,b)=>{const C=i.get(I),V=xi(this.query,b)?b:null,k=!!C&&this.mutatedKeys.has(C.key),O=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let A=!1;C&&V?C.data.isEqual(V.data)?k!==O&&(r.track({type:3,doc:V}),A=!0):this.ya(C,V)||(r.track({type:2,doc:V}),A=!0,(h&&this.Va(V,h)>0||g&&this.Va(V,g)<0)&&(c=!0)):!C&&V?(r.track({type:0,doc:V}),A=!0):C&&!V&&(r.track({type:1,doc:C}),A=!0,(h||g)&&(c=!0)),A&&(V?(a=a.add(V),o=O?o.add(I):o.delete(I)):(a=a.delete(I),o=o.delete(I)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const I=this.query.limitType==="F"?a.last():a.first();a=a.delete(I.key),o=o.delete(I.key),r.track({type:1,doc:I})}return{ma:a,pa:r,ss:c,mutatedKeys:o}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((I,b)=>function(V,k){const O=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return O(V)-O(k)}(I.type,b.type)||this.Va(I.doc,b.doc)),this.wa(r),i=i!=null&&i;const c=t&&!i?this.Sa():[],h=this.Ra.size===0&&this.current&&!i?1:0,g=h!==this.Aa;return this.Aa=h,a.length!==0||g?{snapshot:new Dn(this.query,e.ma,o,a,e.mutatedKeys,h===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new xu,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ie(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new Bl(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Fl(r))}),t}va(e){this.da=e.ds,this.Ra=ie();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Dn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Q_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Y_{constructor(e){this.key=e,this.Fa=!1}}class J_{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new on(c=>sl(c),Mi),this.Oa=new Map,this.Na=new Set,this.La=new ge(Y.comparator),this.Ba=new Map,this.ka=new po,this.qa={},this.Qa=new Map,this.Ka=kn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function X_(n,e,t=!0){const r=Wl(n);let i;const o=r.xa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await jl(r,e,t,!0),i}async function Z_(n,e){const t=Wl(n);await jl(t,e,!0,!1)}async function jl(n,e,t,r){const i=await y_(n.localStore,st(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return r&&(c=await ey(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Nl(n.remoteStore,i),c}async function ey(n,e,t,r,i){n.Ua=(b,C,V)=>async function(O,A,L,U){let M=A.view.ga(L);M.ss&&(M=await Nu(O.localStore,A.query,!1).then(({documents:v})=>A.view.ga(v,M)));const x=U&&U.targetChanges.get(A.targetId),G=U&&U.targetMismatches.get(A.targetId)!=null,S=A.view.applyChanges(M,O.isPrimaryClient,x,G);return ju(O,A.targetId,S.ba),S.snapshot}(n,b,C,V);const o=await Nu(n.localStore,e,!0),a=new K_(e,o.ds),c=a.ga(o.documents),h=Rr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),g=a.applyChanges(c,n.isPrimaryClient,h);ju(n,t,g.ba);const I=new Q_(e,t,a);return n.xa.set(e,I),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),g.snapshot}async function ty(n,e,t){const r=te(n),i=r.xa.get(e),o=r.Oa.get(i.targetId);if(o.length>1)return r.Oa.set(i.targetId,o.filter(a=>!Mi(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&_o(r.remoteStore,i.targetId),qs(r,i.targetId)}).catch(xn)):(qs(r,i.targetId),await Bs(r.localStore,i.targetId,!0))}async function ny(n,e){const t=te(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),_o(t.remoteStore,r.targetId))}async function ry(n,e,t){const r=ly(n);try{const i=await function(a,c){const h=te(a),g=Re.now(),I=c.reduce((V,k)=>V.add(k.key),ie());let b,C;return h.persistence.runTransaction("Locally write mutations","readwrite",V=>{let k=Et(),O=ie();return h.hs.getEntries(V,I).next(A=>{k=A,k.forEach((L,U)=>{U.isValidDocument()||(O=O.add(L))})}).next(()=>h.localDocuments.getOverlayedDocuments(V,k)).next(A=>{b=A;const L=[];for(const U of c){const M=vm(U,b.get(U.key).overlayedDocument);M!=null&&L.push(new zt(U.key,M,Xc(M.value.mapValue),ot.exists(!0)))}return h.mutationQueue.addMutationBatch(V,g,L,c)}).next(A=>{C=A;const L=A.applyToLocalDocumentSet(b,O);return h.documentOverlayCache.saveOverlays(V,A.batchId,L)})}).then(()=>({batchId:C.batchId,changes:ul(b)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let g=a.qa[a.currentUser.toKey()];g||(g=new ge(se)),g=g.insert(c,h),a.qa[a.currentUser.toKey()]=g}(r,i.batchId,t),await Pr(r,i.changes),await $i(r.remoteStore)}catch(i){const o=Io(i,"Failed to persist write");t.reject(o)}}async function ql(n,e){const t=te(n);try{const r=await g_(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Ba.get(o);a&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?ce(a.Fa):i.removedDocuments.size>0&&(ce(a.Fa),a.Fa=!1))}),await Pr(t,r,e)}catch(r){await xn(r)}}function Bu(n,e,t){const r=te(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.xa.forEach((o,a)=>{const c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=te(a);h.onlineState=c;let g=!1;h.queries.forEach((I,b)=>{for(const C of b.J_)C.ea(c)&&(g=!0)}),g&&To(h)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iy(n,e,t){const r=te(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ba.get(e),o=i&&i.key;if(o){let a=new ge(Y.comparator);a=a.insert(o,Be.newNoDocument(o,ee.min()));const c=ie().add(o),h=new Bi(ee.min(),new Map,new ge(se),a,c);await ql(r,h),r.La=r.La.remove(o),r.Ba.delete(e),Ao(r)}else await Bs(r.localStore,e,!1).then(()=>qs(r,e,t)).catch(xn)}async function sy(n,e){const t=te(n),r=e.batch.batchId;try{const i=await p_(t.localStore,e);zl(t,r,null),$l(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Pr(t,i)}catch(i){await xn(i)}}async function oy(n,e,t){const r=te(n);try{const i=await function(a,c){const h=te(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let I;return h.mutationQueue.lookupMutationBatch(g,c).next(b=>(ce(b!==null),I=b.keys(),h.mutationQueue.removeMutationBatch(g,b))).next(()=>h.mutationQueue.performConsistencyCheck(g)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(g,I,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,I)).next(()=>h.localDocuments.getDocuments(g,I))})}(r.localStore,e);zl(r,e,t),$l(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Pr(r,i)}catch(i){await xn(i)}}function $l(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function zl(n,e,t){const r=te(n);let i=r.qa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function qs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Hl(n,r)})}function Hl(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(_o(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Ao(n))}function ju(n,e,t){for(const r of t)r instanceof Fl?(n.ka.addReference(r.key,e),ay(n,r)):r instanceof Bl?(H("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Hl(n,r.key)):Z()}function ay(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(H("SyncEngine","New document in limbo: "+t),n.Na.add(r),Ao(n))}function Ao(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new Y(ve.fromString(e)),r=n.Ka.next();n.Ba.set(r,new Y_(t)),n.La=n.La.insert(t,r),Nl(n.remoteStore,new kt(st(uo(t.path)),r,"TargetPurposeLimboResolution",Vi.oe))}}async function Pr(n,e,t){const r=te(n),i=[],o=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,h)=>{a.push(r.Ua(h,e,t).then(g=>{var I;if((g||t)&&r.isPrimaryClient){const b=g?!g.fromCache:(I=t==null?void 0:t.targetChanges.get(h.targetId))===null||I===void 0?void 0:I.current;r.sharedClientState.updateQueryState(h.targetId,b?"current":"not-current")}if(g){i.push(g);const b=mo.zi(h.targetId,g);o.push(b)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(h,g){const I=te(h);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>N.forEach(g,C=>N.forEach(C.Wi,V=>I.persistence.referenceDelegate.addReference(b,C.targetId,V)).next(()=>N.forEach(C.Gi,V=>I.persistence.referenceDelegate.removeReference(b,C.targetId,V)))))}catch(b){if(!Un(b))throw b;H("LocalStore","Failed to update sequence numbers: "+b)}for(const b of g){const C=b.targetId;if(!b.fromCache){const V=I.us.get(C),k=V.snapshotVersion,O=V.withLastLimboFreeSnapshotVersion(k);I.us=I.us.insert(C,O)}}}(r.localStore,o))}async function uy(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Cl(t.localStore,e);t.currentUser=e,function(o,a){o.Qa.forEach(c=>{c.forEach(h=>{h.reject(new Q(j.CANCELLED,a))})}),o.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pr(t,r.Ts)}}function cy(n,e){const t=te(n),r=t.Ba.get(e);if(r&&r.Fa)return ie().add(r.key);{let i=ie();const o=t.Oa.get(e);if(!o)return i;for(const a of o){const c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function Wl(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ql.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iy.bind(null,e),e.Ma.R_=H_.bind(null,e.eventManager),e.Ma.Wa=W_.bind(null,e.eventManager),e}function ly(n){const e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oy.bind(null,e),e}class bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ji(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return f_(this.persistence,new h_,e.initialUser,this.serializer)}ja(e){return new Pl(go.ei,this.serializer)}za(e){return new E_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bi.provider={build:()=>new bi};class hy extends bi{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){ce(this.persistence.referenceDelegate instanceof Ti);const r=this.persistence.referenceDelegate.garbageCollector;return new Ym(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new Pl(r=>Ti.ei(r,t),this.serializer)}}class $s{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uy.bind(null,this.syncEngine),await B_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new q_}()}createDatastore(e){const t=ji(e.databaseInfo.databaseId),r=function(o){return new A_(o)}(e.databaseInfo);return function(o,a,c,h){return new S_(o,a,c,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,c){return new C_(r,i,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Bu(this.syncEngine,t,0),function(){return Lu.p()?new Lu:new w_}())}createSyncEngine(e,t){return function(i,o,a,c,h,g,I){const b=new J_(i,o,a,c,h,g);return I&&(b.$a=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=te(i);H("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await Sr(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$s.provider={build:()=>new $s};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=Qc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{H("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Io(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Es(n,e){n.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Cl(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function qu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await py(n);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Mu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Mu(e.remoteStore,i)),n._onlineComponents=e}async function py(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Es(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Rn("Error using user provided cache. Falling back to memory cache: "+t),await Es(n,new bi)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Es(n,new hy(void 0));return n._offlineComponents}async function Gl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await qu(n,n._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await qu(n,new $s))),n._onlineComponents}function gy(n){return Gl(n).then(e=>e.syncEngine)}async function my(n){const e=await Gl(n),t=e.eventManager;return t.onListen=X_.bind(null,e.syncEngine),t.onUnlisten=ty.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Z_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ny.bind(null,e.syncEngine),t}function _y(n,e,t={}){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,g){const I=new dy({next:C=>{I.eu(),a.enqueueAndForget(()=>z_(o,b));const V=C.docs.has(c);!V&&C.fromCache?g.reject(new Q(j.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&C.fromCache&&h&&h.source==="server"?g.reject(new Q(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(C)},error:C=>g.reject(C)}),b=new G_(uo(c.path),I,{includeMetadataChanges:!0,ua:!0});return $_(o,b)}(await my(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(n,e,t){if(!t)throw new Q(j.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vy(n,e,t,r){if(e===!0&&r===!0)throw new Q(j.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zu(n){if(!Y.isDocumentKey(n))throw new Q(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z()}function nn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bo(n);throw new Q(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kl((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ro{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bg;switch(r.type){case"firstParty":return new Cg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=$u.get(t);r&&(H("ComponentProvider","Removing Datastore"),$u.delete(t),r.terminate())}(this),Promise.resolve()}}function Ey(n,e,t,r={}){var i;const o=(n=nn(n,Ro))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Fe.MOCK_USER;else{c=jh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Q(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Fe(g)}n._authCredentials=new Rg(new Kc(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new So(this.firestore,e,this._query)}}class Je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}}class vr extends So{constructor(e,t,r){super(e,t,uo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new Y(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function un(n,e,...t){if(n=qe(n),arguments.length===1&&(e=Qc.newId()),yy("doc","path",e),n instanceof Ro){const r=ve.fromString(e,...t);return zu(r),new Je(n,null,new Y(r))}{if(!(n instanceof Je||n instanceof vr))throw new Q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ve.fromString(e,...t));return zu(r),new Je(n.firestore,n instanceof vr?n.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Dl(this,"async_queue_retry"),this.fu=()=>{const r=vs();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=vs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=vs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Lt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Un(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw vt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=wo.createAndSchedule(this,e,t,r,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&Z()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class zi extends Ro{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Wu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wu(e),this._firestoreClient=void 0,await e}}}function wy(n,e){const t=rc(),r="(default)",i=Gs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Fh("firestore");o&&Ey(i,...o)}return i}function Ql(n){if(n._terminated)throw new Q(j.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Iy(n),n._firestoreClient}function Iy(n){var e,t,r;const i=n._freezeSettings(),o=function(c,h,g,I){return new zg(c,h,g,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Kl(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new fy(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vn(Oe.fromBase64String(e))}catch(t){throw new Q(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vn(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=/^__.*__$/;class Ay{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new br(e,this.data,t,this.fieldTransforms)}}class Yl{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Jl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Do{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Do(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ri(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Jl(this.Mu)&&Ty.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class by{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ji(e)}$u(e,t,r,i=!1){return new Do({Mu:e,methodName:t,Ku:r,path:Ne.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xl(n){const e=n._freezeSettings(),t=ji(n._databaseId);return new by(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ry(n,e,t,r,i,o={}){const a=n.$u(o.merge||o.mergeFields?2:0,e,t,i);Vo("Data must be an object, but it was:",a,r);const c=Zl(r,a);let h,g;if(o.merge)h=new Ye(a.fieldMask),g=a.fieldTransforms;else if(o.mergeFields){const I=[];for(const b of o.mergeFields){const C=zs(e,b,t);if(!a.contains(C))throw new Q(j.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);th(I,C)||I.push(C)}h=new Ye(I),g=a.fieldTransforms.filter(b=>h.covers(b.field))}else h=null,g=a.fieldTransforms;return new Ay(new We(c),h,g)}class Wi extends Po{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wi}}function Sy(n,e,t,r){const i=n.$u(1,e,t);Vo("Data must be an object, but it was:",i,r);const o=[],a=We.empty();$t(r,(h,g)=>{const I=No(e,h,t);g=qe(g);const b=i.Bu(I);if(g instanceof Wi)o.push(I);else{const C=Gi(g,b);C!=null&&(o.push(I),a.set(I,C))}});const c=new Ye(o);return new Yl(a,c,i.fieldTransforms)}function Py(n,e,t,r,i,o){const a=n.$u(1,e,t),c=[zs(e,r,t)],h=[i];if(o.length%2!=0)throw new Q(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<o.length;C+=2)c.push(zs(e,o[C])),h.push(o[C+1]);const g=[],I=We.empty();for(let C=c.length-1;C>=0;--C)if(!th(g,c[C])){const V=c[C];let k=h[C];k=qe(k);const O=a.Bu(V);if(k instanceof Wi)g.push(V);else{const A=Gi(k,O);A!=null&&(g.push(V),I.set(V,A))}}const b=new Ye(g);return new Yl(I,b,a.fieldTransforms)}function Gi(n,e){if(eh(n=qe(n)))return Vo("Unsupported field value:",e,n),Zl(n,e);if(n instanceof Po)return function(r,i){if(!Jl(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const c of r){let h=Gi(c,i.ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Re.fromDate(r);return{timestampValue:Ii(i.serializer,o)}}if(r instanceof Re){const o=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ii(i.serializer,o)}}if(r instanceof Co)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vn)return{bytesValue:wl(i.serializer,r._byteString)};if(r instanceof Je){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:fo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ko)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.qu("VectorValues must only contain numeric values.");return co(c.serializer,h)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${bo(r)}`)}(n,e)}function Zl(n,e){const t={};return Yc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$t(n,(r,i)=>{const o=Gi(i,e.Ou(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function eh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof Co||n instanceof Vn||n instanceof Je||n instanceof Po||n instanceof ko)}function Vo(n,e,t){if(!eh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=bo(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function zs(n,e,t){if((e=qe(e))instanceof Hi)return e._internalPath;if(typeof e=="string")return No(n,e);throw Ri("Field path arguments must be of type string or ",n,!1,void 0,t)}const Cy=new RegExp("[~\\*/\\[\\]]");function No(n,e,t){if(e.search(Cy)>=0)throw Ri(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Hi(...e.split("."))._internalPath}catch{throw Ri(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ri(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new Q(j.INVALID_ARGUMENT,c+n+h)}function th(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ky(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ky extends nh{data(){return super.data()}}function rh(n,e){return typeof e=="string"?No(n,e):e instanceof Hi?e._internalPath:e._delegate._internalPath}class Dy{convertValue(e,t="none"){switch(Bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return $t(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Ie(a.doubleValue));return new ko(o)}convertGeoPoint(e){return new Co(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Oi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pr(e));default:return null}}convertTimestamp(e){const t=Ut(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ve.fromString(e);ce(Sl(r));const i=new gr(r.get(1),r.get(3)),o=new Y(r.popFirst(5));return i.isEqual(t)||vt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ih extends nh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Oy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(rh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Oy extends ih{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){n=nn(n,Je);const e=nn(n.firestore,zi);return _y(Ql(e),n._key).then(t=>xy(e,n,t))}class Ly extends Dy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,t)}}function My(n,e,t){n=nn(n,Je);const r=nn(n.firestore,zi),i=Vy(n.converter,e);return sh(r,[Ry(Xl(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ot.none())])}function Oo(n,e,t,...r){n=nn(n,Je);const i=nn(n.firestore,zi),o=Xl(i);let a;return a=typeof(e=qe(e))=="string"||e instanceof Hi?Py(o,"updateDoc",n._key,e,t,r):Sy(o,"updateDoc",n._key,e),sh(i,[a.toMutation(n._key,ot.exists(!0))])}function sh(n,e){return function(r,i){const o=new Lt;return r.asyncQueue.enqueueAndForget(async()=>ry(await gy(r),i,o)),o.promise}(Ql(n),e)}function xy(n,e,t){const r=t.docs.get(e._key),i=new Ly(n);return new ih(n,i,e._key,r,new Ny(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Mn=i})(Nn),An(new Zt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new zi(new Sg(r.getProvider("auth-internal")),new Dg(r.getProvider("app-check-internal")),function(g,I){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Q(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(g.options.projectId,I)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Nt(lu,"4.7.5",e),Nt(lu,"4.7.5","esm2017")})();const Mt={INFO:"Notification",WARNING:"Warning",ERROR:"Error"},Lo={Notification:"icons/information.png",Warning:"icons/warning.png",Error:"icons/remove.png"};function Mo(n,e=Mt.INFO,t=e,r=Lo[e]||"icons/question.png",i=null){const o=document.getElementById("alert-window"),a=document.getElementById("alert-title"),c=document.getElementById("alert-text"),h=document.getElementById("alert-icon");a.innerText=t,c.innerText=n,h.src=r,o.style.display="block",i!==null&&setTimeout(()=>{o.style.display="none"},i)}function Ky(n,e=Mt.INFO,t=null){Mo(n,Mt.INFO,e,Lo[Mt.INFO],t)}function Ge(n,e=Mt.ERROR,t=null){Mo(n,Mt.ERROR,e,Lo[Mt.ERROR],t)}function Uy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Zr(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ws={exports:{}},Gu;function Fy(){return Gu||(Gu=1,function(n,e){(function(t){n.exports=t()})(function(){return function t(r,i,o){function a(g,I){if(!i[g]){if(!r[g]){var b=typeof Zr=="function"&&Zr;if(!I&&b)return b(g,!0);if(c)return c(g,!0);throw new Error("Cannot find module '"+g+"'")}I=i[g]={exports:{}},r[g][0].call(I.exports,function(C){var V=r[g][1][C];return a(V||C)},I,I.exports,t,r,i,o)}return i[g].exports}for(var c=typeof Zr=="function"&&Zr,h=0;h<o.length;h++)a(o[h]);return a}({1:[function(t,r,i){(function(o,a,c,h,g,I,b,C,V){var k=t("crypto");function O(S,v){v=U(S,v);var d;return(d=v.algorithm!=="passthrough"?k.createHash(v.algorithm):new G).write===void 0&&(d.write=d.update,d.end=d.update),x(v,d).dispatch(S),d.update||d.end(""),d.digest?d.digest(v.encoding==="buffer"?void 0:v.encoding):(S=d.read(),v.encoding!=="buffer"?S.toString(v.encoding):S)}(i=r.exports=O).sha1=function(S){return O(S)},i.keys=function(S){return O(S,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(S){return O(S,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(S){return O(S,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var A=k.getHashes?k.getHashes().slice():["sha1","md5"],L=(A.push("passthrough"),["buffer","hex","binary","base64"]);function U(S,v){var d={};if(d.algorithm=(v=v||{}).algorithm||"sha1",d.encoding=v.encoding||"hex",d.excludeValues=!!v.excludeValues,d.algorithm=d.algorithm.toLowerCase(),d.encoding=d.encoding.toLowerCase(),d.ignoreUnknown=v.ignoreUnknown===!0,d.respectType=v.respectType!==!1,d.respectFunctionNames=v.respectFunctionNames!==!1,d.respectFunctionProperties=v.respectFunctionProperties!==!1,d.unorderedArrays=v.unorderedArrays===!0,d.unorderedSets=v.unorderedSets!==!1,d.unorderedObjects=v.unorderedObjects!==!1,d.replacer=v.replacer||void 0,d.excludeKeys=v.excludeKeys||void 0,S===void 0)throw new Error("Object argument required.");for(var p=0;p<A.length;++p)A[p].toLowerCase()===d.algorithm.toLowerCase()&&(d.algorithm=A[p]);if(A.indexOf(d.algorithm)===-1)throw new Error('Algorithm "'+d.algorithm+'"  not supported. supported values: '+A.join(", "));if(L.indexOf(d.encoding)===-1&&d.algorithm!=="passthrough")throw new Error('Encoding "'+d.encoding+'"  not supported. supported values: '+L.join(", "));return d}function M(S){if(typeof S=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(S))!=null}function x(S,v,d){d=d||[];function p(f){return v.update?v.update(f,"utf8"):v.write(f,"utf8")}return{dispatch:function(f){return this["_"+((f=S.replacer?S.replacer(f):f)===null?"null":typeof f)](f)},_object:function(f){var m,E=Object.prototype.toString.call(f),w=/\[object (.*)\]/i.exec(E);if(w=(w=w?w[1]:"unknown:["+E+"]").toLowerCase(),0<=(E=d.indexOf(f)))return this.dispatch("[CIRCULAR:"+E+"]");if(d.push(f),c!==void 0&&c.isBuffer&&c.isBuffer(f))return p("buffer:"),p(f);if(w==="object"||w==="function"||w==="asyncfunction")return E=Object.keys(f),S.unorderedObjects&&(E=E.sort()),S.respectType===!1||M(f)||E.splice(0,0,"prototype","__proto__","constructor"),S.excludeKeys&&(E=E.filter(function(K){return!S.excludeKeys(K)})),p("object:"+E.length+":"),m=this,E.forEach(function(K){m.dispatch(K),p(":"),S.excludeValues||m.dispatch(f[K]),p(",")});if(!this["_"+w]){if(S.ignoreUnknown)return p("["+w+"]");throw new Error('Unknown object type "'+w+'"')}this["_"+w](f)},_array:function(f,K){K=K!==void 0?K:S.unorderedArrays!==!1;var E=this;if(p("array:"+f.length+":"),!K||f.length<=1)return f.forEach(function(X){return E.dispatch(X)});var w=[],K=f.map(function(X){var W=new G,ue=d.slice();return x(S,W,ue).dispatch(X),w=w.concat(ue.slice(d.length)),W.read().toString()});return d=d.concat(w),K.sort(),this._array(K,!1)},_date:function(f){return p("date:"+f.toJSON())},_symbol:function(f){return p("symbol:"+f.toString())},_error:function(f){return p("error:"+f.toString())},_boolean:function(f){return p("bool:"+f.toString())},_string:function(f){p("string:"+f.length+":"),p(f.toString())},_function:function(f){p("fn:"),M(f)?this.dispatch("[native]"):this.dispatch(f.toString()),S.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(f.name)),S.respectFunctionProperties&&this._object(f)},_number:function(f){return p("number:"+f.toString())},_xml:function(f){return p("xml:"+f.toString())},_null:function(){return p("Null")},_undefined:function(){return p("Undefined")},_regexp:function(f){return p("regex:"+f.toString())},_uint8array:function(f){return p("uint8array:"),this.dispatch(Array.prototype.slice.call(f))},_uint8clampedarray:function(f){return p("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(f))},_int8array:function(f){return p("int8array:"),this.dispatch(Array.prototype.slice.call(f))},_uint16array:function(f){return p("uint16array:"),this.dispatch(Array.prototype.slice.call(f))},_int16array:function(f){return p("int16array:"),this.dispatch(Array.prototype.slice.call(f))},_uint32array:function(f){return p("uint32array:"),this.dispatch(Array.prototype.slice.call(f))},_int32array:function(f){return p("int32array:"),this.dispatch(Array.prototype.slice.call(f))},_float32array:function(f){return p("float32array:"),this.dispatch(Array.prototype.slice.call(f))},_float64array:function(f){return p("float64array:"),this.dispatch(Array.prototype.slice.call(f))},_arraybuffer:function(f){return p("arraybuffer:"),this.dispatch(new Uint8Array(f))},_url:function(f){return p("url:"+f.toString())},_map:function(f){return p("map:"),f=Array.from(f),this._array(f,S.unorderedSets!==!1)},_set:function(f){return p("set:"),f=Array.from(f),this._array(f,S.unorderedSets!==!1)},_file:function(f){return p("file:"),this.dispatch([f.name,f.size,f.type,f.lastModfied])},_blob:function(){if(S.ignoreUnknown)return p("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return p("domwindow")},_bigint:function(f){return p("bigint:"+f.toString())},_process:function(){return p("process")},_timer:function(){return p("timer")},_pipe:function(){return p("pipe")},_tcp:function(){return p("tcp")},_udp:function(){return p("udp")},_tty:function(){return p("tty")},_statwatcher:function(){return p("statwatcher")},_securecontext:function(){return p("securecontext")},_connection:function(){return p("connection")},_zlib:function(){return p("zlib")},_context:function(){return p("context")},_nodescript:function(){return p("nodescript")},_httpparser:function(){return p("httpparser")},_dataview:function(){return p("dataview")},_signal:function(){return p("signal")},_fsevent:function(){return p("fsevent")},_tlswrap:function(){return p("tlswrap")}}}function G(){return{buf:"",write:function(S){this.buf+=S},end:function(S){this.buf+=S},read:function(){return this.buf}}}i.writeToStream=function(S,v,d){return d===void 0&&(d=v,v={}),x(v=U(S,v),d).dispatch(S)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,r,i){(function(o,a,c,h,g,I,b,C,V){(function(k){var O=typeof Uint8Array<"u"?Uint8Array:Array,A=43,L=47,U=48,M=97,x=65,G=45,S=95;function v(d){return d=d.charCodeAt(0),d===A||d===G?62:d===L||d===S?63:d<U?-1:d<U+10?d-U+26+26:d<x+26?d-x:d<M+26?d-M+26:void 0}k.toByteArray=function(d){var p,f;if(0<d.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var m=d.length,m=d.charAt(m-2)==="="?2:d.charAt(m-1)==="="?1:0,E=new O(3*d.length/4-m),w=0<m?d.length-4:d.length,K=0;function X(W){E[K++]=W}for(p=0;p<w;p+=4,0)X((16711680&(f=v(d.charAt(p))<<18|v(d.charAt(p+1))<<12|v(d.charAt(p+2))<<6|v(d.charAt(p+3))))>>16),X((65280&f)>>8),X(255&f);return m==2?X(255&(f=v(d.charAt(p))<<2|v(d.charAt(p+1))>>4)):m==1&&(X((f=v(d.charAt(p))<<10|v(d.charAt(p+1))<<4|v(d.charAt(p+2))>>2)>>8&255),X(255&f)),E},k.fromByteArray=function(d){var p,f,m,E,w=d.length%3,K="";function X(W){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(W)}for(p=0,m=d.length-w;p<m;p+=3)f=(d[p]<<16)+(d[p+1]<<8)+d[p+2],K+=X((E=f)>>18&63)+X(E>>12&63)+X(E>>6&63)+X(63&E);switch(w){case 1:K=(K+=X((f=d[d.length-1])>>2))+X(f<<4&63)+"==";break;case 2:K=(K=(K+=X((f=(d[d.length-2]<<8)+d[d.length-1])>>10))+X(f>>4&63))+X(f<<2&63)+"="}return K}})(i===void 0?this.base64js={}:i)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,r,i){(function(o,a,A,h,g,I,b,C,V){var k=t("base64-js"),O=t("ieee754");function A(y,T,R){if(!(this instanceof A))return new A(y,T,R);var B,F,$,ne,fe=typeof y;if(T==="base64"&&fe=="string")for(y=(ne=y).trim?ne.trim():ne.replace(/^\s+|\s+$/g,"");y.length%4!=0;)y+="=";if(fe=="number")B=me(y);else if(fe=="string")B=A.byteLength(y,T);else{if(fe!="object")throw new Error("First argument needs to be a number, array or string.");B=me(y.length)}if(A._useTypedArrays?F=A._augment(new Uint8Array(B)):((F=this).length=B,F._isBuffer=!0),A._useTypedArrays&&typeof y.byteLength=="number")F._set(y);else if(de(ne=y)||A.isBuffer(ne)||ne&&typeof ne=="object"&&typeof ne.length=="number")for($=0;$<B;$++)A.isBuffer(y)?F[$]=y.readUInt8($):F[$]=y[$];else if(fe=="string")F.write(y,0,T);else if(fe=="number"&&!A._useTypedArrays&&!R)for($=0;$<B;$++)F[$]=0;return F}function L(y,T,R,B){return A._charsWritten=Ee(function(F){for(var $=[],ne=0;ne<F.length;ne++)$.push(255&F.charCodeAt(ne));return $}(T),y,R,B)}function U(y,T,R,B){return A._charsWritten=Ee(function(F){for(var $,ne,fe=[],Te=0;Te<F.length;Te++)ne=F.charCodeAt(Te),$=ne>>8,ne=ne%256,fe.push(ne),fe.push($);return fe}(T),y,R,B)}function M(y,T,R){var B="";R=Math.min(y.length,R);for(var F=T;F<R;F++)B+=String.fromCharCode(y[F]);return B}function x(y,T,R,$){$||(z(typeof R=="boolean","missing or invalid endian"),z(T!=null,"missing offset"),z(T+1<y.length,"Trying to read beyond buffer length"));var F,$=y.length;if(!($<=T))return R?(F=y[T],T+1<$&&(F|=y[T+1]<<8)):(F=y[T]<<8,T+1<$&&(F|=y[T+1])),F}function G(y,T,R,$){$||(z(typeof R=="boolean","missing or invalid endian"),z(T!=null,"missing offset"),z(T+3<y.length,"Trying to read beyond buffer length"));var F,$=y.length;if(!($<=T))return R?(T+2<$&&(F=y[T+2]<<16),T+1<$&&(F|=y[T+1]<<8),F|=y[T],T+3<$&&(F+=y[T+3]<<24>>>0)):(T+1<$&&(F=y[T+1]<<16),T+2<$&&(F|=y[T+2]<<8),T+3<$&&(F|=y[T+3]),F+=y[T]<<24>>>0),F}function S(y,T,R,B){if(B||(z(typeof R=="boolean","missing or invalid endian"),z(T!=null,"missing offset"),z(T+1<y.length,"Trying to read beyond buffer length")),!(y.length<=T))return B=x(y,T,R,!0),32768&B?-1*(65535-B+1):B}function v(y,T,R,B){if(B||(z(typeof R=="boolean","missing or invalid endian"),z(T!=null,"missing offset"),z(T+3<y.length,"Trying to read beyond buffer length")),!(y.length<=T))return B=G(y,T,R,!0),2147483648&B?-1*(4294967295-B+1):B}function d(y,T,R,B){return B||(z(typeof R=="boolean","missing or invalid endian"),z(T+3<y.length,"Trying to read beyond buffer length")),O.read(y,T,R,23,4)}function p(y,T,R,B){return B||(z(typeof R=="boolean","missing or invalid endian"),z(T+7<y.length,"Trying to read beyond buffer length")),O.read(y,T,R,52,8)}function f(y,T,R,B,F){if(F||(z(T!=null,"missing value"),z(typeof B=="boolean","missing or invalid endian"),z(R!=null,"missing offset"),z(R+1<y.length,"trying to write beyond buffer length"),lt(T,65535)),F=y.length,!(F<=R))for(var $=0,ne=Math.min(F-R,2);$<ne;$++)y[R+$]=(T&255<<8*(B?$:1-$))>>>8*(B?$:1-$)}function m(y,T,R,B,F){if(F||(z(T!=null,"missing value"),z(typeof B=="boolean","missing or invalid endian"),z(R!=null,"missing offset"),z(R+3<y.length,"trying to write beyond buffer length"),lt(T,4294967295)),F=y.length,!(F<=R))for(var $=0,ne=Math.min(F-R,4);$<ne;$++)y[R+$]=T>>>8*(B?$:3-$)&255}function E(y,T,R,B,F){F||(z(T!=null,"missing value"),z(typeof B=="boolean","missing or invalid endian"),z(R!=null,"missing offset"),z(R+1<y.length,"Trying to write beyond buffer length"),Bn(T,32767,-32768)),y.length<=R||f(y,0<=T?T:65535+T+1,R,B,F)}function w(y,T,R,B,F){F||(z(T!=null,"missing value"),z(typeof B=="boolean","missing or invalid endian"),z(R!=null,"missing offset"),z(R+3<y.length,"Trying to write beyond buffer length"),Bn(T,2147483647,-2147483648)),y.length<=R||m(y,0<=T?T:4294967295+T+1,R,B,F)}function K(y,T,R,B,F){F||(z(T!=null,"missing value"),z(typeof B=="boolean","missing or invalid endian"),z(R!=null,"missing offset"),z(R+3<y.length,"Trying to write beyond buffer length"),Ht(T,34028234663852886e22,-34028234663852886e22)),y.length<=R||O.write(y,T,R,B,23,4)}function X(y,T,R,B,F){F||(z(T!=null,"missing value"),z(typeof B=="boolean","missing or invalid endian"),z(R!=null,"missing offset"),z(R+7<y.length,"Trying to write beyond buffer length"),Ht(T,17976931348623157e292,-17976931348623157e292)),y.length<=R||O.write(y,T,R,B,52,8)}i.Buffer=A,i.SlowBuffer=A,i.INSPECT_MAX_BYTES=50,A.poolSize=8192,A._useTypedArrays=function(){try{var y=new ArrayBuffer(0),T=new Uint8Array(y);return T.foo=function(){return 42},T.foo()===42&&typeof T.subarray=="function"}catch{return!1}}(),A.isEncoding=function(y){switch(String(y).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},A.isBuffer=function(y){return!(y==null||!y._isBuffer)},A.byteLength=function(y,T){var R;switch(y+="",T||"utf8"){case"hex":R=y.length/2;break;case"utf8":case"utf-8":R=Xe(y).length;break;case"ascii":case"binary":case"raw":R=y.length;break;case"base64":R=Ze(y).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":R=2*y.length;break;default:throw new Error("Unknown encoding")}return R},A.concat=function(y,T){if(z(de(y),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),y.length===0)return new A(0);if(y.length===1)return y[0];if(typeof T!="number")for(F=T=0;F<y.length;F++)T+=y[F].length;for(var R=new A(T),B=0,F=0;F<y.length;F++){var $=y[F];$.copy(R,B),B+=$.length}return R},A.prototype.write=function(y,T,R,B){isFinite(T)?isFinite(R)||(B=R,R=void 0):(Te=B,B=T,T=R,R=Te),T=Number(T)||0;var F,$,ne,fe,Te=this.length-T;switch((!R||Te<(R=Number(R)))&&(R=Te),B=String(B||"utf8").toLowerCase()){case"hex":F=function(Ke,ke,Pe,we){Pe=Number(Pe)||0;var _e=Ke.length-Pe;(!we||_e<(we=Number(we)))&&(we=_e),z((_e=ke.length)%2==0,"Invalid hex string"),_e/2<we&&(we=_e/2);for(var nt=0;nt<we;nt++){var ln=parseInt(ke.substr(2*nt,2),16);z(!isNaN(ln),"Invalid hex string"),Ke[Pe+nt]=ln}return A._charsWritten=2*nt,nt}(this,y,T,R);break;case"utf8":case"utf-8":$=this,ne=T,fe=R,F=A._charsWritten=Ee(Xe(y),$,ne,fe);break;case"ascii":case"binary":F=L(this,y,T,R);break;case"base64":$=this,ne=T,fe=R,F=A._charsWritten=Ee(Ze(y),$,ne,fe);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":F=U(this,y,T,R);break;default:throw new Error("Unknown encoding")}return F},A.prototype.toString=function(y,T,R){var B,F,$,ne,fe=this;if(y=String(y||"utf8").toLowerCase(),T=Number(T)||0,(R=R!==void 0?Number(R):fe.length)===T)return"";switch(y){case"hex":B=function(Te,Ke,ke){var Pe=Te.length;(!Ke||Ke<0)&&(Ke=0),(!ke||ke<0||Pe<ke)&&(ke=Pe);for(var we="",_e=Ke;_e<ke;_e++)we+=le(Te[_e]);return we}(fe,T,R);break;case"utf8":case"utf-8":B=function(Te,Ke,ke){var Pe="",we="";ke=Math.min(Te.length,ke);for(var _e=Ke;_e<ke;_e++)Te[_e]<=127?(Pe+=kr(we)+String.fromCharCode(Te[_e]),we=""):we+="%"+Te[_e].toString(16);return Pe+kr(we)}(fe,T,R);break;case"ascii":case"binary":B=M(fe,T,R);break;case"base64":F=fe,ne=R,B=($=T)===0&&ne===F.length?k.fromByteArray(F):k.fromByteArray(F.slice($,ne));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":B=function(Te,Ke,ke){for(var Pe=Te.slice(Ke,ke),we="",_e=0;_e<Pe.length;_e+=2)we+=String.fromCharCode(Pe[_e]+256*Pe[_e+1]);return we}(fe,T,R);break;default:throw new Error("Unknown encoding")}return B},A.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},A.prototype.copy=function(y,T,R,B){if(T=T||0,(B=B||B===0?B:this.length)!==(R=R||0)&&y.length!==0&&this.length!==0){z(R<=B,"sourceEnd < sourceStart"),z(0<=T&&T<y.length,"targetStart out of bounds"),z(0<=R&&R<this.length,"sourceStart out of bounds"),z(0<=B&&B<=this.length,"sourceEnd out of bounds"),B>this.length&&(B=this.length);var F=(B=y.length-T<B-R?y.length-T+R:B)-R;if(F<100||!A._useTypedArrays)for(var $=0;$<F;$++)y[$+T]=this[$+R];else y._set(this.subarray(R,R+F),T)}},A.prototype.slice=function(y,T){var R=this.length;if(y=ue(y,R,0),T=ue(T,R,R),A._useTypedArrays)return A._augment(this.subarray(y,T));for(var B=T-y,F=new A(B,void 0,!0),$=0;$<B;$++)F[$]=this[$+y];return F},A.prototype.get=function(y){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(y)},A.prototype.set=function(y,T){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(y,T)},A.prototype.readUInt8=function(y,T){if(T||(z(y!=null,"missing offset"),z(y<this.length,"Trying to read beyond buffer length")),!(y>=this.length))return this[y]},A.prototype.readUInt16LE=function(y,T){return x(this,y,!0,T)},A.prototype.readUInt16BE=function(y,T){return x(this,y,!1,T)},A.prototype.readUInt32LE=function(y,T){return G(this,y,!0,T)},A.prototype.readUInt32BE=function(y,T){return G(this,y,!1,T)},A.prototype.readInt8=function(y,T){if(T||(z(y!=null,"missing offset"),z(y<this.length,"Trying to read beyond buffer length")),!(y>=this.length))return 128&this[y]?-1*(255-this[y]+1):this[y]},A.prototype.readInt16LE=function(y,T){return S(this,y,!0,T)},A.prototype.readInt16BE=function(y,T){return S(this,y,!1,T)},A.prototype.readInt32LE=function(y,T){return v(this,y,!0,T)},A.prototype.readInt32BE=function(y,T){return v(this,y,!1,T)},A.prototype.readFloatLE=function(y,T){return d(this,y,!0,T)},A.prototype.readFloatBE=function(y,T){return d(this,y,!1,T)},A.prototype.readDoubleLE=function(y,T){return p(this,y,!0,T)},A.prototype.readDoubleBE=function(y,T){return p(this,y,!1,T)},A.prototype.writeUInt8=function(y,T,R){R||(z(y!=null,"missing value"),z(T!=null,"missing offset"),z(T<this.length,"trying to write beyond buffer length"),lt(y,255)),T>=this.length||(this[T]=y)},A.prototype.writeUInt16LE=function(y,T,R){f(this,y,T,!0,R)},A.prototype.writeUInt16BE=function(y,T,R){f(this,y,T,!1,R)},A.prototype.writeUInt32LE=function(y,T,R){m(this,y,T,!0,R)},A.prototype.writeUInt32BE=function(y,T,R){m(this,y,T,!1,R)},A.prototype.writeInt8=function(y,T,R){R||(z(y!=null,"missing value"),z(T!=null,"missing offset"),z(T<this.length,"Trying to write beyond buffer length"),Bn(y,127,-128)),T>=this.length||(0<=y?this.writeUInt8(y,T,R):this.writeUInt8(255+y+1,T,R))},A.prototype.writeInt16LE=function(y,T,R){E(this,y,T,!0,R)},A.prototype.writeInt16BE=function(y,T,R){E(this,y,T,!1,R)},A.prototype.writeInt32LE=function(y,T,R){w(this,y,T,!0,R)},A.prototype.writeInt32BE=function(y,T,R){w(this,y,T,!1,R)},A.prototype.writeFloatLE=function(y,T,R){K(this,y,T,!0,R)},A.prototype.writeFloatBE=function(y,T,R){K(this,y,T,!1,R)},A.prototype.writeDoubleLE=function(y,T,R){X(this,y,T,!0,R)},A.prototype.writeDoubleBE=function(y,T,R){X(this,y,T,!1,R)},A.prototype.fill=function(y,T,R){if(T=T||0,R=R||this.length,z(typeof(y=typeof(y=y||0)=="string"?y.charCodeAt(0):y)=="number"&&!isNaN(y),"value is not a number"),z(T<=R,"end < start"),R!==T&&this.length!==0){z(0<=T&&T<this.length,"start out of bounds"),z(0<=R&&R<=this.length,"end out of bounds");for(var B=T;B<R;B++)this[B]=y}},A.prototype.inspect=function(){for(var y=[],T=this.length,R=0;R<T;R++)if(y[R]=le(this[R]),R===i.INSPECT_MAX_BYTES){y[R+1]="...";break}return"<Buffer "+y.join(" ")+">"},A.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(A._useTypedArrays)return new A(this).buffer;for(var y=new Uint8Array(this.length),T=0,R=y.length;T<R;T+=1)y[T]=this[T];return y.buffer};var W=A.prototype;function ue(y,T,R){return typeof y!="number"?R:T<=(y=~~y)?T:0<=y||0<=(y+=T)?y:0}function me(y){return(y=~~Math.ceil(+y))<0?0:y}function de(y){return(Array.isArray||function(T){return Object.prototype.toString.call(T)==="[object Array]"})(y)}function le(y){return y<16?"0"+y.toString(16):y.toString(16)}function Xe(y){for(var T=[],R=0;R<y.length;R++){var B=y.charCodeAt(R);if(B<=127)T.push(y.charCodeAt(R));else for(var F=R,$=(55296<=B&&B<=57343&&R++,encodeURIComponent(y.slice(F,R+1)).substr(1).split("%")),ne=0;ne<$.length;ne++)T.push(parseInt($[ne],16))}return T}function Ze(y){return k.toByteArray(y)}function Ee(y,T,R,B){for(var F=0;F<B&&!(F+R>=T.length||F>=y.length);F++)T[F+R]=y[F];return F}function kr(y){try{return decodeURIComponent(y)}catch{return"�"}}function lt(y,T){z(typeof y=="number","cannot write a non-number as a number"),z(0<=y,"specified a negative value for writing an unsigned value"),z(y<=T,"value is larger than maximum value for type"),z(Math.floor(y)===y,"value has a fractional component")}function Bn(y,T,R){z(typeof y=="number","cannot write a non-number as a number"),z(y<=T,"value larger than maximum allowed value"),z(R<=y,"value smaller than minimum allowed value"),z(Math.floor(y)===y,"value has a fractional component")}function Ht(y,T,R){z(typeof y=="number","cannot write a non-number as a number"),z(y<=T,"value larger than maximum allowed value"),z(R<=y,"value smaller than minimum allowed value")}function z(y,T){if(!y)throw new Error(T||"Failed assertion")}A._augment=function(y){return y._isBuffer=!0,y._get=y.get,y._set=y.set,y.get=W.get,y.set=W.set,y.write=W.write,y.toString=W.toString,y.toLocaleString=W.toString,y.toJSON=W.toJSON,y.copy=W.copy,y.slice=W.slice,y.readUInt8=W.readUInt8,y.readUInt16LE=W.readUInt16LE,y.readUInt16BE=W.readUInt16BE,y.readUInt32LE=W.readUInt32LE,y.readUInt32BE=W.readUInt32BE,y.readInt8=W.readInt8,y.readInt16LE=W.readInt16LE,y.readInt16BE=W.readInt16BE,y.readInt32LE=W.readInt32LE,y.readInt32BE=W.readInt32BE,y.readFloatLE=W.readFloatLE,y.readFloatBE=W.readFloatBE,y.readDoubleLE=W.readDoubleLE,y.readDoubleBE=W.readDoubleBE,y.writeUInt8=W.writeUInt8,y.writeUInt16LE=W.writeUInt16LE,y.writeUInt16BE=W.writeUInt16BE,y.writeUInt32LE=W.writeUInt32LE,y.writeUInt32BE=W.writeUInt32BE,y.writeInt8=W.writeInt8,y.writeInt16LE=W.writeInt16LE,y.writeInt16BE=W.writeInt16BE,y.writeInt32LE=W.writeInt32LE,y.writeInt32BE=W.writeInt32BE,y.writeFloatLE=W.writeFloatLE,y.writeFloatBE=W.writeFloatBE,y.writeDoubleLE=W.writeDoubleLE,y.writeDoubleBE=W.writeDoubleBE,y.fill=W.fill,y.inspect=W.inspect,y.toArrayBuffer=W.toArrayBuffer,y}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,r,i){(function(o,a,k,h,g,I,b,C,V){var k=t("buffer").Buffer,O=4,A=new k(O);A.fill(0),r.exports={hash:function(L,U,M,x){for(var G=U(function(f,m){f.length%O!=0&&(E=f.length+(O-f.length%O),f=k.concat([f,A],E));for(var E,w=[],K=m?f.readInt32BE:f.readInt32LE,X=0;X<f.length;X+=O)w.push(K.call(f,X));return w}(L=k.isBuffer(L)?L:new k(L),x),8*L.length),U=x,S=new k(M),v=U?S.writeInt32BE:S.writeInt32LE,d=0;d<G.length;d++)v.call(S,G[d],4*d,!0);return S}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,r,i){(function(o,a,k,h,g,I,b,C,V){var k=t("buffer").Buffer,O=t("./sha"),A=t("./sha256"),L=t("./rng"),U={sha1:O,sha256:A,md5:t("./md5")},M=64,x=new k(M);function G(f,m){var E=U[f=f||"sha1"],w=[];return E||S("algorithm:",f,"is not yet supported"),{update:function(K){return k.isBuffer(K)||(K=new k(K)),w.push(K),K.length,this},digest:function(K){var X=k.concat(w),X=m?function(W,ue,me){k.isBuffer(ue)||(ue=new k(ue)),k.isBuffer(me)||(me=new k(me)),ue.length>M?ue=W(ue):ue.length<M&&(ue=k.concat([ue,x],M));for(var de=new k(M),le=new k(M),Xe=0;Xe<M;Xe++)de[Xe]=54^ue[Xe],le[Xe]=92^ue[Xe];return me=W(k.concat([de,me])),W(k.concat([le,me]))}(E,m,X):E(X);return w=null,K?X.toString(K):X}}}function S(){var f=[].slice.call(arguments).join(" ");throw new Error([f,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}x.fill(0),i.createHash=function(f){return G(f)},i.createHmac=G,i.randomBytes=function(f,m){if(!m||!m.call)return new k(L(f));try{m.call(this,void 0,new k(L(f)))}catch(E){m(E)}};var v,d=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],p=function(f){i[f]=function(){S("sorry,",f,"is not implemented yet")}};for(v in d)p(d[v])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,r,i){(function(o,a,c,h,g,I,b,C,V){var k=t("./helpers");function O(S,v){S[v>>5]|=128<<v%32,S[14+(v+64>>>9<<4)]=v;for(var d=1732584193,p=-271733879,f=-1732584194,m=271733878,E=0;E<S.length;E+=16){var w=d,K=p,X=f,W=m,d=L(d,p,f,m,S[E+0],7,-680876936),m=L(m,d,p,f,S[E+1],12,-389564586),f=L(f,m,d,p,S[E+2],17,606105819),p=L(p,f,m,d,S[E+3],22,-1044525330);d=L(d,p,f,m,S[E+4],7,-176418897),m=L(m,d,p,f,S[E+5],12,1200080426),f=L(f,m,d,p,S[E+6],17,-1473231341),p=L(p,f,m,d,S[E+7],22,-45705983),d=L(d,p,f,m,S[E+8],7,1770035416),m=L(m,d,p,f,S[E+9],12,-1958414417),f=L(f,m,d,p,S[E+10],17,-42063),p=L(p,f,m,d,S[E+11],22,-1990404162),d=L(d,p,f,m,S[E+12],7,1804603682),m=L(m,d,p,f,S[E+13],12,-40341101),f=L(f,m,d,p,S[E+14],17,-1502002290),d=U(d,p=L(p,f,m,d,S[E+15],22,1236535329),f,m,S[E+1],5,-165796510),m=U(m,d,p,f,S[E+6],9,-1069501632),f=U(f,m,d,p,S[E+11],14,643717713),p=U(p,f,m,d,S[E+0],20,-373897302),d=U(d,p,f,m,S[E+5],5,-701558691),m=U(m,d,p,f,S[E+10],9,38016083),f=U(f,m,d,p,S[E+15],14,-660478335),p=U(p,f,m,d,S[E+4],20,-405537848),d=U(d,p,f,m,S[E+9],5,568446438),m=U(m,d,p,f,S[E+14],9,-1019803690),f=U(f,m,d,p,S[E+3],14,-187363961),p=U(p,f,m,d,S[E+8],20,1163531501),d=U(d,p,f,m,S[E+13],5,-1444681467),m=U(m,d,p,f,S[E+2],9,-51403784),f=U(f,m,d,p,S[E+7],14,1735328473),d=M(d,p=U(p,f,m,d,S[E+12],20,-1926607734),f,m,S[E+5],4,-378558),m=M(m,d,p,f,S[E+8],11,-2022574463),f=M(f,m,d,p,S[E+11],16,1839030562),p=M(p,f,m,d,S[E+14],23,-35309556),d=M(d,p,f,m,S[E+1],4,-1530992060),m=M(m,d,p,f,S[E+4],11,1272893353),f=M(f,m,d,p,S[E+7],16,-155497632),p=M(p,f,m,d,S[E+10],23,-1094730640),d=M(d,p,f,m,S[E+13],4,681279174),m=M(m,d,p,f,S[E+0],11,-358537222),f=M(f,m,d,p,S[E+3],16,-722521979),p=M(p,f,m,d,S[E+6],23,76029189),d=M(d,p,f,m,S[E+9],4,-640364487),m=M(m,d,p,f,S[E+12],11,-421815835),f=M(f,m,d,p,S[E+15],16,530742520),d=x(d,p=M(p,f,m,d,S[E+2],23,-995338651),f,m,S[E+0],6,-198630844),m=x(m,d,p,f,S[E+7],10,1126891415),f=x(f,m,d,p,S[E+14],15,-1416354905),p=x(p,f,m,d,S[E+5],21,-57434055),d=x(d,p,f,m,S[E+12],6,1700485571),m=x(m,d,p,f,S[E+3],10,-1894986606),f=x(f,m,d,p,S[E+10],15,-1051523),p=x(p,f,m,d,S[E+1],21,-2054922799),d=x(d,p,f,m,S[E+8],6,1873313359),m=x(m,d,p,f,S[E+15],10,-30611744),f=x(f,m,d,p,S[E+6],15,-1560198380),p=x(p,f,m,d,S[E+13],21,1309151649),d=x(d,p,f,m,S[E+4],6,-145523070),m=x(m,d,p,f,S[E+11],10,-1120210379),f=x(f,m,d,p,S[E+2],15,718787259),p=x(p,f,m,d,S[E+9],21,-343485551),d=G(d,w),p=G(p,K),f=G(f,X),m=G(m,W)}return Array(d,p,f,m)}function A(S,v,d,p,f,m){return G((v=G(G(v,S),G(p,m)))<<f|v>>>32-f,d)}function L(S,v,d,p,f,m,E){return A(v&d|~v&p,S,v,f,m,E)}function U(S,v,d,p,f,m,E){return A(v&p|d&~p,S,v,f,m,E)}function M(S,v,d,p,f,m,E){return A(v^d^p,S,v,f,m,E)}function x(S,v,d,p,f,m,E){return A(d^(v|~p),S,v,f,m,E)}function G(S,v){var d=(65535&S)+(65535&v);return(S>>16)+(v>>16)+(d>>16)<<16|65535&d}r.exports=function(S){return k.hash(S,O,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,r,i){(function(o,a,c,h,g,I,b,C,V){r.exports=function(k){for(var O,A=new Array(k),L=0;L<k;L++)(3&L)==0&&(O=4294967296*Math.random()),A[L]=O>>>((3&L)<<3)&255;return A}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,r,i){(function(o,a,c,h,g,I,b,C,V){var k=t("./helpers");function O(U,M){U[M>>5]|=128<<24-M%32,U[15+(M+64>>9<<4)]=M;for(var x,G,S,v=Array(80),d=1732584193,p=-271733879,f=-1732584194,m=271733878,E=-1009589776,w=0;w<U.length;w+=16){for(var K=d,X=p,W=f,ue=m,me=E,de=0;de<80;de++){v[de]=de<16?U[w+de]:L(v[de-3]^v[de-8]^v[de-14]^v[de-16],1);var le=A(A(L(d,5),(le=p,G=f,S=m,(x=de)<20?le&G|~le&S:!(x<40)&&x<60?le&G|le&S|G&S:le^G^S)),A(A(E,v[de]),(x=de)<20?1518500249:x<40?1859775393:x<60?-1894007588:-899497514)),E=m,m=f,f=L(p,30),p=d,d=le}d=A(d,K),p=A(p,X),f=A(f,W),m=A(m,ue),E=A(E,me)}return Array(d,p,f,m,E)}function A(U,M){var x=(65535&U)+(65535&M);return(U>>16)+(M>>16)+(x>>16)<<16|65535&x}function L(U,M){return U<<M|U>>>32-M}r.exports=function(U){return k.hash(U,O,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,r,i){(function(o,a,c,h,g,I,b,C,V){function k(M,x){var G=(65535&M)+(65535&x);return(M>>16)+(x>>16)+(G>>16)<<16|65535&G}function O(M,x){var G,S=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),v=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),d=new Array(64);M[x>>5]|=128<<24-x%32,M[15+(x+64>>9<<4)]=x;for(var p,f,m=0;m<M.length;m+=16){for(var E=v[0],w=v[1],K=v[2],X=v[3],W=v[4],ue=v[5],me=v[6],de=v[7],le=0;le<64;le++)d[le]=le<16?M[le+m]:k(k(k((f=d[le-2],L(f,17)^L(f,19)^U(f,10)),d[le-7]),(f=d[le-15],L(f,7)^L(f,18)^U(f,3))),d[le-16]),G=k(k(k(k(de,L(f=W,6)^L(f,11)^L(f,25)),W&ue^~W&me),S[le]),d[le]),p=k(L(p=E,2)^L(p,13)^L(p,22),E&w^E&K^w&K),de=me,me=ue,ue=W,W=k(X,G),X=K,K=w,w=E,E=k(G,p);v[0]=k(E,v[0]),v[1]=k(w,v[1]),v[2]=k(K,v[2]),v[3]=k(X,v[3]),v[4]=k(W,v[4]),v[5]=k(ue,v[5]),v[6]=k(me,v[6]),v[7]=k(de,v[7])}return v}var A=t("./helpers"),L=function(M,x){return M>>>x|M<<32-x},U=function(M,x){return M>>>x};r.exports=function(M){return A.hash(M,O,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,r,i){(function(o,a,c,h,g,I,b,C,V){i.read=function(k,O,A,L,m){var M,x,G=8*m-L-1,S=(1<<G)-1,v=S>>1,d=-7,p=A?m-1:0,f=A?-1:1,m=k[O+p];for(p+=f,M=m&(1<<-d)-1,m>>=-d,d+=G;0<d;M=256*M+k[O+p],p+=f,d-=8);for(x=M&(1<<-d)-1,M>>=-d,d+=L;0<d;x=256*x+k[O+p],p+=f,d-=8);if(M===0)M=1-v;else{if(M===S)return x?NaN:1/0*(m?-1:1);x+=Math.pow(2,L),M-=v}return(m?-1:1)*x*Math.pow(2,M-L)},i.write=function(k,O,A,L,U,E){var x,G,S=8*E-U-1,v=(1<<S)-1,d=v>>1,p=U===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=L?0:E-1,m=L?1:-1,E=O<0||O===0&&1/O<0?1:0;for(O=Math.abs(O),isNaN(O)||O===1/0?(G=isNaN(O)?1:0,x=v):(x=Math.floor(Math.log(O)/Math.LN2),O*(L=Math.pow(2,-x))<1&&(x--,L*=2),2<=(O+=1<=x+d?p/L:p*Math.pow(2,1-d))*L&&(x++,L/=2),v<=x+d?(G=0,x=v):1<=x+d?(G=(O*L-1)*Math.pow(2,U),x+=d):(G=O*Math.pow(2,d-1)*Math.pow(2,U),x=0));8<=U;k[A+f]=255&G,f+=m,G/=256,U-=8);for(x=x<<U|G,S+=U;0<S;k[A+f]=255&x,f+=m,x/=256,S-=8);k[A+f-m]|=128*E}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,r,i){(function(o,a,c,h,g,I,b,C,V){var k,O,A;function L(){}(o=r.exports={}).nextTick=(O=typeof window<"u"&&window.setImmediate,A=typeof window<"u"&&window.postMessage&&window.addEventListener,O?function(U){return window.setImmediate(U)}:A?(k=[],window.addEventListener("message",function(U){var M=U.source;M!==window&&M!==null||U.data!=="process-tick"||(U.stopPropagation(),0<k.length&&k.shift()())},!0),function(U){k.push(U),window.postMessage("process-tick","*")}):function(U){setTimeout(U,0)}),o.title="browser",o.browser=!0,o.env={},o.argv=[],o.on=L,o.addListener=L,o.once=L,o.off=L,o.removeListener=L,o.removeAllListeners=L,o.emit=L,o.binding=function(U){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(U){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})}(ws)),ws.exports}var By=Fy();const jy=Uy(By),qy={apiKey:"AIzaSyA_FhCeSkLrXIEqQjYePhqrADUiNIZyjPA",authDomain:"answers-time.firebaseapp.com",projectId:"answers-time",storageBucket:"answers-time.firebasestorage.app",messagingSenderId:"623336658463",appId:"1:623336658463:web:d8100a44838ab4b8bb672a",measurementId:"G-P1E0HFTDP3"};nc(qy);const rn=Tg(),cn=wy();async function Qy(n,e){try{await lp(rn,n,e),kc(rn,async t=>{const r=un(cn,"users",n),i=await Cr(r);if(!i.exists()){Ge("Invalid username or password!");return}const o=i.data();if(o.password!==e){Ge("Invalid username or password!");return}if(t){if(o.role!=="admin"){Ge("User is not an admin");return}window.location="admin-panel.html"}else Ge("User authentication failed!")})}catch{Ge("Invalid username or password!")}}function Yy(){return new Promise((n,e)=>{kc(rn,async t=>{if(!t){window.location.href="/projects/answers-time/index.html",n(!1);return}try{const r=un(cn,"users",t.email),i=await Cr(r);if(!i.exists()){window.location.href="/projects/answers-time/index.html",n(!1);return}if(i.data().role!=="admin"){window.location.href="/projects/answers-time/index.html",n(!1);return}n(!0)}catch(r){Ge("Database error, failed authentication check!"),window.location.href="../admin-panel/index.html",e(r)}})})}async function Jy(n,e=!1){try{const t=await $y(),r=un(cn,"data","messages"),i={message:n,ip:t,timestamp:Date.now()};await Oo(r,{[jy(i)]:i}),e||Mo("The wise one hears you.",Mt.INFO,"The Jake Button","icons/utopia_smiley.png")}catch(t){if(!e){Ge("Couldn't ask jake!");return}console.log(t)}}async function Xy(){try{const n=un(cn,"data","messages"),e=await Cr(n);if(e.exists()){const t=e.data();return Object.entries(t).map(([r,i])=>{const o=new Date(Number(i.timestamp));return i.date=o.toLocaleString(),{hash:r,value:i}})}else return Ge("Database error, messages not found!"),[]}catch(n){return Ge(`Error retrieving messages!
 ${n}`),[]}}async function Zy(n){const e=n.reduce((t,r)=>(t[r.hash]={timestamp:r.value.timestamp,ip:r.value.ip,message:r.value.message},t),{});try{const t=un(cn,"data","messages");await My(t,e)}catch(t){console.log(t),Ge("Database error, failed to update messages!")}}function ev(){Dc(rn)}async function $y(){try{return(await(await fetch("https://api.ipify.org?format=json")).json()).ip||"unknown"}catch{return"unknown"}}async function tv(n){try{const e=rn.currentUser.email,t=un(cn,"users",e),r=await Cr(t);if(r.exists()){const o=r.data().favorites||[];await Oo(t,{favorites:[...o,n.hash]})}else Ge("Database error, failed to add favorite!")}catch(e){Ge(`Database error, failed to add favorite!
${e}`)}}async function nv(n){try{const e=rn.currentUser.email,t=un(cn,"users",e),r=await Cr(t);if(r.exists()){const a=(r.data().favorites||[]).filter(c=>c!==n.hash);await Oo(t,{favorites:a})}else Ge("Database error, failed to remove favorite!")}catch(e){Ge(`Database error, failed to remove favorite!
${e}`)}}const zy=36e5;setTimeout(()=>{Dc(rn)},zy);export{Mt as A,Jy as a,ev as b,Yy as c,Ky as d,Mo as e,tv as f,Xy as g,Qy as l,nv as r,Zy as u};
