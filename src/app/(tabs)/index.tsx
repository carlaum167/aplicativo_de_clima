import { Stack } from 'expo-router';
import '../../../global.css';
import { View,TouchableOpacity, Text, Button, TextInput,} from 'react-native';
import { router } from 'expo-router';

import { ScreenContent } from '../../components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View>
        <TouchableOpacity onPress={() => router.push('/cadastro')}>
          <Text className="text-lg font-bold text-blue-600">Previsao do tempo</Text>
          <TextInput placeholder="Digite sua cidade" />
          <Button title="Buscar" onPress={() => {}} />
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
        </TouchableOpacity>
      </View>
    </>
  );
}
