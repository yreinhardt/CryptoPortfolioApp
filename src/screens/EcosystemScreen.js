import React, {useState, useEffect} from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import HeaderStock from "../components/headerStock";
import MarketEcosystems from "../components/MarketEcosystems";

const EcosystemScreen = ({ navigation }) => {
  const [ecosystems, setEcosystems] = useState([]);
  const [refresh, setRefresh] = useState(false); // handle flatlist refresh


  const fetchEcosystemsData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/categories?per_page=100"
    );
    const data = await res.json();
    setEcosystems(data);
  };

  useEffect(() => {
    fetchEcosystemsData();
  }, []);


  return(
    <View style={styles.container}>
        <HeaderStock />
        <FlatList
        style={styles.list}
        data={ecosystems}
        keyExtractor={ecosystems.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('CoinInfoScreen', {coinInformation: item})}>
        <MarketEcosystems ecosystem={item}/>
          </TouchableOpacity> }
        refreshing={refresh}
        onRefresh={async () => {
          setRefresh(true);
          await fetchEcosystemsData();
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

export default EcosystemScreen;