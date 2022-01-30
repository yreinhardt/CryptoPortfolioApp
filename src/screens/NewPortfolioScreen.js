import React from "react";
import { View, Text, StyleSheet } from "react-native";


const NewPortfolioScreen = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>New Portfolio Screen</Text>
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

export default NewPortfolioScreen;