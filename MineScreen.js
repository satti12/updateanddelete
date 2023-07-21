import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import firebase from './firebaseConfig';

const MineScreen = ({ route, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await firebase
          .firestore()
          .collection('users')
          .where('username', '==', route.params.username) // Retrieve data for the specific username passed from HelloScreen
          .where('password', '==', route.params.password) // Retrieve data for the specific password passed from HelloScreen
          .get();

        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setUsername(data.username);
          setPassword(data.password);
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      const querySnapshot = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', route.params.username) // Retrieve data for the specific username passed from HelloScreen
        .where('password', '==', route.params.password) // Retrieve data for the specific password passed from HelloScreen
        .get();

      if (!querySnapshot.empty) {
        const docId = querySnapshot.docs[0].id;
        await firebase.firestore().collection('users').doc(docId).delete();
        setUsername('');
        setPassword('');
        Alert.alert('User deleted successfully');
        navigation.goBack(); // Navigate back to the previous screen
      }
    } catch (error) {
      console.log('Error deleting user:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Username: {username}</Text>
      <Text style={styles.text}>Password: {password}</Text>
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MineScreen;
