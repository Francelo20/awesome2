import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Comp1 from './components/comp1';
import Caixas from './components/Caixas';
import estill from './estilos/Estilos';
import Lp from './components/ListaPlana';


const Stack = createNativeStackNavigator();


function TelaHome({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Text>Tela Home</Text>
      <Text>Outro texto</Text>
      <Button
        title='Sai da Home'
        onPress={()=>navigation.navigate('Dois')}
      />
    </View>
  );
}

function TelaDois({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Text>Tela Dois</Text>
      <Text>segunda</Text>
      <Button
        title='Home'
        onPress={()=>navigation.navigate('Home')}
      />
      <Button
        title='tres'
        onPress={()=>navigation.navigate('Tres')}
      />
    </View>
  );
}


function TelaTres({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Text>Tela Dois</Text>
      <Text>segunda</Text>
      <Button
        title='Home'
        onPress={()=>navigation.navigate('Home')}
      />
      <Button
        title='Voltar goback'
        onPress={()=>navigation.goBack()}

       
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Telahome">
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="Dois" component={TelaDois} />
        <Stack.Screen name="Tres" component={TelaTres} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const estilos =StyleSheet.create({
  logo:{
    width: 200,
    resizeMode:'cover'
  },
  imagemFundo:{
    flex:1,
    resizeMode:'cover',
    width:'100%'

  }

})


