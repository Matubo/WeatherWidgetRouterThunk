(this.webpackJsonptemperature=this.webpackJsonptemperature||[]).push([[0],{29:function(e,t,r){},30:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),c=r(12),s=r.n(c),a=(r(29),r(30),r(21)),o=r(9),l=r(22);var h=Object(o.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"null",temperature:"null",feels_like:"null",humidity:"null",weather:"null",fetching:!1},t=arguments.length>1?arguments[1]:void 0;return"SET_NEW_WEATHER_DATA"===t.type?(console.log(e),{name:t.newObj.name,temperature:t.newObj.temperature,feels_like:t.newObj.feels_like,humidity:t.newObj.humidity,weather:t.newObj.weather,fetching:e.fetching}):"FETCHING"===t.type?Object(a.a)({name:e.name,temperature:e.temperature,feels_like:e.feels_like,humidity:e.humidity,weather:e.weather,fetching:e.fetching},"fetching",t.status):e}),Object(o.a)(l.a)),u=r(24),j=r(14),d={name:"\u041c\u043e\u0441\u043a\u0432\u0430",temperature:"-15",feels_like:"-20",humidity:"80%",weather:"\u0421\u043d\u0435\u0433"},m={name:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",temperature:"-15",feels_like:"-20",humidity:"80%",weather:"\u0414\u043e\u0436\u0434\u044c"},b={name:"\u0420\u043e\u0441\u0442\u043e\u0432 \u043d\u0430 \u0434\u043e\u043d\u0443",temperature:"-15",feels_like:"-20",humidity:"80%",weather:"\u0421\u043d\u0435\u0433\u043e\u0434\u043e\u0436\u0434\u044c"};var O=r(1);var f=Object(j.b)((function(e){return{storeName:e.name,storeTemperature:e.temperature,storeFeels_like:e.feels_like,storeHumidity:e.humidity,storeWeather:e.weather,storeFetching:e.fetching}}),{thunkForAPIrequest:function(e){return function(t){t({type:"FETCHING",status:!0}),new Promise((function(t,r){var n;"Moscow"===e&&(n=d),"Saint Petersburg"===e&&(n=m),"Rostov-on-Don"===e&&(n=b),setTimeout((function(){t(n)}),1e3)})).then((function(e){return e})).then((function(e){t({type:"SET_NEW_WEATHER_DATA",newObj:{name:e.name,temperature:e.temperature,feels_like:e.feels_like,humidity:e.humidity,weather:e.weather}})})).then((function(){t({type:"FETCHING",status:!1})})).catch((function(){console.log("query error"),t({type:"FETCHING",status:!1})}))}}})((function(e){var t=Object(n.useState)(0),r=Object(u.a)(t,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){i!=e.city&&(e.thunkForAPIrequest(e.city),c(e.city))})),e.storeFetching?Object(O.jsx)("div",{className:"preloader",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(O.jsxs)("div",{className:"WeatherWidget",children:[Object(O.jsxs)("div",{className:"weatherFlex",children:[Object(O.jsx)("h1",{children:e.storeName}),Object(O.jsx)("h1",{children:e.storeTemperature})]}),Object(O.jsxs)("div",{className:"weatherFlex",children:[Object(O.jsxs)("p",{children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f: ",e.storeFeels_like]}),Object(O.jsxs)("p",{children:["\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",e.storeHumidity]})]}),Object(O.jsx)("div",{className:"weatherFlex",children:Object(O.jsx)("p",{children:e.storeWeather})})]})})),p=r(11),x=r(3);var w=function(){return Object(O.jsxs)(p.a,{children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)(p.b,{to:"/",children:Object(O.jsx)("li",{children:"\u041c\u043e\u0441\u043a\u0432\u0430"})}),Object(O.jsx)(p.b,{to:"/spb",children:Object(O.jsx)("li",{children:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"})}),Object(O.jsx)(p.b,{to:"/rnd",children:Object(O.jsx)("li",{children:"\u0420\u043e\u0441\u0442\u043e\u0432-\u043d\u0430-\u0414\u043e\u043d\u0443"})})]}),Object(O.jsxs)(x.c,{children:[Object(O.jsx)(x.a,{exact:!0,path:"/",children:Object(O.jsx)(f,{store:h,city:"Moscow"})}),Object(O.jsx)(x.a,{path:"/spb",children:Object(O.jsx)(f,{store:h,city:"Saint Petersburg"})}),Object(O.jsx)(x.a,{path:"/rnd",children:Object(O.jsx)(f,{store:h,city:"Rostov-on-Don"})})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(j.a,{store:h,children:Object(O.jsx)(w,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.9b564d8c.chunk.js.map