import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { restoreUser, login } from './../store/actions/UserActions'
import * as SecureStore from 'expo-secure-store';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    async function load() {
        let emailFromSecureStore = await SecureStore.getItemAsync('email');
        let tokenFromSecureStore = await SecureStore.getItemAsync('token');
        if (emailFromSecureStore && tokenFromSecureStore) {
            console.log("success", emailFromSecureStore);

            dispatch(restoreUser(emailFromSecureStore, tokenFromSecureStore));

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
                <Text style={styles.textLogin}>
                    Here you can login if you already have an account.
                </Text>
            <TextInput placeholder='Email'
                onChangeText={setEmail}
                value={email} 
                style={styles.loginText}/>

            <TextInput placeholder='Password'
                onChangeText={setPassword}
                value={password} 
                style={styles.loginText}/>
                </View>

            <Pressable style={styles.buttonStyle} onPress={() => dispatch(login(email, password))}>
            <Text style={styles.text}>Login</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    ViewStyle: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f1f2f4",
    },

    loginStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },

    textLogin: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 25
    },


    loginText: {
        width: "80%",
        backgroundColor: "#dcdcdc",
        paddingLeft: 8,
        marginBottom: 10,
        height: 40,
        fontWeight: 'bold'
    },

    buttonStyle: {
        backgroundColor: "#384E77",
        paddingVertical: 12,
        paddingHorizontal: 34,
        borderRadius: 4,
        elevation: 3,
        marginTop: 20,
        width: '30%',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})
export default LoginScreen;

