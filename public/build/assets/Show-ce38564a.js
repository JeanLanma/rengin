import{_ as p}from"./AppLayout-e0252796.js";import c from"./DeleteUserForm-f552eb58.js";import l from"./LogoutOtherBrowserSessionsForm-3583a7fb.js";import{S as s}from"./SectionBorder-709d2a27.js";import f from"./TwoFactorAuthenticationForm-403703f6.js";import u from"./UpdatePasswordForm-bf7946bb.js";import d from"./UpdateProfileInformationForm-6dc3e010.js";import{c as _,w as n,o,a as i,e as r,b as t,f as a,F as h}from"./app-a6bdcac1.js";import"./ResponsiveNavLink-68b25849.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ActionSection-607ed6af.js";import"./SectionTitle-70593261.js";import"./DangerButton-ff784726.js";import"./DialogModal-324af1d3.js";import"./TextInput-6530c055.js";import"./SecondaryButton-479d0abe.js";import"./ActionMessage-0e7a7ca0.js";import"./PrimaryButton-92dba277.js";import"./InputLabel-cf68a5b1.js";import"./FormSection-90ad5898.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};