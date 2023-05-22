import{B as y,_ as S}from"./booking-71b65c1c.js";import{T as j,d as D}from"./index-a5aad99c.js";import{o as l,e as i,a as e,t as u,g as B,n as O,O as z,r as T,b as c,w as g,d as h,z as I,c as R,u as m,f as V,j as A,F as k,h as $}from"./app-2bebb136.js";import{D as v,G as U}from"./datetime-48e658bb.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{O as C}from"./OutlinedButton-16faea30.js";import"./ResponsiveNavLink-f84c462c.js";const M={class:"flex items-center justify-center min-h-screen md:min-h-0 md:py-8 from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2"},P={class:"max-w-md md:max-w-5xl xl:max-w-6xl mx-auto md:flex md:flex-row md:justify-between"},G={class:"h-[14.75rem] md:h-[21.25rem] md:w-2/5 bg-cover bg-center overflow-hidden"},E=["src","alt"],H={class:"md:h-[21.25rem] p-4 sm:p-6 md:w-3/5"},L={class:"font-bold text-gray-700 text-[22px] leading-7 mb-1"},X={key:0,class:"flex flex-row"},q={class:"text-[#3C3C4399] text-[17px] mr-2 text-base"},K=["title"],Q={class:"text-xs text-[#3C3C4399]"},W={key:1,class:"flex flex-row"},Y={class:"text-[#3C3C4399] text-[17px] mr-2 text-base"},Z=e("p",{class:"text-[17px] font-bold text-[#0FB478]"},"No disponible",-1),ee={class:"text-xs text-[#3C3C4399] flex flex-row mt-3 gap-2"},te={class:"text-[#7C7C80] font-[15px] mt-6 min-h-[9rem] md:min-h-min md:h-24 md:max-h-24 md:line-clamp-3"},oe={key:3,href:"#",class:"block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] border border-[#FFC933] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"},F={__name:"BookingRoomCard",props:{room:Object,settings:Object},setup(s){const o=s,r=t=>j(t).getOnlyTaxes,d=t=>t.map(f=>f.string).join(" + "),_=t=>{console.log(o.room.itemized_price),o.settings.room_type=o.room,console.log(o.settings),z.visit(route("direct-booking.checkout"),{method:"get",data:o.settings})};return(t,f)=>(l(),i("div",M,[e("div",{class:O(["w-full max-w-md md:max-w-5xl xl:max-w-6xl mx-auto bg-white rounded-3xl shadow-xl transition-all duration-300 overflow-hidden",s.room.canBeBooked?" hover:shadow-yellow-cta/25 ":""])},[e("div",P,[e("div",G,[e("img",{class:"w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110",src:o.room.room.cover,alt:o.room.room.name},null,8,E)]),e("div",H,[e("p",L,u(o.room.room.name),1),s.room.canBeBooked?(l(),i("div",X,[e("p",q,"Precio x"+u(s.room.nights)+" noches",1),e("p",{class:"text-[17px] font-bold text-[#0FB478]",title:d(s.room.itemized_price)},[B(u(s.room.price_string)+" ",1),e("span",Q," +(MXN $"+u(r(s.room.price))+")",1)],8,K)])):(l(),i("div",W,[e("p",Y,"Precio x"+u(s.room.nights)+" noches",1),Z])),e("div",ee,[e("p",null,"capacidad base: "+u(o.room.room.baseCapacity),1),e("p",null,"capacidad maxima: "+u(o.room.room.maxCapacity),1)]),e("p",te,u(o.room.room.description),1),s.room.canBeBooked?(l(),i("button",{key:2,onClick:f[0]||(f[0]=x=>_(s.room.room.id)),class:"block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"}," Reservar ahora ")):(l(),i("a",oe," No Disponible "))])])],2)]))}},se={},ne={class:"block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-sky-500 rounded-[14px] hover:bg-sky-600 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"};function ae(s,o){return l(),i("button",ne,[T(s.$slots,"default")])}const le=J(se,[["render",ae]]),ie={class:"flex text-center items-center"},re=e("span",null,"-",-1),ce={class:"pl-3 pr-3 py-1 w-10"},de={class:"my-auto font-bold"},ue=["value"],me=e("span",null,"+",-1),b={__name:"Counter",props:{counter:{type:Number,default:0},step:{type:Number,default:1},maxCount:{type:Number,default:99999},minCount:{type:Number,default:0}},emits:["update:counter"],setup(s){return(o,r)=>(l(),i("div",ie,[c(C,{onClick:r[0]||(r[0]=d=>s.counter>s.minCount?o.$emit("update:counter",s.counter-=s.step):null),class:"px-3 py-1 border rounded"},{default:g(()=>[re]),_:1}),e("div",ce,[e("span",de,u(s.counter),1),e("input",{hidden:"",type:"number",class:"hidden",value:s.counter,onInput:r[1]||(r[1]=d=>o.$emit("update:counter",d.target.value))},null,40,ue)]),c(C,{onClick:r[2]||(r[2]=d=>s.counter<s.maxCount?o.$emit("update:counter",s.counter+=s.step):null),class:"px-3 py-1 border rounded"},{default:g(()=>[me]),_:1})]))}};const fe={class:"mx-auto w-full max-w-md md:max-w-5xl xl:max-w-6xl"},xe={class:"md:grid md:grid-cols-6 md:items-center md:justify-center md:gap-6 bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta"},pe={class:"md:col-span-2 mt-4 md:mt-0 relative"},he=e("label",{for:"dates",class:"absolute text-sm z-10 -top-3 left-4 bg-white"},"Seleccione las fechas",-1),ge={class:"md:col-span-2 mt-8 md:mt-0 relative"},ve={class:"relative"},be=e("label",{for:"pax",class:"cursor-pointer absolute text-sm z-10 -top-3 left-4 bg-white"},"Seleccione las habitaciones y los huéspedes",-1),_e=["placeholder"],ye=e("p",{class:"font-bold"},"Seleccione las habitaciones y los huespedes",-1),we={class:"flex justify-end items-center"},ke=e("span",{class:"mr-4"},"Adultos: ",-1),$e={class:"flex justify-end items-center"},Ce=e("span",{class:"mr-4"},"Niños: ",-1),Fe={class:"flex justify-end items-center"},Be=e("span",{class:"mr-4"},"Infantes: ",-1),Ne={class:"flex justify-end items-center"},Se=e("span",{class:"mr-4"},"Habitaciones: ",-1),je={key:0},De={key:1},Ue={__name:"Show",props:{settings:Object,distribution:Object},setup(s){const o=s,r=h(),d=h(!1),_=h(!1),t=h(null),f=h(!1);I(()=>{r.value=o.settings.checkin?[v.fromISO(o.settings.checkin).toJSDate(),v.fromISO(o.settings.checkout).toJSDate()]:y.getDefaultDateSettings(),t.value=o.settings,t.value.adults=Number(t.value.adults),t.value.children=Number(t.value.children),t.value.infants=Number(t.value.infants),t.value.rooms=Number(t.value.rooms)});const x=y.getMinDateSettings(),N=([p,a])=>{const n=v.fromJSDate(p),w=v.fromJSDate(a??p);return t.value.checkin=n.toISODate(),t.value.checkout=w.toISODate(),t.value.nights=w.diff(n,"days").days,y.periodToString([p,a])};return(p,a)=>(l(),R(S,{title:"Hotel Casino Plaza"},{default:g(()=>[e("section",fe,[e("div",xe,[e("div",pe,[he,c(m(U),{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=n=>r.value=n),placeholder:"Seleccione un rango de fechas","enable-time-picker":!1,locale:"es",format:N,range:"","min-date":m(x).min_date,"max-date":m(x).max_date,"year-range":[m(x).min_year,m(x).max_year],cancelText:"cancelar",selectText:"Seleccionar"},null,8,["modelValue","min-date","max-date","year-range"])]),e("div",ge,[e("div",ve,[be,e("input",{id:"pax",onClick:a[1]||(a[1]=n=>d.value=!d.value),type:"text",readonly:"",class:"cursor-pointer border border-[#ddd] rounded w-full",placeholder:m(D)(o.settings.rooms,Number(o.settings.adults)+Number(o.settings.children)),inputmode:"none",autocomplete:"off"},null,8,_e)]),d.value?(l(),i("section",{key:0,onMouseleave:a[6]||(a[6]=n=>d.value=!1),class:"md:col-span-2 flex flex-col gap-3 w-80 xl:w-64 mt-2 p-4 rounded-md bg-white absolute origin-top-right right-4 ring-1 z-10 ring-black ring-opacity-5 focus:outline-none shadow-2xl",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button"},[ye,e("div",we,[ke,c(b,{counter:t.value.adults,"onUpdate:counter":a[2]||(a[2]=n=>t.value.adults=n)},null,8,["counter"])]),e("div",$e,[Ce,c(b,{counter:t.value.children,"onUpdate:counter":a[3]||(a[3]=n=>t.value.children=n)},null,8,["counter"])]),e("div",Fe,[Be,c(b,{counter:t.value.infants,"onUpdate:counter":a[4]||(a[4]=n=>t.value.infants=n)},null,8,["counter"])]),e("div",Ne,[Se,c(b,{counter:t.value.rooms,"onUpdate:counter":a[5]||(a[5]=n=>t.value.rooms=n)},null,8,["counter"])])],32)):V("",!0)]),c(m(A),{href:p.route("booking",o.settings)},{default:g(()=>[c(le,{class:"md:col-span-2 mt-8 md:mt-0 text-white"},{default:g(()=>[B(" Buscar ")]),_:1})]),_:1},8,["href"])])]),_.value?(l(),i("section",De,[(l(!0),i(k,null,$(f.value,n=>(l(),i("article",null,[c(F,{settings:t.value,room:n},null,8,["settings","room"])]))),256))])):(l(),i("section",je,[(l(!0),i(k,null,$(o.distribution,n=>(l(),i("article",null,[c(F,{settings:t.value,room:n},null,8,["settings","room"])]))),256))]))]),_:1}))}};export{Ue as default};
