import React from 'react';
import Text from '../Components/text/text';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import PlanetHeader from '../Components/PlanetHeader';
import { StyleSheet, ScrollView, View, Pressable, Linking } from 'react-native';
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg/Index';

const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.PlanetSection}>
            <Text style={{ textTransform: 'uppercase' }}>
                {title}
            </Text>
            <Text preset='h2'>
                {value}
            </Text>
        </View>
    )
}

export default function Details({ navigation, route }) {
    const planet = route.params.planet;
    const { name, description, rotationTime, revolutionTime, image, radius, avgTemp, wikiLink } = planet;
    // console.log("paichi", planet);

    // const renderImages = (name) => {
    //     switch (name) {
    //         case 'mercury':
    //             return <MercurySvg />
    //         case 'earth':
    //             return <EarthSvg />
    //         case 'jupiter':
    //             return <JupiterSvg />
    //         case 'mars':
    //             return <MarsSvg />
    //         case 'neptune':
    //             return <NeptuneSvg />
    //         case 'saturn':
    //             return <SaturnSvg />
    //         case 'uranus':
    //             return <UranusSvg />
    //         case 'venus':
    //             return <VenusSvg />
    //     }
    // };

    const wikilink = () => {
        Linking.openURL(wikiLink);
    }

    return (
        <View style={styles.container}>
            <PlanetHeader backBtn={true} />
            <ScrollView>
                <View style={styles.mageView}>
                    {/* {renderImages(name)} */}
                    <Text>{image}</Text>
                </View>
                <View style={styles.detailsView}>

                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Pressable onPress={wikilink} style={styles.source}>
                        <Text>Source{' '}</Text>
                        <Text style={styles.wikiLink}>Wikipedia</Text>
                    </Pressable>
                </View>
                <PlanetSection title="ROTATION TIME" value={rotationTime} />
                <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
                <PlanetSection title="RADIUS" value={radius} />
                <PlanetSection title="AVERAGE TEMPERATURES" value={avgTemp} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    mageView: {
        margin: spacing[4],
        padding: spacing[5],
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsView: {
        alignItems: 'center',
        margin: spacing[4],
        marginHorizontal: spacing[6],
        marginVertical: spacing[6],

    },
    name: {

        margin: spacing[4],
        textTransform: 'uppercase',
    },
    description: {
        lineHeight: spacing[5],
        margin: spacing[4],

    },
    wikiLink: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    source: {
        flexDirection: 'row',
    },
    PlanetSection: {
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: spacing[3],
        paddingVertical: spacing[3],
        borderColor: colors.darkGray,
        paddingHorizontal: spacing[4],
        marginHorizontal: spacing[4],
        justifyContent: 'space-between',
    }
});