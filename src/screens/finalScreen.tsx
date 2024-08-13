import * as React from 'react';
import { useEffect, useState } from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet, TextInput, FlatList, View } from 'react-native';
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
    const [borderColor, setBorderColor] = useState('')


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
        <View style = {styles.backgroundImageStyle}>
            <Text style = {styles.buttonText}>Points: {route.params.points}</Text>
            <TextInput onChangeText={handleTextChange} value={nick} style = {styles.inputText} placeholder='Enter nickname'></TextInput>
            <TouchableOpacity disabled={disable} style = {styles.button} onPress={()=>{fun()}}>
                <Text style={[styles.buttonText, {color: '#fff'}]}>{errorNick}Confirm</Text>
            </TouchableOpacity>
        </View>
        </>
        
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
        color: '#000000',
        margin: 15
    },
    inputText: {
        height: 100,
        width: 300,
        borderColor: '#0569FF',
        fontSize: 30,
        lineHeight: 28,
        fontWeight: '600',
        color: '#000000',
        margin: 15,
        borderWidth: 3,
        borderRadius: 8, 
        paddingLeft: 15
    }

})

export default FinalScreen

