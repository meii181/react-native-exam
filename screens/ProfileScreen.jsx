import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/UserActions';
import EditProfileScreen from './EditProfileScreen';


const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
            <Text style={styles.headingText}>Profile Page</Text>
            <Text style={styles.subText}>Here you can update your profile or log out.</Text>
            </View>

            <View style={styles.buttonArea}>
            <View style={styles.buttonEdit}>
            <Button color="#384E77" title="Edit Profile" onPress={() => navigation.navigate('EditProfileScreen')} component={EditProfileScreen} />
            </View>
            <View style={styles.buttonLogOut}>
            <Button color="#cd5c5c" title="Log out here" onPress={() => dispatch(logout())} />
            </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f1f2f4"
      },

      textContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
      },

    headingText: {
        color: "#20232a",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    subText: {
        color: "#20232a",
        fontSize: 15,
        marginBottom: 15
    },

    buttonArea: {
        flexDirection: 'row',
        width: "100%",
        height: 60,
        paddingBottom: 9,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonEdit: {
        marginRight: 15,
        marginLeft: 15
    },

    buttonLogOut: {
        marginRight: 15,
        marginLeft: 25
    }


})
export default ProfileScreen;