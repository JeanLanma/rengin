import{v as u,e as i,b as e,u as t,w as o,F as c,o as m,X as f,t as _,f as p,a,n as g,g as w,i as x}from"./app-cabbd078.js";import{A as y}from"./AuthenticationCard-7aed0a00.js";import{_ as b}from"./AuthenticationCardLogo-7d3c233c.js";import{_ as k,a as h}from"./TextInput-5d22832b.js";import{_ as v}from"./InputLabel-0bb03471.js";import{_ as V}from"./PrimaryButton-5723b8cb.js";import"./_plugin-vue_export-helper-c27b6911.js";const F=a("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},D={__name:"ForgotPassword",props:{status:String},setup(r){const s=u({email:""}),n=()=>{s.post(route("password.email"))};return(S,l)=>(m(),i(c,null,[e(t(f),{title:"Forgot Password"}),e(y,null,{logo:o(()=>[e(b)]),default:o(()=>[F,r.status?(m(),i("div",N,_(r.status),1)):p("",!0),a("form",{onSubmit:x(n,["prevent"])},[a("div",null,[e(v,{for:"email",value:"Email"}),e(k,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":l[0]||(l[0]=d=>t(s).email=d),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(h,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),a("div",C,[e(V,{class:g({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{D as default};
