import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, } from 'react-native';

import Footer from './Footer';


const CreatePurchase = ({ navigation }) => {


    const record = [
        {
            code: 'PO00001',
            status: 'RFQ',
            vendor: 'Bliss ERP',
            order_date: '12/08/2023',
            schedule_date: '12/08/2023',
            untax_amount: '25000.00',
            total_amount: '25000.00'
        },
        {
            code: 'PO00001',
            status: 'Purchase Order',
            vendor: 'Bliss ERP',
            order_date: '12/08/2023',
            schedule_date: '12/08/2023',
            untax_amount: '25000.00',
            total_amount: '25000.00'
        },
        {
            code: 'PO00001',
            status: 'Purchase Order',
            vendor: 'Bliss ERP',
            order_date: '12/08/2023',
            schedule_date: '12/08/2023',
            untax_amount: '25000.00',
            total_amount: '25000.00'
        },
    ]


    return (
        <View style={styles.mainContainer}>
            <View style={styles.cont2}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="white"
                    placeholder='Search'
                />


                <FlatList
                    data={record}
                    renderItem={({ item }) => {

                        return (

                            <View style={styles.cont2a}>
                                <View style={styles.cont2a_1}>

                                    <Text style={{ fontSize: 17, color: 'white', }}>{item.code}</Text>

                                    {
                                        item.status == "RFQ" ?
                                            <Text style={{ backgroundColor: '#2295f4', fontSize: 11, color: 'white', textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 51, paddingVertical: 7, borderRadius: 20, }} >{item.status}</Text> :
                                            <Text style={{ backgroundColor: '#68fc7f', fontSize: 11, color: 'black', textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 19, paddingVertical: 7, borderRadius: 20, }} >{item.status}</Text>

                                    }


                                </View>

                                <View style={styles.cont2a_2}>
                                    <Text style={{ textAlign: 'center', color: '#6c6f78', }}>Vendor {'\n'} {item.vendor}</Text>
                                    <Text style={{ textAlign: 'center', color: '#6c6f78', }}>Order Date {'\n'} {item.order_date}</Text>
                                    <Text style={{ textAlign: 'center', color: '#6c6f78', }}>Schedule Date {'\n'} {item.schedule_date}</Text>
                                </View>
                                <View style={styles.cont2a_3}>
                                    <Text style={{ textAlign: 'center', color: '#6c6f78', }}>Untaxed Amount {'\n'}{item.untax_amount} USD</Text>
                                    <Text style={{ textAlign: 'center', color: '#6c6f78', }}>Total Amount {'\n'} {item.total_amount} USD</Text>

                                </View>
                                <View style={styles.cont2a_4}></View>
                            </View>
                        )
                    }}

                />

                <View style={styles.cont3}>
                    <TouchableOpacity style={styles.cont3a}
                        onPress={() => navigation.navigate('CreateNewPurchaseOrder')}
                    >
                        <Text style={styles.cont3b} >+</Text>
                    </TouchableOpacity>
                </View>
              
                    <Footer />
              

            </View>
        </View>
    );
};



const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: "#242733",
        height: '100%',
    },

    cont2: {
        margin: 15,
        marginTop: 40,
        height: '100%',
    },

    input: {
        backgroundColor: '#30323e',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'black',

    },

    cont2a: {
        backgroundColor: '#30323e',
        flexDirection: 'column',
        marginHorizontal: 20,
        marginVertical: 3,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 0,
    },
    cont2a_1: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    cont2a_2: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
    },

    cont2a_3: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        paddingBottom: 20,
    },

    cont3: {

        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        position: 'absolute',
        top: "64%",
        left: 0,
        right: "2%",
        bottom: 0,

    },
    cont3a: {
        backgroundColor: '#4cb050',
        textAlign: 'right',
        width: 55,
        height: 55,
        borderRadius: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


    },
    cont3b: {
        fontSize: 30
    },

    contx: {
        paddingVertical:1,
        marginVertical: 1,
    },


})

export default CreatePurchase;