import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import ContinentScreen from '../screens/continent';
import QuestScreen from '../screens/quest';
import FinalScreen from '../screens/finalScreen';
import RecordsScreen from '../screens/records';
import { TabViewProps } from 'react-native-tab-view';





const Stack = createNativeStackNavigator();

export type QuestionType = {
    flag: string;
    wrongAnswers: string[];
    rightAnswer: string;
    id: number;
}

export type RecordsType = {
    nickname: string;
    points: number;
    continent: string;
    id: number;
    deviceId: string
}


const MyStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name = 'home'
                    component = {HomeScreen}
                    options = {{title: 'Home'}}
                />
                <Stack.Screen
                    name = 'continent'
                    component = {ContinentScreen}
                    options = {{title: 'Continent'}}
                />
                <Stack.Screen
                    name = 'quest'
                    component = {QuestScreen}
                    options = {{title: 'Quest'}}
                />
                <Stack.Screen
                    name = 'final'
                    component = {FinalScreen}
                    options = {{title: 'Final'}}
                />  
                <Stack.Screen
                    name = 'records'
                    component = {RecordsScreen}
                    options = {{title: 'Records'}}
                />                             
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack





