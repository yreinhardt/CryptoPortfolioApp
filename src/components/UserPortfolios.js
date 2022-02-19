import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { COLORS, SCREEN } from "../../constants/theme"

const UserPortfolios = ({ portfolio }) => {
  const navigation = useNavigation();

  return(
    <View style={styles.containerItem}>
      <TouchableOpacity 
        style={{flex:1}}
        onPress={() => navigation.navigate("PortfolioDetailsScreen")}>
          <View style={{flex:0.5,width: 0.9*SCREEN.width,}}>
              <Text style={[styles.textSymbol, {fontSize:25, fontWeight: 'bold'}]}>${new Intl.NumberFormat('de-DE').format(portfolio.balance.toFixed(2))}</Text>
          </View>
          <View style={{flex:0.5, marginBottom:5, borderTopWidth: 2,borderColor:"grey" ,width: 0.9*SCREEN.width,}}>
              <Text style={[styles.textSymbol, {fontSize:16}]}>{portfolio.name}</Text>
              <Text style={{paddingRight: 5,color: COLORS.onSurface,fontSize:14, fontStyle: 'italic', textAlign: 'right'}}>{portfolio.creationDate}</Text>         
          </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    marginTop:15,
    backgroundColor: COLORS.surface,
    marginHorizontal: 5,
    width: 0.9*SCREEN.width,
    height: 0.3*SCREEN.width,
    borderRadius: 5,
  },
  textSymbol: {
    //marginVertical: 5,
    padding:10,
    color: COLORS.onSurface,
  },
});

export default UserPortfolios;