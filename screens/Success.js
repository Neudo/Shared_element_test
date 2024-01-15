import React, { useEffect, useRef } from 'react';
import {View, Text, StyleSheet, Animated, ImageBackground, Easing, Pressable} from "react-native";
import {useSelector} from "react-redux";

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

function Success(props) {
    const scaleAnim = useRef(new Animated.Value(1.3)).current;  // Initial value for scale
    const currentBeach = useSelector((state) => state.savedBeach.currentBeach);

    useEffect(() => {
        Animated.timing(
            scaleAnim,
            {
                toValue: 1, // Final value of scale
                duration: 8000,
                useNativeDriver: true,
                easing: Easing.linear,
            }
        ).start();
    }, [scaleAnim]);

    return (
        <View style={styles.container}>
            <AnimatedImageBackground
                source={currentBeach.image}
                resizeMode='cover'
                style={[
                    styles.bgImg,
                    { transform: [{ scale: scaleAnim }] } // Apply animated scale
                ]}
            />
            <View style={styles.containerText} >
            <Text style={styles.text}>Payement success</Text>
            <Text style={styles.mainText}>Congratulations, your journey is booked!</Text>
                <Pressable
                    onPress={() => props.navigation.navigate('Home')}
                ><Text style={{color: 'lightgrey', marginTop:15, paddingVertical:10  }} >Back to home</Text></Pressable>
            </View>
        </View>
    );
}

export default Success;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
    },
    bgImg: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    mainText: {
        fontSize: 20,
        color: 'white',
        width: '90%',
        borderRadius: 10,
    },
    containerText: {
        position: 'absolute',
        backgroundColor: '#1c6cce',
        padding: 20,
        top: '50%',
        transform: [{ translateY: -50 }],
        borderRadius: 10,
        width: '80%',
    },
});
