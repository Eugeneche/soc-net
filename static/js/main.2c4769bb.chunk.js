(this.webpackJsonpsocial_media=this.webpackJsonpsocial_media||[]).push([[0],{11:function(e,t,a){e.exports={userItem:"Users_userItem__w_zBd",pagination:"Users_pagination__2DznN",selected:"Users_selected__1vP1R",avatar:"Users_avatar__1CqdD",userPhoto:"Users_userPhoto__QbFi6",userInfo:"Users_userInfo__nWu7K",mane:"Users_mane__2nM4t",status:"Users_status__1vc8V",friendBlock:"Users_friendBlock__1LrKI",isFriend:"Users_isFriend__2lZGL",preloaderVisible:"Users_preloaderVisible__1ogTI",preloaderUnvisible:"Users_preloaderUnvisible__s24VE"}},18:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__2qBGc",active:"Sidebar_active__2RE7F",bold:"Sidebar_bold__1Fufz",friend:"Sidebar_friend__1rhVx"}},19:function(e,t,a){e.exports={profileCover:"ProfileHeader_profileCover__ppy09",profilePhoto:"ProfileHeader_profilePhoto__2hv0o",profileStatus:"ProfileHeader_profileStatus__1-ISZ",lookingForAJob:"ProfileHeader_lookingForAJob__2Os1Y",lookingForAJobDescription:"ProfileHeader_lookingForAJobDescription__20x2w",jobLooking:"ProfileHeader_jobLooking__3XoIx"}},21:function(e,t,a){e.exports=a.p+"static/media/user_avatar.8d17db1b.png"},23:function(e,t,a){e.exports={postBlock:"Post_postBlock__e2YHy",ava:"Post_ava__gqrft",likes:"Post_likes__3O-6y",post:"Post_post__2oinp",postText:"Post_postText__o98dr"}},24:function(e,t,a){e.exports={mineHeader:"MainHeader_mineHeader__FN-S1",wrapper:"MainHeader_wrapper__10pp0",authBlock:"MainHeader_authBlock__3MKYN",userName:"MainHeader_userName__olMeq",avatar:"MainHeader_avatar__17XqS"}},29:function(e,t,a){e.exports={loader:"Preloader_loader__34Xgw",circular:"Preloader_circular__2wtNH",rotate:"Preloader_rotate__3JteC",path:"Preloader_path__2VkDZ",dash:"Preloader_dash__2ls1X",color:"Preloader_color__3OYLY"}},31:function(e,t,a){e.exports={friendName:"Friend_friendName__2oLor"}},4:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1Xpin",userBlock:"Dialogs_userBlock__3ZjkJ",ava:"Dialogs_ava__3ZQ4t",active:"Dialogs_active__nkuLR",addMessage:"Dialogs_addMessage__3-lJG",postField:"Dialogs_postField__33IBz",messagesColumn:"Dialogs_messagesColumn__290kT",message:"Dialogs_message__3lbky",messageBlock:"Dialogs_messageBlock__3wHy1",userName:"Dialogs_userName__wYCxL",messageText:"Dialogs_messageText__3nLSN"}},46:function(e,t,a){e.exports=a.p+"static/media/looking_job.0c569380.svg"},47:function(e,t,a){e.exports=a.p+"static/media/not_looking_job.d0c709f2.svg"},48:function(e,t,a){e.exports={addPost:"PostsTape_addPost__31cbv"}},49:function(e,t,a){e.exports=a(78)},54:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),o=a.n(s),i=a(3),c=(a(54),a(18)),l=a.n(c),u=a(31),m=a.n(u),d=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{className:m.a.ava,src:e.avatarLink,alt:"".concat(e.name,"'s avatar")}),r.a.createElement("span",{className:m.a.friendName},e.name))},p=a(5),g=function(e){var t=e.friends.map((function(e){return r.a.createElement("div",{key:e.id,className:l.a.friend},r.a.createElement(d,{name:e.name,avatarLink:e.avatarLink}))})),a=e.menu.map((function(e){return r.a.createElement("li",{key:e.page},r.a.createElement(p.b,{to:e.link,activeClassName:l.a.active},e.page))}));return r.a.createElement("nav",{className:l.a.sidebar},r.a.createElement("ul",null,a,r.a.createElement("li",{className:l.a.bold},r.a.createElement(p.b,{to:"/settings",activeClassName:l.a.active},"Settings"))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{className:l.a.bold},r.a.createElement(p.b,{to:"/friends",activeClassName:l.a.active},"My friends"))),t))},f=a(6),h=Object(f.b)((function(e){return{friends:e.sidebar.friends,menu:e.sidebar.menu}}),(function(e){return{}}))(g),_=a(12),E=a(13),v=a(15),b=a(14),k=a(19),O=a.n(k),P=a(29),N=a.n(P),j=function(e){return r.a.createElement("div",{className:N.a.loader},r.a.createElement("svg",{className:N.a.circular,viewBox:"25 25 50 50"},r.a.createElement("circle",{className:N.a.path,cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})))},w=a(46),U=a.n(w),T=a(47),C=a.n(T),A=a(21),S=a.n(A),x=function(e){return e.profile?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:O.a.profileCover},r.a.createElement("img",{src:"https://img.turne.com.ua/static/countries/c42/small/42_637145319768924795.jpg",alt:"czech"}),r.a.createElement("img",{className:O.a.profilePhoto,src:e.profile.photos.small?e.profile.photos.small:S.a,alt:"user "+e.profile.userId+" photo"})),r.a.createElement("div",{className:O.a.profileStatus},e.profile.aboutMe),r.a.createElement("div",{className:O.a.lookingForAJob},r.a.createElement("span",null,"Is looking for a job:"),r.a.createElement("img",{className:O.a.jobLooking,src:!0===e.profile.lookingForAJob?U.a:C.a,alt:"looking for a job"})),r.a.createElement("div",{className:O.a.lookingForAJobDescription},e.profile.lookingForAJobDescription)):r.a.createElement(j,null)},F=a(48),y=a.n(F),I=a(23),M=a.n(I),L=function(e){return r.a.createElement("div",{className:M.a.postBlock},r.a.createElement("div",{className:M.a.ava},r.a.createElement("img",{src:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png",alt:"user avatar"}),r.a.createElement("span",{className:M.a.likes},"Likes: ",e.likes)),r.a.createElement("div",{className:M.a.post},r.a.createElement("p",{className:M.a.postText},e.post)))},D=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.addPost},r.a.createElement("textarea",{onChange:function(t){var a=t.target.value;e.changePostText(a)},value:e.writingPostText,placeholder:" create your new post"}),r.a.createElement("button",{onClick:function(){e.addPost()}},"Add post")),e.posts.map((function(e){return r.a.createElement(L,{key:e.id,post:e.postText,likes:e.likesCount})})))},H=a(22),R=a(1),z={posts:[{id:1,postText:"Hi there!",likesCount:10},{id:2,postText:"It's my new post.",likesCount:25765}],writingPostText:"",userProfile:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a=e.writingPostText;return Object(R.a)(Object(R.a)({},e),{},{posts:[].concat(Object(H.a)(e.posts),[{id:3,postText:a,likesCount:0}]),writingPostText:""});case"CHANGE-POST":return Object(R.a)(Object(R.a)({},e),{},{writingPostText:t.text});case"GET-USER-PROFILE":return Object(R.a)(Object(R.a)({},e),{},{userProfile:t.userProfile});default:return e}},G=Object(f.b)((function(e){return{posts:e.profilePage.posts,writingPostText:e.profilePage.writingPostText}}),(function(e){return{addPost:function(){e({type:"ADD-POST"})},changePostText:function(t){e(function(e){return{type:"CHANGE-POST",text:e}}(t))}}}))(D),J=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(x,{profile:e.profile})),r.a.createElement("main",null,r.a.createElement(G,null)))},W=a(17),Y=W.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"69ce5c37-4614-409a-848d-cee47ea3fbcd"}}),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Y.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},V=function(e){return Y.get("profile/".concat(e)).then((function(e){return e.data}))},q=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),V(t).then((function(t){return e.props.getUserProfile(t)}))}},{key:"render",value:function(){return r.a.createElement(J,Object.assign({},this.props,{profile:this.props.userProfile}))}}]),a}(r.a.Component),X=Object(i.e)(q),Z=Object(f.b)((function(e){return{userProfile:e.profilePage.userProfile,authorizedUserId:e.auth.userId}}),{getUserProfile:function(e){return{type:"GET-USER-PROFILE",userProfile:e}}})(X),Q={users:[{id:1,name:"Tom"},{id:2,name:"Helen"},{id:3,name:"Sarah"},{id:4,name:"George"}],messages:[{id:1,autor:"Tom",message:"Hi! Are you busy today?"},{id:2,autor:"Me",message:"Hi! I've free time in afternoon. What's the matter?"},{id:3,autor:"Tom",message:"I want to talk with you."},{id:4,autor:"Me",message:"OK, let's meet at 6 o'clock?"}],writingMessageText:""},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a=e.writingMessageText;return Object(R.a)(Object(R.a)({},e),{},{messages:[].concat(Object(H.a)(e.messages),[{id:5,autor:"Me",message:a}]),writingMessageText:""});case"CHANGE-MESSAGE":return Object(R.a)(Object(R.a)({},e),{},{writingMessageText:t.text});default:return e}},ee=a(4),te=a.n(ee),ae=function(e){return r.a.createElement(p.b,{to:"/dialogs/".concat(e.id),activeClassName:te.a.active},r.a.createElement("div",{className:te.a.userBlock},r.a.createElement("img",{className:te.a.ava,src:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png",alt:"ava"}),e.name))},ne=function(e){return r.a.createElement("div",{className:te.a.message},r.a.createElement("img",{className:te.a.ava,src:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png",alt:"ava"}),r.a.createElement("div",{className:te.a.messageBlock},r.a.createElement("h5",{className:te.a.userName},e.autor),r.a.createElement("p",{className:te.a.messageText},e.message)))},re=function(e){return r.a.createElement("div",{className:te.a.dialogs},r.a.createElement("div",{className:te.a.usersColumn},e.users.map((function(e){return r.a.createElement(ae,{key:e.id,id:e.id,name:e.name})}))),r.a.createElement("div",{className:te.a.messagesColumn},r.a.createElement("div",{className:te.a.addMessage},r.a.createElement("textarea",{onChange:function(t){var a=t.target.value;e.changeMessage(a)},className:te.a.postField,value:e.writingMessageText,placeholder:" write your message here"}),r.a.createElement("button",{onClick:function(){e.addMessage()}},"Send message")),e.messages.map((function(e){return r.a.createElement(ne,{key:e.id,autor:e.autor,message:e.message})}))))},se=Object(f.b)((function(e){return{users:e.dialogsPage.users,messages:e.dialogsPage.messages,writingMessageText:e.dialogsPage.writingMessageText}}),(function(e){return{addMessage:function(){e({type:"ADD-MESSAGE"})},changeMessage:function(t){e(function(e){return{type:"CHANGE-MESSAGE",text:e}}(t))}}}))(re),oe=a(11),ie=a.n(oe),ce=function(e){for(var t=[],a=Math.ceil(e.totalUsersCount/e.pageSize),n=1;n<=a;n++)t.push(n);var s=t.map((function(t){return r.a.createElement("span",{key:t,className:t===e.currentPage?ie.a.selected:"",onClick:function(a){return e.getCurrentUsers(t)}},t)})),o=e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:ie.a.userItem},r.a.createElement(p.b,{to:"profile/"+t.id},r.a.createElement("div",{className:ie.a.avatar},r.a.createElement("img",{className:ie.a.userPhoto,alt:"user-avatar",src:null!==t.photos.small?t.photos.small:S.a}))),r.a.createElement("div",{className:ie.a.userInfo},r.a.createElement("div",{className:ie.a.mane},t.name),r.a.createElement("div",{className:ie.a.status},t.status)),r.a.createElement("div",{className:ie.a.friendBlock},t.followed?r.a.createElement("div",{className:ie.a.isFriend},r.a.createElement("span",null,"friend"),r.a.createElement("button",{onClick:function(){e.toggleIsFetching(!0),W.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(t.id),{withCredentials:!0,headers:{"API-KEY":"69ce5c37-4614-409a-848d-cee47ea3fbcd"}}).then((function(a){0===a.data.resultCode&&e.unfollow(t.id),e.toggleIsFetching(!1)}))}},"Unfollow")):r.a.createElement("button",{className:ie.a.isFriend,onClick:function(){e.toggleIsFetching(!0),W.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(t.id),{},{withCredentials:!0,headers:{"API-KEY":"69ce5c37-4614-409a-848d-cee47ea3fbcd"}}).then((function(a){0===a.data.resultCode&&e.follow(t.id),e.toggleIsFetching(!1)}))}},"Follow")))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ie.a.pagination},s),r.a.createElement("div",{className:ie.a.users},o))},le={users:[],totalUsersCount:0,pageSize:5,currentPage:1,isFetching:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD-USERS":return Object(R.a)(Object(R.a)({},e),{},{users:Object(H.a)(t.users)});case"SET-TOTAL-USERS-COUNT":return Object(R.a)(Object(R.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SET-CURRENT-PAGE":return Object(R.a)(Object(R.a)({},e),{},{currentPage:t.currentPage});case"FOLLOW":return Object(R.a)(Object(R.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(R.a)(Object(R.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(R.a)(Object(R.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(R.a)(Object(R.a)({},e),{},{followed:!1}):e}))});case"TOGGLE-IS-FETCHING":return Object(R.a)(Object(R.a)({},e),{},{isFetching:t.isFetching});default:return e}},me=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getCurrentUsers=function(t){e.props.setCurrentPage(t),e.props.toggleIsFetching(!0),K(e.props.pageSize,t).then((function(t){e.props.toggleIsFetching(!1),e.props.loadUsers(t.items)}))},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),K(this.props.pageSize,this.props.currentPage).then((function(t){e.props.toggleIsFetching(!1),e.props.loadUsers(t.items),e.props.setTotalUsersCount(t.totalCount)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(j,null):null,r.a.createElement(ce,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching,getCurrentUsers:this.getCurrentUsers,toggleIsFetching:this.props.toggleIsFetching}))}}]),a}(r.a.Component),de=Object(f.b)((function(e){return{users:e.usersPage.users,totalUsersCount:e.usersPage.totalUsersCount,pageSize:e.usersPage.pageSize,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{loadUsers:function(e){return{type:"LOAD-USERS",users:e}},setTotalUsersCount:function(e){return{type:"SET-TOTAL-USERS-COUNT",totalUsersCount:e}},setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},follow:function(e){return{type:"FOLLOW",userId:e}},unfollow:function(e){return{type:"UNFOLLOW",userId:e}},toggleIsFetching:function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}}})(me),pe=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"News")}}]),a}(r.a.Component),ge=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Settings")}}]),a}(r.a.Component),fe=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Music")}}]),a}(r.a.Component),he=a(24),_e=a.n(he),Ee=function(e){return r.a.createElement("div",{className:_e.a.mineHeader},r.a.createElement("div",{className:_e.a.wrapper},r.a.createElement("div",{className:_e.a.authBlock},r.a.createElement("span",{className:_e.a.userName},e.isAuth?e.login:r.a.createElement(p.b,{to:"/login"},"Login")),r.a.createElement("img",{className:_e.a.avatar,src:e.authUserAvatar?e.authUserAvatar:S.a,alt:"autorized user avatar"}))))},ve={userId:null,login:null,email:null,isAuth:!1,isFetching:!1,authorizedUserAvatar:null},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-AUTH-USER-DATA":return Object(R.a)(Object(R.a)(Object(R.a)({},e),t.data),{},{isAuth:!0});case"SET-AUTH-USER-AVATAR":return Object(R.a)(Object(R.a)({},e),{},{authUserAvatar:t.authUserAvatar});default:return e}},ke=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;W.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0}).then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,r=a.login,s=a.email;e.props.setAuthUserData(n,r,s)}})),W.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(this.props.id),{withCredentials:!0}).then((function(t){var a=t.data.photos.small;e.props.setAuthUserAvatar(a)}))}},{key:"render",value:function(){return r.a.createElement(Ee,this.props)}}]),a}(r.a.Component),Oe=Object(f.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth,authUserAvatar:e.auth.authUserAvatar}}),{setAuthUserData:function(e,t,a){return{type:"SET-AUTH-USER-DATA",data:{userId:e,login:t,email:a}}},setAuthUserAvatar:function(e){return{type:"SET-AUTH-USER-AVATAR",authUserAvatar:e}}})(ke),Pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"http://s808.ru/pictures/czech_switzerland/czech_switzerland_001.jpg",alt:"czech nature"}))};var Ne=function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(Oe,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement(h,null),r.a.createElement("div",{className:"contentBlock"},r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(i.a,{path:"/profile/:userId?",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(i.a,{path:"/users",render:function(){return r.a.createElement(de,null)}}),r.a.createElement(i.a,{exact:!0,path:"/dialogs",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(i.a,{path:"/news",render:function(){return r.a.createElement(pe,null)}}),r.a.createElement(i.a,{path:"/music",render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(i.a,{path:"/settings",render:function(){return r.a.createElement(ge,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(77);var je=a(26),we={friends:[{id:1,name:"James",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"},{id:2,name:"Kirk",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"},{id:3,name:"Lars",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"},{id:4,name:"Robert",avatarLink:"https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png"}],menu:[{link:"/profile",page:"Profile"},{link:"/dialogs",page:"Dialogs"},{link:"/users",page:"Users"},{link:"/news",page:"News"},{link:"/music",page:"Music"}]},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we;return e},Te=Object(je.b)({dialogsPage:$,profilePage:B,sidebar:Ue,usersPage:ue,auth:be}),Ce=Object(je.c)(Te);window.state=Ce.getState();var Ae=Ce,Se=function(e){o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{basename:"/soc-net"},r.a.createElement(f.a,{store:Ae},r.a.createElement(Ne,null)))),document.getElementById("root"))};Se(Ae.getState()),Ae.subscribe((function(){Ae.getState();Se()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.2c4769bb.chunk.js.map