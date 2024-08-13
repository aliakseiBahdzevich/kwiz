import * as React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, View } from 'react-native';
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
        <View style={styles.backgroundImageStyle}>
            {records && index!==undefined && <FlatList data={records} renderItem={({item, index}) => <Text style={styles.buttonText}>{item.nickname}{item.points}{item.continent}</Text>}/>}
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

export default RecordsScreen