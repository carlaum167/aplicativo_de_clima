import React, { useRef, useState } from 'react';
import '../../../global.css';
import { View, Text, Button, TextInput,} from 'react-native';
import { router } from 'expo-router';
import { styles } from '~/src/styles/App';
import axios from 'axios';
import WheaterInformations from '~/src/components/WheaterInformations/WheaterInformations';
import WheaterInformations5Days from '~/src/components/WheaterInformations/WheaterInformations5Days';


interface Weather {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
    temp_min?: number;
    temp_max?: number;
  };
  weather: { description: string; icon: string }[];
  wind?: { speed: number };
}

export default function App() {
  const [weather, setWeather] = React.useState<Weather | undefined>(undefined);
  const [weather5Days, setWeather5Days] = React.useState<any>(undefined);

  const inputRef = useRef<TextInput>(null);
  const [city, setCity] = React.useState('');

  async function CitySearch() {
    const keyApi = 'f0389190a410566fa6c742f7488cd7c1';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${keyApi}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5Days = await axios.get(url5Days);

    setWeather(apiInfo.data);
    setWeather5Days(apiInfo5Days.data);

  }

  return (

    <>
 
      <View style={styles.View}>
          <Text className="text-lg font-bold text-blue-600">Previsao do tempo</Text>
          <TextInput
            ref={inputRef}
            placeholder="Digite sua cidade"
            value={city}
            onChangeText={setCity}
          />
          <Button  title="Buscar" onPress={CitySearch} />

          {weather && <WheaterInformations weather={weather} />}
          {weather5Days && <WheaterInformations5Days weather5Days={weather5Days} />}
      </View>
    </>
  );
}

