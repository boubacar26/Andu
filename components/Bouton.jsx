import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Loading from './Loading';


const Bouton = ({ 
    buttonStyle, 
    textStyle, 
    title='', 
    onPress = () => {}, 
    loading = false, 
    hasShadow = true
    }) => {

    const shadowStyle = {} ;

    if(loading){
      return(
        <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]} >
          <Loading/>
        </View>
      )
    }



  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]} >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default Bouton

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#009688",
    padding: "5%",
    borderRadius: "15px"

  },
  text:{
    color: "white",
    textAlign: 'center'
  }
});