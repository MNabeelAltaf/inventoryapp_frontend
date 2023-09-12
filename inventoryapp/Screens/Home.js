import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Footer_1 from './Footer_1';


const Home = ({ navigation }) => {
    return (
        <View style={styles.mainContainer} >
            <View style={styles.cont2}>

                <View >
                    <TouchableOpacity style={styles.cont2_1}>
                        <Image
                            source={require('./Images/img_1.png')}
                            style={styles.images_a}
                        />

                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: 12, marginTop: 10, color: 'white' }}>Create Sale {'\n'} Orders</Text>
                </View>
                <View >
                    <TouchableOpacity style={styles.cont2_1}
                        onPress={() => navigation.navigate('CreatePurchase')}
                    >
                        <Image
                            source={require('./Images/img_2.png')}
                            style={styles.images_a}
                        />

                    </TouchableOpacity>
                    <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 10, marginLeft: -8, color: 'white' }}>Create Purchase {'\n'}</Text>
                </View>
                <View >
                    <TouchableOpacity style={styles.cont2_1}
                    onPress={()=>navigation.navigate('WarehouseOperations')}
                    >
                        <Image
                            source={require('./Images/img_3.png')}
                            style={styles.images_a}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: 12, color: 'white', marginTop: 10, }}>Warehouse {'\n'}Operations</Text>
                </View>
            </View>
            {/* ---------- */}
            <View style={styles.cont3}>

                <View >
                    <TouchableOpacity style={styles.cont3_1}
                    onPress={()=> navigation.navigate('Vendors')}
                    >
                        <Image
                            source={require('./Images/img_4.png')}
                            style={styles.images_a}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', marginTop: 10, color: 'white', fontSize: 12, }}>Vendors</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.cont3_1}>
                        <Image
                            source={require('./Images/img_5.png')}
                            style={styles.images_a}
                        />
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', marginTop: 10, color: 'white', fontSize: 12, }}>Products</Text>
                </View>
            </View>
            <Footer_1 />
        </View>
    );
};

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: "#242733",
        height: '100%',
    },

    cont2: {
        marginTop: 30,
        width: "100%",
        height: "25%",

        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },

    cont2_1: {
        backgroundColor: '#30333e',
        width: 100,
        height: 100,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    // ---------


    cont3: {
        marginTop: 8,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },


    cont3_1: {
        backgroundColor: '#30333e',
        width: 100,
        height: 100,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },


    images_a: {

        width: 40,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

});


export default Home;