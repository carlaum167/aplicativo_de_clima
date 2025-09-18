import { View, Text, Image } from "react-native";

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
    <View>
        <Text>Previsão para 5 dias:</Text>
      {nextFiveDays.map((forecast: any) => (
        <View key={forecast.dt}>
          <Text>{convertDate(forecast)}</Text>
          <Image source={{ uri: `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png` }} alt="Weather icon" style = {{width: 45, height: 35}} />
          <Text>{forecast.weather[0].description}</Text>
          <Text>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C máx</Text>
        </View>
      ))}
    </View>
  );
}
export default Weather5Days;        