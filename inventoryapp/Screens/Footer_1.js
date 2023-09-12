import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container1}>
            <View style={styles.container1a} >
                <View style={styles.cont2}>
                    <View >
                        <TouchableOpacity style={styles.cont2a}>
                            <Image
                                source={require('./Images/footer_img_1.png')}
                                style={styles.images_a}
                            />
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', fontSize:12, marginTop: 10, color:'white'  }}>Settings</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.cont2a}>
                            <Image
                                source={require('./Images/footer_img_2.png')}
                                style={styles.images_a}
                            />
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', fontSize:12, marginTop: 10, color:'white'  }}>About Us</Text>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.cont2a}>
                            <Image
                                source={require('./Images/footer_img_3.png')}
                                style={styles.images_a}
                            />
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center',fontSize:12, marginTop: 10, color:'white'  }}>Logout</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container1: {
        backgroundColor: "#242733",
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingTop:0,
    },

    container1a: {
        height: '64%',
        margin: 10,
        marginBottom: 25,
    },


    cont2: {
        marginTop: 8,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    cont2a: {
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
})

export default Footer;