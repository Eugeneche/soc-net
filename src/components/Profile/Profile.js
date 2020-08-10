import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import PostsTapeContainer from './PostsTape/PostsTapeContainer';
import ProfileStatus from './ProfileStatus';

const Profile = (props) => {
        return <>
                <header>
                    <ProfileHeader profile={props.profile} />
                </header>
                <main>
                    <ProfileStatus />
                    <PostsTapeContainer />  
                </main>             
            </>  
}

export default Profile;