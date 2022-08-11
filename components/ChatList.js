import { StyleSheet, View, Text } from 'react-native';

function ChatList(props) {
    return(
        <View style={styles.chatroomContainer}>
          <Text style={styles.chatRoomText}>{props.text}</Text>
          <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create ({
    
    chatroomContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    chatRoomText: {
        color: "#000000",
        fontWeight: 'bold',
        fontSize: 15,
        paddingHorizontal: 20, //for left and right
        paddingVertical: 25,
        alignSelf: 'flex-start'

    },

    line: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
    },
})

export default ChatList;

