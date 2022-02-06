import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";


const MarketExchanges = ({ exchange }) => (
    
  <View style={styles.containerItem}>
        <View style={styles.exchangeName}>
            <Image source={{ uri: exchange.image }} style={styles.image} />
            <View style={styles.containerNames}>
                <Text style={styles.text}>{exchange.name}</Text>
            </View>
        </View>
        <View>
        <Text style={styles.textPrice}>${new Intl.NumberFormat('de-DE').format(exchange.trade_volume_24h_btc.toFixed(2))}</Text>
        <Text
            style={[
            styles.trustScoreText,
            exchange.trust > 5
                ? styles.trustScoreLow
                : styles.trustScoreHigh,
            ]}
        >
            {exchange.trust_score}
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
  exchangeName: {
    flexDirection: "row",
  },
  text: {
    color: "black",
  },
  textPrice: {
    color: "black",
    fontWeight: "bold",
  },
  trustScoreText: {
    textAlign: "right",
    fontWeight: 'bold'
  },
  trustScoreHigh: {
    color: "green",
  },
  trustScoreLow: {
    color: "red",
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

export default MarketExchanges;