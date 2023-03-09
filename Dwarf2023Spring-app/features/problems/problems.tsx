import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { createProblem, deleteProblem, fetchAllProblems } from './problemsSlice'
import { ProblemEntity } from './problemEntity'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

export function Problems() {
  const count = useSelector((state: RootState) => state.counter.value)
  const problems: ProblemEntity[] = useSelector((state: RootState) => state.problems.entities)
  
  const dispatch = useDispatch<AppDispatch>()

  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`subject: ${subject}, description: ${description}`);

    dispatch(createProblem(new ProblemEntity(subject, description)));
  }


  const handleDelete = (id: number | undefined) => ( event: any, ) => {
    console.log(id);
    dispatch(deleteProblem(id)).then(() =>{ 
      dispatch(fetchAllProblems())
    })
};
  useEffect(() => {
    dispatch(fetchAllProblems())
  }, [])

  return (
    <View>
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setSubject}
                value={subject}
            />
            <TextInput
                style={styles.input}
                onChangeText={setDescription}
                value={description}
            />
            <Button title="Create problem" onPress={handleSubmit}/>

        </View>

        {problems.map((problem) => (
            <View key={problem?.id}>
                <Text>{problem?.subject} - {problem?.description}</Text>
                <Button title="Delete problem" onPress={handleDelete(problem?.id)}/>
            </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });