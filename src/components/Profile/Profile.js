import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import PostsTapeContainer from './PostsTape/PostsTapeContainer';

const Profile = (props) => {
    debugger;
        return <>
                <header>
                    <ProfileHeader profile={props.profile} />
                </header>
                <main>
                    <PostsTapeContainer />  
                </main>             
            </>  
}

export default Profile;