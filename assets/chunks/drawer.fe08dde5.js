import{i as d,f as r,m,d as l,T as f,b as c}from"../app.ad5641f6.js";import"./global.6eb459f4.js";import{N as y}from"./overlay.72cc3d3f.js";import{u as V}from"./noble-button.c38ec9fc.js";const h={modelValue:{type:Boolean,default:!1},size:{type:String,default:"30%"},zIndex:{type:Number,default:1400},title:{type:String,default:""},withHeader:{type:Boolean,default:!0},position:{type:String,default:"right"}},w=["top","bottom"],v=["right","left"];function N(e,a){return{styles:d(()=>({height:w.includes(e.position)&&e.size||"100%",width:v.includes(e.position)&&e.size||"100%",zIndex:e.zIndex}))}}const D=r({name:"NavDrawer",props:h,emits:["update:modelValue","close","open"],setup(e,a){const n=V("drawer"),{styles:i}=N(e),s=()=>{a.emit("update:modelValue",!1),a.emit("close")};m(()=>e.modelValue,t=>{t&&a.emit("open")});const u=()=>{var t,o;return l("header",null,[l("div",null,[l("h1",null,[((o=(t=a.slots)==null?void 0:t.title)==null?void 0:o.call(t))??e.title])]),l("div",null,[l("button",{onClick:s,class:`${n.e("button")} ${n.em("button","close")} `},[c("X")])])])};return()=>l(y,{modelValue:e.modelValue,"onUpdate:modelValue":t=>e.modelValue=t},{default:()=>[l(f,{name:`drawer-fly-${e.position}`},{default:()=>{var t,o;return[e.modelValue&&l("div",{class:`${n.b()} ${e.position}`,style:i.value},[e.withHeader&&l(u,null,null),l("div",null,[(o=(t=a.slots).default)==null?void 0:o.call(t)])])]}})]})}});export{D as N};
