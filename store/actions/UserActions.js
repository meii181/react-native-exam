import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';
export const RESTORE_USER = 'RESTORE_USER';

export const logout = () => {
    SecureStore.deleteItemAsync('email');
    SecureStore.deleteItemAsync('token');
    return { type: LOGOUT }
}


export const restoreUser = (email, token) => {
    return { type: RESTORE_USER, payload: { email, idToken: token } };
};


export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4WoyzG6c3m3g4CZlXULVVz3Znn1chHIk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email: email,
                password: password,
                returnSecureToken: true
            })
        });


        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            Alert.alert("There was a issue with signing in ")
        } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken);
            dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken } })
        }
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4WoyzG6c3m3g4CZlXULVVz3Znn1chHIk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email: email,
                password: password,
                returnSecureToken: true
            })
        });


        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            Alert.alert("There was a issue with logging in ")
        } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken);
            dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken } })
        }
    };
}
