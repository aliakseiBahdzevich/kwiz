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
        <ImageBackground source={{uri: 'https://img.lovepik.com/photo/20230421/medium/lovepik-europe-and-asia-white-isolated-elements-of-this-image-furnished-by-photo-image_352300123.jpg'}} style = {styles.backgroundImageStyle}>
        <View style = {styles.viewStyle}>
            <Text style = {styles.buttonText}>Points: {route.params.points}</Text>
            <TextInput onChangeText={handleTextChange} value={nick} style = {styles.inputText} placeholder='Enter nickname'></TextInput>
            <TouchableOpacity disabled={disable} style = {styles.button} onPress={()=>{fun()}}>
                <Text style={styles.buttonText}>{errorNick}Confirm</Text>
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
        height: 100,
        width: 300, 
        margin: 15
    },
    buttonText: {
        fontSize: 30,
        lineHeight: 30,
        fontWeight: '600',
        color: '#fff',
        margin: 15
    },
    inputText: {
        height: 100,
        width: 300,
        borderColor: '#fff',
        fontSize: 30,
        lineHeight: 30,
        fontWeight: '600',
        color: '#fff',
        margin: 15,
        borderWidth: 3,
        borderRadius: 8, 
        paddingLeft: 15
    }

})

export default FinalScreen

