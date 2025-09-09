import React from 'react';
import { View, Button, Text } from 'react-native';
export default function ListingDetailScreen({ route, navigation }: any) {
  const { id } = route.params;
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>Listing #{id}</Text>
      <Button title="Book Now" onPress={() => navigation.navigate('Checkout', { id })} />
      <Button title="Message Sitter" onPress={() => navigation.navigate('ChatRoom', { chatId: id })} />
    </View>
  );
}
