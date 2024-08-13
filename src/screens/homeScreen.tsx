import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';




const HomeScreen = ({navigation}: any) => {
    return(
        <View style = {styles.backgroundImageStyle}>
            <TouchableOpacity onPress={()=>navigation.navigate('continent')} style = {styles.button}>
                <Text style = {styles.buttonText}>START</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('records')} style = {styles.button}>
                <Text style = {styles.buttonText}>RECORDS</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundImageStyle: {alignItems: 'center', justifyContent: 'center', flex: 1},
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        backgroundColor: '#0569FF',
        borderColor: '#0569FF',
        height: 100,
        width: 300, 
        margin: 15
    },
    buttonText: {
        fontSize: 30,
        lineHeight: 28,
        fontWeight: '600',
        color: '#fff',
      }
})


export default HomeScreen