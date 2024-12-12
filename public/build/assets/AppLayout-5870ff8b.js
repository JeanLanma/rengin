import{d as A,s as N,x as F,k as C,o as s,e as d,a as t,r as p,p as S,u as g,l as M,y as L,b as a,w as r,n as k,_ as z,c as y,j,X as E,g as n,t as b,F as w,f as c,h as B,i as x,O as D}from"./app-15e49a73.js";import{_ as O,A as V,a as h}from"./ResponsiveNavLink-1dd22f23.js";const R={class:"relative"},P={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white dark:bg-gray-700"]}},setup(u){const i=u;let o=A(!1);const m=l=>{o.value&&l.key==="Escape"&&(o.value=!1)};N(()=>document.addEventListener("keydown",m)),F(()=>document.removeEventListener("keydown",m));const e=C(()=>({48:"w-48"})[i.width.toString()]),_=C(()=>i.align==="left"?"origin-top-left left-0":i.align==="right"?"origin-top-right right-0":"origin-top");return(l,f)=>(s(),d("div",R,[t("div",{onClick:f[0]||(f[0]=T=>S(o)?o.value=!g(o):o=!g(o))},[p(l.$slots,"trigger")]),M(t("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=T=>S(o)?o.value=!1:o=!1)},null,512),[[L,g(o)]]),a(z,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[M(t("div",{class:k(["absolute z-50 mt-2 rounded-md shadow-lg",[g(e),g(_)]]),style:{display:"none"},onClick:f[2]||(f[2]=T=>S(o)?o.value=!1:o=!1)},[t("div",{class:k(["rounded-md ring-1 ring-black ring-opacity-5",u.contentClasses])},[p(l.$slots,"content")],2)],2),[[L,g(o)]])]),_:3})]))}},H={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},I=["href"],v={__name:"DropdownLink",props:{href:String,as:String},setup(u){return(i,o)=>(s(),d("div",null,[u.as=="button"?(s(),d("button",H,[p(i.$slots,"default")])):u.as=="a"?(s(),d("a",{key:1,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[p(i.$slots,"default")],8,I)):(s(),y(g(j),{key:2,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:r(()=>[p(i.$slots,"default")]),_:3},8,["href"]))]))}},$={__name:"NavLink",props:{href:String,active:Boolean},setup(u){const i=u,o=C(()=>i.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out");return(m,e)=>(s(),y(g(j),{href:u.href,class:k(g(o))},{default:r(()=>[p(m.$slots,"default")]),_:3},8,["href","class"]))}},U={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},G={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},X={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},q={class:"flex justify-between h-16"},J={class:"flex"},K={class:"shrink-0 flex items-center"},Q={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},W={class:"hidden sm:flex sm:items-center sm:ml-6"},Y={class:"ml-3 relative"},Z={class:"inline-flex rounded-md"},ee={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},te=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),re={class:"w-60"},se=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),ae=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),oe=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ne=["onSubmit"],ie={class:"flex items-center"},de={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},le=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ue=[le],ce={class:"ml-3 relative"},ge={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},he=["src","alt"],fe={key:1,class:"inline-flex rounded-md"},pe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},me=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),ve=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Mi cuenta ",-1),ye=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),be=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Gestionar usuarios ",-1),ke=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),_e=["onSubmit"],we={class:"-mr-2 flex items-center sm:hidden"},xe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},$e={class:"pt-2 pb-3 space-y-1"},Se={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},Ce={class:"flex items-center px-4"},je={key:0,class:"shrink-0 mr-3"},Te=["src","alt"],Me={class:"font-medium text-base text-gray-800 dark:text-gray-200"},Le={class:"font-medium text-sm text-gray-500"},Be={class:"mt-3 space-y-1"},De=["onSubmit"],Pe=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),Ae=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Ne=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),Fe=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ze=["onSubmit"],Ee={class:"flex items-center"},Oe={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Ve=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Re=[Ve],He={key:0,class:"bg-white dark:bg-gray-800 shadow"},Ie={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Xe={__name:"AppLayout",props:{title:String},setup(u){const i=A(!1),o=e=>{D.put(route("current-team.update"),{team_id:e.id},{preserveState:!1})},m=()=>{D.post(route("logout"))};return(e,_)=>(s(),d("div",null,[a(g(E),{title:u.title},null,8,["title"]),a(O),t("div",U,[t("nav",G,[t("div",X,[t("div",q,[t("div",J,[t("div",K,[a(g(j),{href:e.route("dashboard")},{default:r(()=>[a(V,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),t("div",Q,[a($,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:r(()=>[n(" Dashboard ")]),_:1},8,["href","active"]),a($,{href:e.route("bookings.index"),active:e.route().current("bookings.*")},{default:r(()=>[n(" Reservaciones ")]),_:1},8,["href","active"]),a($,{href:e.route("rooms.index"),active:e.route().current("rooms.*")},{default:r(()=>[n(" Habitaciones ")]),_:1},8,["href","active"]),a($,{href:e.route("distribution.index"),active:e.route().current("distribution.*")},{default:r(()=>[n(" Distribución ")]),_:1},8,["href","active"])])]),t("div",W,[t("div",Y,[e.$page.props.jetstream.hasTeamFeatures?(s(),y(P,{key:0,align:"right",width:"60"},{trigger:r(()=>[t("span",Z,[t("button",ee,[n(b(e.$page.props.auth.user.current_team.name)+" ",1),te])])]),content:r(()=>[t("div",re,[e.$page.props.jetstream.hasTeamFeatures?(s(),d(w,{key:0},[se,a(v,{href:e.route("teams.show",e.$page.props.auth.user.current_team)},{default:r(()=>[n(" Team Settings ")]),_:1},8,["href"]),e.$page.props.jetstream.canCreateTeams?(s(),y(v,{key:0,href:e.route("teams.create")},{default:r(()=>[n(" Create New Team ")]),_:1},8,["href"])):c("",!0),ae,oe,(s(!0),d(w,null,B(e.$page.props.auth.user.all_teams,l=>(s(),d("form",{key:l.id,onSubmit:x(f=>o(l),["prevent"])},[a(v,{as:"button"},{default:r(()=>[t("div",ie,[l.id==e.$page.props.auth.user.current_team_id?(s(),d("svg",de,ue)):c("",!0),t("div",null,b(l.name),1)])]),_:2},1024)],40,ne))),128))],64)):c("",!0)])]),_:1})):c("",!0)]),t("div",ce,[a(P,{align:"right",width:"48"},{trigger:r(()=>[e.$page.props.jetstream.managesProfilePhotos?(s(),d("button",ge,[t("img",{class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.auth.user.profile_photo_url,alt:e.$page.props.auth.user.name},null,8,he)])):(s(),d("span",fe,[t("button",pe,[n(b(e.$page.props.auth.user.name)+" ",1),me])]))]),content:r(()=>[ve,a(v,{href:e.route("profile.show")},{default:r(()=>[n(" Perfil ")]),_:1},8,["href"]),e.$page.props.jetstream.hasApiFeatures?(s(),y(v,{key:0,href:e.route("api-tokens.index")},{default:r(()=>[n(" API Tokens ")]),_:1},8,["href"])):c("",!0),ye,be,a(v,{href:e.route("users.index")},{default:r(()=>[n(" Usuarios ")]),_:1},8,["href"]),ke,t("form",{onSubmit:x(m,["prevent"])},[a(v,{as:"button"},{default:r(()=>[n(" Cerrar session ")]),_:1})],40,_e)]),_:1})])]),t("div",we,[t("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",onClick:_[0]||(_[0]=l=>i.value=!i.value)},[(s(),d("svg",xe,[t("path",{class:k({hidden:i.value,"inline-flex":!i.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:k({hidden:!i.value,"inline-flex":i.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:k([{block:i.value,hidden:!i.value},"sm:hidden"])},[t("div",$e,[a(h,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:r(()=>[n(" Dashboard ")]),_:1},8,["href","active"]),a(h,{href:e.route("bookings.index"),active:e.route().current("bookings.*")},{default:r(()=>[n(" Reservaciones ")]),_:1},8,["href","active"]),a(h,{href:e.route("rooms.index"),active:e.route().current("rooms.*")},{default:r(()=>[n(" Habitaciones ")]),_:1},8,["href","active"]),a(h,{href:e.route("distribution.index"),active:e.route().current("distribution.*")},{default:r(()=>[n(" Distribución ")]),_:1},8,["href","active"])]),t("div",Se,[t("div",Ce,[e.$page.props.jetstream.managesProfilePhotos?(s(),d("div",je,[t("img",{class:"h-10 w-10 rounded-full object-cover",src:e.$page.props.auth.user.profile_photo_url,alt:e.$page.props.auth.user.name},null,8,Te)])):c("",!0),t("div",null,[t("div",Me,b(e.$page.props.auth.user.name),1),t("div",Le,b(e.$page.props.auth.user.email),1)])]),t("div",Be,[a(h,{href:e.route("profile.show"),active:e.route().current("profile.show")},{default:r(()=>[n(" Profile ")]),_:1},8,["href","active"]),e.$page.props.jetstream.hasApiFeatures?(s(),y(h,{key:0,href:e.route("api-tokens.index"),active:e.route().current("api-tokens.index")},{default:r(()=>[n(" API Tokens ")]),_:1},8,["href","active"])):c("",!0),t("form",{method:"POST",onSubmit:x(m,["prevent"])},[a(h,{as:"button"},{default:r(()=>[n(" Log Out ")]),_:1})],40,De),e.$page.props.jetstream.hasTeamFeatures?(s(),d(w,{key:1},[Pe,Ae,a(h,{href:e.route("teams.show",e.$page.props.auth.user.current_team),active:e.route().current("teams.show")},{default:r(()=>[n(" Team Settings ")]),_:1},8,["href","active"]),e.$page.props.jetstream.canCreateTeams?(s(),y(h,{key:0,href:e.route("teams.create"),active:e.route().current("teams.create")},{default:r(()=>[n(" Create New Team ")]),_:1},8,["href","active"])):c("",!0),Ne,Fe,(s(!0),d(w,null,B(e.$page.props.auth.user.all_teams,l=>(s(),d("form",{key:l.id,onSubmit:x(f=>o(l),["prevent"])},[a(h,{as:"button"},{default:r(()=>[t("div",Ee,[l.id==e.$page.props.auth.user.current_team_id?(s(),d("svg",Oe,Re)):c("",!0),t("div",null,b(l.name),1)])]),_:2},1024)],40,ze))),128))],64)):c("",!0)])])],2)]),e.$slots.header?(s(),d("header",He,[t("div",Ie,[p(e.$slots,"header")])])):c("",!0),t("main",null,[p(e.$slots,"default")])])]))}};export{Xe as _};