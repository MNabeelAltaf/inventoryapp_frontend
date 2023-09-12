import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';

const WarehouseOperations = ({navigation}) => {

    const record = [

        {
            city: 'DUBAI',
            operation_1: 'Receipts',
            operation_2: 'Internal Transfer',
            operation_3: 'Delivery Orders',
            pickings: '12',

        },

        {
            city: 'CHINA',
            operation_1: 'Receipts',
            operation_2: 'Internal Transfer',
            operation_3: 'Delivery Orders',
            pickings: '12',

        },
        {
            city: 'HONG KONG',
            operation_1: 'Receipts',
            operation_2: 'Internal Transfer',
            operation_3: 'Delivery Orders',
            pickings: '12',

        },

    ];

    return (
        <View style={styles.mainContainer}>




            <FlatList
                data={record}
                renderItem={({ item }) => {

                    return (

                        <View style={styles.cont2} >
                            <Text style={{ fontSize: 25, marginBottom: 5, color: '#72b2ed' }}>{item.city}</Text>
                            <View style={styles.cont2a}>
                                <TouchableOpacity style={styles.btn}
                                    onPress={() => navigation.navigate("ReceiptDubai")}
                                >
                                    <Text style={{ fontSize: 16, marginLeft: 4,  color:'white',}}>{item.operation_1}</Text>
                                    <Text style={{ backgroundColor: '#68fc7f', fontSize: 10, color: 'black', textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 19, paddingVertical: 7, marginRight: 10, borderRadius: 20, }} >{item.pickings} Picking</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={{ fontSize: 16, marginLeft: 4,color: 'white' }}>{item.operation_2}</Text>
                                    <Text style={{ backgroundColor: '#68fc7f', fontSize: 10, color: 'black', textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 19, paddingVertical: 7, marginRight: 10, borderRadius: 20, }} >{item.pickings} Picking</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={{ fontSize: 16, marginLeft: 4, color: 'white'}}>{item.operation_3}</Text>
                                    <Text style={{ backgroundColor: '#68fc7f', fontSize: 10, color: 'black', textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 19, paddingVertical: 7, marginRight: 10, borderRadius: 20, }} >{item.pickings} Picking</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    )
                }}

            />

            {/* <View style={styles.contx} ></View> */}
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
        margin: 10,
        marginVertical: 8,
    },

    cont2a: {



        flexDirection: 'column',
        alignItems: 'center',


    },

    btn: {

        marginHorizontal: 10,
        backgroundColor: '#30333e',
        marginTop: 7,
        width: "90%",
        paddingVertical: 22,
        paddingHorizontal: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    contx: {

        height: "0%",
    },
})

export default WarehouseOperations;