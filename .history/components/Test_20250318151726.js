import { View, Text, StyleSheet } from "react-native";


export default function Test(){
    return(
        <View  style={styles.container}>
            <Text>ACADEMIA DA MARI</Text>
            

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'orange'
    }
})