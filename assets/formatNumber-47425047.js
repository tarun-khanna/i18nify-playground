import{a as y,b as x,c as d,j as e,B as m,T as o,N as I,S as b,M as v,O as f,g as C,r as j,d as O,f as g}from"./index-fabebbae.js";import{G as s,C as z}from"./Grid-ce1f4822.js";function p(r){return Object.keys(r).reduce((i,a)=>(r[a]!==""&&r[a]!==null&&r[a]!==void 0&&(i[a]=r[a]),i),{})}const w=()=>{const{intlOptions:r,setIntlOptions:i}=y(),a=x(),l=d(a.breakpoints.down("sm")),u=(t,n)=>{i(h=>({...h,[t]:n}))},c=t=>t.type==="select"?e.jsxs(s,{container:!0,alignItems:"center",spacing:1,children:[e.jsx(s,{item:!0,xs:l?5:4,children:e.jsx(o,{variant:"body1",children:t.label})}),e.jsx(s,{item:!0,xs:l?7:6,children:e.jsx(b,{fullWidth:!0,size:"small",label:t.label,value:r[t.key],onChange:n=>u(t.key,n.target.value),children:t.options.map(n=>e.jsx(v,{value:n,children:n},n))})})]},t.key):e.jsxs(s,{container:!0,alignItems:"center",children:[e.jsx(s,{item:!0,xs:l?5:4,children:e.jsx(o,{variant:"body1",children:t.label})}),e.jsx(s,{item:!0,xs:l?7:6,children:e.jsx(f,{type:t.type,fullWidth:!0,size:"small",value:r[t.key],onChange:n=>u(t.key,n.target.value)})})]},t.key);return e.jsxs(m,{sx:{mt:4},children:[e.jsx(o,{sx:{mb:2},variant:"h5",children:"Intl Options:"}),I.map(t=>e.jsx(m,{sx:{mb:2},children:c(t)}))]})},N=({inpValue:r,currency:i,onInpChange:a,onCurrencyChange:l})=>{const u=x(),c=d(u.breakpoints.down("sm"));return e.jsxs(e.Fragment,{children:[e.jsxs(s,{container:!0,rowSpacing:5,alignItems:"center",children:[e.jsx(s,{item:!0,xs:c?12:10,sx:{mb:2},children:e.jsx(f,{value:r,onChange:t=>{a(t.target.value)},size:"large",fullWidth:!0,placeholder:"Enter value..."})}),e.jsx(s,{item:!0,xs:c?5:4,children:e.jsx(o,{variant:"h5",children:"Choose Currency:"})}),e.jsx(s,{item:!0,xs:c?7:6,children:e.jsx(b,{fullWidth:!0,size:"small",value:i,onChange:t=>l(t.target.value),children:Object.keys(C()).map(t=>e.jsx(v,{value:t,children:t},t))})})]}),e.jsx(w,{})]})},k=N;function S(){const[r,i]=j.useState(""),[a,l]=j.useState(""),{intlOptions:u}=y(),{locale:c}=O(),t=x(),n=d(t.breakpoints.down("sm"));return e.jsx(z,{maxWidth:"xl",children:e.jsxs(s,{container:!0,children:[e.jsxs(s,{item:!0,xs:n?12:7,children:[e.jsx(o,{color:"#4767FD",variant:"h2",sx:{mb:2},children:"FormatNumber"}),e.jsx(o,{variant:"body1",sx:{mb:6},children:"🎩✨ This little wizard helps you jazz up numerical values in all sorts of fancy ways. And guess what? It uses the Internationalization API (Intl) to sprinkle that magic dust and give you snazzy, locale-specific number formats—especially for currencies! 🌟💸"})]}),n&&e.jsx(s,{item:!0,xs:12,children:e.jsx(s,{sx:{height:"100px"},container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(s,{item:!0,children:e.jsx(o,{variant:"h2",children:g(a,{locale:c,currency:r,intlOptions:p(u)})})})})}),e.jsx(s,{item:!0,xs:n?12:7,sx:!n&&{"border-right":"1px solid rgba(0,0,0,0.2)",pr:2},children:e.jsx(k,{inpValue:a,currency:r,onCurrencyChange:h=>i(h),onInpChange:h=>l(h)})}),!n&&e.jsx(s,{item:!0,xs:5,children:e.jsx(s,{sx:{height:"100vh"},container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(s,{item:!0,children:e.jsx(o,{variant:"h2",children:g(a,{locale:c,currency:r,intlOptions:p(u)})})})})})]})})}export{S as default};