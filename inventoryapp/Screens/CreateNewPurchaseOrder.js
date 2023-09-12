import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';


const CreateNewPurchaseOrder = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.cont2}>
                <Image
                    source={require('./Images/img_6.png')}
                    style={styles.images_a}
                />

                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.navigate('SelectVendorManually')}
                >
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'white', }}>SELECT VENDOR MANUALLY</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.contx} ></View>

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
        margin: 5,
        marginTop: 25,
        flexDirection: 'column',
        alignItems: 'center',

    },

    images_a: {

        width: "90%",
        height: "60%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    btn: {
        backgroundColor: '#30323e',
        width: "90%",
        padding: 15,
        margin: 10,
        marginVertical: 18,
        marginHorizontal: 50,
        borderRadius: 10,

    },


    contx: {
        height: "16%",
    },


})


export default CreateNewPurchaseOrder;