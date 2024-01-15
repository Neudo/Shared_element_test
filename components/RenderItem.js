import React from 'react';
import {View, Text, Pressable, StyleSheet} from "react-native";
import Animated, {FadeInDown} from "react-native-reanimated";
import {useNavigation} from "@react-navigation/native";

function RenderItem({item, index}) {
    const navigation = useNavigation()
    return (
        <Animated.View entering={FadeInDown.delay(200 * index)} >
            <Pressable style={styles.container}
                       onPress={() => navigation.navigate('Detail', {item: item})}
            >
                <Animated.Image
                    sharedTransitionTag={item.name}
                    source={item.image}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.textName}>{item.name}</Text>
                    <Text style={styles.textLocation}>{item.location}</Text>
                </View>
            </Pressable>
        </Animated.View>
    );
}

export default RenderItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 20,

    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 10,
    },
    textName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#323232',
    },
    textLocation: {
        fontSize: 16,
        color: '#323232',
        opacity: 0.5,
    },
    textContainer: {
        margin: 20,
        gap: 10,
        flexShrink: 1,
    }
})
