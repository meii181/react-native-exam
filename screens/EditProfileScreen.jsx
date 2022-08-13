import { View, Text, Pressable, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import Input from '../components/Input'
import { useState } from 'react';

const EditProfileScreen = ({navigation}) => {

    const username = useSelector(state => state.user.email);
    const [validUsername, setValidUsername] = useState(username !== '');

    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>Your Email address</Text>
            <Text style={styles.subText}>{username}</Text>
            <Input
                label="New Email"
                inputValue="Please enter an email address"
                error="Email cannot be empty."
                valid={validUsername}
                setValid={setValidUsername}
            />
            <Pressable onPress={() => navigation.navigate('HomePage')}>
                <Text>Update</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f1f2f4"
      },
    headingtext: {
        color: "#20232a",
        fontSize: 20,
        fontWeight: 'bold'
    },
    subText: {
        color: "#20232a",
        fontSize: 15,
        fontStyle: "italic",
        paddingBottom: 8,
    }
})

export default EditProfileScreen
