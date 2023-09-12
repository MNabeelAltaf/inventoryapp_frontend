import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';


const ReceiptDubaiDetail = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.cont2} >
                <Text style={{ fontSize: 16, color: '#a4a4ae'}} >Todo (7)</Text>
                <Text style={{ fontSize: 16,color: '#a4a4ae' }}>Done (5)</Text>
            </View>
            <View style={styles.horizontalLine} />

            <View style={styles.cont3}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("ScanProduct")} >
                    <Text style={{ color: 'white' , fontSize: 15, textAlign: 'left', paddingLeft: 15, }} >
                        GUCCI BAG {'\n'}
                        <Text style={{ fontSize: 11,color: 'white', }}>Initial Qty: 7</Text>{'\n'}
                    </Text>
                    <Text style={{ marginRight: 15, fontSize: 12,color: 'white', }} >7 Units</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btn} >
                    <Text style={{ fontSize: 15, textAlign: 'left', paddingLeft: 15,color: 'white', }} >
                        GUCCI BAGS {'\n'}
                        <Text style={{ fontSize: 11,color: 'white', }}>Initial Qty: 10</Text>{'\n'}
                    </Text>
                    <Text style={{ marginRight: 15, fontSize: 12,color: 'white', }} >15 Units</Text>
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

    cont2: {

        height: 50,
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    horizontalLine: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        // marginVertical: 5,
        marginHorizontal: 12,
    },

    cont3: {


        // marginHorizontal: 1,
        marginVertical: 10,

        height: 120,

        paddingHorizontal: 10,
        marginBottom: 190,
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

export default ReceiptDubaiDetail;