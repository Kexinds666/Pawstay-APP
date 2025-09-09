import React from 'react';
import { ScrollView, RefreshControl, Text, TouchableOpacity, View } from 'react-native';

export default function BrowseListingsScreen({ navigation }: any) {
  const [loading, setLoading] = React.useState(false);
  const items = [
    { id: '1', title: 'Cozy sitter near USC', pricePerNight: 50, locationText: 'Los Angeles, CA' },
    { id: '2', title: 'Downtown pet host', pricePerNight: 65, locationText: 'Los Angeles, CA' }
  ];
  const reload = () => setLoading(false);

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={reload} />}>
      {items.map((x) => (
        <TouchableOpacity key={x.id} onPress={() => navigation.navigate('ListingDetail', { id: x.id })} style={{ padding: 16, borderBottomWidth: 1, borderColor: '#eee' }}>
          <Text style={{ fontWeight: '700' }}>{x.title}</Text>
          <Text>${x.pricePerNight} / night • {x.locationText}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
