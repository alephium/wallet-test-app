(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4061)}])},4061:function(e,t,a){"use strict";let s;a.r(t),a.d(t,{default:function(){return pages}});var n=a(5893),r=a(9008),l=a.n(r),i=a(7294),o=a(1447),c=a(6656),d=JSON.parse('{"version":"v2.8.0","name":"PresaleToken","bytecode":"030409121a4022010000000102ce0002010000000102ce01020100000001020e020100000001020e02","codeHash":"68b5b8ea856a1bbaf28fb8f2495d8a2b2d13c8c0ef436eebe2880f837ba98d1b","fieldsSig":{"names":["symbol","name","__stdInterfaceId"],"types":["ByteVec","ByteVec","ByteVec"],"isMutable":[false,false,false]},"eventsSig":[],"functions":[{"name":"getSymbol","usePreapprovedAssets":false,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":["ByteVec"]},{"name":"getName","usePreapprovedAssets":false,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":["ByteVec"]},{"name":"getDecimals","usePreapprovedAssets":false,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":["U256"]},{"name":"getTotalSupply","usePreapprovedAssets":false,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":["U256"]}],"constants":[{"name":"Ap","value":{"type":"U256","value":"2"}}],"enums":[],"stdInterfaceId":"0001"}');function getContractByCodeHash(e){void 0===s&&(s=[u,h]);let t=s.find(t=>t.contract.codeHash===e||t.contract.codeHashDebug===e);if(void 0===t)throw Error("Unknown code with code hash: "+e);return t.contract}let Factory=class Factory extends c.ContractFactory{getInitialFieldsWithDefaultValues(){return this.contract.getInitialFieldsWithDefaultValues()}at(e){return new PresaleTokenInstance(e)}constructor(...e){super(...e),this.consts={Ap:BigInt(2)},this.tests={getSymbol:async e=>(0,c.testMethod)(this,"getSymbol",e),getName:async e=>(0,c.testMethod)(this,"getName",e),getDecimals:async e=>(0,c.testMethod)(this,"getDecimals",e),getTotalSupply:async e=>(0,c.testMethod)(this,"getTotalSupply",e)}}};let u=new Factory(c.Contract.fromJson(d,"","68b5b8ea856a1bbaf28fb8f2495d8a2b2d13c8c0ef436eebe2880f837ba98d1b"));let PresaleTokenInstance=class PresaleTokenInstance extends c.ContractInstance{async fetchState(){return(0,c.fetchContractState)(u,this)}async multicall(e){return await (0,c.multicallMethods)(u,this,e,getContractByCodeHash)}constructor(e){super(e),this.methods={getSymbol:async e=>(0,c.callMethod)(u,this,"getSymbol",void 0===e?{}:e,getContractByCodeHash),getName:async e=>(0,c.callMethod)(u,this,"getName",void 0===e?{}:e,getContractByCodeHash),getDecimals:async e=>(0,c.callMethod)(u,this,"getDecimals",void 0===e?{}:e,getContractByCodeHash),getTotalSupply:async e=>(0,c.callMethod)(u,this,"getTotalSupply",void 0===e?{}:e,getContractByCodeHash)}}};var m=JSON.parse('{"version":"v2.8.0","name":"ShinyToken","bytecode":"050609121b4024403c4045010000000102ce0002010000000102ce0102010000000102ce0202010000000102ce03020102020200071600b11601ab160013c3038d7ea4c68000a80102010100021600b0","codeHash":"5fa5fb7f1345ae13a578f49e9ddced90971c0ca97b6e0bf1ab17e64418d09ea5","fieldsSig":{"names":["symbol","name","decimals","totalSupply","__stdInterfaceId"],"types":["ByteVec","ByteVec","U256","U256","ByteVec"],"isMutable":[false,false,false,false,false]},"eventsSig":[],"functions":[{"name":"getSymbol","usePreapprovedAssets":false,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":["ByteVec"]},{"name":"getName","usePreapprovedAssets":false,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":["ByteVec"]},{"name":"getDecimals","usePreapprovedAssets":false,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":["U256"]},{"name":"getTotalSupply","usePreapprovedAssets":false,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":["U256"]},{"name":"transfer","usePreapprovedAssets":false,"useAssetsInContract":true,"isPublic":true,"paramNames":["to","amount"],"paramTypes":["Address","U256"],"paramIsMutable":[false,false],"returnTypes":[]},{"name":"destroy","usePreapprovedAssets":false,"useAssetsInContract":true,"isPublic":true,"paramNames":["to"],"paramTypes":["Address"],"paramIsMutable":[false],"returnTypes":[]}],"constants":[],"enums":[],"stdInterfaceId":"0001"}');let ShinyToken_Factory=class ShinyToken_Factory extends c.ContractFactory{getInitialFieldsWithDefaultValues(){return this.contract.getInitialFieldsWithDefaultValues()}at(e){return new ShinyTokenInstance(e)}constructor(...e){super(...e),this.tests={getSymbol:async e=>(0,c.testMethod)(this,"getSymbol",e),getName:async e=>(0,c.testMethod)(this,"getName",e),getDecimals:async e=>(0,c.testMethod)(this,"getDecimals",e),getTotalSupply:async e=>(0,c.testMethod)(this,"getTotalSupply",e),transfer:async e=>(0,c.testMethod)(this,"transfer",e),destroy:async e=>(0,c.testMethod)(this,"destroy",e)}}};let h=new ShinyToken_Factory(c.Contract.fromJson(m,"","5fa5fb7f1345ae13a578f49e9ddced90971c0ca97b6e0bf1ab17e64418d09ea5"));let ShinyTokenInstance=class ShinyTokenInstance extends c.ContractInstance{async fetchState(){return(0,c.fetchContractState)(h,this)}async multicall(e){return await (0,c.multicallMethods)(h,this,e,getContractByCodeHash)}constructor(e){super(e),this.methods={getSymbol:async e=>(0,c.callMethod)(h,this,"getSymbol",void 0===e?{}:e,getContractByCodeHash),getName:async e=>(0,c.callMethod)(h,this,"getName",void 0===e?{}:e,getContractByCodeHash),getDecimals:async e=>(0,c.callMethod)(h,this,"getDecimals",void 0===e?{}:e,getContractByCodeHash),getTotalSupply:async e=>(0,c.callMethod)(h,this,"getTotalSupply",void 0===e?{}:e,getContractByCodeHash)}}};var p=JSON.parse('{"version":"v2.8.0","name":"Destroy","bytecodeTemplate":"01010300000005{1}0d0c{0}0105","fieldsSig":{"names":["shinyTokenId","to"],"types":["ByteVec","Address"],"isMutable":[false,false]},"functions":[{"name":"main","usePreapprovedAssets":true,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":[]}]}'),g=JSON.parse('{"version":"v2.8.0","name":"Transfer","bytecodeTemplate":"01010300000006{1}{2}0e0c{0}0104","fieldsSig":{"names":["shinyTokenId","to","amount"],"types":["ByteVec","Address","U256"],"isMutable":[false,false,false]},"functions":[{"name":"main","usePreapprovedAssets":true,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":[]}]}');let f=new c.ExecutableScript(c.Script.fromJson(p)),b=new c.ExecutableScript(c.Script.fromJson(g)),getTokenBalances=async(e,t)=>{if(!e||!e.explorerProvider)return console.log("Alephium explorer provider not initialized"),[];let a=[],s=await e.explorerProvider.addresses.getAddressesAddressTokens(t);for(let n of s){let s=a.find(e=>e.id===n),r=await e.explorerProvider.addresses.getAddressesAddressTokensTokenIdBalance(t,n);s?(s.balance.balance+=BigInt(r.balance),s.balance.lockedBalance+=BigInt(r.lockedBalance)):a.push({id:n,balance:{balance:BigInt(r.balance),lockedBalance:BigInt(r.lockedBalance)}})}return a},getAlphBalance=async(e,t)=>{if(!e||!e.explorerProvider){console.log("Alephium explorer provider not initialized");return}let a=await e.explorerProvider.addresses.getAddressesAddressBalance(t);return a},mintToken=async(e,t)=>{if(void 0===e)throw Error("alephium object not initialized");return h.deploy(e,{initialFields:{name:(0,c.stringToHex)("ShinyToken"),symbol:(0,c.stringToHex)("SHINY"),decimals:0n,totalSupply:BigInt(t)},initialAttoAlphAmount:BigInt(11e17),issueTokenAmount:BigInt(t)})},withdrawMintedToken=async(e,t,a)=>{if(void 0===e)throw Error("alephium object not initialized");return b.execute(e,{initialFields:{shinyTokenId:(0,c.binToHex)((0,c.contractIdFromAddress)(a)),to:(await e.getSelectedAccount()).address,amount:BigInt(t)}})},transferToken=async(e,t,a,s)=>{if(void 0===e)throw Error("alephium object not initialized");return await e.signAndSubmitTransferTx({signerAddress:(await e.getSelectedAccount()).address,destinations:[{address:a,attoAlphAmount:c.DUST_AMOUNT,tokens:[{id:t,amount:BigInt(s)}]}]})},transferTokenSignAndSubmitUnsignedTx=async(e,t,a,s)=>{if(void 0===e)throw Error("alephium object not initialized");let n=c.TransactionBuilder.from(e.nodeProvider),r=await e.getSelectedAccount(),l=await n.buildTransferTx({signerAddress:r.address,destinations:[{address:a,attoAlphAmount:c.DUST_AMOUNT,tokens:[{id:t,amount:BigInt(s)}]}]},r.publicKey);return await e.signAndSubmitUnsignedTx({signerAddress:r.address,unsignedTx:l.unsignedTx})},destroyTokenContract=async(e,t)=>{if(void 0===e)throw Error("alephium object not initialized");return f.execute(e,{initialFields:{shinyTokenId:(0,c.binToHex)((0,c.contractIdFromAddress)(t)),to:(await e.getSelectedAccount()).address}})},getExplorerBaseUrl=()=>"http://localhost:23000",signMessage=async(e,t,a,s)=>{if(void 0===e||void 0===t)throw Error("Alephium object not initialized");return await e.signMessage({signerAddress:t.address,message:a,messageHasher:s})},signUnsignedTx=async(e,t,a)=>{if(void 0===e||void 0===t)throw Error("Alephium object not initialized");return await e.signUnsignedTx({signerAddress:t.address,signerKeyType:t.keyType,unsignedTx:a})};var y=a(1110),x=a.n(y),v=a(1462);let TokenDapp=e=>{let{address:t}=e,[a,s]=(0,i.useState)("10"),[r,l]=(0,i.useState)(""),[d,u]=(0,i.useState)(""),[m,h]=(0,i.useState)(""),[p,g]=(0,i.useState)("alephium"),[f,b]=(0,i.useState)("0004008000585cc1174876e800023f60913be92d4146622bba53124af5a9c0f2cdff6dbae1c696234237fb01fb5146fb3aa000029fbc50dd1c3fe5627f9f4d92541d6cb61267dc048752cd62672a3eaa0d293a3e3f60913b7e9bcf71333c7a8eb03ef54662d4e26963f41cd7ae9d5d631e285bf85dea8f3800029fbc50dd1c3fe5627f9f4d92541d6cb61267dc048752cd62672a3eaa0d293a3e03c3038d7ea4c6800000fe0b3dcc3a1b1d2b7e938008d95d112f19cc6afdceb9741159461e82f46bfc05000000000000000001be1aca0019bedc404eed78c63a2d56db07e520ef63ec8da6aee600d1cd5a0d010100c3038d7ea4c6800000fe0b3dcc3a1b1d2b7e938008d95d112f19cc6afdceb9741159461e82f46bfc05000000000000000001be1aca0019bedc404eed78c63a2d56db07e520ef63ec8da6aee600d1cd5a0d010900c53607873e84ad38b00000fe0b3dcc3a1b1d2b7e938008d95d112f19cc6afdceb9741159461e82f46bfc0500000000000000000000"),[y,T]=(0,i.useState)(""),[S,j]=(0,i.useState)(),[A,k]=(0,i.useState)(""),[I,C]=(0,i.useState)("idle"),[N,w]=(0,i.useState)(""),[_,M]=(0,i.useState)(""),[B,P]=(0,i.useState)(""),[F,H]=(0,i.useState)(""),[D,U]=(0,i.useState)([]),[E,O]=(0,i.useState)(),[V,z]=(0,i.useState)(),[W,J]=(0,i.useState)(!1),[X,K]=(0,i.useState)(),{signer:L,account:Y}=(0,v.Os)(),Z=["approve","pending"].includes(I),resetMintToken=()=>{z(void 0),s("10"),J(!1)};(0,i.useEffect)(()=>{getTokenBalances(L,t).then(e=>{e.length>0&&K({value:e[0],label:e[0].id}),U(e)}),getAlphBalance(L,t).then(e=>{O(e)})},[t,L]),(0,i.useEffect)(()=>{(async()=>{if(A&&"pending"===I){if(w(""),null==L?void 0:L.nodeProvider){let e;let t=0;c.web3.setCurrentNodeProvider(L.nodeProvider),e=(0,c.subscribeToTxStatus)({pollingInterval:3e3,messageCallback:async a=>{switch(a.type){case"Confirmed":console.log("Transaction ".concat(A," is confirmed")),C("success"),W&&(console.log("reset mint token"),resetMintToken()),null==e||e.unsubscribe();break;case"TxNotFound":console.log("Transaction ".concat(A," is not found")),t>3?(C("failure"),w("Transaction ".concat(A," not found")),null==e||e.unsubscribe()):await new Promise(e=>setTimeout(e,3e3)),t+=1;break;case"MemPooled":console.log("Transaction ".concat(A," is in mempool")),C("pending")}},errorCallback:(e,t)=>{console.log(e),C("failure");let a=e?"".concat(e):"No further details";return(null==e?void 0:e.response)&&(a=JSON.stringify(e.response,null,2)),w(a),t.unsubscribe(),Promise.resolve()}},A)}else throw Error("Alephium object is not initialized")}})()},[I,A,null==L?void 0:L.nodeProvider,W]);let handleMintSubmit=async e=>{e.preventDefault();try{C("approve"),console.log("mint",a);let e=await mintToken(L,a);console.log(e),z(e.contractInstance.address),k(e.txId),C("pending")}catch(e){console.error(e),C("idle")}},handleTransferSubmit=async e=>{try{e.preventDefault(),C("approve"),console.log("transfer",{transferTo:r,transferAmount:d});let t=await transferToken(L,B,r,d);console.log(t),k(t.txId),C("pending")}catch(e){console.error(e),C("idle")}},handleTransferSubmitUnsignedTx=async e=>{try{e.preventDefault(),C("approve"),console.log("transfer",{transferTo:r,transferAmount:d});let t=await transferTokenSignAndSubmitUnsignedTx(L,B,r,d);console.log(t),k(t.txId),C("pending")}catch(e){console.error(e),C("idle")}},handleDestroyTokenSubmit=async e=>{try{e.preventDefault(),C("approve");let t=await destroyTokenContract(L,F);k(t.txId),C("pending")}catch(e){console.error(e),C("idle")}},handleWithdrawMintedTokenSubmit=async e=>{try{if(e.preventDefault(),V){C("approve"),console.log("transfer",{transferTo:r,transferAmount:d,mintedToken:V});let e=await withdrawMintedToken(L,a,V);k(e.txId),C("pending"),J(!0)}else throw Error("No minted token")}catch(e){console.error(e),C("idle")}},handleSignSubmit=async e=>{try{e.preventDefault(),C("approve"),console.log("sign",m,p);let t=await signMessage(L,Y,m,p);console.log(t),j(t.signature),C("success")}catch(e){console.error(e),C("idle")}},handleSignUnsignedTxSubmit=async e=>{try{e.preventDefault(),C("approve"),console.log("sign unsigned tx",f);let t=await signUnsignedTx(L,Y,f);console.log(t),T(t.signature),C("success")}catch(e){console.error(e),C("idle")}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h3",{style:{margin:0},children:["Transaction status: ",(0,n.jsx)("code",{children:I})]}),A&&(0,n.jsxs)("h3",{style:{margin:0},children:["Transaction hash:"," ",(0,n.jsx)("a",{href:"".concat(getExplorerBaseUrl(),"/transactions/").concat(A),target:"_blank",rel:"noreferrer",style:{color:"blue",margin:"0 0 1em"},children:(0,n.jsx)("code",{children:A})})]}),N&&(0,n.jsxs)("h3",{style:{margin:0},children:["Transaction error:"," ",(0,n.jsx)("textarea",{style:{width:"100%",height:100,background:"white"},value:N,readOnly:!0})]}),(0,n.jsxs)("h3",{style:{margin:0},children:["ALPH Balance: ",(0,n.jsxs)("code",{children:[(null==E?void 0:E.balance)&&(0,c.prettifyAttoAlphAmount)(E.balance)," ALPH"]})]}),(0,n.jsx)("h3",{style:{margin:0},children:D.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("label",{children:["Token Balances (",D.length," tokens in total)"]}),(0,n.jsxs)("div",{className:"columns",children:[(0,n.jsx)(o.ZP,{value:X,onChange:e=>{e&&K(e)},options:D.map(e=>({value:e,label:e.id}))}),(0,n.jsx)("code",{children:null==X?void 0:X.value.balance.balance.toString()}),(0,n.jsx)("code",{})]}),(0,n.jsx)("span",{className:"error-message",children:_})]}):(0,n.jsx)("div",{children:"No tokens"})}),(0,n.jsxs)("div",{className:"columns",children:[V&&Y?(0,n.jsxs)("form",{onSubmit:handleWithdrawMintedTokenSubmit,children:[(0,n.jsx)("h2",{className:x().title,children:"Withdraw all minted token"}),(0,n.jsx)("label",{htmlFor:"token-address",children:"Token Address"}),(0,n.jsx)("p",{children:V}),(0,n.jsx)("label",{htmlFor:"transfer-to",children:"To"}),(0,n.jsx)("input",{type:"text",id:"transfer-to",name:"fname",disabled:!0,value:Y.address,onChange:e=>l(e.target.value)}),(0,n.jsx)("label",{htmlFor:"transfer-amount",children:"Amount"}),(0,n.jsx)("input",{type:"number",id:"transfer-amount",name:"fname",disabled:!0,value:a,onChange:e=>u(e.target.value)}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"submit",disabled:Z,value:"Withdraw"})]}):(0,n.jsxs)("form",{onSubmit:handleMintSubmit,children:[(0,n.jsx)("h2",{className:x().title,children:"Mint token"}),(0,n.jsx)("label",{htmlFor:"mint-amount",children:"Amount"}),(0,n.jsx)("input",{type:"number",id:"mint-amount",name:"fname",value:a,onChange:e=>s(e.target.value)}),(0,n.jsx)("input",{type:"submit"})]}),(0,n.jsxs)("form",{onSubmit:handleTransferSubmit,children:[(0,n.jsx)("h2",{className:x().title,children:"Transfer token"}),(0,n.jsx)("label",{htmlFor:"transfer-token-address",children:"Token Id"}),(0,n.jsx)("input",{type:"text",id:"transfer-to",name:"fname",value:B,onChange:e=>P(e.target.value)}),(0,n.jsx)("label",{htmlFor:"transfer-to",children:"To"}),(0,n.jsx)("input",{type:"text",id:"transfer-to",name:"fname",value:r,onChange:e=>l(e.target.value)}),(0,n.jsx)("label",{htmlFor:"transfer-amount",children:"Amount"}),(0,n.jsx)("input",{type:"number",id:"transfer-amount",name:"fname",value:d,onChange:e=>u(e.target.value)}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"submit",disabled:Z,value:"Transfer"})]}),(0,n.jsxs)("form",{onSubmit:handleTransferSubmitUnsignedTx,children:[(0,n.jsx)("h2",{className:x().title,children:"Transfer token (sign & submit unsigned tx)"}),(0,n.jsx)("label",{htmlFor:"transfer-token-address",children:"Token Id"}),(0,n.jsx)("input",{type:"text",id:"transfer-to",name:"fname",value:B,onChange:e=>P(e.target.value)}),(0,n.jsx)("label",{htmlFor:"transfer-to",children:"To"}),(0,n.jsx)("input",{type:"text",id:"transfer-to",name:"fname",value:r,onChange:e=>l(e.target.value)}),(0,n.jsx)("label",{htmlFor:"transfer-amount",children:"Amount"}),(0,n.jsx)("input",{type:"number",id:"transfer-amount",name:"fname",value:d,onChange:e=>u(e.target.value)}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"submit",disabled:Z,value:"Transfer"})]}),(0,n.jsxs)("form",{onSubmit:handleDestroyTokenSubmit,children:[(0,n.jsx)("h2",{className:x().title,children:"Destroy token contract"}),(0,n.jsx)("label",{htmlFor:"destroy-token-address",children:"Token Id"}),(0,n.jsx)("input",{type:"text",id:"destroy-token-address",name:"fname",value:F,onChange:e=>H(e.target.value)}),(0,n.jsx)("input",{type:"submit",disabled:Z,value:"Destroy"})]})]}),(0,n.jsxs)("div",{className:"columns",children:[(0,n.jsxs)("form",{onSubmit:handleSignSubmit,children:[(0,n.jsx)("h2",{className:x().title,children:"Sign Message"}),(0,n.jsxs)("div",{className:"columns",children:[(0,n.jsx)("label",{htmlFor:"short-text",children:"Short Text"}),(0,n.jsx)("textarea",{id:"short-text",name:"short-text",value:m,onChange:e=>h(e.target.value)})]}),(0,n.jsxs)("div",{className:"columns",children:[(0,n.jsx)("label",{htmlFor:"short-text",children:"Hasher"}),(0,n.jsxs)("select",{name:"hasher",id:"hasher",onChange:e=>g(e.target.value),children:[(0,n.jsx)("option",{value:"alephium",children:"Alephium"}),(0,n.jsx)("option",{value:"sha256",children:"Sha256"}),(0,n.jsx)("option",{value:"blake2b",children:"blake2b"})]})]}),(0,n.jsx)("input",{type:"submit",value:"Sign"})]}),(0,n.jsxs)("form",{children:[(0,n.jsx)("h2",{className:x().title,children:"Sign results"}),(0,n.jsx)("label",{htmlFor:"r",children:"Signature"}),(0,n.jsx)("textarea",{className:x().textarea,id:"signature",name:"signature",value:S,readOnly:!0})]})]}),(0,n.jsxs)("div",{className:"columns",children:[(0,n.jsxs)("form",{onSubmit:handleSignUnsignedTxSubmit,children:[(0,n.jsx)("h2",{className:x().title,children:"Sign Unsigned Tx"}),(0,n.jsxs)("div",{className:"columns",children:[(0,n.jsx)("label",{htmlFor:"short-text",children:"Unsigned Tx"}),(0,n.jsx)("input",{type:"text",id:"short-text",name:"short-text",value:f,onChange:e=>b(e.target.value)})]}),(0,n.jsx)("input",{type:"submit",value:"Sign"})]}),(0,n.jsxs)("form",{children:[(0,n.jsx)("h2",{className:x().title,children:"Sign results"}),(0,n.jsx)("label",{htmlFor:"r",children:"Signature"}),(0,n.jsx)("textarea",{className:x().textarea,id:"signature",name:"signature",value:y,readOnly:!0})]})]})]})};var pages=()=>{let{connectionStatus:e,account:t}=(0,v.Os)();return(0,n.jsxs)("div",{className:x().container,children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"Alephium Test dApp"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("main",{className:x().main,children:"connected"===e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v.u$,{}),(0,n.jsxs)("h3",{style:{margin:0},children:["Wallet address: ",(0,n.jsx)("code",{children:t.address})]}),(0,n.jsxs)("h3",{style:{margin:0},children:["Network: ",(0,n.jsx)("code",{children:"Devnet"})]}),t.address&&(0,n.jsx)(TokenDapp,{address:t.address})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v.u$,{}),(0,n.jsx)("p",{children:"First connect wallet to use dapp."})]})})]})}},1110:function(e){e.exports={container:"Home_container__9OuOz",main:"Home_main__2uIek",connect:"Home_connect__LXESY",title:"Home_title__YEn0u",description:"Home_description__zHUB6",code:"Home_code__BZK8z",grid:"Home_grid__vo_ES",card:"Home_card__HIlp_",logo:"Home_logo__ZEOng",textarea:"Home_textarea__8_W6X"}}},function(e){e.O(0,[885,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);