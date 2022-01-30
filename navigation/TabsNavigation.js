import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, StyleSheet, Image, View} from "react-native"

import HomeScreen from "../src/screens/HomeScreen";
import SettingsScreen from "../src/screens/SettingsScreen";


import HomeIcon from "../assets/icons/home.png"

import  { WatchlistStack, PortfolioStack, CoinInfoStack, LogInStack } from "./StackNavigation"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                height: 100,
                backgroundColor: '#7bbdd9',
                borderTopColor: "transparent"
            }
        }
        }
        >
            <Tab.Screen name="LogIn" component={LogInStack} options={{
                tabBarIcon: ({focused})=>(
                <View style={styles.bar}>
                    <Image 
                        source={HomeIcon}
                        resizeMode='contain'
                        style={{
                            width: 30, 
                            height: 30,
                            tintColor: focused ? 'red' : 'black'
                        }}
                    />
                </View>
                ),
            }} />

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused})=>(
                <View style={styles.bar}>
                    <Image 
                        source={HomeIcon}
                        resizeMode='contain'
                        style={{
                            width: 30, 
                            height: 30,
                            tintColor: focused ? 'red' : 'black'
                        }}
                    />
                </View>
                ),
            }} />
            

            <Tab.Screen name="Stock" component={CoinInfoStack} options={{
                tabBarIcon: ({focused})=>(
                <View style={styles.bar}>
                    <Image 
                        source={HomeIcon}
                        resizeMode='contain'
                        style={{
                            width: 30, 
                            height: 30,
                            tintColor: focused ? 'red' : 'black'
                        }}
                    />
                </View>
                ),
            }} />
            <Tab.Screen name="Portfolio" component={PortfolioStack} options={{
                tabBarIcon: ({focused})=>(
                <View style={styles.bar}>
                    <Image 
                        source={HomeIcon}
                        resizeMode='contain'
                        style={{
                            width: 30, 
                            height: 30,
                            tintColor: focused ? 'red' : 'black'
                        }}
                    />
                </View>
                ),
            }} />

            <Tab.Screen name="Watchlist" component={WatchlistStack} options={{
                tabBarIcon: ({focused})=>(
                <View style={styles.bar}>
                    <Image 
                        source={HomeIcon}
                        resizeMode='contain'
                        style={{
                            width: 30, 
                            height: 30,
                            tintColor: focused ? 'red' : 'black'
                        }}
                    />
                </View>
                ),
            }} />

            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({focused})=>(
                <View style={styles.bar}>
                    <Image 
                        source={HomeIcon}
                        resizeMode='contain'
                        style={{
                            width: 30, 
                            height: 30,
                            tintColor: focused ? 'red' : 'black'
                        }}
                    />
                </View>
                ),
            }} />
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    bar: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 15,
    },

})

export default Tabs