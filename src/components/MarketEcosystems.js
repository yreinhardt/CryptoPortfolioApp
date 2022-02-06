import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MarketEcosystems = ({ ecosystem }) => (
    
  <View style={styles.containerItem}>
        <View style={styles.ecosystemName}>
        <Image source={{ uri: ecosystem.top_3_coins[0] }} style={styles.image} />
                <Image source={{ uri: ecosystem.top_3_coins[1] }} style={styles.image} />
                <Image source={{ uri: ecosystem.top_3_coins[2] }} style={styles.image} />
            <View style={styles.containerNames}>
                <Text style={styles.text}>{ecosystem.name}</Text>
            </View>
        </View>
        <View>
        <Text style={styles.textPrice}>${new Intl.NumberFormat('de-DE').format(ecosystem.market_cap.toFixed(0))}</Text>
        <Text
            style={[
            styles.pricePercentage,
            ecosystem.price_change_percentage_24h > 0
                ? styles.priceUp
                : styles.priceDown,
            ]}
        >
            {ecosystem.market_cap_change_24h.toFixed(2)}%
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
    marginRight: 0,
    width: 100,
  },
  ecosystemName: {
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

export default MarketEcosystems;