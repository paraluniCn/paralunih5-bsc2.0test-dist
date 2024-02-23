"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["src_page_NftPledgeMining_store_js"],{78803:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var n=r(15861),a=r(70885),s=r(64687),c=r.n(s),i=r(67294),o=r(64478),l=r(63474),u=r(68735),f=r(77839),m=r(6065),d=r(70794),p=r(72461),h=r(1667),w=r(31290),g=r(67959),v=r(38104),N=r(5977);function E(){var e=(0,N.$B)(),t=(0,o.$)().t,r=(0,u.Z)().user,s=(0,i.useState)("0"),E=(0,a.Z)(s,2),b=E[0],x=E[1],_=(0,i.useState)("0"),k=(0,a.Z)(_,2),Z=k[0],S=k[1],y=(0,i.useState)("0"),C=(0,a.Z)(y,2),z=C[0],F=C[1],T=(0,i.useState)([]),A=(0,a.Z)(T,2),O=A[0],j=A[1],P=(0,i.useState)([]),$=(0,a.Z)(P,2),R=$[0],B=$[1],G=(0,N.k6)(),J=e.params.type,M=[f.Sl,f.mX,f.xs][J],U=function(){var e=(0,n.Z)(c().mark((function e(){var t,n,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.address){e.next=2;break}return e.abrupt("return");case 2:return t=[],M.map((function(e){t.push({abi:"AsterNftChef",address:f._S.NFTChef,method:"getUserPoolTokenIds",params:[e.pid,r.address]})})),e.next=6,(0,m.Z)(t);case 6:n=e.sent,a=(0,d.O)(0),s=[],n.map((function(e,t){e.map((function(e){(0,d.O)(e).isGreaterThanOrEqualTo((0,p.tr)(10))||(a=a.plus(M[t].price),s.push({name:M[t].name,price:M[t].price,id:e,img:M[t].img,pid:M[t].pid}))}))})),x((0,p.JR)(a)),j(s);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,n.Z)(c().mark((function e(){var t,n,a,s,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.address){e.next=2;break}return e.abrupt("return");case 2:return t=[],n=(0,d.O)(0),M.map((function(e){t.push({abi:"AsterNftChef",address:f._S.NFTChef,method:"pendingV42",params:[e.pid,r.address]}),t.push({abi:"AsterNftChef",address:f._S.NFTChef,method:"getUserPool",params:[r.address,e.pid]})})),e.next=7,(0,m.Z)(t);case 7:return(a=e.sent).map((function(e){n=e.reward?n.plus(e.reward):n.plus(e)})),S((0,p.JR)((0,p.eK)(n))),e.next=12,(0,h.No)(v.Z.V42NEW);case 12:s=e.sent,F((0,p.JR)((0,d.O)((0,p.eK)(n)).multipliedBy(s),2)),i=[],M.map((function(e,t){((0,d.O)(a[2*t]).isGreaterThan(0)||(0,d.O)(a[2*t+1].reward).isGreaterThan(0))&&i.push(e.pid)})),B(i);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,n.Z)(c().mark((function e(n,a){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.address){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,w.fY)(n,a,r.address).catch((function(){}));case 4:e.sent?(g.Z.show(t("page.DaoStore.getpriceSuccess")),U()):g.Z.show(t("page.DaoStore.getpriceFail"));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),D=function(){var e=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.address&&R.length){e.next=2;break}return e.abrupt("return");case 2:if(!(0,d.O)(Z).isLessThanOrEqualTo(0)){e.next=5;break}return g.Z.show(t("page.Mine.mine_no_award")),e.abrupt("return");case 5:return e.next=7,(0,w.uA)(R,r.address).catch((function(){}));case 7:e.sent?(g.Z.show(t("page.FinanceStore.get_price_success")),V()):g.Z.show(t("page.FinanceStore.get_price_fail"));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){U(),V()}),[null==r?void 0:r.address]),(0,p.Yz)((function(){V()}),5e3),i.createElement(i.Fragment,null,i.createElement("div",{className:"ml-20 mt-10 font-color-white font-size-16 font-weight-500"},t("common.my_position")),i.createElement("div",{className:"divide-line mt-10"}),i.createElement(l.Z,{bgColor:"#141416"},i.createElement("div",{className:"flex-row fl-ai-center fl-jc-between"},i.createElement("div",{className:"font-weight-400 font-color-describe font-size-12"},t("page.AsterProject.nft_all_cost")),i.createElement("div",{className:"font-color-white font-weight-500",style:{fontSize:"2.4rem"}},"$",b)),i.createElement("div",{className:"divide-line mt-10"}),i.createElement("div",{className:"flex-row fl-ai-center fl-jc-between mt-10"},i.createElement("div",{className:"flex-column"},i.createElement("div",{className:"font-size-12 font-color-describe"},"V42",t("page.AsterProject.current_profit")),i.createElement("div",{className:"flex-row fl-ai-center mt-5 text-wrap"},i.createElement("div",{className:"font-weight-bold font-color-white",style:{fontSize:"2rem"}},Z),i.createElement("div",{className:"font-size-12  font-color-describe font-weight-bold"},"≈ $",z))),i.createElement("div",{className:"button-claim button-click flex-center",onClick:D},t("page.Mine.mine_one_click_get"))),i.createElement("div",{className:"mt-10 font-size-12 font-weight-500",style:{color:"#FF24AB"}},"v42收益遵循二八原则，需前往平行宇宙官网",i.createElement("span",{onClick:function(){return G.push("/daolptransactionbuy/".concat(v.Z.SousChefToUsdtPid))},className:"font-size-14",style:{color:"#0046FF"}}," https://paraluni.org "),"打底池，原力值满方可自由交易。")),i.createElement("div",{className:"ml-20 mt-20 font-color-white font-size-16 font-weight-500"},t("page.AsterProject.my_nft_list")),O.map((function(e,r){return i.createElement(l.Z,{bgColor:"#141416",key:r},i.createElement("div",{className:"nr-item flex-row fl-ai-center fl-jc-between"},i.createElement("div",{className:"flex-row fl-ai-center"},i.createElement("img",{src:e.img,width:52,height:52,style:{borderRadius:"0.8rem"}}),i.createElement("div",{className:"flex-column ml-10"},i.createElement("div",{className:"font-size-16 font-color-white font-weight-500"},e.name),i.createElement("div",{className:"font-size-12 font-weight-400 font-color-describe mt-10"},"编号：",e.id))),i.createElement("div",{className:"flex-row"},i.createElement("div",{className:"nr-item-button flex-center"},"$ ",e.price))),i.createElement("div",{className:"nr-item-withdraw mt-10 flex-center",onClick:function(){return q(e.pid,e.id)}},t("page.AsterProject.once_withdraw")))})))}}}]);