import { StyleSheet } from 'react-native';

export const stylesWI = StyleSheet.create({
    Title:{
        fontSize: 20,
    fontWeight: 'bold' as const,
    },
    View:{
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
    },
    Image:{
        width: 70,
        height: 60,
        alignSelf: 'center' as const,
    },
    Texts:{
        fontSize: 15,
    fontWeight: 'bold' as const,
    textAlign: 'center' as const,
    textTransform: 'capitalize' as const,
    }

});