import React, { useRef } from 'react';
import { Stack } from 'expo-router';
import '../../../global.css';
import { View,TouchableOpacity, Text, Button, TextInput,} from 'react-native';
import { router } from 'expo-router';

import { ScreenContent } from '../../components/ScreenContent';
import axios from 'axios';

export default function Home() {
  const inputRef = useRef<TextInput>(null);
  const [city, setCity] = React.useState('');

  async function CitySearch() {
    const keyApi = 'f0389190a410566fa6c742f7488cd7c1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}`;
    const data = await axios.get(url);

    console.log(data);
  }

  return (

    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View>
        <TouchableOpacity onPress={() => router.push('/cadastro')}>
          <Text className="text-lg font-bold text-blue-600">Previsao do tempo</Text>
          <TextInput
            ref={inputRef}
            placeholder="Digite sua cidade"
            value={city}
            onChangeText={setCity}
          />
          <Button title="Buscar" onPress={CitySearch} />
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
        </TouchableOpacity>
      </View>
    </>
  );
}
