import React from 'react';
import Text from '../Components/text/text';
import PlanetHeader from '../Components/PlanetHeader';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { PLANET_LIST } from '../data/PlanetList';
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, FlatList, SafeAreaView, Pressable } from 'react-native';

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <PlanetHeader />
      </View>
      <View>
        <FlatList
          contentContainerStyle={styles.list}
          data={PLANET_LIST}
          keyExtractor={(item) => { item.name }}
          renderItem={({ item }) => {
            const { name, color } = item;
            return (
              <Pressable onPress={() => {
                navigation.navigate("Details", { planet: item });
              }}

                style={styles.item}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={[styles.circle, { backgroundColor: color }]}></View>
                  <Text preset="h4" style={styles.textName}>
                    {name}
                  </Text>
                </View>
                <AntDesign name="right" size={18} color="white" />
              </Pressable>
            )
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderBottomWidth: .3,
    // backgroundColor: colors.black,
    // borderBottomColor: colors.white
  },
  list: {
    padding: spacing[7],
  },
  item: {
    padding: spacing[4],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: spacing[4],
  },
  textName: {
    alignItems: 'center',
    textTransform: "uppercase",

  },
  separator: {
    borderWidth: .3,
    borderBottomColor: colors.white,
  }
})