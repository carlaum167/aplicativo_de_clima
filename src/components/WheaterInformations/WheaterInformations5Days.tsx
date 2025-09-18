import { View, Text, Image } from "react-native";
import { stylesWI5 } from "~/src/styles/WheaterInformations5Days";

function Weather5Days({ weather5Days }: { weather5Days: any }) {
    
    let dailyForecast: { [date: string]: any } = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast;
    }
}
const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

function convertDate(date: { dt: number; }){
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long' });
    return newDate;
}
  return (
    <View style={stylesWI5.View}>
        <Text style={stylesWI5.Title}>Previsão para 5 dias:</Text>
      {nextFiveDays.map((forecast: any) => (
        <View key={forecast.dt}>
          <Text style={stylesWI5.Text5Days}>{convertDate(forecast)}:</Text>
           <Text style={stylesWI5.Text5Days}>{Math.round(forecast.main.temp_min)}°C min | {Math.round(forecast.main.temp_max)}°C máx</Text>
          <Image source={{ uri: `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png` }} alt="Weather icon" style={stylesWI5.Image} />
          <Text style={stylesWI5.Text5Days}>{forecast.weather[0].description}</Text>
         
        </View>
      ))}
    </View>
  );
}
export default Weather5Days;        