import {Text, View, StyleSheet, Image, Button} from 'react-native';

export default function Profile(){
    return(
        <View style={styles.containerProfile} >
            
            <Text>bla</Text>
            <Text>3190</Text>
            <Button>clique</Button>
            {/* Imagem que baixamos para o projeto */}
            <Image style={{width:200, height:200}} source={require('../assets/foto.jpg')}/>

            {/* imagem pega da internet via url */}
            <Image  style={{width:200, height:200}} source={{uri:'https://s2.glbimg.com/uYsIYy-rQgaW-2hI52R0mZ1cQMc=/620x455/e.glbimg.com/og/ed/f/original/2022/10/03/girassol-e-flor-entenda-casa-e-jardim.jpg'}} />


           
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
        alignItems: 'center',
        
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