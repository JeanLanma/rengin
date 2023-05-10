import{d as v,D as X,o as n,e as u,b as d,w as f,a as t,t as g,g as p,u as x,l as Z,B as E,F as D,h as A,x as ee,O as te,j as w,n as ae,y as K,i as z}from"./app-0c2c472c.js";import{D as _,h as oe,G as re}from"./datetime-d9c48780.js";import{_ as j}from"./InputLabel-e7d05cf7.js";import{a as se}from"./DialogModal-0d3736af.js";import{O as B}from"./OutlinedButton-5cd79af8.js";import"./_plugin-vue_export-helper-c27b6911.js";const ie=["value"],q={__name:"AppInput",props:["modelValue"],emits:["update:modelValue"],setup(L,{expose:l}){const b=v(null);return X(()=>{b.value.hasAttribute("autofocus")&&b.value.focus()}),l({focus:()=>b.value.focus()}),(m,s)=>(n(),u("input",{ref_key:"input",ref:b,class:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",value:L.modelValue,onInput:s[0]||(s[0]=h=>m.$emit("update:modelValue",h.target.value))},null,40,ie))}};const le={class:"p-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700"},de={class:"sm:flex sm:justify-between"},ne={class:"text-4xl font-bold text-gray-900 dark:text-white mb-4"},ue={key:0},ce={class:"text-xl text-gray-900 dark:text-white mb-4"},ye={key:1},be={class:"text-xl text-gray-900 dark:text-white mb-4"},fe={class:"scale-up-center box-shadow my-8 dark:bg-gray-700 bg-gray-200 py-8 px-4 rounded"},ve=t("h2",{class:"text-2xl text-gray-900 dark:text-white mb-4 font-bold"},"Seleccione un rango de fechas para modificar",-1),ge=t("h4",{class:"text-white font-bold"},"Tipo de actulalización ",-1),pe={class:"mx-8 max-w-sm shadow rounded-full h-10 mt-4 flex p-1 relative items-center dark:bg-gray-800 bg-gray-50"},me={class:"w-full flex justify-center dark:text-white"},he={class:"w-full flex justify-center dark:text-white"},xe={class:"flex justify-around items-baseline xl:items-center flex-wrap"},_e={class:"w-full md:w-96"},ke={class:"flex"},we={key:0,class:"full"},Le={key:1,class:"w-full"},Ce={class:"mr-auto xl:mr-0 mt-4"},Oe={class:"text-slate-50 font-bold text-xl flex gap-4 rounded-xl p-2"},Pe={class:"flex p-2 w-full max-w-md justify-center space-x-0"},Ve=t("button",{innerText:"<<"},null,-1),$e=t("button",{innerText:"Today"},null,-1),De=t("button",{innerText:">>"},null,-1),Ae={class:"text-white border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-auto",id:"thin-scroll"},je={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer box-shadow"},Be=t("th",{class:"px-4 py-1 font-bold text-gray-500 dark:text-gray-400 text-center"},[t("span",{class:"font-bold block text-xl"}," ")],-1),Fe={class:"font-bold block text-2xl"},Te={class:"text-sm font-normal"},Se={class:"bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"},Ie={class:"dark:hover:bg-gray-600 hover:bg-gray-100"},Me=t("th",{class:"px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center text-sm whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},[t("span",null,"Disponibles")],-1),Re=["onKeydown","onBlur"],Ke={class:"dark:hover:bg-gray-600 hover:bg-gray-100"},ze=t("th",{class:"px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center text-sm whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},[t("span",null,"Precio")],-1),qe=["onKeydown","onBlur"],He={__name:"RateTable",props:{rate:{type:Object,required:!0},room:{type:Object,required:!0},start_date:{type:String,required:!1}},setup(L){const l=L,b=v([]),m=v([]),s=v([]),h=v([]),k=v(!1),c=v(null),C=v(!1),y=v({price:0,availability:0,start_date:"",end_date:"",priceOrAvailability:"precio"}),G=e=>{e&&!b.value.includes(e)&&b.value.push(e)},N=e=>{e&&!m.value.includes(e)&&m.value.push(e)},F=(e,o,a)=>{let r={};I(e.id)?s.value=s.value.map(i=>(i.id==e.id&&(i.price=o),i)):(r={...e,price:o},s.value=[...s.value,r]),b.value[a]&&b.value[a].classList.add("dark:bg-indigo-600","bg-indigo-100"),S(r.id,o,r.availability)&&(s.value=s.value.filter(i=>i.id!=e.id),b.value[a].classList.remove("dark:bg-indigo-600","bg-indigo-100"))},T=(e,o,a)=>{let r={};I(e.id)||(r={...e,availability:o},s.value=[...s.value,r]),m.value[a]&&m.value[a].classList.add("dark:bg-indigo-600","bg-indigo-100"),S(r.id,r.price,o)&&(s.value=s.value.filter(i=>i.id!=e.id),m.value[a].classList.remove("dark:bg-indigo-600","bg-indigo-100"))},S=(e,o,a)=>!!l.rate.find(r=>r.id==e&&r.price==o&&r.availability==a),I=e=>!!s.value.find(o=>o.id==e),O=e=>_.fromFormat(e,"yyyy-LL-dd"),U=e=>O(e)<=_.local(),M=e=>e==_.local().toFormat("yyyy-LL-dd"),W=e=>O(e).plus({days:7}).toFormat("yyyy-LL-dd"),Y=e=>O(e).minus({days:7}).toFormat("yyyy-LL-dd"),J=()=>_.local().toFormat("yyyy-LL-dd"),H=([e,o])=>{const a=e.getDate(),r=e.getMonth()+1,i=e.getFullYear();let P,V,$;return o?(P=o.getDate(),V=o.getMonth()+1,$=o.getFullYear()):(P=e.getDate(),V=e.getMonth()+1,$=e.getFullYear()),`${a}/${r}/${i} - ${P}/${V}/${$}`},Q=()=>{const e=_.fromJSDate(h.value[0]).toFormat("yyyy-LL-dd"),o=_.fromJSDate(h.value[1]).toFormat("yyyy-LL-dd");y.value={...y.value,start_date:e,end_date:o},ee.post(route("distribution.update.period",{roomId:l.room.id}),{data:y.value}).then(a=>{te.reload({only:["rate"]}),k.value=!0,y.value={price:0,availability:0,start_date:"",end_date:"",priceOrAvailability:"precio"},h.value=[],c.value.classList.contains("right-1")?(c.value.classList.remove("right-1"),c.value.classList.add("left-1")):(c.value.classList.remove("left-1"),c.value.classList.add("right-1"))}).catch(a=>{console.log(a)})};function R(e){y.value.priceOrAvailability=e,c.value.classList.contains("right-1")?(c.value.classList.remove("right-1"),c.value.classList.add("left-1")):(c.value.classList.remove("left-1"),c.value.classList.add("right-1"))}return(e,o)=>(n(),u("div",null,[d(se,{show:k.value,onClose:o[1]||(o[1]=a=>k.value=!1)},{title:f(()=>[p(" Operación exitosa ")]),content:f(()=>[p(" La actulalización de la distribución se ha realizado con éxito. ")]),footer:f(()=>[d(B,{onClick:o[0]||(o[0]=a=>k.value=!1)},{default:f(()=>[p(" Entendido ")]),_:1})]),_:1},8,["show"]),t("div",le,[t("section",de,[t("h1",ne,g(l.room.name),1)]),t("section",null,[s.value.length>0?(n(),u("div",ue,[t("h2",ce,[p(" Se modificaran "+g(s.value.length)+" elementos! ",1),d(x(w),{href:e.route("distribution.update.multiple"),data:{data:s.value},method:"POST",as:"button",class:"text-base bg-sky-500 p-2 rounded-lg font-bold hover:bg-sky-600 duration-200 outline-white text-white"},{default:f(()=>[p("Aceptar")]),_:1},8,["href","data"])])])):(n(),u("div",ye,[t("h2",be,[p("Modifica los precios y disponibilidad en la tabla de abajo o "),d(B,{onClick:o[2]||(o[2]=a=>C.value=!C.value),class:"text-base border-2 border-sky-500 p-1 rounded-lg hover:bg-sky-600 duration-200 outline-white text-sky-400 hover:text-white"},{default:f(()=>[p("Selecciona un periodo")]),_:1})])])),Z(t("div",fe,[ve,ge,t("div",pe,[t("div",me,[t("button",{onClick:o[3]||(o[3]=a=>R("precio"))},"Precio")]),t("div",he,[t("button",{onClick:o[4]||(o[4]=a=>R("disponibilidad"))},"Disponibilidad")]),t("span",{ref_key:"switchPriceOrAvailability",ref:c,class:"elSwitch bg-sky-500 shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute left-1"},g(y.value.priceOrAvailability),513)]),t("div",xe,[t("div",_e,[d(j,{for:"datePicker",value:"Fechas a modificar"}),d(x(re),{class:"mt-2",format:H,modelValue:h.value,"onUpdate:modelValue":o[5]||(o[5]=a=>h.value=a),range:"",dark:x(oe)(),"multi-calendars":"",placeholder:"Seleccione un rango de fechas"},null,8,["modelValue","dark"])]),t("div",ke,[y.value.priceOrAvailability=="precio"?(n(),u("div",we,[d(j,{for:"periodPrice",value:"Precio"}),d(q,{type:"number",id:"periodPrice",modelValue:y.value.price,"onUpdate:modelValue":o[6]||(o[6]=a=>y.value.price=a),class:"mt-1 block w-full"},null,8,["modelValue"])])):(n(),u("div",Le,[d(j,{for:"PeriodAvailability",value:"Disponibilidad"}),d(q,{type:"number",id:"PeriodAvailability",modelValue:y.value.availability,"onUpdate:modelValue":o[7]||(o[7]=a=>y.value.availability=a),class:"mt-1 block w-full"},null,8,["modelValue"])]))]),t("div",Ce,[d(B,{onClick:Q},{default:f(()=>[p("Guardar los cambios")]),_:1})])])],512),[[E,C.value]])]),t("section",null,[t("div",Oe,[t("div",Pe,[d(x(w),{as:"button",disabled:U(l.start_date),href:e.route("distribution.getByRoomId",{roomId:l.room.id,date:Y(l.start_date)}),only:["rate","start_date"],class:"min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-l-xl hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out border-y-2 border-l-2 flex justify-center items-center",preserveScroll:""},{default:f(()=>[Ve]),_:1},8,["disabled","href"]),d(x(w),{as:"button",disabled:M(l.start_date),href:e.route("distribution.getByRoomId",{roomId:l.room.id,date:J()}),only:["rate","start_date"],class:"min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-none hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out border-2 border-x-sky-300 text-center flex justify-center items-center",preserveScroll:""},{default:f(()=>[$e]),_:1},8,["disabled","href"]),d(x(w),{href:e.route("distribution.getByRoomId",{roomId:l.room.id,date:W(l.start_date)}),only:["rate","start_date"],class:"min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-r-xl hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden border-y-2 border-r-2 flex justify-center items-center",preserveScroll:""},{default:f(()=>[De]),_:1},8,["href"])])])]),t("div",Ae,[t("table",je,[t("thead",null,[t("tr",null,[Be,(n(!0),u(D,null,A(l.rate,a=>(n(),u("th",{class:ae(["px-4 py-1 font-bold text-gray-500 dark:text-gray-400 text-center min-w-[5.5rem]",a.day_name=="Dom"||a.day_name=="Sáb"?"dark:bg-gray-700 bg-gray-200":""])},[t("span",null,g(M(a.date)?"Hoy":a.day_name),1),t("span",Fe,g(a.day),1),t("span",Te,g(a.month_name),1)],2))),256))])]),t("tbody",Se,[t("tr",Ie,[Me,(n(!0),u(D,null,A(l.rate,(a,r)=>(n(),u("td",{key:a.id,ref_for:!0,ref:N,class:"px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},[t("span",{contenteditable:"",onKeydown:K(z(i=>T(a,i.target.textContent,r),["prevent","stop"]),["enter"]),onBlur:i=>T(a,i.target.textContent,r)},g(a.availability),41,Re)]))),128))]),t("tr",Ke,[ze,(n(!0),u(D,null,A(l.rate,(a,r)=>(n(),u("td",{key:a.id,ref_for:!0,ref:G,class:"px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700 cursor-text"},[t("span",{contenteditable:"",onKeydown:K(z(i=>F(a,i.target.textContent,r),["prevent","stop"]),["enter"]),onBlur:i=>F(a,i.target.textContent,r)},g(a.price),41,qe)]))),128))])])])])])]))}};export{He as default};