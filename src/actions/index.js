import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, PEND_USER } from './types';

//const ROOT_URL = "https://nameless-hollows-27940.herokuapp.com";
const ROOT_URL = "http://localhost:5000"

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      `${ROOT_URL}/signup`,
      formProps
    );

    dispatch({ type: PEND_USER, payload: 'Please confirm your email' });
    localStorage.setItem('confirm', response.data.confirm);

    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      `${ROOT_URL}/signin`,
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials or Unconfirmed email' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};