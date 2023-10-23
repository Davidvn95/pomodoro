import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native'
import { Audio } from 'expo-av'
import Header from './src/components/header'
import Timer from './src/components/timer'
import ButtonStarter from './src/components/button-starter'
import clickSound from './assets/ui-click-97915.mp3'
import finalTimeSound from './assets/finalTime.mp3'
import { updateTime } from './helpers/functions'

const colors = ['#ffd86b', '#a2d9ce', '#d7bde2']

export default function App() {
    const [isWorking, setIsWorking] = useState(false)
    const [time, setTime] = useState(25 * 60)
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        let interval = null
        if (isWorking) {
            interval = setInterval(() => {
                setTime(time - 1)
            }, 1000)
        }
        if (time === 0) {
            handleSoundClick('final')
            const newTime = updateTime(currentTime)
            setIsWorking(false)
            setTime(newTime * 60)
        }
        return () => clearInterval(interval)
    }, [isWorking, time])

    function handleStartStop() {
        handleSoundClick()
        setIsWorking(!isWorking)
    }

    async function handleSoundClick(final) {
        if (final) {
            const { sound } = await Audio.Sound.createAsync(finalTimeSound)
            await sound.playAsync()
        } else {
            const { sound } = await Audio.Sound.createAsync(clickSound)
            await sound.playAsync()
        }
    }
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors[currentTime] }]}>
            <View style={styles.view}>
                <Text style={styles.text}>Pomodoro</Text>
                <Header
                    currentTime={currentTime}
                    setTime={setTime}
                    setCurrentTime={setCurrentTime}
                    setIsWorking={setIsWorking}
                />
                <Timer time={time} />
                <ButtonStarter
                    name={isWorking ? 'STOP' : 'START'}
                    handleStartStop={handleStartStop}
                />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: { fontSize: 35, fontWeight: 'bold' },
    view: {
        paddingTop: Platform.OS === 'android' && 30,
        paddingHorizontal: 10,
        flex: 1,
    },
})
