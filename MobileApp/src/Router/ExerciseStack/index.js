import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text } from 'react-native';
import ExercisePage from '../../pages/ExercisePage';
import ExerciseDetailPage from '../../pages/ExerciseDetailPage';

const Stack = createStackNavigator();

const ExerciseStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ExercisePage" component={ExercisePage} />
            <Stack.Screen name="ExerciseDetailPage" component={ExerciseDetailPage} />
        </Stack.Navigator>
    )
};

export default ExerciseStack;