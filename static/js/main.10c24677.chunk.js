(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,n,t){e.exports={card__container:"cardlist-style_card__container__2ciqH"}},function(e,n,t){e.exports={card:"card-style_card__1FmQc"}},function(e,n,t){e.exports={searchbox:"searchbox-style_searchbox__2baWA"}},,,function(e,n,t){e.exports=t(19)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(2),o=t.n(c),l=(t(17),t(3)),i=t(4),s=t(9),u=t(5),m=t(10),h=(t(18),t(6)),d=t.n(h),f=t(7),p=t.n(f),v=function(e){var n=e.name,t=e.avatar,a=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p.a.card},r.a.createElement("h6",null,n),r.a.createElement("img",{src:t,alt:n}),r.a.createElement("p",null,a)))},g=function(e){var n=e.users;return r.a.createElement("div",{className:d.a.card__container},n.map(function(e){return r.a.createElement(v,{key:e.id.toString(),name:e.name,avatar:e.avatar,email:e.email})}))},w=t(8),_=t.n(w),E=function(e){var n=e.placeholder,t=e.onChangeHandeler;return r.a.createElement("div",{className:_.a.searchbox},r.a.createElement("input",{type:"search",placeholder:n,onChange:t}))},b=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={monsters:[],filter:""},t.handelChange=function(e){t.setState({filter:e.target.value})},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.ir/users").then(function(e){return e.json()}).then(function(n){return e.setState({monsters:n})})}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.filter,a=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{onChangeHandeler:this.handelChange,placeholder:"search ..."}),r.a.createElement(g,{users:a}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.10c24677.chunk.js.map