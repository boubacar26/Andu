import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from 'react'
import { wp } from '../helpers/common';
import Bouton from "./Bouton";
import { useRouter } from "expo-router";


const {width, height} = Dimensions.get('screen')

const SlideItem = ({item}) => {
    const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.sect1}>
          <Image
            style={styles.welcomeImage}
            resizeMode="contain"
            source={item.logo}
          />
        </View>
        <View style={styles.sect2}>
          <Image
            source={item.img}
          />
          <Text style={styles.texte}>
            {item.description}
          </Text>
        </View>
        <View style={styles.footer}>
          <Bouton title="Commencer" onPress={()=> router.push('otp')} />
        </View>
      </View>
    </View>
  );
}

export default SlideItem

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    height,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingHorizontal: wp(4),
    paddingTop: 10,
    // paddingBottom: 100
  },
  sect1: {
    // marginTop: "0%",
  },
  sect2: {
    marginTop: "-25%",
  },
  texte: {
    fontSize: "18px",
    color: "#009688",
    textAlign: "center",
  },
  footer: {
    width: "60%",
    marginTop: -55
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    textAlign: "center",
    color: "#009688",
  },
});