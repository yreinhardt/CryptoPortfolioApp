import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, StyleSheet, Image, View} from "react-native"

import HomeIcon from "../assets/icons/home.png"
import LoginIcon from "../assets/icons/login.png"
import StockIcon from "../assets/icons/stock.png"
import PortfolioIcon from "../assets/icons/portfolio.png"

import  { HomeStack, PortfolioStack, StockStack, LogInStack } from "./StackNavigation"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                height: 95,
                backgroundColor: '#7bbdd9',
                borderTopColor: "transparent",
                width: '100%',
                borderRadius: 5
            }
        }
        }
        >
            <Tab.Screen name="Home" component={HomeStack} options={{
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
            

            <Tab.Screen name="Stock" component={StockStack} options={{
                tabBarIcon: ({focused})=>(
                <View style={styles.bar}>
                    <Image 
                        source={StockIcon}
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
                        source={PortfolioIcon}
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

            <Tab.Screen name="LogIn" component={LogInStack} options={{
                tabBarIcon: ({focused})=>(
                <View style={styles.bar}>
                    <Image 
                        source={LoginIcon}
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