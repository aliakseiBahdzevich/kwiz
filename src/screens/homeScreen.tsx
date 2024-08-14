import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';




const HomeScreen = ({navigation}: any) => {
    return(
        <ImageBackground source={{uri: 'https://photopole.ru/wp-content/uploads/globus-2.webp'}} style = {styles.backgroundImageStyle}>
            <View style={styles.viewStyle}>
            <TouchableOpacity onPress={()=>navigation.navigate('continent')} style = {styles.button}>
                <Text style = {styles.buttonText}>START</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('records')} style = {styles.button}>
                <Text style = {styles.buttonText}>RECORDS</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    viewStyle: {backgroundColor: 'rgba(0, 0, 0, 0.5)', ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center', flex: 1},
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
        height: '10%',
        width: '50%', 
        margin: 15
    },
    buttonText: {
        fontSize: 30,
        lineHeight: 30,
        fontWeight: '600',
        color: '#fff',
      }
})


export default HomeScreen