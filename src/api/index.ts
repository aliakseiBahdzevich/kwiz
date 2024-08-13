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
  

export const getQuestions = async(continent: string) => {
    let { data: questions, error } = await supabase
      .from('questions')
      .select()
      .eq('continent', continent)
    return questions
}

export const setRecords = async(nickname: string, points: number, continent: string, deviceId: string) => {
    let { data: records, error } = await supabase
      .from('records')
      .insert([
        {nickname: nickname, points: points, continent: continent, deviceId}
      ])
      .select()
    console.log(error)
    return records
}

export const updateRecords = async(nickname: string, points: number, continent: string, deviceId: string) => {
    let {data: records, error} = await supabase
      .from('records')
      .update({points: points})
      .eq('nickname', nickname)
      .eq('continent', continent)
      .select()
    console.log(error)
    return records
}

export const getRecordsContinent = async(continent: string) => {
  let { data: records, error } = await supabase
    .from('records')
    .select()
    .eq('continent', continent)
    console.log(records)
  return records
}

export const getRecords = async() => {
  let { data: records, error } = await supabase
    .from('records')
    .select('*')
  console.log(records)
  return records
}



          