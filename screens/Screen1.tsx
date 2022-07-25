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
            <Text>Start a new discussion with your fellow colleagues!</Text>

            <TextInput placeholder="Chatroom name"
                style={styles.input}
                onChangeText={onChangeText}
                value={text} />

            <Button title='Add Chatroom' onPress={() => dispatch(addChatroom(text))} />

            <FlatList data={chatrooms} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f1f2f4"
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
    }

});

export default Screen1;