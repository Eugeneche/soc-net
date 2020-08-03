import React from 'react';
import styles from './ProfileHeader.module.css';
import Preloader from '../../commom/Preloader/Preloader';
import looking from '../../../img/looking_job.svg';
import notLooking from '../../../img/not_looking_job.svg';
import userAvatarPlaceholder from '../../../img/user_avatar_placeholder.png';
import profileSheet from '../../../img/profile.jpg';
import { usersAPI } from '../../../API/API';


const ProfileHeader = (props) => {

    usersAPI.getAuthMeData();
    
    if(!props.profile) {
        return <Preloader />
    }
    return <>
        <div className={styles.profileCover}>
            <img src={profileSheet} alt="czech" />
            <img className={styles.profilePhoto} src={!props.profile.photos.small ? userAvatarPlaceholder : props.profile.photos.small} alt={'user ' + props.profile.userId + ' photo'} />
        </div>

        <div className={styles.profileStatus}>{props.profile.aboutMe}</div>
        <div className={styles.lookingForAJob}>
            <span>Is looking for a job:</span><img className={styles.jobLooking} src={props.profile.lookingForAJob === true ? looking : notLooking} alt='looking for a job' />
        </div>
        <div className={styles.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</div>
    </>
}

export default ProfileHeader;

