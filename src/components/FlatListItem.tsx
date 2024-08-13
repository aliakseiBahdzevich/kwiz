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
    disable: boolean
    setDisable: (disable: boolean)=>void
}

const FlatListItem = ({index, onPress, answerText, isCorrectAnswer, disable, setDisable}: Props) => {
    
    const [bgColor, setBgColor] = useState('')
    const [borderColor, setBorderColor] = useState('')

    useEffect(()=>{
        setDisable(false)
        setBgColor('#0569FF')
        setBorderColor('#0569FF')
    }, [index])

    const handlePress = () => {
        setDisable(true)
        isCorrectAnswer ? setBgColor('rgb(20, 212, 116)') : setBgColor('rgb(217, 61, 84)')
        isCorrectAnswer ? setBorderColor('rgb(20, 212, 116)') : setBorderColor('rgb(217, 61, 84)')
        setTimeout(()=>{onPress(index)}, 500);
    }

    
    
    return(
        <View style = {styles.backgroundImageStyle}>
            <TouchableOpacity disabled={disable} onPress={handlePress} style = {[styles.button, {backgroundColor: bgColor}, {borderColor: borderColor}]}>
                <Text style = {styles.buttonText}>{answerText}</Text>
            </TouchableOpacity>
        </View>
        
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
        color: '#fff',
      }
})

export default FlatListItem



