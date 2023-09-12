import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';


const Search_Products = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cont1}>
                <TextInput style={styles.input} placeholder='Product Name' placeholderTextColor="white" />
                <TextInput style={styles.input} placeholderTextColor="white" placeholder='Quantity' />
                <TextInput style={styles.input} placeholder='Taxes' placeholderTextColor="white" />
            </View>
           


            <View style={styles.cont3}>
                <TouchableOpacity style={styles.btn} >
                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }} >Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>Cancel</Text>
                </TouchableOpacity>
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

        width: 150,
        height: 150,
        borderRadius: 20,
    },

    cont3: {

    
        marginHorizontal: 15,
        marginVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 190,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    btn: {

        backgroundColor: '#30333e',
        margin: 10,
        width: 130,
        paddingVertical: 15,
        borderRadius: 20,
    },
})

export default Search_Products;