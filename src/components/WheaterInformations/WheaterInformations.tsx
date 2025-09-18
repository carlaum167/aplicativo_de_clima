import { View, Text, Image} from "react-native"

type Weather = {
    main: {
        temp: number;
    };
    weather: {
        description: string;
    }[];
};

interface WheaterInformationsProps {
    weather?: Weather;
}

function WheaterInformations({ weather }: WheaterInformationsProps) {

    return (
        <View>
            <Text>Informações do Tempo</Text>

            {weather && (
                <View>
                    <Image source={{ uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }} alt="Weather icon" />
                    <Text>Temperatura: {Math.round(weather.main.temp)}°C</Text>
                    <Text>Descrição: {weather.weather[0].description}</Text>
                </View>
            )}
        </View>
    );
}

export default WheaterInformations;