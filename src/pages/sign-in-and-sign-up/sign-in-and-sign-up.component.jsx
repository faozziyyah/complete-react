import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import styles from './Signinsignup.module.css'

const SignInAndSignUpPage = () => (
  <div className={ styles.signinandsignup }>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
