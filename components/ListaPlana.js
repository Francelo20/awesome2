import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const produtos = [
    {
        id:'001',
        desc:['Mouse','25.00']

    },
    {
        id:'002',
        desc:['teclado','95.00']

    },
    {
        id:'003',
        desc:['Peruca','35.00']

    },
    {
        id:'004',
        desc:['Barba','15.00']

    },
    {
        id:'005',
        desc:['Corte','30.00']

    }
]
export default function(){
    return(
        <View>
            
            <FlatList
                data={produtos}
                keyExtrator={item=>item.id}
                renderItem={({item})=><View style={estilos.prod}><Text style={estilos.item}>Descrição:{item.desc[0]} valor:{item.desc[1]}</Text></View>}

            />

        </View>
    );
}
 const estilos = StyleSheet.create({
     item:{
         backgroundColor:'red',
         padding:15,
         marginVertical:8,
         marginHorizontal:16
     },
     prod:{
         fontSize:30,
         color:'#fff'
     }
 })