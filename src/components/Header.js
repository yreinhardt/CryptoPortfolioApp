import React from "react";
import { View, Text, StyleSheet, SafeAreaView} from "react-native";
import { COLORS, SCREEN } from "../../constants/theme"


const Header = ({ title }) => {
  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.background,
    alignItems: "center",
    width: SCREEN.width,
    marginBottom: 30,
  },
  headerContainer: {
    alignItems:'center',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: COLORS.onSurface,
    padding: 10,
  },
})

export default Header;