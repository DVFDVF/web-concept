(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{1012:function(n,e,t){var a=t(1313);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t(12).default;o("7a68a64c",a,!1,{sourceMap:!1,shadowMode:!1})},1013:function(n,e,t){var a=t(1316);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t(12).default;o("6d5b40fc",a,!1,{sourceMap:!1,shadowMode:!1})},1014:function(n,e,t){var a=t(1319);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t(12).default;o("a9cc9096",a,!1,{sourceMap:!1,shadowMode:!1})},1015:function(n,e,t){var a=t(1321);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t(12).default;o("8279e9fa",a,!1,{sourceMap:!1,shadowMode:!1})},1016:function(n,e,t){var a=t(1323);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t(12).default;o("22b040c6",a,!1,{sourceMap:!1,shadowMode:!1})},1025:function(n,e,t){var a=t(1345);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t(12).default;o("79d63cc7",a,!1,{sourceMap:!1,shadowMode:!1})},1143:function(n,e,t){"use strict";var a=t(0);const o={class:"container"},i={class:"main"};function r(n,e,t,r,c,d){const s=Object(a["V"])("FeedbackRight"),l=Object(a["V"])("FeedbackLeft");return Object(a["M"])(),Object(a["l"])("div",o,[Object(a["m"])("div",i,[Object(a["p"])(s),Object(a["p"])(l)])])}const c=n=>(Object(a["P"])("data-v-98308f5c"),n=n(),Object(a["N"])(),n),d={class:"main"},s={class:"show-more"},l=c(()=>Object(a["m"])("a",{href:"https://licensing.gaminsg-curacao.com/validator/",class:"link",target:"_blank"}," GLH-OCCHKTW0705152032 ",-1)),p={class:"text"},b=c(()=>Object(a["m"])("use",{"xlink:href":"/svg/sprite.svg#icon-arrow-down-small"},null,-1)),g=[b];function u(n,e,t,o,i,r){return Object(a["M"])(),Object(a["l"])("div",d,[Object(a["m"])("div",s,[Object(a["m"])("h2",null,[Object(a["m"])("strong",null,Object(a["ab"])(n.lang.v.fk_aboutBetFury.replace("{siteName}",n.dataCenter.websiteName_Medium)),1)]),Object(a["m"])("div",{class:Object(a["B"])(["show-more-content",{"show-more-content-full":n.isShowMore}])},[Object(a["m"])("p",null,[Object(a["o"])(Object(a["ab"])(n.dataCenter.websiteName_link)+" "+Object(a["ab"])(n.lang.v.fk_betFuryas)+" "+Object(a["ab"])(n.dataCenter.websiteName_link)+" "+Object(a["ab"])(n.lang.v.fk_different)+" ",1),l])],2),Object(a["m"])("button",{class:"btn-show-more",onClick:e[0]||(e[0]=(...e)=>n.btnClick&&n.btnClick(...e))},[Object(a["m"])("span",p,Object(a["ab"])(n.lang.v.fk_showMore),1),(Object(a["M"])(),Object(a["l"])("svg",{class:Object(a["B"])(["svg-use",{"rotate-180":n.isShowMore}]),focusable:"false","aria-hidden":"true"},g,2))])])])}var f=t(5),m=t(2),h=Object(a["r"])({data(){return{lang:m["lang"],dataCenter:f["a"],isShowMore:!1,btnText:"Show More",aboutList:{}}},components:{},methods:{btnClick(){this.isShowMore=!this.isShowMore,this.btnText=this.isShowMore?m["lang"].v.fk_showLess:m["lang"].v.fk_showMore}}}),v=(t(1312),t(4)),x=t.n(v);const w=x()(h,[["render",u],["__scopeId","data-v-98308f5c"],["__file","src/views/home/casino/about/FeedbackLeft.vue"]]);var j=w,O=t(1314),k=t.n(O);const y=n=>(Object(a["P"])("data-v-06546be1"),n=n(),Object(a["N"])(),n),M={class:"main"},C={class:"header"},F=y(()=>Object(a["m"])("img",{src:k.a},null,-1)),_={class:"description"},B={class:"Feedback-selection"},V=["placeholder"],A={class:"validate-info"},I={class:"down-btn"},S={href:"mailto:feedback@betfury.io"};function z(n,e,t,o,i,r){const c=Object(a["V"])("FeedbackSelection"),d=Object(a["V"])("FeedbackButton");return Object(a["M"])(),Object(a["l"])("div",M,[Object(a["m"])("div",C,[F,Object(a["m"])("h3",null,Object(a["ab"])(n.lang.v.fk_letImprove),1)]),Object(a["m"])("p",_,Object(a["ab"])(n.lang.v.fk_haveYouFound),1),Object(a["m"])("div",B,[Object(a["p"])(c,{FeedbackData:n.FeedbackData,onSelectCounty:n.updatecountry,isValidationFailed:n.isValidationFailed},null,8,["FeedbackData","onSelectCounty","isValidationFailed"])]),Object(a["nb"])(Object(a["m"])("span",{class:"dropdown-error-text"},Object(a["ab"])(n.lang.v.fk_notSelected),513),[[a["jb"],n.isValidationFailed&&""==n.FeedbackType]]),Object(a["nb"])(Object(a["m"])("textarea",{class:Object(a["B"])(["form-textarea",{"form-textarea-error":n.isValidationFailed&&""==n.FeedbackType}]),name:"message",placeholder:n.lang.v.fk_feedback,rows:"3","onUpdate:modelValue":e[0]||(e[0]=e=>n.inputValue=e),onInput:e[1]||(e[1]=(...e)=>n.handleInput&&n.handleInput(...e))},"\n    ",42,V),[[a["ib"],n.inputValue]]),Object(a["nb"])(Object(a["m"])("span",{class:"dropdown-error-text"},Object(a["ab"])(n.lang.v.fk_please),513),[[a["jb"],n.isValidationFailed&&""==n.inputValue]]),Object(a["m"])("div",A,[Object(a["m"])("span",null,Object(a["ab"])(n.nowCount)+"/1500 "+Object(a["ab"])(n.lang.v.fk_characters),1)]),Object(a["m"])("div",I,[Object(a["p"])(d,{"login-text":"submit",onClickBtn:n.clickBtn},null,8,["onClickBtn"]),Object(a["m"])("address",null,[Object(a["o"])(Object(a["ab"])(n.lang.v.fk_or)+" ",1),Object(a["m"])("a",S,Object(a["ab"])(n.email),1)])])])}var R=t(10),P=t(37),Q=t(281);const L={class:"login-signup-countries-block"},D={class:"dropdown dropdown-lg"},T={class:"trigger-content"},Z={class:"trigger-content-text"},G={class:"country-icon-spend"},U={class:"svg-use",width:"14",height:"14",focusable:"false","aria-hidden":"true"},W=["xlink:href"],H={class:"dropdown-inner"},N={class:"dropdown-content"},X={class:"dropdown-menu-inner",style:{"max-height":"230px"}},K={class:"dropdown-menu-item"},q=["onClick"],E={class:"text"};function Y(n,e,t,o,i,r){return Object(a["M"])(),Object(a["l"])("div",L,[Object(a["m"])("div",D,[Object(a["m"])("div",{class:Object(a["B"])(["dropdown-trigger",{"dropdown-trigger-error":n.isValidationFailed&&""==n.selectCountry}]),onClick:e[0]||(e[0]=(...e)=>n.dropdownExpand&&n.dropdownExpand(...e))},[Object(a["m"])("div",T,[Object(a["m"])("span",{class:Object(a["B"])(["trigger-content-placeholder",{"text-nomal":""==n.selectCountry,"text-selected":n.isSpend}])},Object(a["ab"])(n.lang.v.fk_selectAFeedback),3),Object(a["m"])("span",Z,Object(a["ab"])(n.selectCountry),1)]),Object(a["m"])("span",G,[(Object(a["M"])(),Object(a["l"])("svg",U,[Object(a["m"])("use",{"xlink:href":n.spendIcon},null,8,W)]))])],2),Object(a["nb"])(Object(a["m"])("div",H,[Object(a["m"])("div",N,[Object(a["m"])("ul",X,[Object(a["m"])("li",K,[(Object(a["M"])(!0),Object(a["l"])(a["b"],null,Object(a["T"])(n.FeedbackData,e=>(Object(a["M"])(),Object(a["l"])("button",{class:"dropdown-menu-link",type:"button",key:e,onClick:t=>n.selectCountryClick(e)},[Object(a["m"])("span",E,Object(a["ab"])(e),1)],8,q))),128))])])])],512),[[a["jb"],n.isSpend]])])])}var J=Object(a["r"])({name:"country-selection",computed:{},methods:{dropdownExpand(){this.isSpend=!this.isSpend,this.isSpend?this.spendIcon="/svg/sprite.svg#icon-arrow-up":this.spendIcon="/svg/sprite.svg#icon-arrow-down"},selectCountryClick(n){this.selectCountry=n,this.isSpend=!1,this.spendIcon="/svg/sprite.svg#icon-arrow-down",this.$emit("selectCounty",n)}},data(){return{lang:m["lang"],isSpend:!1,selectCountry:"",spendIcon:"/svg/sprite.svg#icon-arrow-down"}},props:["FeedbackData","isValidationFailed"]});t(1315);const $=x()(J,[["render",Y],["__scopeId","data-v-321c8f90"]]);var nn=$,en=t(1317),tn=t.n(en);const an=n=>(Object(a["P"])("data-v-d055815a"),n=n(),Object(a["N"])(),n),on={class:"modal"},rn={class:"modal-container"},cn=an(()=>Object(a["m"])("svg",{class:"svg-use",width:"24",height:"24",focusable:"false","aria-hidden":"true"},[Object(a["m"])("use",{"xlink:href":"/svg/sprite.svg#icon-close"})],-1)),dn=[cn],sn={class:"default-tab"},ln={class:"tab-inner"},pn={class:"header"},bn={class:"header-title"},gn=an(()=>Object(a["m"])("svg",{class:"svg-use",width:"29",height:"29",focusable:"false","aria-hidden":"true"},[Object(a["m"])("use",{"xlink:href":"/svg/sprite.svg#icon-success"})],-1)),un={class:"body"},fn={class:"body-inner"},mn={class:"body-text"},hn={class:"body-text"},vn=an(()=>Object(a["m"])("img",{class:"body-img",src:tn.a},null,-1));function xn(n,e,t,o,i,r){return Object(a["M"])(),Object(a["l"])("div",on,[Object(a["m"])("div",rn,[Object(a["m"])("button",{title:"Close modal",class:"modal-btn-close",onClick:e[0]||(e[0]=(...e)=>n.closePopUp&&n.closePopUp(...e))},dn),Object(a["m"])("div",sn,[Object(a["m"])("div",ln,[Object(a["m"])("div",pn,[Object(a["m"])("div",bn,[gn,Object(a["m"])("h1",null,Object(a["ab"])(n.lang.v.fk_feed),1)])]),Object(a["m"])("div",un,[Object(a["m"])("div",fn,[Object(a["m"])("p",mn,Object(a["ab"])(n.lang.v.fk_thak),1),Object(a["m"])("p",hn,Object(a["ab"])(n.lang.v.fk_become)+" "+Object(a["ab"])(n.dataCenter.websiteName_Medium)+"! ",1)])]),vn])])])])}var wn=Object(a["r"])({data(){return{lang:m["lang"],dataCenter:f["a"],closeFunction:Object(a["v"])("close")}},methods:{closePopUp(){this.closeFunction()}},components:{}});t(1318);const jn=x()(wn,[["render",xn],["__scopeId","data-v-d055815a"],["__file","src/views/home/casino/about/FeedbackSend.vue"]]);var On=jn,kn=Object(a["r"])({data(){return{email:f["a"].webConfig.feedBackmail,lang:m["lang"],inputValue:"",isValidationFailed:!1,FeedbackType:"",FeedbackData:["Casino games","Sport","Bonuses","Staking","Battles and tournaments","Events","Promotions","VIP Rank System","Other"],aboutList:{},maxCount:100,nowCount:0}},computed:{},components:{FeedbackSelection:nn,FeedbackButton:Q["a"]},methods:{updatecountry(n){this.FeedbackType=n},clickBtn(){f["a"].user.data?""!=this.FeedbackType&&""!=this.inputValue?this.forgotClick():this.isValidationFailed=!0:Object(R["f"])(P["a"])},handleInput(){this.inputValue.length>this.maxCount&&(this.inputValue=this.inputValue.substring(0,this.maxCount)),this.nowCount=this.inputValue.length},forgotClick(){Object(R["f"])(On)}}});t(1320);const yn=x()(kn,[["render",z],["__scopeId","data-v-06546be1"],["__file","src/views/home/casino/about/FeedbackRight.vue"]]);var Mn=yn,Cn=Object(a["r"])({data(){return{aboutList:{}}},components:{FeedbackRight:Mn,FeedbackLeft:j}});t(1322);const Fn=x()(Cn,[["render",r],["__scopeId","data-v-654f912b"],["__file","src/views/home/casino/about/Feedback.vue"]]);e["a"]=Fn},1147:function(n,e,t){"use strict";var a=t(0);const o=n=>(Object(a["P"])("data-v-ec9a173c"),n=n(),Object(a["N"])(),n),i={class:"scroll-container"},r={class:"list-item-row"},c=o(()=>Object(a["m"])("div",{class:"content"},[Object(a["m"])("div",{class:"card-wrapper",role:"button",tabindex:"0"})],-1)),d=[c];function s(n,e,t,o,c,s){return Object(a["M"])(),Object(a["l"])("div",i,[Object(a["m"])("ul",r,[(Object(a["M"])(),Object(a["l"])(a["b"],null,Object(a["T"])(20,n=>Object(a["m"])("li",{key:n},d)),64))])])}var l=Object(a["r"])({props:{gameData:{type:Object},search:{default:!1}},data(){return{dragging:!1,startX:0,lastX:0,transX:-0}},computed:{startDragging(){return this.dragging?"list-item-row start-dragging":"list-item-row"}},methods:{}}),p=(t(1344),t(4)),b=t.n(p);const g=b()(l,[["render",s],["__scopeId","data-v-ec9a173c"],["__file","src/views/originals/cardOriginalsEmpty.vue"]]);e["a"]=g},1312:function(n,e,t){"use strict";t(1012)},1313:function(n,e,t){var a=t(11);e=a(!1),e.push([n.i,".main[data-v-98308f5c] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.main .show-more h2[data-v-98308f5c] {\n  color: white;\n  font-weight: 600;\n  font-size: 16px;\n  margin: 20px 0 8px;\n}\n.main .show-more p[data-v-98308f5c] {\n  color: #55657e;\n  font-size: 14px;\n  font-weight: 500;\n}\n.main .show-more p + p[data-v-98308f5c] {\n  margin-top: 20px;\n}\n.main .show-more .btn-show-more[data-v-98308f5c] {\n  margin-top: 17px;\n  padding: 6.5px 15px;\n  border-radius: 8px;\n  font-size: 14px;\n  background-color: #2a3546;\n  border-color: transparent;\n  color: #93acd3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: -0.24px;\n  line-height: 20px;\n  font-weight: 600;\n}\n.main .show-more .btn-show-more .svg-use[data-v-98308f5c] {\n  width: 20px;\n  height: 20px;\n}\n.main .show-more .btn-show-more[data-v-98308f5c]:hover {\n  background-color: #202a39;\n}\n.main .show-more .btn-show-more:hover .text[data-v-98308f5c] {\n  color: white;\n}\n.main .show-more-content[data-v-98308f5c]:not(.show-more-content-full) {\n  -webkit-mask-image: linear-gradient(0deg, transparent, #000 120px);\n  mask-image: linear-gradient(0deg, transparent, #000 120px);\n}\nbutton[data-v-98308f5c] {\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  background: none;\n}\n.rotate-180[data-v-98308f5c] {\n  transform: rotate(180deg);\n}\n.link[data-v-98308f5c] {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n",""]),n.exports=e},1314:function(n,e){n.exports="data:image/webp;base64,UklGRhAFAABXRUJQVlA4TAMFAAAvW8AWED/CKJIkRUOLz/2df11nY3HABttGkhT1wt35n8DnH91b/AuOJMltm10Ayun/n9Qp2yvAbW3bUrKJCHk/ZIZQI8uwrrmLsRCXXRj6SyA1IgD4u12V4hTDOOVBCrR//CNzScMpgU6su6w44jT/qLGk+iIivBCccsRZkP2gkbp8dP5pCZOpOSqcStT9/oVfoaccFtM8duqZnV+gMvR2UP49wY3oZT3ufAUlf/vRPLbuVZZ9WKfbtx/vKs1BiJQHKxZtgeyDqhkPAjvHGa5CRBB+DAlqCRQBKbIZcv22qU1joC0AbNrW6tqUGcYrc8fLShlDdv7/l2xJdjy/nQtSRP8dSJIaNwsIMobckV15QupvmfU/DrZdX7X5+jxIx576OtLK7LxUN4YK1l6yCCn2UQKUEcmGHh5/QgqyOw8zkvbQu/xMLf6lGCmtxaFvmZBkOffgWzYsudCrXCLFvqVYS4glJxL6lPmZGmOtB58ysWTQkg+9yWW4EGIlb1JMKo1u5CX0JdPCiy8pVrIYy6vkSTZhBvIjdWMsMbQoe/xFXfTWm+2+kClZLFgZ2e82/bD3G/f3rSytzaB0RjAO0t/Qov1W3V038fu+7m/38Zeyb2xK37ZjjAiyF/5Qd7cOLyzJ5uNd5AuYCTybBJcceYxfgL0C261t4uPtXZvdoWeoL3gNACTkPFn90bYxa/+mzbqwGMsHuCKPERYa1apWXmggNIjMv6uAJobqRypNMxq2OBF4MuyROaY+AVO/IsrMS7/dYgB+3qCZgGkssiM/kHR4aPFrGraVGYAS0fpRIZdvijBBqoBoe7QZHJ4KBowB5dETMxr7tpivUGQg/RRbugG8GkBEtLwYvow/QhMQdj45lUQASccf03yHICJ3Kbb28aktAA5bIiMRksiZiiQuggqxGP/Qy3cCciaiI4kvxqIBbCVAFYIPtdh8BLg6F0kWzBeL+RjaKQnw7/nz4MV2HlRTFcmdTaBNAla/S/M8IDp6KXbgq7k2q/HKcxyYyBkmMtPhxpWZQbtZ/OLqMEhLARPqGDMIN367YgxQ0SzqX1WxNmwU9Nk036ErFM7sdkUWp53ik6jg51p9OGqmBexl+QFFmCdOLwRuLxkW40HxWQREVFU6GhW04IlpMMPRTbFjZ54PiiXWAc6jKnh4fNQIQEJXAgM6XB48AxctrAM0qTicHPOoDhG+hJFz98Fh2RAsOmRycnw0agBESLa/8B8NFGxi3aTiaHKivWDyX/hjYUPkCDGg+xMaMfQL59rZNMmZLO61m1HPuSowBERUA0xpfk8gCXBau1aPYl/MVZV1nC+W99CDtFDlxvmkHTuX66XMYU8hTaUH551kPMN7UDG7vlQSnZrEtiDuB7dEE0dVGHI+0xKiR5UQOR/cl55xJpqAeAl6iD0HuOtBsoliPL++Qm7ac9aOJwmGm0SHEl+CHoRQj+PBR3JDp2peXd9cMdUT4+R4cAPDyFZKym1Q7Hjy+UksghDhDbwtuB3co42ACphvb0RQj2EnDp0KMdQkMPQ1VfcWoblhz+k73WlodgbZtH8Bv7rXNzYPtXE6ad5jWFfY7q7Jh2oA37n+r5ojguGKKox7TlBwekLC1xMwbsHXz1ggH8E9p+tU5GPd2j7fuwXd41RfnxGKhwRf625/Suw5TrXBTbBKUNzintjpFgkZrJIWEG3c7pHDegNWLorFcaOf+stqDAA="},1315:function(n,e,t){"use strict";t(1013)},1316:function(n,e,t){var a=t(11);e=a(!1),e.push([n.i,".login-signup-countries-block[data-v-321c8f90] {\n  position: relative;\n}\n.login-signup-countries-block .country-icon-spend[data-v-321c8f90] {\n  display: flex;\n  align-items: center;\n  color: #93acd3;\n}\n.dropdown[data-v-321c8f90] {\n  position: relative;\n}\n.dropdown-trigger[data-v-321c8f90]:hover {\n  background-color: #263041;\n}\n.dropdown-lg .dropdown-trigger[data-v-321c8f90] {\n  font-size: 14px;\n  height: 58px;\n  padding: 10px 17px;\n}\n.dropdown-trigger[data-v-321c8f90] {\n  display: flex;\n  flex-direction: row;\n  background-color: #4458743d;\n  border: 1px solid transparent;\n  box-shadow: 0 2px 4px #0000002e;\n  border-radius: 10px;\n  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;\n}\n.dropdown-trigger-error[data-v-321c8f90] {\n  border: 1px solid #ed1d49;\n}\n.dropdown .trigger-content[data-v-321c8f90] {\n  display: flex;\n  flex: 1 1;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.dropdown .trigger-content .trigger-content-placeholder[data-v-321c8f90] {\n  color: #2283f6;\n  font-weight: 600;\n  line-height: 18px;\n  white-space: nowrap;\n  font-size: 12px;\n}\n.dropdown .trigger-content .trigger-content-text[data-v-321c8f90] {\n  color: white;\n  font-family: Montserrat Variable, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n}\n.dropdown-inner[data-v-321c8f90] {\n  overflow: auto !important;\n  background-color: #1c2532;\n  padding: 10px 12px;\n  left: 0;\n  right: 0;\n  height: 234px;\n  border-radius: 10px;\n  font-size: 14px;\n  position: absolute;\n  transform: translateY(0);\n  z-index: 4;\n  top: 100%;\n  margin-top: 10px;\n}\n.dropdown-inner .input-inner[data-v-321c8f90] {\n  width: 100%;\n  height: 48px;\n  align-items: center;\n  background-color: #090c1199;\n  border: 1px solid #2a3546;\n  cursor: text;\n  display: flex;\n  position: relative;\n  padding: 18px 7px;\n  margin-bottom: 6px;\n  border-radius: 8px;\n  transition: color 0.1s ease-in-out, border-color 0.1s ease-in-out;\n}\n.dropdown-inner .input-inner .input-icon[data-v-321c8f90] {\n  margin: 8px;\n}\n.dropdown-inner .input-inner .input-tag[data-v-321c8f90] {\n  border: none;\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  padding: 0;\n  display: block;\n  font-weight: 600;\n  line-height: 18px;\n  color: white;\n  background-color: #1c253200;\n  margin-top: 0;\n  outline: none;\n  transition: margin-top 0.1s ease-in-out;\n  width: 100%;\n}\n.dropdown-inner .input-inner[data-v-321c8f90]:hover {\n  border: 1px solid #2283f6;\n}\n.dropdown-inner .dropdown-menu-inner[data-v-321c8f90] {\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n}\n.dropdown-inner .dropdown-menu-item[data-v-321c8f90] {\n  height: 48px;\n  border-radius: 10px;\n  font-family: Montserrat Variable, sans-serif;\n  margin-right: 15px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  color: #55657e;\n}\n.dropdown-inner .dropdown-menu-item .dropdown-menu-link[data-v-321c8f90] {\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  padding: 10px 12px;\n  border-radius: 10px;\n}\n.dropdown-inner .dropdown-menu-item .dropdown-menu-link[data-v-321c8f90]:hover {\n  background-color: #2a3546;\n  color: white;\n}\n.dropdown-inner[data-v-321c8f90]::-webkit-scrollbar {\n  display: none;\n}\nul[data-v-321c8f90] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\nli[data-v-321c8f90] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nbutton[data-v-321c8f90] {\n  background: none;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  /* 添加其他需要的样式 */\n}\n.dropdown .trigger-content .text-nomal[data-v-321c8f90] {\n  color: white;\n  font-weight: 600;\n  line-height: 18px;\n  font-size: 14px;\n}\n.dropdown .trigger-content.text-selected[data-v-321c8f90] {\n  color: #55657e;\n}\n@media only screen and (max-width: 767px) {\n.trigger-content-placeholder[data-v-321c8f90] {\n    font-size: 13px !important;\n}\n}\n",""]),n.exports=e},1317:function(n,e,t){n.exports=t.p+"img/feedback.17642060.png"},1318:function(n,e,t){"use strict";t(1014)},1319:function(n,e,t){var a=t(11);e=a(!1),e.push([n.i,".modal-container[data-v-d055815a] {\n  max-width: 360px;\n  height: auto;\n  color: #fff;\n  padding: 0;\n  position: relative;\n}\n.tab-inner[data-v-d055815a] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding-bottom: 20px;\n  position: relative;\n  transition: background-color 0.3s, border-bottom-color 0.3s;\n}\n.header[data-v-d055815a] {\n  padding: 20px 20px;\n}\n.default-tab .header[data-v-d055815a]:before {\n  background: linear-gradient(180deg, #003370, #08264a 40%, #111923);\n  bottom: 0;\n  content: '';\n  display: block;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: bottom 0.3s;\n  border-radius: 13px;\n}\n.modal-container .header-title[data-v-d055815a] {\n  align-items: center;\n  display: flex;\n}\n.header-title[data-v-d055815a] {\n  gap: 8px;\n}\nh1[data-v-d055815a] {\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin-bottom: 1rem;\n  margin-top: 0;\n  font-size: 24px;\n  line-height: 125%;\n  margin: 0.67em 0;\n}\n.body-text[data-v-d055815a] {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  line-height: 125%;\n  margin-bottom: 6px;\n  padding: 0 20px;\n}\n.body-text[data-v-d055815a]:last-child {\n  color: #93acd3;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 150%;\n}\n.body-img[data-v-d055815a] {\n  position: relative;\n  margin-bottom: -20px;\n}\n.body[data-v-d055815a] {\n  display: flex;\n  flex-direction: column;\n}\n",""]),n.exports=e},1320:function(n,e,t){"use strict";t(1015)},1321:function(n,e,t){var a=t(11);e=a(!1),e.push([n.i,".main[data-v-06546be1] {\n  float: right;\n  margin: 0 0 16px 64px;\n  max-width: 488px;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.header[data-v-06546be1] {\n  display: flex;\n  flex-direction: row;\n  font-size: 18px;\n  font-weight: 600;\n  gap: 8px;\n  letter-spacing: -0.02em;\n  line-height: 135%;\n  margin-top: 20px;\n}\n.header img[data-v-06546be1] {\n  width: 24px;\n  height: 24px;\n}\nh3[data-v-06546be1] {\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n  margin-bottom: 0;\n  color: white;\n}\n.description[data-v-06546be1] {\n  color: #93acd3;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 150%;\n  margin: 12px 0 16px;\n  text-align: left;\n}\n.Feedback-selection[data-v-06546be1] {\n  width: 100%;\n  font-size: 14px;\n  height: 58px;\n}\n.form-textarea[data-v-06546be1] {\n  background: rgba(9, 12, 17, 0.6);\n  border: 1px solid rgba(147, 172, 211, 0.2);\n  border-radius: 10px;\n  color: white;\n  font-weight: 600;\n  height: 125px;\n  line-height: 1.5;\n  margin-top: 8px;\n  outline: 0;\n  padding: 12px 16px;\n  resize: none;\n  width: 100%;\n}\n.form-textarea-error[data-v-06546be1] {\n  border: 1px solid #ed1d49;\n}\n.validate-info[data-v-06546be1] {\n  margin: 4px 0 24px;\n  color: #55657e;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 150%;\n  margin: 4px 0;\n  padding-left: 18px;\n}\naddress[data-v-06546be1] {\n  color: #93acd3;\n  font-size: 12px;\n  font-style: inherit;\n  margin-left: 10px;\n  margin-bottom: 5px;\n}\n.down-btn[data-v-06546be1] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  margin-top: 15px;\n}\n.dropdown-error-text[data-v-06546be1] {\n  color: #ed1d49;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  margin: 0 12px;\n}\n@media only screen and (max-width: 767px) {\n.main[data-v-06546be1] {\n    margin: 0;\n}\n.header h3[data-v-06546be1] {\n    font-weight: 700;\n    font-size: 20px;\n}\n.description[data-v-06546be1] {\n    font-size: 13px;\n    font-weight: 500;\n}\n.down-btn[data-v-06546be1] {\n    font-weight: 600;\n}\n.down-btn a[data-v-06546be1] {\n    font-weight: 500;\n}\n}\n",""]),n.exports=e},1322:function(n,e,t){"use strict";t(1016)},1323:function(n,e,t){var a=t(11);e=a(!1),e.push([n.i,".container[data-v-654f912b] {\n  margin: 0 -40px;\n  background: #141c27;\n}\n.main[data-v-654f912b] {\n  padding: 20px;\n  position: relative;\n  background: #141c27;\n}\n@media only screen and (max-width: 767px) {\n.container[data-v-654f912b] {\n    margin: 0 -10px;\n}\n.main[data-v-654f912b] {\n    padding: 10px;\n}\n}\n",""]),n.exports=e},1344:function(n,e,t){"use strict";t(1025)},1345:function(n,e,t){var a=t(11);e=a(!1),e.push([n.i,".scroll-container[data-v-ec9a173c] {\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.list-item-row[data-v-ec9a173c] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\nul[data-v-ec9a173c],\nli[data-v-ec9a173c] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nli[data-v-ec9a173c] {\n  margin: 6px;\n}\n.card-wrapper[data-v-ec9a173c] {\n  border-radius: 14px;\n  container-type: inline-size;\n  position: relative;\n  height: 100%;\n}\n.card-wrapper[data-v-ec9a173c] {\n  aspect-ratio: 0.75833333;\n  background: linear-gradient(150.15deg, rgba(34, 131, 246, 0.147) 27.17%, rgba(34, 131, 246, 0.084) 46.76%, rgba(34, 131, 246, 0) 61.36%), #263041;\n  width: 100%;\n}\n.content[data-v-ec9a173c] {\n  width: 172px;\n  height: 227px;\n}\n@media only screen and (max-width: 767px) {\n.content[data-v-ec9a173c] {\n    width: calc(33.33vw - 20px);\n    height: auto;\n}\n}\n",""]),n.exports=e}}]);