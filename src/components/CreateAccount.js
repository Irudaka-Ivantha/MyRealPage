import React from 'react';
import './SignInPage.css';

const linkClass = "font-medium text-primary hover:text-primary-foreground";

const CreateAccount = () => (
  <p className="NoAccount"> Don't you have an account? <a href="#" className={linkClass}> <b>Create an account</b> </a></p>
);

export default CreateAccount;