import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

async function onSignIn(user) {
  crashlytics().log('User signed in.');
  await Promise.all([
    crashlytics().setUserId(user.uid),
    crashlytics().setAttribute('credits', String(user.credits)),
    crashlytics().setAttributes({
      role: 'admin',
      followers: '13',
      email: user.email,
      username: user.username,
    }),
  ]);
}

const CrashlyticsScreen = ({navigation}) => {
  React.useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Button
          title="Sign In"
          onPress={() =>
            onSignIn({
              uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
              username: 'Joaquin Phoenix',
              email: 'phoenix@example.com',
              credits: 42,
            })
          }
        />
      </View>
      <View style={styles.container}>
        <Button title="Test Crash" onPress={() => crashlytics().crash()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default CrashlyticsScreen;
