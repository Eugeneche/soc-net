const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
      case ADD_MESSAGE:
      let newMessage = {
        id: 5, 
        autor: 'Me',
        message: state.writingMessageText
      };
  
      state.messages.push(newMessage);
      state.writingMessageText = '';
      return state;

      case CHANGE_MESSAGE:
      state.writingMessageText = action.text;
      return state; 
      
      default: 
      return state;
  }
}

export const addMessageActionCreator = () => {
    return {
      type: ADD_MESSAGE
    }
  }
  
export const changeMessageActionCreator = (text) => {
    return {
        type: CHANGE_MESSAGE,
        text: text
      }
    }

export default dialogsReducer;