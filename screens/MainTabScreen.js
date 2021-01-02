import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './HomeScreen'
import WeatherScreen from './WeatherScreen'


const HomeStack = createStackNavigator();
const WeatherStack = createStackNavigator();
const Tab = createBottomTabNavigator()

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        activeBackgroundColor: '#009387'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherStackScreen}
        options={{
          tabBarLabel: 'Weather',
          tabBarIcon: ({ color, size }) => (
            <Icon name="rainy-outline" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
)

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#009387'
            },
            headerTintColor: '#fff'
        }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="apps-outline" size={25}
          backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
    }}/>
  </HomeStack.Navigator>
)

const WeatherStackScreen = ({navigation}) => (
  <WeatherStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009387'
          },
          headerTintColor: '#fff'
      }}>
    <WeatherStack.Screen name="Weather" component={WeatherScreen} options={{
      headerLeft: () => (
          <Icon.Button name="apps-outline" size={25}
          backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
  }}/>
</WeatherStack.Navigator>
)