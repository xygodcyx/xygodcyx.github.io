import{_ as j,u as D,b as I,D as M,i as u,k as F,e as k,f as N,r,o as y,g as v,h as c,w as s,j as t,F as V,x as P,a as p,t as z,z as R,A as T}from"./index-1cf03590.js";const b=m=>(R("data-v-be6e3e86"),m=m(),T(),m),U={class:"wrap"},E=b(()=>t("thead",null,[t("tr",null,[t("td",null,"评论内容"),t("td",null,"发布者"),t("td",null,"操作")])],-1)),H={style:{"max-width":"100px"}},L={style:{"max-width":"100px"}},Y={style:{"max-width":"60px"}},q=b(()=>t("span",{style:{"font-size":"12px"}},"上一页",-1)),G=b(()=>t("span",{style:{"font-size":"12px"}},"下一页",-1)),J={__name:"CommentAdmin",setup(m){D(),I(),M();const w=u("axios"),C=u("message"),g=u("loadingBar"),A=u("server_url"),o=F({page:1,pageSize:20,pageCount:0,count:0}),f=k([]),x=k([]);N(()=>{$(),setTimeout(()=>{S()},300)});const $=async()=>{let _=await w.get("/user/user_list");_.data.code==200?f.value=_.data.rows.map(n=>({id:n.id,user_name:n.user_name,user_face_img:n.face_img_url,token:n.token})):C.error(`获取用户信息失败:${_.data.msg}`)},S=async()=>{g.start();let _=`/comment/comment_list?page=${o.page}&pagesize=${o.pageSize}`,n=await w.get(_);n.data.code==200?(o.count=n.data.count,o.pageCount=Math.ceil(o.count/o.pageSize),x.value=n.data.rows.map(e=>{let i=f.value.find(l=>l.id==e.comment_user_id).user_name,d=f.value.find(l=>l.id==e.comment_user_id).user_face_img,a=new Date(e.comment_create_time);return a=`${a.getFullYear()}年${a.getMonth()+1}月${a.getDay()}日${a.getHours()}时${a.getMinutes()}分${a.getSeconds()}秒`,{comment_article_id:e.comment_article_id,comment_article_title:e.comment_article_title,comment_content:e.comment_content,comment_create_time:a,comment_user_id:e.comment_user_id,comment_user_name:i,comment_user_face_img:A+d,comment_background_color:e.comment_background_color}}),console.log(x),g.finish()):(g.error(),C.error(`获取评论失败，请重试${n.data.msg}`))},B=_=>{o.page=_,$(),S()};return(_,n)=>{const e=r("n-ellipsis"),i=r("n-button"),d=r("n-space"),a=r("n-table"),l=r("n-pagination");return y(),v("div",U,[c(a,{class:"table",bordered:!1,"single-line":!1},{default:s(()=>[E,t("tbody",null,[(y(!0),v(V,null,P(x.value,(h,K)=>(y(),v("tr",{key:h.comment_article_id},[t("td",H,[c(e,{style:{"max-width":"100%"}},{default:s(()=>[p(z(h.comment_content),1)]),_:2},1024)]),t("td",L,[c(e,{style:{"max-width":"100%"}},{default:s(()=>[p(z(h.comment_user_name),1)]),_:2},1024)]),t("td",Y,[c(d,{justify:"center"},{default:s(()=>[c(i,null,{default:s(()=>[p(" 修改 ")]),_:1}),c(i,null,{default:s(()=>[p(" 删除 ")]),_:1})]),_:1})])]))),128))])]),_:1}),c(d,{justify:"center"},{default:s(()=>[c(l,{page:o.page,"page-count":o.pageCount,"page-slot":5,"onUpdate:page":B,style:{"margin-bottom":"30px"}},{prev:s(()=>[q]),next:s(()=>[G]),_:1},8,["page","page-count"])]),_:1})])}}},Q=j(J,[["__scopeId","data-v-be6e3e86"]]);export{Q as default};
