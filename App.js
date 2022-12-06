import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Dimensions, Image } from "react-native";
// import Post from "./components/Post";
import books_data from "./components/books_data.json"
import Home from "./components/homePage/Home"
import Post from "./components/Post";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App() {
  return (
    <SafeAreaView style={styles.all}>
    <Home/>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 5,
  },
})

export default App;
