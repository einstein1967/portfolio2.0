(window["webpackJsonpportfolio2.0"]=window["webpackJsonpportfolio2.0"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),c=t.n(i),o=(t(13),t(3)),l=t(4),s=t(6),m=t(5),p=t(7),u=(t(14),t(15),function(e){var a=e.onClick;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("img",{src:"/images/logo.jpg",alt:"logo",className:"logo"}),r.a.createElement("div",null,r.a.createElement("h3",{className:"navName"},"Eric Bergan"),r.a.createElement("h2",{className:"navTitle"},"Full Stack Developer")),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav links"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",onClick:function(){return a()}},"About Me")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/einstein1967"},"Github")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/in/eric-bergan/"},"LinkedIn")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"mailto: bootcamp.ejb@gmail.com"},"Contact"))))))}),d=(t(16),function(e){return r.a.createElement("div",{className:"projectCard"},r.a.createElement("img",{src:e.imageURL,alt:"",className:"projectImg"}),r.a.createElement("p",{class:"projectDesc"},e.description),r.a.createElement("a",{href:e.runApp,target:"_blank"},r.a.createElement("button",{type:"button"},"Run App")),r.a.createElement("a",{href:e.seeCode,target:"_blank"},r.a.createElement("button",{type:"button",className:"runApp"},"See Code")))}),g=[{name:"Burger",imageURL:"./images/burger.jpg",description:"Full stack app that adds the user's input (ideally a sandwich) to a MySQL database, allows the user to 'devour' the sandwich, and then delete it",runApp:"https://ericjbergan.github.io/burger.github.io/",seeCode:"https://github.com/ericjbergan/burger.github.io"},{name:"Nesterly",imageURL:"./images/nesterly.jpg",description:"Full stack app that allows you to keep track of your household goods; functions but is still a work in progress",runApp:"https://bootcamp-proj2.herokuapp.com/",seeCode:"https://github.com/ericjbergan/bootcamp-project2.github.io"},{name:"Gem Collector",imageURL:"./images/gems.jpg",description:"A game for improving basic math and memory skills",runApp:"https://ericjbergan.github.io/crystal-collector.github.io/",seeCode:"https://github.com/ericjbergan/crystal-collector.github.io"}],h=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={isAboutMe:!1},t.switchAboutMe=function(){console.log("I was clicked"),t.setState({isAboutMe:!0})},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement(u,{onClick:this.switchAboutMe}),r.a.createElement("div",{id:"body"},this.state.isAboutMe?r.a.createElement("h1",null,"Hi, I'm Eric; Full Stack Developer"):r.a.createElement("h1",null,"THIS IS WORKING!!!!")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(d,{imageURL:g[0].imageURL,description:g[0].description,runApp:g[0].runApp,seeCode:g[0].seeCode})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(d,{imageURL:g[1].imageURL,description:g[1].description,runApp:g[1].runApp,seeCode:g[1].seeCode})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(d,{imageURL:g[2].imageURL,description:g[2].description,runApp:g[2].runApp,seeCode:g[2].seeCode}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.b7f276e3.chunk.js.map