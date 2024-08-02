import * as React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { SvgUri } from 'react-native-svg';
import { QuestionType } from '../navigation/rootNavigation';


type Props = {
    index: number;
    onPress: (index: number)=>void
    answerText: string
    //disable: boolean
}

const FlatListItem = ({index, onPress, answerText}: Props) => {

    return(
        <>
        <View>
            <TouchableOpacity onPress={()=>{onPress(index)}} style = {styles.opacityStyle}>
                <Text style = {styles.textStyle}>{answerText}</Text>
            </TouchableOpacity>
        </View>
        </>
        
    )
    
}

const styles = StyleSheet.create({
    opacityStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    textStyle: {color: 'black', fontSize: 45, backgroundColor: 'rgba(245,255,250,1)', borderRadius: 8, margin: 30}
})

export default FlatListItem



