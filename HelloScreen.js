import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firebase from './firebaseConfig';

const HelloScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Input fields are empty');
      return;
    }

    firebase
      .firestore()
      .collection('users')
      .where('username', '==', username)
      .where('password', '==', password)
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          Alert.alert('Login successful');
          navigation.navigate('Mine', {
            username: username,
            password: password,
          });
        } else {
          Alert.alert('Login failed');
        }
      })
      .catch(error => {
        console.log('Error logging in:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.Heading}>
        <Text style={styles.HeadingText}>Login Page</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    paddingBottom: 50,
  },
  HeadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 0,
    textDecorationLine: 'underline',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
});

export default HelloScreen;
