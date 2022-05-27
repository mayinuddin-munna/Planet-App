import { View,StyleSheet } from 'react-native'
import React from 'react'
import Text from '../Components/text/text'
import PlanetHeader from '../Components/PlanetHeader'
import { colors } from '../theme/colors'

export default function Details() {
    return (
        <View style={styles.container}>
            <PlanetHeader backBtn={true} />
            <Text>Details</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
});