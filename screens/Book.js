import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Header from "../components/Header";

function Book(props) {
    return (
        <View style={styles.container}>
            <Header/>
            <Text
                style={styles.text}
            >Booking now</Text>
        </View>
    );
}

export default Book;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c6cce',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 75,
    }
})