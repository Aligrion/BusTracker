import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CadastroClienteScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [cpf, setCPF] = useState('');

  const handleSalvar = () => {
    // Lógica para salvar o cliente (você precisa implementar isso)
    const novoCliente = {
      id: Math.random().toString(), // Gere um ID único (pode ser mais complexo em uma aplicação real)
      nome,
      sobrenome,
      frequencia: parseInt(frequencia), // Converta para número
      cpf: cpf.replace(/\D/g, ''), // Remova todos os caracteres não numéricos do CPF
    };

    // Aqui você pode adicionar o novoCliente à sua fonte de dados (array, banco de dados, etc.)

    // Depois de salvar, volte para a tela de listagem
    navigation.navigate('Clientes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Cliente</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={sobrenome}
          onChangeText={text => setSobrenome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Frequência por semana"
          keyboardType="numeric"
          value={frequencia}
          onChangeText={text => setFrequencia(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={text => setCPF(text)}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06B3B9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#DBE9E9',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#39CEC9', // Cor do botão de salvar
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
