(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(8),o=n.n(i),c=(n(13),n(2)),r=n(3),d=n(5),l=n(4),h=(n(14),n(6)),u=n(0),j=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={item:"",todoItems:[]},s}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return console.log(this.props),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:this.props.itemlist&&this.props.itemlist.map((function(e,n){return Object(u.jsxs)("li",{children:[e,Object(u.jsx)("span",{onClick:function(e){e.preventDefault(),t.props.deleteThisITem(n)},id:n,children:Object(u.jsx)("b",{children:"   X"})})]},n)}))})})}}]),n}(s.Component),b=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={item:"",todoItems:[]},s.onChangeHandler=s.onChangeHandler.bind(Object(h.a)(s)),s.addData=s.addData.bind(Object(h.a)(s)),s.delete=s.delete.bind(Object(h.a)(s)),s}return Object(r.a)(n,[{key:"onChangeHandler",value:function(t){var e=t.target.value;this.setState({item:e})}},{key:"addData",value:function(){var t=this.state.item,e=this.state.todoItems;e.push(t),this.setState({todoItems:e,item:""}),console.log(this.state.todoItems)}},{key:"delete",value:function(t){var e=this.state.todoItems;e.splice(t,1),this.setState({todoItems:e}),console.log(t)}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:["  ",Object(u.jsx)("h1",{children:"Class Based Todo App "}),Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("input",{type:"text",value:this.state.item,onChange:this.onChangeHandler}),Object(u.jsx)("button",{onClick:this.addData,children:"Add"})]}),Object(u.jsx)(j,{itemlist:this.state.todoItems,deleteThisITem:this.delete})]})}}]),n}(s.Component),O=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{})})}}]),n}(s.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),s(t),a(t),i(t),o(t)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.72f3b084.chunk.js.map