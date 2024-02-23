"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["default-src_page_V42Project_muiltApi_js-src_page_V42Project_muiltInfo_js"],{41449:(e,t,r)=>{r.d(t,{WY:()=>K,Mo:()=>Z,z1:()=>X,th:()=>te,BX:()=>q,fp:()=>$,mt:()=>Y,uq:()=>O,n3:()=>G,ww:()=>M,dy:()=>F,eJ:()=>J,R_:()=>C,yN:()=>T,d_:()=>A,y:()=>B,Zh:()=>V,aj:()=>k,ZO:()=>N,ni:()=>v});var n=r(15861),a=r(42982),s=r(64687),u=r.n(s),i=r(38104),o=r(34234),c=r(6065),d=r(88705),p=r(57218),f=r(93286),l=r(44242);function h(e){const t=(0,l.Y0)(e);if(t.length>31)throw new Error("bytes32 string must be less than 32 bytes");return(0,f.Dv)((0,f.zo)([t,p.R]).slice(0,32))}function y(e){const t=(0,f.lE)(e);if(32!==t.length)throw new Error("invalid bytes32 - not 32 bytes long");if(0!==t[31])throw new Error("invalid bytes32 string - no null terminator");let r=31;for(;0===t[r-1];)r--;return(0,l.ZN)(t.slice(0,r))}var b=r(30381),m=r.n(b);function Z(e,t,r){var n;return(n=new window.web3.eth.Contract(d.Z[e]).methods)[t].apply(n,(0,a.Z)(r)).encodeABI()}function v(e,t){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"MultiSigWallet",address:t,method:"isOwner",params:[r],type:"call"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(u().mark((function e(t){var r,n,a,s,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"MultiSigWallet",address:i.Z[t],method:"transactionCount",params:[],type:"call"});case 2:return r=e.sent,n=new Array(parseInt(r)).fill(1),e.next=6,(0,c.Z)(n.map((function(e,r){return{abi:"MultiSigWallet",address:i.Z[t],method:"isConfirmed",params:[r]}})));case 6:return a=e.sent,e.next=9,(0,c.Z)(n.map((function(e,r){return{abi:"MultiSigWallet",address:i.Z[t],method:"transactions",params:[r]}})));case 9:return s=e.sent,Array.isArray(a)||(a=[a]),d=s.map((function(e,t){return{typeText:t,dec:y(e.description||e[0]),time:m()(1e3*(e.createTime||e[1])).format("YYYY-MM-DD HH:mm:ss"),submitter:e.submitter||e[5],isDiscard:"0x0000000000000000000000000000000000000000"==e[5],data:e.data||e[4],itemstatus:"0x0000000000000000000000000000000000000000"==e[5]?"discard":e.executed||e[6]?"success":"wait",startAddree:e.destination||e[2],id:t,isConfirmed:a[t]}})),e.abrupt("return",d);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return S.apply(this,arguments)}function S(){return(S=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"MultiSigWallet",address:i.Z[t],method:"getConfirmations",params:[r],type:"call"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return L.apply(this,arguments)}function L(){return(L=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"MultiSigWallet",address:i.Z[t],method:"required",params:[],type:"call"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"MultiSigWallet",address:i.Z[t],method:"confirmTransaction",params:[r],type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return D.apply(this,arguments)}function D(){return(D=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"MultiSigWallet",address:i.Z[t],method:"revokeConfirmation",params:[r],type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return W.apply(this,arguments)}function W(){return(W=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"MultiSigWallet",address:i.Z[t],method:"executeTransaction",params:[r],type:"send",gasLimit:5e6});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t,r){return P.apply(this,arguments)}function P(){return(P=(0,n.Z)(u().mark((function e(t,r,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"MultiSigWallet",address:i.Z[t],method:"submitTransaction",params:[].concat((0,a.Z)(r),[h(n)]),type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e,t){return R.apply(this,arguments)}function R(){return(R=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"MultiSigWallet",address:i.Z[t],method:"discardTransaction",params:[r],type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t,r){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(u().mark((function e(t,r,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(t,r,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return E.apply(this,arguments)}function E(){return(E=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r,[t],"type,[enterAddress]"),e.next=3,Z("MultiSigWallet",r,[t]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return H.apply(this,arguments)}function H(){return(H=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("MultiSigWallet","changeRequirement",[t]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return U.apply(this,arguments)}function U(){return(U=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("erc20","transfer",[t,r]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return j.apply(this,arguments)}function j(){return(j=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("erc20","approve",[t,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return I.apply(this,arguments)}function I(){return(I=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z("ParaRouterPeriphery","swapAll",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){return z.apply(this,arguments)}function z(){return(z=(0,n.Z)(u().mark((function e(t,r){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"MultiSigWallet",address:i.Z[r],method:"getOwners",params:[],type:"call"});case 2:return n=e.sent,Array.isArray(n)||(n=[n]),e.next=6,(0,c.Z)(n.map((function(e){return{abi:"MultiSigWallet",address:i.Z[r],method:"confirmations",params:[t,e]}})));case 6:return a=e.sent,e.abrupt("return",a.map((function(e,t){return{address:n[t],isOked:e}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,t){return Q.apply(this,arguments)}function Q(){return(Q=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:"TimeLock",address:r||i.Z.TimeLock,method:"executeTransaction",params:t,type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t,r){return ee.apply(this,arguments)}function ee(){return ee=(0,n.Z)(u().mark((function e(t,r,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({abi:t,address:r,method:n,params:[],type:"call"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}function te(e){return re.apply(this,arguments)}function re(){return re=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.abi,n=t.address,a=t.params,e.next=3,(0,o.Z)({abi:r,address:n,params:a,method:"hasRole",type:"call"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),re.apply(this,arguments)}},95370:(e,t,r)=>{r.d(t,{Z:()=>i});r(10005);var n=r(38104),a=[{abi:"HeadChef",abiJson:"HeadChef",address:n.Z.HeadChef,searchLockFun:"owner"},{abi:"SousChef",abiJson:"SousChef",address:n.Z.SousChef,searchLockFun:"owner"},{abi:"V42",abiJson:"V42New",address:n.Z.V42NEW,searchLockFun:"owner"},{abi:"CustoDian",abiJson:"CustoDian",address:n.Z.CustoDian,searchLockFun:"",lockAddress:"0x6f6c2E1f1cB6ec5908F90F967e1599a494674B1c"}],s=[{abi:"MasterChef",abiJson:"chef",address:n.Z.MasterChef,searchLockFun:"admin"},{abi:"ParaSupply",abiJson:"paraSupply",address:n.Z.paraSupply,searchLockFun:"admin"},{abi:"FeeDistributor",abiJson:"FeeDistributor",address:n.Z.FeeDistributor,searchLockFun:"admin"}],u=[{value:"0",label:"转账代币",secondLsit:[],hasSecond:!0},{value:"4",label:"自定义"},{value:"6",label:"添加议员"},{value:"7",label:"移除议员"},{value:"8",label:"改变多签可执行票数"}];const i={RibbonHash:"0x527d6c7a5158958dfa9ca07d7536a473493922816d4b21fbcccd2c0935aa819a",RibbonIsWhiteHash:"0xaa78df56d54872f9f607ac9f5f9ab30fede21db24fd6cbdd128f9689a8ddd661",mulitList:[{key:"CoreMulti",label:"核心多签",address:n.Z.CoreMulti},{key:"GovernanceMulti",label:"治理多签",address:n.Z.GovernanceMulti},{key:"Treasury",label:"Treasury多签",address:n.Z.Treasury},{key:"Buyback",label:"回购多签",address:n.Z.Buyback},{key:"Bonus",label:"Bonus多签",address:n.Z.Bonus},{key:"Fomo",label:"Fomo多签",address:n.Z.Fomo}],coinList:[],BURN_ADDRESS:"0x0000000000000000000000000000000000000001",CoreMulti:[{value:"1",label:"团队合约",hasSecond:!0,secondListAddress:n.Z.DevTeam,secondLsit:[{value:"addUsers",label:"添加用户",paramType:["address[]","uint256[]"],functionKey:"addUsers",address:n.Z.DevTeam,abi:"devteamv2"},{value:"setUsers",label:"设置用户权重",paramType:["uint256[]","uint256[]"],functionKey:"setUsers",address:n.Z.DevTeam,abi:"devteamv2"},{value:"setRunningState",label:"设置可领取收益",paramType:["bool"],functionKey:"setRunningState",address:n.Z.DevTeam,abi:"devteamv2"},{value:"addToken",label:"添加token",paramType:["address"],functionKey:"addToken",address:n.Z.DevTeam,abi:"devteamv2"},{value:"setLpTokens",label:"设置lptoken",paramType:["address[]"],functionKey:"setLpTokens",address:n.Z.DevTeam,abi:"devteamv2"},{value:"setExtTokens",label:"设置extTokens",paramType:["address[]"],functionKey:"addUsers",address:n.Z.DevTeam,abi:"devteamv2"}]}].concat(u),GovernanceMulti:[{value:"1",label:"质押借币",hasSecond:!0,secondListAddress:n.Z.CLinkPriceOracle,secondLsit:[{value:"setChainlink",label:"设置预言机地址",paramType:["address","address"],functionKey:"setChainlink",address:n.Z.CLinkPriceOracle,abi:"CLinkPriceOracle"}]},{value:"2",label:"CustoDian合约",hasSecond:!0,secondListAddress:n.Z.CustoDian,secondLsit:[{value:"mintFromChef",label:"mintFromChef方法",paramType:["uint256","uint256","address"],functionKey:"mintFromChef",address:n.Z.CustoDian,abi:"CustoDian"},{value:"redeemToChef",label:"redeemToChef方法",paramType:["uint256","uint256","address"],functionKey:"redeemToChef",address:n.Z.CustoDian,abi:"CustoDian"}]},{value:"3",label:"MasterChef合约",hasSecond:!0,secondListAddress:n.Z.MasterChef,secondLsit:[{value:"divertProperty",label:"资产转移方法",paramType:["address","address","bytes","uint256"],functionKey:"divertProperty",address:n.Z.MasterChef,abi:"chef"}]},{value:"5",label:"SousChef合约",hasSecond:!0,secondListAddress:n.Z.SousChef,secondLsit:[{value:"divertProperty",label:"资产转移方法",paramType:["address","address","bytes","uint256"],functionKey:"divertProperty",address:n.Z.SousChef,abi:"SousChef"}]}].concat(u),Treasury:[].concat(u),Buyback:[].concat(u),Bonus:[].concat(u),Fomo:[].concat(u),isBuyBackList:["Buyback"],isChangePoolList:["GovernanceMulti"],isUpdateAddresslist:["GovernanceMulti"],isLockTimeList:["GovernanceMulti"],LockTimeFun:{GovernanceMulti:[{abi:"SousChef",abiJson:"SousChef",lockAddress:n.Z.TimeLock,address:n.Z.SousChef,hasSecond:!0,searchLockFun:"",secondLsit:[{label:"divertProperty",paramType:[{type:"address",textShow:"oldAccount"},{type:"address",textShow:"newAccount"},{type:"bytes",textShow:"signature"},{type:"uint256",textShow:"哪个链BSC-0 TRON-1"}],functionKey:"divertProperty",address:n.Z.SousChef,abiJson:"SousChef"}]},{abi:"MasterChef",abiJson:"chef",lockAddress:n.Z.TimeLock,address:n.Z.MasterChef,hasSecond:!0,searchLockFun:"",secondLsit:[{label:"divertProperty",paramType:[{type:"address",textShow:"oldAccount"},{type:"address",textShow:"newAccount"},{type:"bytes",textShow:"signature"},{type:"uint256",textShow:"哪个链BSC-0 TRON-1"}],functionKey:"divertProperty",address:n.Z.MasterChef,abiJson:"chef"}]}]},updateAddressOneFunList:a,updateAddressTwoFunList:s}}}]);