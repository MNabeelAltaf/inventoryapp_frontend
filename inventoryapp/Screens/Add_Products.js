import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';


const Add_Products = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View>
                <View style={styles.cont1}>
                    <TextInput style={styles.input} placeholder='Product Name' placeholderTextColor="white" />
                    <TextInput style={styles.input} placeholderTextColor="white" placeholder='Product Price' />
                    <TextInput style={styles.input} placeholder='Vendor' placeholderTextColor="white" />
                </View>
                <Text style={{ marginLeft: 15, fontSize: 12, color: '#a4a4ae', }}>Add Image</Text>

                <View style={styles.cont2}>
                    <Image

                        source={require('./Images/img_7.png')}
                        style={styles.images_a}

                    />
                </View>


                <View style={styles.cont3}>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate("Search_Products")}
                    >
                        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }} >Save</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>

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

        marginVertical: 10,

    },
    cont2: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },

    images_a: {

        width: 120,
        height: 120,
        borderRadius: 20,
    },

    cont3: {


        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    btn: {

        backgroundColor: '#30333e',
        margin: 10,
        width: 140,
        paddingVertical: 15,
        borderRadius: 20,
    },





})

export default Add_Products;