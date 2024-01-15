import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Book from "../screens/Book";
import Success from "../screens/Success";

const Stack = createNativeStackNavigator();

function RootNavigation(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home" component={Home}
                options={{headerShown: false, animation: 'slide_from_right'}}
            />
            <Stack.Screen
                name="Detail" component={Detail}
                options={{headerShown: false, animation: 'slide_from_right'}}
            />
            <Stack.Screen
                name="Book" component={Book}
                options={{headerShown: false, animation: 'slide_from_bottom'}}
            />
            <Stack.Screen
                name="Success" component={Success}
                options={{headerShown: false, animation: 'fade_from_bottom' }}
            />
        </Stack.Navigator>
    );
}

export default RootNavigation;