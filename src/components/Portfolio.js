import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../../constants/theme"


const Portfolio = ({ coin }) => (
    
  <View style={styles.containerItem}>
        <View style={styles.firstContent}>
            <Image source={{ uri: coin.image }} style={styles.image} />
            <View style={styles.containerNames}>
            <Text style={styles.textSymbol}>{coin.symbol}</Text>
                <Text style={styles.text}>{coin.name}</Text>
            </View>
            <View>
                <Text style={[
                styles.gainInfo,
                coin.gain > 0
                ? styles.priceUp
                : styles.priceDown,
                ]}>{coin.gain}%</Text>
            </View>
           
        </View>
        <View style={styles.subContent}>
            <Text style={styles.textPrice}>${new Intl.NumberFormat('de-DE').format(coin.coinBalance.toFixed(2))}</Text>
            <Text style={styles.textPrice}>{new Intl.NumberFormat('de-DE').format(coin.coinsCount.toFixed(2))}</Text>
            <Text style={styles.textPrice}>${new Intl.NumberFormat('de-DE').format(coin.price.toFixed(2))}</Text>
        </View>
        <View style={styles.subContent}>
            <Text style={styles.description}>Balance</Text>
            <Text style={styles.description}>Coins</Text>
            <Text style={styles.description}>Price</Text>
        </View>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: COLORS.surface,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 5
  },
  firstContent: {
    flexDirection: "row",
    borderBottomColor: 'grey',
    borderBottomWidth:1,
    padding:10,
    width: '100%'
  },
  subContent:{
    marginTop: 10,
    flexDirection: 'row',
  },
  containerNames: {
    marginLeft: 10,
    flex:1
  },
  text: {
    color: COLORS.onSurface,
  },
  textPrice: {
    flex:1,
    marginHorizontal: 5,
    color: COLORS.onSurface,
    fontWeight: "bold",
  },
  gainInfo: {
    flex:1,
    color: COLORS.onSurface,
    fontSize: 14,
  },
  description: {
    flex:1,
    marginHorizontal: 5,
    color: COLORS.onSurface,
    fontSize: 12
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

export default Portfolio;