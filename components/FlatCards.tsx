/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardOne]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    fontFamily:'roboto'
  },
  container:{
    flex:1,
    flexDirection:'row',
    padding:12,
  },
  card:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:100,
    borderRadius:4,
    margin:8
  },
  cardOne:{
    backgroundColor:'red'
  },
  cardTwo:{
    backgroundColor:'green'
  },
  cardThree:{
    backgroundColor:'blue'
  },
})