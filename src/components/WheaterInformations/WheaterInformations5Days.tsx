import { View, Text } from "react-native";

function Weather5Days({ weather5Days }: { weather5Days: any }) {
  return (
    <View>
      {weather5Days.list.map((item: any) => (
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