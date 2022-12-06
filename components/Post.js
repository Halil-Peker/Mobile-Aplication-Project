import React from "react";
import { View, Text, TouchableOpacity, Alert, Image, FlatList } from "react-native";
import styles from "./Post.Style";
import Books from "./booksContet/Books";
import books_data from "./books_data.json"
// import { Icon } from '@rneui/themed';

const Post = ({ books }) => {
  // console.log(props)
  return (
    <View style={styles.container}>
      <View style={styles.descriptionBody}>
        <Text style={styles.title}>{books.title}</Text>
        <Text style={styles.text}>{books.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.button_container}
        onPress={() => Alert.alert("Teşekkür Ederim " + books.who)}
      >
        <Image style={styles.img} source={{ uri: books.bookİmage }} />
        <Text style={styles.button_name}>{books.booksName}</Text>
        <Text style={styles.button_title}>OKU</Text>
      {/* <FlatList
      data= {books_data}
      renderItem={({item})=> <Books books={item} />}>
      </FlatList> */}
      </TouchableOpacity>
      {/* <Icon name='heartbeat' type='font-awesome'color='#f50' /> */}
      <Text style={styles.who}>{books.who}</Text>
    </View>
  );
};

export default Post;
