(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-542c5017"],{"001e":function(e,t,n){e.exports=n.p+"img/phone.2b23e08a.svg"},1276:function(e,t,n){"use strict";var r=n("2ba4"),c=n("c65b"),i=n("e330"),a=n("d784"),s=n("44e7"),l=n("825a"),o=n("1d80"),u=n("4840"),b=n("8aa5"),d=n("50c4"),f=n("577e"),v=n("dc4a"),h=n("4dae"),p=n("14c3"),j=n("9263"),g=n("9f7f"),O=n("d039"),m=g.UNSUPPORTED_Y,x=4294967295,w=Math.min,y=[].push,k=i(/./.exec),C=i(y),I=i("".slice),N=!O((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));a("split",(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=f(o(this)),a=void 0===n?x:n>>>0;if(0===a)return[];if(void 0===e)return[i];if(!s(e))return c(t,i,e,a);var l,u,b,d=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=new RegExp(e.source,v+"g");while(l=c(j,g,i)){if(u=g.lastIndex,u>p&&(C(d,I(i,p,l.index)),l.length>1&&l.index<i.length&&r(y,d,h(l,1)),b=l[0].length,p=u,d.length>=a))break;g.lastIndex===l.index&&g.lastIndex++}return p===i.length?!b&&k(g,"")||C(d,""):C(d,I(i,p)),d.length>a?h(d,0,a):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:c(t,this,e,n)}:t,[function(t,n){var r=o(this),a=void 0==t?void 0:v(t,e);return a?c(a,t,r,n):c(i,f(r),t,n)},function(e,r){var c=l(this),a=f(e),s=n(i,c,a,r,i!==t);if(s.done)return s.value;var o=u(c,RegExp),v=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(m?"g":"y"),j=new o(m?"^(?:"+c.source+")":c,h),g=void 0===r?x:r>>>0;if(0===g)return[];if(0===a.length)return null===p(j,a)?[a]:[];var O=0,y=0,k=[];while(y<a.length){j.lastIndex=m?0:y;var N,A=p(j,m?I(a,y):a);if(null===A||(N=w(d(j.lastIndex+(m?y:0)),a.length))===O)y=b(a,y,v);else{if(C(k,I(a,O,y)),k.length===g)return k;for(var R=1;R<=A.length-1;R++)if(C(k,A[R]),k.length===g)return k;y=O=N}}return C(k,I(a,O)),k}]}),!N,m)},"1dde":function(e,t,n){var r=n("d039"),c=n("b622"),i=n("2d00"),a=c("species");e.exports=function(e){return i>=51||!r((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f36":function(e,t,n){},"25f0":function(e,t,n){"use strict";var r=n("e330"),c=n("5e77").PROPER,i=n("6eeb"),a=n("825a"),s=n("3a9b"),l=n("577e"),o=n("d039"),u=n("ad6d"),b="toString",d=RegExp.prototype,f=d[b],v=r(u),h=o((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),p=c&&f.name!=b;(h||p)&&i(RegExp.prototype,b,(function(){var e=a(this),t=l(e.source),n=e.flags,r=l(void 0===n&&s(d,e)&&!("flags"in d)?v(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),i=n("b622"),a=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==c(e))}},"4dae":function(e,t,n){var r=n("da84"),c=n("23cb"),i=n("07fa"),a=n("8418"),s=r.Array,l=Math.max;e.exports=function(e,t,n){for(var r=i(e),o=c(t,r),u=c(void 0===n?r:n,r),b=s(l(u-o,0)),d=0;o<u;o++,d++)a(b,d,e[o]);return b.length=d,b}},"599a":function(e,t,n){"use strict";n.r(t);n("a15b"),n("ac1f"),n("1276"),n("fb6a");var r=n("7a23"),c=n("7e01"),i=n.n(c),a=n("001e"),s=n.n(a),l=function(e){return Object(r["w"])("data-v-71989e0a"),e=e(),Object(r["u"])(),e},o={class:"dashboard"},u={class:"row w-100 p-0 m-0"},b={class:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 p-2 m-0"},d=l((function(){return Object(r["h"])("div",{class:"vehicle-view"},[Object(r["h"])("img",{class:"img-fluid rounded rounded-lg border",src:i.a,alt:"vishwakarma-automobiles-poster",draggable:"false"})],-1)})),f={key:0,class:"d-flex justify-content-center my-3"},v=l((function(){return Object(r["h"])("div",{class:"spinner-border",role:"status"},[Object(r["h"])("span",{class:"visually-hidden"},"Loading...")],-1)})),h=[v],p={key:1,class:"number-plate bg-white text-dark text-center p-3 my-2 fw-bold"},j={key:2,class:"number-plate bg-white text-danger text-center p-3 mt-3 fw-bold border-danger"},g={key:3,class:"alert alert-warning text-center alert-sm p-1"},O=Object(r["j"])(" No Vehicle{s} found : "),m={class:"fw-bold"},x={class:"d-grid"},w={key:0,class:"services my-3 list-group mb-5"},y=l((function(){return Object(r["h"])("h4",{class:"text-center"},"Services",-1)})),k={class:"d-flex justify-content-between"},C={class:"service-id fw-bold m-0"},I={class:"service-date m-0"},N={class:"d-flex justify-content-between mb-1"},A={class:"service-bill"},R={class:"d-flex justify-content-between"},E=l((function(){return Object(r["h"])("span",null,"Total Amount ",-1)})),S={class:"fw-bold"},P={class:"service-bill-preview text-center"},$={class:"service-bill-download d-flex"},V=["href"],B=["alt"],U=Object(r["j"])(" Call"),_=["download","href"];function M(e,t,n,c,i,a){var l=Object(r["A"])("router-link");return Object(r["t"])(),Object(r["g"])("div",o,[Object(r["h"])("div",u,[Object(r["h"])("div",b,[d,i.loading?(Object(r["t"])(),Object(r["g"])("div",f,h)):Object(r["f"])("",!0),i.vehicle?(Object(r["t"])(),Object(r["g"])("h1",p,Object(r["C"])(i.vehicle.vehicleNo.toUpperCase()),1)):Object(r["f"])("",!0),i.vehicle||i.loading?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("h1",j,[Object(r["h"])("div",null,[Object(r["h"])("s",null,Object(r["C"])(e.$route.params.VehicleId),1)])])),i.vehicle?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("p",g,[O,Object(r["h"])("span",m,Object(r["C"])(e.$route.params.VehicleId),1)])),Object(r["h"])("div",x,[Object(r["h"])("button",{onClick:t[0]||(t[0]=function(e){return a.newService()}),class:"btn btn-primary btn-lg"}," New Service + ")]),(Object(r["t"])(),Object(r["e"])(r["b"],null,[i.services?(Object(r["t"])(),Object(r["g"])("div",w,[y,(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(i.services,(function(e){return Object(r["t"])(),Object(r["g"])("div",{key:e.serviceId,class:"service border p-2 mb-2 list-group list-group-item"},[Object(r["h"])("div",k,[Object(r["h"])("p",C,Object(r["C"])(e.serviceId),1),Object(r["h"])("p",I,Object(r["C"])(e.createdAt.slice(0,10).split("-").reverse().join("-")),1)]),Object(r["h"])("p",N,[Object(r["h"])("span",null,Object(r["C"])(e.customerName),1)]),Object(r["h"])("div",A,[Object(r["h"])("p",R,[E,Object(r["h"])("span",S,"Rs."+Object(r["C"])(e.serviceTotal),1)]),Object(r["h"])("div",P,[Object(r["h"])("div",$,[Object(r["h"])("a",{class:"btn btn-outline-secondary rounded-pill px-3 btn-sm me-auto",href:"tel:"+e.phoneNumber},[Object(r["h"])("img",{src:s.a,class:"img-fluid btn-icon text-dark",alt:e.phoneNumber},null,8,B),U],8,V),e.bill?(Object(r["t"])(),Object(r["e"])(l,{key:0,tag:"a",to:"/bills/"+e.bill.billNumber,class:"btn btn-sm btn-primary text-decoration-none me-1"},{default:Object(r["H"])((function(){return[Object(r["j"])("Bill "+Object(r["C"])(e.bill.billNumber),1)]})),_:2},1032,["to"])):Object(r["f"])("",!0),e.bill?(Object(r["t"])(),Object(r["g"])("a",{key:1,class:"btn btn-sm btn-outline-dark",download:i.vehicle.vehicleNo+" Bill-"+e.bill.billNumber,href:e.bill.billPhoto},"Download Bill",8,_)):Object(r["f"])("",!0)])])])])})),128))])):Object(r["f"])("",!0)],1024))])])])}var T=n("1da1"),D=(n("96cf"),n("d3b7"),n("25f0"),n("4d6e")),J=(n("8017"),{data:function(){return{loading:!1,vehicle:null,services:null,billPreview:null}},methods:{newService:function(){var e=this.$route.params.VehicleId.toUpperCase();e?this.$router.push({path:"/services/new",query:{vehicleNo:e}}):this.$router.push({path:"/services/new"})}},created:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,n=e.$route.params.VehicleId,t.next=4,D["a"].get("/services/"+n.toString());case 4:r=t.sent,r.data.success?(e.vehicle=r.data.vehicle,e.services=r.data.services,e.loading=!1):e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()}}),q=(n("ab5d"),n("6b0d")),z=n.n(q);const H=z()(J,[["render",M],["__scopeId","data-v-71989e0a"]]);t["default"]=H},"7e01":function(e,t,n){e.exports=n.p+"img/va-poster.cdb6b570.jpg"},8418:function(e,t,n){"use strict";var r=n("a04b"),c=n("9bf2"),i=n("5c6c");e.exports=function(e,t,n){var a=r(t);a in e?c.f(e,a,i(0,n)):e[a]=n}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},a15b:function(e,t,n){"use strict";var r=n("23e7"),c=n("e330"),i=n("44ad"),a=n("fc6a"),s=n("a640"),l=c([].join),o=i!=Object,u=s("join",",");r({target:"Array",proto:!0,forced:o||!u},{join:function(e){return l(a(this),void 0===e?",":e)}})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},ab5d:function(e,t,n){"use strict";n("1f36")},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},fb6a:function(e,t,n){"use strict";var r=n("23e7"),c=n("da84"),i=n("e8b5"),a=n("68ee"),s=n("861d"),l=n("23cb"),o=n("07fa"),u=n("fc6a"),b=n("8418"),d=n("b622"),f=n("1dde"),v=n("f36a"),h=f("slice"),p=d("species"),j=c.Array,g=Math.max;r({target:"Array",proto:!0,forced:!h},{slice:function(e,t){var n,r,c,d=u(this),f=o(d),h=l(e,f),O=l(void 0===t?f:t,f);if(i(d)&&(n=d.constructor,a(n)&&(n===j||i(n.prototype))?n=void 0:s(n)&&(n=n[p],null===n&&(n=void 0)),n===j||void 0===n))return v(d,h,O);for(r=new(void 0===n?j:n)(g(O-h,0)),c=0;h<O;h++,c++)h in d&&b(r,c,d[h]);return r.length=c,r}})}}]);
//# sourceMappingURL=chunk-542c5017.1d3620c0.js.map