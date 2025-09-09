import React from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
export default function ChatRoomScreen({ route }: any) {
  const { chatId } = route.params;
  const [text, setText] = React.useState('');
  const [msgs, setMsgs] = React.useState<any[]>([]);
  const send = () => { setMsgs((m) => [...m, { id: String(Date.now()), text }]); setText(''); };
  return (
    <View style={{ flex: 1, padding: 12 }}>
      <FlatList data={msgs} keyExtractor={(m) => m.id} renderItem={({ item }) => <Text>{item.text}</Text>} />
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <TextInput style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 8 }} value={text} onChangeText={setText} placeholder="Type..." />
        <Button title="Send" onPress={send} />
      </View>
    </View>
  );
}
