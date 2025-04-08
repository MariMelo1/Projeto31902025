import {Text, View, StyleSheet, Image} from 'react-native';

export default function Profile(){
    return(
        <View style={styles.container} >
            <Text>Oi pexoau, esse é o meu perfil!!</Text>
            <Text>bla bla bla bla</Text>
            {/* <Image style={styles.img} source={require('../assets/giffofo.gif')} /> */}
        </View>
    )
}
export function Gallery(){
    return(
        <View>
            <Text>Essa é a minha galeria!</Text>
        </View>
    )
}
export function Artist(){
    return(
        <View>
            <Text>Esse são os artistas!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue'
    }
})