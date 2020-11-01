import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { sendAuthUserData/* , setAuthMeData */ } from '../../redux/authReducer';

const LoginForm = props => {
  const { handleSubmit } = props;
  return <form  onSubmit={handleSubmit}>
    <div>
      <label htmlFor="inputEmail">Email:</label>
      <Field name="inputEmail" component="input" type="email" placeholder="your email" />
    </div>
    <div>
      <label htmlFor="inputPassword">Password:</label>
      <Field name="inputPassword" component="input" type="password" placeholder="password" />
    </div>
    <div>
      <label htmlFor="rememberMe">Remember me</label>
      <Field name="rememberMe" component="input" type="checkbox" />
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {

  let onSubmit = loginFormData => {
    sendAuthUserData(loginFormData);
    //setAuthMeData();
  }   
  return <div className={styles.loginPage}>
      <div className={styles.modalWindow}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>          
    </div>
}

export default Login;