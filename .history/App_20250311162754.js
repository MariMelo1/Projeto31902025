import  Profile  from './components/profile';
import {Gallery, Artist} from './components/profile';


import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <Profile/>
      <Artist/>
      <Gallery/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})