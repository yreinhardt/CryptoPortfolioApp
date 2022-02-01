import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

console.log(process.env.TEST_API_KEY)

const HomeScreen = ({navigation}) => {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("SettingsScreen")} 
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5' // smokewhite
  },
  text: {
    color: '#7bbdd9', 
    fontWeight: 'bold',
    fontSize: 30,
  }

})

export default HomeScreen;