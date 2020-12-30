import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View>

        <Image source={require('../images/registration.jpg')}
                            style={{width: "100%", height:"80%"}}
                        />
        <View style={styles.container}>
            <Text>Details Screen</Text>
          
            <Button
                title="Go to home"
                onPress={() => navigation.navigate("Home")}
            />
      
        </View>
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
