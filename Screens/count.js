
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function Count(){

    const [contador, setContador] = useState(0);

    function Aumentar(){
        setContador(contador + 1)
    }
    function Diminuir(){
        if (contador > 0){
            setContador(contador - 1)
        }
    }

    return(
        <View style={styles.container} > 
            <Text style={styles.title }>Meu contador</Text>
            <Text style={styles.txt }> {contador} </Text>
            <View style={styles.row}>

                <TouchableOpacity 
                style={styles.button}
                onPress={Aumentar}>
                    +
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress={Diminuir}>
                    -
                </TouchableOpacity>
                
                
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 400,
    },
    title:{
        fontSize: 40,
        color:'#FF007F'
    },
    txt:{
        fontSize: 30,
        color: '#d6b6cb'
    },
    button:{
        backgroundColor: '#FF007F',
        width: '40%',
        textAlign: 'center',
        color: 'white'

    }
})
