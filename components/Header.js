import React from 'react';
import {Text, View, Image, StyleSheet, Pressable} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import Animated, {
    FadeIn,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSpring
} from "react-native-reanimated";
import {useDispatch, useSelector} from "react-redux";
import {makeVisible} from "../src/features/handleOpacity";
import {savedBeach} from "../src/features/savedBeach";


function Header(props) {
    const inset = useSafeAreaInsets()
    const navigation = useNavigation()
    const heartOpacity = useSelector((state) => state.opacity.value)
    const dispatch = useDispatch()




    const translateY = useSharedValue(0)

    function handleHeart() {
        translateY.value -= 5;
        translateY.value = withDelay(100, withSpring(0))

    }

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: withSpring(translateY.value * 2) }],
    }));

    return (
        <Animated.View
            entering={FadeIn.delay(300)}
            style={[styles.container, {top: Platform.OS === 'ios' ? inset.top : 20   }]}>

            <Pressable onPress={() => { navigation.goBack(), dispatch(makeVisible()) }} >
                <Image style={styles.chevron} source={require('../assets/chevron.png')} />
            </Pressable>
            <Pressable onPress={() => { handleHeart() }} >
                <Animated.Image style={[styles.chevron,{opacity:heartOpacity} , animatedStyles ]} source={require('../assets/like.png')} />
            </Pressable>
        </Animated.View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex  : 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 20,
        right: 20,
    },
    chevron: {
        width: 44,
        height: 44,

    }

})