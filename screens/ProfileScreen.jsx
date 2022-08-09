import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/UserActions';
import EditProfileScreen from './EditProfileScreen';


const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>This is your Profile page</Text>
            <Text style={styles.subText}>You can either edit your Profile or log out</Text>
            <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfileScreen')} component={EditProfileScreen} />
            <Button title="Logout" onPress={() => dispatch(logout())} />
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
export default ProfileScreen;