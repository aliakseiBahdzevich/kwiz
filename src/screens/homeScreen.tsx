import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';




const HomeScreen = ({navigation}: any) => {
    return(
        <ImageBackground resizeMode="cover" style = {styles.backgroundImageStyle} source={{uri: 'https://abali.ru/wp-content/uploads/2011/01/rus_flag-1600x1200.jpg'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('continent')} style = {styles.opacityStyle}>
                <Text style = {styles.textStyle}>START</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backgroundImageStyle: {width: '100%', height: '100%', flex: 1},
    opacityStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    textStyle: {color: 'black', fontSize: 45, backgroundColor: 'rgba(245,255,250,1)', borderRadius: 8}
})


export default HomeScreen