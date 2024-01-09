import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from "react-native";
import data from "../data/data";
import RenderItem from "../components/RenderItem";


function Home(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Popular destinations</Text>
            <FlatList data={data}
                      renderItem={({item, index}) => {
                          return (
                              <RenderItem item={item} index={index} navigation={props.navigation}/>
                          )
                      }}
            />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8ff',
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000',
        // marginTop: 30,
        marginHorizontal: 20,
    }
})