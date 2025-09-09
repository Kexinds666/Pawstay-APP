import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
export default function SignInScreen({ navigation }: any) {
  const [email, setEmail] = useState('demo@pawstay.app');
  const [password, setPassword] = useState('Demo123!');
  const onSignIn = async () => {
    try { navigation.replace('BrowseListings'); }
    catch (e: any) { Alert.alert('Sign in failed', e.message); }
  };
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Sign In" onPress={onSignIn} />
    </View>
  );
}
