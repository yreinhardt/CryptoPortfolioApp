import React, {useState, useEffect} from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import HeaderStock from "../components/headerStock";
import MarketExchanges from "../components/MarketExchanges"

const ExchangeScreen = ({ navigation }) => {
  const [exchanges, setExchanges] = useState([]);
  const [refresh, setRefresh] = useState(false); // handle flatlist refresh


  const fetchExchangeData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1"
    );
    const data = await res.json();
    setExchanges(data);
  };

  useEffect(() => {
    fetchExchangeData();
  }, []);

  return(
    <View style={styles.container}>
        <HeaderStock />
        <FlatList
        style={styles.list}
        data={exchanges}
        keyExtractor={exchanges.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('CoinInfoScreen', {coinInformation: item})}>
        <MarketExchanges exchange={item}/>
          </TouchableOpacity> }
        refreshing={refresh}
        onRefresh={async () => {
          setRefresh(true);
          await fetchExchangeData();
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
  list: {
    width: "100%",
    height: '45%'
  },


})

export default ExchangeScreen;