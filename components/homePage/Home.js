import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Dimensions, Image,Alert, TouchableOpacity } from "react-native";
import Post from "../Post";
import books_data from "../books_data.json"
import { Icon } from '@rneui/themed';

function Home() {
  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.header}>
      <Text style={styles.header_text}>My Books</Text>
      <Image style={styles.img} source={{ uri: "https://avatars.githubusercontent.com/u/64087736?s=400&u=98654b9aa3d19ba6cd3ed9cb457ca014316f741e&v=4" }}/>
      </View>
      <FlatList
      data= {books_data}
      renderItem={({item})=> <Post books={item} />}>
      </FlatList>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => Alert.alert("Kitap Seçin ")}
      >
        <Text style={styles.buttonAdda}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    all: {
      flex: 5,
      backgroundColor:"#f7eae1",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonAdda:{
      fontSize:40,
      fontWeight:"bold",
    },
    buttonAdd:{
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      backgroundColor:"gray",
      width: Dimensions.get("window").width / 1.01,
      alignItems:"center"
    },
    header_text:{
      
      fontSize:33,
      fontWeight:"bold",
      marginTop:20,
      margin:15,
    },
    header:{
      backgroundColor:"#ff8533",
      alignItems:"center",
      width: Dimensions.get("window").width / 1,
      flexDirection:"row",
      justifyContent:"flex-end"

    },
    img:{
      height:50,
      width:50,
      marginRight: 20,
      marginLeft:35,
      borderRadius:50,
      marginTop:18,
    },
})

export default Home
