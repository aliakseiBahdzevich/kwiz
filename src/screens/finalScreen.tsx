import * as React from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';


const FinalScreen = ({navigation, route}: any) => {

    console.log(route)

    return(
        <>
        <ImageBackground resizeMode="cover" style = {styles.backgroundImageStyle} source={{uri: 'https://abali.ru/wp-content/uploads/2011/01/rus_flag-1600x1200.jpg'}}>
            <Text style = {styles.textStyle}>{route.params}</Text>
        </ImageBackground>
        </>
        
    )
}

const styles = StyleSheet.create({
    backgroundImageStyle: {flex: 1, backgroundColor: 'red'},
    opacityStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    textStyle: {color: 'black', fontSize: 45, backgroundColor: 'rgba(245,255,250,1)', borderRadius: 8}
})

export default FinalScreen