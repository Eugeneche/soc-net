(this.webpackJsonpsocial_media=this.webpackJsonpsocial_media||[]).push([[0],{16:function(e,t,a){e.exports={userItem:"Users_userItem__w_zBd",avatar:"Users_avatar__1CqdD",userPhoto:"Users_userPhoto__QbFi6",userInfo:"Users_userInfo__nWu7K",mane:"Users_mane__2nM4t",status:"Users_status__1vc8V",friendBlock:"Users_friendBlock__1LrKI",isFriend:"Users_isFriend__2lZGL",preloaderVisible:"Users_preloaderVisible__1ogTI",preloaderUnvisible:"Users_preloaderUnvisible__s24VE"}},17:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__2qBGc",active:"Sidebar_active__2RE7F",bold:"Sidebar_bold__1Fufz",friend:"Sidebar_friend__1rhVx"}},19:function(e,t,a){e.exports={profileCover:"ProfileHeader_profileCover__ppy09",profilePhoto:"ProfileHeader_profilePhoto__2hv0o",profileStatus:"ProfileHeader_profileStatus__1-ISZ",lookingForAJob:"ProfileHeader_lookingForAJob__2Os1Y",lookingForAJobDescription:"ProfileHeader_lookingForAJobDescription__20x2w",jobLooking:"ProfileHeader_jobLooking__3XoIx"}},21:function(e,t,a){e.exports=a.p+"static/media/user_avatar_placeholder.8d17db1b.png"},23:function(e,t,a){e.exports={postBlock:"Post_postBlock__e2YHy",ava:"Post_ava__gqrft",likes:"Post_likes__3O-6y",post:"Post_post__2oinp",postText:"Post_postText__o98dr"}},24:function(e,t,a){e.exports={mineHeader:"MainHeader_mineHeader__FN-S1",wrapper:"MainHeader_wrapper__10pp0",authBlock:"MainHeader_authBlock__3MKYN",userName:"MainHeader_userName__olMeq",avatar:"MainHeader_avatar__17XqS"}},27:function(e,t,a){e.exports={pagination:"Paginator_pagination__aJZTH",selected:"Paginator_selected__zhO9i",paginationNav:"Paginator_paginationNav__1pATz"}},31:function(e,t,a){e.exports={loader:"Preloader_loader__34Xgw",circular:"Preloader_circular__2wtNH",rotate:"Preloader_rotate__3JteC",path:"Preloader_path__2VkDZ",dash:"Preloader_dash__2ls1X",color:"Preloader_color__3OYLY"}},33:function(e,t,a){e.exports={friendName:"Friend_friendName__2oLor"}},4:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1Xpin",userBlock:"Dialogs_userBlock__3ZjkJ",ava:"Dialogs_ava__3ZQ4t",active:"Dialogs_active__nkuLR",addMessage:"Dialogs_addMessage__3-lJG",postField:"Dialogs_postField__33IBz",messagesColumn:"Dialogs_messagesColumn__290kT",message:"Dialogs_message__3lbky",messageBlock:"Dialogs_messageBlock__3wHy1",userName:"Dialogs_userName__wYCxL",messageText:"Dialogs_messageText__3nLSN"}},48:function(e,t,a){e.exports=a.p+"static/media/looking_job.0c569380.svg"},49:function(e,t,a){e.exports=a.p+"static/media/not_looking_job.d0c709f2.svg"},50:function(e,t,a){e.exports=a.p+"static/media/profile.1ea9acb5.jpg"},52:function(e,t,a){e.exports={addPost:"PostsTape_addPost__31cbv"}},53:function(e,t,a){e.exports=a.p+"static/media/main.a380a2be.jpg"},56:function(e,t,a){e.exports=a(85)},61:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),o=a.n(s),i=a(3),c=(a(61),a(17)),l=a.n(c),u=a(33),m=a.n(u),d=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{className:m.a.ava,src:e.avatarLink,alt:"".concat(e.name,"'s avatar")}),r.a.createElement("span",{className:m.a.friendName},e.name))},p=a(5),g=function(e){var t=e.friends.map((function(e){return r.a.createElement("div",{key:e.id,className:l.a.friend},r.a.createElement(d,{name:e.name,avatarLink:e.avatarLink}))})),a=e.menu.map((function(e){return r.a.createElement("li",{key:e.page},r.a.createElement(p.b,{to:e.link,activeClassName:l.a.active},e.page))}));return r.a.createElement("nav",{className:l.a.sidebar},r.a.createElement("ul",null,a,r.a.createElement("li",{className:l.a.bold},r.a.createElement(p.b,{to:"/settings",activeClassName:l.a.active},"Settings"))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{className:l.a.bold},r.a.createElement(p.b,{to:"/friends",activeClassName:l.a.active},"My friends"))),t))},f=a(6),E=Object(f.b)((function(e){return{friends:e.sidebar.friends,menu:e.sidebar.menu}}),(function(e){return{}}))(g),_=a(11),h=a(12),v=a(14),b=a(13),O=a(19),P=a.n(O),N=a(31),k=a.n(N),j=function(e){return r.a.createElement("div",{className:k.a.loader},r.a.createElement("svg",{className:k.a.circular,viewBox:"25 25 50 50"},r.a.createElement("circle",{className:k.a.path,cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})))},w=a(48),U=a.n(w),S=a(49),T=a.n(S),C=a(21),x=a.n(C),A=a(50),y=a.n(A),F=a(51).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"69ce5c37-4614-409a-848d-cee47ea3fbcd"}}),L=function(){return F.get("auth/me")},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return F.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},I=function(e){return F.get("profile/".concat(e))},D=function(e){return F.post("follow/".concat(e))},H=function(e){return F.delete("follow/".concat(e))},G=function(e){return L(),e.profile?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:P.a.profileCover},r.a.createElement("img",{src:y.a,alt:"profile"}),r.a.createElement("img",{className:P.a.profilePhoto,src:e.profile.photos.small?e.profile.photos.small:x.a,alt:"user "+e.profile.userId+" photo"})),r.a.createElement("div",{className:P.a.profileStatus},e.profile.aboutMe),r.a.createElement("div",{className:P.a.lookingForAJob},r.a.createElement("span",null,"Is looking for a job:"),r.a.createElement("img",{className:P.a.jobLooking,src:!0===e.profile.lookingForAJob?U.a:T.a,alt:"looking for a job"})),r.a.createElement("div",{className:P.a.lookingForAJobDescription},e.profile.lookingForAJobDescription)):r.a.createElement(j,null)},R=a(52),B=a.n(R),z=a(23),J=a.n(z),W=function(e){return r.a.createElement("div",{className:J.a.postBlock},r.a.createElement("div",{className:J.a.ava},r.a.createElement("img",{src:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png",alt:"user avatar"}),r.a.createElement("span",{className:J.a.likes},"Likes: ",e.likes)),r.a.createElement("div",{className:J.a.post},r.a.createElement("p",{className:J.a.postText},e.post)))},V=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:B.a.addPost},r.a.createElement("textarea",{onChange:function(t){var a=t.target.value;e.changePostText(a)},value:e.writingPostText,placeholder:" create your new post"}),r.a.createElement("button",{onClick:function(){e.addPost()}},"Add post")),e.posts.map((function(e){return r.a.createElement(W,{key:e.id,post:e.postText,likes:e.likesCount})})))},Y=a(18),K=a(1),X={posts:[{id:1,postText:"Hi there!",likesCount:10},{id:2,postText:"It's my new post.",likesCount:25765}],writingPostText:"",userProfile:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a=e.writingPostText;return Object(K.a)(Object(K.a)({},e),{},{posts:[].concat(Object(Y.a)(e.posts),[{id:3,postText:a,likesCount:0}]),writingPostText:""});case"CHANGE-POST":return Object(K.a)(Object(K.a)({},e),{},{writingPostText:t.text});case"GET-USER-PROFILE":return Object(K.a)(Object(K.a)({},e),{},{userProfile:t.userProfile});default:return e}},q=Object(f.b)((function(e){return{posts:e.profilePage.posts,writingPostText:e.profilePage.writingPostText}}),(function(e){return{addPost:function(){e({type:"ADD-POST"})},changePostText:function(t){e(function(e){return{type:"CHANGE-POST",text:e}}(t))}}}))(V),Q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(G,{profile:e.profile})),r.a.createElement("main",null,r.a.createElement(q,null)))},$=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=9095),this.props.getProfile(e)}},{key:"render",value:function(){return r.a.createElement(Q,Object.assign({},this.props,{profile:this.props.userProfile}))}}]),a}(r.a.Component),ee=Object(i.e)($),te=Object(f.b)((function(e){return{userProfile:e.profilePage.userProfile,authorizedUserId:e.auth.userId}}),{getProfile:function(e){return function(t){I(e).then((function(e){return t({type:"GET-USER-PROFILE",userProfile:e.data})}))}}})(ee),ae={users:[{id:1,name:"Tom"},{id:2,name:"Helen"},{id:3,name:"Sarah"},{id:4,name:"George"}],messages:[{id:1,autor:"Tom",message:"Hi! Are you busy today?"},{id:2,autor:"Me",message:"Hi! I've free time in afternoon. What's the matter?"},{id:3,autor:"Tom",message:"I want to talk with you."},{id:4,autor:"Me",message:"OK, let's meet at 6 o'clock?"}],writingMessageText:""},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a=e.writingMessageText;return Object(K.a)(Object(K.a)({},e),{},{messages:[].concat(Object(Y.a)(e.messages),[{id:5,autor:"Me",message:a}]),writingMessageText:""});case"CHANGE-MESSAGE":return Object(K.a)(Object(K.a)({},e),{},{writingMessageText:t.text});default:return e}},re=a(4),se=a.n(re),oe=function(e){return r.a.createElement(p.b,{to:"/dialogs/".concat(e.id),activeClassName:se.a.active},r.a.createElement("div",{className:se.a.userBlock},r.a.createElement("img",{className:se.a.ava,src:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png",alt:"ava"}),e.name))},ie=function(e){return r.a.createElement("div",{className:se.a.message},r.a.createElement("img",{className:se.a.ava,src:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png",alt:"ava"}),r.a.createElement("div",{className:se.a.messageBlock},r.a.createElement("h5",{className:se.a.userName},e.autor),r.a.createElement("p",{className:se.a.messageText},e.message)))},ce=function(e){return r.a.createElement("div",{className:se.a.dialogs},r.a.createElement("div",{className:se.a.usersColumn},e.users.map((function(e){return r.a.createElement(oe,{key:e.id,id:e.id,name:e.name})}))),r.a.createElement("div",{className:se.a.messagesColumn},r.a.createElement("div",{className:se.a.addMessage},r.a.createElement("textarea",{onChange:function(t){var a=t.target.value;e.changeMessage(a)},className:se.a.postField,value:e.writingMessageText,placeholder:" write your message here"}),r.a.createElement("button",{onClick:function(){e.addMessage()}},"Send message")),e.messages.map((function(e){return r.a.createElement(ie,{key:e.id,autor:e.autor,message:e.message})}))))},le=Object(f.b)((function(e){return{users:e.dialogsPage.users,messages:e.dialogsPage.messages,writingMessageText:e.dialogsPage.writingMessageText}}),(function(e){return{addMessage:function(){e({type:"ADD-MESSAGE"})},changeMessage:function(t){e(function(e){return{type:"CHANGE-MESSAGE",text:e}}(t))}}}))(ce),ue=a(16),me=a.n(ue),de=a(55),pe=a(27),ge=a.n(pe),fe=function(e){for(var t=[],a=Math.ceil(e.totalUsersCount/e.pageSize),s=1;s<=a;s++)t.push(s);var o=Object(n.useState)(1),i=Object(de.a)(o,2),c=i[0],l=i[1],u=10*(c-1)+1,m=10*c,d=t.filter((function(e){return e>=u&&e<=m})).map((function(t){return r.a.createElement("span",{key:t,className:t===e.currentPage?ge.a.selected:"",onClick:function(a){return e.getCurrentUsers(t)}},t)})),p=Math.ceil(a/10);return console.log(p),r.a.createElement("div",{className:ge.a.pagination},c>1&&r.a.createElement("button",{className:ge.a.paginationNav,onClick:function(){return l(c-1)}},"<< PREW"),d,c<p&&r.a.createElement("button",{className:ge.a.paginationNav,onClick:function(){return l(c+1)}},"NEXT >>"))},Ee=function(e){var t=e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:me.a.userItem},r.a.createElement(p.b,{to:"profile/"+t.id},r.a.createElement("div",{className:me.a.avatar},r.a.createElement("img",{className:me.a.userPhoto,alt:"user-avatar",src:null!==t.photos.small?t.photos.small:x.a}))),r.a.createElement("div",{className:me.a.userInfo},r.a.createElement("div",{className:me.a.mane},t.name),r.a.createElement("div",{className:me.a.status},t.status)),r.a.createElement("div",{className:me.a.friendBlock},t.followed?r.a.createElement("div",{className:me.a.isFriend},r.a.createElement("span",null,"friend"),r.a.createElement("button",{disabled:e.followProcessingUsers.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow")):r.a.createElement("button",{className:me.a.isFriend,disabled:e.followProcessingUsers.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow")))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,getCurrentUsers:e.getCurrentUsers}),r.a.createElement("div",{className:me.a.users},t))},_e={users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!1,followProcessingUsers:[]},he=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},ve=function(e,t){return{type:"TOGGLE-IS-FOLLOW-PROCESSING",isFetching:e,userId:t}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD-USERS":return Object(K.a)(Object(K.a)({},e),{},{users:Object(Y.a)(t.users)});case"SET-TOTAL-USERS-COUNT":return Object(K.a)(Object(K.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SET-CURRENT-PAGE":return Object(K.a)(Object(K.a)({},e),{},{currentPage:t.currentPage});case"FOLLOW":return Object(K.a)(Object(K.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(K.a)(Object(K.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(K.a)(Object(K.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(K.a)(Object(K.a)({},e),{},{followed:!1}):e}))});case"TOGGLE-IS-FETCHING":return Object(K.a)(Object(K.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOW-PROCESSING":return Object(K.a)(Object(K.a)({},e),{},{followProcessingUsers:t.isFetching?[].concat(Object(Y.a)(e.followProcessingUsers),[t.userId]):[e.followProcessingUsers.filter((function(e){return e!==t.userId}))]});default:return e}},Oe=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getCurrentUsers=function(t){e.props.getUsers(e.props.pageSize,t)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(j,null):null,r.a.createElement(Ee,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching,getCurrentUsers:this.getCurrentUsers,followProcessingUsers:this.props.followProcessingUsers}))}}]),a}(r.a.Component),Pe=Object(f.b)((function(e){return{users:e.usersPage.users,totalUsersCount:e.usersPage.totalUsersCount,pageSize:e.usersPage.pageSize,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followProcessingUsers:e.usersPage.followProcessingUsers}}),{follow:function(e){return function(t){t(ve(!0,e)),t(he(!0)),D(e).then((function(a){0===a.data.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(ve(!1,e)),t(he(!1))}))}},unfollow:function(e){return function(t){t(ve(!0,e)),t(he(!0)),H(e).then((function(a){0===a.data.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(ve(!1,e)),t(he(!1))}))}},getUsers:function(e,t){return function(a){a(he(!0)),M(e,t).then((function(e){a(he(!1)),a({type:"LOAD-USERS",users:e.items}),a(function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}}(t)),a({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:e.totalCount})}))}}})(Oe),Ne=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"News")}}]),a}(r.a.Component),ke=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Settings")}}]),a}(r.a.Component),je=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Music")}}]),a}(r.a.Component),we=a(24),Ue=a.n(we),Se=function(e){return r.a.createElement("div",{className:Ue.a.mineHeader},r.a.createElement("div",{className:Ue.a.wrapper},r.a.createElement("div",{className:Ue.a.authBlock},r.a.createElement("span",{className:Ue.a.userName},e.isAuth?e.login:r.a.createElement(p.b,{to:"/login"},"Login")),r.a.createElement("img",{className:Ue.a.avatar,src:e.authUserAvatar?e.authUserAvatar:x.a,alt:"autorized user avatar"}))))},Te={userId:null,login:null,email:null,isAuth:!1,isFetching:!1,authorizedUserAvatar:null},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-AUTH-USER-DATA":return Object(K.a)(Object(K.a)(Object(K.a)({},e),t.data),{},{isAuth:!0});case"SET-AUTH-USER-AVATAR":return Object(K.a)(Object(K.a)({},e),{},{authUserAvatar:t.authUserAvatar});default:return e}},xe=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.setAuthMeData(),this.props.getProfile(this.props.id)}},{key:"render",value:function(){return r.a.createElement(Se,this.props)}}]),a}(r.a.Component),Ae=Object(f.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth,authUserAvatar:e.auth.authUserAvatar}}),{setAuthMeData:function(){return function(e){L().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,r=a.login,s=a.email;e(function(e,t,a){return{type:"SET-AUTH-USER-DATA",data:{userId:e,login:t,email:a}}}(n,r,s))}}))}},getProfile:function(e){return function(t){I(e).then((function(e){var a=e.data.photos.small;t(function(e){return{type:"SET-AUTH-USER-AVATAR",authUserAvatar:e}}(a))}))}}})(xe),ye=a(53),Fe=a.n(ye),Le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:Fe.a,alt:"main"}))};var Me=function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(Ae,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement(E,null),r.a.createElement("div",{className:"contentBlock"},r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(i.a,{path:"/profile/:userId?",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(i.a,{path:"/users",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(i.a,{exact:!0,path:"/dialogs",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(i.a,{path:"/news",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(i.a,{path:"/music",render:function(){return r.a.createElement(je,null)}}),r.a.createElement(i.a,{path:"/settings",render:function(){return r.a.createElement(ke,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(84);var Ie=a(22),De={friends:[{id:1,name:"James",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"},{id:2,name:"Kirk",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"},{id:3,name:"Lars",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"},{id:4,name:"Robert",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"}],menu:[{link:"/profile",page:"Profile"},{link:"/dialogs",page:"Dialogs"},{link:"/users",page:"Users"},{link:"/news",page:"News"},{link:"/music",page:"Music"}]},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return e},Ge=a(54),Re=Object(Ie.c)({dialogsPage:ne,profilePage:Z,sidebar:He,usersPage:be,auth:Ce}),Be=Object(Ie.d)(Re,Object(Ie.a)(Ge.a));window.state=Be.getState();var ze=Be,Je=function(e){o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{basename:"/soc-net"},r.a.createElement(f.a,{store:ze},r.a.createElement(Me,null)))),document.getElementById("root"))};Je(ze.getState()),ze.subscribe((function(){ze.getState();Je()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.78c0bd2d.chunk.js.map