import {Text, View, StyleSheet, Image} from 'react-native';

export default function Profile(){
    return(
        <View>
            <Gallery/>
            <Artist/>
            <Text> tenho os dois componentes</Text>
        </View>
    )
}
function Gallery(){
    return(
        <View>
            <Text>Essa é a minha galeria!</Text>
        </View>
    )
}
function Artist(){
    return(
        <View>
            <Text>Esse são os artistas!</Text>
        </View>
    )
}