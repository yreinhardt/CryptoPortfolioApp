import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";



const MarketCoins = ({ coin }) => (
    
  <View style={styles.containerItem}>
        <View style={styles.coinName}>
            <Image source={{ uri: coin.image }} style={styles.image} />
            <View style={styles.containerNames}>
                <Text style={styles.text}>{coin.name}</Text>
                <Text style={styles.textSymbol}>{coin.symbol}</Text>
            </View>
        </View>
        <View>
        <Text style={styles.textPrice}>${coin.current_price}</Text>
        <Text
            style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
                ? styles.priceUp
                : styles.priceDown,
            ]}
        >
            {coin.price_change_percentage_24h.toFixed(2)}%
        </Text>
        </View>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "whitesmoke",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    margin: 2,
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "black",
  },
  textPrice: {
    color: "black",
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default MarketCoins;