import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { COLORS } from "../../constants/theme"
import { ColorSpace } from "react-native-reanimated";

const HeaderStock = () => {
  const navigation = useNavigation(); // render component anywhere without passing in a navigation prop explicitly 

  return(
    <View style={styles.container}>

        <View style={styles.titleHeader}>
            <Text style={styles.title}>Cryptocurrency</Text>
        </View>

        <View style={styles.headerContainer} >
            <View style={styles.itemsContainer}>
                <TextInput 
                    placeholder="Search Coin..." 
                    placeholderTextColor={COLORS.onSurface}
                    style={styles.input}
                    />

                <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("WatchlistScreen")}
                >
                    <Text style={styles.buttonText}>Watchlist</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemsContainer}>
                <TouchableOpacity 
                  style={styles.buttonNav}
                  onPress={() => navigation.navigate("StockScreen")}
                >
                    <Text style={styles.buttonText}>Currency</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.buttonNav}
                  onPress={() => navigation.navigate("ExchangeScreen")}>
                    <Text style={styles.buttonText}>Exchanges</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.buttonNav}
                  onPress={() => navigation.navigate("EcosystemScreen")}> 
                    <Text style={styles.buttonText}>Ecosystems</Text>
                </TouchableOpacity>
            </View>

        </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    height: '15%',
    width: '100%',
  },

headerContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 10
  },
  itemsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  input:{
    width: '70%',
    height: 45,
    backgroundColor: COLORS.surface,
    padding: 10,
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 2,
    marginHorizontal: 2,
    color: COLORS.onSurface,
    
  },
  button:{
    backgroundColor: COLORS.surface,
    width: '25%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    height: 45,
    borderColor: 'blue',
    borderWidth: 2,
    marginHorizontal: 2

  },
  buttonNav:{
    backgroundColor: COLORS.surface,
    width: '30%',
    padding: 15,
    borderRadius: 5,
    height: 45,
    borderColor: 'blue',
    borderWidth: 2,
    marginHorizontal: 5,
    alignItems: 'center'

  },
  buttonText:{
    color: COLORS.onSurface,
    fontSize: 12,

  },
  titleHeader: {
    flexDirection: "row",
    alignItems:'center',
    marginTop: 40
  },
  title: {
    fontSize: 20,
    color: "black",
    marginTop: 10,
    fontWeight: 'bold',
    color: COLORS.onSurface
  },
})

export default HeaderStock;