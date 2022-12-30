import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form, { TextArea } from '../common/Form';

import { loginUser } from '../../redux/actions';
import { FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
// TODO: Find out why when centralizing this, it breaks 

const Login = props => {
  const dispatch = useDispatch();
  // const [loginInfo, setLoginInfo] = useState({});

  const { control, handleSubmit } = useForm({});

  const onSubmit = data => console.log(data);

  return (
    <Form 
      title="Login"
      button="Log In"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
      // onClick={() => dispatch(loginUser(loginInfo))}
      onSubmit={() => handleSubmit(onSubmit)}
    >
      <FormGroup>
        <TextArea
          control={control} 
          label="Username (Email)"
          keyLabel="username"
          placeholder="johndoe@gmail.com"
          // onChange={e => setLoginInfo({ ...loginInfo, username: e.target.value })}
          fullWidth 
        />
        <TextArea
          control={control}
          type="password"
          label="Password"
          keyLabel="password"
          placeholder="Enter Password Here" 
          // onChange={e => setLoginInfo({ ...loginInfo, password: e.target.value })}
          fullWidth 
        />
      </FormGroup>
    </Form>
  );
};

export default Login;