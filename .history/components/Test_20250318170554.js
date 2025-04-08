import { View, Text, StyleSheet , Image, Button} from "react-native";


export default function Test(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>ACADEMIA DA MARI</Text>
            <View style={styles.viewimg}>
                <Image style={styles.img} source={require("../assets/foto.jpg")}/>
            </View>
           
            <Text style={styles.txt}>É bom contar com essa galera </Text>

            <View style={styles.row}> 
                <Image style={styles.img} source={{uri:"https://saude.sesisc.org.br/wp-content/uploads/sites/13/2023/09/Beneficios-de-fazer-academia-Para-sua-saude-e-seu-corpo-1024x683.jpg"}} />  
                <Image style={styles.img}  source={{uri: "https://www.criciumashopping.com.br/files/files/Academia%20(5).jpg"}} />
            </View>

            <Text style={styles.txtcred} >Create by Mariane Melo, 2025</Text>
            <Button
                title="Enviar"
                // color={'blue'}
            />
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'orange',
        padding: 20,
        justifyContent: 'space-evenly'
    
    },
    img:{
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    viewimg:{
        alignItems: 'flex-end',
    },
    txt:{
        fontSize: 20,
        alignSelf: 'flex-end'
    }, 
    row:{
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
    },
    txtcred:{
        alignSelf: 'center'
    }
})