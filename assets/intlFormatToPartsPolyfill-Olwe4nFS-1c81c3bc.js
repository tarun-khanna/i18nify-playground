function l(){Intl.NumberFormat.prototype.formatToParts||Object.defineProperty(Intl.NumberFormat.prototype,"formatToParts",{value:function(r){if(typeof r!="number")throw new TypeError("Argument should be a valid number");const u=this.format(r),o=[],a=/(\D+)|(\d+)/g;let t;for(;(t=a.exec(u))!==null;){const e=t[1]?"string":"integer";o.push({type:e,value:t[0]})}return function(e){return e.map(n=>({type:n.type,value:n.value}))}(o)},writable:!0,configurable:!0})}export{l as default};
