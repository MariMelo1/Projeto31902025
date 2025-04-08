import { View, Text, StyleSheet , Image} from "react-native";


export default function Test(){
    return(
        <View style={styles.container}>
            <Text>ACADEMIA DA MARI</Text>
            <View style={styles.viewimg}>
                <Image style={styles.img} source={require("../assets/foto.jpg")}/>
            </View>
           
            <Text>É bom contar com essa galera para tirar dúvidas, treinar pra valer, bater um papinho... Identifique o pessoal pela cor da camiseta!</Text>
            <Image style={styles.img}  source={{uri: "https://www.criciumashopping.com.br/files/files/Academia%20(5).jpg"}} />
            <Image style={styles.img} source={{uri:"https://saude.sesisc.org.br/wp-content/uploads/sites/13/2023/09/Beneficios-de-fazer-academia-Para-sua-saude-e-seu-corpo-1024x683.jpg"}} />
            <Text>Create by Mariane Melo, 2025</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'orange',
        padding: 20,
    },
    img:{
        width: 200,
        height: 200,
    }
})