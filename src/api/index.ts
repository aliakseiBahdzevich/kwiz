import axios from "axios";
import { AppState } from 'react-native'
import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QuestionType } from "../navigation/rootNavigation";


const supabaseUrl = 'https://gsctqceigifgxzmhkwin.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzY3RxY2VpZ2lmZ3h6bWhrd2luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MzI2MTYsImV4cCI6MjAzODEwODYxNn0.3Tivr9FKvW68V9br6UcxLOPFT29ndvMADk93BN5gLC4'
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      storage: AsyncStorage,
    },
  })
  

const getQuestions = async() => {
    let { data: questions, error } = await supabase
        .from('questions')
        .select('*')
    console.log(questions)
    return questions
}

export default getQuestions

          