/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

const App = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState('');

  const calcula = () => {
    if (peso && altura) {
      let altura100 = altura / 100;
      const imc = peso / (altura100 * altura100);
      setResultado(imc.toFixed(2));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>IMC</Text>

      <TextInput
        onChangeText={value => setAltura(value)}
        placeholder="Digite sua ALTURA: EX 166"
        //keyboardType="numeric"
        style={{width: '90%', backgroundColor: '#fff', marginVertical: 10}}
      />
      <TextInput
        onChangeText={value => setPeso(value)}
        placeholder="Digite seu PESO: EX 70"
        //keyboardType="numeric"
        style={{width: '90%', backgroundColor: '#fff', marginVertical: 10}}
      />

      <TouchableOpacity onPress={calcula}>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            backgroundColor: '#ff5722',
            borderRadius: 16,
            padding: 16,
            marginBottom: 10,
          }}>
          Calcular
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          color: '#ff5722',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        Seu IMC é:
      </Text>
      <Text style={{color: '#ff5722', fontSize: 32, fontWeight: 'bold'}}>
        {resultado}
      </Text>
    </View>
  );
};

export default App;
