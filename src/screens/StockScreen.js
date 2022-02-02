import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity, TextInput, Image } from "react-native";

const StockScreen = ({ navigation }) => {

  return(
    <View style={styles.container}>
      <View style={styles.headerContainer} >
        <TextInput 
            placeholder="Search Coin..." 
            style={styles.input} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("WatchlistScreen")}
        >
          <Text style={styles.buttonText}>Watchlist</Text>
        </TouchableOpacity>

      </View>


      <View style={styles.contentContainer}>
        <Text style={styles.text}>Stock Screen</Text>
        <Button
          title="Go to Coininformation"
          onPress={() => navigation.navigate("CoinInfo")}
        />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f5f5f5' // smokewhite
  },
  contentContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent:'space-evenly',
    marginTop: 80
  },
  input:{
    width: '60%',
    height: 55,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginLeft:10
    
  },
  button:{
    backgroundColor: "white",
    width: '30%',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    height: 55,
    marginRight: 10,
    marginLeft: 5

  },
  buttonText:{
    color: 'black',
    fontSize: 12
  },
  text: {
    color: '#7bbdd9', 
    fontWeight: 'bold',
    fontSize: 30,
  }

})

export default StockScreen;