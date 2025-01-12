import { Link, router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function DrinksScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello there this is the drinks screen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={() => router.push('../scanner')} 
          style={styles.squareButton}
        >
          <Ionicons name="barcode-outline" size={35} color={Colors.light.icon} />
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  squareButton: {
    width: 50,
    height: 50,
    backgroundColor: Colors.light.tint,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
