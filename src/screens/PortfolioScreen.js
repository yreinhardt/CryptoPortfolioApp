import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../constants/theme"
import Portfolio from "../components/Portfolio";
import { SCREEN } from "../../constants/theme"
import AddIcon from "../../assets/icons/addButton.png"
import AnalyticsIcon from "../../assets/icons/analytics.png"

const totalBalance = 6523.57
const balanceGain = 238.50
const dummyPortfolioData = 
[
  {
    symbol: "BTC",
    name: "Bitcoin",
    coinBalance: 4500,
    coinsCount: 1.45,
    price: 38.500,
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    gain: 12.1
  },
  {
    symbol: "ADA",
    name: "Cardano",
    coinBalance: 2300,
    coinsCount: 665.32,
    price: 823.43,
    image: "https://assets.coingecko.com/coins/images/975/large/cardano.png?",
    gain: -4.5
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    coinBalance: 12.860,
    coinsCount: 8.97,
    price: 7.64,
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    gain: 37.3
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    coinBalance: 12.860,
    coinsCount: 8.97,
    price: 7.64,
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    gain: 37.3
  },
]

/*
<View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            title="Add Portfolio"
            onPress={() => navigation.navigate("NewPortfolio")} 
          >
            <Image source={AnalyticsIcon} style={styles.image} />
            <Text style={{color:'white', fontSize: 14, fontWeight: 'bold'}}>Analytics</Text>
          </TouchableOpacity>

*/

const PortfolioScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Portfolio</Text>
        </View>
        <View style={styles.overViewContainer}>
          <Text style={{textAlign: 'left',fontSize: 14, fontWeight:'bold',padding:5, color: COLORS.onSurface}}>Your total balance</Text>
          <TouchableOpacity
            style={styles.buttonAnalytics}
            title="Add Portfolio"
            onPress={() => navigation.navigate("NewPortfolio")} 
          >
            <Image source={AnalyticsIcon} style={styles.imageAnalytics} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.balance}>${new Intl.NumberFormat('de-DE').format(totalBalance)}</Text>
              <Text style={[
                styles.balanceChange,
                balanceGain > 0
                ? styles.changeUp
                : styles.changeDown,
            ]}>${new Intl.NumberFormat('de-DE').format(balanceGain)} (15%)</Text>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={dummyPortfolioData}
          keyExtractor={dummyPortfolioData.name}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => 
              <Portfolio coin={item}/>}
        /> 
        <View>
          <TouchableOpacity
            style={styles.button}
            title="Add Portfolio"
            onPress={() => navigation.navigate("NewPortfolio")} 
          >
            <Image source={AddIcon} style={styles.image} />
            <Text style={{color:'white', fontSize: 14, fontWeight: 'bold'}}>Add Asset</Text>
          </TouchableOpacity>
        </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.background,
    alignItems: "center",
    width: '100%',
    flex:1
  },
  headerContainer: {
    alignItems:'center',
    marginTop: 40
  },
  overViewContainer:{
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    marginVertical: 15,
    borderRadius: 5,
    flex:1/3,
    width: '90%',
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

export default PortfolioScreen;