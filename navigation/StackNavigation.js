import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WatchlistScreen from "../src/screens/WatchlistScreen";
import NewWatchlistScreen from "../src/screens/NewWatchlistScreen";

import PortfolioScreen from "../src/screens/PortfolioScreen";
import NewPortfolioScreen from "../src/screens/NewPortfolioScreen";


import CoinInfoScreen from "../src/screens/CoinInfoScreen";
import StockScreen from "../src/screens/StockScreen";

import HomeScreen from "../src/screens/HomeScreen";
import SettingsScreen from "../src/screens/SettingsScreen"

import LogInScreen from "../src/screens/LogInScreen";
import SignUpScreen from "../src/screens/SignUpScreen";

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

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}


const LogInStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

const PortfolioStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="PortfolioScreen" component={PortfolioScreen} />
      <Stack.Screen name="NewPortfolio" component={NewPortfolioScreen} />
    </Stack.Navigator>
  );
}

const StockStack = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="StockScreen" component={StockScreen} />
        <Stack.Screen name="CoinInfo" component={CoinInfoScreen} />
        <Stack.Screen name="WatchlistScreen" component={WatchlistScreen} />
        <Stack.Screen name="NewWatchlist" component={NewWatchlistScreen} />
      </Stack.Navigator>
    );
  }


export { HomeStack, PortfolioStack, StockStack, LogInStack };