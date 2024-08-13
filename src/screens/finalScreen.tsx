import * as React from 'react';
import { useEffect, useState } from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { getRecordsContinent, setRecords, updateRecords } from '../api';
import { RecordsType } from '../navigation/rootNavigation';
import DeviceInfo, { DeviceType } from 'react-native-device-info';



const FinalScreen = ({navigation, route}: any) => {

    const [nick, setNick] = useState('')
    const [disable, setDisable] = useState(false)
    const [record, setRecord] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')
    const [deviceId, setDeviceId] = useState('')
    const [errorNick, setErrorNick] = useState('')


    useEffect(()=>{
        if(nick.length===0){
            setDisable(true)
        }
        else{
            setDisable(false)
        }
    }, [nick])

    useEffect(()=>{
        getRecordsContinent(route.params.continent)
            .then((res: any)=>{
                setRecord(res)
            })
            .catch((er: any)=>setError(er))
        DeviceInfo.getUniqueId()
            .then((res: any)=>{
                setDeviceId(res)
            })
            .catch((er: any)=>setError(er))
    }, [])

    const handleTextChange = (inputText: any) => {
        const filteredText = inputText.replace(/\s/g, '');
        setNick(filteredText);
    };

    const fun = () => {
        console.log(record)
        setErrorNick('')
        let nicknameExists = false;
        if (record && record.length>0){
            record.forEach((element) => {
                if (element.nickname === nick && element.deviceId===deviceId){
                    nicknameExists = true;
                    if(element.points<route.params.points){
                        updateRecords(nick, route.params.points, route.params.continent, deviceId)   
                    }
                    navigation.navigate('home')
                }
                else if(element.nickname === nick && element.deviceId!==deviceId){
                    nicknameExists = true;
                    setErrorNick('Такое имя уже существует!')
                    console.log(errorNick)
                }
            })
            if (!nicknameExists){
                setRecords(nick, route.params.points, route.params.continent, deviceId)
                navigation.navigate('home')
            }
        }
        else{
            setRecords(nick, route.params.points, route.params.continent, deviceId)
            navigation.navigate('home')
        }
    };
    

    return(
        <>
        <ImageBackground resizeMode="cover" style = {styles.backgroundImageStyle} source={{uri: 'https://abali.ru/wp-content/uploads/2011/01/rus_flag-1600x1200.jpg'}}>
            <Text style = {styles.textStyle}>Points: {route.params.points}</Text>
            <TextInput onChangeText={handleTextChange} value={nick} style = {styles.textStyle} placeholder='Enter nickname'></TextInput>
            <TouchableOpacity disabled={disable} onPress={()=>{fun()}}>
                <Text style={styles.textStyle}>{errorNick}Confirm</Text>
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

