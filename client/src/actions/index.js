import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, REPOSITORY, REPOSITORY_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signup',
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  }
  catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signin',
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  }
  catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};

export const getRepos = (repos, callback) => async dispatch => {
   try {
      const response = await axios.get(
        'http://localhost:3090/github/' + repos
      );
  console.log(response.data.html);
      dispatch({ type: REPOSITORY, payload: response.data.html });
      callback(response.data.html);
    }
    catch (error) {
      dispatch({ type: REPOSITORY_ERROR, payload: error });
    }

};
