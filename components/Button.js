import React from 'react';
import {useWindowDimensions, StyleSheet, Pressable, Text} from "react-native";
import Animated, {FadeInDown, useAnimatedStyle, useSharedValue, withDelay, withTiming} from "react-native-reanimated";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {makeInvisible} from "../src/features/handleOpacity";



function Button(props) {
    const {width} = useWindowDimensions()
    const inset = useSafeAreaInsets();
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
    const navigation = useNavigation()
    const scale = useSharedValue(1)

    const dispatch = useDispatch()

    function handleBtn() {
        navigation.navigate('Book')
        scale.value = withDelay(500, withTiming(1))
        dispatch(makeInvisible())
    }

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{scale: withTiming(scale.value)}]
    }))

    return (
        <AnimatedPressable
            style={[styles.container, animatedStyle, {width:width * .9, marginBottom: inset.bottom}] }
            entering={FadeInDown.delay(900)}
            onPress={() => handleBtn() }
        >
            <Text style={styles.text} >Booking now</Text>
        </AnimatedPressable>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c6cce',
        padding: 22,
        alignItems: 'center',
        borderRadius: 40,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
})