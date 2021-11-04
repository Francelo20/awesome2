import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Estiloss from '../estilos/Estilos';

export default function (props){
    const pc= props.preço;
    const cor= props.cor

    return(
        <Text style={Estiloss.textoCursos}> Boa! {props.curso} - R$ {pc}</Text>
    )
}

