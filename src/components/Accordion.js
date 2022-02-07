import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



const Accordion = ({ title, coinData }) => {
    const [toggled, setToggled] = useState(false); // controll accordion state accordion

    // logic on dynamic data switch case return specific information e.g. performace parameter

    const dummyData =  {
        subCategories: ['data1', 'data2', 'data3', 'data4',],
      }

    return (
        <View
        style={styles.container}
      >
                <TouchableOpacity
                key={dummyData.category}
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
                <View style={styles.card}>
                    <Text style={styles.heading}>{title}</Text>
                    {toggled === true && (  
                        <View style={styles.subCategoriesList}>
                        {dummyData.subCategories.map((subCategory) => (
                            <Text key={subCategory} style={styles.body}>
                            {subCategory}
                            </Text>
                        ))}
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 16,
        backgroundColor: "whitesmoke",
        padding: 16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      cardContainer: {
        marginTop: 0,
        borderColor:'blue',
        borderWidth: 2,
        width: '100%',
        padding:10,
        borderRadius: 5,
        backgroundColor: 'white'
      },
      card: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: -1,
      },
      body: {
        fontSize: 14,
        lineHeight: 20 * 1.5,
        textAlign: 'left',
      },
      subCategoriesList: {
        marginTop: 5,
      },
});

export default Accordion;