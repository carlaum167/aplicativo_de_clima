import React, { useEffect, useRef} from 'react';
import '../../../global.css';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';
import { styles } from '~/src/styles/App';
import axios from 'axios';
import localization from 'expo-localization';
import * as Location from 'expo-location';
import WheaterInformations from '~/src/components/WheaterInformations/WheaterInformations';
import WheaterInformations5Days from '~/src/components/WheaterInformations/WheaterInformations5Days';
import { LinearGradient } from 'expo-linear-gradient';     

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
  const [currentLocalization, setCurrentLocalization] = React.useState(localization);
  const [erroMsg, setErroMsg] = React.useState('');

  

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErroMsg('AVISO: Permissão para acessar localização negada');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        let { latitude, longitude } = location.coords;

        const keyApi = 'f0389190a410566fa6c742f7488cd7c1';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${keyApi}&lang=pt_br&units=metric`;
        const url5Days = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${keyApi}&lang=pt_br&units=metric`;

        const apiInfo = await axios.get(url);
        const apiInfo5Days = await axios.get(url5Days);

        setWeather(apiInfo.data);
        setWeather5Days(apiInfo5Days.data);
      } catch (error) {
        setErroMsg('Não foi possível obter a localização');
      }
    })();

  }, []);

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
    <ScrollView>
      <LinearGradient 
      style={styles.Tela}
      colors={['#008bfcff', '#a7d4eaff', '#ef9210ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}  
      locations={[0, 0.6, 1]}
      >
        <Text style={styles.TitleLogo}>Clima App</Text>
      <Image source={require('../../assets/sol_nuvem-removebg-preview.png')} style={styles.ImageLogo}/>
        <View style={styles.Box1}>
          <Text style={styles.Text2}>Pesquisar cidade:</Text>
          <TextInput style={styles.TextInput}
            ref={inputRef}
            placeholder="Digite sua cidade"
            value={city}
            onChangeText={setCity}
          />
          <TouchableOpacity style={styles.Button} onPress={CitySearch}>
            <Text style={styles.Text}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={() => {
            setWeather(undefined);
            setWeather5Days(undefined);
            setErroMsg('');
            setCity('');
          }}>
            <Text style={styles.Text}>Limpar</Text>
          </TouchableOpacity>
          </View>  
        <View style={styles.Box2}>
          <Text style={styles.Text2}>Previsão do tempo:</Text>
          <Text style={styles.Text}> {weather ? "Cidade: " + weather.name : 'Nenhuma cidade selecionada'}</Text>
          {weather && <WheaterInformations weather={weather} />}
        </View>
        <View style={styles.Box2}>
          {weather5Days && <WheaterInformations5Days weather5Days={weather5Days} />}
        </View>
          <Text style={styles.ErroMsg}>{erroMsg}</Text>
      </LinearGradient>
    </ScrollView>
    </>
  );
}

