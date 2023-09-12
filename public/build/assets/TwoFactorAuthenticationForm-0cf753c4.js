import{d as p,B as H,o as t,e as a,a as l,r as N,b as s,w as o,g as r,t as C,P as B,n as x,q as D,v as O,k as Q,D as Y,c as h,u as v,f as u,F as I,h as U,K as z,O as A}from"./app-c02374f4.js";import{_ as G}from"./ActionSection-7846d1de.js";import{a as J}from"./DialogModal-18a1793d.js";import{_ as R,a as q}from"./TextInput-8960e2bd.js";import{_ as $}from"./PrimaryButton-701b663f.js";import{_ as S}from"./SecondaryButton-32fd076d.js";import{_ as W}from"./DangerButton-12995872.js";import{_ as j}from"./InputLabel-ca660a31.js";import"./SectionTitle-fc3a857f.js";import"./_plugin-vue_export-helper-c27b6911.js";const X={class:"mt-4"},g={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(w,{emit:k}){const c=p(!1),e=H({password:"",error:"",processing:!1}),i=p(null),y=()=>{axios.get(route("password.confirmation")).then(n=>{n.data.confirmed?k("confirmed"):(c.value=!0,setTimeout(()=>i.value.focus(),250))})},_=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,d(),D().then(()=>k("confirmed"))}).catch(n=>{e.processing=!1,e.error=n.response.data.errors.password[0],i.value.focus()})},d=()=>{c.value=!1,e.password="",e.error=""};return(n,m)=>(t(),a("span",null,[l("span",{onClick:y},[N(n.$slots,"default")]),s(J,{show:c.value,onClose:d},{title:o(()=>[r(C(w.title),1)]),content:o(()=>[r(C(w.content)+" ",1),l("div",X,[s(R,{ref_key:"passwordInput",ref:i,modelValue:e.password,"onUpdate:modelValue":m[0]||(m[0]=T=>e.password=T),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:B(_,["enter"])},null,8,["modelValue","onKeyup"]),s(q,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[s(S,{onClick:d},{default:o(()=>[r(" Cancel ")]),_:1}),s($,{class:x(["ml-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:_},{default:o(()=>[r(C(w.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},Z={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},ee={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},te={key:2,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},oe=l("div",{class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[l("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),ae={key:3},se={key:0},re={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ne={key:0,class:"font-semibold"},le={key:1},ce=["innerHTML"],ie={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ue={class:"font-semibold"},de=["innerHTML"],me={key:1,class:"mt-4"},fe={key:1},pe=l("div",{class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[l("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),_e={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 rounded-lg"},ve={class:"mt-5"},ye={key:0},he={key:1},Ke={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(w){const k=w,c=p(!1),e=p(!1),i=p(!1),y=p(null),_=p(null),d=p([]),n=O({code:""}),m=Q(()=>{var f;return!c.value&&((f=z().props.auth.user)==null?void 0:f.two_factor_enabled)});Y(m,()=>{m.value||(n.reset(),n.clearErrors())});const T=()=>{c.value=!0,A.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([L(),M(),F()]),onFinish:()=>{c.value=!1,e.value=k.requiresConfirmation}})},L=()=>axios.get(route("two-factor.qr-code")).then(f=>{y.value=f.data.svg}),M=()=>axios.get(route("two-factor.secret-key")).then(f=>{_.value=f.data.secretKey}),F=()=>axios.get(route("two-factor.recovery-codes")).then(f=>{d.value=f.data}),K=()=>{n.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,y.value=null,_.value=null}})},E=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>F())},V=()=>{i.value=!0,A.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{i.value=!1,e.value=!1}})};return(f,P)=>(t(),h(G,null,{title:o(()=>[r(" Two Factor Authentication ")]),description:o(()=>[r(" Add additional security to your account using two factor authentication. ")]),content:o(()=>[v(m)&&!e.value?(t(),a("h3",Z," You have enabled two factor authentication. ")):v(m)&&e.value?(t(),a("h3",ee," Finish enabling two factor authentication. ")):(t(),a("h3",te," You have not enabled two factor authentication. ")),oe,v(m)?(t(),a("div",ae,[y.value?(t(),a("div",se,[l("div",re,[e.value?(t(),a("p",ne," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(t(),a("p",le," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),l("div",{class:"mt-4",innerHTML:y.value},null,8,ce),_.value?(t(),a("div",ie,[l("p",ue,[r(" Setup Key: "),l("span",{innerHTML:_.value},null,8,de)])])):u("",!0),e.value?(t(),a("div",me,[s(j,{for:"code",value:"Code"}),s(R,{id:"code",modelValue:v(n).code,"onUpdate:modelValue":P[0]||(P[0]=b=>v(n).code=b),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:B(K,["enter"])},null,8,["modelValue","onKeyup"]),s(q,{message:v(n).errors.code,class:"mt-2"},null,8,["message"])])):u("",!0)])):u("",!0),d.value.length>0&&!e.value?(t(),a("div",fe,[pe,l("div",_e,[(t(!0),a(I,null,U(d.value,b=>(t(),a("div",{key:b},C(b),1))),128))])])):u("",!0)])):u("",!0),l("div",ve,[v(m)?(t(),a("div",he,[s(g,{onConfirmed:K},{default:o(()=>[e.value?(t(),h($,{key:0,type:"button",class:x(["mr-3",{"opacity-25":c.value}]),disabled:c.value},{default:o(()=>[r(" Confirm ")]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),s(g,{onConfirmed:E},{default:o(()=>[d.value.length>0&&!e.value?(t(),h(S,{key:0,class:"mr-3"},{default:o(()=>[r(" Regenerate Recovery Codes ")]),_:1})):u("",!0)]),_:1}),s(g,{onConfirmed:F},{default:o(()=>[d.value.length===0&&!e.value?(t(),h(S,{key:0,class:"mr-3"},{default:o(()=>[r(" Show Recovery Codes ")]),_:1})):u("",!0)]),_:1}),s(g,{onConfirmed:V},{default:o(()=>[e.value?(t(),h(S,{key:0,class:x({"opacity-25":i.value}),disabled:i.value},{default:o(()=>[r(" Cancel ")]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),s(g,{onConfirmed:V},{default:o(()=>[e.value?u("",!0):(t(),h(W,{key:0,class:x({"opacity-25":i.value}),disabled:i.value},{default:o(()=>[r(" Disable ")]),_:1},8,["class","disabled"]))]),_:1})])):(t(),a("div",ye,[s(g,{onConfirmed:T},{default:o(()=>[s($,{type:"button",class:x({"opacity-25":c.value}),disabled:c.value},{default:o(()=>[r(" Enable ")]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Ke as default};
