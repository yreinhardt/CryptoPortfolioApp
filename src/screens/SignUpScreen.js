import React, {useState} from "react";
import { TextInput, KeyboardAvoidingView, View, TouchableOpacity, StyleSheet, Text, SafeAreaView, Image } from "react-native";
import { COLORS, SCREEN } from "../../constants/theme"
import LogoIcon from "../../assets/icons/logo_cryptolio.png"


/*
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

const CLIENT_ID = process.CLIENT_ID

GoogleSignin.configure({
  webClientId: CLIENT_ID,
});
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
     />
*/


const SignUpScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return(
    <SafeAreaView style={styles.container}>
      <View style={{flex:0.4, width: SCREEN.width,backgroundColor: COLORS.background, justifyContent: "center", alignItems:"center"}}>
        <Image source={LogoIcon} style={{height: 95, width: 350, marginHorizontal:20}}/>
      </View>
      <KeyboardAvoidingView  behavior="padding" style={{flex:0.6,width: SCREEN.width, backgroundColor: COLORS.surface,
            borderTopLeftRadius: 30, borderTopRightRadius: 30, justifyContent: "center", alignItems:"center"}}>
        <View style={{flex:1,marginTop: 5, width: 0.9*SCREEN.width}}>
          <Text style={{color:"white", fontSize: 28 ,fontWeight: "bold"}}>Sign up now!</Text>
          <View style={{marginTop: 10, flexDirection: "column", justifyContent: "flex-start", alignItems:"flex-start",}}>
            <Text style={{color:"white", fontSize: 14, marginTop: 5}}>- Create multiple Portfolios for free</Text>
            <Text style={{color:"white", fontSize: 14, marginTop: 5}}>- Profit/Loss tracking</Text>
            <Text style={{color:"white", fontSize: 14, marginTop: 5}}>- Data visualization</Text>
          </View>
        </View>
        <View style={{flex:1,justifyContent: "center", alignItems:"flex-start",marginVertical:10}}>
          <Text style={{color:"white",  fontWeight: "bold",}}>Email</Text>
          <TextInput 
            placeholder="Your Email" 
            style={styles.input} 
            value = {email} 
            onChangeText={text => setEmail(text)}
            />
          <Text style={{color:"white", fontWeight: "bold", marginTop:10,}}>Password</Text>
          <TextInput 
            placeholder="Your Password"
            secureTextEntry 
            style={styles.input} 
            value = {password} 
            onChangeText={text => setPassword(text)}
            />
          <Text style={{color:"white", fontWeight: "bold", marginTop:10,}}>Confirm Password</Text>
          <TextInput 
            placeholder="Your Password"
            secureTextEntry 
            style={styles.input} 
            value = {password} 
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={{flex:0.8,justifyContent: "center", alignItems:"flex-start"}}>
          <TouchableOpacity style={[styles.button]} onPress={() => {}}>
            <Text style={{color: COLORS.onSurface}}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    backgroundColor: 'white',
    width: 0.9*SCREEN.width,
    marginTop:2,
    height:40,
    padding:5,
    borderRadius: 5,
  },
  button:{
    backgroundColor: COLORS.surface,
    width: 0.9*SCREEN.width,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    height:50,
    shadowColor: 'yellow',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 10 ,
    shadowOffset : { width: 1, height: 1},

  },
  image: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    tintColor: "blue"
  },
})

export default SignUpScreen;