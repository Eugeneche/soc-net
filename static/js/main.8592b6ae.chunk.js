(this.webpackJsonpsocial_media=this.webpackJsonpsocial_media||[]).push([[0],{11:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1Xpin",userBlock:"Dialogs_userBlock__3ZjkJ",ava:"Dialogs_ava__3ZQ4t",active:"Dialogs_active__nkuLR",addMessage:"Dialogs_addMessage__3-lJG",postField:"Dialogs_postField__33IBz",messagesColumn:"Dialogs_messagesColumn__290kT",message:"Dialogs_message__3lbky",messageBlock:"Dialogs_messageBlock__3wHy1",userName:"Dialogs_userName__wYCxL",messageText:"Dialogs_messageText__3nLSN"}},117:function(e,t,a){e.exports=a.p+"static/media/looking_job.0c569380.svg"},118:function(e,t,a){e.exports=a.p+"static/media/not_looking_job.d0c709f2.svg"},119:function(e,t,a){e.exports=a.p+"static/media/profile.1ea9acb5.jpg"},120:function(e,t,a){e.exports={addPost:"PostsTape_addPost__31cbv"}},123:function(e,t,a){e.exports=a.p+"static/media/main.a380a2be.jpg"},126:function(e,t,a){e.exports=a(251)},131:function(e,t,a){},19:function(e,t,a){e.exports={userItem:"Users_userItem__w_zBd",avatar:"Users_avatar__1CqdD",userPhoto:"Users_userPhoto__QbFi6",userInfo:"Users_userInfo__nWu7K",mane:"Users_mane__2nM4t",status:"Users_status__1vc8V",friendBlock:"Users_friendBlock__1LrKI",isFriend:"Users_isFriend__2lZGL",preloaderVisible:"Users_preloaderVisible__1ogTI",preloaderUnvisible:"Users_preloaderUnvisible__s24VE"}},250:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(57),o=a.n(s),i=a(9),c=(a(131),a(31)),l=a.n(c),u=a(78),m=a.n(u),d=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{className:m.a.ava,src:e.avatarLink,alt:"".concat(e.name,"'s avatar")}),r.a.createElement("span",{className:m.a.friendName},e.name))},p=a(12),f=function(e){var t=e.friends.map((function(e){return r.a.createElement("div",{key:e.id,className:l.a.friend},r.a.createElement(d,{name:e.name,avatarLink:e.avatarLink}))})),a=e.menu.map((function(e){return r.a.createElement("li",{key:e.page},r.a.createElement(p.b,{to:e.link,activeClassName:l.a.active},e.page))}));return r.a.createElement("nav",{className:l.a.sidebar},r.a.createElement("ul",null,a,r.a.createElement("li",{className:l.a.bold},r.a.createElement(p.b,{to:"/settings",activeClassName:l.a.active},"Settings"))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{className:l.a.bold},r.a.createElement(p.b,{to:"/friends",activeClassName:l.a.active},"My friends"))),t))},g=a(8),E=Object(g.b)((function(e){return{friends:e.sidebar.friends,menu:e.sidebar.menu}}),(function(e){return{}}))(f),h=a(22),b=a(23),_=a(25),v=a(24),O=a(26),P=a.n(O),S=a(60),N=a.n(S),j=function(e){return r.a.createElement("div",{className:N.a.loader},r.a.createElement("svg",{className:N.a.circular,viewBox:"25 25 50 50"},r.a.createElement("circle",{className:N.a.path,cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})))},k=a(117),w=a.n(k),U=a(118),T=a.n(U),A=a(28),C=a.n(A),y=a(119),F=a.n(y),x=function(e){Object(_.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={status:e.props.status,editMode:!1},e.activateEditMode=function(){e.setState({editMode:!0})},e.getNewStatus=function(t){e.setState({status:t.currentTarget.value}),console.log("getNewStatus:"+e.state.status)},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!this.state.editMode&&r.a.createElement("div",{className:P.a.profileStatus,onDoubleClick:this.activateEditMode,title:"double click to change"},this.props.status||"Double click to set status"),this.state.editMode&&r.a.createElement("div",{className:P.a.inputStatus},r.a.createElement("input",{onChange:this.getNewStatus,onBlur:this.deactivateEditMode,value:this.state.status,autoFocus:!0})))}}]),a}(r.a.Component),M=function(e){return e.profile?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:P.a.profileCover},r.a.createElement("img",{src:F.a,alt:"profile"}),r.a.createElement("img",{className:P.a.profilePhoto,src:e.profile.photos.small?e.profile.photos.small:C.a,alt:"user "+e.profile.userId+" photo"})),r.a.createElement("div",{className:P.a.lookingForAJob},r.a.createElement("span",null,"Is looking for a job:"),r.a.createElement("img",{className:P.a.jobLooking,src:!0===e.profile.lookingForAJob?w.a:T.a,alt:"looking for a job"})),r.a.createElement("div",{className:P.a.lookingForAJobDescription},e.profile.lookingForAJobDescription),r.a.createElement(x,{status:e.status,updateStatus:e.updateStatus})):r.a.createElement(j,null)},L=a(120),D=a.n(L),I=a(39),G=a.n(I),R=function(e){return r.a.createElement("div",{className:G.a.postBlock},r.a.createElement("div",{className:G.a.ava},r.a.createElement("img",{src:C.a,alt:"user avatar"}),r.a.createElement("span",{className:G.a.likes},"Likes: ",e.likes)),r.a.createElement("div",{className:G.a.post},r.a.createElement("p",{className:G.a.postText},e.post)))},B=a(253),H=a(252),z=function(e){console.log("rere");var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement(B.a,{name:"post",component:"input",type:"textarea",placeholder:" create your new post",autoFocus:!0}),r.a.createElement("button",{type:"submit"},"Add post"))};z=Object(H.a)({form:"post"})(z);var J=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:D.a.addPost},r.a.createElement(z,{onSubmit:function(t){e.addPost()}})),e.posts.map((function(e){return r.a.createElement(R,{key:e.id,post:e.postText,likes:e.likesCount})})))},W=a(34),V=a(3),q=a(122).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"69ce5c37-4614-409a-848d-cee47ea3fbcd"}}),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return q.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},X=function(e){return q.post("follow/".concat(e))},Y=function(e){return q.delete("follow/".concat(e))},Z=function(e){return q.get("profile/".concat(e))},Q=function(e){return q.get("profile/status/".concat(e))},$=function(e){return q.put("profile/status",{status:e})},ee=function(){return q.get("auth/me")},te=function(e){return q.post("auth/login",{loginFormData:e})},ae={posts:[],writingPostText:"",userProfile:null,status:""},ne=function(e){return{type:"SET-USER-STATUS",status:e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a=e.writingPostText;return Object(V.a)(Object(V.a)({},e),{},{posts:[].concat(Object(W.a)(e.posts),[{id:3,postText:a,likesCount:0}]),writingPostText:""});case"CHANGE-POST":return Object(V.a)(Object(V.a)({},e),{},{writingPostText:t.text});case"GET-USER-PROFILE":return Object(V.a)(Object(V.a)({},e),{},{userProfile:t.userProfile});case"SET-USER-STATUS":return Object(V.a)(Object(V.a)({},e),{},{status:t.status});default:return e}},se=Object(g.b)((function(e){return{posts:e.profilePage.posts,writingPostText:e.profilePage.writingPostText}}),(function(e){return{addPost:function(){e({type:"ADD-POST"})},changePostText:function(t){e(function(e){return{type:"CHANGE-POST",text:e}}(t))}}}))(J),oe=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(M,{profile:e.profile,status:e.status,updateStatus:e.updateStatus})),r.a.createElement("main",null,r.a.createElement(se,null)))},ie=a(6),ce=function(e){Object(_.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=9095),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(oe,Object.assign({},this.props,{profile:this.props.userProfile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(r.a.Component),le=Object(ie.d)(Object(g.b)((function(e){return{userProfile:e.profilePage.userProfile,status:e.profilePage.status}}),{getProfile:function(e){return function(t){Z(e).then((function(e){return t({type:"GET-USER-PROFILE",userProfile:e.data})}))}},getStatus:function(e){return function(t){Q(e).then((function(e){return t(ne(e.data))}))}},updateStatus:function(e){return function(t){$(e).then((function(a){0===a.data.resultCode&&t(ne(e))}))}}}),i.f)(ce),ue={users:[{id:1,name:"Tom"},{id:2,name:"Helen"},{id:3,name:"Sarah"},{id:4,name:"George"}],messages:[],writingMessageText:""},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a=e.writingMessageText;return Object(V.a)(Object(V.a)({},e),{},{messages:[].concat(Object(W.a)(e.messages),[{id:5,autor:"Me",message:a}]),writingMessageText:""});case"CHANGE-MESSAGE":return Object(V.a)(Object(V.a)({},e),{},{writingMessageText:t.text});default:return e}},de=a(11),pe=a.n(de),fe=function(e){return r.a.createElement(p.b,{to:"/dialogs/".concat(e.id),activeClassName:pe.a.active},r.a.createElement("div",{className:pe.a.userBlock},r.a.createElement("img",{className:pe.a.ava,src:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png",alt:"ava"}),e.name))},ge=function(e){return r.a.createElement("div",{className:pe.a.message},r.a.createElement("img",{className:pe.a.ava,src:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png",alt:"ava"}),r.a.createElement("div",{className:pe.a.messageBlock},r.a.createElement("h5",{className:pe.a.userName},e.autor),r.a.createElement("p",{className:pe.a.messageText},e.message)))},Ee=function(e){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:pe.a.dialogs},r.a.createElement("div",{className:pe.a.usersColumn},e.users.map((function(e){return r.a.createElement(fe,{key:e.id,id:e.id,name:e.name})}))),r.a.createElement("div",{className:pe.a.messagesColumn},r.a.createElement("div",{className:pe.a.addMessage},r.a.createElement("textarea",{onChange:function(t){var a=t.target.value;e.changeMessage(a)},className:pe.a.postField,value:e.writingMessageText,autoFocus:!0,placeholder:" write your message here"}),r.a.createElement("button",{onClick:function(){e.addMessage()}},"Send message")),e.messages.map((function(e){return r.a.createElement(ge,{key:e.id,autor:e.autor,message:e.message})})))))},he=Object(g.b)((function(e){return{users:e.dialogsPage.users,messages:e.dialogsPage.messages,writingMessageText:e.dialogsPage.writingMessageText}}),{addMessage:function(){return{type:"ADD-MESSAGE"}},changeMessage:function(e){return{type:"CHANGE-MESSAGE",text:e}}})(Ee),be=a(19),_e=a.n(be),ve=a(125),Oe=a(48),Pe=a.n(Oe),Se=function(e){for(var t=[],a=Math.ceil(e.totalUsersCount/e.pageSize),s=1;s<=a;s++)t.push(s);var o=Object(n.useState)(1),i=Object(ve.a)(o,2),c=i[0],l=i[1],u=10*(c-1)+1,m=10*c,d=t.filter((function(e){return e>=u&&e<=m})).map((function(t){return r.a.createElement("span",{key:t,className:t===e.currentPage?Pe.a.selected:"",onClick:function(a){return e.getCurrentUsers(t)}},t)})),p=Math.ceil(a/10);return r.a.createElement("div",{className:Pe.a.pagination},c>1&&r.a.createElement("button",{className:Pe.a.paginationNav,onClick:function(){return l(c-1)}},"<< PREW"),d,c<p&&r.a.createElement("button",{className:Pe.a.paginationNav,onClick:function(){return l(c+1)}},"NEXT >>"))},Ne=function(e){var t=e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:_e.a.userItem},r.a.createElement(p.b,{to:"profile/"+t.id},r.a.createElement("div",{className:_e.a.avatar},r.a.createElement("img",{className:_e.a.userPhoto,alt:"user-avatar",src:null!==t.photos.small?t.photos.small:C.a}))),r.a.createElement("div",{className:_e.a.userInfo},r.a.createElement("div",{className:_e.a.mane},t.name),r.a.createElement("div",{className:_e.a.status},t.status)),r.a.createElement("div",{className:_e.a.friendBlock},t.followed?r.a.createElement("div",{className:_e.a.isFriend},r.a.createElement("span",null,"friend"),r.a.createElement("button",{disabled:e.followProcessingUsers.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow")):r.a.createElement("button",{className:_e.a.isFriend,disabled:e.followProcessingUsers.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow")))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,getCurrentUsers:e.getCurrentUsers}),r.a.createElement("div",{className:_e.a.users},t))},je={users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!1,followProcessingUsers:[]},ke=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},we=function(e,t){return{type:"TOGGLE-IS-FOLLOW-PROCESSING",isFetching:e,userId:t}},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD-USERS":return Object(V.a)(Object(V.a)({},e),{},{users:Object(W.a)(t.users)});case"SET-TOTAL-USERS-COUNT":return Object(V.a)(Object(V.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SET-CURRENT-PAGE":return Object(V.a)(Object(V.a)({},e),{},{currentPage:t.currentPage});case"FOLLOW":return Object(V.a)(Object(V.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(V.a)(Object(V.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(V.a)(Object(V.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(V.a)(Object(V.a)({},e),{},{followed:!1}):e}))});case"TOGGLE-IS-FETCHING":return Object(V.a)(Object(V.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOW-PROCESSING":return Object(V.a)(Object(V.a)({},e),{},{followProcessingUsers:t.isFetching?[].concat(Object(W.a)(e.followProcessingUsers),[t.userId]):[e.followProcessingUsers.filter((function(e){return e!==t.userId}))]});default:return e}},Te=function(e){Object(_.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getCurrentUsers=function(t){e.props.getUsers(e.props.pageSize,t)},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(j,null):null,r.a.createElement(Ne,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching,getCurrentUsers:this.getCurrentUsers,followProcessingUsers:this.props.followProcessingUsers}))}}]),a}(r.a.Component),Ae=Object(g.b)((function(e){return{users:e.usersPage.users,totalUsersCount:e.usersPage.totalUsersCount,pageSize:e.usersPage.pageSize,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followProcessingUsers:e.usersPage.followProcessingUsers}}),{follow:function(e){return function(t){t(we(!0,e)),t(ke(!0)),X(e).then((function(a){0===a.data.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(we(!1,e)),t(ke(!1))}))}},unfollow:function(e){return function(t){t(we(!0,e)),t(ke(!0)),Y(e).then((function(a){0===a.data.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(we(!1,e)),t(ke(!1))}))}},getUsers:function(e,t){return function(a){a(ke(!0)),K(e,t).then((function(e){a(ke(!1)),a({type:"LOAD-USERS",users:e.items}),a(function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}}(t)),a({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:e.totalCount})}))}}})(Te),Ce=function(e){return r.a.createElement("div",null,"News")},ye=function(e){var t=function(t){Object(_.a)(n,t);var a=Object(v.a)(n);function n(){return Object(h.a)(this,n),a.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(i.a,{to:"/login"})}}]),n}(r.a.Component);return Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)},Fe=Object(ie.d)(Object(g.b)(),ye)((function(e){return r.a.createElement(Ce,null)})),xe=a(40),Me=a.n(xe),Le=function(e){return r.a.createElement("div",{className:Me.a.mineHeader},r.a.createElement("div",{className:Me.a.wrapper},r.a.createElement("div",{className:Me.a.authBlock},r.a.createElement("span",{className:Me.a.userName},e.isAuth?e.login:r.a.createElement(p.b,{to:"/login"},"Login")),r.a.createElement("img",{className:Me.a.avatar,src:e.authUserAvatar?e.authUserAvatar:C.a,alt:"autorized user avatar"}))))},De={userId:null,login:null,email:null,isAuth:!1,isFetching:!1,authorizedUserAvatar:null},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-AUTH-USER-DATA":return Object(V.a)(Object(V.a)(Object(V.a)({},e),t.data),{},{isAuth:!0});case"SET-AUTH-USER-AVATAR":return Object(V.a)(Object(V.a)({},e),{},{authUserAvatar:t.authUserAvatar});default:return e}},Ge=function(e){Object(_.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.setAuthMeData(),this.props.getProfile(this.props.id)}},{key:"render",value:function(){return r.a.createElement(Le,this.props)}}]),a}(r.a.Component),Re=Object(g.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth,authUserAvatar:e.auth.authUserAvatar}}),{setAuthMeData:function(){return function(e){ee().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,r=a.login,s=a.email;e(function(e,t,a){return{type:"SET-AUTH-USER-DATA",data:{userId:e,login:t,email:a}}}(n,r,s))}}))}},getProfile:function(e){return function(t){Z(e).then((function(e){var a=e.data.photos.small;t(function(e){return{type:"SET-AUTH-USER-AVATAR",authUserAvatar:e}}(a))}))}}})(Ge),Be=a(123),He=a.n(Be),ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:He.a,alt:"main"}))},Je=a(84),We=a.n(Je),Ve=Object(H.a)({form:"login"})((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"inputEmail"},"Email:"),r.a.createElement(B.a,{name:"inputEmail",component:"input",type:"email",placeholder:"your email"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"inputPassword"},"Password:"),r.a.createElement(B.a,{name:"inputPassword",component:"input",type:"password",placeholder:"password"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"rememberMe"},"Remember me"),r.a.createElement(B.a,{name:"rememberMe",component:"input",type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Login")))})),qe=function(e){return r.a.createElement("div",{className:We.a.loginPage},r.a.createElement("div",{className:We.a.modalWindow},r.a.createElement("h1",null,"Login"),r.a.createElement(Ve,{onSubmit:function(e){!function(e){te(e)}(e)}})))},Ke=function(e){return r.a.createElement("div",null,"Music")},Xe=Object(ie.d)(Object(g.b)(),ye)((function(e){return r.a.createElement(Ke,null)})),Ye=function(e){return r.a.createElement("div",null,"Settings")},Ze=Object(ie.d)(Object(g.b)(),ye)((function(e){return r.a.createElement(Ye,null)}));var Qe=function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(Re,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement(E,null),r.a.createElement("div",{className:"contentBlock"},r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(ze,null)}}),r.a.createElement(i.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(i.b,{path:"/users",render:function(){return r.a.createElement(Ae,null)}}),r.a.createElement(i.b,{exact:!0,path:"/dialogs",render:function(){return r.a.createElement(he,null)}}),r.a.createElement(i.b,{path:"/news",render:function(){return r.a.createElement(Fe,null)}}),r.a.createElement(i.b,{path:"/music",render:function(){return r.a.createElement(Xe,null)}}),r.a.createElement(i.b,{path:"/settings",render:function(){return r.a.createElement(Ze,null)}}),r.a.createElement(i.b,{path:"/login",render:function(){return r.a.createElement(qe,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(250);var $e={friends:[{id:1,name:"James",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"},{id:2,name:"Kirk",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"},{id:3,name:"Lars",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"},{id:4,name:"Robert",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"}],menu:[{link:"/profile",page:"Profile"},{link:"/dialogs",page:"Dialogs"},{link:"/users",page:"Users"},{link:"/news",page:"News"},{link:"/music",page:"Music"}]},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return e},tt=a(124),at=a(254),nt=Object(ie.c)({dialogsPage:me,profilePage:re,sidebar:et,usersPage:Ue,auth:Ie,form:at.a}),rt=Object(ie.e)(nt,Object(ie.a)(tt.a));window.store=rt;var st=rt,ot=function(e){o.a.render(r.a.createElement(p.a,{basename:"/soc-net"},r.a.createElement(g.a,{store:st},r.a.createElement(Qe,null))),document.getElementById("root"))};ot(st.getState()),st.subscribe((function(){st.getState();ot()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){e.exports={profileCover:"Profile_profileCover__1dBma",profilePhoto:"Profile_profilePhoto__1KJE5",profileStatus:"Profile_profileStatus__2fNLQ",lookingForAJob:"Profile_lookingForAJob__2c2Z_",lookingForAJobDescription:"Profile_lookingForAJobDescription__2s7T9",jobLooking:"Profile_jobLooking__1Sq13",inputStatus:"Profile_inputStatus__2dj2r"}},28:function(e,t,a){e.exports=a.p+"static/media/user_avatar_placeholder.8d17db1b.png"},31:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__2qBGc",active:"Sidebar_active__2RE7F",bold:"Sidebar_bold__1Fufz",friend:"Sidebar_friend__1rhVx"}},39:function(e,t,a){e.exports={postBlock:"Post_postBlock__e2YHy",ava:"Post_ava__gqrft",likes:"Post_likes__3O-6y",post:"Post_post__2oinp",postText:"Post_postText__o98dr"}},40:function(e,t,a){e.exports={mineHeader:"MainHeader_mineHeader__FN-S1",wrapper:"MainHeader_wrapper__10pp0",authBlock:"MainHeader_authBlock__3MKYN",userName:"MainHeader_userName__olMeq",avatar:"MainHeader_avatar__17XqS"}},48:function(e,t,a){e.exports={pagination:"Paginator_pagination__aJZTH",selected:"Paginator_selected__zhO9i",paginationNav:"Paginator_paginationNav__1pATz"}},60:function(e,t,a){e.exports={loader:"Preloader_loader__34Xgw",circular:"Preloader_circular__2wtNH",rotate:"Preloader_rotate__3JteC",path:"Preloader_path__2VkDZ",dash:"Preloader_dash__2ls1X",color:"Preloader_color__3OYLY"}},78:function(e,t,a){e.exports={friendName:"Friend_friendName__2oLor"}},84:function(e,t,a){e.exports={loginPage:"Login_loginPage__3a8_M",modalWindow:"Login_modalWindow__uhoiX"}}},[[126,1,2]]]);
//# sourceMappingURL=main.8592b6ae.chunk.js.map