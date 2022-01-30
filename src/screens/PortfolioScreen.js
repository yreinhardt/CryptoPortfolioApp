import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const PortfolioScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio Screen</Text>
      <Button
        title="Add Portfolio"
        onPress={() => navigation.navigate("NewPortfolio")} 
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

export default PortfolioScreen;