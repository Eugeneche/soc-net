import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

const store = {
  _state: {
    dialogsPage: {
      users: [
        {id: 1, name: 'Tom'},
        {id: 2, name: 'Helen'},
        {id: 3, name: 'Sarah'},
        {id: 4, name: 'George'},
      ],
      messages: [
        {id: 1, autor: 'Tom', message: 'Hi! Are you busy today?'},
        {id: 2, autor: 'Me', message: 'Hi! I\'ve free time in afternoon. What\'s the matter?'},
        {id: 3, autor: 'Tom', message: 'I want to talk with you.'},
        {id: 4, autor: 'Me', message: 'OK, let\'s meet at 6 o\'clock?'},
      ],
      writingMessageText: ''
    },
  
    profilePage: {
      posts: [
        {id: 1, postText: 'Hi there!', likesCount: 10},
        {id: 2, postText: 'It\'s my new post.', likesCount: 25765},
      ],
      writingPostText: ''
    },

    sidebar: {
      friends: [
        {id: 1, name: 'James', avatarLink: 'https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png'},
        {id: 2, name: 'Kirk', avatarLink: 'https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png'},
        {id: 3, name: 'Lars', avatarLink: 'https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png'},
        {id: 4, name: 'Robert', avatarLink: 'https://cdn2.iconfinder.com/data/icons/proxima-2/256/user.png'},
      ]
    },
      menu: [
        {link: '/profile', page: 'Profile'},
        {link: '/dialogs', page: 'Dialogs'},
        {link: '/news', page: 'News'},
        {link: '/music', page: 'Music'},
      ]
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('state was changed');
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  },
  
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;