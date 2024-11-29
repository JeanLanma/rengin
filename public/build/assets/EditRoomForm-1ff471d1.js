import{v as P,d as y,c as U,w as n,o as v,g as u,a as s,b as e,e as h,i as g,H as w,u as a,l as $,I as B,n as M}from"./app-c8fcff27.js";import{_ as N}from"./ActionMessage-5377e5e4.js";import{_ as E}from"./FormSection-b34f7f50.js";import{a as i,_ as d}from"./TextInput-cf22eb95.js";import{_ as c}from"./InputLabel-a5d6b4c5.js";import{_ as D}from"./PrimaryButton-683e122b.js";import{_ as I}from"./SecondaryButton-5b5fa324.js";import k from"./Dropzone-a363a657.js";import{_ as x}from"./Tooltip-c2eb99f4.js";import"./SectionTitle-c07110ea.js";import"./_plugin-vue_export-helper-c27b6911.js";const R={class:"col-span-6 sm:col-span-4"},A={class:"flex"},F=s("div",{class:"tooltip group text-white relative whitespace-nowrap"},[s("svg",{class:"fill-white w-6 ml-4 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("path",{d:"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm168-72c0-30.9 25.1-56 56-56h56.9c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4V272v24H232V272 250.5 236.6l12.1-6.9 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H224c-4.4 0-8 3.6-8 8l0 6.5-48 0V184zm64 152h48v48H232V336z"})]),s("span",{class:"after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-mr-1 after:border-[5px] after:border-solid after:border-b-2-transparent after:border-t-transparent after:border-r-transparent after:border-l-transparent tooltiptext invisible group-hover:visible absolute top-[125%] left-1/2 -translate-x-1/2 w-max max-w-[17rem] px-4 py-1 bg-white text-black/60 rounded whitespace-pre-wrap"},"Esta sera la imagen que salga primero")],-1),H={key:0,class:"mt-2"},T={key:1,class:"mt-2"},L={class:"col-span-6 sm:col-span-4"},q={class:"flex"},j={class:"col-span-6 sm:col-span-4"},O={class:"flex"},X=s("br",null,null,-1),G={class:"col-span-6 sm:col-span-2"},J={class:"col-span-6 sm:col-span-2"},K=s("br",{class:"hidden sm:block"},null,-1),Q={class:"col-span-6 sm:col-span-2"},W=s("br",{class:"hidden sm:block"},null,-1),Y={class:"col-span-6 sm:col-span-4"},Z=s("br",null,null,-1),ee={class:"hidden col-span-6 sm:col-span-4"},oe={class:"flex"},ue={__name:"EditRoomForm",props:{room:Object},setup(V){const r=V,o=P({_method:"PUT",type:r.room.type,name:r.room.name,description:r.room.description,base_capacity:r.room.base_capacity.toString(),max_capacity:r.room.max_capacity.toString(),base_price:r.room.base_price.toString(),cover:null,extra_person_price:r.room.extra_person_price}),_=y(null),p=y(null),S=1024*1024*2,C=()=>{p.value&&p.value.files[0]&&(o.cover=p.value.files[0]),o.post(route("rooms.update",{roomId:r.room.id}),{errorBag:"storeRoom",preserveScroll:!0,onSuccess:m=>{console.log(m)},onError:m=>{console.log(m)}})},f=()=>{p.value.click()},b=(m=null)=>{const t=p.value.files[0]??m;if(!t)return;if(t.size&&t.size>S)return alert("La imagen no puede ser mayor a 2MB");o.cover=t;const l=new FileReader;l.onload=z=>{_.value=z.target.result},l.readAsDataURL(t)};return console.log(r.room),(m,t)=>(v(),U(E,{onSubmitted:C},{title:n(()=>[u(" Información de la habitación ")]),description:n(()=>[u(" Edita una habitación. ")]),form:n(()=>[s("div",R,[s("input",{ref_key:"photoInput",ref:p,type:"file",class:"hidden",onChange:b},null,544),s("div",A,[e(c,{for:"photo",value:"Imagen Principal"}),F]),_.value?(v(),h("div",H,[e(k,{onClick:g(f,["prevent"]),onFileDropped:b,style:w(_.value?"background-image: url('"+_.value+"');":"")},null,8,["onClick","style"])])):(v(),h("div",T,[e(k,{onClick:g(f,["prevent"]),onFileDropped:b,style:w(r.room.cover?"background-image: url('/storage/"+r.room.cover+"');":"")},null,8,["onClick","style"])])),e(I,{class:"mt-2 mr-2",type:"button",onClick:g(f,["prevent"])},{default:n(()=>[u(" Select A New Photo ")]),_:1},8,["onClick"]),e(i,{message:a(o).errors.photo,class:"mt-2"},null,8,["message"])]),s("div",L,[s("div",q,[e(c,{for:"name",value:"Nombre"}),e(x,{text:"El nombre que se mostrara al publico"})]),e(d,{id:"name",modelValue:a(o).name,"onUpdate:modelValue":t[0]||(t[0]=l=>a(o).name=l),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),e(i,{message:a(o).errors.name,class:"mt-2"},null,8,["message"])]),s("div",j,[s("div",O,[e(c,{for:"type",value:"Tipo"}),e(x,{text:"Nombre interno o referencia interna de la habitación, Sencilla, Doble Suite etc.."})]),e(d,{id:"type",modelValue:a(o).type,"onUpdate:modelValue":t[1]||(t[1]=l=>a(o).type=l),type:"text",class:"mt-1 block w-full",autocomplete:"type"},null,8,["modelValue"]),e(i,{message:a(o).errors.type,class:"mt-2"},null,8,["message"])]),X,s("div",G,[e(c,{for:"base_capacity",value:"Capacidad Base"}),e(d,{id:"base_capacity",modelValue:a(o).base_capacity,"onUpdate:modelValue":t[2]||(t[2]=l=>a(o).base_capacity=l),type:"text",class:"mt-1 block w-full",autocomplete:"base_capacity"},null,8,["modelValue"]),e(i,{message:a(o).errors.base_capacity,class:"mt-2"},null,8,["message"])]),s("div",J,[e(c,{for:"max_capacity",value:"Capacidad Maxima"}),e(d,{id:"max_capacity",modelValue:a(o).max_capacity,"onUpdate:modelValue":t[3]||(t[3]=l=>a(o).max_capacity=l),type:"text",class:"mt-1 block w-full",autocomplete:"max_capacity"},null,8,["modelValue"]),e(i,{message:a(o).errors.max_capacity,class:"mt-2"},null,8,["message"])]),K,s("div",Q,[e(c,{for:"extra_person_price",value:"Precio por persona extra"}),e(d,{id:"extra_person_price",modelValue:a(o).extra_person_price,"onUpdate:modelValue":t[4]||(t[4]=l=>a(o).extra_person_price=l),type:"text",class:"mt-1 block w-full",autocomplete:"extra_person_price"},null,8,["modelValue"]),e(i,{message:a(o).errors.extra_person_price,class:"mt-2"},null,8,["message"])]),W,s("div",Y,[e(c,{for:"description",value:"Descripción"}),$(s("textarea",{id:"description","onUpdate:modelValue":t[5]||(t[5]=l=>a(o).description=l),type:"description",class:"mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",autocomplete:"description"},null,512),[[B,a(o).description]]),e(i,{message:a(o).errors.description,class:"mt-2"},null,8,["message"])]),Z,s("div",ee,[s("div",oe,[e(c,{for:"base_price",value:"Precio base"}),e(x,{text:"Este sera el precio en MXN minimo sin impuestos para el tipo de habitación"})]),e(d,{id:"base_price",modelValue:a(o).base_price,"onUpdate:modelValue":t[6]||(t[6]=l=>a(o).base_price=l),type:"text",class:"mt-1 block w-full",autocomplete:"base_price"},null,8,["modelValue"]),e(i,{message:a(o).errors.base_price,class:"mt-2"},null,8,["message"])])]),actions:n(()=>[e(N,{on:a(o).recentlySuccessful,class:"mr-3"},{default:n(()=>[u(" Saved. ")]),_:1},8,["on"]),e(D,{class:M({"opacity-25":a(o).processing}),disabled:a(o).processing},{default:n(()=>[u(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{ue as default};