import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form, { TextArea } from '../common/Form';

import { loginUser } from '../../redux/actions';
import { FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
// TODO: Find out why when centralizing this, it breaks 

const LoginModal = props => {
  const dispatch = useDispatch();
  // const [loginInfo, setLoginInfo] = useState({});

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: null,
      inputPassword: null
    }
  });

  // const onSubmit = data => console.log(data);

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const loginResult = await fetch("/api/users/login/", {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(data)
      })
      const loginJSON = await loginResult.json();
      dispatch(loginUser(loginJSON));
      console.log("calling logged in user: ", loginJSON)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form 
      title="Login"
      button="Log In"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
      // onClick={() => dispatch(loginUser(loginInfo))}
      onSubmit={handleSubmit(onSubmit)}
      maxWidth="sm"
    >
      <FormGroup>
        <TextArea
          control={control} 
          label="Username (Email)"
          keyLabel="email"
          placeholder="johndoe@gmail.com"
          // onChange={e => setLoginInfo({ ...loginInfo, username: e.target.value })}
          fullWidth 
        />
        <TextArea
          control={control}
          type="password"
          label="Password"
          keyLabel="inputPassword"
          placeholder="Enter Password Here" 
          // onChange={e => setLoginInfo({ ...loginInfo, password: e.target.value })}
          fullWidth 
        />
      </FormGroup>
    </Form>
  );
};

export default LoginModal;