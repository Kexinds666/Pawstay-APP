import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/Auth/SignInScreen';
import BrowseListingsScreen from '../screens/Listings/BrowseListingsScreen';
import ListingDetailScreen from '../screens/Listings/ListingDetailScreen';
import CheckoutScreen from '../screens/Booking/CheckoutScreen';
import ChatRoomScreen from '../screens/Chat/ChatRoomScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BrowseListings" component={BrowseListingsScreen} options={{ title: 'Find a Sitter' }} />
        <Stack.Screen name="ListingDetail" component={ListingDetailScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Confirm & Pay' }} />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={{ title: 'Chat' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
