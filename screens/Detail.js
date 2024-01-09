import React from 'react';
import {View, StyleSheet, useWindowDimensions, Image, Text} from "react-native";
import Header from "../components/Header";
import Animated, {FadeIn, FadeInDown} from "react-native-reanimated";
import Button from "../components/Button";

function Detail({route}) {
    const {item} = route.params
    const {width} = useWindowDimensions()
    return (
        <View style={styles.container}>
            <Header/>
            <View>
                <View>
                    <Animated.Image
                        sharedTransitionTag={item.name}
                        source={item.image}
                        style={{width:width, height: width}}
                    />
                    <Animated.View
                        entering={FadeInDown.delay(600)}
                        style={styles.textContainer} >
                        <Text style={styles.textName}>{item.name}</Text>
                        <Text style={styles.textLocation}>{item.location}</Text>
                    </Animated.View>
                </View>
                <Animated.View entering={FadeInDown.delay(800)}>
                    <Text style={styles.textAbout}>About</Text>
                    <Text style={styles.text}>{item.about}</Text>
                </Animated.View>
            </View>
            <Button />
        </View>
    );
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    textContainer: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'rgba(0,0,0,.6)',
        left: 10,
        right: 10,
        padding: 16,
        borderRadius: 20,
    },
    textName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    textLocation : {
        fontSize: 16,
        color: 'white',
    },
    textAbout: {
        fontSize: 28,
        margin: 10,
        fontWeight: 'bold',
        color: '#323232',
    },
    text: {
        color: '#323232',
        fontSize: 16,
        marginHorizontal: 10,
        textAlign: 'justify',
    }
})