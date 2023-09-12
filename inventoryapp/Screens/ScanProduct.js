import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';

const ScanProduct = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cont2} >
                <View style={styles.cont2a} >
                    <Image
                        source={require('./Images/img_10.png')}
                        style={styles.images_a}
                    />
                    <Text style={{ fontSize: 20, marginLeft: 20, color: 'white' }} >Scan your product</Text>
                </View>

                <View style={styles.cont2b} >
                    <Text style={{ fontSize: 13, color: 'white' }}>[7 Units]</Text>
                    <Text style={{ fontSize: 13, color: 'white' }}>1</Text>
                </View>


                <TouchableOpacity style={styles.btn}>
                    <Text style={{ textAlign: 'center', fontSize: 17, color: 'white', fontWeight: 'bold' }} >Apply</Text>
                </TouchableOpacity>

            </View>


            <View style={styles.contx}></View>
            <Footer />
        </View>
    );
};


const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: "#242733",
        height: '100%',
    },
    cont2: {


        height: "50%",
        marginTop: 15,

    },

    images_a: {

        width: 50,
        height: 50,
        padding: 40,
        marginLeft: 10,
        borderRadius: 10,

    },

    cont2a: {

        backgroundColor: "#30333e",
        height: "50%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 20,
        borderRadius: 20,
        paddingHorizontal: 30,

    },

    cont2b: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 150,
    },



    btn: {

        marginHorizontal: 20,
        marginVertical: 40,
        backgroundColor: '#30333e',
        marginTop: 7,

        paddingVertical: 18,
        paddingHorizontal: 5,
        borderRadius: 20,


    },
    contx: {
        height: "23%",
    },
})

export default ScanProduct;