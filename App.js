import 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './Screens/home';
import Login from './Screens/Login';
import Feed from './Screens/feed';
import Count from './Screens/count';

function BottomTab() {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen  name='Hometab' component={Home}/>
      <Tab.Screen  name='Feedtab' component={Feed}/>
      <Tab.Screen   name='Countab' component={Count}/>
    </Tab.Navigator>
  )
}
export default function App() {
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaLogin' component={Login} />
        <Stack.Screen options={{headerShown:false}} name='Home' component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>    
  )
}







    
     


