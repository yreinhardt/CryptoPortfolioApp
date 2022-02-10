import React from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { COLORS } from "../../constants/theme";
import Accordion from "../components/Accordion";

const CoinInfoScreen = ({ route }) => {
  const { coinInformation } = route.params // passing down data from stockscreen through coininfoscreen 

  return(

    <View style={styles.container}>
        <View style={styles.titleHeader}>
            <Text style={styles.title}>{coinInformation.name} ({coinInformation.symbol.toUpperCase()})</Text>
        </View>
        <View style={styles.overview}>
          <Image source={{ uri: coinInformation.image }} style={styles.image}/>
        </View>
        <Text style={styles.currentPriceText}>{new Intl.NumberFormat('de-DE').format(coinInformation.currentPrice)}$</Text>
        <ScrollView style={styles.detailContainer}>
          <Accordion title='Performance' coinID= {coinInformation.id} identifier = 'performance'/>
          <Accordion title='Social Insights' coinID= {coinInformation.id} identifier = 'socialInsights'/>
          <Accordion title='Description' coinID= {coinInformation.id} identifier = 'description'/> 
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center" 
  },
  detailContainer:{
    width: '100%',
  },
  titleHeader: {
    flexDirection: "row",
    alignItems:'center',
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: COLORS.onSurface
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
  currentPriceText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.onSurface
  }
})


export default CoinInfoScreen;