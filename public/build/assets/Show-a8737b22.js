import i from"./BookingDetails-66369bea.js";import{B as l}from"./BreadCrumbArrow-5a20fb0f.js";import{_ as c}from"./AppLayout-75a42c9d.js";import{c as _,w as a,o as d,a as s,b as e,u as g,j as h,g as b,e as x,t as o,f as p}from"./app-90f30f81.js";import y from"./BookingSummary-067b85b8.js";import"./OutlinedButton-fa0688e5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-4cd2817b.js";import"./ResponsiveNavLink-4fe8f99d.js";import"./ActionButton-e455a4da.js";const f={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},m=s("span",{class:"hover:underline"},"Reservaciones",-1),k={class:"py-12"},u={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},w={class:"bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"},v=s("div",{class:"h-4"},null,-1),B={class:"flex flex-col md:flex-row gap-y-4 md:gap-x-4"},C={key:0,class:"flex-1 dark:bg-gray-800 bg-white md:rounded-lg shadow-xl p-8"},V=s("h4",{class:"text-xl dark:text-gray-50 text-gray-700 font-bold"},"Datos de pago",-1),N={class:"mt-2 dark:text-gray-50 text-gray-700"},T={class:"flex border-y dark:border-y-white/20 py-3"},$=s("span",{class:"font-bold w-24"},"Titular:",-1),j={class:"dark:text-gray-300 text-gray-600"},D={class:"flex border-b dark:border-y-white/20 py-3"},E=s("span",{class:"font-bold w-24"},"Tarjeta:",-1),R={class:"dark:text-gray-300 text-gray-600"},S={class:"flex border-b dark:border-y-white/20 py-3"},q=s("span",{class:"font-bold w-24"},"Expira:",-1),A={class:"dark:text-gray-300 text-gray-600"},I={class:"flex border-b dark:border-y-white/20 py-3"},O=s("span",{class:"font-bold w-24"},"CVC:",-1),z={class:"dark:text-gray-300 text-gray-600"},F={class:"flex-1 dark:bg-gray-800 bg-white md:rounded-lg shadow-xl p-8"},G=s("h4",{class:"text-xl dark:text-gray-50 text-gray-700 font-bold"},"Inforamción de contacto",-1),H={class:"mt-2 dark:text-gray-50 text-gray-700"},J={class:"flex border-y dark:border-y-white/20 py-3"},K=s("span",{class:"font-bold w-24"},"Nombre:",-1),L={class:"dark:text-gray-300 text-gray-600"},M={class:"flex border-b dark:border-y-white/20 py-3"},P=s("span",{class:"font-bold w-24"},"Correo:",-1),Q={class:"dark:text-gray-300 text-gray-600"},U={class:"flex border-b dark:border-y-white/20 py-3"},W=s("span",{class:"font-bold w-24"},"Telefono:",-1),X={class:"dark:text-gray-300 text-gray-600"},Y=s("div",{class:"h-4"},null,-1),Z={class:"bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"},_s={__name:"Show",props:{booking:{type:Object,required:!0}},setup(n){const t=n;return(r,ss)=>(d(),_(c,{title:"Reservación"},{header:a(()=>[s("h2",f,[e(g(h),{href:r.route("bookings.index")},{default:a(()=>[m]),_:1},8,["href"]),e(l),b(" Ver detalle ")])]),default:a(()=>[s("div",k,[s("div",u,[s("div",w,[e(i,{booking:t.booking},null,8,["booking"])]),v,s("div",B,[r.$page.props.rengin.user.is_admin?(d(),x("div",C,[V,s("ul",N,[s("li",T,[$,s("span",j,o(t.booking.card_name),1)]),s("li",D,[E,s("span",R,o(t.booking.card_number),1)]),s("li",S,[q,s("span",A,o(t.booking.card_expiration),1)]),s("li",I,[O,s("span",z,o(t.booking.card_cvc),1)])])])):p("",!0),s("div",F,[G,s("ul",H,[s("li",J,[K,s("span",L,o(t.booking.guest.full_name),1)]),s("li",M,[P,s("span",Q,o(t.booking.guest.email),1)]),s("li",U,[W,s("span",X,o(t.booking.guest.phone),1)])])])]),Y,s("div",Z,[e(y,{booking:t.booking},null,8,["booking"])])])])]),_:1}))}};export{_s as default};
