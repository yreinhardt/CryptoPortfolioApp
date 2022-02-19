import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WatchlistScreen from "../src/screens/WatchlistScreen";
import NewWatchlistScreen from "../src/screens/NewWatchlistScreen";

import PortfolioDetailsScreen from "../src/screens/PortfolioDetailsScreen";
import NewPortfolioScreen from "../src/screens/NewPortfolioScreen";

import CoinInfoScreen from "../src/screens/CoinInfoScreen";
import StockScreen from "../src/screens/StockScreen";

import HomeScreen from "../src/screens/HomeScreen";
import SettingsScreen from "../src/screens/SettingsScreen"

import LogInScreen from "../src/screens/LogInScreen";
import SignUpScreen from "../src/screens/SignUpScreen";

import AnalyticsScreen from "../src/screens/AnalyticsScreen"
import PortfolioDetailsCoinScreen from "../src/screens/PortfolioDetailsCoinScreen";

import PortfolioScreen from "../src/screens/PortfolioScreen"

const Stack = createStackNavigator();

// hide header, title color transparent, show back navigation button only
const screenOptionStyle = {
    animationEnabled: false, 
    headerShown: true,
    headerTransparent:true,
    //headerBackTitle: "back",
    headerBackTitleVisible: false,
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
      <Stack.Screen name="PortfolioDetailsScreen" component={PortfolioDetailsScreen} />
      <Stack.Screen name="NewPortfolio" component={NewPortfolioScreen} />
      <Stack.Screen name="Analytics" component={AnalyticsScreen} />
      <Stack.Screen name="PortfolioDetailsCoinScreen" component={PortfolioDetailsCoinScreen} />
    </Stack.Navigator>
  );
}

// dont allow back button for exchange, ecosys and stockscreen for navigation
// create tabNav behavior in Stack

const StockStack = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="StockScreen" component={StockScreen} options={{headerLeft: (props) => null }} />
        <Stack.Screen name="CoinInfoScreen" component={CoinInfoScreen} />
        <Stack.Screen name="WatchlistScreen" component={WatchlistScreen} />
        <Stack.Screen name="NewWatchlist" component={NewWatchlistScreen} />
      </Stack.Navigator>
    );
  }


export { HomeStack, PortfolioStack, StockStack, LogInStack };