import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

function ChatInput(props) {
    const [enteredChatRoom, setEnteredChatRoom] = useState('');

function chatInputHandler(enteredText) {
    setEnteredChatRoom(enteredText);
}

function addChatRoom() {
    props.onAddChat(enteredChatRoom);
    setEnteredChatRoom('');
}

// returning a code which is responsible of returning one single chatRoom

return (
<View style={styles.inputContainer}>
        <Text style={styles.textStyle}>Start a new discussion with your fellow colleagues!</Text>

            <TextInput placeholder="Chatroom name"
                style={styles.input}
                onChangeText={chatInputHandler}
                value={enteredChatRoom} />

<View style={styles.buttonStyle}>
            <Button color='#384E77' title='Add a Chat Room' onPress={addChatRoom} />
            </View>
        </View>
);
}

const styles = StyleSheet.create ({

    textStyle: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold'

    },

    input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#dcdcdc'
    },

    
    buttonStyle: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default ChatInput;
