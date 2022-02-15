import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { COLORS } from "../../constants/theme"

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
            <View style={styles.itemsDescripton}>
              <View style={styles.leftContainer}>
                <Text style={styles.headerText}>Symbol/Name</Text>
              </View>
              
              <View style={styles.rightContainer}>
                <Text style={styles.headerText}>Price/24h</Text>
              </View>
          </View>

        </View>


    </View>
  )
}





const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.background,
    alignItems: "center",
    //height: '50%',
    width: '100%',
  },

headerContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    width: '100%',
    marginTop: 10,
    //paddingTop: 10
  },
  itemsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginHorizontal: 2
  },
  itemsDescripton:{
    backgroundColor: COLORS.surface,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    padding:  5,
    marginTop: 10,
    marginHorizontal: 5,
    marginBottom: 2

  },
  input:{
    //width: '70%',
    flex: 1,
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
    flex: 1/4,
    backgroundColor: COLORS.surface,
    //width: '25%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    height: 45,
    borderColor: 'blue',
    borderWidth: 2,
    marginHorizontal: 2

  },
  buttonText:{
    color: COLORS.onSurface,
    fontSize: 12,
  },
  headerText:{
    color: COLORS.onSurface,
    fontSize: 12,
    padding: 10,
  },
  leftContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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