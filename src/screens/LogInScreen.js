import React, {useState} from "react";
import { TextInput, KeyboardAvoidingView, View, TouchableOpacity, StyleSheet, Text } from "react-native";


import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

const CLIENT_ID = process.CLIENT_ID

GoogleSignin.configure({
  webClientId: CLIENT_ID,
});


const LogInScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return(


    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Email" 
          style={styles.input} 
          value = {email} 
          onChangeText={text => setEmail(text)}/>
        <TextInput 
          placeholder="Password"
          secureTextEntry 
          style={styles.input} 
          value = {password} 
          onChangeText={text => setPassword(text)}/>
      </View>

      <View style={styles.buttonContainer}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
     />

        <TouchableOpacity style={[styles.button]} onPress={() => {}}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={() => {}}>
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5' // smokewhite
  },
  inputContainer:{
    width: '80%',
  },
  input:{
    backgroundColor: 'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius: 5,
    marginTop:5
  },
  buttonContainer:{
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button:{
    backgroundColor: "blue",
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'

  },
  buttonGoogle:{
    backgroundColor: "green",
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom:5,

  },
  buttonOutline:{
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 2
  },
  buttonOutlineText:{
    color: 'blue',
    fontWeight: '700',
    fontSize: 16
  },
  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }
})

export default LogInScreen;