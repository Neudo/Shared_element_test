import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigation from "./navigator/RootNavigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import store from "./src/app/store";

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <RootNavigation/>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
