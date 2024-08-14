import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';



const ContinentScreen = ({navigation, route}: any) => {
    return(
        <ImageBackground source={{uri: 'https://img.lovepik.com/photo/20230421/medium/lovepik-europe-and-asia-white-isolated-elements-of-this-image-furnished-by-photo-image_352300123.jpg'}} style = {styles.backgroundImageStyle}>
            <View style={styles.viewStyle}>
            <TouchableOpacity onPress={()=>navigation.navigate('quest', {continent: 'Europe'})} style = {styles.button}>
                <Text style = {styles.buttonText}>Europe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('quest', {continent: 'Asia'})} style = {styles.button}>
                <Text style = {styles.buttonText}>Asia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('quest', {continent: 'Africa'})} style = {styles.button}>
                <Text style = {styles.buttonText}>Africa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('quest', {continent: 'America'})} style = {styles.button}>
                <Text style = {styles.buttonText}>America</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('quest', {continent: 'Oceania'})} style = {styles.button}>
                <Text style = {styles.buttonText}>Oceania</Text>
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


export default ContinentScreen



