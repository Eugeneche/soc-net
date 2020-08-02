import React from 'react';
import styles from './ProfileHeader.module.css';
import Preloader from '../../commom/Preloader/Preloader';
import looking from '../../../img/looking_job.svg';
import notLooking from '../../../img/not_looking_job.svg';
import userAvatar from '../../../img/user_avatar.png';


const ProfileHeader = (props) => {

     if(!props.profile) {
        return <Preloader />
    } 
    return <>
        <div className={styles.profileCover}>
            <img src="https://img.turne.com.ua/static/countries/c42/small/42_637145319768924795.jpg" alt="czech" />
            <img className={styles.profilePhoto} src={!props.profile.photos.small ? userAvatar : props.profile.photos.small} alt={'user ' + props.profile.userId + ' photo'} />
        </div>

        <div className={styles.profileStatus}>{props.profile.aboutMe}</div>
        <div className={styles.lookingForAJob}>
            <span>Is looking for a job:</span><img className={styles.jobLooking} src={props.profile.lookingForAJob === true ? looking : notLooking} alt='looking for a job' />
        </div>
        <div className={styles.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</div>
    </>
}

export default ProfileHeader;

