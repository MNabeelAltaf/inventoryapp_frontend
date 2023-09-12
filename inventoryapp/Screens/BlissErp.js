import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';

const BlissErp = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cont2}>
                <View style={styles.cont2a} >
                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('PurchaseOrders')}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize:11, color:'white'}}>17{'\n'}Purchases</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('VendorBills')}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: 'bold',fontSize:11,color:'white' }}>4{'\n'}Vendor Bills</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('VendorReceipt')}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: 'bold',fontSize:11,color:'white' }}>15{'\n'}Receipts</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cont3}>
                    <Text style={{ marginVertical: 7, color: '#6c6f78', }}>Email: lamine@blisserpsolution.com</Text>
                    <Text style={{ marginVertical: 7, color: '#6c6f78', }}>Phone: 0775010415</Text>
                    <Text style={{ marginVertical: 7, color: '#6c6f78', }}>Mobile: 0775010415</Text>
                    <Text style={{ marginVertical: 7, color: '#6c6f78', textAlign: 'center' }}>
                        Address: Sequim street 12 villa 20 Dubai, {'\n'}UAE
                    </Text>
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
        backgroundColor: '#30333e',
        // marginTop: 40,
        marginVertical: 10,
        height: "50%",
        width: "85%",
        marginHorizontal: 15,
        borderRadius: 20,
    },

    cont2a: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        paddingHorizontal:2,
        marginHorizontal:5,
    },

    btn: {
        backgroundColor: '#607d8b',
        width: 140,
        height: 60,
        padding: 10,
        borderRadius: 20,
    },

    cont3: {
        marginTop: 20,
        marginLeft: 13,
    },

    contx: {
        height: "25%",
    },
})


export default BlissErp;