import { View, Text, StyleSheet , Image} from "react-native";


export default function Test(){
    return(
        <View  style={styles.container}>
            <Text>ACADEMIA DA MARI</Text>
            <Image source={require("../assets/foto.jpg")}/>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'orange'
    }
})