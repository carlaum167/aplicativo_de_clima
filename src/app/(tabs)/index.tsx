import { Stack } from 'expo-router';
import '../../../global.css';
import { View,TouchableOpacity, Text, Button, TextInput,} from 'react-native';
import { useRef} from 'react';
import { router } from 'expo-router';

import { ScreenContent } from '../../components/ScreenContent';

export default function Home() {
  const inputRef = useRef<TextInput>(null);

  function CitySearch() {

  }

  return (

    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View>
        <TouchableOpacity onPress={() => router.push('/cadastro')}>
          <Text className="text-lg font-bold text-blue-600">Previsao do tempo</Text>
          <TextInput ref={inputRef} placeholder="Digite sua cidade" />
          <Button title="Buscar" onPress={() => {}} />
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
        </TouchableOpacity>
      </View>
    </>
  );
}
