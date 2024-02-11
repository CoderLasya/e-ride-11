import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleLogin = (email, password) => {
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then(() => {
            this.props.navigation.navigate("RideScreen")
        })
        .catch(error => {
            alert(error.message)
        })
    }

    render(){
        return(
        <View>
            <TouchableOpacity style={[styles.button,]} onPress={() => this.handleLogin(email,password)}>
            <Text style={styles.buttonText}>Login Screen</Text>
            </TouchableOpacity>
        </View>
        )
    }
}