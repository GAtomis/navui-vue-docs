import{k as d,i as p,f as b,h,d as m,l as s}from"../app.a1e83f42.js";import"./global.6eb459f4.js";const x={tooltip:Boolean,tip:{type:String,default:"tips"}};function g(n){const{x:t,y:r,elementX:l,elementY:u,isOutside:o,elementWidth:c,elementHeight:e}=d(n);let a="";const f=p(()=>(o.value&&l.value<0&&(a="left"),o.value&&l.value>c.value&&(a="right"),o.value&&u.value<0&&(a="top"),o.value&&u.value>e.value&&(a="bottom"),a)),v=p(()=>{let i;switch(f.value){case"left":i="right";break;case"right":i="left";break;case"top":i="bottom";break;case"bottom":i="top";break;default:i="right";break}return i});return{from:f,to:v}}const M=b({name:"AuxMultiButton",props:x,setup(n,{slots:t}){const r=h(),{to:l}=g(r),u=s("tooltip"),o=p(()=>(u==null?void 0:u.value)||n.tooltip),c=()=>{var e;return m("div",{class:`aux-multiButton-tooltip animate-${l.value}`},[((e=t==null?void 0:t.tooltip)==null?void 0:e.call(t,{text:n.tip}))??n.tip])};return()=>{var e;return m("button",{ref:r,class:"aux-multiButton"},[((e=t.default)==null?void 0:e.call(t))??"",o.value?m(c,null,null):""])}}});export{M as A};
