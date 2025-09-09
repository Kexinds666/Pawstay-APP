import React from 'react';
import { View, Button, Alert } from 'react-native';
export default function CheckoutScreen({ route, navigation }: any) {
  const { id } = route.params;
  const onPay = async () => { Alert.alert('Success', 'Payment completed (stub)!'); navigation.goBack(); };
  return (<View style={{ padding: 16 }}><Button title="Pay" onPress={onPay} /></View>);
}
