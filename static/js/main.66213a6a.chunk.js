(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{157:function(e,t,s){},158:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),r=s(14),a=s.n(r),i=(s(96),s(97),s(98),s(99),s(16)),o=s(17),l=s(19),j=s(18),d=s(6),m=s(3),h=s(1),b=function(){return Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(h.jsx)("p",{children:"Loading ..."})]})},u="http://localhost:3001/";function O(e){var t=e.dish;e.onClick;return Object(h.jsx)(m.d,{children:Object(h.jsxs)(d.b,{to:"/menu/".concat(t.id),children:[Object(h.jsx)(m.g,{width:"100%",src:u+t.image,alt:t.name}),Object(h.jsx)(m.h,{children:Object(h.jsx)(m.k,{children:t.name})})]})})}var x=function(e){var t=e.dishes.dishes.map((function(e){return Object(h.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(h.jsx)(O,{dish:e})},e.id)}));return e.dishes.isLoading?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(b,{})})}):e.dishes.errMess?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h4",{children:e.dishes.errMess})})}):Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(m.a,{children:[Object(h.jsx)(m.b,{children:Object(h.jsx)(d.b,{to:"/Home",children:"Home"})}),Object(h.jsx)(m.b,{active:!0,children:"Menu"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:" Menu "}),Object(h.jsx)("hr",{})]})]}),Object(h.jsx)("div",{className:"row",children:t})]})},f=s(15),p=s(9),g=s(23),N=function(e){return e&&e.length},v=function(e){return function(t){return!t||t.length<=e}},y=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(f.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.props.postComment(this.props.disId,e.rating,e.name,e.comment),console.log("current state is : "+JSON.stringify(e)),alert("current state is :"+JSON.stringify(e))}},{key:"render",value:function(){var e,t=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)(m.c,{color:"light",onClick:this.toggleModal,children:[Object(h.jsx)("span",{className:"fa fa-edit fa-lg",git:!0,p:!0}),"Submit Comment"]}),Object(h.jsxs)(m.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(h.jsx)(m.v,{toggle:this.toggleModal,children:"Submit Comment"}),Object(h.jsx)(m.u,{children:Object(h.jsxs)(p.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(h.jsx)(m.B,{className:"form-group",children:Object(h.jsxs)(m.l,{md:10,children:[Object(h.jsx)(m.r,{htmlFor:"rating",children:" Rating "}),Object(h.jsxs)(p.Control.Select,{model:".rating",name:"rating",className:"form-control",children:[Object(h.jsx)("option",{children:"1"}),Object(h.jsx)("option",{children:"2"}),Object(h.jsx)("option",{children:"3"}),Object(h.jsx)("option",{children:"4"}),Object(h.jsx)("option",{children:"5"})]})]})}),Object(h.jsx)(m.B,{className:"form-group",children:Object(h.jsxs)(m.l,{md:10,children:[Object(h.jsx)(m.r,{htmlFor:"name",children:" Your Name "}),Object(h.jsx)(p.Control.Text,{model:".name",id:"name",name:"name",placeholder:"Your Name",className:"form-control",validators:{required:N,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:v(15)}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Required",minLength:" Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})}),Object(h.jsx)(m.B,{className:"form-group",children:Object(h.jsxs)(m.l,{md:10,children:[Object(h.jsx)(m.r,{htmlFor:"comment",children:" Comment"}),Object(h.jsx)(p.Control.Textarea,{model:".comment",id:"comment",name:"comment",row:"6",className:"form-control"})]})}),Object(h.jsx)(m.B,{className:"form-group",children:Object(h.jsx)(m.l,{md:4,children:Object(h.jsx)(m.c,{type:"submit",color:"primary",children:"Submit"})})})]})})]})]})}}]),s}(n.Component);function w(e){var t=e.dish;return null!=t?Object(h.jsx)(g.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.g,{width:"100%",src:u+t.image,alt:t.name}),Object(h.jsxs)(m.e,{children:[Object(h.jsx)(m.k,{children:t.name}),Object(h.jsx)(m.j,{children:t.description})]})]})}):Object(h.jsx)("div",{})}function M(e){var t=e.comments,s=e.postComment,n=e.dishId;if(null!=t){var c=t.map((function(e){return Object(h.jsx)(g.Fade,{in:!0,children:Object(h.jsx)("li",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:e.comment}),Object(h.jsxs)("p",{children:["--",e.author,",",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})]})},e.id)})}));return Object(h.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(h.jsx)("h4",{children:"Comments"}),Object(h.jsx)("ul",{className:"list-unstyled",children:Object(h.jsx)(g.Stagger,{in:!0,children:c})}),Object(h.jsx)(y,{disId:n,postComment:s})]})}return Object(h.jsx)("div",{})}var k=function(e){return e.isLoading?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(b,{})})}):e.errMess?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(m.a,{children:[Object(h.jsx)(m.b,{children:Object(h.jsx)(d.b,{to:"/menu",children:"Menu"})}),Object(h.jsx)(m.b,{active:!0,children:e.dish.name})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsxs)("h3",{children:[" ",e.dish.name]}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(h.jsx)(w,{dish:e.dish})}),Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(M,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})})]})]}):Object(h.jsx)("div",{})},L=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(f.a)(n)),n.toggleModal=n.toggleModal.bind(Object(f.a)(n)),n.handleLogin=n.handleLogin.bind(Object(f.a)(n)),n}return Object(o.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username:"+this.username.value+"password: "+this.password.value+"Remember: "+this.remember.checked),e.preventDefault()}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(m.y,{dark:!0,expand:"md",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(m.A,{onClick:this.toggleNav}),Object(h.jsx)(m.z,{className:"mr-auto",href:"/home",children:Object(h.jsx)("img",{src:u+"images/logo.png",height:"30",width:"41",alt:"Ristorate Con Fusion"})}),Object(h.jsxs)(m.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(h.jsxs)(m.w,{navbar:!0,children:[Object(h.jsx)(m.x,{children:Object(h.jsxs)(d.c,{className:"nav-link",to:"/home",children:[Object(h.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(h.jsx)(m.x,{children:Object(h.jsxs)(d.c,{className:"nav-link",to:"/aboutus",children:[Object(h.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(h.jsx)(m.x,{children:Object(h.jsxs)(d.c,{className:"nav-link",to:"/menu",children:[Object(h.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(h.jsx)(m.x,{children:Object(h.jsxs)(d.c,{className:"nav-link",to:"/Contactus",children:[Object(h.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(h.jsx)(m.w,{className:"ml-auto",navbar:!0,children:Object(h.jsx)(m.x,{children:Object(h.jsx)(m.c,{outline:!0,onClick:this.toggleModal,children:Object(h.jsx)("span",{className:"fa fa-sign-in fa-lg",children:"Login"})})})})]})]})}),Object(h.jsx)(m.q,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row row-header",children:Object(h.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(h.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(h.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Oue lipsmacking creations will tickle your culinery senses"})]})})})}),Object(h.jsxs)(m.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(h.jsx)(m.v,{toggle:this.toggleModal,children:"Login"}),Object(h.jsx)(m.u,{children:Object(h.jsxs)(m.n,{onSubmit:this.handleLogin,children:[Object(h.jsxs)(m.o,{children:[Object(h.jsx)(m.r,{htmlFor:"username",children:" Username"}),Object(h.jsx)(m.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(h.jsxs)(m.o,{children:[Object(h.jsx)(m.r,{htmlFor:"password",children:" Password"}),Object(h.jsx)(m.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(h.jsx)(m.o,{check:!0,children:Object(h.jsxs)(m.r,{check:!0,children:[Object(h.jsx)(m.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}})," Remember me"]})}),Object(h.jsx)(m.c,{type:"submit",value:"submit",className:"primary",children:"Login"})]})})]})]})}}]),s}(n.Component);function S(e){var t=e.leader,s=e.isLoading,n=e.errMess;return s?Object(h.jsx)(b,{}):n?Object(h.jsx)("h4",{children:n}):Object(h.jsx)(g.Fade,{in:!0,children:Object(h.jsxs)(m.s,{tag:"li",children:[Object(h.jsx)(m.s,{left:!0,middle:!0,children:Object(h.jsx)(m.s,{object:!0,src:u+t.image,alt:t.name})}),Object(h.jsxs)(m.s,{body:!0,className:"ml-5",children:[Object(h.jsx)(m.s,{heading:!0,children:t.name}),Object(h.jsxs)(m.s,{subheading:!0,children:[" ",t.designation," "]}),Object(h.jsx)("p",{className:"mt-2",children:t.description})]})]})})}var C=function(e){var t=e.leaders.leaders.map((function(t){return Object(h.jsx)("div",{className:"col-12 mt-5",children:Object(h.jsx)(S,{leader:t,isLoading:e.leadersLoading,errMess:e.leadersErrMess})},t.id)}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(m.a,{children:[Object(h.jsx)(m.b,{children:Object(h.jsx)(d.b,{to:"/home",children:"Home"})}),Object(h.jsx)(m.b,{active:!0,children:"About Us"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:"About Us"}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsxs)("div",{className:"col-12 col-md-6",children:[Object(h.jsx)("h2",{children:"Our History"}),Object(h.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(h.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(h.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(h.jsx)("div",{className:"col-12 col-md-5",children:Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(h.jsx)(m.e,{children:Object(h.jsxs)("dl",{className:"row p-1",children:[Object(h.jsx)("dt",{className:"col-6",children:"Started"}),Object(h.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(h.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(h.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(h.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(h.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(h.jsx)("dt",{className:"col-6",children:"Employees"}),Object(h.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)(m.d,{children:Object(h.jsx)(m.e,{className:"bg-faded",children:Object(h.jsxs)("blockquote",{className:"blockquote",children:[Object(h.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(h.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(h.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h2",{children:"Corporate Leadership"})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)(m.s,{list:!0,children:Object(h.jsx)(g.Stagger,{in:!0,children:t})})})]})]})},E=function(e){return e&&e.length},F=function(e){return function(t){return!t||t.length<=e}},T=function(e){return function(t){return t&&t.length>=e}},D=function(e){return!isNaN(Number(e))},I=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},A=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(s,[{key:"handleSubmit",value:function(e){console.log("current state is : "+JSON.stringify(e)),alert("current state is :"+JSON.stringify(e)),this.props.resetFeedbackForm(),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(m.a,{children:[Object(h.jsx)(m.b,{children:Object(h.jsx)(d.b,{to:"/Home",children:"Home"})}),Object(h.jsx)(m.b,{active:!0,children:"Contact Us"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:" Contact Us "}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:"Location Information"})}),Object(h.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(h.jsx)("h5",{children:"Our Address"}),Object(h.jsxs)("address",{children:["121, Clear Water Bay Road",Object(h.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(h.jsx)("br",{}),"HONG KONG",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-envelope"}),": ",Object(h.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(h.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(h.jsx)("h5",{children:"Map of our Location"})}),Object(h.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(h.jsxs)("div",{className:"btn-group",role:"group",children:[Object(h.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(h.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(h.jsxs)("a",{role:"button",className:"btn btn-info",href:"tel:+123456859",children:[Object(h.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(h.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(h.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:" Send us your Feedback"})}),Object(h.jsx)("div",{className:"col-12 col-md-9",children:Object(h.jsxs)(p.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(h.jsxs)(m.B,{className:"form-group",children:[Object(h.jsx)(m.r,{htmlFor:"firstname",md:2,children:" First Name"}),Object(h.jsxs)(m.l,{md:10,children:[Object(h.jsx)(p.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:E,minLength:T(3),maxLength:F(15)}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(h.jsxs)(m.B,{className:"form-group",children:[Object(h.jsx)(m.r,{htmlFor:"lastname",md:2,children:" Last Name"}),Object(h.jsxs)(m.l,{md:10,children:[Object(h.jsx)(p.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:E,minLength:T(3),maxLength:F(15)}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(h.jsxs)(m.B,{className:"form-group",children:[Object(h.jsx)(m.r,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(h.jsxs)(m.l,{md:10,children:[Object(h.jsx)(p.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:E,minLength:T(3),maxLength:F(15),isNumber:D}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(h.jsxs)(m.B,{className:"form-group",children:[Object(h.jsx)(m.r,{htmlFor:"email",md:2,children:"Email"}),Object(h.jsxs)(m.l,{md:10,children:[Object(h.jsx)(p.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:E,validEmail:I}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(h.jsxs)(m.B,{className:"form-group",children:[Object(h.jsx)(m.l,{md:{size:6,offset:2},children:Object(h.jsx)("div",{className:"form-check",children:Object(h.jsxs)(m.r,{check:!0,children:[Object(h.jsx)(p.Control.checkbox,{model:"./agree",name:"agree",className:"form-check-input"}),"",Object(h.jsx)("strong",{children:" May we contact you?"})]})})}),Object(h.jsx)(m.l,{md:{size:3,offset:1},children:Object(h.jsxs)(p.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(h.jsx)("option",{children:"Tel."}),Object(h.jsx)("option",{children:"Email"})]})})]}),Object(h.jsxs)(m.B,{className:"form-group",children:[Object(h.jsx)(m.r,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(h.jsx)(m.l,{md:10,children:Object(h.jsx)(p.Control.textarea,{model:".message",id:"message",name:"message",row:"12",className:"form-control"})})]}),Object(h.jsx)(m.B,{className:"form-group",children:Object(h.jsx)(m.l,{md:{size:10,offset:2},children:Object(h.jsx)(m.c,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(n.Component);var R=function(e){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row justify-content-center",children:[Object(h.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(h.jsx)("h5",{children:"Links"}),Object(h.jsxs)("ul",{className:"list-unstyled",children:[Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"./home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"./aboutus",children:"About Us"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"./menu",children:"Menu"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"./contactus",children:"Contact Us"})})]})]}),Object(h.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(h.jsx)("h5",{children:"Our Address"}),Object(h.jsxs)("address",{children:["121, Clear Water Bay Road",Object(h.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(h.jsx)("br",{}),"HONG KONG",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(h.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(h.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(h.jsx)("i",{className:"fa fa-google-plus"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(h.jsx)("i",{className:"fa fa-facebook"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(h.jsx)("i",{className:"fa fa-linkedin"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(h.jsx)("i",{className:"fa fa-twitter"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(h.jsx)("i",{className:"fa fa-youtube"})}),Object(h.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(h.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})};function q(e){var t=e.item,s=e.isLoading,n=e.errMess;return s?Object(h.jsx)(b,{}):n?Object(h.jsx)("h4",{children:n}):Object(h.jsx)(g.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.g,{src:u+t.image,alt:t.name}),Object(h.jsxs)(m.e,{children:[Object(h.jsx)(m.k,{children:t.name}),t.designation?Object(h.jsx)(m.i,{children:t.designation}):null,Object(h.jsx)(m.j,{children:t.description})]})]})})}var B=function(e){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row align-item-start",children:[Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(q,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(q,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})}),Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(q,{item:e.leaders,isLoading:e.leadersLoading,errMess:e.leadersErrMess})})]})})},P=s(21),H="ADD_COMMENT",_="DISHES_LOADING",U="DISHES_FAILED",G="ADD_DISHES",J="ADD_COMMENTS",W="COMMENTS_FAILED",Y="PROMOS_LOADING",K="ADD_PROMOS",z="PROMOS_FAILED",Z="LEADERS_LOADING",$="LEADERS_FAILED",Q="ADD_LEADERS",V=function(e,t,s,n){return function(c){var r={dishId:e,rating:t,author:s,comment:n};return r.date=(new Date).toISOString(),fetch(u+"comments",{method:"POST",body:JSON.stringify(r),headers:{"content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return c(function(e){return{type:H,payload:e}}(e))})).catch((function(e){console.log("Post Comments",e.message),alert("your comment could not be posted/nError:"+e.message)}))}},X=function(){return{type:_}},ee=function(e){return{type:U,payload:e}},te=function(e){return{type:G,payload:e}},se=function(e){return{type:W,payload:e}},ne=function(e){return{type:J,payload:e}},ce=function(){return{type:Y}},re=function(e){return{type:z,payload:e}},ae=function(e){return{type:K,payload:e}},ie=function(e){return{type:$,payload:e}},oe=function(){return{type:Z}},le=function(e){return{type:Q,payload:e}},je=s(50),de=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchleaders()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(L,{}),Object(h.jsx)("div",{children:Object(h.jsx)(je.TransitionGroup,{children:Object(h.jsx)(je.CSSTransition,{classNames:"page",timeout:300,children:Object(h.jsxs)(d.f,{children:[Object(h.jsx)(d.e,{path:"/home",component:function(){return Object(h.jsx)(B,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leaders:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),Object(h.jsx)(d.e,{exact:!0,path:"/menu",component:function(){return Object(h.jsx)(x,{dishes:e.props.dishes})}}),Object(h.jsx)(d.e,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(h.jsx)(k,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(h.jsx)(d.e,{exact:!0,path:"/contactus",component:function(){return Object(h.jsx)(A,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(h.jsx)(d.e,{path:"/aboutus",component:function(){return Object(h.jsx)(C,{leaders:e.props.leaders})}}),Object(h.jsx)(d.d,{to:"/home"})]})},this.props.location.key)})}),Object(h.jsx)(R,{})]})}}]),s}(n.Component),me=Object(d.g)(Object(P.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,s,n,c){return e(V(t,s,n,c))},fetchDishes:function(){e((function(e){return e(X(!0)),fetch(u+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(te(t))})).catch((function(t){return e(ee(t.message))}))}))},resetFeedbackForm:function(){e(p.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(u+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ne(t))})).catch((function(t){return e(se(t.message))}))}))},fetchPromos:function(){e((function(e){return e(ce()),fetch(u+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ae(t))})).catch((function(t){return e(re(t.message))}))}))},fetchleaders:function(){e((function(e){return e(oe(!0)),fetch(u+"leaders").then((function(e){if(e.ok)return e;new Error("Error"+e.status+":"+e.statusText).response=e}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(le(t))})).catch((function(t){return e(ie(t.message))}))}))},postFeedback:function(t,s,n,c,r,a,i){return e(function(e,t,s,n,c,r,a){return function(i){var o={firstname:e,lastname:t,telnum:s,email:n,agree:c,contactType:r,message:a};return o.date=(new Date).toISOString(),fetch(u+"feedback",{method:"POST",body:JSON.stringify(o),headers:{"content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert("thank you"+JSON.stringify(e))})).catch((function(e){console.log("Post Feedback",e.message),alert("your Feedback could not be posted on server"+e.message)}))}}(t,s,n,c,r,a,i))}}}))(de)),he=(s(157),s(7)),be=s(22),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case _:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case U:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!1,errMess:t.payload,dishes:[]});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(he.a)(Object(he.a)({},e),{},{errMess:null,comments:t.payload});case W:return Object(he.a)(Object(he.a)({},e),{},{errMess:t.payload});case H:var s=t.payload;return Object(he.a)(Object(he.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case Y:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case z:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!1,errMess:null,leaders:t.payload});case Z:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case $:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!1,errMess:t.payload,leaders:[]});default:return e}},pe=s(90),ge=s.n(pe),Ne=s(91),ve=s.n(Ne),ye={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},we=Object(be.createStore)(Object(be.combineReducers)(Object(he.a)({dishes:ue,comments:Oe,promotions:xe,leaders:fe},Object(p.createForms)({feedback:ye}))),Object(be.applyMiddleware)(ge.a,ve.a)),Me=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)(P.Provider,{store:we,children:Object(h.jsx)(d.a,{children:Object(h.jsx)("div",{children:Object(h.jsx)(me,{})})})})}}]),s}(n.Component),ke=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,159)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Me,{})}),document.getElementById("root")),ke()},99:function(e,t,s){}},[[158,1,2]]]);
//# sourceMappingURL=main.66213a6a.chunk.js.map