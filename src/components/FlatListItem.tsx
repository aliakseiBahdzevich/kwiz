import * as React from 'react';
import { ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { SvgUri } from 'react-native-svg';
import { QuestionType } from '../navigation/rootNavigation';


type Props = {
    index: number;
    onPress: (index: number)=>void
    answerText: string
    isCorrectAnswer: boolean
    //disable: boolean
}

const FlatListItem = ({index, onPress, answerText, isCorrectAnswer}: Props) => {
    
    const [bgColor, setBgColor] = useState('rgba(245,255,250,1)')
    const [disable, setDisable] = useState(false)

    useEffect(()=>{
        setDisable(false)
    }, [index])

    const handlePress = () => {
        setDisable(true)
        isCorrectAnswer ? setBgColor('green') : setBgColor('red')
        setTimeout(()=>{onPress(index); setBgColor('rgba(245,255,250,1)')}, 10);
    }

    
    
    return(
        <>
        <View>
            <TouchableOpacity disabled={disable} onPress={handlePress} style = {styles.opacityStyle}>
                <Text style = {[styles.textStyle, {backgroundColor: bgColor}]}>{answerText}</Text>
            </TouchableOpacity>
        </View>
        </>
        
    )
    
}

const styles = StyleSheet.create({
    opacityStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    textStyle: {color: 'black', fontSize: 45, backgroundColor: 'rgba(245,255,250,1)', borderRadius: 8, margin: 20}
})

export default FlatListItem



