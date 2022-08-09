import { Text, View, StyleSheet } from "react-native";


const EventList = ({events}) => {
return (
    <View>
      {events.map(event => (
        <View style={styles.SubView}>
          <Text style={styles.ViewText} key={event.title}>{event.title}</Text>
          <Text style={styles.SubText} key={event.subTexts}>{event.subTexts}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({

    SubView: {
        padding: 5,
        marginTop: 12,
        borderRadius: 5
    },

    ViewText: {
        paddingVertical: 8,
        color: "whitesmoke",
        textAlign: "center",
        fontSize: 27,
        fontWeight: "bold"
    },

    SubText: {
        marginTop: 7,
        color: "whitesmoke",
        fontSize: 15,
        textAlign: 'center'
    }
})

export default EventList;