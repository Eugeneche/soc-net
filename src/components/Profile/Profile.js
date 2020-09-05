import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import PostsTapeContainer from './PostsTape/PostsTapeContainer';

const Profile = (props) => {
        return <>
                <header>
                    <ProfileHeader profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
                </header>
                <main>                   
                    <PostsTapeContainer />  
                </main>             
            </>  
}

export default Profile;