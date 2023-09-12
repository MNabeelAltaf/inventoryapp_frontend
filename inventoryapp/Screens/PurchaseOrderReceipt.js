import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';

const PurchaseOrderReceipt = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cont2}>
                <View style={styles.cont2a}>
                    <Text style={{ textAlign: 'center', marginTop: 15, color: '#6c6f78', fontSize: 13, }} >Vendor{'\n'}Bliss ERP</Text>
                    <Text style={{ textAlign: 'center', marginTop: 15, color: '#6c6f78', fontSize: 13, }}>Confirm Date{'\n'}12/08/2023</Text>
                    <Text style={{ textAlign: 'center', marginTop: 15, color: '#6c6f78', fontSize: 13, }}>Arrival Date{'\n'}12/08/2023</Text>
                </View>
                <Text style={{ textAlign: 'center', marginTop: 20, color: '#6c6f78', fontSize: 13, }}>Address: Sequim street 12 villa 20 Dubai,{'\n'}UAE</Text>

                <View style={styles.cont2b} >
                    <View style={styles.table_header}>
                        <Text style={{ color: 'white', fontSize: 15, }}>Product</Text>
                        <Text style={{ color: 'white', fontSize: 15, }}>Qty</Text>
                        <Text style={{ color: 'white', fontSize: 15, }}>Price</Text>
                        <Text style={{ color: 'white', fontSize: 15, }}>Subtotal</Text>
                    </View>
                    <View style={styles.horizontalLine} />

                    <View style={styles.table_rows}>
                        <Text style={{ fontSize: 13, color: 'white', }}>Bag123</Text>
                        <Text style={{ fontSize: 13, color: 'white', }}>10</Text>
                        <Text style={{ fontSize: 13, color: 'white', }}>100$</Text>
                        <Text style={{ fontSize: 13, color: 'white', }}>1000$</Text>

                    </View>

                    <View style={styles.horizontalLine_2} />

                    <View style={styles.table_rows}>
                        <Text style={{ fontSize: 13,  color:'white',}}>Bag123</Text>
                        <Text style={{ fontSize: 13,  color:'white',}}>10</Text>
                        <Text style={{ fontSize: 13,  color:'white',}}>100$</Text>
                        <Text style={{ fontSize: 13,  color:'white',}}>1000$</Text>
                    </View>

                    <View style={styles.horizontalLine_2} />

                    <Text style={{ textAlign: 'right', fontSize: 15, color: 'white', marginRight: 15, marginVertical: 16, }}>Total: 2000$</Text>

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
        width: "80%",
        marginHorizontal: 13,
        marginTop: 20,
        borderRadius: 20,
    },

    cont2a: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
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





export default PurchaseOrderReceipt;