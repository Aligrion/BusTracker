import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação 
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>BusTracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Entrar" onPress={handleLogin} color="#06B3B9" />
    
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        
        <Text style={styles.createAccountText}>Não tem usuário? Clique aqui para criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#39CEC9',
    marginBottom: 20,
    textAlign: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#DBE9E9',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  createAccountText: {
    marginTop: 20,
    color: '#06B3B9',
    textDecorationLine: 'underline',
  },
});