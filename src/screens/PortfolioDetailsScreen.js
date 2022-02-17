import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { COLORS, SCREEN } from "../../constants/theme"
import Portfolio from "../components/Portfolio";

import { PORTFOLIO} from "../../constants/dummyData"


const PortfolioDetailsScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Portfolio Details</Text>
        </View>
        <FlatList
          style={styles.list}
          data={PORTFOLIO}
          keyExtractor={PORTFOLIO.name}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => 
              <Portfolio coin={item}/>}
        /> 
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.background,
    alignItems: "center",
    width: SCREEN.width,
    flex:1,
  },
  headerContainer: {
    alignItems:'center',
    marginTop: 40,
    marginBottom: 30
  },
  overViewContainer:{
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    marginVertical: 15,
    borderRadius: 5,
    flex:1/3,
    width: 0.9*SCREEN.width,
    borderColor: 'blue',
    borderWidth:2
  },
 
  button:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    margin: 15,
    height: 60,
    width: 0.9*(SCREEN.width), // 90% width
    backgroundColor: COLORS.surface,
    borderColor: 'blue',
    borderWidth:2
  },
  buttonAnalytics:{
    color: COLORS.onSurface,
    fontSize: 14,
    right:0,
    margin:5,
    top:5,
    position:'absolute',

  },
  balance:{
    flex:1,
    fontSize: 30,
    textAlign: 'left',
    marginTop: 15,
    fontWeight: 'bold',
    color: COLORS.onSurface,
    padding: 10,
  },
  balanceChange: {
    color: COLORS.onSurface,
    fontSize: 14,
    right:0,
    margin:5,
    bottom:5,
    position:'absolute'
  },
  changeDown: {
    color: COLORS.priceDown,
  },
  changeUp: {
    color: COLORS.priceUp,
  },
  list: {
    flex:1,
    width: "90%",
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: COLORS.onSurface,
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    tintColor: COLORS.onSurface
  },
  imageAnalytics:{
    width: 40,
    height: 40,
    marginHorizontal: 2,
    tintColor: COLORS.onSurface
  }
})

export default PortfolioDetailsScreen;