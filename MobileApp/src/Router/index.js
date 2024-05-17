import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginStack from './LoginStack'
import HomeStack from './HomeStack'


const Stack = createStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="LoginStack" component={LoginStack} options={{headerShown: false}}/>
            <Stack.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;