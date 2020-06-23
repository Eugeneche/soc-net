import React from 'react';
import './App.css';

import MainHeader from './components/MainHeader/MainHeader';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

import {Route} from 'react-router-dom';
import Main from './components/Main/Main';


function App(props) {
debugger;
  return (
    <div className="app">
        <MainHeader />
      <div className="wrapper">            
          <SidebarContainer />       
        <div className="contentBlock">

          <Route exact path='/' component={Main} />

          <Route path='/profile' render={ () => <Profile />} />

          <Route path='/dialogs' render={ () => <DialogsContainer />} />

          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />

        </div> 
      </div>
    </div> 
  );
}

export default App;
