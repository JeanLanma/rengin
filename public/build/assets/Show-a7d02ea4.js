import{_ as d}from"./AppLayout-c6e606c2.js";import{B as m}from"./BreadCrumbArrow-09b4c429.js";import n from"./RateTable-5c7de4f0.js";import{c,w as r,o as p,a as e,b as a,g as o,u as _,j as l,t as u}from"./app-0642a925.js";import"./ResponsiveNavLink-b715294a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./datetime-0bd50b74.js";import"./InputLabel-1233a565.js";import"./DialogModal-14603d1d.js";import"./OutlinedButton-63763bb7.js";const f={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},h={class:"py-12"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},g={class:"bg-white dark:bg-gray-800 shadow-xl sm:rounded-lg"},C={__name:"Show",props:{rate:{type:Object,required:!0},room:{type:Object,required:!0},start_date:{type:String,required:!1}},setup(s){const t=s;return(i,b)=>(p(),c(d,{title:"Reservaciones"},{header:r(()=>[e("h2",f,[a(_(l),{href:i.route("distribution.index"),class:"hover:underline"},{default:r(()=>[o("Tarifas")]),_:1},8,["href"]),a(m),o(" "+u(t.room.name),1)])]),default:r(()=>[e("div",h,[e("div",x,[e("div",g,[a(n,{rate:t.rate,room:t.room,start_date:t.start_date},null,8,["rate","room","start_date"])])])])]),_:1}))}};export{C as default};
