import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import {getQuestions} from '../api';
import { useEffect, useState } from 'react';
import { QuestionType } from '../navigation/rootNavigation';
import { SvgUri } from 'react-native-svg';
import FlatListItem from '../components/FlatListItem';







const QuestScreen = ({navigation, route}: any) => {


    const [questions, setQuestions] = useState<QuestionType[] | null>(null)
    const [error, setError] = useState('')
    const [index, setIndex] = useState<number>()
    const [answers, setAnswers] = useState<string[]>()
    const [points, setPoints] = useState(0)
    const [disable, setDisable] = useState(false)
    
    useEffect(()=>{
        getQuestions(route.params.continent)
            .then((res: any)=>{
                setQuestions(res)
                setIndex(0)
            })
            .catch((er: any)=>setError(er))
    }, [])
    
    useEffect(()=>{
        (questions && index!==undefined && setAnswers([...questions[index].wrongAnswers, questions[index].rightAnswer]?.sort(()=>Math.random()-0.5)))
    }, [index])

    
    console.log(points)
    console.log(index)
    
    return(
        <>
        <ImageBackground resizeMode="cover" style = {styles.backgroundImageStyle} source={{uri: 'https://abali.ru/wp-content/uploads/2011/01/rus_flag-1600x1200.jpg'}}>
        {questions && index!==undefined && <SvgUri style = {styles.svgStyle} uri={questions[index].flag} />}
        {questions && index!==undefined && 
        <FlatList 
            data={answers} 
            renderItem={({item})=>
                <FlatListItem isCorrectAnswer={questions[index].rightAnswer===item} setDisable={setDisable} disable={disable} answerText={item} index={index} onPress={(index)=>{
                    if(questions[index].rightAnswer===item){
                        setPoints((prevPoints) => {
                            const newPoints = prevPoints + 1
                            if(index+1===questions.length){ 
                                navigation.navigate('final', {points: newPoints, continent: route.params.continent})
                            }
                            else{
                                setIndex(index+1)
                            }   
                            return newPoints
                        })  
                    }
                    else{               
                        if(index+1===questions.length){
                            navigation.navigate('final', {points: points, continent: route.params.continent})
                        }
                        else{
                            setIndex(index+1) 
                        }   
                    }
        }}/>}/>}
        </ImageBackground>
        {questions && index!==undefined && <Text style={styles.textStyle}>{index+1}/{questions.length}</Text>}
        </>
    ) 
}



const styles = StyleSheet.create({
    svgStyle: {width: '100%', height: 196.5, marginTop: 0},
    backgroundImageStyle: {width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'},
    textStyle: {color: 'black', fontSize: 20, borderRadius: 8, textAlign: 'center'}
})


export default QuestScreen