import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Constant from '@/Constant';
import { Images } from '@/Assets';
const { MAIN, LOGIN } = Constant.SCREENS

const Splash = (props: any) => {
    const { navigation } = props

    useEffect(() => {
        // function execute when this screen render
        getUserData();
    }, []);

    // ************************ fetch data from asyncStorage **************************
    const getUserData = async () => {
        try {
            let data:any = await AsyncStorage.getItem('user');
            const userData = JSON.parse(data);
            if (userData) {
                // if async storage has data app move to dashboard
                navigation.navigate(MAIN);
            } else {
                // otherwise app go to login screen 
                navigation.navigate(LOGIN);
            }
        } catch (error) {
            // in any error case also, app move to login screen
            navigation.navigate(LOGIN);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={Images.splash} style={styles.img} />
        </View>
    );
};

export default Splash;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    img: {
        height: '100%',
        width: '100%'
    }
});
