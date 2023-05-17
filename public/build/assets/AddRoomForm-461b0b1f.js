import{d as b,k as B,l as w,V,u as s,o as k,e as N,p as g,v as z,c as C,w as m,g as f,a as t,b as a,i as h,D as I,n as M}from"./app-ad1fa36a.js";import{_ as U}from"./ActionMessage-319f2c07.js";import{_ as F}from"./FormSection-23359fe7.js";import{a as u,_}from"./TextInput-ee820ed5.js";import{_ as d}from"./InputLabel-c17f969f.js";import{_ as A}from"./PrimaryButton-aa2b3395.js";import{_ as D}from"./SecondaryButton-cb052c90.js";import R from"./Dropzone-f8ae16c7.js";import{_ as x}from"./Tooltip-fb66ac70.js";import"./SectionTitle-a3081bfb.js";import"./_plugin-vue_export-helper-c27b6911.js";const E={__name:"FormNumberInput",setup(S){let e=b(""),c=b(!1),i=B({get:()=>c.value?Number(e.value).toFixed(2):e.value,set:v=>{const l=v.replace(/[^\d.]/g,""),n=l.indexOf(".");n>=0&&l.indexOf(".",n+1)>=0?e.value=l.slice(0,n+1)+l.slice(n+1).replace(/\./g,""):e.value=l}});return(v,l)=>w((k(),N("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=n=>g(i)?i.value=n:i=n),onBlur:l[1]||(l[1]=n=>g(c)?c.value=!0:c=!0),onFocus:l[2]||(l[2]=n=>g(c)?c.value=!1:c=!1)},null,544)),[[V,s(i)]])}},O={class:"col-span-6 sm:col-span-4"},T={class:"flex"},H=t("div",{class:"tooltip group text-white relative whitespace-nowrap"},[t("svg",{class:"fill-white w-6 ml-4 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("path",{d:"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm168-72c0-30.9 25.1-56 56-56h56.9c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4V272v24H232V272 250.5 236.6l12.1-6.9 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H224c-4.4 0-8 3.6-8 8l0 6.5-48 0V184zm64 152h48v48H232V336z"})]),t("span",{class:"after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-mr-1 after:border-[5px] after:border-solid after:border-b-2-transparent after:border-t-transparent after:border-r-transparent after:border-l-transparent tooltiptext invisible group-hover:visible absolute top-[125%] left-1/2 -translate-x-1/2 w-max max-w-[17rem] px-4 py-1 bg-white text-black/60 rounded whitespace-pre-wrap"},"Esta sera la imagen Principal (tamaño maximo 2mb)")],-1),L={class:"mt-2"},j={class:"col-span-6 sm:col-span-4"},q={class:"flex"},X={class:"col-span-6 sm:col-span-4"},G={class:"flex"},J=t("br",null,null,-1),K={class:"col-span-6 sm:col-span-2"},Q={class:"col-span-6 sm:col-span-2"},W={class:"col-span-6 sm:col-span-4"},Y=t("br",null,null,-1),Z={class:"col-span-6 sm:col-span-4"},ee={class:"flex"},ae={class:"col-span-6 sm:col-span-4"},de={__name:"AddRoomForm",props:{user:Object},setup(S){const e=z({_method:"POST",type:"",name:"",description:"",base_capacity:"",max_capacity:"",base_price:"0.00",cover:""}),c=b(null),i=b(null),v=1024*1024*2,l=()=>{i.value&&i.value.files[0]&&(e.cover=i.value.files[0]),e.post(route("rooms.store"),{errorBag:"storeRoom",preserveScroll:!0,onSuccess:()=>P(),onError:p=>{alert("Error al guardar la habitación"),console.log(p)}})},n=()=>{i.value.click()},y=(p=null)=>{const o=i.value.files[0]??p;if(!o)return;if(o.size&&o.size>v)return alert("La imagen no puede ser mayor a 2MB");e.cover=o;const r=new FileReader;r.onload=$=>{c.value=$.target.result},r.readAsDataURL(o)},P=()=>{var p;(p=i.value)!=null&&p.value&&(i.value.value=null)};return(p,o)=>(k(),C(F,{onSubmitted:l},{title:m(()=>[f(" Información de la habitación ")]),description:m(()=>[f(" Agrega una nueva habitación. ")]),form:m(()=>[t("div",O,[t("input",{ref_key:"photoInput",ref:i,type:"file",class:"hidden",id:"cover",onChange:y},null,544),t("div",T,[a(d,{for:"photo",value:"Imagen Principal"}),H]),t("div",L,[a(R,{onClick:h(n,["prevent"]),onFileDropped:y,style:I(c.value?"background-image: url('"+c.value+"');":"")},null,8,["onClick","style"])]),a(D,{class:"mt-2 mr-2",type:"button",onClick:h(n,["prevent"])},{default:m(()=>[f(" Select A New Photo ")]),_:1},8,["onClick"]),a(u,{message:s(e).errors.cover,class:"mt-2"},null,8,["message"])]),t("div",j,[t("div",q,[a(d,{for:"name",value:"Nombre"}),a(x,{text:"El nombre que se mostrara al publico"})]),a(_,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),a(u,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),t("div",X,[t("div",G,[a(d,{for:"type",value:"Tipo"}),a(x,{text:"Nombre interno o referencia interna de la habitación, Sencilla, Doble Suite etc.."})]),a(_,{id:"type",modelValue:s(e).type,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).type=r),type:"text",class:"mt-1 block w-full",autocomplete:"type"},null,8,["modelValue"]),a(u,{message:s(e).errors.type,class:"mt-2"},null,8,["message"])]),J,t("div",K,[a(d,{for:"base_capacity",value:"Capacidad Base"}),a(_,{id:"base_capacity",modelValue:s(e).base_capacity,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).base_capacity=r),type:"text",class:"mt-1 block w-full",autocomplete:"base_capacity"},null,8,["modelValue"]),a(u,{message:s(e).errors.base_capacity,class:"mt-2"},null,8,["message"])]),t("div",Q,[a(d,{for:"max_capacity",value:"Capacidad Maxima"}),a(_,{id:"max_capacity",modelValue:s(e).max_capacity,"onUpdate:modelValue":o[3]||(o[3]=r=>s(e).max_capacity=r),type:"text",class:"mt-1 block w-full",autocomplete:"max_capacity"},null,8,["modelValue"]),a(u,{message:s(e).errors.max_capacity,class:"mt-2"},null,8,["message"])]),t("div",W,[a(d,{for:"description",value:"Descripción"}),w(t("textarea",{id:"description","onUpdate:modelValue":o[4]||(o[4]=r=>s(e).description=r),type:"description",class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",autocomplete:"description"},null,512),[[V,s(e).description]]),a(u,{message:s(e).errors.description,class:"mt-2"},null,8,["message"])]),Y,t("div",Z,[t("div",ee,[a(d,{for:"base_price",value:"Precio base"}),a(x,{text:"Precio para la distribución en MXN Sin Impuestos para la habitación"})]),a(_,{id:"base_price",modelValue:s(e).base_price,"onUpdate:modelValue":o[5]||(o[5]=r=>s(e).base_price=r),type:"text",class:"mt-1 block w-full",autocomplete:"base_price"},null,8,["modelValue"]),a(u,{message:s(e).errors.base_price,class:"mt-2"},null,8,["message"])]),t("div",ae,[a(E)])]),actions:m(()=>[a(U,{on:s(e).recentlySuccessful,class:"mr-3"},{default:m(()=>[f(" Saved. ")]),_:1},8,["on"]),a(A,{id:"save_room",class:M({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:m(()=>[f(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{de as default};
