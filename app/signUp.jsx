import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
import { wp } from "../helpers/common";
import Input from "../components/Input";
import Bouton from "../components/Bouton";

const SignUp = () => {
      const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton router={router} />

        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_vert.png")} />
        </View>
        <Text style={styles.text}>Créer un compte</Text>
        <View>
          <Input placeholder="Nom complet" />
          <Input placeholder="Adresse mail" />
          <Input placeholder="Numero de Téléphone" />
          <Input placeholder="Mot de passe" />
          <Input placeholder="Confirmer votre mot de passe" />
        </View>
        {/* <View style={styles.forgotpsw}>
          <Text>Mot de passe oublié ?</Text>
        </View> */}
        <View>
          <Bouton title="Creer un compte" style={styles.btn} />
          <View style={styles.forgotpsw}>
            <Text>Déja inscrit ? </Text><Pressable onPress={() => router.push("login")}><Text style={styles.login} > Se connecter </Text></Pressable>
          </View>
          {/* <Bouton title="S'inscrire" style={styles.btn} /> */}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5
  },
  btn: {
    textTransform: "uppercase",
    fontWeight: "bold",
    // padding: '40%'
  },
  login: {
    color: "#009688",
    fontWeight: 'bold'
  },
});
