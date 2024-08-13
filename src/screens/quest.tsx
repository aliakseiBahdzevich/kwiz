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
        <View style = {styles.backgroundImageStyle}>
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
        </View>
        {questions && index!==undefined && <Text style={styles.buttonText}>{index+1}/{questions.length}</Text>}
        </>
    ) 
}



const styles = StyleSheet.create({
    svgStyle: {width: '100%', height: 196.5, marginTop: 0},
    backgroundImageStyle: {alignItems: 'center', justifyContent: 'center', flex: 1},
    buttonText: {
        fontSize: 30,
        lineHeight: 28,
        fontWeight: '600',
        color: '#fff',
      }
})


export default QuestScreen