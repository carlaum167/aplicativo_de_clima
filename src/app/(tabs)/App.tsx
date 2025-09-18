import React, { useRef, useState } from 'react';
import { Stack } from 'expo-router';
import '../../../global.css';
import { View,TouchableOpacity, Text, Button, TextInput,} from 'react-native';
import { router } from 'expo-router';

import { ScreenContent } from '../../components/ScreenContent';
import axios from 'axios';
import WheaterInformations from '~/src/components/WheaterInformations/WheaterInformations';


interface Weather {
  weather: { description: string; icon: string }[];
  main: { temp: number; humidity: number; temp_min: number; temp_max: number };
  name: string;
  wind: { speed: number };
  
}

export default function App() {
  const [weather, setWeather] = React.useState<Weather | undefined>(undefined);
  const inputRef = useRef<TextInput>(null);
  const [city, setCity] = React.useState('');

  async function CitySearch() {
    const keyApi = 'f0389190a410566fa6c742f7488cd7c1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);

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

          <WheaterInformations weather={weather} />

        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
        </TouchableOpacity>
      </View>
    </>
  );
}

