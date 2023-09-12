import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';


const VendorBills = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cont1}>
                <TextInput style={styles.input} placeholder='Search' placeholderTextColor="white" />

            </View>

            <View style={styles.cont3}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("VendorBillReceipt")} >
                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'left', paddingLeft: 15, }} >BILL/2023/08/0001</Text>
                    <Text style={{ backgroundColor: '#68fc7f', fontSize: 11, color: 'black', textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 19, paddingVertical: 7, marginRight: 10, borderRadius: 20, }} >Confirmed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'left', paddingLeft: 15, }}>BILL/2023/08/0002</Text>
                    <Text style={{ backgroundColor: '#68fc7f', fontSize: 11, color: 'black', textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 19, paddingVertical: 7, marginRight: 10, borderRadius: 20, }} >Confirmed</Text>

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

    input: {
        backgroundColor: '#30333e',
        marginHorizontal: 15,
        paddingHorizontal: 17,
        borderRadius: 20,
        borderWidth: 0.7,
        borderColor: "black",
        marginVertical: 5,

    },

    cont1: {

        marginVertical: 1,

    },


    cont3: {


        // marginHorizontal: 1,
        marginVertical: 10,

        height: 90,

        paddingHorizontal: 10,
        marginBottom:200,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    btn: {

        marginHorizontal: 10,
        backgroundColor: '#30333e',
        marginTop: 7,
        width: "90%",
        paddingVertical: 18,
        paddingHorizontal: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    contx: {
        height: "16%",
    },

})

export default VendorBills;