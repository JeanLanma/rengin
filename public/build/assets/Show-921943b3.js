import{_ as o}from"./AppLayout-a81f109e.js";import s from"./RateTable-81cf969f.js";import{c as i,w as r,o as d,a as e,t as m,b as c}from"./app-0c2c472c.js";import"./ResponsiveNavLink-8af38bf1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./datetime-d9c48780.js";import"./InputLabel-e7d05cf7.js";import"./DialogModal-0d3736af.js";import"./OutlinedButton-5cd79af8.js";const _={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},p={class:"py-12"},n={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},l={class:"bg-white dark:bg-gray-800 shadow-xl sm:rounded-lg"},B={__name:"Show",props:{rate:{type:Object,required:!0},room:{type:Object,required:!0},start_date:{type:String,required:!1}},setup(a){const t=a;return(u,x)=>(d(),i(o,{title:"Reservaciones"},{header:r(()=>[e("h2",_," Tarifas de "+m(t.room.name),1)]),default:r(()=>[e("div",p,[e("div",n,[e("div",l,[c(s,{rate:t.rate,room:t.room,start_date:t.start_date},null,8,["rate","room","start_date"])])])])]),_:1}))}};export{B as default};
