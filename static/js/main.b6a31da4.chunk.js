(window["webpackJsonpxebia-project"]=window["webpackJsonpxebia-project"]||[]).push([[0],{45:function(e,t,a){e.exports=a(80)},50:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(15),r=a.n(s),o=(a(50),a(39)),c=a(17),i=a(18),m=a(22),u=a(20),h=a(19),d=a(23),p=a(8),g=a(21),f=a.n(g),E=(a(75),"https://swapi.co/api/"),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(o.a)({},e.target.type,e.target.value),function(){})},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.email&&""!==a.state.password?(a.setState({showLoader:!0}),f.a.get("".concat(E,"people/?search=").concat(a.state.email)).then(function(e){e.data.results.length&&e.data.results[0].birth_year===a.state.password?(console.log("success login"),localStorage.setItem("username",e.data.results[0].name),a.setState({showLoader:!1}),a.props.history.push("/search")):a.setState({showMessage:!0});var t=Object(h.a)(a);setTimeout(function(){t.setState({showMessage:!1})},4e3),a.setState({showLoader:!1}),console.log("failure login")})):alert("Username/Password cannot be blank")},a.state={email:"",password:"",showMessage:!1,showLoader:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(p.f,null,l.a.createElement("div",{className:"row-login"},this.state.showMessage?l.a.createElement("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert"},"Username/Password did not match"):"",l.a.createElement(p.e,null,l.a.createElement(p.b,null,l.a.createElement(p.c,null,l.a.createElement(p.d,{className:"form-header deep-blue-gradient rounded"},l.a.createElement("h5",{className:"my-3"},l.a.createElement(p.g,{icon:"lock"})," Welcome to STAR WARS:")),l.a.createElement("form",null,l.a.createElement("div",{className:"grey-text"},l.a.createElement(p.h,{label:"Type your User Name",icon:"user",type:"email",group:!0,onChange:this.handleChange}),l.a.createElement(p.h,{label:"Type your password",icon:"lock",group:!0,type:"password",required:!0,validate:!0,onChange:this.handleChange})),l.a.createElement("div",{className:"text-center mt-4"},l.a.createElement(p.a,{color:"light-blue",className:"mb-3",type:"submit",onClick:this.handleSubmit},"Login"),this.state.showLoader?l.a.createElement("div",{class:"spinner-border",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading...")):"")))))))}}]),t}(l.a.Component),w=(a(76),"https://swapi.co/api/"),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSearch=function(e){""!==e.target.value?f.a.get("".concat(w,"planets/?search=").concat(e.target.value)).then(function(e){a.setState({searchResults:e.data.results})}):a.setState({searchResults:[],planetInfo:{}})},a.showInfo=function(e){a.setState({planetInfo:e})},a.handleLogout=function(){a.props.history.push("/login")},a.state={searchResults:[],planetInfo:{}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=localStorage.getItem("username");return l.a.createElement("div",{className:"wrapper"},l.a.createElement("span",{className:"username"},"Welcome ",t,"!!"),l.a.createElement(p.a,{outline:!0,color:"warning",className:"logout",onClick:this.handleLogout},"Logout!"),l.a.createElement("img",{src:"https://raw.githubusercontent.com/kuuurt13/star-wars-react-fun/master/src/assets/images/star-wars-logo.png",className:"star-wars-logo"}),l.a.createElement("input",{type:"text",id:"example1",onChange:this.handleSearch,className:"form-control form-control-lg",placeholder:"Search Planet... (e.g. 'Ald')"}),l.a.createElement("div",{className:"search-wrapper"},this.state.searchResults.length?this.state.searchResults.map(function(t){var a="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";return l.a.createElement("div",{className:"planets",style:{backgroundColor:a,width:"".concat(1e-8*t.population+60,"px")},onClick:function(){return e.showInfo(t)}},l.a.createElement("div",{className:"planet-name"},t.name))}):""),Object.keys(this.state.planetInfo).length>0?l.a.createElement("div",{className:"planet-info"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"table-head"},l.a.createElement("tr",null,l.a.createElement("th",null,"Planet Name"),l.a.createElement("th",null,"Climate"),l.a.createElement("th",null,"Population"),l.a.createElement("th",null,"Diameter"),l.a.createElement("th",null,"Rotation Period"))),l.a.createElement("tbody",{className:"table-body"},l.a.createElement("tr",null,l.a.createElement("td",null,this.state.planetInfo.name),l.a.createElement("td",null,this.state.planetInfo.climate),l.a.createElement("td",null,this.state.planetInfo.population),l.a.createElement("td",null,this.state.planetInfo.diameter),l.a.createElement("td",null,this.state.planetInfo.rotation_period)))))):"")}}]),t}(l.a.Component),y=(a(77),a(78),a(79),a(16)),N=a(14),S=l.a.createElement(y.a,null,l.a.createElement("div",null,l.a.createElement(N.a,{path:"/login",component:b}),l.a.createElement(N.a,{path:"/search",component:v})));r.a.render(S,document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.b6a31da4.chunk.js.map