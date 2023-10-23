import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { updateTime } from '../../helpers/functions'

const options = ['Pomodoro', 'Short Break', 'Long Break']

export default function Header({ setCurrentTime, currentTime, setTime, setIsWorking }) {
    const handlePress = (index) => {
        const newTime = updateTime(index)
        setCurrentTime(index)
        setTime(newTime * 60)
        setIsWorking(false)
    }

    return (
        <View style={styles.container}>
            {options.map((opt, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.itemStyle,
                        currentTime !== index && { borderColor: 'transparent' },
                    ]}
                    onPress={() => handlePress(index)}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{opt}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        width: '30%',
        display: 'grid',
        placeItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 7,
        borderColor: '#fff',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 12,
    },
})
