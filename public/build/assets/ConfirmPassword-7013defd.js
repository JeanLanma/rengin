import{v as m,d,e as c,b as a,u as e,w as r,F as u,o as p,X as f,a as o,n as _,g as w,i as g}from"./app-c8fcff27.js";import{A as b}from"./AuthenticationCard-018806a2.js";import{_ as h}from"./AuthenticationCardLogo-387c44c7.js";import{_ as x,a as v}from"./TextInput-cf22eb95.js";import{_ as y}from"./InputLabel-a5d6b4c5.js";import{_ as V}from"./PrimaryButton-683e122b.js";import"./_plugin-vue_export-helper-c27b6911.js";const k=o("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C=["onSubmit"],$={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup(A){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(B,i)=>(p(),c(u,null,[a(e(f),{title:"Secure Area"}),a(b,null,{logo:r(()=>[a(h)]),default:r(()=>[k,o("form",{onSubmit:g(n,["prevent"])},[o("div",null,[a(y,{for:"password",value:"Password"}),a(x,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(v,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),o("div",$,[a(V,{class:_(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,C)]),_:1})],64))}};export{q as default};
