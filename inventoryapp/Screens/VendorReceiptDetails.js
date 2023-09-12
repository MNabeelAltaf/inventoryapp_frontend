import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';

const VendorReceiptDetails = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cont2}>
                <View style={styles.cont2a}>
                    <Text style={{ textAlign: 'center', marginTop: 15, color: '#6c6f78', fontSize: 13, }} >Received From{'\n'}Bliss ERP</Text>
                    <Text style={{ textAlign: 'center', marginTop: 15, color: '#6c6f78', fontSize: 13, }}>Document Source{'\n'}PO0001</Text>
                    <Text style={{ textAlign: 'center', marginTop: 15, color: '#6c6f78', fontSize: 13, }}>Schedule Date{'\n'}12/12/2023</Text>
                </View>


                <View style={styles.cont2b} >
                    <View style={styles.table_header}>
                        <Text style={{ color: 'white', fontSize: 15, }}>Product</Text>
                        <Text style={{ color: 'white', fontSize: 15, }}>Demand</Text>
                        <Text style={{ color: 'white', fontSize: 15, }}>Done</Text>
                    </View>
                    <View style={styles.horizontalLine} />

                    <View style={styles.table_rows}>
                        <Text style={{ fontSize: 13, color: 'white', }}>Bag123</Text>
                        <Text style={{ fontSize: 13, color: 'white', }}>10</Text>
                        <Text style={{ fontSize: 13, color: 'white', }}>10</Text>

                    </View>

                    <View style={styles.horizontalLine_2} />

                    <View style={styles.table_rows}>
                        <Text style={{ fontSize: 13, color: 'white', }}>Bag123</Text>
                        <Text style={{ fontSize: 13, color: 'white', }}>10</Text>
                        <Text style={{ fontSize: 13, color: 'white', }}>10</Text>
                    </View>

                    <View style={styles.horizontalLine_2} />


                </View>


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
        backgroundColor: "#30333e",
        height: "60%",
        width: "84%",
        marginHorizontal: 13,
        marginTop: 20,
        borderRadius: 20,
    },

    cont2a: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 5,
    },


    cont2b: {
        marginTop: 30,

        marginHorizontal: 5,
    },

    table_header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    horizontalLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 8,
    },
    horizontalLine_2: {
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        marginVertical: 10,
        marginHorizontal: 8,
    },


    table_rows: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    contx: {
        height: "10%",
    },

})





export default VendorReceiptDetails;