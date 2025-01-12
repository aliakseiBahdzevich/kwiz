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
        <ImageBackground source={{uri: 'https://photopole.ru/wp-content/uploads/globus-2.webp'}} style = {styles.backgroundImageStyle}>
        <View style={styles.viewStyle} >
            <View style={styles.viewSvg}>
                {questions && index !== undefined && (<SvgUri style={styles.svgStyle} uri={questions[index].flag} />)}
            </View>
        {questions && index!==undefined && 
        <FlatList
            style={{flex: 1}}
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
        {questions && index!==undefined && <Text style={styles.buttonTextBar}>{index+1}/{questions.length}</Text>}
        </View>
        
        </ImageBackground>
    ) 
}



const styles = StyleSheet.create({
    viewStyle: {backgroundColor: 'rgba(0, 0, 0, 0.5)', ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center', flex: 1},
    viewSvg: {width: '95%', height: '24%', justifyContent: 'center', alignItems: 'center'},
    svgStyle: {width: '95%', height: '98%', marginTop: 0, alignItems: 'center', justifyContent: 'center'},
    backgroundImageStyle: {alignItems: 'center', justifyContent: 'center', flex: 1},
    buttonText: {
        fontSize: 30,
        lineHeight: 28,
        fontWeight: '600',
        color: '#fff',
      },
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
    buttonTextBar: {
        fontSize: 25,
        lineHeight: 25,
        fontWeight: '600',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 3
      }
})


export default QuestScreen