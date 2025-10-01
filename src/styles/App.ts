import { StyleSheet, Dimensions, View } from 'react-native';  
const { width, height } = Dimensions.get('window');
import { LinearGradient } from 'expo-linear-gradient';



export const styles = StyleSheet.create({

  Tela: {
    flex: 1,
    backgroundColor: '#7ec5ffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    minHeight: height,
  },
  Box1: {
    width: width * 0.8,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.05,
    backgroundColor: '#ffffff',
    borderColor: '#5f5f5fff',
    borderWidth: 2,
    gap: 10,
  },
  Text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  TextInput: {
    backgroundColor: '#e6e6e6',
    width: '100%',
    height: 40,
    borderColor: '#5f5f5fff',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  Box2: {
    width: width * 0.8,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.05,
    backgroundColor: '#ffffff',
    borderColor: '#5f5f5fff',
    borderWidth: 2,
    marginBottom: 20,
  },
  Button: {
    backgroundColor: '#007bff',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
    padding: 12,
    width: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ErroMsg: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
