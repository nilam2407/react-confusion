(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{100:function(e,t,s){},115:function(e,t,s){},159:function(e,t,s){},160:function(e,t,s){},161:function(e,t,s){},162:function(e,t,s){},167:function(e,t,s){},168:function(e,t,s){},169:function(e,t,s){"use strict";s.r(t);var n=s(2),r=s.n(n),c=s(19),i=s.n(c),a=(s(97),s(98),s(99),s(100),s(14)),o=s(15),l=s(17),d=s(16),j=s(8),m=s(4),h=s(1),b=function(){return Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(h.jsx)("p",{children:"Loading ..."})]})};s(115);function u(e){var t=e.dish;e.onClick;return Object(h.jsxs)("div",{className:"menu-item",children:[Object(h.jsx)("div",{className:"menu-img",children:Object(h.jsx)("img",{src:t.image,alt:t.name})}),Object(h.jsxs)("div",{className:"menu-content",children:[Object(h.jsx)("a",{href:"#",children:t.name}),Object(h.jsx)("span",{children:t.price})]}),Object(h.jsx)("div",{className:"menu-ingredients",children:t.description})]})}var O=function(e){var t=e.dishes.dishes.map((function(e){return Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)(u,{dish:e})},e.id)}));return e.dishes.isLoading?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(b,{})})}):e.dishes.errMess?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h4",{children:e.dishes.errMess})})}):Object(h.jsx)("div",{className:"menu section-bg",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row mt-3",children:Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)("p",{children:"Check Our Tasty Menu"}),Object(h.jsx)("hr",{})]})}),Object(h.jsx)("div",{className:"row","data-aos":"fade-up","data-aos-delay":"100",children:Object(h.jsx)("div",{className:"col-lg-12 d-flex justify-content-center",children:Object(h.jsxs)("ul",{id:"menu-flters",children:[Object(h.jsx)("li",{"data-filter":"*",className:"filter-active",children:"All"}),Object(h.jsx)("li",{"data-filter":".filter-starters",children:"Starters"}),Object(h.jsx)("li",{"data-filter":".filter-salads",children:"Salads"}),Object(h.jsx)("li",{"data-filter":".filter-specialty",children:"Specialty"})]})})}),Object(h.jsx)("div",{className:"row menu-container mb-5",children:t})]})})},x=s(13),p=s(7),f=s(25),g=function(e){return e&&e.length},v=function(e){return function(t){return!t||t.length<=e}},N=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(x.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(o.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.props.postComment(this.props.dishId,e.rating,e.name,e.comment),console.log("current state is : "+JSON.stringify(e)),alert("current state is :"+JSON.stringify(e))}},{key:"render",value:function(){var e,t=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)(m.c,{color:"light",onClick:this.toggleModal,children:[Object(h.jsx)("span",{className:"fa fa-edit fa-lg"}),"Submit Comment"]}),Object(h.jsxs)(m.o,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(h.jsx)(m.q,{toggle:this.toggleModal,children:"Submit Comment"}),Object(h.jsx)(m.p,{children:Object(h.jsxs)(p.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(h.jsx)(m.w,{className:"form-group",children:Object(h.jsxs)(m.i,{md:10,children:[Object(h.jsx)(m.n,{htmlFor:"rating",children:" Rating "}),Object(h.jsxs)(p.Control.select,{model:".rating",name:"rating",className:"form-control",children:[Object(h.jsx)("option",{children:"1"}),Object(h.jsx)("option",{children:"2"}),Object(h.jsx)("option",{children:"3"}),Object(h.jsx)("option",{children:"4"}),Object(h.jsx)("option",{children:"5"})]})]})}),Object(h.jsx)(m.w,{className:"form-group",children:Object(h.jsxs)(m.i,{md:10,children:[Object(h.jsx)(m.n,{htmlFor:"name",children:" Your Name "}),Object(h.jsx)(p.Control.text,{model:".name",id:"name",name:"name",placeholder:"Your Name",className:"form-control",validators:{required:g,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:v(15)}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Required",minLength:" Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})}),Object(h.jsx)(m.w,{className:"form-group",children:Object(h.jsxs)(m.i,{md:10,children:[Object(h.jsx)(m.n,{htmlFor:"comment",children:" Comment"}),Object(h.jsx)(p.Control.textarea,{model:".comment",id:"comment",name:"comment",row:"6",className:"form-control"})]})}),Object(h.jsx)(m.w,{className:"form-group",children:Object(h.jsx)(m.i,{md:4,children:Object(h.jsx)(m.c,{type:"submit",color:"primary",children:"Submit"})})})]})})]})]})}}]),s}(n.Component);function y(e){var t=e.dish;return null!=t?Object(h.jsx)(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.f,{width:"100%",src:t.image,alt:t.name}),Object(h.jsxs)(m.e,{children:[Object(h.jsx)(m.h,{children:t.name}),Object(h.jsx)(m.g,{children:t.description})]})]})}):Object(h.jsx)("div",{})}function w(e){var t=e.comments,s=e.postComment,n=e.dishId;if(null!=t){var r=t.map((function(e){return Object(h.jsx)(f.Fade,{in:!0,children:Object(h.jsx)("li",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:e.comment}),Object(h.jsxs)("p",{children:["--",e.author,",",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})]})},e.id)})}));return Object(h.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(h.jsx)("h4",{children:"Comments"}),Object(h.jsx)("ul",{className:"list-unstyled",children:Object(h.jsx)(f.Stagger,{in:!0,children:r})}),Object(h.jsx)(N,{disId:n,postComment:s})]})}return Object(h.jsx)("div",{})}var M=function(e){return e.isLoading?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(b,{})})}):e.errMess?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(m.a,{children:[Object(h.jsx)(m.b,{children:Object(h.jsx)(j.b,{to:"/menu",children:"Menu"})}),Object(h.jsx)(m.b,{active:!0,children:e.dish.name})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsxs)("h3",{children:[" ",e.dish.name]}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(h.jsx)(y,{dish:e.dish})}),Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(w,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})})]})]}):Object(h.jsx)("div",{})},k=(s(159),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(x.a)(n)),n.toggleModal=n.toggleModal.bind(Object(x.a)(n)),n.handleLogin=n.handleLogin.bind(Object(x.a)(n)),n}return Object(o.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username:"+this.username.value+"password: "+this.password.value+"Remember: "+this.remember.checked),e.preventDefault()}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)(m.t,{dark:!0,expand:"md fixed-top",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(m.v,{className:"ml-auto",onClick:this.toggleNav}),Object(h.jsx)(m.u,{className:"mr-auto logo",href:"/",children:" The Calorie Kitchen"}),Object(h.jsx)(m.j,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(h.jsxs)(m.r,{className:"ml-auto",navbar:!0,children:[Object(h.jsx)(m.s,{className:"ulelement",children:Object(h.jsx)(j.c,{className:"link",to:"/home",children:" Home "})}),Object(h.jsx)(m.s,{className:"ulelement",children:Object(h.jsx)(j.c,{className:"link",to:"/aboutus",children:" About Us "})}),Object(h.jsx)(m.s,{className:"ulelement",children:Object(h.jsx)(j.c,{className:"link",to:"/menu",children:" Menu "})}),Object(h.jsx)(m.s,{className:"ulelement",children:Object(h.jsx)(j.c,{className:"link",to:"/Contactus",children:" Contact Us "})}),Object(h.jsx)(m.s,{className:"ulelement",children:Object(h.jsx)(j.c,{className:"link last",to:"/Order",children:" Order "})}),Object(h.jsx)(m.s,{className:"book-a-table",children:Object(h.jsx)("a",{className:"btnhover",href:"#reserve",children:" BOOK A TABLE "})})]})})]})}),Object(h.jsxs)(m.o,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(h.jsx)(m.q,{toggle:this.toggleModal,children:"Login"}),Object(h.jsx)(m.p,{children:Object(h.jsxs)(m.k,{onSubmit:this.handleLogin,children:[Object(h.jsxs)(m.l,{children:[Object(h.jsx)(m.n,{htmlFor:"username",children:" Username"}),Object(h.jsx)(m.m,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(h.jsxs)(m.l,{children:[Object(h.jsx)(m.n,{htmlFor:"password",children:" Password"}),Object(h.jsx)(m.m,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(h.jsx)(m.l,{check:!0,children:Object(h.jsxs)(m.n,{check:!0,children:[Object(h.jsx)(m.m,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}})," Remember me"]})}),Object(h.jsx)(m.c,{type:"submit",value:"submit",className:"primary",children:"Login"})]})})]})]})}}]),s}(n.Component));s(160);function S(e){var t=e.leader,s=e.isLoading,n=e.errMess;return s?Object(h.jsx)(b,{}):n?Object(h.jsx)("h4",{children:n}):Object(h.jsx)(f.Fade,{in:!0,children:Object(h.jsxs)("div",{className:"member","data-aos":"zoom-in","data-aos-delay":"300",children:[Object(h.jsx)("img",{src:t.image,className:"img-fluid",alt:""}),Object(h.jsxs)("div",{className:"member-info",children:[Object(h.jsxs)("div",{className:"member-info-content",children:[Object(h.jsx)("h4",{children:t.name}),Object(h.jsx)("span",{children:t.designation})]}),Object(h.jsxs)("div",{className:"social",children:[Object(h.jsx)("a",{href:"",children:Object(h.jsx)("i",{className:"fa fa-twitter"})}),Object(h.jsx)("a",{href:"",children:Object(h.jsx)("i",{className:"fa fa-facebook"})}),Object(h.jsx)("a",{href:"",children:Object(h.jsx)("i",{className:"fa fa-instagram"})}),Object(h.jsx)("a",{href:"",children:Object(h.jsx)("i",{className:"fa fa-linkedin"})})]})]})]})})}var L=function(e){var t=e.leaders.leaders.map((function(t){return Object(h.jsx)("div",{className:"col-12 col-md-4",children:Object(h.jsx)(S,{leader:t,isLoading:e.leadersLoading,errMess:e.leadersErrMess})},t.id)}));return Object(h.jsx)("div",{className:"about",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-lg-6 order-1 order-lg-2",children:Object(h.jsx)("div",{className:"about-img",children:Object(h.jsx)("img",{src:"https://4.bp.blogspot.com/-3FxR5HiioAU/Uk-xkmwlCXI/AAAAAAAAAgs/HRKybYRgzdE/s1600/Bar-and-Restaurant-Interior-Designs.jpg",alt:"Resturant Image"})})}),Object(h.jsxs)("div",{className:"col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content",children:[Object(h.jsx)("h2",{children:"About Us"}),Object(h.jsx)("hr",{}),Object(h.jsx)("h4",{children:"Our History"}),Object(h.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(h.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(h.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)("h2",{children:"chefs"}),Object(h.jsx)("p",{children:" Our professional Chefs"})]})}),t]})]})})},E=(s(161),function(e){return e&&e.length}),C=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)};var A=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n.sucessMsg=n.sucessMsg.bind(Object(x.a)(n)),n}return Object(o.a)(s,[{key:"sucessMsg",value:function(){}},{key:"handleSubmit",value:function(e){alert("thank you for submission"),this.props.resetFeedbackForm(),this.props.postFeedback(e.name,e.email,e.subject,e.message)}},{key:"render",value:function(){var e,t=this;return Object(h.jsx)("div",{className:"contact",children:Object(h.jsxs)("div",{className:"container mb-3",children:[Object(h.jsx)("div",{className:"section-title",children:Object(h.jsx)("p",{children:" Contact Us"})}),Object(h.jsx)("div",{className:"col-12 text-center",children:Object(h.jsx)("iframe",{src:"https://www.bing.com/maps/embed?h=350&w=800&cp=42.314578608773466~-83.05123804924315&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8",style:{border:0},width:"100%",height:"350",frameBorder:"0",allowFullScreen:""})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row mt-5",children:[Object(h.jsxs)("div",{className:"col-lg-4 info",children:[Object(h.jsxs)("div",{className:"address",children:[Object(h.jsx)("i",{class:"fa fa-map-marker"}),Object(h.jsx)("h4",{children:"Location"}),Object(h.jsx)("p",{children:" 121, Main Street,Windsor, Ontario "})]}),Object(h.jsxs)("div",{className:"open-hours",children:[Object(h.jsx)("i",{className:"fa fa-clock-o"}),Object(h.jsx)("h4",{children:" Open Hours"}),Object(h.jsxs)("p",{children:[" Monday-Saturday :",Object(h.jsx)("br",{}),"11:00 AM - 23:00 PM"]})]}),Object(h.jsxs)("div",{className:"email",children:[Object(h.jsx)("i",{className:"fa fa-envelope"}),Object(h.jsx)("h4",{children:" Email:"}),Object(h.jsx)("p",{children:"nilam2407@gmail.com"})]}),Object(h.jsxs)("div",{className:"phone",children:[Object(h.jsx)("i",{className:"fa fa-phone"}),Object(h.jsx)("h4",{children:"Call:"}),Object(h.jsx)("p",{children:" +1 519 123 4567"})]})]}),Object(h.jsx)("div",{className:"col-lg-8 mt-5 mt-lg-0",children:Object(h.jsx)("div",{className:"email-form",children:Object(h.jsxs)(p.Form,{model:"feedback",onSubmit:function(e){return t.handleSubmit(e)},children:[Object(h.jsxs)(m.w,{className:"form-group",children:[Object(h.jsxs)(m.i,{md:6,children:[Object(h.jsx)(p.Control.text,{model:".name",id:"name",name:"name",placeholder:"Your Name",className:"form-control",validators:{required:E,minLength:(e=3,function(t){return t&&t.length>=e})}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Required, ",minLength:"Name must be greater than 2 characters"}})]}),Object(h.jsxs)(m.i,{md:6,children:[Object(h.jsx)(p.Control.text,{model:".email",id:"email",name:"email",placeholder:"your Email",className:"form-control",validators:{required:E,validEmail:C}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(h.jsx)(m.w,{className:"form-group",children:Object(h.jsx)(m.i,{md:12,children:Object(h.jsx)(p.Control.text,{model:".subject",id:"subject",name:"subject",placeholder:"subject",row:"1",className:"form-control"})})}),Object(h.jsx)(m.w,{className:"form-group",children:Object(h.jsx)(m.i,{md:12,children:Object(h.jsx)(p.Control.textarea,{model:".message",id:"message",name:"message",placeholder:"Message",row:"12",className:"form-control"})})}),Object(h.jsx)(m.w,{className:"form-group",children:Object(h.jsx)(m.i,{className:"text-center btn-book",children:Object(h.jsx)(m.c,{type:"submit",children:"Send Message"})})})]})})})]})})]})})}}]),s}(n.Component);s(162);var F=function(e){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsx)("div",{className:"footer-top",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row mt-0 justify-content-center",children:[Object(h.jsxs)("div",{className:"col-3 offset-1 footer-links",children:[Object(h.jsx)("h5",{children:"Links"}),Object(h.jsxs)("ul",{className:"list-unstyled",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("i",{class:"fa fa-angle-right","aria-hidden":"true"}),Object(h.jsx)(j.b,{to:"./home",children:"Home"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("i",{class:"fa fa-angle-right","aria-hidden":"true"}),Object(h.jsx)(j.b,{to:"./aboutus",children:"About Us"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("i",{class:"fa fa-angle-right","aria-hidden":"true"}),Object(h.jsx)(j.b,{to:"./menu",children:"Menu"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("i",{class:"fa fa-angle-right","aria-hidden":"true"}),Object(h.jsx)(j.b,{to:"./contactus",children:"Contact Us"})]})]})]}),Object(h.jsxs)("div",{className:"col-4  footer-info",children:[Object(h.jsx)("h5",{children:"ADDRESS"}),Object(h.jsxs)("p",{children:["121, Main Street",Object(h.jsx)("br",{}),"Windsor, Ontario ",Object(h.jsx)("br",{}),"CANADA",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("strong",{children:"Phone "}),": +519 1234 5678",Object(h.jsx)("br",{}),Object(h.jsx)("strong",{children:"Email"}),": ",Object(h.jsx)("a",{href:"mailto:nilam2407@gmail.com",children:" nilam2407@gmail.com"})]})]}),Object(h.jsx)("div",{className:"col-3  align-self-center social-links",children:Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("p",{children:" Connect with Us"}),Object(h.jsx)("a",{href:"https://www.facebook.com/login.php",children:Object(h.jsx)("i",{className:"fa fa-facebook"})}),Object(h.jsx)("a",{href:"http://instagram.com/",children:Object(h.jsx)("i",{className:"fa fa-instagram"})}),Object(h.jsx)("a",{href:"http://twitter.com/",children:Object(h.jsx)("i",{className:"fa fa-twitter"})}),Object(h.jsx)("a",{href:"http://youtube.com/",children:Object(h.jsx)("i",{className:"fa fa-youtube"})})]})})]}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("p",{children:"\xa9 Copyright 2021 NeelRitz Inc"})})})]})})})},D=s(90),I=s.n(D),T=(s(165),s(166),s(167),function(e){return e&&e.length}),R=function(e){return!isNaN(Number(e))},P=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},q=function(e){return function(t){return!t||t.length==e}};function U(e){var t=e.item,s=e.isLoading,n=e.errMess;return s?Object(h.jsx)(b,{}):n?Object(h.jsx)("h4",{children:n}):Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(h.jsxs)("div",{className:"row event-item",children:[Object(h.jsx)("div",{className:"col-lg-6",children:Object(h.jsx)("img",{src:t.image,alt:t.name,className:"img-fluid"})}),Object(h.jsxs)("div",{className:"col-lg-6 pt-4 pt-lg-0 content",children:[Object(h.jsx)("h3",{children:t.name}),Object(h.jsx)("div",{className:"price",children:Object(h.jsx)("p",{children:t.designation?Object(h.jsx)("span",{children:t.designation}):null})}),Object(h.jsx)("p",{className:"font-italic",children:t.description})]})]})})})}var _=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(o.a)(s,[{key:"handleSubmit",value:function(e){console.log("current state is : "+JSON.stringify(e)),alert("current state is :"+JSON.stringify(e))}},{key:"render",value:function(){var e,t=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"Hero d-flex align-items-center",children:Object(h.jsx)("div",{className:"container position-relative text-center text-lg-left",children:Object(h.jsx)(m.w,{children:Object(h.jsxs)(m.i,{lg:8,children:[Object(h.jsxs)("h1",{children:["The ",Object(h.jsx)("span",{children:"Calorie"})," Kitchen"]}),Object(h.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Oue lipsmacking creations will tickle your culinery senses"}),Object(h.jsxs)("div",{className:"btns",children:[Object(h.jsx)(j.b,{to:"/menu",className:"btn-menu animated fadeInUp scrollto",children:"Our Menu"}),Object(h.jsx)("a",{href:"#reserve",className:"btn-book animated fadeInUp scrollto",children:"Book a Table"})]})]})})})}),Object(h.jsx)("div",{className:"events",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"section-title",children:Object(h.jsx)("h2",{children:"Special Features "})}),Object(h.jsxs)(I.a,{className:"events-carousel",loop:!0,items:1,autoplay:!0,children:[Object(h.jsx)(U,{item:this.props.dish,isLoading:this.props.dishesLoading,errMess:this.props.dishesErrMess}),Object(h.jsx)(U,{item:this.props.promotion,isLoading:this.props.promoLoading,errMess:this.props.promoErrMess}),Object(h.jsx)(U,{item:this.props.leaders,isLoading:this.props.leadersLoading,errMess:this.props.leadersErrMess})]})]})}),Object(h.jsx)("div",{className:"bookTable",id:"reserve",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)("h2",{children:"Reservation"}),Object(h.jsx)("p",{children:"Book a Table"})]}),Object(h.jsxs)(p.Form,{model:"reservation",onSubmit:function(e){return t.handleSubmit(e)},className:"php-email-form",children:[Object(h.jsxs)(m.w,{className:"form-group",children:[Object(h.jsxs)(m.i,{lg:4,md:6,children:[Object(h.jsx)(p.Control.text,{model:".name",id:"name",name:"name",placeholder:"Your Name",className:"form-control",validators:{required:T,minLength:(e=3,function(t){return t&&t.length>=e})}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Required, ",minLength:"Name must be greater than 2 characters"}})]}),Object(h.jsxs)(m.i,{md:6,lg:4,children:[Object(h.jsx)(p.Control.text,{model:".email",id:"email",name:"email",placeholder:" your Email",className:"form-control",validators:{required:T,validEmail:P}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]}),Object(h.jsxs)(m.i,{md:6,lg:4,children:[Object(h.jsx)(p.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Your Phone",className:"form-control",validators:{required:T,fixLength:q(11),isNumber:R}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",fixLength:"Phone number must be 10 digits",isNumber:"Must be a number"}})]})]}),Object(h.jsxs)(m.w,{className:"form-group",children:[Object(h.jsx)(m.i,{md:6,lg:4,children:Object(h.jsx)(p.Control,{type:"date",model:".date",name:"date",placeholder:"Date",className:"form-control"})}),Object(h.jsx)(m.i,{md:6,lg:4,children:Object(h.jsx)(p.Control.text,{model:".time",id:"time",name:"time",placeholder:"Time",className:"form-control"})}),Object(h.jsx)(m.i,{md:6,lg:4,children:Object(h.jsxs)(p.Control.select,{model:".numPerson",name:"numPerson",className:"form-control",children:[Object(h.jsx)("option",{children:"1"}),Object(h.jsx)("option",{children:"2"}),Object(h.jsx)("option",{children:"3"}),Object(h.jsx)("option",{children:"4"}),Object(h.jsx)("option",{children:"5"}),Object(h.jsx)("option",{children:"5 & up"})]})})]}),Object(h.jsx)(m.w,{className:"form-group",children:Object(h.jsx)(m.i,{md:12,children:Object(h.jsx)(p.Control.textarea,{model:".message",id:"message",name:"message",placeholder:"Message",row:"12",className:"form-control"})})}),Object(h.jsx)(m.w,{className:"form-group",children:Object(h.jsx)(m.i,{className:"text-center btn-book",children:Object(h.jsx)(m.c,{type:"submit",children:"Book a Table"})})})]})]})})]})}}]),s}(n.Component),H=s(21),B="ADD_COMMENT",J="DISHES_LOADING",Y="DISHES_FAILED",K="ADD_DISHES",Z="ADD_COMMENTS",W="COMMENTS_FAILED",G="PROMOS_LOADING",z="ADD_PROMOS",$="PROMOS_FAILED",V="LEADERS_LOADING",X="LEADERS_FAILED",Q="ADD_LEADERS",ee="FEEDBACK",te="https://my-json-server.typicode.com/nilam2407/confusion-database/",se=function(e,t,s,n){return function(r){var c={dishId:e,rating:t,author:s,comment:n};return c.date=(new Date).toISOString(),fetch(te+"comments",{method:"POST",body:JSON.stringify(c),headers:{"content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:B,payload:e}}(e))})).catch((function(e){console.log("Post Comments",e.message),alert("your comment could not be posted/nError:"+e.message)}))}},ne=function(){return{type:J}},re=function(e){return{type:Y,payload:e}},ce=function(e){return{type:K,payload:e}},ie=function(e){return{type:W,payload:e}},ae=function(e){return{type:Z,payload:e}},oe=function(){return{type:G}},le=function(e){return{type:$,payload:e}},de=function(e){return{type:z,payload:e}},je=function(e){return{type:X,payload:e}},me=function(){return{type:V}},he=function(e){return{type:Q,payload:e}},be=function(e){return{type:ee,payload:e}},ue=s(51),Oe=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchleaders()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{}),Object(h.jsx)("div",{children:Object(h.jsx)(ue.TransitionGroup,{children:Object(h.jsx)(ue.CSSTransition,{classNames:"page",timeout:300,children:Object(h.jsxs)(j.f,{children:[Object(h.jsx)(j.e,{path:"/home",component:function(){return Object(h.jsx)(_,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leaders:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),Object(h.jsx)(j.e,{exact:!0,path:"/menu",component:function(){return Object(h.jsx)(O,{dishes:e.props.dishes})}}),Object(h.jsx)(j.e,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(h.jsx)(M,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(h.jsx)(j.e,{exact:!0,path:"/contactus",component:function(){return Object(h.jsx)(A,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(h.jsx)(j.e,{path:"/aboutus",component:function(){return Object(h.jsx)(L,{leaders:e.props.leaders})}}),Object(h.jsx)(j.d,{to:"/home"})]})},this.props.location.key)})}),Object(h.jsx)(F,{})]})}}]),s}(n.Component),xe=Object(j.g)(Object(H.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,s,n,r){return e(se(t,s,n,r))},fetchDishes:function(){e((function(e){return e(ne(!0)),fetch(te+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ce(t))})).catch((function(t){return e(re(t.message))}))}))},resetFeedbackForm:function(){e(p.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(te+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ae(t))})).catch((function(t){return e(ie(t.message))}))}))},fetchPromos:function(){e((function(e){return e(oe()),fetch(te+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(de(t))})).catch((function(t){return e(le(t.message))}))}))},fetchleaders:function(){e((function(e){return e(me(!0)),fetch(te+"leaders").then((function(e){if(e.ok)return e;new Error("Error"+e.status+":"+e.statusText).response=e}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(he(t))})).catch((function(t){return e(je(t.message))}))}))},postFeedback:function(t,s,n,r,c){return e(function(e,t,s,n){return function(r){var c={name:e,email:t,subject:s,message:n};return c.date=(new Date).toISOString(),fetch(te+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error"+e.status+":"+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(be(e))})).catch((function(e){console.log("Post Feedback",e.message),alert("your Feedback could not be posted on server"+e.message)}))}}(t,s,n,r))}}}))(Oe)),pe=(s(168),s(6)),fe=s(22),ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(pe.a)(Object(pe.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case J:return Object(pe.a)(Object(pe.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case Y:return Object(pe.a)(Object(pe.a)({},e),{},{isLoading:!1,errMess:t.payload,dishes:[]});default:return e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(pe.a)(Object(pe.a)({},e),{},{errMess:null,comments:t.payload});case W:return Object(pe.a)(Object(pe.a)({},e),{},{errMess:t.payload});case B:var s=t.payload;return Object(pe.a)(Object(pe.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(pe.a)(Object(pe.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case G:return Object(pe.a)(Object(pe.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case $:return Object(pe.a)(Object(pe.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(pe.a)(Object(pe.a)({},e),{},{isLoading:!1,errMess:null,leaders:t.payload});case V:return Object(pe.a)(Object(pe.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case X:return Object(pe.a)(Object(pe.a)({},e),{},{isLoading:!1,errMess:t.payload,leaders:[]});default:return e}},we=s(91),Me=s.n(we),ke=s(92),Se=s.n(ke),Le={name:"",email:"",subject:"",message:""},Ee=Object(fe.createStore)(Object(fe.combineReducers)(Object(pe.a)({dishes:ge,comments:ve,promotions:Ne,leaders:ye},Object(p.createForms)({feedback:Le}))),Object(fe.applyMiddleware)(Me.a,Se.a)),Ce=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)(H.Provider,{store:Ee,children:Object(h.jsx)(j.a,{children:Object(h.jsx)("div",{children:Object(h.jsx)(xe,{})})})})}}]),s}(n.Component),Ae=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,170)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Ce,{})}),document.getElementById("root")),Ae()}},[[169,1,2]]]);
//# sourceMappingURL=main.11d533d3.chunk.js.map