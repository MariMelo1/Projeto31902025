import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useState} from 'react';
import CardProduct from '../components/cardProducts';

export default function Product(){
    
    const [produtos, setProdutos] = useState([
        {id: 1, nome: 'Macarrão', valor: 2.00, imagem: 'https://s2-receitas.glbimg.com/m2u-cGoinyKpSDYF0BvZJxy8zyA=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/R/X/Lj3rwSQpm7BgzSEvJ1Mw/macarrao-simples-como-fazer.jpg'},
        {id: 2, nome:'Banana', valor: 10.00, imagem: 'https://thumbs.dreamstime.com/b/banna-dos-melhores-frutos-189417825.jpg'},
        {id: 3, nome: 'Abacaxi', valor: 5.00, imagem: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/GEUVV5EDH5FUVEQJ6YYTV3JERA.jpeg' },
        {id: 4, nome: 'Limão', valor: 8.00 , imagem: 'https://www.saudeemdia.com.br/wp-content/uploads/2022/09/beneficios-do-limao-1.jpg'},
        {id: 5, nome: 'Kiwi', valor: 75.00 , imagem: 'https://image.tuasaude.com/media/article/jc/dt/emagrecer-com-kiwi_19106.jpg?width=686&height=487'},
        {id: 6, nome: 'Maracujá', valor: 65.00 , imagem: 'https://carcanplantas.cdn.magazord.com.br/img/2024/08/produto/566/maracuja-doce.png?ims=600x600 '},
        {id: 7, nome: 'Maça', valor: 80.00, imagem: 'https://image.tuasaude.com/media/article/ix/up/beneficios-da-maca-para-a-saude_40383.jpg?width=686&height=487 ' },
        {id: 8, nome: 'Chocolate', valor: 95.00 , imagem: 'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/09/06/istock-1313079918-sokmkksb767p.jpg'},
        {id: 9, nome: 'Pera', valor: 25.00, imagem: 'https://www.svicente.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dwf2d3a042/Produtos/21407-0000000002140-pera%20williams%20kg-flv-1.jpg' },
        {id: 10, nome: 'Framboesa', valor: 30.00 , imagem: 'https://formasaudavel.com.br/wp-content/uploads/2024/01/Framboesa_fruta.jpg'},
    ])

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
                id ={item.id}
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