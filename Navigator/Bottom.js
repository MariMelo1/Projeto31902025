import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from './components/Login';
import Home from './Screens/home';
import Feed from './Screens/feed';

export default function Bottom() {

  const BottomTab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <BottomTab.Navigator 
      screenOptions={{
        tabBarActiveTintColor:'#6e424b',
        tabBarActiveBackgroundColor:'#d6b6cb',
        headerStyle:{backgroundColor: '#d6b6cb'},
        headerTintColor: '#841584',
      }}>
        <BottomTab.Screen name='Login' component={Login}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="login" size={30} color="#FF007F" />
          ),
        }} />

        <BottomTab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={30} color="#FF007F" />
          ),
        }} />

        <BottomTab.Screen name='Feed' component={Feed}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="feed" size={30} color="#FF007F" />
          )
        }} />

      </BottomTab.Navigator>    
    </NavigationContainer>   
 
  )
}

