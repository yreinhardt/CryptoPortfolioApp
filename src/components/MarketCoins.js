import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../../constants/theme"

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
        <Text style={styles.textPrice}>${new Intl.NumberFormat('de-DE').format(coin.current_price.toFixed(2))}</Text>
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
    backgroundColor: COLORS.surface,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2,
    borderRadius: 5
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: COLORS.onSurface,
  },
  textPrice: {
    color: COLORS.onSurface,
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: COLORS.priceUp,
  },
  priceDown: {
    color: COLORS.priceDown,
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: COLORS.onSurface,
    textTransform: "uppercase",
  },
});

export default MarketCoins;