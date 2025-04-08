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
        <View style={styles.container}>
            <Text>Essa é a minha galeria!</Text>
        </View>
    )
}
export function Artist(){
    return(
        <View style={styles.container}>
            <Text>Esse são os artistas!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerProfile:{
        flex: 1,
        backgroundColor: 'pink'
    },
    containerArtist:{
        flex: 2,
        backgroundColor: 'pink'
    },
    containerGallery:{
        flex: 1,
        backgroundColor: 'pink'
    }
})