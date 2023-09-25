import React, { useState } from 'react'
import {style, styles} from './style'
import { View,Text, TextInput, TouchableOpacity } from 'react-native'




const index = () => {
 
const [name,setname] = useState([])


const persons = [
    {
      id: "1",
      name: "Earnest Green",
    },
    {
      id: "2",
      name: "Winston Orn",
    },
    {
      id: "3",
      name: "Carlton Collins",
    },
    {
      id: "4",
      name: "Malcolm Labadie",
    },
    {
      id: "5",
      name: "Michelle Dare",
    },
    {
      id: "6",
      name: "Carlton Zieme",
    },
    {
      id: "7",
      name: "Jessie Dickinson",
    },
    {
      id: "8",
      name: "Julian Gulgowski",
    },
    {
      id: "9",
      name: "Ellen Veum",
    },
    {
      id: "10",
      name: "Lorena Rice",
    },
  
    {
      id: "11",
      name: "Carlton Zieme",
    },
    {
      id: "12",
      name: "Jessie Dickinson",
    },
    {
      id: "13",
      name: "Julian Gulgowski",
    },
    {
      id: "14",
      name: "Ellen Veum",
    },
    {
      id: "15",
      name: "Lorena Rice",
    },
  ];


  return (
   <View style={styles.container}>

    <Text style={styles.text}> Renderização de Lista Arry</Text>
        

        {
            persons.map(person => (
                <Text style={styles.model}>{person.name} {person.id}</Text>

            ))
        }


{/* 
        <TextInput 
        style={styles.inp}
        placeholder='Digite um Nome'

       />

       <TextInput 
        style={styles.inp}
        placeholder='Digite um Numero'

       /> */}

 

{/*     
        <TouchableOpacity style={styles.btn}>
           <View>
                <Text>Enviar</Text>
           </View>
        </TouchableOpacity> */}

   </View>
  )
}

export default index