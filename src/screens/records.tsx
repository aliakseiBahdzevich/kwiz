import * as React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, View, useWindowDimensions } from 'react-native';
import { getRecords, getRecordsContinent, setRecords } from '../api';
import { RecordsType } from '../navigation/rootNavigation';
import { useEffect, useState } from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';


const Europe = () => {

    const [europe, setEurope] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        getRecordsContinent('Europe')
            .then((res: any)=>{
                setEurope(res)
            })
            .catch((er: any)=>{
                setError(er)
            })
    },[])

    return(
        <>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {europe && index!==undefined && <FlatList data={europe} renderItem={({item, index}) => <Text style={styles.buttonText}>{item.nickname}{item.points}{item.continent}</Text>}/>}
        </View>
        </>
    )
};
  
const Asia = () => {

    const [asia, setAsia] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        getRecordsContinent('Asia')
            .then((res: any)=>{
                setAsia(res)
            })
            .catch((er: any)=>{
                setError(er)
            })
    },[])

    return(
        <>
        <View style={styles.backgroundImageStyle}>
            {asia && index!==undefined && <FlatList data={asia} renderItem={({item, index}) => <Text style={styles.buttonText}>{item.nickname}{item.points}{item.continent}</Text>}/>}
        </View>
        </>
    )
};

const America = () => {

    const [america, setAmerica] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        getRecordsContinent('America')
            .then((res: any)=>{
                setAmerica(res)
            })
            .catch((er: any)=>{
                setError(er)
            })
    },[])

    return(
        <>
        <View style={styles.backgroundImageStyle}>
            {america && index!==undefined && <FlatList data={america} renderItem={({item, index}) => <Text style={styles.buttonText}>{item.nickname}{item.points}{item.continent}</Text>}/>}
        </View>
        </>
    )
};

const Africa = () => {

    const [africa, setAfrica] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        getRecordsContinent('Africa')
            .then((res: any)=>{
                setAfrica(res)
            })
            .catch((er: any)=>{
                setError(er)
            })
    },[])

    return(
        <>
        <View style={styles.backgroundImageStyle}>
            {africa && index!==undefined && <FlatList data={africa} renderItem={({item, index}) => <Text style={styles.buttonText}>{item.nickname}{item.points}{item.continent}</Text>}/>}
        </View>
        </>
    )
};

const Oceania = () => {

    const [oceania, setOceania] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        getRecordsContinent('Oceania')
            .then((res: any)=>{
                setOceania(res)
            })
            .catch((er: any)=>{
                setError(er)
            })
    },[])

    return(
        <>
        <View style={styles.backgroundImageStyle}>
            {oceania && index!==undefined && <FlatList data={oceania} renderItem={({item, index}) => <Text style={styles.buttonText}>{item.nickname}{item.points}{item.continent}</Text>}/>}
        </View>
        </>
    )
};

const renderScene = SceneMap({
    Europe: Europe,
    Asia: Asia,
    America: America,
    Africa: Africa,
    Oceania: Oceania,
});


const RecordsScreen = ({navigation, route}: any) => {

    const [index, setIndex] = useState(0)
    const layout = useWindowDimensions();


    const [routes] = useState([
        { key: 'Europe', title: 'Europe' },
        { key: 'Asia', title: 'Asia' },
        { key: 'America', title: 'America' },
        { key: 'Africa', title: 'Africa' },
        { key: 'Oceania', title: 'Oceania' },
    ]);


    
    return(
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => (
                <TabBar
                  {...props}
                  scrollEnabled={true}
                  tabStyle={{ width: layout.width/2.5}} // Устанавливаем ширину каждой вкладки
                  indicatorStyle={{ backgroundColor: 'white' }} // Индикатор активной вкладки
                  style={{ backgroundColor: '#0569FF' }} // Стиль фона вкладок
                  labelStyle={{ fontSize: 20, fontWeight: '600'}} // Размер шрифта заголовков
                />
            )}
        />
                
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
        fontSize: 25,
        lineHeight: 25,
        fontWeight: '600',
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 3
      }
})

export default RecordsScreen