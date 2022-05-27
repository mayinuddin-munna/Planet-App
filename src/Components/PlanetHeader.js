import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

export default function PlanetHeader({ backBtn, title = "THE PLANETS" }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {
        backBtn && (
          <Pressable style={{ marginRight: spacing[4] }} onPress={() => {
            navigation.goBack();
          }}>
            <AntDesign name="left" size={24} color="white" />
          </Pressable>
        )
      }
      <Text preset="h1">{title}</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: colors.white,
  },
});