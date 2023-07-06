import i from"./BookingDetails-5f0743f4.js";import{B as l}from"./BreadCrumbArrow-dac36f88.js";import{_ as c}from"./AppLayout-143dd68e.js";import{c as _,w as e,o as d,a as t,b as a,u as g,j as h,g as x,e as p,t as o,f as b}from"./app-d419cd66.js";import"./OutlinedButton-4b35825a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-05c3e358.js";import"./ActionButton-ac540800.js";import"./ResponsiveNavLink-cd3a7010.js";const y={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},f=t("span",{class:"hover:underline"},"Reservaciones",-1),m={class:"py-12"},k={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},u={class:"bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"},w=t("div",{class:"h-4"},null,-1),v={class:"flex flex-col md:flex-row gap-y-4 md:gap-x-4"},B={key:0,class:"flex-1 dark:bg-gray-800 bg-white md:rounded-lg shadow-xl p-8"},C=t("h4",{class:"text-xl dark:text-gray-50 text-gray-700 font-bold"},"Datos de pago",-1),V={class:"mt-2 dark:text-gray-50 text-gray-700"},N={class:"flex border-y dark:border-y-white/20 py-3"},T=t("span",{class:"font-bold w-24"},"Titular:",-1),j={class:"dark:text-gray-300 text-gray-600"},$={class:"flex border-b dark:border-y-white/20 py-3"},D=t("span",{class:"font-bold w-24"},"Tarjeta:",-1),E={class:"dark:text-gray-300 text-gray-600"},R={class:"flex border-b dark:border-y-white/20 py-3"},S=t("span",{class:"font-bold w-24"},"Expira:",-1),q={class:"dark:text-gray-300 text-gray-600"},A={class:"flex border-b dark:border-y-white/20 py-3"},I=t("span",{class:"font-bold w-24"},"CVC:",-1),O={class:"dark:text-gray-300 text-gray-600"},z={class:"flex-1 dark:bg-gray-800 bg-white md:rounded-lg shadow-xl p-8"},F=t("h4",{class:"text-xl dark:text-gray-50 text-gray-700 font-bold"},"Inforamción de contacto",-1),G={class:"mt-2 dark:text-gray-50 text-gray-700"},H={class:"flex border-y dark:border-y-white/20 py-3"},J=t("span",{class:"font-bold w-24"},"Nombre:",-1),K={class:"dark:text-gray-300 text-gray-600"},L={class:"flex border-b dark:border-y-white/20 py-3"},M=t("span",{class:"font-bold w-24"},"Correo:",-1),P={class:"dark:text-gray-300 text-gray-600"},Q={class:"flex border-b dark:border-y-white/20 py-3"},U=t("span",{class:"font-bold w-24"},"Telefono:",-1),W={class:"dark:text-gray-300 text-gray-600"},nt={__name:"Show",props:{booking:{type:Object,required:!0}},setup(n){const s=n;return(r,X)=>(d(),_(c,{title:"Reservación"},{header:e(()=>[t("h2",y,[a(g(h),{href:r.route("bookings.index")},{default:e(()=>[f]),_:1},8,["href"]),a(l),x(" Ver detalle ")])]),default:e(()=>[t("div",m,[t("div",k,[t("div",u,[a(i,{booking:s.booking},null,8,["booking"])]),w,t("div",v,[r.$page.props.rengin.user.is_admin?(d(),p("div",B,[C,t("ul",V,[t("li",N,[T,t("span",j,o(s.booking.card_name),1)]),t("li",$,[D,t("span",E,o(s.booking.card_number),1)]),t("li",R,[S,t("span",q,o(s.booking.card_expiration),1)]),t("li",A,[I,t("span",O,o(s.booking.card_cvc),1)])])])):b("",!0),t("div",z,[F,t("ul",G,[t("li",H,[J,t("span",K,o(s.booking.guest.full_name),1)]),t("li",L,[M,t("span",P,o(s.booking.guest.email),1)]),t("li",Q,[U,t("span",W,o(s.booking.guest.phone),1)])])])])])])]),_:1}))}};export{nt as default};
