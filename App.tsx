import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNavigation from './src/navigation/TabNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux'
import { CartProvider } from './src/context/context';

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({})