(window.webpackJsonpdevelopment=window.webpackJsonpdevelopment||[]).push([[0],{13:function(e,a,t){},16:function(e,a,t){e.exports=t(34)},21:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),s=t(14),i=t.n(s),l=(t(13),t(4)),o=t(5),c=t(7),m=t(6),u=t(8),d=(t(21),t(10)),p=t.n(d),g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={firebaseConfig:{apiKey:"AIzaSyAJNdzd8QpBRp-buErxRI5jlyIjovfOcyc",authDomain:"shupa-dev.firebaseapp.com",databaseURL:"https://shupa-dev.firebaseio.com",projectId:"shupa-dev",storageBucket:"shupa-dev.appspot.com",messagingSenderId:"529493216733",appId:"1:529493216733:web:d698b32a8229b2c7"},messageRef:null},t.submitHandler=function(e){e.preventDefault();var a=t.getInputVal("email");try{t.saveMessage(a),t.props.sentMessage()}catch(n){t.props.failedMessage()}},p.a.apps.length||(p.a.initializeApp(t.state.firebaseConfig),t.state.messageRef=p.a.database().ref("messages")),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"getInputVal",value:function(e){return document.getElementById(e).value}},{key:"saveMessage",value:function(e){this.state.messageRef.push().set({email:e})}},{key:"render",value:function(){return r.a.createElement("form",{className:"mailing",onSubmit:this.submitHandler},r.a.createElement("input",{id:"email",type:"email",name:"email",required:!0,placeholder:"John.Doe@email.co.uk"}),r.a.createElement("button",{type:"submit",className:"btn"},r.a.createElement("strong",null,"GO!")))}}]),a}(n.Component),f=(t(32),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={url:"./video/assembly-new.mp4",poster:"./img/poster.png"},t.playHandler=function(e){t.refs.background.play()},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"sentMessage",value:function(){document.querySelector(".success").style.display="flex",document.querySelector(".mailing").style.display="none"}},{key:"failedMessage",value:function(){document.querySelector(".fail").style.display="flex",document.querySelector(".mailing").style.display="none"}},{key:"render",value:function(){return r.a.createElement("header",{className:"v-header container"},r.a.createElement("div",{className:"fullscreen-video-wrap"},r.a.createElement("video",{type:"video/mp4",ref:"background",src:this.state.url,poster:this.state.poster,autoPlay:!0,onCanPlay:this.videoHandler,loop:!0})),r.a.createElement("div",{className:"header-overlay"}),r.a.createElement("div",{className:"header-content center"},r.a.createElement("h1",{className:"title-image"},"SUHPA"),r.a.createElement("p",null,"Its a race! Which gets built first our website or our aircraft."),r.a.createElement("p",null,"Want regular updates? Join our mailing list."),r.a.createElement(g,{sentMessage:this.sentMessage,failedMessage:this.failedMessage}),r.a.createElement("div",{className:"alert success"},r.a.createElement("img",{className:"alert-img",src:"./img/tick.svg",alt:""}),r.a.createElement("div",null,r.a.createElement("p",null,"Thank you for signing up!"))),r.a.createElement("div",{className:"alert fail"},r.a.createElement("img",{className:"alert-img",src:"./img/cross.svg",alt:""}),r.a.createElement("div",null,r.a.createElement("p",null,"Unfortunatley, there has been a problem!"))),r.a.createElement("div",{className:"SUSU container"},r.a.createElement("div",null,r.a.createElement("p",null,"Learn more at"),r.a.createElement("a",{href:"https://www.susu.org/groups/human-powered-aircraft"},r.a.createElement("img",{src:"./img/susu-plain.svg",alt:""}))))))}}]),a}(n.Component)),h=(t(33),function(e){var a=e.committee.map(function(e){return e.id>0?r.a.createElement("div",{className:"member",key:e.id},r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("div",{className:"member-content"},r.a.createElement("h3",null,e.name),r.a.createElement("h4",null,e.job),r.a.createElement("p",null,e.quote))):null});return r.a.createElement("div",{className:"committee"},r.a.createElement("h2",null,"Our Committee"),a)}),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={committee:[{id:1,image:"./img/committee/pran.jpg",name:"Prannay Roy",job:"Treasurer",quote:"Prannay is a second year Aeronautics and Astronautics student. He has been in charge of the wing design since the creation of the society, and was recently made treasurer."},{id:2,image:"./img/committee/jordan.jpg",name:"Jordan Williams",job:"Welfare Officer",quote:"Jordan is a first year Aeronautics and Astronautics student, who has been working with SUHPA since September 2018."},{id:3,image:"./img/committee/tat.jpg",name:"Tatjana Mandil",job:"President",quote:"Tatjana is a second year Aeronautics and Astronautics student, with a focus on propulsion. She is one of the founding members of SUHPA"},{id:4,image:"./img/committee/charles.jpg",name:"Charles Dhenin",job:"Vice-President",quote:"Charles is a former engineering foundation year student, with a passion for aircraft design, additive manufacturing and propulsion. He joined SUHPA in September 2018"},{id:5,image:"./img/committee/matt.jpg",name:"Matt Edgeson",job:"Secretary",quote:"Matt studies Aerospace engineering was part of the founding members of SUHPA. As well as being secretary, he has experience as drive-train leader and Social Sec."}]},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(h,{committee:this.state.committee}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.14d978c2.chunk.js.map