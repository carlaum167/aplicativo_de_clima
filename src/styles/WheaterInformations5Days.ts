import { StyleSheet } from 'react-native';

export const stylesWI5 = StyleSheet.create({
    Title:{
        fontSize: 25,
    fontWeight: 'bold' as const,
    },
    View:{
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center' as const,
        gap: 30,
    },
    Image:{
        width: 45,
        height: 35,
        alignSelf: 'center' as const,
    },

    Text5Days:{
        fontSize: 15,
    fontWeight: 'bold' as const,
    textAlign: 'center' as const,
    textTransform: 'capitalize' as const,
    }

});