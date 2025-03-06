(function(re,He,K,Ue,it,Oe){"use strict";var Ae={exports:{}},d={},Le;function at(){if(Le)return d;Le=1;var T=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),V=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ce=Object.assign,U={};function P(n,o,c){this.props=n,this.context=o,this.refs=U,this.updater=c||ae}P.prototype.isReactComponent={},P.prototype.setState=function(n,o){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,o,"setState")},P.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function I(){}I.prototype=P.prototype;function Y(n,o,c){this.props=n,this.context=o,this.refs=U,this.updater=c||ae}var z=Y.prototype=new I;z.constructor=Y,ce(z,P.prototype),z.isPureReactComponent=!0;var fe=Array.isArray,g={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function Z(n,o,c,l,h,m){return c=m.ref,{$$typeof:T,type:n,key:o,ref:c!==void 0?c:null,props:m}}function le(n,o){return Z(n.type,o,void 0,void 0,void 0,n.props)}function b(n){return typeof n=="object"&&n!==null&&n.$$typeof===T}function de(n){var o={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(c){return o[c]})}var pe=/\/+/g;function J(n,o){return typeof n=="object"&&n!==null&&n.key!=null?de(""+n.key):o.toString(36)}function G(){}function ve(n){switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:switch(typeof n.status=="string"?n.then(G,G):(n.status="pending",n.then(function(o){n.status==="pending"&&(n.status="fulfilled",n.value=o)},function(o){n.status==="pending"&&(n.status="rejected",n.reason=o)})),n.status){case"fulfilled":return n.value;case"rejected":throw n.reason}}throw n}function H(n,o,c,l,h){var m=typeof n;(m==="undefined"||m==="boolean")&&(n=null);var p=!1;if(n===null)p=!0;else switch(m){case"bigint":case"string":case"number":p=!0;break;case"object":switch(n.$$typeof){case T:case f:p=!0;break;case S:return p=n._init,H(p(n._payload),o,c,l,h)}}if(p)return h=h(n),p=l===""?"."+J(n,0):l,fe(h)?(c="",p!=null&&(c=p.replace(pe,"$&/")+"/"),H(h,o,c,"",function(F){return F})):h!=null&&(b(h)&&(h=le(h,c+(h.key==null||n&&n.key===h.key?"":(""+h.key).replace(pe,"$&/")+"/")+p)),o.push(h)),1;p=0;var A=l===""?".":l+":";if(fe(n))for(var _=0;_<n.length;_++)l=n[_],m=A+J(l,_),p+=H(l,o,c,m,h);else if(_=ie(n),typeof _=="function")for(n=_.call(n),_=0;!(l=n.next()).done;)l=l.value,m=A+J(l,_++),p+=H(l,o,c,m,h);else if(m==="object"){if(typeof n.then=="function")return H(ve(n),o,c,l,h);throw o=String(n),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.")}return p}function O(n,o,c){if(n==null)return n;var l=[],h=0;return H(n,l,"","",function(m){return o.call(c,m,h++)}),l}function B(n){if(n._status===-1){var o=n._result;o=o(),o.then(function(c){(n._status===0||n._status===-1)&&(n._status=1,n._result=c)},function(c){(n._status===0||n._status===-1)&&(n._status=2,n._result=c)}),n._status===-1&&(n._status=0,n._result=o)}if(n._status===1)return n._result.default;throw n._result}var he=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var o=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(o))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function R(){}return d.Children={map:O,forEach:function(n,o,c){O(n,function(){o.apply(this,arguments)},c)},count:function(n){var o=0;return O(n,function(){o++}),o},toArray:function(n){return O(n,function(o){return o})||[]},only:function(n){if(!b(n))throw Error("React.Children.only expected to receive a single React element child.");return n}},d.Component=P,d.Fragment=k,d.Profiler=Q,d.PureComponent=Y,d.StrictMode=oe,d.Suspense=se,d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,d.act=function(){throw Error("act(...) is not supported in production builds of React.")},d.cache=function(n){return function(){return n.apply(null,arguments)}},d.cloneElement=function(n,o,c){if(n==null)throw Error("The argument must be a React element, but you passed "+n+".");var l=ce({},n.props),h=n.key,m=void 0;if(o!=null)for(p in o.ref!==void 0&&(m=void 0),o.key!==void 0&&(h=""+o.key),o)!D.call(o,p)||p==="key"||p==="__self"||p==="__source"||p==="ref"&&o.ref===void 0||(l[p]=o[p]);var p=arguments.length-2;if(p===1)l.children=c;else if(1<p){for(var A=Array(p),_=0;_<p;_++)A[_]=arguments[_+2];l.children=A}return Z(n.type,h,void 0,void 0,m,l)},d.createContext=function(n){return n={$$typeof:ue,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider=n,n.Consumer={$$typeof:N,_context:n},n},d.createElement=function(n,o,c){var l,h={},m=null;if(o!=null)for(l in o.key!==void 0&&(m=""+o.key),o)D.call(o,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(h[l]=o[l]);var p=arguments.length-2;if(p===1)h.children=c;else if(1<p){for(var A=Array(p),_=0;_<p;_++)A[_]=arguments[_+2];h.children=A}if(n&&n.defaultProps)for(l in p=n.defaultProps,p)h[l]===void 0&&(h[l]=p[l]);return Z(n,m,void 0,void 0,null,h)},d.createRef=function(){return{current:null}},d.forwardRef=function(n){return{$$typeof:X,render:n}},d.isValidElement=b,d.lazy=function(n){return{$$typeof:S,_payload:{_status:-1,_result:n},_init:B}},d.memo=function(n,o){return{$$typeof:q,type:n,compare:o===void 0?null:o}},d.startTransition=function(n){var o=g.T,c={};g.T=c;try{var l=n(),h=g.S;h!==null&&h(c,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(R,he)}catch(m){he(m)}finally{g.T=o}},d.unstable_useCacheRefresh=function(){return g.H.useCacheRefresh()},d.use=function(n){return g.H.use(n)},d.useActionState=function(n,o,c){return g.H.useActionState(n,o,c)},d.useCallback=function(n,o){return g.H.useCallback(n,o)},d.useContext=function(n){return g.H.useContext(n)},d.useDebugValue=function(){},d.useDeferredValue=function(n,o){return g.H.useDeferredValue(n,o)},d.useEffect=function(n,o){return g.H.useEffect(n,o)},d.useId=function(){return g.H.useId()},d.useImperativeHandle=function(n,o,c){return g.H.useImperativeHandle(n,o,c)},d.useInsertionEffect=function(n,o){return g.H.useInsertionEffect(n,o)},d.useLayoutEffect=function(n,o){return g.H.useLayoutEffect(n,o)},d.useMemo=function(n,o){return g.H.useMemo(n,o)},d.useOptimistic=function(n,o){return g.H.useOptimistic(n,o)},d.useReducer=function(n,o,c){return g.H.useReducer(n,o,c)},d.useRef=function(n){return g.H.useRef(n)},d.useState=function(n){return g.H.useState(n)},d.useSyncExternalStore=function(n,o,c){return g.H.useSyncExternalStore(n,o,c)},d.useTransition=function(){return g.H.useTransition()},d.version="19.0.0",d}var x={exports:{}};x.exports;var We;function ct(){return We||(We=1,function(T,f){process.env.NODE_ENV!=="production"&&function(){function k(e,t){Object.defineProperty(N.prototype,e,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})}function oe(e){return e===null||typeof e!="object"?null:(e=Ie&&e[Ie]||e["@@iterator"],typeof e=="function"?e:null)}function Q(e,t){e=(e=e.constructor)&&(e.displayName||e.name)||"ReactClass";var r=e+"."+t;ze[r]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,e),ze[r]=!0)}function N(e,t,r){this.props=e,this.context=t,this.refs=Ne,this.updater=r||De}function ue(){}function X(e,t,r){this.props=e,this.context=t,this.refs=Ne,this.updater=r||De}function se(e){return""+e}function q(e){try{se(e);var t=!1}catch{t=!0}if(t){t=console;var r=t.error,u=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",u),se(e)}}function S(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case A:return"Portal";case Se:return"Profiler";case F:return"StrictMode";case ge:return"Suspense";case ke:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case je:return(e.displayName||"Context")+".Provider";case ye:return(e._context.displayName||"Context")+".Consumer";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:S(e.type)||"Memo";case te:t=e._payload,e=e._init;try{return S(e(t))}catch{}}return null}function V(e){return typeof e=="string"||typeof e=="function"||e===_||e===Se||e===F||e===ge||e===ke||e===vt||typeof e=="object"&&e!==null&&(e.$$typeof===te||e.$$typeof===ee||e.$$typeof===je||e.$$typeof===ye||e.$$typeof===Ee||e.$$typeof===yt||e.getModuleId!==void 0)}function ie(){}function ae(){if(ne===0){Ge=console.log,Be=console.info,Ke=console.warn,xe=console.error,Qe=console.group,Xe=console.groupCollapsed,Ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ie,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ne++}function ce(){if(ne--,ne===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:$({},e,{value:Ge}),info:$({},e,{value:Be}),warn:$({},e,{value:Ke}),error:$({},e,{value:xe}),group:$({},e,{value:Qe}),groupCollapsed:$({},e,{value:Xe}),groupEnd:$({},e,{value:Ve})})}0>ne&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function U(e){if(Pe===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Pe=t&&t[1]||"",Ze=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+e+Ze}function P(e,t){if(!e||$e)return"";var r=Me.get(e);if(r!==void 0)return r;$e=!0,r=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var u=null;u=v.H,v.H=null,ae();try{var s={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(M){var be=M}Reflect.construct(e,[],j)}else{try{j.call()}catch(M){be=M}e.call(j.prototype)}}else{try{throw Error()}catch(M){be=M}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(M){if(M&&be&&typeof M.stack=="string")return[M.stack,be.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=s.DetermineComponentFrameRoot(),E=i[0],y=i[1];if(E&&y){var w=E.split(`
`),C=y.split(`
`);for(i=a=0;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(a===w.length||i===C.length)for(a=w.length-1,i=C.length-1;1<=a&&0<=i&&w[a]!==C[i];)i--;for(;1<=a&&0<=i;a--,i--)if(w[a]!==C[i]){if(a!==1||i!==1)do if(a--,i--,0>i||w[a]!==C[i]){var W=`
`+w[a].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),typeof e=="function"&&Me.set(e,W),W}while(1<=a&&0<=i);break}}}finally{$e=!1,v.H=u,ce(),Error.prepareStackTrace=r}return w=(w=e?e.displayName||e.name:"")?U(w):"",typeof e=="function"&&Me.set(e,w),w}function I(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return P(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return U(e);switch(e){case ge:return U("Suspense");case ke:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case Ee:return e=P(e.render,!1),e;case ee:return I(e.type);case te:t=e._payload,e=e._init;try{return I(e(t))}catch{}}return""}function Y(){var e=v.A;return e===null?null:e.getOwner()}function z(e){if(we.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function fe(e,t){function r(){Je||(Je=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function g(){var e=S(this.type);return et[e]||(et[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function D(e,t,r,u,s,a){return r=a.ref,e={$$typeof:p,type:e,key:t,props:a,_owner:s},(r!==void 0?r:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:g}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function Z(e,t){return t=D(e.type,t,void 0,void 0,e._owner,e.props),t._store.validated=e._store.validated,t}function le(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Et){if(_e(e))for(var r=0;r<e.length;r++){var u=e[r];b(u)&&de(u,t)}else if(b(e))e._store&&(e._store.validated=1);else if(r=oe(e),typeof r=="function"&&r!==e.entries&&(r=r.call(e),r!==e))for(;!(e=r.next()).done;)b(e.value)&&de(e.value,t)}}function b(e){return typeof e=="object"&&e!==null&&e.$$typeof===p}function de(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=pe(t),!tt[t])){tt[t]=!0;var r="";e&&e._owner!=null&&e._owner!==Y()&&(r=null,typeof e._owner.tag=="number"?r=S(e._owner.type):typeof e._owner.name=="string"&&(r=e._owner.name),r=" It was passed a child from "+r+".");var u=v.getCurrentStack;v.getCurrentStack=function(){var s=I(e.type);return u&&(s+=u()||""),s},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,r),v.getCurrentStack=u}}function pe(e){var t="",r=Y();return r&&(r=S(r.type))&&(t=`

Check the render method of \``+r+"`."),t||(e=S(e))&&(t=`

Check the top-level render call using <`+e+">."),t}function J(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}function G(e,t){return typeof e=="object"&&e!==null&&e.key!=null?(q(e.key),J(""+e.key)):t.toString(36)}function ve(){}function H(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ve,ve):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function O(e,t,r,u,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case p:case A:i=!0;break;case te:return i=e._init,O(i(e._payload),t,r,u,s)}}if(i){i=e,s=s(i);var E=u===""?"."+G(i,0):u;return _e(s)?(r="",E!=null&&(r=E.replace(rt,"$&/")+"/"),O(s,t,r,"",function(w){return w})):s!=null&&(b(s)&&(s.key!=null&&(i&&i.key===s.key||q(s.key)),r=Z(s,r+(s.key==null||i&&i.key===s.key?"":(""+s.key).replace(rt,"$&/")+"/")+E),u!==""&&i!=null&&b(i)&&i.key==null&&i._store&&!i._store.validated&&(r._store.validated=2),s=r),t.push(s)),1}if(i=0,E=u===""?".":u+":",_e(e))for(var y=0;y<e.length;y++)u=e[y],a=E+G(u,y),i+=O(u,t,r,a,s);else if(y=oe(e),typeof y=="function")for(y===e.entries&&(nt||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),nt=!0),e=y.call(e),y=0;!(u=e.next()).done;)u=u.value,a=E+G(u,y++),i+=O(u,t,r,a,s);else if(a==="object"){if(typeof e.then=="function")return O(H(e),t,r,u,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function B(e,t,r){if(e==null)return e;var u=[],s=0;return O(e,u,"","",function(a){return t.call(r,a,s++)}),u}function he(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return t=e._result,t===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,t),"default"in t||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,t),t.default;throw e._result}function R(){var e=v.H;return e===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function n(){}function o(e){if(Re===null)try{var t=("require"+Math.random()).slice(0,7);Re=(T&&T[t]).call(T,"timers").setImmediate}catch{Re=function(u){ut===!1&&(ut=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var s=new MessageChannel;s.port1.onmessage=u,s.port2.postMessage(void 0)}}return Re(e)}function c(e){return 1<e.length&&typeof AggregateError=="function"?new AggregateError(e):e[0]}function l(e,t){t!==Ce-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Ce=t}function h(e,t,r){var u=v.actQueue;if(u!==null)if(u.length!==0)try{m(u),o(function(){return h(e,t,r)});return}catch(s){v.thrownErrors.push(s)}else v.actQueue=null;0<v.thrownErrors.length?(u=c(v.thrownErrors),v.thrownErrors.length=0,r(u)):t(e)}function m(e){if(!Ye){Ye=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{v.didUsePromise=!1;var u=r(!1);if(u!==null){if(v.didUsePromise){e[t]=r,e.splice(0,t);return}r=u}else break}while(1)}e.length=0}catch(s){e.splice(0,t+1),v.thrownErrors.push(s)}finally{Ye=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var p=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),ye=Symbol.for("react.consumer"),je=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),vt=Symbol.for("react.offscreen"),Ie=Symbol.iterator,ze={},De={isMounted:function(){return!1},enqueueForceUpdate:function(e){Q(e,"forceUpdate")},enqueueReplaceState:function(e){Q(e,"replaceState")},enqueueSetState:function(e){Q(e,"setState")}},$=Object.assign,Ne={};Object.freeze(Ne),N.prototype.isReactComponent={},N.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},N.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var L={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},me;for(me in L)L.hasOwnProperty(me)&&k(me,L[me]);ue.prototype=N.prototype,L=X.prototype=new ue,L.constructor=X,$(L,N.prototype),L.isPureReactComponent=!0;var _e=Array.isArray,ht=Symbol.for("react.client.reference"),v={H:null,A:null,T:null,S:null,actQueue:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null},we=Object.prototype.hasOwnProperty,yt=Symbol.for("react.client.reference"),ne=0,Ge,Be,Ke,xe,Qe,Xe,Ve;ie.__reactDisabledLog=!0;var Pe,Ze,$e=!1,Me=new(typeof WeakMap=="function"?WeakMap:Map),Et=Symbol.for("react.client.reference"),Je,Fe,et={},tt={},nt=!1,rt=/\/+/g,ot=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ut=!1,Re=null,Ce=0,Te=!1,Ye=!1,st=typeof queueMicrotask=="function"?function(e){queueMicrotask(function(){return queueMicrotask(e)})}:o;f.Children={map:B,forEach:function(e,t,r){B(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return B(e,function(){t++}),t},toArray:function(e){return B(e,function(t){return t})||[]},only:function(e){if(!b(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},f.Component=N,f.Fragment=_,f.Profiler=Se,f.PureComponent=X,f.StrictMode=F,f.Suspense=ge,f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=v,f.act=function(e){var t=v.actQueue,r=Ce;Ce++;var u=v.actQueue=t!==null?t:[],s=!1;try{var a=e()}catch(y){v.thrownErrors.push(y)}if(0<v.thrownErrors.length)throw l(t,r),e=c(v.thrownErrors),v.thrownErrors.length=0,e;if(a!==null&&typeof a=="object"&&typeof a.then=="function"){var i=a;return st(function(){s||Te||(Te=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(y,w){s=!0,i.then(function(C){if(l(t,r),r===0){try{m(u),o(function(){return h(C,y,w)})}catch(j){v.thrownErrors.push(j)}if(0<v.thrownErrors.length){var W=c(v.thrownErrors);v.thrownErrors.length=0,w(W)}}else y(C)},function(C){l(t,r),0<v.thrownErrors.length&&(C=c(v.thrownErrors),v.thrownErrors.length=0),w(C)})}}}var E=a;if(l(t,r),r===0&&(m(u),u.length!==0&&st(function(){s||Te||(Te=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),v.actQueue=null),0<v.thrownErrors.length)throw e=c(v.thrownErrors),v.thrownErrors.length=0,e;return{then:function(y,w){s=!0,r===0?(v.actQueue=u,o(function(){return h(E,y,w)})):y(E)}}},f.cache=function(e){return function(){return e.apply(null,arguments)}},f.cloneElement=function(e,t,r){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var u=$({},e.props),s=e.key,a=e._owner;if(t!=null){var i;e:{if(we.call(t,"ref")&&(i=Object.getOwnPropertyDescriptor(t,"ref").get)&&i.isReactWarning){i=!1;break e}i=t.ref!==void 0}i&&(a=Y()),z(t)&&(q(t.key),s=""+t.key);for(E in t)!we.call(t,E)||E==="key"||E==="__self"||E==="__source"||E==="ref"&&t.ref===void 0||(u[E]=t[E])}var E=arguments.length-2;if(E===1)u.children=r;else if(1<E){i=Array(E);for(var y=0;y<E;y++)i[y]=arguments[y+2];u.children=i}for(u=D(e.type,s,void 0,void 0,a,u),s=2;s<arguments.length;s++)le(arguments[s],u.type);return u},f.createContext=function(e){return e={$$typeof:je,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ye,_context:e},e._currentRenderer=null,e._currentRenderer2=null,e},f.createElement=function(e,t,r){if(V(e))for(var u=2;u<arguments.length;u++)le(arguments[u],e);else{if(u="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null)var s="null";else _e(e)?s="array":e!==void 0&&e.$$typeof===p?(s="<"+(S(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e;console.error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,u)}var a;if(u={},s=null,t!=null)for(a in Fe||!("__self"in t)||"key"in t||(Fe=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),z(t)&&(q(t.key),s=""+t.key),t)we.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(u[a]=t[a]);var i=arguments.length-2;if(i===1)u.children=r;else if(1<i){for(var E=Array(i),y=0;y<i;y++)E[y]=arguments[y+2];Object.freeze&&Object.freeze(E),u.children=E}if(e&&e.defaultProps)for(a in i=e.defaultProps,i)u[a]===void 0&&(u[a]=i[a]);return s&&fe(u,typeof e=="function"?e.displayName||e.name||"Unknown":e),D(e,s,void 0,void 0,Y(),u)},f.createRef=function(){var e={current:null};return Object.seal(e),e},f.forwardRef=function(e){e!=null&&e.$$typeof===ee?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e!="function"?console.error("forwardRef requires a render function but was given %s.",e===null?"null":typeof e):e.length!==0&&e.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",e.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),e!=null&&e.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var t={$$typeof:Ee,render:e},r;return Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(u){r=u,e.name||e.displayName||(Object.defineProperty(e,"name",{value:u}),e.displayName=u)}}),t},f.isValidElement=b,f.lazy=function(e){return{$$typeof:te,_payload:{_status:-1,_result:e},_init:he}},f.memo=function(e,t){V(e)||console.error("memo: The first argument must be a component. Instead received: %s",e===null?"null":typeof e),t={$$typeof:ee,type:e,compare:t===void 0?null:t};var r;return Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(u){r=u,e.name||e.displayName||(Object.defineProperty(e,"name",{value:u}),e.displayName=u)}}),t},f.startTransition=function(e){var t=v.T,r={};v.T=r,r._updatedFibers=new Set;try{var u=e(),s=v.S;s!==null&&s(r,u),typeof u=="object"&&u!==null&&typeof u.then=="function"&&u.then(n,ot)}catch(a){ot(a)}finally{t===null&&r._updatedFibers&&(e=r._updatedFibers.size,r._updatedFibers.clear(),10<e&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),v.T=t}},f.unstable_useCacheRefresh=function(){return R().useCacheRefresh()},f.use=function(e){return R().use(e)},f.useActionState=function(e,t,r){return R().useActionState(e,t,r)},f.useCallback=function(e,t){return R().useCallback(e,t)},f.useContext=function(e){var t=R();return e.$$typeof===ye&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),t.useContext(e)},f.useDebugValue=function(e,t){return R().useDebugValue(e,t)},f.useDeferredValue=function(e,t){return R().useDeferredValue(e,t)},f.useEffect=function(e,t){return R().useEffect(e,t)},f.useId=function(){return R().useId()},f.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},f.useInsertionEffect=function(e,t){return R().useInsertionEffect(e,t)},f.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},f.useMemo=function(e,t){return R().useMemo(e,t)},f.useOptimistic=function(e,t){return R().useOptimistic(e,t)},f.useReducer=function(e,t,r){return R().useReducer(e,t,r)},f.useRef=function(e){return R().useRef(e)},f.useState=function(e){return R().useState(e)},f.useSyncExternalStore=function(e,t,r){return R().useSyncExternalStore(e,t,r)},f.useTransition=function(){return R().useTransition()},f.version="19.0.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()}(x,x.exports)),x.exports}process.env.NODE_ENV==="production"?Ae.exports=at():Ae.exports=ct();var ft=Ae.exports;const lt=function(){const[T,f]=ft.useState(null),k=function(){qe(),f(Date.now())};return React.createElement(Oe.View,null,React.createElement(Oe.Text,null,"Press the button to play Russian Roulette with your plugins."),React.createElement(Oe.Button,{text:"Roll the Dice!",onPress:k}))},qe=function(){const T=Object.keys(Ue.listPlugins());if(T.length<=1){K.showToast("Not enough plugins to play!",{type:"error"});return}const f=Math.floor(Math.random()*6)+1;if(f===6)K.showToast("You're lucky! No plugin removed.",{type:"success"});else{const k=T[Math.floor(Math.random()*T.length)];it.showConfirmationAlert("Russian Roulette",`You rolled a ${f}. The plugin "${k}" will be removed!`,function(){Ue.removePlugin(k),K.showToast(`Plugin "${k}" removed!`,{type:"danger"})},"Proceed","Cancel")}},dt=function(){He.registerSettings("Russian Roulette",lt),K.showToast("Russian Roulette Plugin Loaded!",{type:"info"})},pt=function(){He.unregisterSettings("Russian Roulette"),K.showToast("Russian Roulette Plugin Unloaded!",{type:"info"})};return re.onLoad=dt,re.onUnload=pt,re.playRussianRoulette=qe,re})({},vendetta.settings,vendetta.ui.toasts,vendetta.plugins,vendetta.ui.alerts,vendetta.metro.common);
