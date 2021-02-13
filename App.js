import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>SIGN UP PAGE</Text>
      <TextInput style={styles.input}  placeholder={"name"} />
      <TextInput style={styles.input} placeholder={"email"} />
      <TextInput style={styles.input} placeholder={"password"} />
      <TouchableOpacity   style={styles.btn}> 
      <Text style={styles.btnText}>Submit</Text>
      
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:100,
  },


  Heading:{
         color: "blue",
         fontSize: 25,
  },

  input:{
    height: 50,
    width:180,
     borderColor: 'gray', 
     borderWidth: 1,
     marginTop:20,
     borderRadius:25,
     paddingLeft:10,
  },

btn:{
  height: 50,
  width:180, 
  marginTop:20,
  backgroundColor:"green",
  borderRadius:25,
},
btnText:{
     
      alignItems:'center',
      justifyContent: 'center',
      color:"white",
      fontSize:20,
      marginLeft:58,
      marginTop:8,

}





});
