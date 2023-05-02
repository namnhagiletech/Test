import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StepOne from '../../screens/Login/StepOne';
import StepTwo from '../../screens/Login/StepTwo';
import {LoginStackParams} from './types';
import {RoutersName} from '../routersName';

const LoginStack = createNativeStackNavigator<LoginStackParams>();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator initialRouteName={RoutersName.StepOne}>
      <LoginStack.Screen
        name={RoutersName.StepOne}
        component={StepOne}
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name={RoutersName.StepTwo}
        component={StepTwo}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
