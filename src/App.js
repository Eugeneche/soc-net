import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import SidebarContainer from './components/Sidebar/SidebarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import NewsContainer from './components/News/NewsContainer';
import MainHeaderContainer from './components/MainHeader/MainHeaderContainer';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import MusicContainer from './components/Music/MusicContainer';
import SettingsContainer from './components/Settings/SettingsContainer';


function App(props) {
  return (
    <div className='app'>
        <MainHeaderContainer />
      <div className='wrapper'>            
          <SidebarContainer />       
        <div className='contentBlock'>

          <Route exact path='/' render={ () => <Main />} />

          <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
          <Route path="/users" render={ () => <UsersContainer />} />
 
          <Route exact path='/dialogs' render={ () => <DialogsContainer />} />

          <Route path='/news' render={ () => <NewsContainer />} />
          <Route path='/music' render={ () => <MusicContainer />} />
          <Route path='/settings' render={ () => <SettingsContainer />} />
          <Route path='/login' render={ () => <Login /> } />

        </div> 
      </div>
    </div> 
  );
}

export default App;
