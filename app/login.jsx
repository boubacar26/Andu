import { Image, StyleSheet, Text, TextInput, View , Pressable} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { wp, hp } from "../helpers/common";
import Input from '../components/Input'
import Bouton from '../components/Bouton'

const Login = () => {
  const router = useRouter();

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
            <Pressable onPress={() => router.push("forgotPassword")}><Text style={styles.login} > Mot de passe oublié ? </Text></Pressable>
          </View>
        <View>
          <Bouton title="Se connecter" style={styles.btn} />
          <Bouton title="S'inscrire" onPress={()=> router.push('signUp')} style={styles.btn} />
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
  forgotpsw: {
    // textAlign: "right",
    display: "flex",
    // flexDirection: "row",
    justifyContent: "flex-end",
    // marginTop: 5,
  },
  btn: {
    textTransform: "uppercase",
    fontWeight: "bold",
    // padding: '40%'
  },
});