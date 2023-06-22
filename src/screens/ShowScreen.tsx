import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Context } from '../context/context'


const ShowScreen = () => {
  const {filename,setfilename} = useContext(Context)

  return (
    <View style={styles.container}> 
      <Image source={{ uri:`http://192.168.1.7:8080/images/${filename}`}} style={{width:300,height:200,alignSelf:'center'}}/>
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({
    container: {
      justifyContent:'center',
        flex: 1,
        backgroundColor: '#15141F'
      }
})