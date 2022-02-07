import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import Accordion from "../components/Accordion";

const CoinInfoScreen = ({ route }) => {
  const { coinInformation } = route.params // passing down data from stockscreen through coininfoscreen 
  const [coinInfo, setCoinInfo] = useState("")

  const fetchCoinInfo = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinInformation.id}?localization=false`
    );
    const data = await res.json();
    setCoinInfo(data);
  };

  useEffect(() => {
    fetchCoinInfo();
  }, []);

  return(

    <View style={styles.container}>
        <View style={styles.titleHeader}>
            <Text style={styles.title}>{coinInformation.name} ({coinInformation.symbol.toUpperCase()})</Text>
        </View>
        <View style={styles.overview}>
          <Image source={{ uri: coinInformation.image }} style={styles.image}/>
        </View>
        <ScrollView style={styles.detailContainer}>
            <Accordion title='Performance' coinData= {coinInfo}/>
            <Accordion title='Social Insights' coinData= {coinInfo}/>
            <Accordion title='Description' coinData= {coinInfo}/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: "center" 
  },
  detailContainer:{
    width: '100%',
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
  overview: {
    flexDirection: "row",
    alignItems:'center',
  },
  image: {
    width: 60,
    height: 60,
    marginVertical: 15
  },
})


export default CoinInfoScreen;