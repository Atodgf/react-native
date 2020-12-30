import React, { useEffect}from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen'
import Login from './screens/Login'
import Register from './screens/Register'


import { AuthContext } from './components/context'

import AsyncStorage from '@react-native-community/async-storage'
import DrawerContent from './screens/DrawerContent'

import RootStackScreen from './screens/RootStackScreen'
import { View } from 'react-native-animatable';
import { ActivityIndicator} from 'react-native';


const Drawer = createDrawerNavigator();


const App = () => {

  const inicialLoginState = {
    isLoading: true,
    login:null,
    password: null,
    userToken:null
  }

  loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          login: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          login:null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          login: action.id,
          userToken: action.token,
          isLoading: false,
        };   
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, inicialLoginState)
  const authContext = React.useMemo(() => ({
    signIn: async(login, password) => {
      let userToken
      userToken = null
      if (login == 'user' && password == 'root') {
        try {
          userToken='asdas'
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e) {
          console.log(e)
        }
      }
      dispatch({type: 'LOGIN', id: login, token: userToken})
    },
    signOut: async() => {
      dispatch({type: 'LOGOUT'})
      try {
        await AsyncStorage.removeItem('userToken')
      } catch(e) {
        console.log(e)
      }
    },

    signUp: async(login, password) => {
      // console.log(login)
      console.log(loginState)
      // const storedLogin =  AsyncStorage.getItem('login')
      //                 .then(i => console.log(i))
      // const storedPassword =  AsyncStorage.getItem('login')
      //                 .then(i => console.log(i))
          try {
            login=login
            password=password
            await AsyncStorage.setItem('login', login)
            await AsyncStorage.setItem('password', password)
            
          } catch(e) {
            console.log(e)
        }
      dispatch({type: 'REGISTER', id: login})
    }
  }), [])


  useEffect(() => {
    setTimeout (async() => {
      let userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch(e) {
        console.log(e)
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center', color: '#fff'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
        <NavigationContainer>
        {loginState.userToken !== null? (
          <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Login" component={Login}/>
            <Drawer.Screen name="Register" component={Register}/>
          </Drawer.Navigator>
        ) :
          <RootStackScreen/>
         }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;