import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text,View} from 'react-native';
import HomeScreen from './screens/HomeScreen'
import AnalyticsScreen from './screens/AnalyticsScreen'
import CrashlyticsScreen from './screens/CrashlyticsScreen'
import SignUpScreen from './screens/SignUpScreen'
import AuthScreen from './screens/AuthScreen'
import {analytics} from './Setup'
const Stack = createNativeStackNavigator();

const App=() => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (
    <NavigationContainer
       ref={navigationRef}
       onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}>
      

      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Analytics" component={AnalyticsScreen} />
        <Stack.Screen name="Crashlytics" component={CrashlyticsScreen} />
        <Stack.Screen name="Authantication" component={AuthScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
