import { StatusBar } from 'expo-status-bar';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Planet app!</Text>
      <Text style={{ marginTop: spacing[8] }}>Hello Planet app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    color: colors.red,
    backgroundColor: colors.orange,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
