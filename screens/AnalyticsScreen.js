import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {analytics} from '../Setup';

const AnalyticsScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <Button
          title="Add To Cart"
          onPress={() => {
            analytics().logEvent('cart', {
              id: 'shoes_372732173',
              item: 'Nivia Shoes - Sports',
              description: ['Sports', 'Cricket'],
              size: '9',
            });
            console.log('Add To Cart');
          }}
        />
      </View>

      <View style={styles.container}>
        <Button
          title="Join Group"
          style={{marginTop: 20}}
          onPress={() => {
            analytics().logJoinGroup({
              group_id: 'whatsapp_group_12121',
            });
            console.log('Join Group');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({  
  container: {  
      marginHorizontal: 20, 
      marginTop: 20,
  },    
}) 

export default AnalyticsScreen;
