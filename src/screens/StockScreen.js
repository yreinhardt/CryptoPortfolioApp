import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback,TouchableOpacity, TextInput, FlatList } from "react-native";

import MarketCoins from "../components/MarketCoins";


const StockScreen = ({ navigation }) => {
  const [coins, setCoins] = useState([]);
  const [refresh, setRefresh] = useState(false); // handle flatlist refresh

  /*
  const [search, setSearch] = useState(""); // search coins

  textinput
  onChangeText={(text) => text && setSearch(text)}  

  flatlist
          data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
            coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )}
  */ 

  const fetchCoinData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    console.log(data)
    setCoins(data);
  };

  useEffect(() => {
    fetchCoinData();
  }, []);




  return(
    <View style={styles.container}>
      <View style={styles.titleHeader}>
        <Text style={styles.title}>Cryptocurrency</Text>
      </View>

      <View style={styles.headerContainer} >
        <TextInput 
            placeholder="Search Coin..." 
            style={styles.input}
             />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("WatchlistScreen")}
        >
          <Text style={styles.buttonText}>Watchlist</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={coins}
        keyExtractor={coins.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('CoinInfoScreen', {coinInformation: item})}>
          <MarketCoins coin={item}/>
          </TouchableOpacity> }
        refreshing={refresh}
        onRefresh={async () => {
          setRefresh(true);
          await fetchCoinData();
          setRefresh(false);
        }}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: "center",
  },
  contentContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  input:{
    width: '70%',
    height: 45,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginLeft: 2,
    borderColor: 'blue',
    borderWidth: 1
    
  },
  button:{
    backgroundColor: "white",
    width: '25%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    height: 45,
    marginRight: 2,
    marginLeft: 5,
    borderColor: 'blue',
    borderWidth: 1

  },
  buttonText:{
    color: 'black',
    fontSize: 12
  },
  list: {
    width: "100%",
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
    fontWeight: 'bold'
  },
  text: {
    color: '#7bbdd9', 
    fontWeight: 'bold',
    fontSize: 30,
  }

})

export default StockScreen;