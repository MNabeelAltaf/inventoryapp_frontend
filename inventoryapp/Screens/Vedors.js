import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native';
import Footer from './Footer';


const Vendors = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.cont1}>
                <TextInput style={styles.input} placeholder='Search' placeholderTextColor="white" />

            </View>

            <View style={styles.cont3}>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("BlissErp")} >
                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'left',paddingLeft: 15, }} >BLISS ERP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'left', paddingLeft: 15, }}>BLISS ERP</Text>
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


    cont3: {


        // marginHorizontal: 1,
        marginVertical: 10,

        height:90,
        
        paddingHorizontal: 10,
        marginBottom: 300,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    btn: {

        marginHorizontal: 10,
        backgroundColor: '#30333e',
        marginTop:10,
        width: "90%",
        paddingVertical: 18,
        borderRadius: 20,

    
        
    },
})

export default Vendors;