import React, { useState} from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image } from "react-native";
import { COLORS, SCREEN } from "../../constants/theme"
import AddIcon from "../../assets/icons/addButton.png"
import { USERPORTFOLIO} from "../../constants/dummyData"
import UserPortfolios from "../components/UserPortfolios";
import DeleteUserPortfolios from "../components/DeleteUserPortfolios";
import CloseIcon from "../../assets/icons/close.png"
import RemoveIcon from "../../assets/icons/removeButton.png"
import Header from"../components/Header";


const PortfolioScreen = ({ navigation }) => {
    // check for delete toggled
    const [deleteToggled, setDeleteToggled] = useState(false)
    // delete porfolio
    const [deletePortfolio, setDeletePortfolio] = useState(false)

    // handle delete of portfolio from child value
    const handleDeletePortfolio = (value) =>{
        setDeletePortfolio(value)
        console.log(deletePortfolio)
    }

    const handleListRender = ({item}) => {
        // true = show modified list with delete icon
        if (deleteToggled){
            return (
                <DeleteUserPortfolios portfolio={item} handleDelete={handleDeletePortfolio} />
              );
        // false = rerender normal styled list of portfolios
        } else {
            return (
                <UserPortfolios portfolio={item}/>
              );
        }
      };

    //        <Text style={styles.title}>Portfolio</Text>

      
  return(
    <SafeAreaView style={styles.container}>
        <Header title="Portfolio"/>
        <View style={styles.subHeaderContainer}>
                <Text style={{flex:1,fontSize: 16, fontWeight:'bold',padding:5, color: COLORS.onSurface}}>Your Portfolios</Text>
                { deleteToggled && 
                <TouchableOpacity 
                    style={{borderWidth:1, borderColor:COLORS.onSurface, marginHorizontal:15, borderRadius: 5}}
                    onPress={()=> setDeleteToggled(false)}>
                    <Image source={CloseIcon} style={{width: 30, height: 30, tintColor:COLORS.onSurface}} />
                </TouchableOpacity> 
                }
        </View>
        <FlatList
                style={styles.list}
                data={USERPORTFOLIO}
                keyExtractor={USERPORTFOLIO.name}
                showsVerticalScrollIndicator={false}
                renderItem={handleListRender}
        />
        <View style={{marginTop:15, flex:0.15, flexDirection: 'row',  marginBottom:15,justifyContent: 'center', alignItems:'center', width: 0.9*SCREEN.width }}>
            <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("NewPortfolio")} 
                    >
                    <Image source={AddIcon} style={styles.image} />
                    <Text style={{color:'white', fontSize: 14, fontWeight: 'bold'}}>Add</Text>

                </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>setDeleteToggled(true)}
            >
                <Image source={RemoveIcon} style={styles.image} />
                <Text style={{color:'white', fontSize: 14, fontWeight: 'bold'}}>Remove</Text>

            </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:COLORS.background,
    alignItems: "center",
    width: SCREEN.width,
    flex:1
  },
  subHeaderContainer:{
    backgroundColor: COLORS.surface,
    width: 0.9*SCREEN.width,
    borderRadius:5,
    flex:0.1, 
    flexDirection: "row",
    justifyContent: 'center', 
    alignItems:'center',
    marginBottom: 10
  },
  button:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginHorizontal: 10,
    height: 40,
    backgroundColor: COLORS.surface,
    borderColor: 'blue',
    borderWidth:2,
    borderRadius: 5,
  },
  image: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    tintColor: COLORS.onSurface
  },
   list: {
    flex:1,
    padding: 5,
  },

})

export default PortfolioScreen;