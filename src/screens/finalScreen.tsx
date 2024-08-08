import * as React from 'react';
import { useEffect, useState } from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { setRecords } from '../api';



const FinalScreen = ({navigation, route}: any) => {

    const [nick, setNick] = useState('')
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e: any) => {
          e.preventDefault();
          navigation.dispatch(e.data.action);
          navigation.navigate('home');
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(()=>{
        if(nick.length===0){
            setDisable(true)
        }
        else{
            setDisable(false)
        }
    }, [nick])

    return(
        <>
        <ImageBackground resizeMode="cover" style = {styles.backgroundImageStyle} source={{uri: 'https://abali.ru/wp-content/uploads/2011/01/rus_flag-1600x1200.jpg'}}>
            <Text style = {styles.textStyle}>Points: {route.params.points}</Text>
            <TextInput onChangeText={(text)=>setNick(text)} style = {styles.textStyle} placeholder='Enter nickname'></TextInput>
            <TouchableOpacity disabled={disable} onPress={()=>{setRecords(nick, route.params.points, route.params.continent); navigation.navigate('home')}}>
                <Text style={styles.textStyle}>Confirm</Text>
            </TouchableOpacity>
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

