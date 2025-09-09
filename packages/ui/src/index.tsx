import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button: React.FC<React.PropsWithChildren<{ onPress?: () => void }>> = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.btn} activeOpacity={0.9}>
    <Text style={styles.txt}>{children}</Text>
  </TouchableOpacity>
);

export const Card: React.FC<React.PropsWithChildren> = ({ children }) => (
  <View style={styles.card}>{children}</View>
);

const styles = StyleSheet.create({
  btn: { backgroundColor: '#4F46E5', paddingVertical: 12, borderRadius: 12, alignItems: 'center' },
  txt: { color: 'white', fontWeight: '600' },
  card: { backgroundColor: '#F9FAFB', padding: 12, borderRadius: 16, borderColor: '#E5E7EB', borderWidth: 1 }
});
