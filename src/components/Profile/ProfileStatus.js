import React from 'react';
import styles from './Profile.module.css';

class ProfileStatus extends React.Component {
    state={
        profileStatus: 'My status - double click to change (in the pipeline)',
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
    }

    render() {
        return<>

            {!this.state.editMode && <div onDoubleClick={this.activateEditMode} className={styles.profileStatus} title="double clicl to change">{this.state.profileStatus}</div>}
            
            {this.state.editMode && <div onMouseLeave={this.deactivateEditMode} className={styles.inputStatus}><input defaultValue={this.state.profileStatus} autoFocus /></div>}
                      
        </>
    }
}

export default ProfileStatus;