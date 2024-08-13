import * as React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { getRecords } from '../api';
import { RecordsType } from '../navigation/rootNavigation';
import { useEffect, useState } from 'react';


const RecordsScreen = ({navigation, route}: any) => {


    const [records, setRecords] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        getRecords()
            .then((res: any)=>{
                setRecords(res)
            })
            .catch((er: any)=>{
                setError(er)
            })
    }, [])

    console.log(index)
    
    return(
        <>
        <ImageBackground resizeMode="cover" style = {styles.backgroundImageStyle} source={{uri: 'https://abali.ru/wp-content/uploads/2011/01/rus_flag-1600x1200.jpg'}}>
        {records && index!==undefined && <FlatList data={records} renderItem={({item, index}) => <Text style={styles.textStyle}>{item.nickname}{item.points}{item.continent}</Text>}/>}
        </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    backgroundImageStyle: {flex: 1, backgroundColor: 'red'},
    opacityStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    textStyle: {color: 'black', fontSize: 45, backgroundColor: 'rgba(245,255,250,1)', borderRadius: 8}
})

export default RecordsScreen