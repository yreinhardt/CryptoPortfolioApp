import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, SCREEN } from "../../constants/theme"

const PortfolioOverview = ({ coin }) => (
    
  <View style={styles.containerItem}>
     <Image source={{ uri: coin.image }} style={styles.image} />
     <View style={styles.textContainer}>
       <Text style={styles.textSymbol}>{coin.symbol}</Text>
       <Text style={[
          styles.gainInfo,
          coin.gain > 0
          ? styles.priceUp
          : styles.priceDown,
          ]}>{coin.gain}%</Text>

     </View>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: COLORS.surface,
    marginHorizontal: 5,
    width: 0.3*SCREEN.width,
    height: 0.3*SCREEN.width, // create square
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth:2,
    borderColor:"blue",
  },
  textContainer:{
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  priceUp: {
    color: COLORS.priceUp,
  },
  priceDown: {
    color: COLORS.priceDown,
  },
  gainInfo: {
    flex:1,
    color: COLORS.onSurface,
    fontSize: 14,
    textAlign: 'center',
  },
  textSymbol: {
    flex:1,
    color: COLORS.onSurface,
    textTransform: "uppercase",
    textAlign: 'center',
  },
});

export default PortfolioOverview;