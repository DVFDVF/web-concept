(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{1075:function(e,n,t){var a=t(1459);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t(12).default;i("155fe2af",a,!1,{sourceMap:!1,shadowMode:!1})},1458:function(e,n,t){"use strict";t(1075)},1459:function(e,n,t){var a=t(11);n=a(!1),n.push([e.i,"\n.game-auens[data-v-254ed50e] {\n  font-family: Montserrat Variable, sans-serif;\n  margin: 36px 0px;\n  text-align: center;\n}\n.game-list-header[data-v-254ed50e] {\n  align-items: center;\n  color: #55657e;\n  display: flex;\n  font-size: 11px;\n  font-weight: 700;\n  height: 28px;\n  letter-spacing: 0.66px;\n  text-transform: uppercase;\n}\n.game-item[data-v-254ed50e] {\n  align-items: center;\n  background: rgba(22, 31, 44, 0.8);\n  border-radius: 8px;\n  display: flex;\n  height: 50px;\n  margin-bottom: 6px;\n}\n.game-list[data-v-254ed50e] {\n  margin-bottom: 40px;\n}\n.game-list-header span[data-v-254ed50e],\n.game-item span[data-v-254ed50e] {\n  flex: 1 1;\n  padding: 0px 0px 0px 16px;\n  text-align: left;\n  display: flex;\n  flex-direction: row;\n\n  color: #93acd3;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.28px;\n  line-height: 125%;\n  align-items: center;\n  overflow: hidden;\n}\n.gameun-liens[data-v-254ed50e] {\n  align-items: center;\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 600;\n  height: 20px;\n  letter-spacing: -0.28px;\n  line-height: 20px;\n}\n.game-header[data-v-254ed50e] {\n  display: none;\n}\n.wrap[data-v-254ed50e] {\n  display: none;\n}\n.ellipsis[data-v-254ed50e] {\n  max-width: 290px;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.no-data[data-v-254ed50e] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.no-data-image[data-v-254ed50e] {\n  height: 165px;\n  width: 165px;\n}\n.no-data-text[data-v-254ed50e] {\n  color: #55657e;\n  font-size: 14px;\n  font-weight: 500;\n}\n.memo[data-v-254ed50e] {\n  overflow: hidden;\n  width: 100%;\n  white-space: nowrap; /* 防止文本换行 */\n  overflow: hidden; /* 超出部分隐藏 */\n  text-overflow: ellipsis; /* 超出部分以省略号显示 */\n  padding-right: 10px;\n}\n.popover-memo[data-v-254ed50e] {\n  color: white;\n  width: 200px;\n}\n@media only screen and (max-width: 767px) {\n.wrap[data-v-254ed50e] {\n    display: inline;\n}\n.game-header[data-v-254ed50e] {\n    align-items: center;\n    color: #55657e;\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    font-size: 11px;\n    font-weight: 700;\n    height: 28px;\n    letter-spacing: 0.66px;\n    text-transform: uppercase;\n}\n.game-type[data-v-254ed50e] {\n    width: calc(55% + 10px);\n    text-align: left;\n    margin-left: 10px;\n    padding: 0 10px;\n}\n.game-amount[data-v-254ed50e] {\n    text-align: left;\n    padding: 0 16px;\n}\n.wrap[data-v-254ed50e] {\n    overflow: hidden;\n}\n.statistic-line[data-v-254ed50e] {\n    align-items: center;\n    background: rgba(22, 31, 44, 0.8);\n    border-radius: 8px;\n    display: flex;\n    margin-top: 5px;\n    height: 50px;\n}\n.element.date-time[data-v-254ed50e] {\n    width: 40px;\n}\n.date-time[data-v-254ed50e] {\n    font-feature-settings: 'tnum' on, 'lnum' on;\n    font-weight: 600;\n}\n.tooltip[data-v-254ed50e] {\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: middle;\n}\n.date-time-icon-wrap[data-v-254ed50e] {\n    background-color: #2a3546;\n    border-radius: 8px;\n    display: flex;\n    height: 24px;\n    width: 24px;\n}\n.date-time-icon[data-v-254ed50e] {\n    color: #fff;\n    flex-basis: 16px;\n    font-size: 16px;\n    margin: auto;\n}\n.element.type[data-v-254ed50e] {\n    font-size: 14px;\n    padding: 0 10px;\n    width: 30%;\n    margin-left: 10px;\n}\n.type[data-v-254ed50e] {\n    color: #fff;\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: -0.28px;\n    line-height: 125%;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-align: left;\n}\n.element.status[data-v-254ed50e] {\n    width: 25%;\n}\n.status[data-v-254ed50e] {\n    align-items: center;\n    display: flex;\n}\n.tooltip[data-v-254ed50e] {\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: middle;\n    background-color: white;\n    border-radius: 3px;\n}\n.status-tooltip-trigger[data-v-254ed50e] {\n    height: 24px;\n    width: 24px;\n}\n.status-icon[data-v-254ed50e] {\n    flex-basis: 24px;\n    flex-shrink: 0;\n    font-size: 24px;\n    width: 24px;\n}\n.payout[data-v-254ed50e],\n  .payout-share[data-v-254ed50e] {\n    align-items: center;\n    display: flex;\n}\n.element[data-v-254ed50e] {\n    padding: 0 16px;\n}\n.currency-slice[data-v-254ed50e],\n  .currency-slice *[data-v-254ed50e] {\n    max-width: 100%;\n}\n.currency[data-v-254ed50e] {\n    align-items: center;\n    display: inline-flex;\n    flex-shrink: 0;\n}\n.currency-icon[data-v-254ed50e] {\n    flex-shrink: 0;\n    margin-right: 0.5em;\n}\n.currency-slice > span[data-v-254ed50e] {\n    display: inline-block;\n}\n.currency span span[data-v-254ed50e] {\n    font-size: inherit;\n    line-height: inherit;\n}\n.font-digits[data-v-254ed50e] {\n    font-weight: 600;\n    letter-spacing: -0.5px;\n    white-space: nowrap;\n}\n.currency span span[data-v-254ed50e] {\n    font-size: inherit;\n    line-height: inherit;\n}\n.element.payout .payout-share[data-v-254ed50e] {\n    margin-left: auto;\n    min-width: 24px;\n}\n.payout-share[data-v-254ed50e] {\n    background: #2a3546;\n    border-radius: 8px;\n    cursor: pointer;\n    height: 24px;\n    justify-content: center;\n    width: 24px;\n}\n.payout[data-v-254ed50e],\n  .payout-share[data-v-254ed50e] {\n    align-items: center;\n    display: flex;\n}\n.payout-share-icon[data-v-254ed50e] {\n    color: #93acd3;\n    font-size: 16px;\n}\n.game-auens[data-v-254ed50e] {\n    padding: 0px 10px;\n}\n.icon[data-v-254ed50e] {\n    width: 16px;\n    height: 16px;\n}\n.game-list-header[data-v-254ed50e],\n  .game-list[data-v-254ed50e] {\n    display: none;\n}\n.error[data-v-254ed50e] {\n    font-size: 18px;\n    color: red;\n    font-weight: 700;\n    line-height: 18px;\n}\n}\n",""]),e.exports=n},1699:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(930),c=t.n(i);const l=e=>(Object(a["P"])("data-v-254ed50e"),e=e(),Object(a["N"])(),e),s={class:"game-auens"},d={class:"game-list-header"},r={class:"game-header"},o={class:"game-type"},p={class:"game-amount"},g={class:"wrap"},m={class:"type element",style:{"text-transform":"lowercase"}},u={style:{padding:"0","text-align":"left"}},b={style:{margin:"1px 0 0 0"}},v={class:"status element"},h={class:"popover-memo"},x={class:"tooltip",iconsize:"22",showicon:"true",iconcolor:"#55657e"},f={key:0,class:"status-tooltip-trigger error"},j={key:1,class:"status-tooltip-trigger error"},O=l(()=>Object(a["m"])("svg",{t:"1711035104743",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4328",width:"200",height:"200"},[Object(a["m"])("path",{d:"M936.470481 431.851589c-9.006118-7.248078-22.181185-5.816472-29.404704 3.25616l-35.853579 44.924165c-1.173732-17.362436-3.472078-34.854832-7.119141-52.390207-44.728714-216.201064-255.093862-354.923522-469.839785-309.911352C179.482791 162.782434 41.648562 374.513696 86.3783 590.670757c44.729737 216.202087 255.091816 354.925568 469.861274 309.87042 78.063937-16.363689 145.169287-55.384401 197.687408-108.122533 0.194428-0.173962 0.39295-0.345877 0.587378-0.563842 0.934279-0.955768 1.257643-2.039449 2.191922-3.037173 1.541099-2.607384 2.64627-5.686513 2.64627-8.940626 0-9.54847-7.723915-17.319457-17.231453-17.319457-5.120624 0-9.592472 2.343371-12.760628 5.903453l-0.12996-0.085958c-47.680952 47.789423-108.860337 83.033112-179.697685 97.879238-194.476273 40.799218-384.982118-84.857667-425.479461-280.615119-40.518832-195.758476 84.314291-387.522987 278.791587-428.324252 194.476273-40.757263 384.982118 84.901669 425.480484 280.660144 3.124154 15.061021 5.253654 30.036084 6.509251 44.968168l-43.447535-35.114752c-9.029654-7.248078-22.181185-5.816472-29.404704 3.25616-7.251148 9.071609-5.794983 22.309098 3.212158 29.601178 0.041956 0.044002 0.041956 0.044002 0.085958 0.044002l80.06143 64.717977c0.022513 0 0.064468 0.041956 0.084934 0.041956 4.560876 3.689019 10.202363 5.121648 15.581883 4.470825 5.424546-0.563842 10.615779-3.123131 14.281261-7.724938 0.022513-0.041956 0.044002-0.086981 0.044002-0.086981l64.282049-80.646761c0.023536 0 0.023536 0 0.062422-0.044002C946.910251 452.382181 945.476599 439.144692 936.470481 431.851589z",fill:"#1296db","p-id":"4329"}),Object(a["m"])("path",{d:"M463.635479 730.611973c0 9.981329 8.138354 18.10024 18.144242 18.10024 10.004865 0 18.123776-8.116865 18.123776-18.10024l0.107447 0L500.010945 622.923322l109.033275 0 0-0.172939c10.006911 0 18.122753-8.160867 18.122753-18.145266 0-10.025331-8.116865-18.141172-18.122753-18.141172l-109.033275 0 0-56.035224 109.054765 0 0-0.002047 0-0.173962c9.983375 0 18.10024-8.116865 18.10024-18.143219 0-10.026354-8.116865-18.144242-18.10024-18.144242L500.008898 493.965252l0-33.378202 108.101043-106.037035-0.10847-0.130983c7.487531-6.641257 8.159844-18.10024 1.51961-25.610284-6.66377-7.509021-18.122753-8.159844-25.610284-1.518586l-101.676727 100.222609L375.285269 322.472436c-7.510044-6.642281-18.969027-5.946432-25.610284 1.561565-6.640234 7.466042-5.966898 18.925025 1.51961 25.566282l-0.10847 0.130983 112.463398 109.989043 0 34.244942L354.493733 493.965252l0 0.088004c-9.983375 0-18.10024 8.115841-18.10024 18.144242 0 10.026354 8.116865 18.144242 18.10024 18.144242l0 0.086981 109.055788 0 0 56.035224L354.493733 586.463945l0 0.084934c-9.983375 0-18.122753 8.160867-18.122753 18.145266 0 10.025331 8.138354 18.141172 18.122753 18.141172l0 0.088004 109.055788 0 0 107.687628L463.635479 730.61095z",fill:"#1296db","p-id":"4330"})],-1)),y=[O],w={key:2,class:"status-tooltip-trigger error"},z=l(()=>Object(a["m"])("svg",{t:"1711024503763",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"18031",width:"200",height:"200"},[Object(a["m"])("path",{d:"M512 0C230.4 0 0 230.4 0 512c0 281.6 230.4 512 512 512 281.6 0 512-230.4 512-512C1024 230.4 793.6 0 512 0zM512 960c-249.6 0-448-204.8-448-448s204.8-448 448-448c249.6 0 448 198.4 448 448S761.6 960 512 960zM736 486.4l-192 0L544 217.6c0-32-25.6-51.2-51.2-51.2-32 0-51.2 25.6-51.2 51.2l0 326.4c0 32 19.2 51.2 51.2 51.2l249.6 0c32 0 51.2-19.2 51.2-51.2C793.6 512 768 486.4 736 486.4z",fill:"#DDAA37","p-id":"18032"})],-1)),k=[z],M={key:3,class:"status-tooltip-trigger"},_=l(()=>Object(a["m"])("span",{class:"icon status-icon",style:{color:"rgb(27, 184, 61)"}},[Object(a["m"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[Object(a["m"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.06 10.36c.47-.49.45-1.27-.05-1.73a1.24 1.24 0 0 0-1.74.05l-4.2 4.42-2.34-2.45a1.24 1.24 0 0 0-1.74-.06c-.5.47-.52 1.24-.05 1.74l3.23 3.39a1.24 1.24 0 0 0 1.79 0l5.1-5.36Z"})])],-1)),C=[_],S={class:"payout element"},L={class:"currency currency-slice"},I={style:{"font-size":"14px"}},P={style:{color:"#fff"},class:"font-digits"},R={class:"game-list"},A={style:{padding:"0","text-align":"left"}},N={style:{margin:"1px 0 0 0"}},U={class:"ellipsis"},D={class:"popover-memo"},T={class:"memo"},E={class:"no-data"},F=l(()=>Object(a["m"])("img",{class:"no-data-image",src:c.a},null,-1)),Z={class:"no-data-text"};function B(e,n,t,i,c,l){const O=Object(a["V"])("Image"),z=Object(a["V"])("Money");return Object(a["M"])(),Object(a["l"])("div",s,[Object(a["k"])("Game List Header"),Object(a["m"])("div",d,[Object(a["m"])("span",null,Object(a["ab"])(i.lang.v.cz_id),1),Object(a["m"])("span",null,Object(a["ab"])(i.lang.v.ca_amount),1),Object(a["m"])("span",null,Object(a["ab"])(i.lang.v.ca_status),1),Object(a["m"])("span",null,Object(a["ab"])(i.lang.v.ca_info),1),Object(a["m"])("span",null,Object(a["ab"])(i.lang.v.cz_imemo),1)]),Object(a["k"])("手机header"),Object(a["m"])("div",r,[Object(a["m"])("div",o,Object(a["ab"])(i.lang.v.ca_type),1),Object(a["m"])("div",p,Object(a["ab"])(i.lang.v.ca_amount),1)]),Object(a["m"])("div",g,[(Object(a["M"])(!0),Object(a["l"])(a["b"],null,Object(a["T"])(i.payoutRecordData,e=>(Object(a["M"])(),Object(a["l"])("div",{class:"statistic-line line",key:e.id},[Object(a["m"])("div",m,[Object(a["m"])("span",null,[Object(a["m"])("div",u,[Object(a["m"])("p",b,Object(a["ab"])(e.time),1)])])]),Object(a["m"])("div",v,[Object(a["p"])(i["APopover"],{color:"#202a39"},{content:Object(a["mb"])(()=>[Object(a["m"])("div",h,Object(a["ab"])(e.memo?e.memo:i.lang.v.tr_no_remarks),1)]),default:Object(a["mb"])(()=>[Object(a["m"])("div",x,[0==e.status||-20==e.status||-10==e.status?(Object(a["M"])(),Object(a["l"])("div",f," x ")):30==e.status?(Object(a["M"])(),Object(a["l"])("div",j,y)):10==e.status?(Object(a["M"])(),Object(a["l"])("div",w,k)):(Object(a["M"])(),Object(a["l"])("div",M,C))])]),_:2},1024)]),Object(a["m"])("div",S,[Object(a["m"])("span",L,[Object(a["p"])(O,{class:"currency-icon",width:"20",height:"20",src:i.getCuurrencyIcon(e.currecnyId),alt:"FUNFURY",loading:"lazy"},null,8,["src"]),Object(a["m"])("span",I,[Object(a["m"])("span",P,[Object(a["p"])(z,{value:e.amount,currency:e.currecnyId},null,8,["value","currency"])])])]),Object(a["k"])(' <div class="payout-share">\n            <span class="icon payout-share-icon">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                <path\n                  fill-rule="evenodd"\n                  clip-rule="evenodd"\n                  d="M16.645 9.623C18.498 9.623 20 8.141 20 6.312 20 4.482 18.498 3 16.645 3S13.29 4.483 13.29 6.312c0 .245.026.483.078.713L7.848 9.86a3.366 3.366 0 0 0-2.493-1.094C3.502 8.766 2 10.25 2 12.078c0 1.829 1.502 3.312 3.355 3.312 1.019 0 1.93-.448 2.546-1.155l5.454 2.8c-.043.212-.066.43-.066.653 0 1.83 1.503 3.312 3.356 3.312S20 19.517 20 17.688c0-1.829-1.502-3.311-3.355-3.311-1.032 0-1.956.46-2.571 1.183l-5.437-2.792a3.284 3.284 0 0 0-.018-1.46l5.495-2.822a3.366 3.366 0 0 0 2.53 1.137Zm0-1.636c.937 0 1.697-.75 1.697-1.675 0-.926-.76-1.676-1.697-1.676-.938 0-1.698.75-1.698 1.676 0 .925.76 1.675 1.698 1.675Zm0 11.377c.937 0 1.697-.75 1.697-1.676 0-.925-.76-1.675-1.697-1.675-.938 0-1.698.75-1.698 1.675 0 .926.76 1.676 1.698 1.676Zm-9.592-7.286c0 .925-.76 1.675-1.698 1.675-.937 0-1.697-.75-1.697-1.675s.76-1.675 1.697-1.675c.938 0 1.698.75 1.698 1.675Z"\n                ></path>\n              </svg>\n            </span>\n          </div> ')])]))),128))]),Object(a["k"])(" Game List"),Object(a["m"])("div",R,[(Object(a["M"])(!0),Object(a["l"])(a["b"],null,Object(a["T"])(i.payoutRecordData,e=>(Object(a["M"])(),Object(a["l"])("div",{class:"game-item",key:e.id},[Object(a["m"])("span",null,[Object(a["m"])("div",A,[Object(a["m"])("p",N,Object(a["ab"])(e.time),1)])]),Object(a["m"])("span",null,[Object(a["p"])(O,{src:i.getCuurrencyIcon(e.currecnyId),style:{width:"24px",height:"24px","margin-right":"6px"}},null,8,["src"]),Object(a["p"])(z,{value:e.amount,currency:e.currecnyId},null,8,["value","currency"])]),Object(a["m"])("span",{class:"gameun-liens",style:Object(a["C"])(i.StatusStyleMap[e.status])},Object(a["ab"])(i.statusType[e.status]),5),Object(a["m"])("span",U,Object(a["ab"])(e.payoutAddress),1),Object(a["p"])(i["APopover"],{color:"#202a39"},{content:Object(a["mb"])(()=>[Object(a["m"])("div",D,Object(a["ab"])(e.memo),1)]),default:Object(a["mb"])(()=>[Object(a["m"])("span",null,[Object(a["m"])("div",T,Object(a["ab"])(e.memo),1)])]),_:2},1024)]))),128))]),Object(a["nb"])(Object(a["m"])("div",E,[F,Object(a["m"])("div",Z,Object(a["ab"])(i.lang.v.da_information),1)],512),[[a["jb"],i.total<=0]]),Object(a["nb"])(Object(a["p"])(i["APagination"],{style:{"margin-top":"20px"},current:i.current,"onUpdate:current":n[0]||(n[0]=e=>i.current=e),total:i.total,pageSize:i.perPage,showSizeChanger:!1,"show-less-items":"",onChange:i.handlePageChange},null,8,["current","total"]),[[a["jb"],i.total>0]])])}var G=t(75),V=t(5),J=t(2),H=t(1684),Q=t(898);const Y=10;var q=Object(a["r"])({__name:"UserTransactionsList",setup(e,{expose:n}){n();const t=Object(a["R"])(1),i=Object(a["R"])(0),c=Object(a["Q"])({pageSize:Y,pageNum:t.value}),l=Object(a["R"])([]);function s(){Object(G["b"])(c).then(e=>{e&&(l.value=e.data,i.value=e.total)})}const d={0:"FAIL",10:"RUNNING",20:"SUCCESS","-10":"CANCEL","-30":"REFUND","-20":"REFUSE"},r={0:{color:"red"},10:{color:"blue"},20:{color:"#1bb83d"},"-10":{color:"red"},"-20":{color:"red"},"-30":{color:"#1296db"}};function o(e){t.value=e,c.pageNum=e,s()}Object(a["I"])(()=>{s()});const p=e=>{const n="/fury/usdt.svg";if(!e)return n;const t=V["a"].webConfig.cryptoCurrencies.concat().find(n=>n.id===e);return t?t.icon:n},g={current:t,perPage:Y,total:i,payoutRecord:c,payoutRecordData:l,getPayoutRecordData:s,statusType:d,StatusStyleMap:r,handlePageChange:o,getCuurrencyIcon:p,get lang(){return J["lang"]},get APagination(){return H["a"]},get APopover(){return Q["a"]}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),K=(t(1458),t(4)),W=t.n(K);const X=W()(q,[["render",B],["__scopeId","data-v-254ed50e"],["__file","src/views/home/head/user/UserTransactionsList.vue"]]);n["default"]=X},930:function(e,n,t){e.exports=t.p+"img/noData.7c0ea307.png"}}]);