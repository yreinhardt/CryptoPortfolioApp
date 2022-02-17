import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { PORTFOLIO, BALANCEGAIN, TOTALBALANCE } from "../../constants/dummyData"
import { COLORS, SCREEN } from "../../constants/theme"

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit'
//import { TouchableOpacity } from "react-native-gesture-handler";

const AnalyticsScreen = () => {
    const [buttonFocus, setButtonFocus] = useState("monthly")

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    const data = [
        {
          name: PORTFOLIO[0].symbol,
          balancePercentage: PORTFOLIO[0].coinBalance,
          color: "red",
          legendFontColor: COLORS.onSurface,
          legendFontSize: 15
        },
        {
          name: PORTFOLIO[1].symbol,
          balancePercentage: PORTFOLIO[1].coinBalance,
          color: "green",
          legendFontColor: COLORS.onSurface,
          legendFontSize: 15
        },
        {
          name: PORTFOLIO[2].symbol,
          balancePercentage: PORTFOLIO[2].coinBalance,
          color: "blue",
          legendFontColor: COLORS.onSurface,
          legendFontSize: 15
        },
        {
          name: PORTFOLIO[3].symbol,
          balancePercentage: PORTFOLIO[3].coinBalance,
          color: "orange",
          legendFontColor: COLORS.onSurface,
          legendFontSize: 15
        },
        {
            name: PORTFOLIO[4].symbol,
            balancePercentage: PORTFOLIO[4].coinBalance,
            color: "grey",
            legendFontColor: COLORS.onSurface,
            legendFontSize: 15
          },
          {
            name: PORTFOLIO[5].symbol,
            balancePercentage: PORTFOLIO[5].coinBalance,
            color: "yellow",
            legendFontColor: COLORS.onSurface,
            legendFontSize: 15
          },
      ];
    const dataLine = {
        labels: ["Jul.","Aug.","Sep.","Oct.","Nov.","Dec.","Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun."],
        datasets: [
            {
            data: [20, 39, 35, 12, 17, 20, 45, 28, 80, 99, 43, 62],
            color: (opacity = 1) => `rgba(255,0,0, ${opacity})`, // blue
            strokeWidth: 2 // optional
            }
        ],
        legend: ["total balance"] // optional
    };

    ////{[styles.button, buttonFocus ? styles.buttonFocused : styles.button]}

    const handleFocus = () =>{
        setButtonFocus("monthly")
    }
    const handleFocus2 = () =>{
        setButtonFocus("daily")
    }


  return(
<ScrollView style={styles.scrollviewContainer}>
    <View style={styles.container}>
        <View style={styles.headerContainer}>
                <Text style={styles.title}>Analytics</Text>
        </View>
        <View style={styles.chartContainer}>
            <Text style={styles.subHeader}>Portfolio distribution (%)</Text>
            <View style={{marginVertical:10}}>
                <PieChart
                    data={data}
                    width={0.9*SCREEN.width}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"balancePercentage"}
                    avoidFalseZero={false}
                    backgroundColor={COLORS.surface}
                    paddingLeft={"15"}
                    center={[10, 5]} 
                />
            </View>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={styles.button}
            >
                <Text style={styles.buttonText}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
            >
                <Text style={styles.buttonText}>Daily</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.chartContainer}>
            <Text style={styles.subHeader}>Performance (monthly)</Text>
            <View style={{marginVertical:10}}>
            <LineChart
                data={dataLine}
                width={0.9*SCREEN.width}
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                verticalLabelRotation={90}
                xLabelsOffset={-10}
                chartConfig={{
                    backgroundColor: COLORS.surface, //"#e26a00",
                    backgroundGradientFrom: COLORS.surface,//"#fb8c00",
                    backgroundGradientTo: COLORS.surface ,//"#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "3", //dot size
                        //strokeWidth: "2",
                        //stroke: "transparent"
                    }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
            }}
        />
            </View>
        </View>
        <View style={styles.chartContainer}>
            <Text style={styles.subHeader}>Portfolio distribution (%)</Text>
            <View style={{marginVertical:10}}>
                <PieChart
                    data={data}
                    width={0.9*SCREEN.width}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"balancePercentage"}
                    avoidFalseZero={false}
                    backgroundColor={COLORS.surface}
                    paddingLeft={"15"}
                    center={[10, 5]} 
                />
            </View>
        </View>
    </View>
</ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollviewContainer:{
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    buttonContainer: {
        //borderColor:"white",
        //borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        width: 0.9*SCREEN.width,
        marginTop: 5,
        borderRadius: 5,
        backgroundColor: COLORS.surface
    },
    chartContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: COLORS.surface,
        marginVertical: 10,
        //borderWidth:2,
        //borderColor: 'white',
    },
    buttonFocused: {
        backgroundColor: "lightgrey"
    },
    buttonNotFocused: {
        backgroundColor: "black",
    },
    button: {
        flex:1,
        borderColor:"white",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,

    },
    buttonText:{
        color: COLORS.onSurface,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        color: COLORS.onSurface,
        padding: 10,
    },
    subHeader:{
        fontSize: 16,
        color: COLORS.onSurface,
        //marginTop: 5,
        padding:10,
    },
    headerContainer: {
        alignItems:'center',
        marginTop: 40
    },

})

export default AnalyticsScreen;