import { View, Text, Image} from "react-native"
import { stylesWI } from "~/src/styles/WheaterInformations";

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
        <View style={stylesWI.View}>
            <Text style={stylesWI.Title}>Informações do Tempo Hoje:</Text>
            

            {weather && (
                <View>
                    <Image source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }} alt="Weather icon" style={stylesWI.Image} />
                    <Text style={stylesWI.Texts}>Temperatura: {Math.round(weather.main.temp)}°C</Text>
                    <Text style={stylesWI.Texts}>Descrição: {weather.weather[0].description}</Text>
                    <Text style={stylesWI.Texts}>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</Text>
                    <Text style={stylesWI.Texts}>Umidade: {weather.main.humidity}</Text>
                </View>
            )}
        </View>
    );
}

export default WheaterInformations;