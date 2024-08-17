import {StyleSheet, TextInput, View, Button, Text} from 'react-native';
import React, {useState} from 'react';

export default function HomePage({navigation}) {
  const [name, setName] = useState('');
  const [callId, setCallId] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MedEase</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter the call ID"
        placeholderTextColor="#888"
        onChangeText={setCallId}
        value={callId}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Start Call"
          color="#28a745"
          onPress={() => {
            navigation.navigate('Call', {name: name, id: callId});
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#2e2e2e',
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
