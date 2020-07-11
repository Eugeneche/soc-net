import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import MainHeader from './components/MainHeader/MainHeader';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';




function App(props) {
  return (
    <div className='app'>
        <MainHeader />
      <div className='wrapper'>            
          <SidebarContainer />       
        <div className='contentBlock'>

          <Route exact path='/soc-net' render={ () => <Redirect to='/profile' />} />

          <Route exact path='/profile' render={ () => <Profile />} />
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
