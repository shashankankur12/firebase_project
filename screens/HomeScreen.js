import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <FlatList
        data={[{key: 'Analytics'}, {key: 'Crashlytics'}, {key: 'Authantication'}]}
        renderItem={({item}) => (
          <Text style={styles.item}
            onPress={() => {
              navigation.navigate(item.key);
            }}>
            {item.key}
          </Text>
        )}
        ItemSeparatorComponent={this.renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
  },  
  item: {  
      padding: 10,  
      fontSize: 22, 
      color:'black',
      flex: 1, 
  },  
})  

export default HomeScreen;
