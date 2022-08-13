import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

const Input = props => {
    const [text, setText] = useState(props.inputValue)

    const [entered, setEntered] = useState(false);

    const handleChangeText = (text) => {
        setEntered(true);
        setText(text);
        if (text === '') {
            props.setValid(false);
        } else {
            props.setValid(true);
        }
    }
    const handleOnBlur = () => {
        setEntered(true);
    }

    return (
        <View style={styles.editProfile}>
            <Text>{props.label}</Text>
            <TextInput value={text} onChangeText={handleChangeText} onBlur={handleOnBlur} />
            {!props.valid && entered ? <Text>{props.error}</Text> : <></>}
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    editProfile: {
        marginTop: 20
    }
})