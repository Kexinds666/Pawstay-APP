import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default function ListingCard({ item, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 12, backgroundColor: '#F9FAFB', borderRadius: 12, margin: 8 }}>
      <Text style={{ fontWeight: '700' }}>{item.title}</Text>
      <Text>${item.pricePerNight}/night • {item.locationText}</Text>
    </TouchableOpacity>
  );
}
