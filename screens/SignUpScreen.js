import React from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
import {Auth} from '../Setup';
import {SignUpUser} from '../ApiService';

const SignUpScreen = ({navigation}) => {
  const [inputData, setInputData] = React.useState({
    emailAddress: '',
    password: '',
  });

  const signUp = () => {
    SignUpUser(inputData.emailAddress, inputData.password)
      .then(data => {
        alert(data);
      })
      .catch(error => {
        alert(error);
      });
  };
  
  return (
    <View>
    
      <TextInput
        style={styles.textInput}
        keyboardType="email-address"
        placeholder="Email"
        value={inputData.emailAddress}
        onChangeText={text => setInputData({...inputData, emailAddress: text})}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry
        value={inputData.password}
        onChangeText={text => setInputData({...inputData, password: text})}
      />
      <View style={styles.container}>
        <Button title={'Sign Up'} onPress={signUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  textInput: {
    height: 45,
    borderColor: 'blue',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default SignUpScreen;
