import{d as g,A as re,o as n,e as u,b as d,w as p,a as t,t as f,n as A,g as x,u as _,f as G,F as B,h as F,s as ae,O as oe,j as L,B as N,i as q}from"./app-71e224c6.js";import{D as k,h as ie,G as le}from"./datetime-d75a797c.js";import{_ as j}from"./InputLabel-070cac19.js";import{a as se}from"./DialogModal-90162065.js";import{O as W}from"./OutlinedButton-b23ad1c4.js";import"./_plugin-vue_export-helper-c27b6911.js";const de=["value"],Y={__name:"AppInput",props:["modelValue"],emits:["update:modelValue"],setup(C,{expose:s}){const b=g(null);return re(()=>{b.value.hasAttribute("autofocus")&&b.value.focus()}),s({focus:()=>b.value.focus()}),(v,i)=>(n(),u("input",{ref_key:"input",ref:b,class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",value:C.modelValue,onInput:i[0]||(i[0]=m=>v.$emit("update:modelValue",m.target.value))},null,40,de))}};const ne={class:"p-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700"},ue={class:"sm:flex sm:justify-between"},ce={class:"text-4xl font-bold text-gray-900 dark:text-white mb-4"},ye={class:"flex flex-col sm:flex-row text-center"},be={key:0},pe={class:"text-xl text-gray-900 dark:text-white mb-4"},fe={key:0,class:"px-2 py-8 border border-gray-200 dark:border-gray-700 md:rounded-lg mb-12"},ge=t("h2",{class:"text-2xl text-gray-900 dark:text-white mb-4 font-bold"},"Actulalización colectiva",-1),ve=t("h4",{class:"text-white font-bold"},"Tipo de actulalización ",-1),me={class:"mb-8 mx-8 max-w-sm shadow rounded-full h-10 mt-4 flex p-1 relative items-center dark:bg-gray-800 bg-gray-50"},he={class:"w-full flex justify-center dark:text-white"},xe={class:"w-full flex justify-center dark:text-white"},_e={class:"flex justify-around items-baseline xl:items-center flex-wrap"},ke={class:"w-full md:w-1/3"},we={class:"flex w-full md:w-1/3"},Le={key:0,class:"w-full"},Ce={key:1,class:"w-full"},Pe={class:"mr-auto xl:mr-0 mt-4"},De={class:"text-slate-50 font-bold text-xl flex gap-4 rounded-xl p-2"},Te={class:"flex p-2 w-full max-w-md justify-center space-x-0"},Ve=t("button",{innerText:"<<"},null,-1),$e=t("button",{innerText:"Today"},null,-1),Oe=t("button",{innerText:">>"},null,-1),Ae={class:"text-white border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-auto",id:"thin-scroll"},Be={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer box-shadow"},Fe=t("th",{class:"px-4 py-1 font-bold text-gray-500 dark:text-gray-400 text-center"},[t("span",{class:"font-bold block text-xl"}," ")],-1),je={class:"font-bold block text-2xl"},Ie={class:"text-sm font-normal"},Me={class:"bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"},Se={class:"dark:hover:bg-gray-600 hover:bg-gray-100"},ze=t("th",{class:"px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center text-sm whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},[t("span",null,"Disponibles")],-1),Re=["onKeydown","onBlur"],Ke={class:"dark:hover:bg-gray-600 hover:bg-gray-100"},Ue=t("th",{class:"px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center text-sm whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},[t("span",null,"Precio")],-1),Ge=["onKeydown","onBlur"],Qe={__name:"RateTable",props:{rate:{type:Object,required:!0},room:{type:Object,required:!0},start_date:{type:String,required:!1}},setup(C){const s=C,b=g([]),v=g([]),i=g([]),m=g([]),w=g(!1),c=g(null),h={perDay:"perDay",perPeriod:"perPeriod"},P=g(h.perDay),y=g({price:0,availability:0,start_date:"",end_date:"",priceOrAvailability:"precio"}),J=e=>{e&&!b.value.includes(e)&&b.value.push(e)},H=e=>{e&&!v.value.includes(e)&&v.value.push(e)},I=(e,a,r)=>{let o={};z(e.id)?i.value=i.value.map(l=>(l.id==e.id&&(l.price=a),l)):(o={...e,price:a},i.value=[...i.value,o]),b.value[r]&&b.value[r].classList.add("dark:bg-indigo-600","bg-indigo-100"),S(o.id,a,o.availability)&&(i.value=i.value.filter(l=>l.id!=e.id),b.value[r].classList.remove("dark:bg-indigo-600","bg-indigo-100"))},M=(e,a,r)=>{let o={};z(e.id)||(o={...e,availability:a},i.value=[...i.value,o]),v.value[r]&&v.value[r].classList.add("dark:bg-indigo-600","bg-indigo-100"),S(o.id,o.price,a)&&(i.value=i.value.filter(l=>l.id!=e.id),v.value[r].classList.remove("dark:bg-indigo-600","bg-indigo-100"))},S=(e,a,r)=>!!s.rate.find(o=>o.id==e&&o.price==a&&o.availability==r),z=e=>!!i.value.find(a=>a.id==e),D=e=>k.fromFormat(e,"yyyy-LL-dd"),Q=e=>D(e)<=k.local(),R=e=>e==k.local().toFormat("yyyy-LL-dd"),X=e=>D(e).plus({days:7}).toFormat("yyyy-LL-dd"),Z=e=>D(e).minus({days:7}).toFormat("yyyy-LL-dd"),E=()=>k.local().toFormat("yyyy-LL-dd"),ee=([e,a])=>{const r=e.getDate(),o=e.getMonth()+1,l=e.getFullYear();let V,$,O;return a?(V=a.getDate(),$=a.getMonth()+1,O=a.getFullYear()):(V=e.getDate(),$=e.getMonth()+1,O=e.getFullYear()),`${r}/${o}/${l} - ${V}/${$}/${O}`},te=()=>{const e=k.fromJSDate(m.value[0]).toFormat("yyyy-LL-dd"),a=k.fromJSDate(m.value[1]).toFormat("yyyy-LL-dd");y.value={...y.value,start_date:e,end_date:a},ae.post(route("distribution.update.period",{roomId:s.room.id}),{data:y.value}).then(r=>{oe.reload({only:["rate"]}),w.value=!0,y.value={price:0,availability:0,start_date:"",end_date:"",priceOrAvailability:"precio"},m.value=[],c.value.classList.contains("right-1")?(c.value.classList.remove("right-1"),c.value.classList.add("left-1")):(c.value.classList.remove("left-1"),c.value.classList.add("right-1"))}).catch(r=>{console.log(r)})};function K(e){y.value.priceOrAvailability=e,c.value.classList.contains("right-1")?(c.value.classList.remove("right-1"),c.value.classList.add("left-1")):(c.value.classList.remove("left-1"),c.value.classList.add("right-1"))}function U(e){if(e==P.value)return null;P.value=e}function T(e){return P.value==e}return(e,a)=>(n(),u("div",null,[d(se,{show:w.value,onClose:a[1]||(a[1]=r=>w.value=!1)},{title:p(()=>[x(" Operación exitosa ")]),content:p(()=>[x(" La actulalización de la distribución se ha realizado con éxito. ")]),footer:p(()=>[d(W,{onClick:a[0]||(a[0]=r=>w.value=!1)},{default:p(()=>[x(" Entendido ")]),_:1})]),_:1},8,["show"]),t("div",ne,[t("section",ue,[t("h1",ce,f(s.room.name),1)]),t("section",null,[t("div",null,[t("nav",ye,[t("span",{onClick:a[2]||(a[2]=r=>U(h.perDay)),class:A([T(h.perDay)?"border-b-2 font-bold border-indigo-500 text-indigo-500":"","cursor-pointer text-gray-600 py-4 px-6 block hover:text-indigo-500 focus:outline-none"])}," actulalización por dia ",2),t("span",{onClick:a[3]||(a[3]=r=>U(h.perPeriod)),class:A([T(h.perPeriod)?"border-b-2 font-bold border-indigo-500 text-indigo-500":"","cursor-pointer text-gray-600 py-4 px-6 block hover:text-indigo-500 focus:outline-none"])}," actulalización por periodo ",2)])])]),t("section",null,[i.value.length>0?(n(),u("div",be,[t("h2",pe,[x(" Se modificaran "+f(i.value.length)+" elementos! ",1),d(_(L),{href:e.route("distribution.update.multiple"),data:{data:i.value},method:"POST",as:"button",class:"text-base bg-sky-500 p-2 rounded-lg font-bold hover:bg-sky-600 duration-200 outline-white text-white"},{default:p(()=>[x("Guardar "+f(i.value.length)+" cambios!",1)]),_:1},8,["href","data"])])])):G("",!0)]),T(h.perPeriod)?(n(),u("div",fe,[ge,ve,t("div",me,[t("div",he,[t("button",{onClick:a[4]||(a[4]=r=>K("precio"))},"Precio")]),t("div",xe,[t("button",{onClick:a[5]||(a[5]=r=>K("disponibilidad"))},"Disponibilidad")]),t("span",{ref_key:"switchPriceOrAvailability",ref:c,class:"elSwitch bg-sky-500 shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute left-1"},f(y.value.priceOrAvailability),513)]),t("div",_e,[t("div",ke,[d(j,{for:"datePicker",value:"Fechas a modificar"}),d(_(le),{class:"mt-2",format:ee,modelValue:m.value,"onUpdate:modelValue":a[6]||(a[6]=r=>m.value=r),range:"",dark:_(ie)(),"multi-calendars":"",placeholder:"Seleccione un rango de fechas"},null,8,["modelValue","dark"])]),t("div",we,[y.value.priceOrAvailability=="precio"?(n(),u("div",Le,[d(j,{for:"periodPrice",value:"Precio"}),d(Y,{type:"number",id:"periodPrice",modelValue:y.value.price,"onUpdate:modelValue":a[7]||(a[7]=r=>y.value.price=r),class:"mt-1 w-full"},null,8,["modelValue"])])):(n(),u("div",Ce,[d(j,{for:"PeriodAvailability",value:"Disponibilidad"}),d(Y,{type:"number",id:"PeriodAvailability",modelValue:y.value.availability,"onUpdate:modelValue":a[8]||(a[8]=r=>y.value.availability=r),class:"mt-1 block w-full"},null,8,["modelValue"])]))]),t("div",Pe,[d(W,{onClick:te},{default:p(()=>[x("Guardar los cambios")]),_:1})])])])):G("",!0),t("div",null,[t("section",null,[t("div",De,[t("div",Te,[d(_(L),{as:"button",disabled:Q(s.start_date),href:e.route("distribution.getByRoomId",{roomId:s.room.id,date:Z(s.start_date)}),only:["rate","start_date"],class:"min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-l-xl hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out border-y-2 border-l-2 flex justify-center items-center",preserveScroll:""},{default:p(()=>[Ve]),_:1},8,["disabled","href"]),d(_(L),{as:"button",disabled:R(s.start_date),href:e.route("distribution.getByRoomId",{roomId:s.room.id,date:E()}),only:["rate","start_date"],class:"min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-none hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out border-2 border-x-sky-300 text-center flex justify-center items-center",preserveScroll:""},{default:p(()=>[$e]),_:1},8,["disabled","href"]),d(_(L),{href:e.route("distribution.getByRoomId",{roomId:s.room.id,date:X(s.start_date)}),only:["rate","start_date"],class:"min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-r-xl hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden border-y-2 border-r-2 flex justify-center items-center",preserveScroll:""},{default:p(()=>[Oe]),_:1},8,["href"])])])]),t("div",Ae,[t("table",Be,[t("thead",null,[t("tr",null,[Fe,(n(!0),u(B,null,F(s.rate,r=>(n(),u("th",{class:A(["px-4 py-1 font-bold text-gray-500 dark:text-gray-400 text-center min-w-[5.5rem]",r.day_name=="Dom"||r.day_name=="Sáb"?"dark:bg-gray-700 bg-gray-200":""])},[t("span",null,f(R(r.date)?"Hoy":r.day_name),1),t("span",je,f(r.day),1),t("span",Ie,f(r.month_name),1)],2))),256))])]),t("tbody",Me,[t("tr",Se,[ze,(n(!0),u(B,null,F(s.rate,(r,o)=>(n(),u("td",{key:r.id,ref_for:!0,ref:H,class:"px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},[t("span",{contenteditable:"",onKeydown:N(q(l=>M(r,l.target.textContent,o),["prevent","stop"]),["enter"]),onBlur:l=>M(r,l.target.textContent,o)},f(r.availability),41,Re)]))),128))]),t("tr",Ke,[Ue,(n(!0),u(B,null,F(s.rate,(r,o)=>(n(),u("td",{key:r.id,ref_for:!0,ref:J,class:"px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700 cursor-text"},[t("span",{contenteditable:"",onKeydown:N(q(l=>I(r,l.target.textContent,o),["prevent","stop"]),["enter"]),onBlur:l=>I(r,l.target.textContent,o)},f(r.price),41,Ge)]))),128))])])])])])])]))}};export{Qe as default};
