import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddScreen from '../screens/AddScreen';
import ShowScreen from '../screens/ShowScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#15141F',
          borderTopWidth: 0,
          height: '10%',
          paddingTop: 15
        }
      }}>
        <Tab.Screen name='AddScreen' component={AddScreen} options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons name='ios-home-sharp' size={30} color={focused?'#FF8F71':'#3C3D45'} />
            )
          }
        }} />
        <Tab.Screen name='ShowScreen' component={ShowScreen} options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons name='play-circle' size={35} color={focused?'#FF8F71':'#3C3D45'} />
            )
          }
        }} />
      </Tab.Navigator>
    )
  }
  
  export default TabNavigation
  
  const styles = StyleSheet.create({})