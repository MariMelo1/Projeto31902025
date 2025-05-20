import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useState, useEffect} from 'react';
import CardProduct from '../components/cardProducts';
import {db} from '../controller';
import { collection, getDocs } from 'firebase/firestore';

export default function Product(){
    
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const querySnapshot = await getDocs(collection(db, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({id:doc.id, ...doc.data() });
                });
                setProdutos(lista);
            } catch(error){
                console.log('erro ao buscar o produto', error);
            }
        }
        carregarProdutos();
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Produtos</Text>
            {/* array com map
            {produtos.map((item) => (
                <Text>Nome: {item.nome} - R$ {item.valor.toFixed(2)}</Text>
                
            ))} */}
            <FlatList
             data={produtos}
             renderItem={({item}) => (
                <CardProduct
                nome = {item.nome}
                valor = {item.valor}
                imagem = {item.imagem}
                />
             )}
            keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
    txt:{
        fontSize: 25,
        color: '#FF007F'
    },
})