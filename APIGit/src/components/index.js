import React, { useState, useEffect } from 'react'
import { style, styles } from './style'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import axios from 'axios';

const index = () => {

  const [repo, setRepo] = useState([])

  const url = 'https://api.github.com/users/Anselmo5/repos'

  useEffect(() => {
    async function ViewReposi() {
      try {
        const res = await axios.get(url)
        const data = res.data
        setRepo(data)
      } catch (error) {
        console.error('Erro ao obter repositórios', error);
      }
    }
    ViewReposi()
  }, [])

  console.log(repo)

  return (
    <View style={styles.container}>

      <Text style={styles.text}> Renderização de Lista Arry</Text>
      <FlatList
        data={repo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  )
}

export default index