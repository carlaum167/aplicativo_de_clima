import { StyleSheet, TextInput } from 'react-native';
import { Button } from '../components/Button';

export const styles = StyleSheet.create({
  Tela: {
    width: '100%',
    height: 1200,
    backgroundColor: '#7ec5ffff',
    flex: 1,
    alignItems: 'center' as const,   
  },
   Box1: {
    boxSizing: 'border-box' as const,
    width: '80%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginTop: '10%',
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
  },
    TextInput: {
    backgroundColor: '#e6e6e6',
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    },
    Box2: {
    boxSizing: 'border-box' as const,
    width: '80%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginTop: '10%',
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    },
    Button:{
      backgroundColor: '#007bff',
      borderRadius: 15,
      padding: 10,
      width: '50%',
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    }
  });