import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import SidebarContainer from './components/Sidebar/SidebarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import MainHeaderContainer from './components/MainHeader/MainHeaderContainer';




function App(props) {
  return (
    <div className='app'>
        <MainHeaderContainer />
      <div className='wrapper'>            
          <SidebarContainer />       
        <div className='contentBlock'>

          <Route exact path='/' render={ () => <Redirect to='/profile' />} />

          <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
          <Route exact path="/users" render={ () => <UsersContainer />} />
 
          <Route exact path='/dialogs' render={ () => <DialogsContainer />} />

          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />

        </div> 
      </div>
    </div> 
  );
}

export default App;
