import{k as d,l as n,m as u,u as l,o as i,e as p,p as k}from"./app-533d2c4b.js";const g=["value"],h={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(a,{emit:t}){const s=a,e=d({get(){return s.checked},set(o){t("update:checked",o)}});return(o,r)=>n((i(),p("input",{"onUpdate:modelValue":r[0]||(r[0]=c=>k(e)?e.value=c:null),type:"checkbox",value:a.value,class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,g)),[[u,l(e)]])}};export{h as _};