import{_ as n}from"./AppLayout-75a42c9d.js";import{S as l}from"./SectionBorder-2bea1609.js";import d from"./EditRoomForm-f7f26174.js";import p from"./UploadRoomImageForm-c856ac86.js";import{c as a,w as i,o as e,a as t,e as c,b as s,f as m}from"./app-90f30f81.js";import"./ResponsiveNavLink-4fe8f99d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ActionMessage-5c780f61.js";import"./FormSection-6db81b54.js";import"./SectionTitle-4f5c603e.js";import"./TextInput-4919d74e.js";import"./InputLabel-46696b1b.js";import"./PrimaryButton-1b8e88c6.js";import"./SecondaryButton-fdc396da.js";import"./Dropzone-7226770c.js";import"./Tooltip-caa9d9a2.js";const f={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight inline hover:underline"},_=["href"],h=t("svg",{class:"w-6 h-6 text-gray-400 inline",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),u=t("h3",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight inline"},"Editar",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},g={key:0},z={__name:"Edit",props:{room:Object},setup(r){return(o,v)=>(e(),a(n,{title:"Habitaciones"},{header:i(()=>[t("div",null,[t("h2",f,[t("a",{href:o.route("rooms.index")},"Habitaciones",8,_)]),h,u])]),default:i(()=>[t("div",null,[t("div",x,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),c("div",g,[s(d,{room:r.room},null,8,["room"]),s(l)])):m("",!0),o.$page.props.jetstream.canUpdateProfileInformation?(e(),a(p,{key:1,room:r.room},null,8,["room"])):m("",!0)])])]),_:1}))}};export{z as default};