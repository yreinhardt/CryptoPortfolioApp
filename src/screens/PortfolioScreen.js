import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { COLORS, SCREEN } from "../../constants/theme"
import AddIcon from "../../assets/icons/addButton.png"
import AnalyticsIcon from "../../assets/icons/analytics.png"
import { PORTFOLIO, BALANCEGAIN, TOTALBALANCE } from "../../constants/dummyData"
import PortfolioOverview from "../components/PortfolioOverview";

import FeedbackIcon from "../../assets/icons/feedback.png"
import AlertIcon from "../../assets/icons/alerts.png"
import AchievementIcon from "../../assets/icons/achievements.png"
import RemoveIcon from "../../assets/icons/removeButton.png"

const PortfolioDetailsScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Portfolio</Text>
        </View>
        <View style={styles.overViewContainer}>
          <Text style={{textAlign: 'left',fontSize: 14, fontWeight:'bold',padding:5, color: COLORS.onSurface}}>Your total balance</Text>
          <TouchableOpacity
            style={styles.buttonAnalytics}
            onPress={() => navigation.navigate("Analytics")} 
          >
            <Image source={AnalyticsIcon} style={styles.imageAnalytics} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.balance}>${new Intl.NumberFormat('de-DE').format(TOTALBALANCE)}</Text>
              <Text style={[
                styles.balanceChange,
                BALANCEGAIN > 0
                ? styles.changeUp
                : styles.changeDown,
            ]}>${new Intl.NumberFormat('de-DE').format(BALANCEGAIN)} (15%)</Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.subHeaderContainer}>
            <View style={{flex:1}}>
              <Text style={[styles.subText, {alignSelf:'flex-start'}]} >Assets</Text>
            </View>
            <View style={{flex:1/2}}>
              <TouchableOpacity
              style={{flex:1}}
              onPress={() => navigation.navigate("PortfolioDetail")} 
              >
                <Text style={[styles.subText, {alignSelf:'center'}]}>See details</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            horizontal
            style={styles.list}
            data={PORTFOLIO}
            keyExtractor={PORTFOLIO.name}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => 
                <PortfolioOverview coin={item}/>}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.subButtonContent}>
            <View style={styles.buttonContent}>
              <TouchableOpacity
                style={[styles.subButton, {borderWidth: 2, borderColor: 'blue'}]}
              >
                <Image source={AchievementIcon} style={styles.image} />
                <Text style={{color:'white', fontSize: 10, fontWeight: 'bold'}}>Achievement</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContent}>
              <TouchableOpacity
                style={[styles.subButton, {borderWidth: 2, borderColor: 'blue'}]}
              >
                <Image source={AlertIcon} style={styles.image} />
                <Text style={{color:'white', fontSize: 10, fontWeight: 'bold'}}>Alert</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContent}>
              <TouchableOpacity
                style={[styles.subButton, {borderWidth: 2, borderColor: 'blue'}]}
              >
                <Image source={FeedbackIcon} style={styles.image} />
                <Text style={{color:'white', fontSize: 10, fontWeight: 'bold'}}>Feedback</Text>
              </TouchableOpacity>
            </View>
            
          </View>
          <View style={{flex:1, justifyContent: 'center',
                alignItems:'center', marginVertical: 20}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("NewPortfolio")} 
          >
            <Image source={AddIcon} style={styles.image} />
            <Text style={{color:'white', fontSize: 14, fontWeight: 'bold'}}>Add Asset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("NewPortfolio")} 
          >
            <Image source={RemoveIcon} style={styles.image} />
            <Text style={{color:'white', fontSize: 14, fontWeight: 'bold'}}>Remove Asset</Text>
          </TouchableOpacity>
          </View>

        </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.background,
    alignItems: "center",
    width: SCREEN.width,
    flex:1
  },
  headerContainer: {
    alignItems:'center',
    marginTop: 40
  },
  overViewContainer:{
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    marginVertical: 20,
    borderRadius: 5,
    flex:1/2,
    width: '90%',
    borderColor: 'blue',
    borderWidth:2
  },
  listContainer:{
    flex:0.6,
    width: 0.9*SCREEN.width,
    backgroundColor: COLORS.surface,
    borderRadius: 5,
    padding: 5
  }, 
  subHeaderContainer:{
    flex:1/4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonContainer:{
    flex:1, 
    marginVertical: 20, 
    width: 0.9*SCREEN.width,
    justifyContent: 'center',
    alignItems:'center',
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginVertical: 10,
    height: 60,
    width: 0.9*(SCREEN.width), // 90% width
    backgroundColor: COLORS.surface,
    borderColor: 'blue',
    borderWidth:2,
    borderRadius: 5,
  },
  subButtonContent:{
    flex:0.6, 
    borderRadius: 5,
    flexDirection:'row',
    width: 0.9*(SCREEN.width),
    justifyContent: 'space-evenly',
    alignItems:'center',
    backgroundColor: COLORS.surface,

  },
  buttonContent:{
    //borderWidth: 2, 
    //borderColor: "white",
    height: 0.15*(SCREEN.width),
    width: 0.2*(SCREEN.width),
    marginHorizontal: 5,
    borderRadius: 5,

  },
  subButton:{
    flex:1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonAnalytics:{
    color: COLORS.onSurface,
    fontSize: 14,
    right:0,
    margin:5,
    top:5,
    position:'absolute',

  },
  balance:{
    flex:1,
    fontSize: 30,
    textAlign: 'left',
    marginTop: 15,
    fontWeight: 'bold',
    color: COLORS.onSurface,
    padding: 10,
  },
  balanceChange: {
    color: COLORS.onSurface,
    fontSize: 14,
    right:0,
    margin:5,
    bottom:5,
    position:'absolute'
  },
  changeDown: {
    color: COLORS.priceDown,
  },
  changeUp: {
    color: COLORS.priceUp,
  },
  list: {
    flex:1,
    padding: 5,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: COLORS.onSurface,
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    tintColor: COLORS.onSurface
  },
  imageAnalytics:{
    width: 40,
    height: 40,
    marginHorizontal: 2,
    tintColor: COLORS.onSurface
  },
  subText:{
    flex:1,
    color: 'white', 
    marginBottom: 5, 
    padding: 10,
    fontWeight: 'bold', 
    fontSize:14, 
  },
})

export default PortfolioDetailsScreen;