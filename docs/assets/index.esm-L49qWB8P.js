import{R as a}from"./index-DVXBtNgz.js";var w=e=>e.type==="checkbox",E=e=>e instanceof Date,O=e=>e==null;const P=e=>typeof e=="object";var _=e=>!O(e)&&!Array.isArray(e)&&P(e)&&!E(e),j=e=>_(e)&&e.target?w(e.target)?e.target.checked:e.target.value:e,B=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,R=(e,r)=>e.has(B(r)),T=e=>{const r=e.constructor&&e.constructor.prototype;return _(r)&&r.hasOwnProperty("isPrototypeOf")},U=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function p(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(U&&(e instanceof Blob||e instanceof FileList))&&(t||_(e)))if(r=t?[]:{},!t&&!T(e))r=e;else for(const n in e)e.hasOwnProperty(n)&&(r[n]=p(e[n]));else return e;return r}var S=e=>Array.isArray(e)?e.filter(Boolean):[],h=e=>e===void 0,l=(e,r,t)=>{if(!r||!_(e))return t;const n=S(r.split(/[,[\].]+?/)).reduce((s,o)=>O(s)?s:s[o],e);return h(n)||n===e?h(e[r])?t:e[r]:n},V=e=>typeof e=="boolean",D=e=>/^\w*$/.test(e),L=e=>S(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,r,t)=>{let n=-1;const s=D(r)?[r]:L(r),o=s.length,c=o-1;for(;++n<o;){const f=s[n];let u=t;if(n!==c){const d=e[f];u=_(d)||Array.isArray(d)?d:isNaN(+s[n+1])?{}:[]}if(f==="__proto__")return;e[f]=u,e=e[f]}return e};const F={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},m={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W=a.createContext(null),v=()=>a.useContext(W);var I=(e,r,t,n=!0)=>{const s={defaultValues:r._defaultValues};for(const o in e)Object.defineProperty(s,o,{get:()=>{const c=o;return r._proxyFormState[c]!==m.all&&(r._proxyFormState[c]=!n||m.all),t&&(t[c]=!0),e[c]}});return s},H=e=>_(e)&&!Object.keys(e).length,M=(e,r,t,n)=>{t(e);const{name:s,...o}=e;return H(o)||Object.keys(o).length>=Object.keys(r).length||Object.keys(o).find(c=>r[c]===(!n||m.all))},N=e=>Array.isArray(e)?e:[e],x=(e,r,t)=>!e||!r||e===r||N(e).some(n=>n&&(t?n===r:n.startsWith(r)||r.startsWith(n)));function C(e){const r=a.useRef(e);r.current=e,a.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function $(e){const r=v(),{control:t=r.control,disabled:n,name:s,exact:o}=e||{},[c,f]=a.useState(t._formState),u=a.useRef(!0),d=a.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),i=a.useRef(s);return i.current=s,C({disabled:n,next:y=>u.current&&x(i.current,y.name,o)&&M(y,d.current,t._updateFormState)&&f({...t._formState,...y}),subject:t._subjects.state}),a.useEffect(()=>(u.current=!0,d.current.isValid&&t._updateValid(!0),()=>{u.current=!1}),[t]),I(c,t,d.current,!1)}var K=e=>typeof e=="string",q=(e,r,t,n,s)=>K(e)?(n&&r.watch.add(e),l(t,e,s)):Array.isArray(e)?e.map(o=>(n&&r.watch.add(o),l(t,o))):(n&&(r.watchAll=!0),t);function z(e){const r=v(),{control:t=r.control,name:n,defaultValue:s,disabled:o,exact:c}=e||{},f=a.useRef(n);f.current=n,C({disabled:o,subject:t._subjects.values,next:i=>{x(f.current,i.name,c)&&d(p(q(f.current,t._names,i.values||t._formValues,!1,s)))}});const[u,d]=a.useState(t._getWatch(n,s));return a.useEffect(()=>t._removeUnmounted()),u}function J(e){const r=v(),{name:t,disabled:n,control:s=r.control,shouldUnregister:o}=e,c=R(s._names.array,t),f=z({control:s,name:t,defaultValue:l(s._formValues,t,l(s._defaultValues,t,e.defaultValue)),exact:!0}),u=$({control:s,name:t}),d=a.useRef(s.register(t,{...e.rules,value:f,...V(e.disabled)?{disabled:e.disabled}:{}}));return a.useEffect(()=>{const i=s._options.shouldUnregister||o,y=(b,k)=>{const g=l(s._fields,b);g&&g._f&&(g._f.mount=k)};if(y(t,!0),i){const b=p(l(s._options.defaultValues,t));A(s._defaultValues,t,b),h(l(s._formValues,t))&&A(s._formValues,t,b)}return()=>{(c?i&&!s._state.action:i)?s.unregister(t):y(t,!1)}},[t,s,c,o]),a.useEffect(()=>{l(s._fields,t)&&s._updateDisabledField({disabled:n,fields:s._fields,name:t,value:l(s._fields,t)._f.value})},[n,t,s]),{field:{name:t,value:f,...V(n)||u.disabled?{disabled:u.disabled||n}:{},onChange:a.useCallback(i=>d.current.onChange({target:{value:j(i),name:t},type:F.CHANGE}),[t]),onBlur:a.useCallback(()=>d.current.onBlur({target:{value:l(s._formValues,t),name:t},type:F.BLUR}),[t,s]),ref:i=>{const y=l(s._fields,t);y&&i&&(y._f.ref={focus:()=>i.focus(),select:()=>i.select(),setCustomValidity:b=>i.setCustomValidity(b),reportValidity:()=>i.reportValidity()})}},formState:u,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!l(u.errors,t)},isDirty:{enumerable:!0,get:()=>!!l(u.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!l(u.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!l(u.validatingFields,t)},error:{enumerable:!0,get:()=>l(u.errors,t)}})}}export{J as a,v as u};