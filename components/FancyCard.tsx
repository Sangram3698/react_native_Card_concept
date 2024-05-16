/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Food</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
          uri:'https://media.istockphoto.com/id/1339294256/photo/closeup-of-chowmein-on-black-pan-with-selective-focus-in-a-street-food-stall.jpg?s=612x612&w=0&k=20&c=I4f_LyekXsRb-sAr-4HbGxdp3dnzAzT-yaj0xgto8xI='
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Chowmin</Text>
          <Text style={styles.cardLabel}>Popular street food in Nepal and Asian countries.</Text>
          <Text style={styles.cardDescription}>
          Chow mein is a stir-fried Chinese dish featuring savory egg noodles, crisp vegetables, and optional protein, all bound together with a flavorful sauce. It comes in crispy or soft variations, offering a delightful combination of textures and umami flavors.
          </Text>
          <Text style={styles.cardFooter}>New Khaja Ghar--Kapilvastu</Text>
        </View>
      </View>
      <Text style={styles.headingText}>Trending Food</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
          uri:'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9tb3xlbnwwfHwwfHx8MA%3D%3D'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>MoMo</Text>
          <Text style={styles.cardLabel}>Popular street food in Nepal.</Text>
          <Text style={styles.cardDescription}>
          Momo are steamed dumplings popular in Nepal and Tibet, filled with savory meat or vegetables and dipped in a spicy sauce.They resemble soup dumplings but are thicker and more filling, offering a comforting and flavorful bite.
          </Text>
          <Text style={styles.cardFooter}>New Khaja Ghar--Kapilvastu</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    padding:8,
  },
  card:{
    height:350,
    width:350,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  cardElevated:{
     backgroundColor:'white',
     elevation:4,
     shadowOffset:{
      width:2,
      height:2,
     }
  },
  cardImage:{
    height:180,
    marginBottom:7,
    borderTopLeftRadius:6,
    borderTopRightRadius:6,

  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:8,

  },
  cardTitle:{
    color:'black',
    fontSize:18,
    fontWeight:'bold',
    marginBottom:4
  },
  cardLabel:{
    color:'black',
    fontSize:12,
    marginBottom:6,
    fontStyle:"italic",
    fontWeight:'bold'
  },
  cardDescription:{
    color:'black',
    fontSize:12,
    marginBottom:12,
    marginTop:6,
    flexShrink:1
  },
  cardFooter:{
    color:'black',
    fontWeight:'bold'
  }
})