import React from 'react';
import {View, Text, StyleSheet, Pressable, Image, Dimensions, TextInput} from "react-native";
import Header from "../components/Header";
import { ListItem } from '@rneui/themed';
import {color, Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";

function Book() {
    const navigation = useNavigation()

    const screenWidth = Dimensions.get("window").width;
    const [pressed, setPressed] = React.useState(true);
    const [expanded, setExpanded] = React.useState(false);

    return (
        <View style={styles.container}>
            <Header/>
            <Text style={styles.text}>Booking now</Text>

            <View style={styles.containerSummary}>
                <ListItem.Accordion
                    style={[styles.accordion , styles.accordionTop]}
                    content={
                        <>
                            <Icon name="info" size={24} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.topTitle} >{expanded ? 'Hide' : 'Show'} order summary</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={expanded}
                    onPress={() => {setExpanded(!expanded)}}
                >

                    <ListItem bottomDivider
                              style={styles.accordion}

                    >
                        <ListItem.Content>
                            <ListItem.Title>Canggu Beach</ListItem.Title>
                            <ListItem.Subtitle>Bali, indonesia</ListItem.Subtitle>
                            <ListItem.Subtitle>Price : 2450$</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </ListItem.Accordion>
            </View>

            <View style={styles.containerCtaCredit}>
                <Pressable onPress={ ()=> { setPressed(true) } } >
                    <View style={[styles.ctaCredit, {width: screenWidth / 3, marginRight: 15, opacity: pressed ? 1 : .5 }]} >
                        <Image
                            source={require("../assets/visa.png")}
                            style={{width: 70, height: 20}}
                        />
                    </View>
                </Pressable>
                <Pressable  onPress={ () => { setPressed(false) } } >
                    <View style={[styles.ctaCredit, {width: screenWidth / 3, opacity: !pressed ? 1 : .5   }]} >
                        <Image
                            source={require("../assets/paypal.png")}
                            style={{width: 70, height: 20, resizeMode: 'contain'}}
                        />
                    </View>
                </Pressable>
            </View>


            <View style={styles.containerCard}>
                <Text style={styles.payementTitle} >Payment</Text>
                <Text style={styles.payementContent} >All transactions are secure and encrypted</Text>

                <View style={styles.creditCard} >
                    {pressed ? (
                        <>
                            <Image
                                source={require("../assets/visa.png")}
                                style={{width: 70, height: 20, padding: 30, marginLeft: 10}}
                            />

                            <Text style={styles.cardNumber} >1234 5678 9101 1121</Text>
                            <Text style={styles.cardContent} >John Doe</Text>
                            <Text style={styles.cardContent} >Expire date : 04/28</Text>
                        </>
                    ) : (
                        <>
                            <Image
                                source={require("../assets/paypal.png")}
                                style={{width: 70, height: 20, padding: 30, marginLeft: 10, resizeMode: 'contain'}}
                            />
                            <TextInput style={styles.input}  placeholder='email' placeholderTextColor="black" />
                            <TextInput style={styles.input} placeholder='password' placeholderTextColor="black" />
                        </>
                    )}
                </View>

                <Pressable onPress={() => navigation.navigate('Success')}>
                    <View style={styles.ctaPay}>
                        <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize:16, textTransform:'uppercase'}}>{pressed ? 'Pay with this card' : 'log in'}</Text>
                    </View>
                </Pressable>
            </View>


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
    },
    accordion: {
        width: '90%',
        marginHorizontal: '5%',
    },
    accordionTop: {
        width: '90%',
        borderRadius: 40,
    },
    topTitle: {
        marginLeft: 10,
    },
    containerCard: {
        backgroundColor: 'white',
        width: '90%',
        marginHorizontal: '5%',
        padding: 20,
        marginTop: 15,
        borderRadius: 10,
    },
    containerSummary: {
        borderRadius: 10,
        backgroundColor: 'white',
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 35,
    },
    payementTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
    },
    payementContent: {
        color: '#8a8a8a',
    },
    ctaCredit: {
        backgroundColor: 'white',
        // marginHorizontal: '5%',
        padding: 20,
        marginTop: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCtaCredit: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        width: '90%',
        marginHorizontal: '5%',
    },
    creditCard: {
        backgroundColor: '#94bde0',
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        color: 'white',
    },
    cardNumber: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
    },
    cardContent: {
        color: 'white',
        marginLeft: 10,
        marginTop: 5,
    },
    ctaPay: {
        backgroundColor: '#1c6cce',
        color: 'white',
        width: '70%',
        textAlign: 'center',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: '15%',
        fontWeight: 'bold',
        fontSize: 18,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: '90%',
        marginHorizontal: '5%',
        backgroundColor: '#f5f5f5',
        borderColor: '#f5f5f5',
    }
})