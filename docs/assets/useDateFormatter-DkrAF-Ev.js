import{_ as j}from"./useFocusRing-Dauh53Lh.js";import{$ as mr}from"./context-N9YhJwDt.js";import{r as Ne}from"./index-DVXBtNgz.js";function br(r,e){let t=Ne.useRef(null);return r&&t.current&&e(r,t.current)&&(r=t.current),t.current=r,r}function Y(r,e){return r-e*Math.floor(r/e)}const _e=1721426;function v(r,e,t,n){e=Q(r,e);let a=e-1,o=-2;return t<=2?o=0:p(e)&&(o=-1),_e-1+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*t-362)/12+o+n)}function p(r){return r%4===0&&(r%100!==0||r%400===0)}function Q(r,e){return r==="BC"?1-e:e}function X(r){let e="AD";return r<=0&&(e="BC",r=1-r),[e,r]}const gr={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class ${fromJulianDay(e){let t=e,n=t-_e,a=Math.floor(n/146097),o=Y(n,146097),i=Math.floor(o/36524),f=Y(o,36524),c=Math.floor(f/1461),l=Y(f,1461),x=Math.floor(l/365),E=a*400+i*100+c*4+x+(i!==4&&x!==4?1:0),[I,D]=X(E),g=t-v(I,D,1,1),ee=2;t<v(I,D,3,1)?ee=0:p(D)&&(ee=1);let we=Math.floor(((g+ee)*12+373)/367),yr=t-v(I,D,we,1)+1;return new s(I,D,we,yr)}toJulianDay(e){return v(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return gr[p(e.year)?"leapyear":"standard"][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return p(e.year)?366:365}getYearsInEra(e){return 9999}getEras(){return["BC","AD"]}isInverseEra(e){return e.era==="BC"}balanceDate(e){e.year<=0&&(e.era=e.era==="BC"?"AD":"BC",e.year=1-e.year)}constructor(){this.identifier="gregory"}}const Mr={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AU:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CN:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1};function pr(r,e){return e=h(e,r.calendar),r.era===e.era&&r.year===e.year&&r.month===e.month&&r.day===e.day}function gt(r,e){return e=h(e,r.calendar),r=P(r),e=P(e),r.era===e.era&&r.year===e.year&&r.month===e.month}function Mt(r,e){return r.calendar.identifier===e.calendar.identifier&&r.era===e.era&&r.year===e.year&&r.month===e.month&&r.day===e.day}function pt(r,e){return pr(r,wr(e))}function He(r,e){let t=r.calendar.toJulianDay(r),n=Math.ceil(t+1-xr(e))%7;return n<0&&(n+=7),n}function Dr(r){return d(Date.now(),r)}function wr(r){return Cr(Dr(r))}function qe(r,e){return r.calendar.toJulianDay(r)-e.calendar.toJulianDay(e)}function Pe(r,e){return ve(r)-ve(e)}function ve(r){return r.hour*36e5+r.minute*6e4+r.second*1e3+r.millisecond}let re=null;function $e(){return re==null&&(re=new Intl.DateTimeFormat().resolvedOptions().timeZone),re}function P(r){return r.subtract({days:r.day-1})}function Dt(r){return r.add({days:r.calendar.getDaysInMonth(r)-r.day})}function wt(r){return P(r.subtract({months:r.month-1}))}function vt(r){return r.calendar.getMinimumMonthInYear?r.calendar.getMinimumMonthInYear(r):1}function At(r){return r.calendar.getMinimumDayInMonth?r.calendar.getMinimumDayInMonth(r):1}function vr(r,e){let t=He(r,e);return r.subtract({days:t})}function xt(r,e){return vr(r,e).add({days:6})}const Ae=new Map;function Ar(r){if(Intl.Locale){let t=Ae.get(r);return t||(t=new Intl.Locale(r).maximize().region,t&&Ae.set(r,t)),t}let e=r.split("-")[1];return e==="u"?void 0:e}function xr(r){let e=Ar(r);return e&&Mr[e]||0}function Et(r,e){let t=r.calendar.getDaysInMonth(r);return Math.ceil((He(P(r),e)+t)/7)}function It(r,e){return r&&e?r.compare(e)<=0?r:e:r||e}function Ct(r,e){return r&&e?r.compare(e)>=0?r:e:r||e}function B(r){r=h(r,new $);let e=Q(r.era,r.year);return Ze(e,r.month,r.day,r.hour,r.minute,r.second,r.millisecond)}function Ze(r,e,t,n,a,o,i){let f=new Date;return f.setUTCHours(n,a,o,i),f.setUTCFullYear(r,e-1,t),f.getTime()}function fe(r,e){if(e==="UTC")return 0;if(r>0&&e===$e())return new Date(r).getTimezoneOffset()*-6e4;let{year:t,month:n,day:a,hour:o,minute:i,second:f}=Ve(r,e);return Ze(t,n,a,o,i,f,0)-Math.floor(r/1e3)*1e3}const xe=new Map;function Ve(r,e){let t=xe.get(e);t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),xe.set(e,t));let n=t.formatToParts(new Date(r)),a={};for(let o of n)o.type!=="literal"&&(a[o.type]=o.value);return{year:a.era==="BC"||a.era==="B"?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:a.hour==="24"?0:+a.hour,minute:+a.minute,second:+a.second}}const Ee=864e5;function Er(r,e,t,n){return(t===n?[t]:[t,n]).filter(o=>Ir(r,e,o))}function Ir(r,e,t){let n=Ve(t,e);return r.year===n.year&&r.month===n.month&&r.day===n.day&&r.hour===n.hour&&r.minute===n.minute&&r.second===n.second}function m(r,e,t="compatible"){let n=U(r);if(e==="UTC")return B(n);if(e===$e()&&t==="compatible"){n=h(n,new $);let c=new Date,l=Q(n.era,n.year);return c.setFullYear(l,n.month-1,n.day),c.setHours(n.hour,n.minute,n.second,n.millisecond),c.getTime()}let a=B(n),o=fe(a-Ee,e),i=fe(a+Ee,e),f=Er(n,e,a-o,a-i);if(f.length===1)return f[0];if(f.length>1)switch(t){case"compatible":case"earlier":return f[0];case"later":return f[f.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(t){case"earlier":return Math.min(a-o,a-i);case"compatible":case"later":return Math.max(a-o,a-i);case"reject":throw new RangeError("No such absolute time found")}}function We(r,e,t="compatible"){return new Date(m(r,e,t))}function d(r,e){let t=fe(r,e),n=new Date(r+t),a=n.getUTCFullYear(),o=n.getUTCMonth()+1,i=n.getUTCDate(),f=n.getUTCHours(),c=n.getUTCMinutes(),l=n.getUTCSeconds(),x=n.getUTCMilliseconds();return new R(a,o,i,e,t,f,c,l,x)}function Yt(r,e){return d(r.getTime(),e)}function Cr(r){return new s(r.calendar,r.era,r.year,r.month,r.day)}function U(r,e){let t=0,n=0,a=0,o=0;if("timeZone"in r)({hour:t,minute:n,second:a,millisecond:o}=r);else if("hour"in r&&!e)return r;return e&&({hour:t,minute:n,second:a,millisecond:o}=e),new Z(r.calendar,r.era,r.year,r.month,r.day,t,n,a,o)}function h(r,e){if(r.calendar.identifier===e.identifier)return r;let t=e.fromJulianDay(r.calendar.toJulianDay(r)),n=r.copy();return n.calendar=e,n.era=t.era,n.year=t.year,n.month=t.month,n.day=t.day,A(n),n}function Yr(r,e,t){if(r instanceof R)return r.timeZone===e?r:Ke(r,e);let n=m(r,e,t);return d(n,e)}function Sr(r){let e=B(r)-r.offset;return new Date(e)}function Ke(r,e){let t=B(r)-r.offset;return h(d(t,e),r.calendar)}const J=36e5;function z(r,e){let t=r.copy(),n="hour"in t?ze(t,e):0;ce(t,e.years||0),t.calendar.balanceYearMonth&&t.calendar.balanceYearMonth(t,r),t.month+=e.months||0,se(t),Ge(t),t.day+=(e.weeks||0)*7,t.day+=e.days||0,t.day+=n,Tr(t),t.calendar.balanceDate&&t.calendar.balanceDate(t),t.year<1&&(t.year=1,t.month=1,t.day=1);let a=t.calendar.getYearsInEra(t);if(t.year>a){var o,i;let c=(o=(i=t.calendar).isInverseEra)===null||o===void 0?void 0:o.call(i,t);t.year=a,t.month=c?1:t.calendar.getMonthsInYear(t),t.day=c?1:t.calendar.getDaysInMonth(t)}t.month<1&&(t.month=1,t.day=1);let f=t.calendar.getMonthsInYear(t);return t.month>f&&(t.month=f,t.day=t.calendar.getDaysInMonth(t)),t.day=Math.max(1,Math.min(t.calendar.getDaysInMonth(t),t.day)),t}function ce(r,e){var t,n;!((t=(n=r.calendar).isInverseEra)===null||t===void 0)&&t.call(n,r)&&(e=-e),r.year+=e}function se(r){for(;r.month<1;)ce(r,-1),r.month+=r.calendar.getMonthsInYear(r);let e=0;for(;r.month>(e=r.calendar.getMonthsInYear(r));)r.month-=e,ce(r,1)}function Tr(r){for(;r.day<1;)r.month--,se(r),r.day+=r.calendar.getDaysInMonth(r);for(;r.day>r.calendar.getDaysInMonth(r);)r.day-=r.calendar.getDaysInMonth(r),r.month++,se(r)}function Ge(r){r.month=Math.max(1,Math.min(r.calendar.getMonthsInYear(r),r.month)),r.day=Math.max(1,Math.min(r.calendar.getDaysInMonth(r),r.day))}function A(r){r.calendar.constrainDate&&r.calendar.constrainDate(r),r.year=Math.max(1,Math.min(r.calendar.getYearsInEra(r),r.year)),Ge(r)}function de(r){let e={};for(let t in r)typeof r[t]=="number"&&(e[t]=-r[t]);return e}function je(r,e){return z(r,de(e))}function ye(r,e){let t=r.copy();return e.era!=null&&(t.era=e.era),e.year!=null&&(t.year=e.year),e.month!=null&&(t.month=e.month),e.day!=null&&(t.day=e.day),A(t),t}function O(r,e){let t=r.copy();return e.hour!=null&&(t.hour=e.hour),e.minute!=null&&(t.minute=e.minute),e.second!=null&&(t.second=e.second),e.millisecond!=null&&(t.millisecond=e.millisecond),Xe(t),t}function Br(r){r.second+=Math.floor(r.millisecond/1e3),r.millisecond=F(r.millisecond,1e3),r.minute+=Math.floor(r.second/60),r.second=F(r.second,60),r.hour+=Math.floor(r.minute/60),r.minute=F(r.minute,60);let e=Math.floor(r.hour/24);return r.hour=F(r.hour,24),e}function Xe(r){r.millisecond=Math.max(0,Math.min(r.millisecond,1e3)),r.second=Math.max(0,Math.min(r.second,59)),r.minute=Math.max(0,Math.min(r.minute,59)),r.hour=Math.max(0,Math.min(r.hour,23))}function F(r,e){let t=r%e;return t<0&&(t+=e),t}function ze(r,e){return r.hour+=e.hours||0,r.minute+=e.minutes||0,r.second+=e.seconds||0,r.millisecond+=e.milliseconds||0,Br(r)}function er(r,e){let t=r.copy();return ze(t,e),t}function Ur(r,e){return er(r,de(e))}function me(r,e,t,n){let a=r.copy();switch(e){case"era":{let f=r.calendar.getEras(),c=f.indexOf(r.era);if(c<0)throw new Error("Invalid era: "+r.era);c=b(c,t,0,f.length-1,n==null?void 0:n.round),a.era=f[c],A(a);break}case"year":var o,i;!((o=(i=a.calendar).isInverseEra)===null||o===void 0)&&o.call(i,a)&&(t=-t),a.year=b(r.year,t,-1/0,9999,n==null?void 0:n.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,r);break;case"month":a.month=b(r.month,t,1,r.calendar.getMonthsInYear(r),n==null?void 0:n.round);break;case"day":a.day=b(r.day,t,1,r.calendar.getDaysInMonth(r),n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+e)}return r.calendar.balanceDate&&r.calendar.balanceDate(a),A(a),a}function be(r,e,t,n){let a=r.copy();switch(e){case"hour":{let o=r.hour,i=0,f=23;if((n==null?void 0:n.hourCycle)===12){let c=o>=12;i=c?12:0,f=c?23:11}a.hour=b(o,t,i,f,n==null?void 0:n.round);break}case"minute":a.minute=b(r.minute,t,0,59,n==null?void 0:n.round);break;case"second":a.second=b(r.second,t,0,59,n==null?void 0:n.round);break;case"millisecond":a.millisecond=b(r.millisecond,t,0,999,n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+e)}return a}function b(r,e,t,n,a=!1){if(a){r+=Math.sign(e),r<t&&(r=n);let o=Math.abs(e);e>0?r=Math.ceil(r/o)*o:r=Math.floor(r/o)*o,r>n&&(r=t)}else r+=e,r<t?r=n-(t-r-1):r>n&&(r=t+(r-n-1));return r}function rr(r,e){let t;if(e.years!=null&&e.years!==0||e.months!=null&&e.months!==0||e.weeks!=null&&e.weeks!==0||e.days!=null&&e.days!==0){let a=z(U(r),{years:e.years,months:e.months,weeks:e.weeks,days:e.days});t=m(a,r.timeZone)}else t=B(r)-r.offset;t+=e.milliseconds||0,t+=(e.seconds||0)*1e3,t+=(e.minutes||0)*6e4,t+=(e.hours||0)*36e5;let n=d(t,r.timeZone);return h(n,r.calendar)}function Rr(r,e){return rr(r,de(e))}function Jr(r,e,t,n){switch(e){case"hour":{let a=0,o=23;if((n==null?void 0:n.hourCycle)===12){let g=r.hour>=12;a=g?12:0,o=g?23:11}let i=U(r),f=h(O(i,{hour:a}),new $),c=[m(f,r.timeZone,"earlier"),m(f,r.timeZone,"later")].filter(g=>d(g,r.timeZone).day===f.day)[0],l=h(O(i,{hour:o}),new $),x=[m(l,r.timeZone,"earlier"),m(l,r.timeZone,"later")].filter(g=>d(g,r.timeZone).day===l.day).pop(),E=B(r)-r.offset,I=Math.floor(E/J),D=E%J;return E=b(I,t,Math.floor(c/J),Math.floor(x/J),n==null?void 0:n.round)*J+D,h(d(E,r.timeZone),r.calendar)}case"minute":case"second":case"millisecond":return be(r,e,t,n);case"era":case"year":case"month":case"day":{let a=me(U(r),e,t,n),o=m(a,r.timeZone);return h(d(o,r.timeZone),r.calendar)}default:throw new Error("Unsupported field "+e)}}function Lr(r,e,t){let n=U(r),a=O(ye(n,e),e);if(a.compare(n)===0)return r;let o=m(a,r.timeZone,t);return h(d(o,r.timeZone),r.calendar)}const kr=/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;function Or(r,e){let t=r.match(kr);if(!t)throw new Error("Invalid ISO 8601 date time string: "+r);let n=new R(y(t[1],1,9999),y(t[2],1,12),1,e,0,t[4]?y(t[4],0,23):0,t[5]?y(t[5],0,59):0,t[6]?y(t[6],0,59):0,t[7]?y(t[7],0,1/0)*1e3:0);n.day=y(t[3],0,n.calendar.getDaysInMonth(n));var a;return t[8]&&(n.offset=y(t[8],-23,23)*36e5+y((a=t[9])!==null&&a!==void 0?a:"0",0,59)*6e4),Ke(n,e)}function St(r){return Or(r,$e())}function y(r,e,t){let n=Number(r);if(n<e||n>t)throw new RangeError(`Value out of range: ${e} <= ${n} <= ${t}`);return n}function tr(r){return`${String(r.hour).padStart(2,"0")}:${String(r.minute).padStart(2,"0")}:${String(r.second).padStart(2,"0")}${r.millisecond?String(r.millisecond/1e3).slice(1):""}`}function nr(r){let e=h(r,new $);return`${String(e.year).padStart(4,"0")}-${String(e.month).padStart(2,"0")}-${String(e.day).padStart(2,"0")}`}function ar(r){return`${nr(r)}T${tr(r)}`}function Qr(r){let e=Math.sign(r)<0?"-":"+";r=Math.abs(r);let t=Math.floor(r/36e5),n=r%36e5/6e4;return`${e}${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Fr(r){return`${ar(r)}${Qr(r.offset)}[${r.timeZone}]`}function ge(r){let e=typeof r[0]=="object"?r.shift():new $,t;if(typeof r[0]=="string")t=r.shift();else{let i=e.getEras();t=i[i.length-1]}let n=r.shift(),a=r.shift(),o=r.shift();return[e,t,n,a,o]}var Nr=new WeakMap;class s{copy(){return this.era?new s(this.calendar,this.era,this.year,this.month,this.day):new s(this.calendar,this.year,this.month,this.day)}add(e){return z(this,e)}subtract(e){return je(this,e)}set(e){return ye(this,e)}cycle(e,t,n){return me(this,e,t,n)}toDate(e){return We(this,e)}toString(){return nr(this)}compare(e){return qe(this,e)}constructor(...e){j(this,Nr,{writable:!0,value:void 0});let[t,n,a,o,i]=ge(e);this.calendar=t,this.era=n,this.year=a,this.month=o,this.day=i,A(this)}}var _r=new WeakMap;class or{copy(){return new or(this.hour,this.minute,this.second,this.millisecond)}add(e){return er(this,e)}subtract(e){return Ur(this,e)}set(e){return O(this,e)}cycle(e,t,n){return be(this,e,t,n)}toString(){return tr(this)}compare(e){return Pe(this,e)}constructor(e=0,t=0,n=0,a=0){j(this,_r,{writable:!0,value:void 0}),this.hour=e,this.minute=t,this.second=n,this.millisecond=a,Xe(this)}}var Hr=new WeakMap;class Z{copy(){return this.era?new Z(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new Z(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return z(this,e)}subtract(e){return je(this,e)}set(e){return ye(O(this,e),e)}cycle(e,t,n){switch(e){case"era":case"year":case"month":case"day":return me(this,e,t,n);default:return be(this,e,t,n)}}toDate(e,t){return We(this,e,t)}toString(){return ar(this)}compare(e){let t=qe(this,e);return t===0?Pe(this,U(e)):t}constructor(...e){j(this,Hr,{writable:!0,value:void 0});let[t,n,a,o,i]=ge(e);this.calendar=t,this.era=n,this.year=a,this.month=o,this.day=i,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,A(this)}}var qr=new WeakMap;class R{copy(){return this.era?new R(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new R(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(e){return rr(this,e)}subtract(e){return Rr(this,e)}set(e,t){return Lr(this,e,t)}cycle(e,t,n){return Jr(this,e,t,n)}toDate(){return Sr(this)}toString(){return Fr(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(e){return this.toDate().getTime()-Yr(e,this.timeZone).toDate().getTime()}constructor(...e){j(this,qr,{writable:!0,value:void 0});let[t,n,a,o,i]=ge(e),f=e.shift(),c=e.shift();this.calendar=t,this.era=n,this.year=a,this.month=o,this.day=i,this.timeZone=f,this.offset=c,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,A(this)}}const S=[[1868,9,8],[1912,7,30],[1926,12,25],[1989,1,8],[2019,5,1]],Pr=[[1912,7,29],[1926,12,24],[1989,1,7],[2019,4,30]],_=[1867,1911,1925,1988,2018],M=["meiji","taisho","showa","heisei","reiwa"];function Ie(r){const e=S.findIndex(([t,n,a])=>r.year<t||r.year===t&&r.month<n||r.year===t&&r.month===n&&r.day<a);return e===-1?S.length-1:e===0?0:e-1}function te(r){let e=_[M.indexOf(r.era)];if(!e)throw new Error("Unknown era: "+r.era);return new s(r.year+e,r.month,r.day)}class Zr extends ${fromJulianDay(e){let t=super.fromJulianDay(e),n=Ie(t);return new s(this,M[n],t.year-_[n],t.month,t.day)}toJulianDay(e){return super.toJulianDay(te(e))}balanceDate(e){let t=te(e),n=Ie(t);M[n]!==e.era&&(e.era=M[n],e.year=t.year-_[n]),this.constrainDate(e)}constrainDate(e){let t=M.indexOf(e.era),n=Pr[t];if(n!=null){let[a,o,i]=n,f=a-_[t];e.year=Math.max(1,Math.min(f,e.year)),e.year===f&&(e.month=Math.min(o,e.month),e.month===o&&(e.day=Math.min(i,e.day)))}if(e.year===1&&t>=0){let[,a,o]=S[t];e.month=Math.max(a,e.month),e.month===a&&(e.day=Math.max(o,e.day))}}getEras(){return M}getYearsInEra(e){let t=M.indexOf(e.era),n=S[t],a=S[t+1];if(a==null)return 9999-n[0]+1;let o=a[0]-n[0];return(e.month<a[1]||e.month===a[1]&&e.day<a[2])&&o++,o}getDaysInMonth(e){return super.getDaysInMonth(te(e))}getMinimumMonthInYear(e){let t=Ce(e);return t?t[1]:1}getMinimumDayInMonth(e){let t=Ce(e);return t&&e.month===t[1]?t[2]:1}constructor(...e){super(...e),this.identifier="japanese"}}function Ce(r){if(r.year===1){let e=M.indexOf(r.era);return S[e]}}const ir=-543;class Vr extends ${fromJulianDay(e){let t=super.fromJulianDay(e),n=Q(t.era,t.year);return new s(this,n-ir,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Ye(e))}getEras(){return["BE"]}getDaysInMonth(e){return super.getDaysInMonth(Ye(e))}balanceDate(){}constructor(...e){super(...e),this.identifier="buddhist"}}function Ye(r){let[e,t]=X(r.year+ir);return new s(e,t,r.month,r.day)}const V=1911;function fr(r){return r.era==="minguo"?r.year+V:1-r.year+V}function Se(r){let e=r-V;return e>0?["minguo",e]:["before_minguo",1-e]}class Wr extends ${fromJulianDay(e){let t=super.fromJulianDay(e),n=Q(t.era,t.year),[a,o]=Se(n);return new s(this,a,o,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Te(e))}getEras(){return["before_minguo","minguo"]}balanceDate(e){let[t,n]=Se(fr(e));e.era=t,e.year=n}isInverseEra(e){return e.era==="before_minguo"}getDaysInMonth(e){return super.getDaysInMonth(Te(e))}getYearsInEra(e){return e.era==="before_minguo"?9999:9999-V}constructor(...e){super(...e),this.identifier="roc"}}function Te(r){let[e,t]=X(fr(r));return new s(e,t,r.month,r.day)}const Be=1948320,Ue=[0,31,62,93,124,155,186,216,246,276,306,336];class Kr{fromJulianDay(e){let t=e-Be,n=1+Math.floor((33*t+3)/12053),a=365*(n-1)+Math.floor((8*n+21)/33),o=t-a,i=o<216?Math.floor(o/31):Math.floor((o-6)/30),f=o-Ue[i]+1;return new s(this,n,i+1,f)}toJulianDay(e){let t=Be-1+365*(e.year-1)+Math.floor((8*e.year+21)/33);return t+=Ue[e.month-1],t+=e.day,t}getMonthsInYear(){return 12}getDaysInMonth(e){return e.month<=6?31:e.month<=11||Y(25*e.year+11,33)<8?30:29}getEras(){return["AP"]}getYearsInEra(){return 9377}constructor(){this.identifier="persian"}}const ne=78,Re=80;class Gr extends ${fromJulianDay(e){let t=super.fromJulianDay(e),n=t.year-ne,a=e-v(t.era,t.year,1,1),o;a<Re?(n--,o=p(t.year-1)?31:30,a+=o+155+90+10):(o=p(t.year)?31:30,a-=Re);let i,f;if(a<o)i=1,f=a+1;else{let c=a-o;c<155?(i=Math.floor(c/31)+2,f=c%31+1):(c-=155,i=Math.floor(c/30)+7,f=c%30+1)}return new s(this,n,i,f)}toJulianDay(e){let t=e.year+ne,[n,a]=X(t),o,i;return p(a)?(o=31,i=v(n,a,3,21)):(o=30,i=v(n,a,3,22)),e.month===1?i+e.day-1:(i+=o+Math.min(e.month-2,5)*31,e.month>=8&&(i+=(e.month-7)*30),i+=e.day-1,i)}getDaysInMonth(e){return e.month===1&&p(e.year+ne)||e.month>=2&&e.month<=6?31:30}getYearsInEra(){return 9919}getEras(){return["saka"]}balanceDate(){}constructor(...e){super(...e),this.identifier="indian"}}const W=1948440,Je=1948439,u=1300,C=1600,jr=460322;function K(r,e,t,n){return n+Math.ceil(29.5*(t-1))+(e-1)*354+Math.floor((3+11*e)/30)+r-1}function cr(r,e,t){let n=Math.floor((30*(t-e)+10646)/10631),a=Math.min(12,Math.ceil((t-(29+K(e,n,1,1)))/29.5)+1),o=t-K(e,n,a,1)+1;return new s(r,n,a,o)}function Le(r){return(14+11*r)%30<11}class Me{fromJulianDay(e){return cr(this,W,e)}toJulianDay(e){return K(W,e.year,e.month,e.day)}getDaysInMonth(e){let t=29+e.month%2;return e.month===12&&Le(e.year)&&t++,t}getMonthsInYear(){return 12}getDaysInYear(e){return Le(e.year)?355:354}getYearsInEra(){return 9665}getEras(){return["AH"]}constructor(){this.identifier="islamic-civil"}}class Xr extends Me{fromJulianDay(e){return cr(this,Je,e)}toJulianDay(e){return K(Je,e.year,e.month,e.day)}constructor(...e){super(...e),this.identifier="islamic-tbla"}}const zr="qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";let le,T;function H(r){return jr+T[r-u]}function L(r,e){let t=r-u,n=1<<11-(e-1);return le[t]&n?30:29}function ke(r,e){let t=H(r);for(let n=1;n<e;n++)t+=L(r,n);return t}function Oe(r){return T[r+1-u]-T[r-u]}class et extends Me{fromJulianDay(e){let t=e-W,n=H(u),a=H(C);if(t<n||t>a)return super.fromJulianDay(e);{let o=u-1,i=1,f=1;for(;f>0;){o++,f=t-H(o)+1;let c=Oe(o);if(f===c){i=12;break}else if(f<c){let l=L(o,i);for(i=1;f>l;)f-=l,i++,l=L(o,i);break}}return new s(this,o,i,t-ke(o,i)+1)}}toJulianDay(e){return e.year<u||e.year>C?super.toJulianDay(e):W+ke(e.year,e.month)+(e.day-1)}getDaysInMonth(e){return e.year<u||e.year>C?super.getDaysInMonth(e):L(e.year,e.month)}getDaysInYear(e){return e.year<u||e.year>C?super.getDaysInYear(e):Oe(e.year)}constructor(){if(super(),this.identifier="islamic-umalqura",le||(le=new Uint16Array(Uint8Array.from(atob(zr),e=>e.charCodeAt(0)).buffer)),!T){T=new Uint32Array(C-u+1);let e=0;for(let t=u;t<=C;t++){T[t-u]=e;for(let n=1;n<=12;n++)e+=L(t,n)}}}}const Qe=347997,sr=1080,lr=24*sr,rt=29,tt=12*sr+793,nt=rt*lr+tt;function w(r){return Y(r*7+1,19)<7}function q(r){let e=Math.floor((235*r-234)/19),t=12084+13753*e,n=e*29+Math.floor(t/25920);return Y(3*(n+1),7)<3&&(n+=1),n}function at(r){let e=q(r-1),t=q(r);return q(r+1)-t===356?2:t-e===382?1:0}function k(r){return q(r)+at(r)}function ur(r){return k(r+1)-k(r)}function ot(r){let e=ur(r);switch(e>380&&(e-=30),e){case 353:return 0;case 354:return 1;case 355:return 2}}function N(r,e){if(e>=6&&!w(r)&&e++,e===4||e===7||e===9||e===11||e===13)return 29;let t=ot(r);return e===2?t===2?30:29:e===3?t===0?29:30:e===6?w(r)?30:0:30}class it{fromJulianDay(e){let t=e-Qe,n=t*lr/nt,a=Math.floor((19*n+234)/235)+1,o=k(a),i=Math.floor(t-o);for(;i<1;)a--,o=k(a),i=Math.floor(t-o);let f=1,c=0;for(;c<i;)c+=N(a,f),f++;f--,c-=N(a,f);let l=i-c;return new s(this,a,f,l)}toJulianDay(e){let t=k(e.year);for(let n=1;n<e.month;n++)t+=N(e.year,n);return t+e.day+Qe}getDaysInMonth(e){return N(e.year,e.month)}getMonthsInYear(e){return w(e.year)?13:12}getDaysInYear(e){return ur(e.year)}getYearsInEra(){return 9999}getEras(){return["AM"]}balanceYearMonth(e,t){t.year!==e.year&&(w(t.year)&&!w(e.year)&&t.month>6?e.month--:!w(t.year)&&w(e.year)&&t.month>6&&e.month++)}constructor(){this.identifier="hebrew"}}const ue=1723856,Fe=1824665,he=5500;function G(r,e,t,n){return r+365*e+Math.floor(e/4)+30*(t-1)+n-1}function pe(r,e){let t=Math.floor(4*(e-r)/1461),n=1+Math.floor((e-G(r,t,1,1))/30),a=e+1-G(r,t,n,1);return[t,n,a]}function hr(r){return Math.floor(r%4/3)}function $r(r,e){return e%13!==0?30:hr(r)+5}class De{fromJulianDay(e){let[t,n,a]=pe(ue,e),o="AM";return t<=0&&(o="AA",t+=he),new s(this,o,t,n,a)}toJulianDay(e){let t=e.year;return e.era==="AA"&&(t-=he),G(ue,t,e.month,e.day)}getDaysInMonth(e){return $r(e.year,e.month)}getMonthsInYear(){return 13}getDaysInYear(e){return 365+hr(e.year)}getYearsInEra(e){return e.era==="AA"?9999:9991}getEras(){return["AA","AM"]}constructor(){this.identifier="ethiopic"}}class ft extends De{fromJulianDay(e){let[t,n,a]=pe(ue,e);return t+=he,new s(this,"AA",t,n,a)}getEras(){return["AA"]}getYearsInEra(){return 9999}constructor(...e){super(...e),this.identifier="ethioaa"}}class ct extends De{fromJulianDay(e){let[t,n,a]=pe(Fe,e),o="CE";return t<=0&&(o="BCE",t=1-t),new s(this,o,t,n,a)}toJulianDay(e){let t=e.year;return e.era==="BCE"&&(t=1-t),G(Fe,t,e.month,e.day)}getDaysInMonth(e){let t=e.year;return e.era==="BCE"&&(t=1-t),$r(t,e.month)}isInverseEra(e){return e.era==="BCE"}balanceDate(e){e.year<=0&&(e.era=e.era==="BCE"?"CE":"BCE",e.year=1-e.year)}getEras(){return["BCE","CE"]}getYearsInEra(e){return e.era==="BCE"?9999:9715}constructor(...e){super(...e),this.identifier="coptic"}}function Tt(r){switch(r){case"buddhist":return new Vr;case"ethiopic":return new De;case"ethioaa":return new ft;case"coptic":return new ct;case"hebrew":return new it;case"indian":return new Gr;case"islamic-civil":return new Me;case"islamic-tbla":return new Xr;case"islamic-umalqura":return new et;case"japanese":return new Zr;case"persian":return new Kr;case"roc":return new Wr;case"gregory":default:return new $}}let ae=new Map;class st{format(e){return this.formatter.format(e)}formatToParts(e){return this.formatter.formatToParts(e)}formatRange(e,t){if(typeof this.formatter.formatRange=="function")return this.formatter.formatRange(e,t);if(t<e)throw new RangeError("End date must be >= start date");return`${this.formatter.format(e)} – ${this.formatter.format(t)}`}formatRangeToParts(e,t){if(typeof this.formatter.formatRangeToParts=="function")return this.formatter.formatRangeToParts(e,t);if(t<e)throw new RangeError("End date must be >= start date");let n=this.formatter.formatToParts(e),a=this.formatter.formatToParts(t);return[...n.map(o=>({...o,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(o=>({...o,source:"endRange"}))]}resolvedOptions(){let e=this.formatter.resolvedOptions();return ht()&&(this.resolvedHourCycle||(this.resolvedHourCycle=$t(e.locale,this.options)),e.hourCycle=this.resolvedHourCycle,e.hour12=this.resolvedHourCycle==="h11"||this.resolvedHourCycle==="h12"),e.calendar==="ethiopic-amete-alem"&&(e.calendar="ethioaa"),e}constructor(e,t={}){this.formatter=dr(e,t),this.options=t}}const lt={true:{ja:"h11"},false:{}};function dr(r,e={}){if(typeof e.hour12=="boolean"&&ut()){e={...e};let a=lt[String(e.hour12)][r.split("-")[0]],o=e.hour12?"h12":"h23";e.hourCycle=a??o,delete e.hour12}let t=r+(e?Object.entries(e).sort((a,o)=>a[0]<o[0]?-1:1).join():"");if(ae.has(t))return ae.get(t);let n=new Intl.DateTimeFormat(r,e);return ae.set(t,n),n}let oe=null;function ut(){return oe==null&&(oe=new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:!1}).format(new Date(2020,2,3,0))==="24"),oe}let ie=null;function ht(){return ie==null&&(ie=new Intl.DateTimeFormat("fr",{hour:"numeric",hour12:!1}).resolvedOptions().hourCycle==="h12"),ie}function $t(r,e){if(!e.timeStyle&&!e.hour)return;r=r.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,""),r+=(r.includes("-u-")?"":"-u")+"-nu-latn";let t=dr(r,{...e,timeZone:void 0}),n=parseInt(t.formatToParts(new Date(2020,2,3,0)).find(o=>o.type==="hour").value,10),a=parseInt(t.formatToParts(new Date(2020,2,3,23)).find(o=>o.type==="hour").value,10);if(n===0&&a===23)return"h23";if(n===24&&a===23)return"h24";if(n===0&&a===11)return"h11";if(n===12&&a===11)return"h12";throw new Error("Unexpected hour cycle result")}function Bt(r){r=br(r??{},dt);let{locale:e}=mr();return Ne.useMemo(()=>new st(e,r),[e,r])}function dt(r,e){if(r===e)return!0;let t=Object.keys(r),n=Object.keys(e);if(t.length!==n.length)return!1;for(let a of t)if(e[a]!==r[a])return!1;return!0}export{st as $,Dr as A,At as B,vt as C,Cr as a,U as b,St as c,Yt as d,$e as e,Bt as f,pr as g,P as h,Dt as i,vr as j,wr as k,br as l,Mt as m,pt as n,wt as o,Ct as p,It as q,h as r,xt as s,He as t,$ as u,Tt as v,Et as w,gt as x,s as y,or as z};
