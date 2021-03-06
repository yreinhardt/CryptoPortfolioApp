import React, {useState, useEffect} from "react";
import { View, StyleSheet,TouchableOpacity, FlatList } from "react-native";
import { COLORS, SCREEN } from "../../constants/theme";

import HeaderStock from "../components/headerStock";
import MarketCoins from "../components/MarketCoins"


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
    try{
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    } catch (err) {
      console.log(err)
    }

  };

  useEffect(() => {
    fetchCoinData();
  }, []);




  return(
    <View style={styles.container}>
      <HeaderStock/>
      <FlatList
        style={styles.list}
        data={coins}
        keyExtractor={coins.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => 
          <TouchableOpacity 
            onPress={() => navigation.navigate('CoinInfoScreen',
             {
               coinInformation: {
                id: item.id,
                name: item.name,
                symbol: item.symbol,
                image: item.image,
                currentPrice: item.current_price}
            })}>
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
    backgroundColor: COLORS.background,
    alignItems: "center",
  },
  list: {
    //flex:1/2,
    width: 0.9*SCREEN.width,
    height: '40%'
  },

})

export default StockScreen;