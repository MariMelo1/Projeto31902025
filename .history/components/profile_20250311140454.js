import {Text, View, StyleSheet, Image} from 'react-native';
export function Profile(){
    return(
        <View style={styles.profile}>
            <Text>Oi pexoau, esse é o meu perfil!!</Text>
            <Text>bla bla bla bla</Text>

            {/* <Image style={styles.img} source={require('../assets/giffofo.gif')} /> */}
        </View>
    )
}