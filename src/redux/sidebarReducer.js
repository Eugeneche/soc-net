let initialState = {
    friends: [
        {id: 1, name: 'James', avatarLink: 'https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png'},
        {id: 2, name: 'Kirk', avatarLink: 'https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png'},
        {id: 3, name: 'Lars', avatarLink: 'https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png'},
        {id: 4, name: 'Robert', avatarLink: 'https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png'},
      ],
      menu: [
        {link: '/profile', page: 'Profile'},
        {link: '/dialogs', page: 'Dialogs'},
        {link: '/news', page: 'News'},
        {link: '/music', page: 'Music'},
      ]
}

const sidebarReducer = (state = initialState, action) => {

    return state;
}


export default sidebarReducer;