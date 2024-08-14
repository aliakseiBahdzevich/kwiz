import * as React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, View, useWindowDimensions } from 'react-native';
import { getRecords, getRecordsContinent, setRecords } from '../api';
import { RecordsType } from '../navigation/rootNavigation';
import { useEffect, useState } from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';


const Europe = () => {

    const [europe, setEurope] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')

    useEffect(()=>{
        getRecordsContinent('Europe')
            .then((res: any)=>{
                setEurope(res.sort((a: RecordsType, b: RecordsType) => b.points - a.points))
            })
            .catch((er: any)=>{
                setError(er)
            })
    },[])

    return(
        <>
        <ImageBackground source={{uri: 'https://oboi-telefon.ru/wallpapers/37186/32798.jpg'}} style={styles.backgroundImageStyle}>
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', ...StyleSheet.absoluteFillObject}}>
                <View style = {[styles.itemContainer, {borderBottomWidth: 3, borderColor: 'white'}]}>
                    <Text style={[styles.nickname, {fontSize: 30, lineHeight: 30, fontWeight: '800'}]}>Nickname</Text>
                    <Text style={[styles.nickname, {fontSize: 30, lineHeight: 30, fontWeight: '800'}]}>Points</Text>
                </View>
                {europe && <FlatList data={europe} renderItem={({item, index}) => 
                    <View style={styles.itemContainer}>
                        <Text style={styles.nickname}>{item.nickname}</Text>
                        <Text style={styles.points}>{item.points}</Text>
                    </View>
                }/>
                }
            </View>
        </ImageBackground>
        </>
    )
};
  
const Asia = () => {

    const [asia, setAsia] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')

    useEffect(()=>{
        getRecordsContinent('Asia')
            .then((res: any)=>{
                setAsia(res.sort((a: RecordsType, b: RecordsType) => b.points - a.points))
            })
            .catch((er: any)=>{
                setError(er)
            })
    },[])

    return(
        <>
        <ImageBackground source={{uri: 'https://w0.peakpx.com/wallpaper/238/767/HD-wallpaper-chinese-lantern-asia-chine-food-japan-love-night-people-street-sushi.jpg'}} style={styles.backgroundImageStyle}>
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', ...StyleSheet.absoluteFillObject}}>
                <View style = {[styles.itemContainer, {borderBottomWidth: 3, borderColor: 'white'}]}>
                    <Text style={[styles.nickname, {fontSize: 30, lineHeight: 30, fontWeight: '800'}]}>Nickname</Text>
                    <Text style={[styles.nickname, {fontSize: 30, lineHeight: 30, fontWeight: '800'}]}>Points</Text>
                </View>
                {asia && <FlatList data={asia} renderItem={({item, index}) => 
                    <View style={styles.itemContainer}>
                        <Text style={styles.nickname}>{item.nickname}</Text>
                        <Text style={styles.points}>{item.points}</Text>
                    </View>
                }/>
                }
            </View>
        </ImageBackground>
        </>
    )
};

const America = () => {

    const [america, setAmerica] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')

    useEffect(()=>{
        getRecordsContinent('America')
            .then((res: any)=>{
                setAmerica(res.sort((a: RecordsType, b: RecordsType) => b.points - a.points))
            })
            .catch((er: any)=>{
                setError(er)
            })
    },[])

    return(
        <>
        <ImageBackground source={{uri: 'https://oboi-telefon.ru/wallpapers/134891/37098.jpg'}} style={styles.backgroundImageStyle}>
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', ...StyleSheet.absoluteFillObject}}>
                <View style = {[styles.itemContainer, {borderBottomWidth: 3, borderColor: 'white'}]}>
                    <Text style={[styles.nickname, {fontSize: 30, lineHeight: 30, fontWeight: '800'}]}>Nickname</Text>
                    
                    <Text style={[styles.nickname, {fontSize: 30, lineHeight: 30, fontWeight: '800'}]}>Points</Text>
                </View>
                {america && <FlatList data={america} renderItem={({item, index}) => 
                    <View style={styles.itemContainer}>
                        <Text style={styles.nickname}>{item.nickname}</Text>
                        <Text style={styles.points}>{item.points}</Text>
                    </View>
                }/>
                }
            </View>
        </ImageBackground>
        </>
    )
};

const Africa = () => {

    const [africa, setAfrica] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')

    useEffect(()=>{
        getRecordsContinent('Africa')
            .then((res: any)=>{
                setAfrica(res.sort((a: RecordsType, b: RecordsType) => b.points - a.points))
            })
            .catch((er: any)=>{
                setError(er)
            })
    },[])

    return(
        <>
        <ImageBackground source={{uri: 'https://www.3wallpapers.fr/wp-content/uploads/2012/11/Africa-3Wallpapers-iPhone-5.jpg'}} style={styles.backgroundImageStyle}>
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', ...StyleSheet.absoluteFillObject}}>
                <View style = {[styles.itemContainer, {borderBottomWidth: 3, borderColor: 'white'}]}>
                    <Text style={[styles.nickname, {fontSize: 30, lineHeight: 30, fontWeight: '800'}]}>Nickname</Text>
                    <Text style={[styles.nickname, {fontSize: 30, lineHeight: 30, fontWeight: '800'}]}>Points</Text>
                </View>
                {africa && <FlatList data={africa} renderItem={({item, index}) => 
                    <View style={styles.itemContainer}>
                        <Text style={styles.nickname}>{item.nickname}</Text>
                        <Text style={styles.points}>{item.points}</Text>
                    </View>
                }/>
                }
            </View>
        </ImageBackground>
        </>
    )
};

const Oceania = () => {

    const [oceania, setOceania] = useState<RecordsType[] | null>(null)
    const [error, setError] = useState('')

    useEffect(()=>{
        getRecordsContinent('Oceania')
            .then((res: any)=>{
                setOceania(res.sort((a: RecordsType, b: RecordsType) => b.points - a.points))
            })
            .catch((er: any)=>{
                setError(er)
            })
    },[])

    return(
        <ImageBackground source={{uri: 'https://oboi-telefon.ru/wallpapers/10870/35651.jpg'}} style={styles.backgroundImageStyle}>
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', ...StyleSheet.absoluteFillObject}}>
                <View style = {[styles.itemContainer, {borderBottomWidth: 3, borderColor: 'white'}]}>
                    <Text style={[styles.nickname, {fontSize: 30, lineHeight: 30, fontWeight: '800'}]}>Nickname</Text>
                    <Text style={[styles.nickname, {fontSize: 30, lineHeight: 30, fontWeight: '800'}]}>Points</Text>
                </View>
                {oceania && <FlatList data={oceania} renderItem={({item, index}) => 
                    <View style={styles.itemContainer}>
                        <Text style={styles.nickname}>{item.nickname}</Text>
                        <Text style={styles.points}>{item.points}</Text>
                    </View>
                }/>
                }
            </View>
        </ImageBackground>
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
    backgroundImageStyle: {flex: 1},
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
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    nickname: {
        fontSize: 25,
        lineHeight: 25,
        fontWeight: '600',
        color: 'white'
    },
    points: {
        fontSize: 25,
        lineHeight: 25,
        fontWeight: '600',
        color: 'white'
    }
})

export default RecordsScreen