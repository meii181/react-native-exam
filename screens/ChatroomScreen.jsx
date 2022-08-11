import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ChatInput from '../components/ChatInput';
import ChatList from '../components/ChatList';
// import { RootState } from '../App';

export default function ChatroomScreen({ navigation: { navigate }}) {

    const [chatRoom, setChatRoom] = useState([]);

    function addChatRoom(enteredChatRoom) {
        setChatRoom(currentChatRoom => [
            ...currentChatRoom,
            { text: enteredChatRoom, key: Math.random().toString() },
        ]);
    }
   
    return (
        <View style={styles.container}>
            <ChatInput onAddChat={addChatRoom} />
            {/* <View style={styles.line} /> */}

            <View style={styles.chatroomContainer}>
            <FlatList 
            data={chatRoom}
            renderItem={(itemData) => {
                return <ChatList text={itemData.item.text} />;
            }} 
            />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f1f2f4",
        marginTop: 30
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

   

});
