import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import BackButton from '../components/BackButton'
import { router } from 'expo-router'
import { wp, hp } from "../helpers/common";
import Input from '../components/Input'
import Bouton from '../components/Bouton'

const Login = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton router={router} />

        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_vert.png")} />
        </View>
        <Text style={styles.text}>Connectez-vous</Text>
        <View>
          <Input placeholder="Adresse mail" />
          <Input placeholder="Mot de passe" />
        </View>
        <View style={styles.forgotpsw}>
          <Text>Mot de passe oublié ?</Text>
        </View>
        <View>
          <Bouton title="Se connecter" style={styles.btn} />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
    alignItems: "center",
  },
  logo: {
    width: 25,
    // height: "10%",
    alignItems: "center",

    // marginBottom: 25
  },
  text: {
    // marginTop: '15px',
    fontSize: 30,
    color: "#009688",
  },
  forgotpsw:{
    textAlign:'right'
  },
  btn:{
    textTransform:'uppercase',
    fontWeight: 'bold'
  }
});