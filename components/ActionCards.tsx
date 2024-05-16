/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,Linking, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
  function openWebsite(websiteLink:string){
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Whats Pani Puri?
          </Text>
        </View>
      <Image
      source={{
        uri:'https://media.istockphoto.com/id/1177589252/photo/famous-indian-street-food-gol-gappa-puchka-and-pani-puri.webp?b=1&s=170667a&w=0&k=20&c=DikPawXNEC4PnDzRxkGkPbq9pJnG-bF77y3TMFZPR-w='

      }}
      style={styles.imageContainer}
      />
      <View style={styles.bodyContainer}>
        <Text numberOfLines={3}>
        Pani puri is a delightful explosion of flavor in every bite. Crispy, hollow shells filled with spiced potato mash are dipped in a tangy, minty flavored water. Sweet and savory chutneys add another layer of taste, making this popular Indian street food an irresistible treat.
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
        onPress={()=>openWebsite('https://deliciouslyurs.com/food-stories/pani-puri-the-famous-indian-street-food/')}
        >
          <Text style={styles.socialLinks}>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>openWebsite('https://www.facebook.com/profile.php?id=61557122377001')}
        >
          <Text style={styles.socialLinks}>Follow Me</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,

  },
  card:{
    height:350,
    width:350,
    borderRadius:8,
    marginHorizontal:16,
    marginVertical:14,
  },
  elevatedCard:{
    backgroundColor:'#32012F',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:'#333',
    shadowOpacity:0.6
  },
  headingContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    color:'white',
    fontSize:16,
    fontWeight:'600'
  },
  imageContainer:{
    height:180
  },
  bodyContainer:{
    padding:10
  },
  footerContainer:{
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  socialLinks:{
    fontSize:14,
    color:'blue',
    backgroundColor:'white',
    borderRadius:4,
    paddingHorizontal:20,
    paddingVertical:6,
    
  }
}) 