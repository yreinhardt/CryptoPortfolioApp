import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WatchlistScreen from "../src/screens/WatchlistScreen";
import NewWatchlistScreen from "../src/screens/NewWatchlistScreen";

import PortfolioScreen from "../src/screens/PortfolioScreen";
import NewPortfolioScreen from "../src/screens/NewPortfolioScreen";


import CoinInfoScreen from "../src/screens/CoinInfoScreen";
import StockScreen from "../src/screens/StockScreen";



const Stack = createStackNavigator();



// hide header, title color transparent, show back navigation button only
const screenOptionStyle = {
    headerShown: true,
    headerTransparent:true,
    headerBackTitle: "Back",
    headerBackTitleVisible: true,
    headerTitleStyle: {
      color: 'transparent'
    },
}



const WatchlistStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="StockScreen" component={WatchlistScreen} />
      <Stack.Screen name="NewWatchlist" component={NewWatchlistScreen} />
    </Stack.Navigator>
  );
}

const PortfolioStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="StockScreen" component={PortfolioScreen} />
      <Stack.Screen name="NewPortfolio" component={NewPortfolioScreen} />
    </Stack.Navigator>
  );
}

const CoinInfoStack = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="StockScreen" component={StockScreen} />
        <Stack.Screen name="CoinInfo" component={CoinInfoScreen} />
      </Stack.Navigator>
    );
  }


export { WatchlistStack, PortfolioStack, CoinInfoStack };