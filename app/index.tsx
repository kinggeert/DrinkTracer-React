import { Link, router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello there, this is a login screen.</Text>
      <Text>Please proceed if you are authorized. We have no way to tell so be honest pretty please.</Text>
      <Button title="Login" onPress={() => router.push('/(tabs)/drinks')} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
