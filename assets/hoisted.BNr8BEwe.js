import{s as L,g as v,t as k}from"./theme.AOKFl56T.js";import{n as b,l as B}from"./funct.n7cc2dsU.js";const _="modulepreload",x=function(i){return"/"+i},y={},E=function(a,c,o){let l=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link");l=Promise.all(c.map(e=>{if(e=x(e),e in y)return;y[e]=!0;const n=e.endsWith(".css"),d=n?'[rel="stylesheet"]':"";if(!!o)for(let r=t.length-1;r>=0;r--){const u=t[r];if(u.href===e&&(!n||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":_,n||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),n)return new Promise((r,u)=>{s.addEventListener("load",r),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})}))}return l.then(()=>a()).catch(t=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=t,window.dispatchEvent(e),!e.defaultPrevented)throw t})};let w=b,p=5,f=null;function g(){const i=document.getElementById("main"),a=document.getElementById("plot"),c=document.getElementById("f"),o=document.getElementById("form"),l=document.getElementById("container"),t=document.getElementById("p");return{main:i,canvas:a,input:c,form:o,points:t,container:l}}function I(){const{canvas:i,main:a,container:c}=g(),o=window.innerWidth,l=window.innerHeight,t=i.clientWidth,e=a.clientHeight;return{width:t,height:e-c.clientHeight,vw:o,vh:l}}async function A(){const i=v(),{canvas:a}=g(),{width:c,height:o,vw:l}=I();a.width=c,a.height=o;const t=await E(()=>import("./auto.lRqzyDic.js"),__vite__mapDeps([])),e=B(-p,p,1e3,!0),n=e.map(w),d=Math.min(...n),m=Math.max(...n);f&&f.destroy(),f=new t.Chart(a,{type:"line",options:{responsive:!0,maintainAspectRatio:!1,elements:{line:{borderWidth:2,borderColor:i==="dark"?"#C8C3B9":"#0E1111"},point:{radius:0}},layout:{padding:-10},scales:{y:{min:d+d*.1,max:m+m*.1,beginAtZero:!0,ticks:{display:!1,maxTicksLimit:l>=1500?20:15},grid:{display:!0,color:i==="dark"?"#333333":"#AAAAAA"}},x:{beginAtZero:!0,ticks:{display:!1,maxTicksLimit:l>=1500?20:15},grid:{display:!0,color:i==="dark"?"#333333":"#AAAAAA"}}},plugins:{tooltip:{enabled:!1},legend:{display:!1}}},data:{labels:e,datasets:[{data:n}]}})}async function T(i){i.preventDefault();const{parse:a}=await E(()=>import("./index.VmubHx-V.js"),__vite__mapDeps([])),{input:c,form:o,points:l}=g(),t=c.value.trim()||"",e=l.value.trim()||"";if(!t||!e){o.classList.remove("error");return}const n=[],d=[];try{const m=a(t);if(m.traverse(s=>{if(s.type==="FunctionNode"){const r=s;d.includes(r.fn.name)||d.push(r.fn.name)}else if(s.type==="SymbolNode"){const r=s;!n.includes(r.name)&&!d.includes(r.name)&&n.push(r.name)}}),n.length>1){o.classList.add("error");return}w=s=>m.evaluate({[n[0]]:s}),p=parseInt(e,10),A(),o.classList.remove("error")}catch{o.classList.add("error")}}function h(){A()}function C(){k(),h()}L(v());h();window.addEventListener("resize",h);document.addEventListener("DOMContentLoaded",h);document.getElementById("theme")?.addEventListener("click",C);document.getElementById("form")?.addEventListener("submit",T);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
