import React from "react";
import { View, Text, StyleSheet } from "react-native";


const SettingsScreen = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
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

export default SettingsScreen;