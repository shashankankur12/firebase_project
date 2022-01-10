import React from 'react';
import {TextInput} from 'react-native';
import {Text, View, Button, StyleSheet} from 'react-native';
import {Auth} from '../Setup';
import {SignInUser, SignOutUser} from '../ApiService';

const AuthScreen = ({navigation}) => {
  const [state, setState] = React.useState({
    emailAddress: '',
    password: '',
  });
  const [user, setUser] = React.useState();

  const signIn = () => {
    SignInUser(state.emailAddress, state.password)
      .then(data => {
        alert(data);
        setState({});
      })
      .catch(error => {
        alert(error);
      });
  };
  const signOut = () => {
    SignOutUser()
      .then(data => {
        alert(data);
        setState({});
      })
      .catch(error => {
        alert(error);
      });
  };

  const onAuthStateChanged = user => {
    setUser(user);
  };
  React.useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <View>
      {!user && (
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
            placeholder="Email"
            value={state.emailAddress}
            onChangeText={text => setState({...state, emailAddress: text})}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={styles.textInput}
            value={state.password}
            onChangeText={text => setState({...state, password: text})}
          />

          <View style={styles.container}>
            <Button onPress={signIn} title={'Sign In'} />
          </View>
        </View>
      )}

      <Text
        style={styles.textStyle}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        Click here to Sign-Up
      </Text>

      <View style={styles.container}>
        {user && <Button title={'Sign-out'} onPress={signOut} />}
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
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'black',
    margin: 20,
  },
});

export default AuthScreen;
