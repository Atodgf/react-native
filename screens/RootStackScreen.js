import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import Register from './Register';
import Login from './Login'
import MainTabScreen from './MainTabScreen'


const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="Register" component={Register}/>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="MainTabScreen" component={MainTabScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;