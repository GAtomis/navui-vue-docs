import"./global.b7197bcd.js";import{f as s,d as e,c as _,w as n,u as l,o as r,b as a,_ as p}from"../app.4c3fa5d8.js";const d={color:{type:String,default:"#03e9f4"}},u=s({name:"AuxGlowButton",props:d,setup(c,{slots:o}){return()=>{var t;return e("button",{style:`--color:${c.color}`,class:"aux-glowButton "},[e("span",null,null),e("span",null,null),e("span",null,null),e("span",null,null),((t=o.default)==null?void 0:t.call(o))??"Glow"])}}}),f={class:"container"},m=s({__name:"demo",setup(c){return(o,t)=>(r(),_("div",f,[e(l(u),null,{default:n(()=>[a("BLUE")]),_:1}),e(l(u),{color:"#e2201b"},{default:n(()=>[a("RED")]),_:1}),e(l(u),{color:"#21e21b"},{default:n(()=>[a("GREEN")]),_:1})]))}});const w=p(m,[["__scopeId","data-v-2e83f2b6"]]);export{w as default};