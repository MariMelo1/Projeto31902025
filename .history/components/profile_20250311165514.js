import {Text, View, StyleSheet, Image} from 'react-native';

export default function Profile(){
    return(
        <View style={styles.containerProfile} >
            <Text>Oi </Text>
            <Text>bla</Text>
            <Text>3190</Text>
            {/* <Image style={styles.img} source={require('../assets/giffofo.gif')} /> */}
        </View>
    )
}
export function Gallery(){
    return(
        <View style={styles.containerGallery}>
            <Text>Essa é a minha galeria!</Text>
        </View>
    )
}
export function Artist(){
    return(
        <View style={styles.containerArtist}>
            <Text>Esse são os artistas!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerProfile:{
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    containerArtist:{
        flex: 2,
        backgroundColor: 'orange'
    },
    containerGallery:{
        flex: 3,
        backgroundColor: 'orange'
    }
})