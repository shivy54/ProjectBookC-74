import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
} from "react-native";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

  login = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("DonateBooks");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return
     <View style={styles.container}>
         <View style={{justifyContent: 'center',alignItems: 'center'}}>
         <View style={{justifyContent:'center', alignItems:'center'}}>
          
          <Text style={styles.title}>Bedtime Stories</Text>
        </View>
        
        <TextInput
            style={styles.loginBox}
            placeholder="Email Id please"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
          <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="Password Please"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.login(this.state.emailId, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>


         </View>

    </View>;
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F8BE85",
      alignItems: "center",
      justifyContent: "center",
    },
    profileContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 65,
      fontWeight: "300",
      paddingBottom: 30,
      color: "#ff3d00",
    },
    loginBox: {
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor: "#ff8a65",
      fontSize: 20,
      margin: 10,
      paddingLeft: 10,
    },
    
    
    
    
    
    
  
    button: {
      width: 300,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      backgroundColor: "#ff9800",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16,
      padding: 10,
    },
    buttonText: {
      color: "#ffff",
      fontWeight: "200",
      fontSize: 20,
    },
  });
  