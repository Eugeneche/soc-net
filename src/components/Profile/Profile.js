import React from 'react';
import Header from './Header/Header';
import PostsTapeContainer from './PostsTape/PostsTapeContainer';

const Profile = (props) => {

   

        return(
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <PostsTapeContainer />  
                </main>             
            </div>
        )
    
}

export default Profile;