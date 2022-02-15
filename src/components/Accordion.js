import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { COLORS } from "../../constants/theme"

//import data from "../../data.json"

const Accordion = ({ title, coinID, identifier }) => {
    const [toggled, setToggled] = useState(false); // controll accordion state accordion
    const [coinInfo, setCoinInfo] = useState("")
    const [fetched, setFetched]= useState(false) // conditional rendering, if true start rendering accordion

    
    
    const fetchCoinInfo = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinID}?localization=false`
        );
        const data = await res.json();
        setCoinInfo(data);
        setFetched(true)
      } catch (err){
          //throw err;
          console.log(err);
      }
    };
  
    useEffect(() => {
      fetchCoinInfo();
    }, []);



    // accordion informations
    let performanceInfo
    let socialInfo
    let decriptionInfo
    
    // generete jsx and render informations only if fetched is true 
    if (fetched) {
        // logic on dynamic data switch case return specific information e.g. performace parameter
        performanceInfo =    <View style={styles.testContainer}>
                                    <View style={styles.subTest}>
                                        <Text style={styles.textCategory} >Market Cap Rang</Text>
                                        <Text style={styles.testTextRight}>#{coinInfo.market_cap_rank}</Text>
                                    </View>
                                    <View style={styles.subTest}>
                                        <Text style={styles.textCategory} >Market Cap</Text>
                                        <Text style={styles.testTextRight}>${new Intl.NumberFormat('de-DE').format(coinInfo.market_data.market_cap.usd)}</Text>
                                    </View>
                                    <View style={styles.subTest}>
                                        <Text style={styles.textCategory} >60d</Text>
                                        <Text style={styles.testTextRight, coinInfo.market_data.price_change_percentage_60d > 0 ? styles.priceUp : styles.priceDown}>{coinInfo.market_data.price_change_percentage_60d.toFixed(2)}%</Text>
                                    </View>
                                    <View style={styles.subTest}>
                                        <Text style={styles.textCategory} >200d</Text>
                                        <Text style={styles.testTextRight, coinInfo.market_data.price_change_percentage_200d > 0 ? styles.priceUp : styles.priceDown}>{coinInfo.market_data.price_change_percentage_200d.toFixed(2)}%</Text>
                                    </View>
                                    <View style={styles.subTest}>
                                        <Text style={styles.textCategory} >1y</Text>
                                        <Text style={styles.testTextRight, coinInfo.market_data.price_change_percentage_1y > 0 ? styles.priceUp : styles.priceDown}>{coinInfo.market_data.price_change_percentage_1y.toFixed(2)}%</Text>
                                    </View>
                                    <View style={styles.subTest}>
                                        <Text style={styles.textCategory} >All Time High</Text>
                                        <Text style={styles.testTextRight}>${coinInfo.market_data.ath.usd}</Text>
                                    </View>
                                    <View style={styles.subTest}>
                                        <Text style={styles.textCategory} >ATH until today</Text>
                                        <Text style={styles.testTextRight, coinInfo.market_data.ath_change_percentage.usd > 0 ? styles.priceUp : styles.priceDown}>{coinInfo.market_data.ath_change_percentage.usd.toFixed(2)}%</Text>
                                    </View>
                                    <View style={styles.subTest}>
                                        <Text style={styles.textCategory} >All Time Low</Text>
                                        <Text style={styles.testTextRight}>${coinInfo.market_data.atl.usd}</Text>
                                    </View>
                                    <View style={styles.subTest}>
                                        <Text style={styles.textCategory} >ATL until today</Text>
                                        <Text style={styles.testTextRight, coinInfo.market_data.atl_change_percentage.usd > 0 ? styles.priceUp : styles.priceDown}>{new Intl.NumberFormat('de-DE').format(coinInfo.market_data.atl_change_percentage.usd.toFixed(2))}%</Text>
                                    </View>
                                </View>
                    
    socialInfo =    <View style={styles.testContainer}>
                        <View style={styles.subTest}>
                            <Text style={styles.textCategory}>Twitter Follower</Text>
                            <Text style={styles.testTextRight}>{new Intl.NumberFormat('de-DE').format(coinInfo.community_data.twitter_followers)}</Text>
                        </View>
                        <View style={styles.subTest}>
                            <Text style={styles.textCategory}>Reddit Subscriber</Text>
                            <Text style={styles.testTextRight}>{new Intl.NumberFormat('de-DE').format(coinInfo.community_data.reddit_subscribers)}</Text>
                        </View>
                    </View>
    decriptionInfo =<View style={styles.testContainer}>
                        <View style={styles.subTest}>
                            <Text style={styles.textCategory}>Algorithm</Text>
                            <Text style={styles.testTextRight}>{coinInfo.hashing_algorithm}</Text>
                        </View>
                        <View style={styles.subTest}>
                            <Text style={styles.textCategory}>Ecosystem</Text>
                            <Text style={[styles.testTextRight, {flex:1/2}]}>{coinInfo.categories}</Text>
                        </View>
                        <View style={styles.subTest}>
                            <Text style={styles.textCategory}>Genisis Date</Text>
                            <Text style={styles.testTextRight}>{coinInfo.genesis_date}</Text>
                        </View>
                    </View>
    }
    

    // check on identifier to display accordion specific data
    let dataset
    if (fetched && identifier==='performance'){
        dataset = performanceInfo
    } else if (fetched && identifier==='socialInsights') {
        dataset = socialInfo
    } else if (fetched && identifier==='description') {
        dataset = decriptionInfo
    }




    return (

        <View style={styles.container}>
            {fetched && identifier==='performance' && (
                <View style={styles.fastFactsContainer}>
                    <View style={styles.fastContentContainer}>
                        <Text style={styles.fastFactsText}> 24h</Text>
                        <Text style={styles.fastFactsText}> 7d</Text>
                        <Text style={styles.fastFactsText}> 14d</Text>
                        <Text style={styles.fastFactsText}> 30d</Text>
                    </View>
                    <View style={styles.fastContentContainer}>
                        <Text style={styles.fastFactsText, coinInfo.market_data.price_change_percentage_24h > 0 ? styles.priceUpFact : styles.priceDownFact}> {coinInfo.market_data.price_change_percentage_24h.toFixed(2)}%</Text>
                        <Text style={styles.fastFactsText, coinInfo.market_data.price_change_percentage_7d > 0 ? styles.priceUpFact : styles.priceDownFact}> {coinInfo.market_data.price_change_percentage_7d.toFixed(2)}%</Text>
                        <Text style={styles.fastFactsText, coinInfo.market_data.price_change_percentage_14d > 0 ? styles.priceUpFact : styles.priceDownFact}> {coinInfo.market_data.price_change_percentage_14d.toFixed(2)}%</Text>
                        <Text style={styles.fastFactsText, coinInfo.market_data.price_change_percentage_30d > 0 ? styles.priceUpFact : styles.priceDownFact}> {coinInfo.market_data.price_change_percentage_30d.toFixed(2)}%</Text>

                    </View>
                 </View>

            )}
            <TouchableOpacity
                style={styles.cardContainer}
                activeOpacity={0.9}
                onPress={() => {
                    if (toggled==true){
                        setToggled(false)
                    } else {
                        setToggled(true)
                    }
                }
            } >
                    <Text style={styles.heading}>{title}</Text>
                    {toggled &&fetched && ( 
                        dataset 
                    )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 16,
        backgroundColor: COLORS.background, //"whitesmoke",
        paddingHorizontal: 16,
        borderRadius: 5,
        flexDirection: "column",
      },
      cardContainer: {
        marginTop: 5,
        borderColor:'blue',
        borderWidth: 2,
        width: '100%',
        padding:10,
        borderRadius: 5,
        backgroundColor: COLORS.surface,  
      },

      heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: -1,
        textAlign: 'center',
        color: COLORS.onSurface,  

      },
      testContainer: {
        backgroundColor: COLORS.surface,
        padding: 10,
        flexDirection: "column",
        
      },
      subTest: {
        borderBottomColor: COLORS.separatElement,
        borderBottomWidth: 0.5,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5, 
     
      },
      textCategory:{
        fontSize: 16,
        letterSpacing: -1,
        color: COLORS.onSurface,  
      },
      testTextRight: {
        fontSize: 16,
        marginLeft: 'auto',
        color: COLORS.onSurface,  
      },
      priceUp: {
        fontSize: 16,
        marginLeft: 'auto',
        color: COLORS.priceUp,
      },
      priceDown: {
        fontSize: 16,
        marginLeft: 'auto',
        color: COLORS.priceDown,
      },
      fastFactsContainer:{
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 20,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 5,
        flex: 1,
      },
      fastContentContainer:{
        alignSelf: 'center',
        flexDirection:'row',
        padding: 5,
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: COLORS.surface,
      },
      fastFactsText: {
        fontSize: 16,
        fontWeight:'bold',
        color: COLORS.onSurface,
      },
      priceDownFact: {
        color: "#fc4422",
        fontSize: 16,
        fontWeight:'bold'
      },
      priceUpFact: {
        color: "#00B589",
        fontSize: 16,
        fontWeight:'bold'
      },
});


export default Accordion;