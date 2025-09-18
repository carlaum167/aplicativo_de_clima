import { View, Text, Image} from "react-native"

type Weather = {
    name: string;
    main: {
        temp: number;
        humidity: number;
        feels_like: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
};

interface WheaterInformationsProps {
    weather?: Weather;
}

function WheaterInformations({ weather }: WheaterInformationsProps) {

    return (
        <View>
            <Text>Informações do Tempo:</Text>

            {weather && (
                <View>
                    <Image source={{ uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }} alt="Weather icon" />
                    <Text>Cidade: {weather.name}</Text>
                    <Text>Temperatura: {Math.round(weather.main.temp)}°C</Text>
                    <Text>Descrição: {weather.weather[0].description}</Text>
                    <Text>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</Text>
                    <Text>Umidade: {weather.main.humidity}</Text>
                </View>
            )}
        </View>
    );
}

export default WheaterInformations;