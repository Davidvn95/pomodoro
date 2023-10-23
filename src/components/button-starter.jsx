import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonStarter({ handleStartStop, name }) {
    
    return (
        <TouchableOpacity onPress={handleStartStop}>
            <Text style={styles.button}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#444444',
        padding: 15,
        marginTop: 15,
        borderRadius: 15,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    }
})