"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["src_page_AddLiquidity_store_js"],{91268:(e,t,r)=>{r.d(t,{HM:()=>i,fe:()=>o});var n=r(15861),a=r(64687),s=r.n(a),c=r(34234),u=r(38104),i=function(){var e=(0,n.Z)(s().mark((function e(t,r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)({abi:"ParaFactory",address:u.Z.ParaFactory,params:[t,r],method:"getPair",type:"call"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)({abi:"ParaFactory",address:u.Z.ParaFactory,params:[],method:"allPairsLength",type:"call"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},60679:(e,t,r)=>{r.d(t,{H:()=>i,P:()=>o});var n=r(15861),a=r(64687),s=r.n(a),c=r(34234),u=r(38104),i=function(){var e=(0,n.Z)(s().mark((function e(t,r,n,a,i){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)({abi:"router",address:u.Z.ParaRouter,params:[t,r,n,a,"0","0",i,"9999999999"],method:"addLiquidity",type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n,a,s){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t,r,n,a){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)({abi:"router",address:u.Z.ParaRouter,params:[t,r,n,"0","0",a,"9999999999"],method:"removeLiquidity",type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}()},74440:(e,t,r)=>{r.d(t,{S:()=>i,n:()=>o});var n=r(15861),a=r(64687),s=r.n(a),c=r(38104),u=r(34234),i=function(){var e=(0,n.Z)(s().mark((function e(t,r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)({abi:"ParaStableSwap",address:c.Z.ParaStableSwap,params:[t,r],method:"add_liquidity",type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t,r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)({abi:"ParaStableSwap",address:c.Z.ParaStableSwap,params:[t,r],method:"remove_liquidity",type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},17969:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var n=r(4942),a=r(15861),s=r(70885),c=r(64687),u=r.n(c),i=r(67294),o=r(64478),d=r(63474),p=r(91268),l=r(38104),f=r(6065),m=r(68735),h=r(72461),b=r(69016),v=r(5977),y=r(60679),x=r(67959),w=r(36871),Z=r(49209),k=(r(70794),r(74440));function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(){var e=(0,o.$)().t,t=(0,i.useState)(!0),r=(0,s.Z)(t,2),n=r[0],c=r[1],P=(0,i.useState)([]),E=(0,s.Z)(P,2),L=E[0],S=E[1],_=(0,i.useState)("0"),q=(0,s.Z)(_,2),O=q[0],j=q[1],A=(0,m.Z)().user,N=(0,v.k6)(),F=function(){var e=(0,a.Z)(u().mark((function e(){var t,r,n,a,s,i,o,d,m,b,v,y;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=A&&A.address){e.next=2;break}return e.abrupt("return");case 2:return c(!0),e.next=5,(0,p.fe)().catch((function(){}));case 5:for(t=e.sent,r=[],n=0;n<t;n++)r.push({abi:"ParaFactory",address:l.Z.ParaFactory,method:"allPairs",params:[n]});return e.next=10,(0,f.Z)(r).catch((function(){}));case 10:return a=e.sent,s=[],a.map((function(e){s.push({abi:"erc20",address:e,method:"balanceOf",params:[A.address]})})),e.next=15,(0,f.Z)(s).catch((function(){}));case 15:return i=e.sent,o=[],i.map((function(e,t){"0"!=e&&o.push({lpAddress:a[t],deposit:(0,h.eK)(e).toFixed()})})),d=[],o.map((function(e){d.push({abi:"pair",address:e.lpAddress,method:"token0",params:[]}),d.push({abi:"pair",address:e.lpAddress,method:"token1",params:[]})})),e.next=22,(0,f.Z)(d).catch((function(){}));case 22:return m=e.sent,b=[],m.map((function(e){b.push({abi:"erc20",address:e,params:[],method:"symbol"})})),e.next=27,(0,f.Z)(b).catch((function(){}));case 27:v=e.sent,y=[],o.map((function(e,t){y.push(g(g({},e),{},{name:v[2*t]+"-"+v[2*t+1],tokenA:m[2*t],tokenB:m[2*t+1]}))})),S(y),c(!1);case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,a.Z)(u().mark((function e(t,r,n,a){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.address&&t&&r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,w.EW)(a,A.address,l.Z.ParaRouter);case 4:if("0"!=e.sent){e.next=12;break}return e.next=8,(0,Z.HF)(a,l.Z.ParaRouter);case 8:e.sent&&D(t,r,n),e.next=13;break;case 12:D(t,r,n);case 13:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),D=function(){var t=(0,a.Z)(u().mark((function t(r,n,a){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,y.P)(r,n,(0,h.tr)(a).toFixed(),A.address).catch((function(){}));case 2:t.sent?(F(),x.Z.show(e("page.AddLiquidity.remove_success"))):x.Z.show(e("page.AddLiquidity.remove_fail"));case 4:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),R=function(){var e=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.address){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,w.cv)(l.Z.PusdUsdtLp,A.address,18);case 4:t=e.sent,j(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.address){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,w.EW)(l.Z.PusdUsdtLp,A.address,l.Z.ParaStableSwap);case 4:if("0"!=e.sent){e.next=12;break}return e.next=8,(0,Z.HF)(l.Z.PusdUsdtLp,l.Z.ParaStableSwap);case 8:e.sent&&U(),e.next=13;break;case 12:U();case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var t=(0,a.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,k.n)((0,h.tr)(O).toFixed(),[0,0]);case 2:t.sent?(R(),x.Z.show(e("page.AddLiquidity.remove_success"))):x.Z.show(e("page.AddLiquidity.remove_fail"));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){F(),R()}),[null==A?void 0:A.address]),i.createElement(i.Fragment,null,i.createElement("div",{className:"font-weight-500 font-size-16 font-color-white mt-10 ml-20"},e("common.my_position")),i.createElement("div",{className:"store-line mt-10 ml-20 mr-20"}),i.createElement(d.Z,{bgColor:"#141419"},i.createElement("div",{className:"als-lp"},"PUSD-USDT LP"),i.createElement("div",{className:"als-lp-deposit mt-10"},e("page.LPDoubleEnter.enter_canuse_num"),(0,h.JR)(O)),i.createElement("div",{className:"flex-row fl-jc-between mt20"},i.createElement("div",{style:{flex:.35},onClick:function(){return H()},className:"als-button-remove button-click height-44 flex-center"},e("page.AddLiquidity.remove_liquidity")),i.createElement("div",{style:{flex:.6},onClick:function(){N.push("/addLiquidity")},className:"button-common button-click height-44 flex-center"},e("page.AddLiquidity.readd_liquidity")))),n&&i.createElement(b.gb,{className:"flex-row fl-jc-center mt-20",size:"24px",vertical:!0},e("common.loading")),L.length<=0&&!n&&i.createElement(b.HY,{description:e("common.no_record")}),L.map((function(t,r){return i.createElement(d.Z,{bgColor:"#141419",key:r},i.createElement("div",{className:"als-lp"},null!=t&&t.name?(null==t?void 0:t.name)+" LP":e("common.loading")),i.createElement("div",{className:"als-lp-deposit mt-10"},e("page.LPDoubleEnter.enter_canuse_num"),(0,h.JR)(t.deposit)),i.createElement("div",{className:"flex-row fl-jc-between mt20"},i.createElement("div",{style:{flex:.35},onClick:function(){return C(t.tokenA,t.tokenB,t.deposit,t.lpAddress)},className:"als-button-remove button-click height-44 flex-center"},e("page.AddLiquidity.remove_liquidity")),i.createElement("div",{style:{flex:.6},onClick:function(){N.push("/addLiquidity")},className:"button-common button-click height-44 flex-center"},e("page.AddLiquidity.readd_liquidity"))))})))}}}]);