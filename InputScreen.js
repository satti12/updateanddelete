import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

import firebase from './firebaseConfig';

const InputScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Input fields are empty');
      return;
    }

    firebase
      .firestore()
      .collection('users')
      .add({
        username: username,
        password: password,
      })
      .then(() => {
        Alert.alert('Data added successfully');
        navigation.navigate('Hello');
      })
      .catch(error => {
        console.log('Error adding user:', error);
      });
  };

  const handleLogin = () => {
    navigation.navigate('Hello');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Firebase Create Retrieve Update and Delete</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.Heading}>
          <Text style={styles.HeadingText}>Signup Page</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter your name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter your password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Signup" onPress={handleSignup} />
        </View>
        <Text style={styles.main}>Already have an Account:</Text>
        <View style={styles.buttonContainer2}>
          <View style={styles.buttonContainer2}>
            <Button style={styles.Button2} title="Login" onPress={handleLogin} />
          </View>
        </View>
        <Text style={styles.main}>Already have an Account:</Text>
        <View style={styles.buttonContainer2}>
          <View style={styles.buttonContainer2}>
            <Button style={styles.Button2} title="Login" onPress={handleLogin} />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Muqadsa satti</Text>
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
  header: {
    backgroundColor: 'lightblue',
    width: '100%',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  main: {
    marginTop: 20,
    textAlign: 'left',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align input fields to the left
    paddingHorizontal: 20,
    width: '100%',
  },
  Heading: {
    paddingBottom: 50,
  },
  HeadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 67,
    textDecorationLine: 'underline',
  },
  inputContainer: {
    width: '100%',
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
    marginTop: 10,
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  Button2: {
    marginLeft: 100,
  },
  footer: {
    backgroundColor: 'lightblue',
    width: '100%',
    padding: 10,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
  },
});

export default InputScreen;
