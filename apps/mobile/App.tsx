import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>FamilyBridge</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Tap to say hello"
        onPress={() => Alert.alert('Hello from FamilyBridge!')}
        style={({ pressed }) => [styles.bigButton, pressed && styles.bigButtonPressed]}
      >
        <Text style={styles.bigButtonText}>Tap to say hello</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28, // ≥ 18pt for accessibility
    fontWeight: '700',
    color: '#111111',
    marginBottom: 32,
  },
  bigButton: {
    backgroundColor: '#0057FF', // high-contrast blue
    paddingVertical: 16, // ensures height ≥ 48px when combined with text size and padding
    paddingHorizontal: 24,
    borderRadius: 12,
    minWidth: 260,
    minHeight: 56, // ≥ 48px touch target
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  bigButtonPressed: {
    backgroundColor: '#0047CC',
  },
  bigButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
