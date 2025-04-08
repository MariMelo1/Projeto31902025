import { View, Text, StyleSheet , Image} from "react-native";


export default function Test(){
    return(
        <View  style={styles.container}>
            <Text>ACADEMIA DA MARI</Text>
            <Image style={styles.img} source={require("../assets/foto.jpg")}/>
            <Text>É bom contar com essa galera para tirar dúvidas, treinar pra valer, bater um papinho... Identifique o pessoal pela cor da camiseta!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'orange'
    },
    img:{
        width: 200,
        height: 300,
    }
})