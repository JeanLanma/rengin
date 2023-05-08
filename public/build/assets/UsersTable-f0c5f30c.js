import{e as a,a as t,F as g,h as y,o as s,t as e}from"./app-3bdd2f9a.js";const x={class:"p-3 py-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700"},p=t("h1",{class:"text-2xl font-medium text-gray-900 dark:text-white mb-4"}," Lista de Usuarios ",-1),i={class:"text-white inner-shadow shadow-xl overflow-auto border border-gray-200 dark:border-gray-700 md:rounded-lg"},n={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer"},c=t("thead",null,[t("tr",null,[t("th",{class:"lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400"},"UserID"),t("th",{class:"lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400"},"Nombre"),t("th",{class:"lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400"},"Correo"),t("th",{class:"lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400"},"Rol"),t("th",{class:"lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-right text-gray-500 dark:text-gray-400"},[t("svg",{class:"w-6 text-right fill-current text-grey-dark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[t("path",{d:"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"})])])])],-1),h={class:"bg-white divide-y shadow-inner divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"},b={class:"dark:hover:bg-gray-600 hover:bg-gray-100"},k={class:"lg:px-4 px-6 lg:py-4 py-6 lg:text-base font-bold text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},_={class:"lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},w={class:"lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},f={class:"lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},m={class:"lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"},u=["href"],z={__name:"UsersTable",props:{users:{type:Object,required:!0}},setup(o){const d=o;return console.log(d.users),(l,v)=>(s(),a("div",null,[t("div",x,[p,t("div",i,[t("table",n,[c,t("tbody",h,[(s(!0),a(g,null,y(d.users.data,r=>(s(),a("tr",b,[t("td",k,"# "+e(r.id),1),t("td",_,e(r.name),1),t("td",w,e(r.email),1),t("td",f,e(r.roles[0]??"sin asignar"),1),t("td",m,[t("a",{href:l.route("users.edit",{userID:r.id}),class:"text-sky-600 dark:text-white hover:text-sky-700 hover:dark:text-gray-200 underline"},"Ver detalles",8,u)])]))),256))])])])])]))}};export{z as default};