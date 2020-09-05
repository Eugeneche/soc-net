import React from 'react';
import styles from './Profile.module.css';

class ProfileStatus extends React.Component {
    state={
        status: this.props.status,
        editMode: false
    }



    activateEditMode = () => {
        this.setState({editMode: true});
    }

    getNewStatus = (e) => {
        this.setState({status: e.currentTarget.value});
        console.log('getNewStatus:' + this.state.status);
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }

    componentDidUpdate(prevProps, prevState) {
            if(prevProps.status !== this.props.status) {
                this.setState({ status: this.props.status });
            }
        }

    render() {
        return<>

            {!this.state.editMode && <div className={styles.profileStatus} onDoubleClick={this.activateEditMode} title="double click to change">{this.props.status || 'Double click to set status'}</div>}
            
            {this.state.editMode && <div className={styles.inputStatus}><input onChange={this.getNewStatus} onBlur={this.deactivateEditMode} value={this.state.status} autoFocus /></div>}
                      
        </>
    }
}

export default ProfileStatus;