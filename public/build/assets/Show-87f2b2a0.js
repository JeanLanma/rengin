import{d as g,o as l,e as c,b as n,u as x,X as R,a as e,w as m,j as L,g as h,n as C,r as F,f as j,t as f,z as U,A as E,c as B,F as M,h as S,s as H}from"./app-71e224c6.js";import{_ as I,A as P,a as _,b as y}from"./ResponsiveNavLink-6dd066e8.js";import{T as N,D,h as G,G as J}from"./datetime-d75a797c.js";import{O as T}from"./OutlinedButton-b23ad1c4.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";const q={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},K={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},Q={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},W={class:"flex justify-between h-16"},Y={class:"flex"},Z={class:"shrink-0 flex items-center"},ee={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},te={class:"-mr-2 flex items-center sm:hidden"},oe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},se={class:"pt-2 pb-3 space-y-1"},ae={key:0,class:"bg-white dark:bg-gray-800 shadow"},ne={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},re={__name:"BookingLayout",props:{title:String},setup(o){const r=g(!1);return(t,d)=>(l(),c("div",null,[n(x(R),{title:o.title},null,8,["title"]),n(I),e("div",q,[e("nav",K,[e("div",Q,[e("div",W,[e("div",Y,[e("div",Z,[n(x(L),{href:t.route("dashboard")},{default:m(()=>[n(P,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",ee,[n(_,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:m(()=>[h(" Dashboard ")]),_:1},8,["href","active"]),n(_,{href:t.route("bookings.index"),active:t.route().current("bookings.*")},{default:m(()=>[h(" Reservaciones ")]),_:1},8,["href","active"]),n(_,{href:t.route("rooms.index"),active:t.route().current("rooms.*")},{default:m(()=>[h(" Habitaciones ")]),_:1},8,["href","active"]),n(_,{href:t.route("distribution.index"),active:t.route().current("distribution.*")},{default:m(()=>[h(" Distribución ")]),_:1},8,["href","active"])])]),e("div",te,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",onClick:d[0]||(d[0]=p=>r.value=!r.value)},[(l(),c("svg",oe,[e("path",{class:C({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:C({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:C([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",se,[n(y,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:m(()=>[h(" Dashboard ")]),_:1},8,["href","active"]),n(y,{href:t.route("bookings.index"),active:t.route().current("bookings.*")},{default:m(()=>[h(" Reservaciones ")]),_:1},8,["href","active"]),n(y,{href:t.route("rooms.index"),active:t.route().current("rooms.*")},{default:m(()=>[h(" Habitaciones ")]),_:1},8,["href","active"]),n(y,{href:t.route("distribution.index"),active:t.route().current("distribution.*")},{default:m(()=>[h(" Distribución ")]),_:1},8,["href","active"])])],2)]),t.$slots.header?(l(),c("header",ae,[e("div",ne,[F(t.$slots,"header")])])):j("",!0),e("main",null,[F(t.$slots,"default")])])]))}},ie={class:"flex align-baseline text-center dark:text-white"},le=e("span",{class:"dark:text-white"},"-",-1),de={class:"px-3 py-1 align-middle"},ce={class:"my-auto font-bold"},ue=["value"],me=e("span",{class:"dark:text-white"},"+",-1),k={__name:"Counter",props:{counter:{type:Number,default:0},step:{type:Number,default:1},maxCount:{type:Number,default:99999},minCount:{type:Number,default:0}},emits:["update:counter"],setup(o){return(r,t)=>(l(),c("div",ie,[n(T,{onClick:t[0]||(t[0]=d=>o.counter>o.minCount?r.$emit("update:counter",o.counter-=o.step):null),class:"px-3 py-1 border dark:border-gray-400 rounded"},{default:m(()=>[le]),_:1}),e("div",de,[e("span",ce,f(o.counter),1),e("input",{hidden:"",type:"number",class:"hidden",value:o.counter,onInput:t[1]||(t[1]=d=>r.$emit("update:counter",d.target.value))},null,40,ue)]),n(T,{onClick:t[2]||(t[2]=d=>o.counter<o.maxCount?r.$emit("update:counter",o.counter+=o.step):null),class:"px-3 py-1 border dark:border-gray-400 rounded"},{default:m(()=>[me]),_:1})]))}},fe={class:"flex items-center justify-center min-h-screen md:min-h-0 md:py-8 from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2"},he={class:"w-full max-w-md md:max-w-5xl xl:max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"},xe={class:"max-w-md md:max-w-5xl xl:max-w-7xl mx-auto md:flex md:flex-row md:justify-between"},ve={class:"h-[236px] md:h-[391px] md:w-2/5 bg-cover bg-center"},ge=["src","alt"],pe={class:"p-4 sm:p-6 md:w-3/5"},be={class:"font-bold text-gray-700 text-[22px] leading-7 mb-1"},_e={key:0,class:"flex flex-row"},ye={class:"text-[#3C3C4399] text-[17px] mr-2 text-base"},ke={class:"text-[17px] font-bold text-[#0FB478]"},we={class:"text-xs text-[#3C3C4399]"},$e={key:1,class:"flex flex-row"},Ce={class:"text-[#3C3C4399] text-[17px] mr-2 text-base"},De=e("p",{class:"text-[17px] font-bold text-[#0FB478]"},"No disponible",-1),Fe={class:"text-xs text-[#3C3C4399] flex flex-row mt-3 gap-2"},je={class:"text-[#7C7C80] font-[15px] mt-6"},Be={key:2,href:"#",class:"block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"},Me={key:3,href:"#",class:"block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] border border-[#FFC933] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"},Se={__name:"BookingRoomCard",props:{room:Object,settings:Object},setup(o){const r=o;U(()=>{var d;(d=r.room)!=null&&d.price&&console.log(N(r.room.price).getTaxes)});const t=d=>N(d).getOnlyTaxes;return(d,p)=>(l(),c("div",fe,[e("div",he,[e("div",xe,[e("div",ve,[e("img",{class:"w-full h-full object-cover object-center",src:o.room.room.cover,alt:o.room.room.name},null,8,ge)]),e("div",pe,[e("p",be,f(o.room.room.name),1),o.room.canBeBooked?(l(),c("div",_e,[e("p",ye,"Precio x"+f(o.room.nights)+" noches",1),e("p",ke,[h(f(o.room.price_string)+" ",1),e("span",we," +(MXN $"+f(t(o.room.price))+")",1)])])):(l(),c("div",$e,[e("p",Ce,"Precio x"+f(o.room.nights)+" noches",1),De])),e("div",Fe,[e("p",null,"capacidad base: "+f(o.room.room.baseCapacity),1),e("p",null,"capacidad maxima: "+f(o.room.room.maxCapacity),1)]),e("p",je,f(o.room.room.description),1),o.room.canBeBooked?(l(),c("a",Be," Reservar ahora ")):(l(),c("a",Me," No Disponible "))])])])]))}},Ne={},Te={class:"block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-sky-500 rounded-[14px] hover:bg-sky-600 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"};function Oe(o,r){return l(),c("button",Te,[F(o.$slots,"default")])}const Ae=X(Ne,[["render",Oe]]),Ve={class:"mx-auto w-full p-2 max-w-7xl"},ze={class:"dark:bg-gray-800 p-4 rounded"},Re={class:"flex justify-end items-center"},Le=e("span",{class:"dark:text-white mr-4"},"Adultos: ",-1),Ue={class:"flex justify-end items-center"},Ee=e("span",{class:"dark:text-white mr-4"},"Niños: ",-1),He={class:"flex justify-end items-center"},Ie=e("span",{class:"dark:text-white mr-4"},"Infantes: ",-1),Pe={class:"flex justify-end items-center"},Ge=e("span",{class:"dark:text-white mr-4"},"Habitaciones: ",-1),Je={class:""},Xe={key:0,class:"dark:text-white my-3"},qe=e("li",null,null,-1),Ke={key:0},ot={__name:"Show",props:{settings:Object},setup(o){const r=o,t=g(),d=g(!1),p=g(!1);let w=null;const s=g(r.settings),b=(()=>{const u=D.now(),i=u.year,a=u.plus({years:2}).year,v=u,$=u.plus({years:2});return{min_year:i,max_year:a,min_date:v.toString(),max_date:$.toString()}})(),O=([u,i])=>{const a=D.fromJSDate(u),v=D.fromJSDate(i??u);s.value.checkin=a.toISODate(),s.value.checkout=v.toISODate(),s.value.nights=v.diff(a,"days").days;const $=a.setLocale("es").toFormat("ccc, dd MMM"),z=v.setLocale("es").toFormat("ccc, dd MMM");return`${$} - ${z}`},A=async()=>{const{data:u}=await H.get(route("booking.getAvailabilityDate",{adults:s.value.adults,children:s.value.children,infants:s.value.infants,rooms:s.value.rooms,checkin:s.value.checkin,checkout:s.value.checkout}));w=u,p.value=!0,console.log(w)},V=()=>{console.clear(),d.value=!d.value,A(),console.log(s.value)};return E(()=>{const u=new Date,i=new Date(new Date().setDate(u.getDate()+1));t.value=[u,i]}),(u,i)=>(l(),B(re,{title:"Hotel Casino Plaza"},{default:m(()=>[e("section",Ve,[e("div",ze,[e("div",Re,[Le,n(k,{counter:s.value.adults,"onUpdate:counter":i[0]||(i[0]=a=>s.value.adults=a)},null,8,["counter"])]),e("div",Ue,[Ee,n(k,{counter:s.value.children,"onUpdate:counter":i[1]||(i[1]=a=>s.value.children=a)},null,8,["counter"])]),e("div",He,[Ie,n(k,{counter:s.value.infants,"onUpdate:counter":i[2]||(i[2]=a=>s.value.infants=a)},null,8,["counter"])]),e("div",Pe,[Ge,n(k,{counter:s.value.rooms,"onUpdate:counter":i[3]||(i[3]=a=>s.value.rooms=a)},null,8,["counter"])]),e("div",Je,[d.value?(l(),c("ul",Xe,[qe,(l(!0),c(M,null,S(s.value,(a,v)=>(l(),c("li",{key:v},f(v)+": "+f(a),1))),128))])):j("",!0)]),n(x(J),{class:"mt-2",modelValue:t.value,"onUpdate:modelValue":i[4]||(i[4]=a=>t.value=a),placeholder:"Seleccione un rango de fechas",dark:x(G)(),"enable-time-picker":!1,locale:"es",format:O,range:"","min-date":x(b).min_date,"max-date":x(b).max_date,"year-range":[x(b).min_year,x(b).max_year],cancelText:"cancelar",selectText:"Seleccionar"},null,8,["modelValue","dark","min-date","max-date","year-range"]),n(Ae,{onClick:i[5]||(i[5]=a=>V())},{default:m(()=>[h(" Buscar ")]),_:1})])]),p.value?(l(),c("section",Ke,[(l(!0),c(M,null,S(x(w).distribution,a=>(l(),B(Se,{settings:s.value,room:a},null,8,["settings","room"]))),256))])):j("",!0)]),_:1}))}};export{ot as default};
