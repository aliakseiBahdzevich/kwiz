import * as React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';



const RecordsContinentScreen = ({navigation, route}: any) => {
    return(
        <ImageBackground resizeMode="cover" style = {styles.backgroundImageStyle} source={{uri: 'https://abali.ru/wp-content/uploads/2011/01/rus_flag-1600x1200.jpg'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('records', {continent: 'Europe'})} style = {styles.opacityStyle}>
                <Text style = {styles.textStyle}>Europe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('records', {continent: 'Asia'})} style = {styles.opacityStyle}>
                <Text style = {styles.textStyle}>Asia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('records', {continent: 'Africa'})} style = {styles.opacityStyle}>
                <Text style = {styles.textStyle}>Africa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('records', {continent: 'America'})} style = {styles.opacityStyle}>
                <Text style = {styles.textStyle}>America</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('records', {continent: 'Oceania'})} style = {styles.opacityStyle}>
                <Text style = {styles.textStyle}>Oceania</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImageStyle: {width: '100%', height: '100%', flex: 1},
    opacityStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    textStyle: {color: 'black', fontSize: 45, backgroundColor: 'rgba(245,255,250,0.9)', borderRadius: 8}
})

export default RecordsContinentScreen