import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Icon from '../assets/icons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import {useRouter} from 'expo-router'

const SignUp = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <StatusBar style='dark'/>
      <BackButton router={router} />
    </ScreenWrapper>
  );
}

export default SignUp;

const styles = StyleSheet.create({})