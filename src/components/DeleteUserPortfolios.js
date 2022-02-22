import React from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { COLORS, SCREEN } from "../../constants/theme"
import DeleteIcon from "../../assets/icons/delete.png"
import { TouchableOpacity } from "react-native-gesture-handler";

const DeleteUserPortfolios = ({ portfolio, handleDelete }) => {

    const handleDeletePortfolio = (value) =>{
        handleDelete(value)
    }

      // alert button to delete portfolio, pass delete true if deletion is confirmed
    const createDeleteAlertButton = () =>
      Alert.alert(
        "Delete Portfolio",
        "Are you sure you want to delete the portfolio? The data is lost after that!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "Delete", 
            onPress: () => {
              handleDeletePortfolio(true);
              console.log("OK Pressed")
            },
            style: "destructive"
          }
        ]
    );

    return(
    <View style={styles.containerItem}>
       
            <View style={{flex:0.8}}>
                <View style={{flex:0.5,}}>
                    <Text style={[styles.textSymbol, {fontSize:25, fontWeight: 'bold'}]}>${new Intl.NumberFormat('de-DE').format(portfolio.balance.toFixed(2))}</Text>
                </View>
                <View style={{flex:0.5, marginBottom:5, borderTopWidth: 2,borderColor:"grey"}}>
                    <Text style={[styles.textSymbol, {fontSize:16}]}>{portfolio.name}</Text>
                    <Text style={{paddingRight: 5,color: COLORS.onSurface,fontSize:14, fontStyle: 'italic', textAlign: 'right'}}>{portfolio.creationDate}</Text>         
                </View>
            </View>
            <View style={{flex:0.2, alignItems: 'flex-end',justifyContent: 'center', marginRight: 10}}>
                <TouchableOpacity 
                  onPress={()=>{createDeleteAlertButton();}}>
                    <Image source={DeleteIcon} style={styles.image} />
                </TouchableOpacity>
            </View>
    </View>
)
}
const styles = StyleSheet.create({
  containerItem: {
    marginTop:15,
    backgroundColor: COLORS.surface,
    marginHorizontal: 5,
    width: 0.9*SCREEN.width,
    height: 0.3*SCREEN.width,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 40,
    height: 40,
    tintColor: "red"
  },
  textSymbol: {
    padding:10,
    color: COLORS.onSurface,
  },
});

export default DeleteUserPortfolios;