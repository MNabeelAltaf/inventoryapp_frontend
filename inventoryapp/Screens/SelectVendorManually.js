import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';


const SelectVendorManually = ({ navigation }) => {
    return (
        <View style={styles.mainContainer} >
            <View style={styles.container2}>

                <View style={styles.container2a}>
                    <View style={styles.container2a_1} >
                        <Text style={{ fontSize: 16, color: 'white', }}>PO0001</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ backgroundColor: '#68fc7f', fontSize: 11, color: 'black', textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 19, paddingVertical: 7, borderRadius: 20, }} >Vendor Info </Text>

                            <Image
                                source={require('./Images/img_9.png')}
                                style={styles.images_c}
                            />

                        </View>
                    </View>
                    <View style={styles.container2a_2} >
                        <Text style={{ fontSize: 14, color: 'white', }}>Bliss ERP</Text>
                        <Text style={{ fontSize: 14, color: 'white', }}>TOTAL: 25800.50 USD</Text>
                    </View>
                </View>
                {/* --- */}
                <View style={styles.container2b}>

                    <View style={styles.container2b_1}>
                        <View>
                            <Image
                                source={require('./Images/img_7.png')}
                                style={styles.images_a}
                            />
                        </View>
                        <View >
                            <View style={{ flexDirection: 'column', marginTop: 0, }}>
                                <Text style={{ marginRight: 20, fontSize: 12, color: 'white', marginVertical: 9, marginLeft: 20, }}>[00001_125450] GUCCI BAG</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10, }}>
                                    <Text style={{ textAlign: 'center', fontSize: 12, paddingLeft: 1, color: '#a4a4ae', marginLeft: 20, }}>QTY{'\n'}50</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 12, paddingLeft: 20, color: '#a4a4ae', marginLeft: 5, }}>Arrival date{'\n'}12/12/2023</Text>
                                </View>
                            </View>
                        </View>
                        <View>

                            <Image
                                source={require('./Images/img_8.png')}
                                style={styles.images_b}
                            />

                        </View>
                    </View>


                    <View style={styles.container2b_2}>
                        <Text style={{ textAlign: "center", color: '#a4a4ae', }}>Quantity{'\n'}10</Text>
                        <Text style={{ textAlign: "center", color: '#a4a4ae', }}>PRICE{'\n'}120.50 USD</Text>
                        <Text style={{ textAlign: "center", color: '#a4a4ae', }}>SUBTOTAL{'\n'}1250.00 USD</Text>
                    </View>
                </View>
                {/* --- */}
                <View style={styles.container2c} >
                    <TouchableOpacity style={styles.container2c_1}
                        onPress={() => navigation.navigate('Add_Products')}
                    >
                        <Text style={{ textAlign: "center", color: 'white', fontWeight: 'bold', fontSize: 17, }}>SELECT PRODUCT MANUALLY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container2c_1}>
                        <Text style={{ textAlign: "center", color: 'white', fontWeight: 'bold', fontSize: 17, }}>Save</Text>
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

    container2: {

        height: "80%",
        marginHorizontal: 5,
        margin: 2,

    },


    container2a: {
        flexDirection: 'column',
        backgroundColor: '#607d8b',
        marginHorizontal: 20,
        marginTop: 12,
        borderRadius: 20,

    },
    container2a_1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,

    },
    container2a_2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 8,
        padding: 10,
        paddingBottom: 25,
    },

    // ------


    container2b: {
        backgroundColor: '#30333e',
        height: "35%",
        marginHorizontal: 20,
        marginTop: 12,
        borderRadius: 20,
        paddingHorizontal: 15,

    },
    container2b_1: {

        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    images_a: {

        width: 65,
        height: 68,
        borderRadius: 10,


    },
    images_b: {
        width: 60,
        height: 60,

    },
    images_c: {
        width: 20,
        height: 30,

    },
    container2b_2: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        paddingVertical: 18,

    },

    container2c: {

        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    container2c_1: {
        backgroundColor: '#30333e',
        width: "100%",
        marginVertical: 5,
        paddingVertical: 15,
        borderRadius: 20,
    },

    contx: {
        height: "0%",
    },

})


export default SelectVendorManually;