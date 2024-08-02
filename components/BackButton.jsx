import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'

const BackButton = ({size = 26, router}) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.btn}>
        <Icon name='arrowLeft' strokeWidth={2.5} size={size} color='black' />  
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  btn:{
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: '5px',
    backgroundColor: 'rgba(0,0,0,0.07)'
  }
})