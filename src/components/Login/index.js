import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form, { TextArea } from '../common/Form';

import { loginUser } from '../../redux/actions';
// TODO: Find out why when centralizing this, it breaks 

const Login = props => {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({});

  return (
    <Form 
      title="Login"
      button="Log In"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
      onClick={() => dispatch(loginUser(loginInfo))}
    >
      <TextArea 
        placeholder="Username (Email)"
        onChange={e => setLoginInfo({ ...loginInfo, username: e.target.value })}
        fullWidth 
      />
      <TextArea 
        placeholder="Password" 
        onChange={e => setLoginInfo({ ...loginInfo, password: e.target.value })}
        fullWidth 
      />
    </Form>
  );
};

export default Login;