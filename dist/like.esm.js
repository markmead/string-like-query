Object.assign(String.prototype,{like(o={}){let{splitAt:e=3,searchAgainst:i=[],forceLowercase:r=!1,looseSearch:l=!1}=o,c=this.length,h=r?this.toLowerCase():this,s=[];for(let t=0;t<c;t+=e)s.push(h.substring(t,t+e));return!!i.flatMap(t=>{let g=r?t.toLowerCase():t;return(l?s:s.filter(n=>n.length===e)).filter(n=>g.includes(n))}).length}});
