var Le=Object.defineProperty;var Pe=(e,t,o)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var G=(e,t,o)=>(Pe(e,typeof t!="symbol"?t+"":t,o),o);import{T as ze,D as j,G as Re,d as Ve}from"./datetime-18346d3f.js";import{z as de,A as O,B as I,d,C as B,s as Ne,q as Xe,x as Ue,k as $e,D as re,E as De,F as Y,G as k,o as b,e as w,a,h as ie,H as Ge,b as _,t as C,g as Me,n as He,O as Ye,w as P,c as Je,u as A,f as We,j as qe}from"./app-0ed77754.js";import{_ as Ke}from"./BookingLayout-bac654b6.js";import{C as Qe}from"./CTAButton-42efdd23.js";/* empty css             */import{O as Te}from"./OutlinedButton-eb78fe7b.js";import"./ResponsiveNavLink-b55304d9.js";import"./_plugin-vue_export-helper-c27b6911.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const x={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Ae={itemsToShow:{default:x.itemsToShow,type:Number},itemsToScroll:{default:x.itemsToScroll,type:Number},wrapAround:{default:x.wrapAround,type:Boolean},throttle:{default:x.throttle,type:Number},snapAlign:{default:x.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:x.transition,type:Number},breakpoints:{default:x.breakpoints,type:Object},autoplay:{default:x.autoplay,type:Number},pauseAutoplayOnHover:{default:x.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:x.mouseDrag,type:Boolean},touchDrag:{default:x.touchDrag,type:Boolean},dir:{default:x.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:x.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ze({config:e,slidesCount:t}){const{snapAlign:o,wrapAround:l,itemsToShow:i=1}=e;if(l)return Math.max(t-1,0);let n;switch(o){case"start":n=t-i;break;case"end":n=t-1;break;case"center":case"center-odd":n=t-Math.ceil((i-.5)/2);break;case"center-even":n=t-Math.ceil(i/2);break;default:n=0;break}return Math.max(n,0)}function et({config:e,slidesCount:t}){const{wrapAround:o,snapAlign:l,itemsToShow:i=1}=e;let n=0;if(o||i>t)return n;switch(l){case"start":n=0;break;case"end":n=i-1;break;case"center":case"center-odd":n=Math.floor((i-1)/2);break;case"center-even":n=Math.floor((i-2)/2);break;default:n=0;break}return n}function ue({val:e,max:t,min:o}){return t<o?e:Math.min(Math.max(e,o),t)}function tt({config:e,currentSlide:t,slidesCount:o}){const{snapAlign:l,wrapAround:i,itemsToShow:n=1}=e;let m=t;switch(l){case"center":case"center-odd":m-=(n-1)/2;break;case"center-even":m-=(n-2)/2;break;case"end":m-=n-1;break}return i?m:ue({val:m,max:o-n,min:0})}function Be(e){return e?e.reduce((t,o)=>{var l;return o.type===Y?[...t,...Be(o.children)]:((l=o.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?[...t,o]:t},[]):[]}function ce({val:e,max:t,min:o=0}){return e>t?ce({val:e-(t+1),max:t,min:o}):e<o?ce({val:e+(t+1),max:t,min:o}):e}function ot(e,t){let o;return t?function(...l){const i=this;o||(e.apply(i,l),o=!0,setTimeout(()=>o=!1,t))}:e}function nt(e,t){let o;return function(...l){o&&clearTimeout(o),o=setTimeout(()=>{e(...l),o=null},t)}}function st(e="",t={}){return Object.entries(t).reduce((o,[l,i])=>o.replace(`{${l}}`,String(i)),e)}var at=de({name:"ARIA",setup(){const e=O("config",I(Object.assign({},x))),t=O("currentSlide",d(0)),o=O("slidesCount",d(0));return()=>B("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},st(e.i18n.itemXofY,{currentSlide:t.value+1,slidesCount:o.value}))}});de({name:"Carousel",props:Ae,setup(e,{slots:t,emit:o,expose:l}){var i;const n=d(null),m=d([]),p=d(0),g=d(0),r=I(Object.assign({},x));let u=Object.assign({},x),c;const f=d((i=e.modelValue)!==null&&i!==void 0?i:0),J=d(0),fe=d(0),N=d(0),F=d(0);let M,W;k("config",r),k("slidesCount",g),k("currentSlide",f),k("maxSlide",N),k("minSlide",F),k("slideWidth",p);function q(){c=Object.assign({},e.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),e),{i18n:Object.assign(Object.assign({},u.i18n),e.i18n),breakpoints:void 0}),pe(u)}function z(){if(!c||!Object.keys(c).length)return;const s=Object.keys(c).map(v=>Number(v)).sort((v,S)=>+S-+v);let h=Object.assign({},u);s.some(v=>{const S=window.matchMedia(`(min-width: ${v}px)`).matches;return S&&(h=Object.assign(Object.assign({},h),c[v])),S}),pe(h)}function pe(s){Object.entries(s).forEach(([h,v])=>r[h]=v)}const ve=nt(()=>{z(),E()},16);function E(){if(!n.value)return;const s=n.value.getBoundingClientRect();p.value=s.width/r.itemsToShow}function K(){g.value<=0||(fe.value=Math.ceil((g.value-1)/2),N.value=Ze({config:r,slidesCount:g.value}),F.value=et({config:r,slidesCount:g.value}),r.wrapAround||(f.value=ue({val:f.value,max:N.value,min:F.value})))}Ne(()=>{Xe(()=>E()),setTimeout(()=>E(),1e3),z(),be(),window.addEventListener("resize",ve,{passive:!0}),o("init")}),Ue(()=>{W&&clearTimeout(W),M&&clearInterval(M),window.removeEventListener("resize",ve,{passive:!0})});let y=!1;const R={x:0,y:0},V={x:0,y:0},$=I({x:0,y:0}),X=d(!1),Q=d(!1),Ie=()=>{X.value=!0},Fe=()=>{X.value=!1};function ge(s){["INPUT","TEXTAREA","SELECT"].includes(s.target.tagName)||(y=s.type==="touchstart",y||s.preventDefault(),!(!y&&s.button!==0||D.value)&&(R.x=y?s.touches[0].clientX:s.clientX,R.y=y?s.touches[0].clientY:s.clientY,document.addEventListener(y?"touchmove":"mousemove",he,!0),document.addEventListener(y?"touchend":"mouseup",xe,!0)))}const he=ot(s=>{Q.value=!0,V.x=y?s.touches[0].clientX:s.clientX,V.y=y?s.touches[0].clientY:s.clientY;const h=V.x-R.x,v=V.y-R.y;$.y=v,$.x=h},r.throttle);function xe(){const s=r.dir==="rtl"?-1:1,h=Math.sign($.x)*.4,v=Math.round($.x/p.value+h)*s;if(v&&!y){const S=oe=>{oe.stopPropagation(),window.removeEventListener("click",S,!0)};window.addEventListener("click",S,!0)}T(f.value-v),$.x=0,$.y=0,Q.value=!1,document.removeEventListener(y?"touchmove":"mousemove",he,!0),document.removeEventListener(y?"touchend":"mouseup",xe,!0)}function be(){!r.autoplay||r.autoplay<=0||(M=setInterval(()=>{r.pauseAutoplayOnHover&&X.value||U()},r.autoplay))}function we(){M&&(clearInterval(M),M=null),be()}const D=d(!1);function T(s){const h=r.wrapAround?s:ue({val:s,max:N.value,min:F.value});f.value===h||D.value||(o("slide-start",{slidingToIndex:s,currentSlideIndex:f.value,prevSlideIndex:J.value,slidesCount:g.value}),D.value=!0,J.value=f.value,f.value=h,W=setTimeout(()=>{if(r.wrapAround){const v=ce({val:h,max:N.value,min:0});v!==f.value&&(f.value=v,o("loop",{currentSlideIndex:f.value,slidingToIndex:s}))}o("update:modelValue",f.value),o("slide-end",{currentSlideIndex:f.value,prevSlideIndex:J.value,slidesCount:g.value}),D.value=!1,we()},r.transition))}function U(){T(f.value+r.itemsToScroll)}function Z(){T(f.value-r.itemsToScroll)}const ye={slideTo:T,next:U,prev:Z};k("nav",ye),k("isSliding",D);const _e=$e(()=>tt({config:r,currentSlide:f.value,slidesCount:g.value}));k("slidesToScroll",_e);const Ee=$e(()=>{const s=r.dir==="rtl"?-1:1,h=_e.value*p.value*s;return{transform:`translateX(${$.x-h}px)`,transition:`${D.value?r.transition:0}ms`,margin:r.wrapAround?`0 -${g.value*p.value}px`:"",width:"100%"}});function Se(){q(),z(),K(),E(),we()}Object.keys(Ae).forEach(s=>{["modelValue"].includes(s)||re(()=>e[s],Se)}),re(()=>e.modelValue,s=>{s!==f.value&&T(Number(s))}),re(g,K),o("before-init"),q();const ke={config:r,slidesCount:g,slideWidth:p,next:U,prev:Z,slideTo:T,currentSlide:f,maxSlide:N,minSlide:F,middleSlide:fe};l({updateBreakpointsConfigs:z,updateSlidesData:K,updateSlideWidth:E,initDefaultConfigs:q,restartCarousel:Se,slideTo:T,next:U,prev:Z,nav:ye,data:ke});const ee=t.default||t.slides,te=t.addons,Ce=I(ke);return()=>{const s=Be(ee==null?void 0:ee(Ce)),h=(te==null?void 0:te(Ce))||[];s.forEach((ne,se)=>ne.props.index=se);let v=s;if(r.wrapAround){const ne=s.map((ae,L)=>De(ae,{index:-s.length+L,isClone:!0,key:`clone-before-${L}`})),se=s.map((ae,L)=>De(ae,{index:s.length+L,isClone:!0,key:`clone-after-${L}`}));v=[...ne,...s,...se]}m.value=s,g.value=Math.max(s.length,1);const S=B("ol",{class:"carousel__track",style:Ee.value,onMousedownCapture:r.mouseDrag?ge:null,onTouchstartPassiveCapture:r.touchDrag?ge:null},v),oe=B("div",{class:"carousel__viewport"},S);return B("section",{ref:n,class:{carousel:!0,"is-sliding":D.value,"is-dragging":Q.value,"is-hover":X.value,"carousel--rtl":r.dir==="rtl"},dir:r.dir,"aria-label":r.i18n.ariaGallery,tabindex:"0",onMouseenter:Ie,onMouseleave:Fe},[oe,h,B(at)])}}});var je;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(je||(je={}));de({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const o=O("config",I(Object.assign({},x))),l=O("currentSlide",d(0)),i=O("slidesToScroll",d(0)),n=O("isSliding",d(!1)),m=()=>e.index===l.value,p=()=>e.index===l.value-1,g=()=>e.index===l.value+1,r=()=>{const u=Math.floor(i.value),c=Math.ceil(i.value+o.itemsToShow-1);return e.index>=u&&e.index<=c};return()=>{var u;return B("li",{style:{width:`${100/o.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":r(),"carousel__slide--active":m(),"carousel__slide--prev":p(),"carousel__slide--next":g(),"carousel__slide--sliding":n.value},"aria-hidden":!r()},(u=t.default)===null||u===void 0?void 0:u.call(t))}}});const rt={class:"h-[14.75rem] md:h-[21.25rem] md:w-2/5 bg-cover bg-center overflow-hidden flex relative"},lt=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70px",height:"70px",viewBox:"0 0 24 24",fill:"none"},[a("path",{d:"M10 7L15 12L10 17",stroke:"#ffffff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),it=[lt],ut=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70px",height:"70px",viewBox:"0 0 24 24",fill:"none"},[a("path",{d:"M15 7L10 12L15 17",stroke:"#ffffff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ct=[ut],dt=["src","alt"],mt={__name:"BookingRoomCardGallery",props:{room:Object},setup(e){const t=e,o=d(0),l=d((t.room.gallery.length-2)*100),i=I({transform:`translateX(-${o.value}%)`}),n=()=>{o.value<=l.value?(o.value+=100,i.transform=`translateX(-${o.value}%)`):(o.value=0,i.transform=`translateX(-${o.value}%)`)},m=()=>{o.value>0?(o.value-=100,i.transform=`translateX(-${o.value}%)`):(o.value=l.value,i.transform=`translateX(-${o.value}%)`)};return(p,g)=>(b(),w("div",rt,[a("span",{onClick:n,class:"absolute z-50 top-1/2 -translate-y-1/2 right-0 hover:bg-white/20 cursor-pointer transition-all duration-300"},it),a("span",{onClick:m,class:"absolute z-50 top-1/2 -translate-y-1/2 left-0 hover:bg-white/20 cursor-pointer transition-all duration-300"},ct),(b(!0),w(Y,null,ie(t.room.gallery,(r,u)=>(b(),w("img",{src:r.image_src,alt:r.image_alt,class:"w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110 z-10",style:Ge(i)},null,12,dt))),256))]))}},ft={class:"flex items-center justify-center min-h-screen md:min-h-0 md:py-8 from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2"},pt={class:"max-w-md md:max-w-5xl xl:max-w-6xl mx-auto md:flex md:flex-row md:justify-between"},vt={class:"md:h-[21.25rem] p-4 sm:p-6 md:w-3/5"},gt={class:"font-bold text-gray-700 text-[22px] leading-7 mb-1"},ht={key:0,class:"flex flex-row"},xt={class:"text-[#3C3C4399] text-[17px] mr-2 text-base"},bt=["title"],wt={class:"text-xs text-[#3C3C4399]"},yt={key:1,class:"flex flex-row"},_t={class:"text-[#3C3C4399] text-[17px] mr-2 text-base"},St=a("p",{class:"text-[17px] font-bold text-[#0FB478]"},"No disponible",-1),kt={class:"text-xs text-[#3C3C4399] flex flex-row mt-3 gap-2"},Ct={class:"text-[#7C7C80] font-[15px] mt-6 min-h-[9rem] md:min-h-min md:h-24 md:max-h-24 md:line-clamp-3"},$t={key:3,disabled:"",class:"block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] border border-[#FFC933] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"},Oe={__name:"BookingRoomCard",props:{room:Object,settings:Object},setup(e){const t=e,o=d(null),l=m=>ze(m).getOnlyTaxes,i=m=>m.map(p=>p.string).join(" + "),n=()=>{o.value=t.settings,o.value.room_type_id=t.room.roomTypeId,Ye.visit(route("direct-booking.checkout",o.value),{method:"get"})};return console.log(t.room),(m,p)=>(b(),w("div",ft,[a("div",{class:He(["w-full max-w-md md:max-w-5xl xl:max-w-6xl mx-auto bg-white rounded-3xl shadow-xl transition-all duration-300 overflow-hidden",t.room.canBeBooked?" hover:shadow-yellow-cta/25 ":""])},[a("div",pt,[_(mt,{room:t.room.room},null,8,["room"]),a("div",vt,[a("p",gt,C(t.room.room.name),1),e.room.canBeBooked?(b(),w("div",ht,[a("p",xt,"Precio x"+C(e.room.nights)+" noches",1),a("p",{class:"text-[17px] font-bold text-[#0FB478]",title:i(e.room.itemized_price)},[Me(C(e.room.price_string)+" ",1),a("span",wt," +(MXN $"+C(l(e.room.price))+")",1)],8,bt)])):(b(),w("div",yt,[a("p",_t,"Precio x"+C(e.room.nights)+" noches",1),St])),a("div",kt,[a("p",null,"capacidad base: "+C(t.room.room.baseCapacity),1),a("p",null,"capacidad maxima: "+C(t.room.room.maxCapacity),1)]),a("p",Ct,C(t.room.room.description),1),e.room.canBeBooked?(b(),w("button",{key:2,onClick:p[0]||(p[0]=g=>n()),type:"button",class:"block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"}," Reservar ahora ")):(b(),w("button",$t," No Disponible "))])])],2)]))}},Dt={class:"flex text-center items-center"},Tt=a("span",null,"-",-1),At={class:"pl-3 pr-3 py-1 w-10"},jt={class:"my-auto font-bold"},Ot=["value"],Nt=a("span",null,"+",-1),H={__name:"Counter",props:{counter:{type:Number,default:0},step:{type:Number,default:1},maxCount:{type:Number,default:99999},minCount:{type:Number,default:0}},emits:["update:counter"],setup(e){return(t,o)=>(b(),w("div",Dt,[_(Te,{onClick:o[0]||(o[0]=l=>e.counter>e.minCount?t.$emit("update:counter",e.counter-=e.step):null),class:"px-3 py-1 border rounded"},{default:P(()=>[Tt]),_:1}),a("div",At,[a("span",jt,C(e.counter),1),a("input",{hidden:"",type:"number",class:"hidden",value:e.counter,onInput:o[1]||(o[1]=l=>t.$emit("update:counter",l.target.value))},null,40,Ot)]),_(Te,{onClick:o[2]||(o[2]=l=>e.counter<e.maxCount?t.$emit("update:counter",e.counter+=e.step):null),class:"px-3 py-1 border rounded"},{default:P(()=>[Nt]),_:1})]))}},me=()=>{const e=new Date,t=new Date(new Date().setDate(e.getDate()+1));return[e,t]},Mt=()=>{const e=j.now(),t=e.year,o=e.plus({years:2}).year,l=e.month,i=e.plus({years:2}).month,n=e,m=e.plus({years:2});return{min_year:t,max_year:o,min_month:l,max_month:i,min_date:n.toString(),max_date:m.toString()}},Bt=e=>{const[t,o]=e??me(),l=j.fromJSDate(t),i=j.fromJSDate(o??t),n=l.setLocale("es").toFormat("ccc, dd MMM"),m=i.setLocale("es").toFormat("ccc, dd MMM");return`${n} - ${m}`};class It{constructor(t,o){G(this,"startDate");G(this,"endDate");G(this,"period");this.startDate=t,this.endDate=o,this.period=this.getDefaultPeriod()}getDefaultPeriod(){return me()}getMinDateSettings(){return Mt()}periodToString(t=this.period){return Bt(t)}periodToFormatString(t=this.period){return this.formatPeriod(t)}}const le=new It(me());const Ft={class:"mx-auto w-full max-w-md md:max-w-5xl xl:max-w-6xl"},Et={class:"md:grid md:grid-cols-6 md:items-center md:justify-center md:gap-6 bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta"},Lt={class:"md:col-span-2 mt-4 md:mt-0 relative"},Pt=a("label",{for:"dates",class:"absolute text-sm z-10 -top-3 left-4 bg-white"},"Seleccione las fechas",-1),zt={class:"md:col-span-2 mt-8 md:mt-0 relative"},Rt={class:"relative"},Vt=a("label",{for:"pax",class:"cursor-pointer absolute text-sm z-10 -top-3 left-4 bg-white"},"Seleccione las habitaciones y los huéspedes",-1),Xt=["placeholder"],Ut=a("p",{class:"font-bold"},"Seleccione las habitaciones y los huespedes",-1),Gt={class:"flex justify-end items-center"},Ht=a("span",{class:"mr-4"},"Adultos: ",-1),Yt={class:"flex justify-end items-center"},Jt=a("span",{class:"mr-4"},"Niños: ",-1),Wt={class:"flex justify-end items-center"},qt=a("span",{class:"mr-4"},"Infantes: ",-1),Kt={class:"flex justify-end items-center"},Qt=a("span",{class:"mr-4"},"Habitaciones: ",-1),Zt={key:0},eo={key:1},co={__name:"Show",props:{settings:Object,distribution:Object},setup(e){const t=e,o=d(),l=d(!1),i=d(!1),n=d(null),m=d(!1);Ne(()=>{o.value=t.settings.checkin?[j.fromISO(t.settings.checkin).toJSDate(),j.fromISO(t.settings.checkout).toJSDate()]:le.getDefaultDateSettings(),n.value=t.settings,n.value.adults=Number(n.value.adults),n.value.children=Number(n.value.children),n.value.infants=Number(n.value.infants),n.value.rooms=Number(n.value.rooms)});const p=le.getMinDateSettings(),g=([r,u])=>{const c=j.fromJSDate(r),f=j.fromJSDate(u??r);return n.value.checkin=c.toISODate(),n.value.checkout=f.toISODate(),n.value.nights=f.diff(c,"days").days,le.periodToString([r,u])};return(r,u)=>(b(),Je(Ke,{title:"Hotel Casino Plaza"},{default:P(()=>[a("section",Ft,[a("div",Et,[a("div",Lt,[Pt,_(A(Re),{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c),placeholder:"Seleccione un rango de fechas","enable-time-picker":!1,locale:"es",format:g,range:"","min-date":A(p).min_date,"max-date":A(p).max_date,"year-range":[A(p).min_year,A(p).max_year],cancelText:"cancelar",selectText:"Seleccionar"},null,8,["modelValue","min-date","max-date","year-range"])]),a("div",zt,[a("div",Rt,[Vt,a("input",{id:"pax",onClick:u[1]||(u[1]=c=>l.value=!l.value),type:"text",readonly:"",class:"cursor-pointer border border-[#ddd] rounded w-full",placeholder:A(Ve)(t.settings.rooms,Number(t.settings.adults)+Number(t.settings.children)),inputmode:"none",autocomplete:"off"},null,8,Xt)]),l.value?(b(),w("section",{key:0,onMouseleave:u[6]||(u[6]=c=>l.value=!1),class:"md:col-span-2 flex flex-col gap-3 w-80 xl:w-64 mt-2 p-4 rounded-md bg-white absolute origin-top-right right-4 ring-1 z-10 ring-black ring-opacity-5 focus:outline-none shadow-2xl",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button"},[Ut,a("div",Gt,[Ht,_(H,{counter:n.value.adults,"onUpdate:counter":u[2]||(u[2]=c=>n.value.adults=c)},null,8,["counter"])]),a("div",Yt,[Jt,_(H,{counter:n.value.children,"onUpdate:counter":u[3]||(u[3]=c=>n.value.children=c)},null,8,["counter"])]),a("div",Wt,[qt,_(H,{counter:n.value.infants,"onUpdate:counter":u[4]||(u[4]=c=>n.value.infants=c)},null,8,["counter"])]),a("div",Kt,[Qt,_(H,{counter:n.value.rooms,"onUpdate:counter":u[5]||(u[5]=c=>n.value.rooms=c)},null,8,["counter"])])],32)):We("",!0)]),_(A(qe),{href:r.route("booking",t.settings)},{default:P(()=>[_(Qe,{class:"md:col-span-2 mt-8 md:mt-0 text-white"},{default:P(()=>[Me(" Buscar ")]),_:1})]),_:1},8,["href"])])]),i.value?(b(),w("section",eo,[(b(!0),w(Y,null,ie(m.value,c=>(b(),w("article",null,[_(Oe,{settings:n.value,room:c},null,8,["settings","room"])]))),256))])):(b(),w("section",Zt,[(b(!0),w(Y,null,ie(t.distribution,c=>(b(),w("article",null,[_(Oe,{settings:n.value,room:c},null,8,["settings","room"])]))),256))]))]),_:1}))}};export{co as default};
