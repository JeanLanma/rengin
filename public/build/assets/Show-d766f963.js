import{d as x,o as d,e as c,b as a,u as f,X as R,a as e,w as l,j as L,g as h,n as w,r as j,f as F,t as g,c as S,F as M,h as N,x as O}from"./app-73398a0e.js";import{_ as U,A as H,a as p,b as k}from"./ResponsiveNavLink-1cd2ca04.js";import{O as D,D as C,h as I,G as z}from"./datetime-848f6b05.js";import"./_plugin-vue_export-helper-c27b6911.js";const E={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},G={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},J={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},P={class:"flex justify-between h-16"},X={class:"flex"},q={class:"shrink-0 flex items-center"},K={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},Q={class:"-mr-2 flex items-center sm:hidden"},W={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Y={class:"pt-2 pb-3 space-y-1"},Z={key:0,class:"bg-white dark:bg-gray-800 shadow"},ee={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},te={__name:"BookingLayout",props:{title:String},setup(o){const r=x(!1);return(t,m)=>(d(),c("div",null,[a(f(R),{title:o.title},null,8,["title"]),a(U),e("div",E,[e("nav",G,[e("div",J,[e("div",P,[e("div",X,[e("div",q,[a(f(L),{href:t.route("dashboard")},{default:l(()=>[a(H,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",K,[a(p,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:l(()=>[h(" Dashboard ")]),_:1},8,["href","active"]),a(p,{href:t.route("bookings.index"),active:t.route().current("bookings.*")},{default:l(()=>[h(" Reservaciones ")]),_:1},8,["href","active"]),a(p,{href:t.route("rooms.index"),active:t.route().current("rooms.*")},{default:l(()=>[h(" Habitaciones ")]),_:1},8,["href","active"]),a(p,{href:t.route("distribution.index"),active:t.route().current("distribution.*")},{default:l(()=>[h(" Distribución ")]),_:1},8,["href","active"])])]),e("div",Q,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",onClick:m[0]||(m[0]=_=>r.value=!r.value)},[(d(),c("svg",W,[e("path",{class:w({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:w({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:w([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",Y,[a(k,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:l(()=>[h(" Dashboard ")]),_:1},8,["href","active"]),a(k,{href:t.route("bookings.index"),active:t.route().current("bookings.*")},{default:l(()=>[h(" Reservaciones ")]),_:1},8,["href","active"]),a(k,{href:t.route("rooms.index"),active:t.route().current("rooms.*")},{default:l(()=>[h(" Habitaciones ")]),_:1},8,["href","active"]),a(k,{href:t.route("distribution.index"),active:t.route().current("distribution.*")},{default:l(()=>[h(" Distribución ")]),_:1},8,["href","active"])])],2)]),t.$slots.header?(d(),c("header",Z,[e("div",ee,[j(t.$slots,"header")])])):F("",!0),e("main",null,[j(t.$slots,"default")])])]))}},oe={class:"flex align-baseline text-center dark:text-white"},se=e("span",{class:"dark:text-white"},"-",-1),ae={class:"px-3 py-1 align-middle"},ne={class:"my-auto font-bold"},re=["value"],ie=e("span",{class:"dark:text-white"},"+",-1),y={__name:"Counter",props:{counter:{type:Number,default:0},step:{type:Number,default:1},maxCount:{type:Number,default:99999},minCount:{type:Number,default:0}},emits:["update:counter"],setup(o){return(r,t)=>(d(),c("div",oe,[a(D,{onClick:t[0]||(t[0]=m=>o.counter>o.minCount?r.$emit("update:counter",o.counter-=o.step):null),class:"px-3 py-1 border dark:border-gray-400 rounded"},{default:l(()=>[se]),_:1}),e("div",ae,[e("span",ne,g(o.counter),1),e("input",{hidden:"",type:"number",class:"hidden",value:o.counter,onInput:t[1]||(t[1]=m=>r.$emit("update:counter",m.target.value))},null,40,re)]),a(D,{onClick:t[2]||(t[2]=m=>o.counter<o.maxCount?r.$emit("update:counter",o.counter+=o.step):null),class:"px-3 py-1 border dark:border-gray-400 rounded"},{default:l(()=>[ie]),_:1})]))}},le={class:"flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2"},de={class:"w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"},ue={class:"max-w-md mx-auto"},ce={class:"h-[236px] bg-cover bg-center"},me=["src","alt"],he={class:"p-4 sm:p-6"},fe={class:"font-bold text-gray-700 text-[22px] leading-7 mb-1"},ve={class:"flex flex-row"},ge={class:"text-[#3C3C4399] text-[17px] mr-2 line-through"},xe={class:"text-[17px] font-bold text-[#0FB478]"},_e={class:"text-[#7C7C80] font-[15px] mt-6"},be=e("a",{href:"#",class:"block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"}," Reservar ahora ",-1),pe={__name:"BookingRoomCard",props:{room:Object},setup(o){return(r,t)=>(d(),c("div",le,[e("div",de,[e("div",ue,[e("div",ce,[e("img",{class:"w-full h-full object-cover object-center",src:o.room.room.cover,alt:o.room.room.name},null,8,me)]),e("div",he,[e("p",fe,g(o.room.room.name),1),e("div",ve,[e("p",ge,g(o.room.price_string),1),e("p",xe,g(o.room.price_string),1)]),e("p",_e,g(o.room.room.description),1),be])])])]))}},ke={class:"mx-auto w-full p-2 max-w-7xl"},ye={class:"dark:bg-gray-800 p-4 rounded"},$e={class:"flex justify-end items-center"},we=e("span",{class:"dark:text-white mr-4"},"Adultos: ",-1),Ce={class:"flex justify-end items-center"},Fe=e("span",{class:"dark:text-white mr-4"},"Niños: ",-1),De={class:"flex justify-end items-center"},je=e("span",{class:"dark:text-white mr-4"},"Infantes: ",-1),Se={class:"flex justify-end items-center"},Me=e("span",{class:"dark:text-white mr-4"},"Habitaciones: ",-1),Ne={class:""},Be={key:0,class:"dark:text-white my-3"},Ve=e("li",null,null,-1),Te={key:0},He={__name:"Show",setup(o){const r=x(),t=x(!1),m=x(!1);let _=null;const n=x({adults:0,children:0,infants:0,rooms:0,checkin:null,checkout:null,nights:0}),b=(()=>{const u=C.now(),i=u.year,s=u.plus({years:2}).year,v=u,$=u.plus({years:2});return{min_year:i,max_year:s,min_date:v.toString(),max_date:$.toString()}})(),B=([u,i])=>{const s=C.fromJSDate(u),v=C.fromJSDate(i??u);n.value.checkin=s.toISODate(),n.value.checkout=v.toISODate(),n.value.nights=v.diff(s,"days").days;const $=s.setLocale("es").toFormat("ccc, dd MMM"),A=v.setLocale("es").toFormat("ccc, dd MMM");return`${$} - ${A}`},V=async()=>{const{data:u}=await O.get(route("booking.getAvailabilityDate",{adults:n.value.adults,children:n.value.children,infants:n.value.infants,rooms:n.value.rooms,checkin:n.value.checkin,checkout:n.value.checkout}));_=u,m.value=!0,console.log(_)},T=()=>{console.clear(),t.value=!t.value,V(),console.log(n.value)};return(u,i)=>(d(),S(te,{title:"Hotel Casino Plaza"},{default:l(()=>[e("section",ke,[e("div",ye,[e("div",$e,[we,a(y,{counter:n.value.adults,"onUpdate:counter":i[0]||(i[0]=s=>n.value.adults=s)},null,8,["counter"])]),e("div",Ce,[Fe,a(y,{counter:n.value.children,"onUpdate:counter":i[1]||(i[1]=s=>n.value.children=s)},null,8,["counter"])]),e("div",De,[je,a(y,{counter:n.value.infants,"onUpdate:counter":i[2]||(i[2]=s=>n.value.infants=s)},null,8,["counter"])]),e("div",Se,[Me,a(y,{counter:n.value.rooms,"onUpdate:counter":i[3]||(i[3]=s=>n.value.rooms=s)},null,8,["counter"])]),e("div",Ne,[a(D,{onClick:i[4]||(i[4]=s=>T())},{default:l(()=>[h(" Ver Ajustes ")]),_:1}),t.value?(d(),c("ul",Be,[Ve,(d(!0),c(M,null,N(n.value,(s,v)=>(d(),c("li",{key:v},g(v)+": "+g(s),1))),128))])):F("",!0)]),a(f(z),{class:"mt-2",modelValue:r.value,"onUpdate:modelValue":i[5]||(i[5]=s=>r.value=s),placeholder:"Seleccione un rango de fechas",dark:f(I)(),"enable-time-picker":!1,locale:"es",format:B,range:"","min-date":f(b).min_date,"max-date":f(b).max_date,"year-range":[f(b).min_year,f(b).max_year],cancelText:"cancelar",selectText:"Seleccionar"},null,8,["modelValue","dark","min-date","max-date","year-range"])])]),m.value?(d(),c("section",Te,[(d(!0),c(M,null,N(f(_).distribution,s=>(d(),S(pe,{room:s},null,8,["room"]))),256))])):F("",!0)]),_:1}))}};export{He as default};