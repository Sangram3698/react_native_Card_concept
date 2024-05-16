/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.elevated1]}>
          <Text>
            Tap
          </Text>
        </View>
        <View style={[styles.card,styles.elevated1]}>
          <Text>
            me
          </Text>
        </View>
        <View style={[styles.card,styles.elevated1]}>
          <Text>
            to
          </Text>
        </View>
        <View style={[styles.card,styles.elevated1]}>
          <Text>
            Scroll
          </Text>
        </View>
        <View style={[styles.card,styles.elevated1]}>
          <Text>
            More
          </Text>
        </View>
        <View style={[styles.card,styles.elevated1]}>
          <Text>
            More...
          </Text>
        </View>
        <View style={[styles.card,styles.elevated1]}>
          <Text>
            😂
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:24,
    fontWeight:'bold',
    padding:10,
    fontFamily:'roboto'

  },
  container:{
    padding:8
  },
  card:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:100,
    borderRadius:6,
    margin:4

  },
  elevated1:{
    backgroundColor:'#4D869C',
    elevation:4,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:'#FFFAE6',
    shadowOpacity:1,
    shadowRadius:4
  }
})