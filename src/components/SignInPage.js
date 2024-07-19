import React from 'react';
import Title from './Title';
import SignInButton from './SignInButton';
import RememberMe from './RememberMe';
import NeedHelp from './NeedHelp';
import Logo from './Logo';
import InputField from './InputField';
import ForgotPassword from './ForgotPassword';
import CreateAccount from './CreateAccount';
import './SignInPage.css';

const SignInPage = () => {
    return (
      <div className="container">
        <div className="left-image"></div>
        <div className="right-form">
          <div className="form-container">
            <Logo />
            <Title />
            <form className="form">
              <InputField  id="email-address" type="email" placeholder="Email Address" />
              <InputField id="password" type="password" placeholder="Password" />
              <div className="form-options">
                <RememberMe />
                <ForgotPassword />
              </div>
              <SignInButton />
            </form>
            <CreateAccount />
            <NeedHelp/>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignInPage;
