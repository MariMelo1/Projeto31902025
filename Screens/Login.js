
import { View, TextInput, Button,Text, StyleSheet,} from "react-native"
import { useState } from "react"

export default function Login({navigation}){
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    return(
        <View style={styles.container} >
            <Text>LOGIN</Text>
            <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            />
            <Button
            color={'#FF007F'}
            title="Login"
            onPress={() => navigation.navigate('Home')}
            />
            <Text>Nome: {nome}</Text>
            <Text>Senha: {senha}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'space-around',
     
    
    },
    input:{
        borderWidth: 1,
        borderColor: '#FF007F'
    }
})