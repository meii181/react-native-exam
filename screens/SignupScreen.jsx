import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { signup } from './../store/actions/UserActions'
import * as SecureStore from 'expo-secure-store';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    async function load() {
        let emailFromSecureStore = await SecureStore.getItemAsync('email');
        let tokenFromSecureStore = await SecureStore.getItemAsync('token');
        if (emailFromSecureStore && tokenFromSecureStore) {
            console.log("success", emailFromSecureStore);

        } else {
            console.log("failure");
        }
    }

    useEffect(() => {
        load(); // uncomment to read from secure store
    }, [])


    return (

        <View style={styles.ViewStyle}>
            <View style={styles.loginStyle}>

            <Text style={styles.welcomeText}>
                Welcome, please log into your account or create a new account.
            </Text>

            <TextInput placeholder='Email'
                onChangeText={setEmail}
                value={email} 
                style={styles.loginText}/>

            <TextInput placeholder='Password'
                onChangeText={setPassword}
                value={password} 
                secureTextEntry={true}
                style={styles.loginText}/>
                </View>
                

            <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonStyle} onPress={() => dispatch(signup(email, password))}>
            <Text style={styles.text}>Signup</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text}>Login</Text>
            </Pressable> 
            </View>
            </View>
        
    );
}

const styles = StyleSheet.create({

    ViewStyle: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f1f2f4"
    },

    loginStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },

    welcomeText: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 25,
        fontSize: 18
    },

    loginText: {
        width: "80%",
        height: 40,
        paddingLeft: 8,
        backgroundColor: "#dcdcdc",
        marginBottom: 10,
        fontWeight: 'bold'
        
    }, 

    buttonContainer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonStyle: {
        backgroundColor: "#384E77",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginLeft: 15,
        marginRight: 15
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})

export default SignupScreen;