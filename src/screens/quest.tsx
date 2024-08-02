import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import getQuestions from '../api';
import { useEffect, useState } from 'react';
import { QuestionType } from '../navigation/rootNavigation';
import { SvgUri } from 'react-native-svg';
import FlatListItem from '../components/FlatListItem';







const QuestScreen = ({navigation}: any) => {

    const [questions, setQuestions] = useState<QuestionType[] | null>(null)
    const [error, setError] = useState('')
    const [index, setIndex] = useState<number>()
    const [answers, setAnswers] = useState<string[]>()
    

    useEffect(()=>{
        getQuestions()
            .then((res)=>{
                setQuestions(res)
                setIndex(0)
            })
            .catch((er)=>setError(er))
        }, [])
    
    useEffect(()=>{
        (questions && index!==undefined && setAnswers([...questions[index].wrongAnswers, questions[index].rightAnswer]))
    }, [index])
    
    
    return(
        <>
        <ImageBackground resizeMode="cover" style = {styles.backgroundImageStyle} source={{uri: 'https://abali.ru/wp-content/uploads/2011/01/rus_flag-1600x1200.jpg'}}>
        {questions && index!==undefined && <SvgUri style = {styles.svgStyle} uri={questions[index].flag} />}
        {questions && index!==undefined && <FlatList data={answers?.sort(()=>Math.random()-0.5)} renderItem={({item})=><FlatListItem  answerText={item} index={index} onPress={(index)=>{questions[index].rightAnswer===item ? setIndex(index+1) : setIndex(index)}}/>}/>}
        </ImageBackground>
        </>
    ) 
}



const styles = StyleSheet.create({
    svgStyle: {width: '100%', height: 196.5, marginTop: 0},
    backgroundImageStyle: {width: '100%', height: '100%', flex: 1}
})


export default QuestScreen