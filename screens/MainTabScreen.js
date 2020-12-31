import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
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
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bulb-outline" color={color} size={size} />
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

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009387'
          },
          headerTintColor: '#fff'
      }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      headerLeft: () => (
          <Icon.Button name="apps-outline" size={25}
          backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
  }}/>
</DetailsStack.Navigator>
)