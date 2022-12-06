import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        margin: 6,
        borderWidth:1,
        borderColor:"gray",
        backgroundColor:"white",
        borderRadius:10,
        // height: Dimensions.get("window").height / 2.2,
        width: Dimensions.get("window").width / 1.04
        
    },

    descriptionBody:{
        paddingRight:10,
        paddingLeft:10,
    },
    
    title:{
        marginTop:30,
        marginBottom:20,
        margin:10,
        fontSize:20,
        fontWeight:"bold",
    },

    who:{
        fontSize:17,
        fontWeight:"bold",
        fontStyle:"italic",
        textAlign:"right",
        margin:10,
    },

    text:{
        fontSize:18,
        margin:10,
        marginTop:3,
    },
    
    button_container:{
        backgroundColor:"brown",
        
        padding:3,
        margin:10,
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:"row",
        borderRadius:10,
    },

    img:{
        width:55,
        height:80,
        borderRadius:3,
    },
    button_name:{
        width:100,
        fontSize:17,
        fontWeight:"bold"
    },

    button_title:{
        fontSize:18,
        fontWeight:"bold",
        color:"white",
        margin:10,
        padding:20,
        backgroundColor:"#ffa366",
        borderRadius:10,
    }
    
})