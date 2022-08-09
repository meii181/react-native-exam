import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { add, addChatroom, deleteChatroom, fetchChatrooms, subtract, toggleHappy } from '../store/actions/ChatActions';

const Screen1 = ({ navigation }: { navigation: any }) => {
    const [text, onChangeText] = useState('');

    const dispatch = useDispatch();
    const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    console.log("chatrooms", chatrooms);

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.viewStyle}>
            <Text style={styles.Viewtext}>{item.title}</Text>
            <Button title="Delete this Chatroom" onPress={() => dispatch(deleteChatroom(item.id))} />
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Start a new discussion with your fellow colleagues!</Text>

            <TextInput placeholder="Chatroom name"
                style={styles.input}
                onChangeText={onChangeText}
                value={text} />

            <View style={styles.buttonStyle}>
            <Button color='#384E77' title='Add a Chat Room' onPress={() => dispatch(addChatroom(text))} />
            </View>

            <FlatList data={chatrooms} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#dcdcdc'
    },

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f1f2f4",
        marginTop: 30
    },

    textStyle: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold'

    },

    viewStyle: {
        backgroundColor: '#FFAF87',
        flex: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },

    Viewtext: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },

    buttonStyle: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default Screen1;