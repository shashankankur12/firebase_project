import React from "react";
import App from "./App";
import firebase from "@react-native-firebase/app";
import analytics from '@react-native-firebase/analytics';
import OneSignal from 'react-native-onesignal';
import Auth from '@react-native-firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAc5fji3W_J5BW3_c7abNx_WbcNTVsg358",
    authDomain: "fir-project-671d5.firebaseapp.com",
    projectId: "fir-project-671d5",
    storageBucket: "fir-project-671d5.appspot.com",
    messagingSenderId: "418276734417",
    appId: "1:418276734417:web:743cb8c8fb0fe03dfb1cf0",
    measurementId: "G-N62FTYCHJC"
  };

  if(firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  
  export {
    firebase,
    analytics,
    Auth,
  };
Setup = ()=>{
  React.useEffect(()=> {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId("d2c9c2a5-cbc9-48df-adf9-e54c3c626ac5");   
    
    //Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});
  }, [])
return (<App/>);
}

export default Setup;