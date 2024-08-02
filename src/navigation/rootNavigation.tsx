import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import ContinentScreen from '../screens/continent';
import QuestScreen from '../screens/quest';




const Stack = createNativeStackNavigator();

export type QuestionType = {
    flag: string;
    wrongAnswers: string[];
    rightAnswer: string;
    id: number;
}


const MyStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
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
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack





