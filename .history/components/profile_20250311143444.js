import {Text, View, StyleSheet, Image} from 'react-native';

export default function Profile(){
    return(
        <View>
            <Gallery/>
            <Artist/>
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