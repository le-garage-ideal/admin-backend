(this["webpackJsonpperfect-garage-admin-frontend"]=this["webpackJsonpperfect-garage-admin-frontend"]||[]).push([[0],{25:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),l=(a(30),a(1)),o=a(6),i=a(21),u=a(22),d=a(10),m=a(24),f=a(23),h=a(39),p=function(e){e.selectedBrand,e.selectedModel;var t=e.selectedCars,a=e.select,n=e.unselect,c=e.nomatch,s=t.map((function(e,t){if(!e)return"";var s=e.favcarsVariants.map((function(t){var n=t.urls.map((function(n){return r.a.createElement("button",{key:e._id+t.name+n,style:{border:e.selectedFavcarsUrl===n?"3px solid yellow":"none"},onClick:function(){return a(e._id,t.name,n)}},r.a.createElement("img",{src:n,style:{maxHeight:"250px"},alt:t.name}))}));return r.a.createElement("div",{key:e._id+t.name},r.a.createElement("h4",{style:{textAlign:"left"}},t.name),r.a.createElement("div",{style:{display:"flex"}},n))})),l="";0===s.length&&(l=r.a.createElement("input",{type:"text",placeholder:"Add url",onChange:function(t){return a(e._id,e.variant,t.target.value)}}));var o=e.selectedFavcarsUrl?r.a.createElement("img",{src:e.selectedFavcarsUrl,style:{maxHeight:"100px"},alt:e.variant}):"",i=e.selectedFavcarsUrl?r.a.createElement("button",{onClick:function(){return n(e._id,e.selectedFavcarsVariant)}},"Unselect ",e.selectedFavcarsVariant):"",u=e.selectedFavcarsVariant?"":r.a.createElement("button",{onClick:function(){return c(e._id)}},"No match");return r.a.createElement("div",{key:e._id},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("h3",{style:{textAlign:"left",color:"blue"}},u," ",e.variant," (",e.startYear,")"),o,i,l),!e.selectedFavcarsUrl&&r.a.createElement("div",{style:{maxHeight:"500px",overflowY:"scroll"}},s))}));return r.a.createElement(r.a.Fragment,null,s)},v=a(3),b=a(18),g=function(e){if(e)switch(e.type){case"required":return"Field is mandatory";case"pattern":return"Field should be a number";default:return""}return""},E=(a(32),function(e){var t=e.selectedModel,a=e.selectedCars,c=e.createCar,s=e.removeCar,l=Object(n.useState)(!1),i=Object(v.a)(l,2),u=i[0],d=i[1],m=Object(b.a)(),f=m.register,h=m.handleSubmit,p=m.errors,E=a.filter((function(e){return!!e})).map((function(e){return r.a.createElement("div",{key:"car-crud-item-"+e._id,id:"car-crud-item-"+e._id,className:"crudCarsItem"},r.a.createElement("button",{className:e.selectedFavcarsUrl?"complete":"",onClick:function(){return s(e._id)}},r.a.createElement("span",{role:"img","aria-label":"Remove"},"\ud83d\uddd1\ufe0f")),r.a.createElement("span",{style:{marginRight:"10px"}},e.startYear),r.a.createElement("span",null,e.variant),r.a.createElement("span",{role:"img","aria-label":"Has image",title:"Has image",className:"has-image"},"\ud83d\uddbc"))})),C=["fieldsContainer"];return u?C.push("fieldsContainerDisplayed"):C.push("fieldsContainerHidden"),r.a.createElement("section",{className:"crudCarsContainer"},r.a.createElement("button",{type:"button",className:"addButton",onClick:function(){return d(!u)}},u?"\u2796":"\u2795"),r.a.createElement("div",{className:"elementsFormContainer"},r.a.createElement("section",null,E),r.a.createElement("form",{onSubmit:h((function(e){return c(Object(o.a)(Object(o.a)({},e),{},{model:Object(o.a)({},t)}))}))},r.a.createElement("div",{className:C.join(" ")},r.a.createElement("input",{type:"text",name:"variant",placeholder:"Variant",ref:f({required:!0})}),r.a.createElement("div",{className:"error"},g(p.variant),"\xa0"),r.a.createElement("input",{type:"text",name:"startYear",placeholder:"Start year",ref:f({pattern:/^\d{4}$/i,required:!0})}),r.a.createElement("div",{className:"error"},g(p.startYear),"\xa0"),r.a.createElement("input",{type:"text",name:"endYear",placeholder:"End year",ref:f({pattern:/^\d{4}$/i})}),r.a.createElement("div",{className:"error"},g(p.endYear),"\xa0"),r.a.createElement("input",{type:"text",name:"power",placeholder:"Power",ref:f({required:!0})}),r.a.createElement("div",{className:"error"},g(p.power),"\xa0"),r.a.createElement("input",{type:"text",name:"realWeight",placeholder:"Real weight",ref:f({pattern:/^\d+$/i})}),r.a.createElement("div",{className:"error"},g(p.realWeight),"\xa0"),r.a.createElement("input",{type:"text",name:"officialWeight",placeholder:"Official weight",ref:f({pattern:/^\d+$/i,required:!0})}),r.a.createElement("div",{className:"error"},g(p.officialWeight),"\xa0"),r.a.createElement("input",{type:"text",name:"options",placeholder:"Options",ref:f}),r.a.createElement("div",{className:"error"},g(p.options),"\xa0"),r.a.createElement("input",{type:"text",name:"selectedFavcarsUrl",placeholder:"Image URL",ref:f({required:!0})}),r.a.createElement("div",{className:"error"},g(p.selectedFavcarsUrl),"\xa0"),r.a.createElement("button",{type:"submit",className:"submitButton"},"Create")))))}),C=(a(33),function(e){var t=e.menuSelect,a=Object(n.useState)(null),c=Object(v.a)(a,2),s=c[0],l=c[1];return r.a.createElement("nav",{className:"css-menu"},r.a.createElement("button",{className:"menu-item".concat("Choose images"===s?" selected":""),onClick:function(){l("Choose images"),t("Choose images")}},"Choose images"),r.a.createElement("button",{className:"menu-item".concat("CRUD cars"===s?" selected":""),onClick:function(){l("CRUD cars"),t("CRUD cars")}},"CRUD cars"),r.a.createElement("div",{className:"animation start-home"}))}),y=function(e,t,a){return e[a]||t[a]?e[a]?t[a]?e[a]<t[a]?-1:e[a]===t[a]?0:1:1:-1:0},j=function(e,t){return y(e,t,"name")},k=function(e,t){return y(e,t,"name")},N=function(e,t){return 1*e.startYear-1*t.startYear===0?y(e,t,"variant"):y(e,t,"startYear")},O=a(14),S=a(40),M="https://perfect-garage-admin.herokuapp.com",_=new S.a(null),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(M).concat(e),Object(o.a)(Object(o.a)({},t),{},{headers:Object(o.a)(Object(o.a)({},t.headers),{},{Authorization:"Bearer ".concat(_.value.token),"content-type":"application/json",accept:"application/json"})}))},w=function(e){var t,a=Object(v.a)(e,3),n=a[0],r=a[1],c=a[2],s={},l={},o=Object(O.a)(n);try{var i=function(){var e=t.value,a=r.find((function(t){return t.name===e.model.brand.name}));a?(l[a._id]||(l[a._id]={totalCount:0,okCount:0}),l[a._id].totalCount++,e.selectedFavcarsUrl&&l[a._id].okCount++):console.log("brand not found for car",e);var n=c.find((function(t){return t.brand.name===e.model.brand.name&&t.name===e.model.name}));n?(s[n._id]||(s[n._id]={totalCount:0,okCount:0}),s[n._id].totalCount++,e.selectedFavcarsUrl&&s[n._id].okCount++):console.log("model not found for car",e)};for(o.s();!(t=o.n()).done;)i()}catch(u){o.e(u)}finally{o.f()}return{cars:n,models:c,brands:r,brandMap:l,modelMap:s}},F=function(e,t){return e.filter((function(e){return e.model.brand.name===t.brand.name&&e.model.name===t.name})).sort(N)},U=(a(34),function(e){var t=e.onSubmit,a=e.errorMessage,n=Object(b.a)(),c=n.register,s=n.handleSubmit,l=n.errors;return r.a.createElement("form",{onSubmit:s(t)},r.a.createElement("h2",{className:"card-heading"},"Login"),a&&r.a.createElement("p",{className:"error"},a),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",ref:c({required:!0})}),r.a.createElement("div",{className:"error"},g(l.realWeight),"\xa0")),r.a.createElement("div",null,r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",ref:c({required:!0})}),r.a.createElement("div",{className:"error"},g(l.realWeight),"\xa0")),r.a.createElement("button",{type:"submit",style:{marginTop:"10px"}},"OK"))});U.defaultProps={errorMessage:null};a(35);var R=function(e,t,a){var n=[];return e&&n.push("selected-button"),0===t&&n.push("group-incomplete-button"),t<a&&n.push("group-empty-button"),n},B=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={user:null,cars:[],brands:[],selectedBrand:null,selectedModels:[],selectedModel:null,selectedCars:[],selectedMenu:null,errorMessage:null},n.loginProcess=n.loginProcess.bind(Object(d.a)(n)),n.unselect=n.unselect.bind(Object(d.a)(n)),n.refreshState=n.refreshState.bind(Object(d.a)(n)),n.refreshState=n.refreshState.bind(Object(d.a)(n)),n.refreshStateRemove=n.refreshStateRemove.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.pipe(Object(h.a)((function(e){return!!e}))).subscribe((function(t){Promise.all([x("/cars").then((function(e){return e.json()})),x("/brands").then((function(e){return e.json()})),x("/models").then((function(e){return e.json()}))]).then(w).then((function(a){e.setState(Object(o.a)(Object(o.a)({},a),{},{user:t}))}))}))}},{key:"loginProcess",value:function(e){var t,a=this;(t=e,new Promise((function(e,a){fetch("".concat(M,"/login"),{method:"post",body:JSON.stringify(t),headers:{"content-type":"application/json",accept:"application/json"}}).then((function(t){"200"==="".concat(t.status)?t.json().then((function(t){e(t)})):t.json().then(a)})).catch((function(e){a(e)}))}))).then((function(e){_.next({username:e.username,token:e.token})})).catch((function(e){a.setState({errorMessage:e.errorMessage})}))}},{key:"unselect",value:function(e){var t=this.state.cars.findIndex((function(t){return t._id===e})),a=Object(l.a)(this.state.cars);a[t].selectedFavcarsVariant=null,a[t].selectedFavcarsImage=null;var n=this.state.selectedCars.findIndex((function(t){return t._id===e})),r=Object(l.a)(this.state.selectedCars);r[n].selectedFavcarsVariant=null,r[n].selectedFavcarsImage=null,this.setState({cars:a,selectedCars:r})}},{key:"refreshState",value:function(e){var t=this.state.cars.findIndex((function(t){return t._id===e._id})),a=Object(l.a)(this.state.cars);t>=0?a[t]=e:a.push(e);var n=this.state.selectedModel?F(a,this.state.selectedModel):[];this.setState({selectedCars:n,cars:a})}},{key:"refreshStateRemove",value:function(e){var t=this.state.cars.findIndex((function(t){return t._id===e}));if(t>=0){var a=Object(l.a)(this.state.cars);a.splice(t,1);var n=this.state.selectedModel?F(a,this.state.selectedModel):[];this.setState({selectedCars:n,cars:a})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.selectedMenu,c=t.brands,s=t.brandMap,l=t.selectedBrand,o=t.models,i=t.modelMap,u=t.selectedModels,d=t.selectedModel,m=t.cars,f=t.selectedCars,h=t.errorMessage,v=c.sort(j).map((function(t){var a=s[t._id],n=a&&a.okCount?a.okCount:0,c=a&&a.totalCount?a.totalCount:0,i=l&&l._id===t._id,u=R(i,n,c);return r.a.createElement("button",{key:t._id,onClick:function(){var a=o.filter((function(e){return e.brand.name===t.name}));e.setState({selectedBrand:t,selectedModels:a,selectedCars:[],selectedModel:null})},className:u.join(" ")},t.name)})),b=u.sort(k).map((function(t){var a=i[t._id],n=a&&a.okCount?a.okCount:0,c=a&&a.totalCount?a.totalCount:0,s=d&&d._id===t._id,l=R(s,n,c);return r.a.createElement("button",{key:t._id,title:t.favcarsName,onClick:function(){var a=F(m,t);e.setState({selectedModel:t,selectedCars:a})},className:l.join(" ")},t.name)})),g=null;switch(n){case"Choose images":g=r.a.createElement(p,{selectedBrand:l,selectedModel:d,selectedCars:f,nomatch:function(t){return function(e){return x("/cars/favcars/"+e,{method:"delete",headers:{accept:"application/json"}}).then((function(e){return e.json()}))}(t).then((function(t){return e.refreshState(t)}))},select:function(t,a,n){return function(e,t,a){return x("/cars",{method:"put",body:JSON.stringify({carId:e,variantName:t,url:a})}).then((function(e){return e.json()}))}(t,a,n).then((function(t){return e.refreshState(t)}))},unselect:this.unselect});break;case"CRUD cars":d&&(g=r.a.createElement(E,{selectedModel:d,selectedCars:f,removeCar:function(t){!function(e){x("/cars/"+e,{method:"delete"}).then((function(e){return console.log(e)}))}(t),e.refreshStateRemove(t)},createCar:function(t){!function(e){x("/cars",{method:"post",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}(t),e.refreshState(t)}}));break;default:g=""}var y=r.a.createElement(r.a.Fragment,null,!!n&&r.a.createElement("hr",{className:"separator"}),r.a.createElement("section",null,n&&v),u.length>0&&r.a.createElement("hr",{className:"separator"}),r.a.createElement("section",null,b));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("section",{className:"top"},r.a.createElement("section",{className:"title-logo"},r.a.createElement("img",{alt:"logo",src:"logo.png"}),r.a.createElement("h1",null,"Admin App"),a&&r.a.createElement("div",{style:{marginLeft:"10px"}},"\ud83d\udc64"," ".concat(a.username))),a&&r.a.createElement(C,{menuSelect:function(t){return e.setState({selectedMenu:t})}})),a&&y),r.a.createElement("main",{className:"App-main"},a&&g,!a&&r.a.createElement(U,{onSubmit:this.loginProcess,errorMessage:h})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.0750dba5.chunk.js.map