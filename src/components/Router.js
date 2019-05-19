import React from 'react';
import { CreateSwitchNavigator, createAppContainer } from 'react-navigation';
import login from './login';
import SignupForm from './SignupForm';

const loginscreen = CreateSwitchNavigator({
  login: {
    screen: login
    },

    SignupForm: {

  screen: SignupForm
    }
});

 export const AppContainer = createAppContainer(loginscreen);

