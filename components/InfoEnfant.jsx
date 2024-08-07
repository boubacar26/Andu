import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenWrapper from './ScreenWrapper'

const InfoEnfant = () => {
  return (
    <ScreenWrapper>
        <View>
            <Text style={styles.texte1}>Prenom et Nom</Text>
            <Text>Mamadou Diop</Text>
        </View>
        <View>
            <Text>Date et Lieu de Naissance</Text>
            <Text>09-04-1998 à Mbao</Text>
        </View>
        <View>
            <Text>Nom du Tuteur</Text>
            <Text>Abdou Diop</Text>
        </View>
        <View>
            <Text>Niveau</Text>
            <Text>CM2</Text>
        </View>
        <View>
            <Text>Adresse</Text>
            <Text>Grand Mbao</Text>
        </View>
        <View>
            <Text>Telephone</Text>
            <Text>77 200 00 00</Text>
        </View>
    </ScreenWrapper>
  )
}

export default InfoEnfant

const styles = StyleSheet.create({
    texte1:{
        fontSize: 20
    }
})
