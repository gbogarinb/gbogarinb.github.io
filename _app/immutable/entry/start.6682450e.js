import{o as me,t as we}from"../chunks/scheduler.caab2cdf.js";import{S as Be,a as Ge,I as M,g as De,f as Ce,b as _e,c as le,s as te,i as ye,d as F,e as J,P as Me,h as Xe}from"../chunks/singletons.ac06689d.js";function Ze(t,r){return t==="/"||r==="ignore"?t:r==="never"?t.endsWith("/")?t.slice(0,-1):t:r==="always"&&!t.endsWith("/")?t+"/":t}function Qe(t){return t.split("%25").map(decodeURI).join("%25")}function et(t){for(const r in t)t[r]=decodeURIComponent(t[r]);return t}const tt=["href","pathname","search","searchParams","toString","toJSON"];function nt(t,r){const f=new URL(t);for(const s of tt)Object.defineProperty(f,s,{get(){return r(),t[s]},enumerable:!0,configurable:!0});return at(f),f}function at(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const rt="/__data.json";function ot(t){return t.replace(/\/$/,"")+rt}function it(...t){let r=5381;for(const f of t)if(typeof f=="string"){let s=f.length;for(;s;)r=r*33^f.charCodeAt(--s)}else if(ArrayBuffer.isView(f)){const s=new Uint8Array(f.buffer,f.byteOffset,f.byteLength);let d=s.length;for(;d;)r=r*33^s[--d]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}const Je=window.fetch;window.fetch=(t,r)=>((t instanceof Request?t.method:(r==null?void 0:r.method)||"GET")!=="GET"&&ae.delete(Se(t)),Je(t,r));const ae=new Map;function st(t,r){const f=Se(t,r),s=document.querySelector(f);if(s!=null&&s.textContent){const{body:d,...u}=JSON.parse(s.textContent),E=s.getAttribute("data-ttl");return E&&ae.set(f,{body:d,init:u,ttl:1e3*Number(E)}),Promise.resolve(new Response(d,u))}return window.fetch(t,r)}function ct(t,r,f){if(ae.size>0){const s=Se(t,f),d=ae.get(s);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(f==null?void 0:f.cache))return new Response(d.body,d.init);ae.delete(s)}}return window.fetch(r,f)}function Se(t,r){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(r!=null&&r.headers||r!=null&&r.body){const d=[];r.headers&&d.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&d.push(r.body),s+=`[data-hash="${it(...d)}"]`}return s}const lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ft(t){const r=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${dt(t).map(s=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(d)return r.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return r.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const E=s.split(/\[(.+?)\](?!\])/);return"/"+E.map((g,m)=>{if(m%2){if(g.startsWith("x+"))return ve(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return ve(String.fromCharCode(...g.slice(2).split("-").map(U=>parseInt(U,16))));const h=lt.exec(g);if(!h)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,j,k,N]=h;return r.push({name:k,matcher:N,optional:!!x,rest:!!j,chained:j?m===1&&E[0]==="":!1}),j?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return ve(g)}).join("")}).join("")}/?$`),params:r}}function ut(t){return!/^\([^)]+\)$/.test(t)}function dt(t){return t.slice(1).split("/").filter(ut)}function pt(t,r,f){const s={},d=t.slice(1),u=d.filter(l=>l!==void 0);let E=0;for(let l=0;l<r.length;l+=1){const g=r[l];let m=d[l-E];if(g.chained&&g.rest&&E&&(m=d.slice(l-E,l+1).filter(h=>h).join("/"),E=0),m===void 0){g.rest&&(s[g.name]="");continue}if(!g.matcher||f[g.matcher](m)){s[g.name]=m;const h=r[l+1],x=d[l+1];h&&!h.rest&&h.optional&&x&&g.chained&&(E=0),!h&&!x&&Object.keys(s).length===u.length&&(E=0);continue}if(g.optional&&g.chained){E++;continue}return}if(!E)return s}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:t,server_loads:r,dictionary:f,matchers:s}){const d=new Set(r);return Object.entries(f).map(([l,[g,m,h]])=>{const{pattern:x,params:j}=ft(l),k={id:l,exec:N=>{const U=x.exec(N);if(U)return pt(U,j,s)},errors:[1,...h||[]].map(N=>t[N]),layouts:[0,...m||[]].map(E),leaf:u(g)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function u(l){const g=l<0;return g&&(l=~l),[g,t[l]]}function E(l){return l===void 0?l:[d.has(l),t[l]]}}function Ke(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Ve(t,r){const f=JSON.stringify(r);try{sessionStorage[t]=f}catch{}}const gt=-1,mt=-2,wt=-3,_t=-4,yt=-5,vt=-6;function bt(t,r){if(typeof t=="number")return d(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const f=t,s=Array(f.length);function d(u,E=!1){if(u===gt)return;if(u===wt)return NaN;if(u===_t)return 1/0;if(u===yt)return-1/0;if(u===vt)return-0;if(E)throw new Error("Invalid input");if(u in s)return s[u];const l=f[u];if(!l||typeof l!="object")s[u]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const g=l[0],m=r==null?void 0:r[g];if(m)return s[u]=m(d(l[1]));switch(g){case"Date":s[u]=new Date(l[1]);break;case"Set":const h=new Set;s[u]=h;for(let k=1;k<l.length;k+=1)h.add(d(l[k]));break;case"Map":const x=new Map;s[u]=x;for(let k=1;k<l.length;k+=2)x.set(d(l[k]),d(l[k+1]));break;case"RegExp":s[u]=new RegExp(l[1],l[2]);break;case"Object":s[u]=Object(l[1]);break;case"BigInt":s[u]=BigInt(l[1]);break;case"null":const j=Object.create(null);s[u]=j;for(let k=1;k<l.length;k+=2)j[l[k]]=d(l[k+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(l.length);s[u]=g;for(let m=0;m<l.length;m+=1){const h=l[m];h!==mt&&(g[m]=d(h))}}else{const g={};s[u]=g;for(const m in l){const h=l[m];g[m]=d(h)}}return s[u]}return d(0)}function Et(t){return t.filter(r=>r!=null)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const St=new Set([...ze]);[...St];async function kt(t){var r;for(const f in t)if(typeof((r=t[f])==null?void 0:r.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([s,d])=>[s,await d])));return t}class ne{constructor(r,f){this.status=r,typeof f=="string"?this.body={message:f}:f?this.body=f:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class qe{constructor(r,f){this.status=r,this.location=f}}const Rt="x-sveltekit-invalidated",At="x-sveltekit-trailing-slash",K=Ke(Be)??{},ee=Ke(Ge)??{};function be(t){K[t]=te()}function It(t,r){var Ne;const f=ht(t),s=t.nodes[0],d=t.nodes[1];s(),d();const u=document.documentElement,E=[],l=[];let g=null;const m={before_navigate:[],on_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},x=!1,j=!1,k=!0,N=!1,U=!1,H=!1,B=!1,V,D=(Ne=history.state)==null?void 0:Ne[M];D||(D=Date.now(),history.replaceState({...history.state,[M]:D},"",location.href));const fe=K[D];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let q,z,Y;async function ke(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const e=new URL(location.href),i=Z(e,!0);g=null;const n=z={},o=i&&await pe(i);if(n===z&&o){if(o.type==="redirect")return re(new URL(o.location,e).href,{},1,n);o.props.page!==void 0&&(q=o.props.page),V.$set(o.props)}}function Re(e){l.some(i=>i==null?void 0:i.snapshot)&&(ee[e]=l.map(i=>{var n;return(n=i==null?void 0:i.snapshot)==null?void 0:n.capture()}))}function Ae(e){var i;(i=ee[e])==null||i.forEach((n,o)=>{var a,c;(c=(a=l[o])==null?void 0:a.snapshot)==null||c.restore(n)})}function Ie(){be(D),Ve(Be,K),Re(D),Ve(Ge,ee)}async function re(e,{noScroll:i=!1,replaceState:n=!1,keepFocus:o=!1,state:a={},invalidateAll:c=!1},p,v){return typeof e=="string"&&(e=new URL(e,De(document))),ce({url:e,scroll:i?te():null,keepfocus:o,redirect_count:p,details:{state:a,replaceState:n},nav_token:v,accepted:()=>{c&&(B=!0)},blocked:()=>{},type:"goto"})}async function Le(e){return g={id:e.id,promise:pe(e).then(i=>(i.type==="loaded"&&i.state.error&&(g=null),i))},g.promise}async function oe(...e){const n=f.filter(o=>e.some(a=>o.exec(a))).map(o=>Promise.all([...o.layouts,o.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(n)}function Pe(e){var o;h=e.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),q=e.props.page,V=new t.root({target:r,props:{...e.props,stores:F,components:l},hydrate:!0}),Ae(D);const n={from:null,to:{params:h.params,route:{id:((o=h.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};m.after_navigate.forEach(a=>a(n)),j=!0}async function X({url:e,params:i,branch:n,status:o,error:a,route:c,form:p}){let v="never";for(const _ of n)(_==null?void 0:_.slash)!==void 0&&(v=_.slash);e.pathname=Ze(e.pathname,v),e.search=e.search;const b={type:"loaded",state:{url:e,params:i,branch:n,error:a,route:c},props:{constructors:Et(n).map(_=>_.node.component)}};p!==void 0&&(b.props.form=p);let y={},L=!q,A=0;for(let _=0;_<Math.max(n.length,h.branch.length);_+=1){const w=n[_],O=h.branch[_];(w==null?void 0:w.data)!==(O==null?void 0:O.data)&&(L=!0),w&&(y={...y,...w.data},L&&(b.props[`data_${A}`]=y),A+=1)}return(!h.url||e.href!==h.url.href||h.error!==a||p!==void 0&&p!==q.form||L)&&(b.props.page={error:a,params:i,route:{id:(c==null?void 0:c.id)??null},status:o,url:new URL(e),form:p??null,data:L?y:q.data}),b}async function ue({loader:e,parent:i,url:n,params:o,route:a,server_data_node:c}){var y,L,A;let p=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((y=b.universal)!=null&&y.load){let P=function(...w){for(const O of w){const{href:$}=new URL(O,n);v.dependencies.add($)}};const _={route:new Proxy(a,{get:(w,O)=>(v.route=!0,w[O])}),params:new Proxy(o,{get:(w,O)=>(v.params.add(O),w[O])}),data:(c==null?void 0:c.data)??null,url:nt(n,()=>{v.url=!0}),async fetch(w,O){let $;w instanceof Request?($=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O}):$=w;const C=new URL($,n);return P(C.href),C.origin===n.origin&&($=C.href.slice(n.origin.length)),j?ct($,C.href,O):st($,O)},setHeaders:()=>{},depends:P,parent(){return v.parent=!0,i()}};p=await b.universal.load.call(null,_)??null,p=p?await kt(p):null}return{node:b,loader:e,server:c,universal:(L=b.universal)!=null&&L.load?{type:"data",data:p,uses:v}:null,data:p??(c==null?void 0:c.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Oe(e,i,n,o,a){if(B)return!0;if(!o)return!1;if(o.parent&&e||o.route&&i||o.url&&n)return!0;for(const c of o.params)if(a[c]!==h.params[c])return!0;for(const c of o.dependencies)if(E.some(p=>p(new URL(c))))return!0;return!1}function de(e,i){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?i??null:null}async function pe({id:e,invalidating:i,url:n,params:o,route:a}){if((g==null?void 0:g.id)===e)return g.promise;const{errors:c,layouts:p,leaf:v}=a,b=[...p,v];c.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let y=null;const L=h.url?e!==h.url.pathname+h.url.search:!1,A=h.route?a.id!==h.route.id:!1;let P=!1;const _=b.map((S,I)=>{var G;const R=h.branch[I],T=!!(S!=null&&S[0])&&((R==null?void 0:R.loader)!==S[1]||Oe(P,A,L,(G=R.server)==null?void 0:G.uses,o));return T&&(P=!0),T});if(_.some(Boolean)){try{y=await Fe(n,_)}catch(S){return ie({status:S instanceof ne?S.status:500,error:await Q(S,{url:n,params:o,route:{id:a.id}}),url:n,route:a})}if(y.type==="redirect")return y}const w=y==null?void 0:y.nodes;let O=!1;const $=b.map(async(S,I)=>{var he;if(!S)return;const R=h.branch[I],T=w==null?void 0:w[I];if((!T||T.type==="skip")&&S[1]===(R==null?void 0:R.loader)&&!Oe(O,A,L,(he=R.universal)==null?void 0:he.uses,o))return R;if(O=!0,(T==null?void 0:T.type)==="error")throw T;return ue({loader:S[1],url:n,params:o,route:a,parent:async()=>{var Te;const $e={};for(let ge=0;ge<I;ge+=1)Object.assign($e,(Te=await $[ge])==null?void 0:Te.data);return $e},server_data_node:de(T===void 0&&S[0]?{type:"skip"}:T??null,S[0]?R==null?void 0:R.server:void 0)})});for(const S of $)S.catch(()=>{});const C=[];for(let S=0;S<b.length;S+=1)if(b[S])try{C.push(await $[S])}catch(I){if(I instanceof qe)return{type:"redirect",location:I.location};let R=500,T;if(w!=null&&w.includes(I))R=I.status??R,T=I.error;else if(I instanceof ne)R=I.status,T=I.body;else{if(await F.updated.check())return await W(n);T=await Q(I,{params:o,url:n,route:{id:a.id}})}const G=await Ue(S,C,c);return G?await X({url:n,params:o,branch:C.slice(0,G.idx).concat(G.node),status:R,error:T,route:a}):await je(n,{id:a.id},T,R)}else C.push(void 0);return await X({url:n,params:o,branch:C,status:200,error:null,route:a,form:i?void 0:null})}async function Ue(e,i,n){for(;e--;)if(n[e]){let o=e;for(;!i[o];)o-=1;try{return{idx:o+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:i,url:n,route:o}){const a={};let c=null;if(t.server_loads[0]===0)try{const y=await Fe(n,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;c=y.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||x)&&await W(n)}const v=await ue({loader:s,url:n,params:a,route:o,parent:()=>Promise.resolve({}),server_data_node:de(c)}),b={node:await d(),loader:d,universal:null,server:null,data:null};return await X({url:n,params:a,branch:[v,b],status:e,error:i,route:null})}function Z(e,i){if(ye(e,J))return;const n=se(e);for(const o of f){const a=o.exec(n);if(a)return{id:e.pathname+e.search,invalidating:i,route:o,params:et(a),url:e}}}function se(e){return Qe(e.pathname.slice(J.length)||"/")}function xe({url:e,type:i,intent:n,delta:o}){let a=!1;const c=He(h,n,e,i);o!==void 0&&(c.navigation.delta=o);const p={...c.navigation,cancel:()=>{a=!0,c.reject(new Error("navigation was cancelled"))}};return U||m.before_navigate.forEach(v=>v(p)),a?null:c}async function ce({url:e,scroll:i,keepfocus:n,redirect_count:o,details:a,type:c,delta:p,nav_token:v={},accepted:b,blocked:y}){var $,C,S;const L=Z(e,!1),A=xe({url:e,type:c,delta:p,intent:L});if(!A){y();return}const P=D;b(),U=!0,j&&F.navigating.set(A.navigation),z=v;let _=L&&await pe(L);if(!_){if(ye(e,J))return await W(e);_=await je(e,{id:null},await Q(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(L==null?void 0:L.url)||e,z!==v)return A.reject(new Error("navigation was aborted")),!1;if(_.type==="redirect")if(o>=20)_=await ie({status:500,error:await Q(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(_.location,e).href,{},o+1,v),!1;else(($=_.props.page)==null?void 0:$.status)>=400&&await F.updated.check()&&await W(e);if(E.length=0,B=!1,N=!0,be(P),Re(P),(C=_.props.page)!=null&&C.url&&_.props.page.url.pathname!==e.pathname&&(e.pathname=(S=_.props.page)==null?void 0:S.url.pathname),a){const I=a.replaceState?0:1;if(a.state[M]=D+=I,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let R=D+1;for(;ee[R]||K[R];)delete ee[R],delete K[R],R+=1}}if(g=null,j){h=_.state,_.props.page&&(_.props.page.url=e);const I=(await Promise.all(m.on_navigate.map(R=>R(A.navigation)))).filter(R=>typeof R=="function");if(I.length>0){let R=function(){m.after_navigate=m.after_navigate.filter(T=>!I.includes(T))};I.push(R),m.after_navigate.push(...I)}V.$set(_.props)}else Pe(_);const{activeElement:w}=document;if(await we(),k){const I=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));i?scrollTo(i.x,i.y):I?I.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==w&&document.activeElement!==document.body;!n&&!O&&Ee(),k=!0,_.props.page&&(q=_.props.page),U=!1,c==="popstate"&&Ae(D),A.fulfil(void 0),m.after_navigate.forEach(I=>I(A.navigation)),F.navigating.set(null),N=!1}async function je(e,i,n,o){return e.origin===location.origin&&e.pathname===location.pathname&&!x?await ie({status:o,error:n,url:e,route:i}):await W(e)}function W(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;u.addEventListener("mousemove",c=>{const p=c.target;clearTimeout(e),e=setTimeout(()=>{o(p,2)},20)});function i(c){o(c.composedPath()[0],1)}u.addEventListener("mousedown",i),u.addEventListener("touchstart",i,{passive:!0});const n=new IntersectionObserver(c=>{for(const p of c)p.isIntersecting&&(oe(se(new URL(p.target.href))),n.unobserve(p.target))},{threshold:0});function o(c,p){const v=Ce(c,u);if(!v)return;const{url:b,external:y,download:L}=_e(v,J);if(y||L)return;const A=le(v);if(!A.reload)if(p<=A.preload_data){const P=Z(b,!1);P&&Le(P)}else p<=A.preload_code&&oe(se(b))}function a(){n.disconnect();for(const c of u.querySelectorAll("a")){const{url:p,external:v,download:b}=_e(c,J);if(v||b)continue;const y=le(c);y.reload||(y.preload_code===Me.viewport&&n.observe(c),y.preload_code===Me.eager&&oe(se(p)))}}m.after_navigate.push(a),a()}function Q(e,i){return e instanceof ne?e.body:t.hooks.handleError({error:e,event:i})??{message:i.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{me(()=>(m.after_navigate.push(e),()=>{const i=m.after_navigate.indexOf(e);m.after_navigate.splice(i,1)}))},before_navigate:e=>{me(()=>(m.before_navigate.push(e),()=>{const i=m.before_navigate.indexOf(e);m.before_navigate.splice(i,1)}))},on_navigate:e=>{me(()=>(m.on_navigate.push(e),()=>{const i=m.on_navigate.indexOf(e);m.on_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(N||!j)&&(k=!1)},goto:(e,i={})=>re(e,i,0),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:i}=new URL(e,location.href);E.push(n=>n.href===i)}return ke()},invalidate_all:()=>(B=!0,ke()),preload_data:async e=>{const i=new URL(e,De(document)),n=Z(i,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Le(n)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const i=new URL(location.href),{branch:n,route:o}=h;if(!o)return;const a=await Ue(h.branch.length,n,o.errors);if(a){const c=await X({url:i,params:h.params,branch:n.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:o});h=c.state,V.$set(c.props),we().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},0):(V.$set({form:null,page:{...q,form:e.data,status:e.status}}),await we(),V.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let o=!1;if(Ie(),!U){const a=He(h,void 0,null,"leave"),c={...a.navigation,cancel:()=>{o=!0,a.reject(new Error("navigation was cancelled"))}};m.before_navigate.forEach(p=>p(c))}o?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(i=navigator.connection)!=null&&i.saveData||Ye(),u.addEventListener("click",n=>{var P;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const o=Ce(n.composedPath()[0],u);if(!o)return;const{url:a,external:c,target:p,download:v}=_e(o,J);if(!a)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const b=le(o);if(!(o instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||v)return;if(c||b.reload){xe({url:a,type:"link"})?U=!0:n.preventDefault();return}const[L,A]=a.href.split("#");if(A!==void 0&&L===location.href.split("#")[0]){if(h.url.hash===a.hash){n.preventDefault(),(P=o.ownerDocument.getElementById(A))==null||P.scrollIntoView();return}if(H=!0,be(D),e(a),!b.replace_state)return;H=!1,n.preventDefault()}ce({url:a,scroll:b.noscroll?te():null,keepfocus:b.keep_focus??!1,redirect_count:0,details:{state:{},replaceState:b.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),u.addEventListener("submit",n=>{if(n.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||o.method)!=="get")return;const p=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||o.action);if(ye(p,J))return;const v=n.target,{keep_focus:b,noscroll:y,reload:L,replace_state:A}=le(v);if(L)return;n.preventDefault(),n.stopPropagation();const P=new FormData(v),_=a==null?void 0:a.getAttribute("name");_&&P.append(_,(a==null?void 0:a.getAttribute("value"))??""),p.search=new URLSearchParams(P).toString(),ce({url:p,scroll:y?te():null,keepfocus:b??!1,redirect_count:0,details:{state:{},replaceState:A??p.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var o;if(z={},(o=n.state)!=null&&o[M]){if(n.state[M]===D)return;const a=K[n.state[M]],c=new URL(location.href);if(h.url.href.split("#")[0]===location.href.split("#")[0]){e(c),K[D]=te(),D=n.state[M],scrollTo(a.x,a.y);return}const p=n.state[M]-D;await ce({url:c,scroll:a,keepfocus:!1,redirect_count:0,details:null,accepted:()=>{D=n.state[M]},blocked:()=>{history.go(-p)},type:"popstate",delta:p,nav_token:z})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[M]:++D},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&F.navigating.set(null)});function e(n){h.url=n,F.page.set({...q,url:n}),F.page.notify()}},_hydrate:async({status:e=200,error:i,node_ids:n,params:o,route:a,data:c,form:p})=>{x=!0;const v=new URL(location.href);({params:o={},route:a={id:null}}=Z(v,!1)||{});let b;try{const y=n.map(async(P,_)=>{const w=c[_];return w!=null&&w.uses&&(w.uses=We(w.uses)),ue({loader:t.nodes[P],url:v,params:o,route:a,parent:async()=>{const O={};for(let $=0;$<_;$+=1)Object.assign(O,(await y[$]).data);return O},server_data_node:de(w)})}),L=await Promise.all(y),A=f.find(({id:P})=>P===a.id);if(A){const P=A.layouts;for(let _=0;_<P.length;_++)P[_]||L.splice(_,0,void 0)}b=await X({url:v,params:o,branch:L,status:e,error:i,form:p,route:A??null})}catch(y){if(y instanceof qe){await W(new URL(y.location,location.href));return}b=await ie({status:y instanceof ne?y.status:500,error:await Q(y,{url:v,params:o,route:a}),url:v,route:a})}Pe(b)}}}async function Fe(t,r){const f=new URL(t);f.pathname=ot(t.pathname),t.pathname.endsWith("/")&&f.searchParams.append(At,"1"),f.searchParams.append(Rt,r.map(d=>d?"1":"0").join(""));const s=await Je(f.href);if(!s.ok)throw new ne(s.status,await s.json());return new Promise(async d=>{var h;const u=new Map,E=s.body.getReader(),l=new TextDecoder;function g(x){return bt(x,{Promise:j=>new Promise((k,N)=>{u.set(j,{fulfil:k,reject:N})})})}let m="";for(;;){const{done:x,value:j}=await E.read();if(x&&!m)break;for(m+=!j&&m?`
`:l.decode(j);;){const k=m.indexOf(`
`);if(k===-1)break;const N=JSON.parse(m.slice(0,k));if(m=m.slice(k+1),N.type==="redirect")return d(N);if(N.type==="data")(h=N.nodes)==null||h.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=We(U.uses),U.data=g(U.data))}),d(N);else if(N.type==="chunk"){const{id:U,data:H,error:B}=N,V=u.get(U);u.delete(U),B?V.reject(g(B)):V.fulfil(g(H))}}}})}function We(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const r=document.body,f=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),f!==null?r.setAttribute("tabindex",f):r.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const d=[];for(let u=0;u<s.rangeCount;u+=1)d.push(s.getRangeAt(u));setTimeout(()=>{if(s.rangeCount===d.length){for(let u=0;u<s.rangeCount;u+=1){const E=d[u],l=s.getRangeAt(u);if(E.commonAncestorContainer!==l.commonAncestorContainer||E.startContainer!==l.startContainer||E.endContainer!==l.endContainer||E.startOffset!==l.startOffset||E.endOffset!==l.endOffset)return}s.removeAllRanges()}})}}}function He(t,r,f,s){var g,m;let d,u;const E=new Promise((h,x)=>{d=h,u=x});return E.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((g=t.route)==null?void 0:g.id)??null},url:t.url},to:f&&{params:(r==null?void 0:r.params)??null,route:{id:((m=r==null?void 0:r.route)==null?void 0:m.id)??null},url:f},willUnload:!r,type:s,complete:E},fulfil:d,reject:u}}async function Ot(t,r,f){const s=It(t,r);Xe({client:s}),f?await s._hydrate(f):s.goto(location.href,{replaceState:!0}),s._start_router()}export{Ot as start};
