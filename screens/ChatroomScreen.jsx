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
            // and if chat.id is not equal to receiving id.

            // if there's match, if it has the looking id to remove, it will turn false, 
            // which means the item will drop and a new array will no longer be continued
            
            // this currentchat is an array, will create a new array,
            // it will take a function which will return it as false or true

            // if it's true, it will be kept, if it's false, it will be dropped.
        }); 
        
        //for updating the state, and it must be based on the old state, where it will take
        // from the old state and remove, therefore I will pass a function to this updating state
        
        // => - returning the updated state
        
        // it will be a better solution to receive the deleting item's id, because
        // this allows to uniquely identify the item and delete it
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
