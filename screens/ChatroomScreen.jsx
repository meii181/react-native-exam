import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ChatInput from '../components/ChatInput';
import ChatList from '../components/ChatList';
// import { RootState } from '../App';

export default function ChatroomScreen({ navigation: { navigate }}) {

    const [chatRoom, setChatRoom] = useState([]);

    function addChatRoom(enteredChatRoom) {
        setChatRoom(currentChatRoom => [
            ...currentChatRoom,
            { text: enteredChatRoom, id: Math.random().toString() },
        ]);
    }

    function deleteChatRoom(id){
        setChatRoom(currentChatRoom => {
            return currentChatRoom.filter((chat) => chat.id !== id); // to check if chat has the id, 
            
        }); 
    }
   
    return (
        <View style={styles.container}>
            <ChatInput onAddChat={addChatRoom} /> 
            {/* <View style={styles.line} /> */}

            <View style={styles.chatroomContainer}>
            <FlatList 
            data={chatRoom}
            renderItem={(itemData) => {
                return <ChatList text={itemData.item.text}
                id={itemData.item.id}
                onDeleteChat={deleteChatRoom}/>;
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
