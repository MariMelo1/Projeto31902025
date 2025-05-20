
import { View, TextInput, Button,Text, StyleSheet,TouchableOpacity} from "react-native"
import { useState } from "react";
import {auth} from '../controller';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const VerificaUser = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                    navigation.navigate('Home')
            })
            .catch((error) => {
                    console.log('erro ao logar: ', error.message);
            });              
    }

    return(
        <View style={styles.container} >
            <Text>LOGIN</Text>
            <TextInput
            style={styles.input}
            placeholder="Nome"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha} />

            <Button
            color={'#FF007F'}
            title="Login" 
            onPress={VerificaUser}
            />
             <TouchableOpacity 
             onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.txtcadastro}>Cadastre-se</Text>
            </TouchableOpacity>

            {/* <Text>Nome: {nome}</Text>
            <Text>Senha: {senha}</Text> */}
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
    },
    txtcadastro: {
        color: '#FF007F', 
        fontSize: 20 
    }
})