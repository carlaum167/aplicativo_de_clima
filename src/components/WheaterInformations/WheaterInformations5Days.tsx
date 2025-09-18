import { View, Text } from "react-native";

function Weather5Days({ weather5Days }: { weather5Days: any }) {
    
    let dailyForecast: { [date: string]: any } = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast;
    }
}
const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

const next5Days = Object.values(dailyForecast).slice(1, 6);
  return (
    <View>
        <Text>Previsão para 5 dias:</Text>
      {nextFiveDays.map((item: any) => (
        <View key={item.dt}>
          <Text>{item.dt_txt}</Text>
          <Text>{item.weather[0].description}</Text>
          <Text>{item.main.temp}°C</Text>
        </View>
      ))}
    </View>
  );
}
export default Weather5Days;        