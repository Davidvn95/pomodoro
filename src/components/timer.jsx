import { View, Text, StyleSheet } from "react-native";

export default function Timer({ time }) {
    
    const formattedTime =
        Math.floor(time / 60)
            .toString()
            .padStart(2, '0') +
        ':' +
        (time % 60).toString().padStart(2, '0')
    return (
        <View style={styles.time}>
            <Text style={styles.text}>{formattedTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    time: {
        backgroundColor: '#f2f2f2',
        flex: 0.3,
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center'
    },
    text:{fontSize: 80, fontWeight: 'bold', textAlign: 'center', color: '#505050'}
})