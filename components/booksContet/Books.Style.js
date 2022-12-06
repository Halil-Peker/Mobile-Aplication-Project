import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    
    all:{
        flex:1,
        backgroundColor:"#f7eae1"
    },
    container:{
        flexDirection:"row",
        margin: 6,
        borderColor:"gray",
        backgroundColor:"white",
        borderRadius:10,
        // height: Dimensions.get("window").height / 2.2,
        width: Dimensions.get("window").width / 1.04,
        padding:30,        
        
    },

    img:{
        width: Dimensions.get("window").width / 3,
        height: Dimensions.get("window").height / 4,
        borderRadius:10,
        


    },

    bookName:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        padding:30,
        paddingLeft:45,

    },
    authorName:{
        fontSize:24,
        textAlign:"center",
        paddingLeft:30,


    },
    
    container2:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        flexDirection:"row",
        margin: 6,
        borderColor:"gray",
        backgroundColor:"white",
        borderRadius:10,
        // height: Dimensions.get("window").height / 2.2,
        width: Dimensions.get("window").width / 1.04,
        padding:30,        
        
    },
    container3:{
        flexDirection:"row",
        margin: 6,
        fontSize:17,
        borderColor:"gray",
        backgroundColor:"white",
        borderRadius:10,
        // height: Dimensions.get("window").height / 2.2,
        width: Dimensions.get("window").width / 1.04,
        padding:30,        
        
    },
    
})