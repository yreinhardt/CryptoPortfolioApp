import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const CoinInfoScreen = ({ route, navigation }) => {
  const { coinInformation } = route.params // passing down data from stockscreen through coininfoscreen 

  //console.log(coinInformation)
  return(
    <View style={styles.container}>
      <Text>itemId: {JSON.stringify(coinInformation)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1, 
  backgroundColor: "whitesmoke",
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center'
  },
})


export default CoinInfoScreen;