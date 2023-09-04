import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Divider, Image, ListItem } from 'react-native-elements';
import { COLORS, FONT_FAMILIES, METRICS } from "@/Configration";
import { Images } from '@/Assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Constant from '@/Constant';
import { drawerMenu, drawerSelect } from '@/Types';
import adjust from '@/Component/adjust';
const {
    MAIN,
    LOGIN
} = Constant.SCREENS;

// ********************** Data Source for drawer ************************************** 
const menuArray: drawerMenu[] = [
    {
        name: 'Home',
        image: Images.home1,
        isActive: true,
        screen: MAIN,
    },
    {
        name: `Account`,
        image: Images.user,
        isActive: true,
        screen: MAIN,
    },
    {
        name: 'Settings',
        image: Images.setting,
        isActive: true,
        screen: MAIN,
    },
    {
        name: 'Logout',
        image: Images.logout,
        isActive: true,
        screen: LOGIN,
    },

];

const DrawerContent = (props: any) => {
    const { navigation } = props;

    // **************************** logOut function *****************************
    const logoutApi = () => {
        // remove data from asyncStorage also
        AsyncStorage.removeItem("user")
        navigation.navigate(LOGIN)
    }

    // ************************* function to move the screen selected ***********
    const onSelectMenu = (data: drawerSelect) => {
        const { screen, name } = data;
        // when select any option then the drawer close
        navigation.closeDrawer();
        if (name === 'Logout') {
            const actions = [
                {
                    text: 'No', onPress: () =>
                        console.log('cancel Pressed')
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        logoutApi()
                    }
                }
            ];
            Alert.alert('Logout', Constant.VALIDATE_FORM.LOGOUT, actions, { cancelable: false });
        } else {
            navigation.navigate(screen);
        }
    };

    // ****************** Profile view in upper of drawer *************************
    const renderProfile = () => {
        return (
            <View style={styles.profile}>
                <Image source={Images.dummy} style={styles.profileImage} />
                <Text style={styles.title}>{"Joey"}</Text>
            </View>
        )
    }

    // ******************** rendering drawerMenu ***********************************
    const renderMenu = (item: any) => {
        const { image, name, screen } = item.item;
        return (
            <TouchableOpacity
                key={name}
                onPress={() => onSelectMenu({ name, screen })}
                style={styles.menuItem}>
                <ListItem containerStyle={styles.drawerContainer}>
                    <Image source={image} style={styles.menuIcon} />
                    <ListItem.Title style={styles.txt}> {name}</ListItem.Title>
                </ListItem>
                <Image source={Images.arrow} style={styles.arrowimg} />
            </TouchableOpacity>
        );
    };

    const renderSeprator = () => {
        return <Divider orientation={'horizontal'} color={'white'} />
    }
    return (
        <View style={styles.container}>
            {renderProfile()}
            <FlatList
                data={menuArray} renderItem={renderMenu}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={renderSeprator}
            />
        </View>
    );
};
export default DrawerContent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 8,
    },
    menuIcon: {
        height: 25,
        width: 25,
    },
    profileImage: {
        height: 80,
        borderRadius: 80,
        borderColor: COLORS.WHITE,
        borderWidth: 1,
        width: 80,
        resizeMode: 'cover',
    },
    title: {
        marginTop: METRICS.MAR_10,
        color: COLORS.WHITE,
        fontSize: adjust(15),
        fontFamily: FONT_FAMILIES.REGULAR
    },
    profile: {
        backgroundColor: COLORS.BLACK,
        alignItems: 'center',
        paddingTop: METRICS.MAR_50,
        paddingBottom: METRICS.MAR_20,
    },
    arrowimg: {
        height: 18,
        width: 18,
        tintColor: 'white'
    },
    drawerContainer: { backgroundColor: 'transparent' },
    txt: { color: 'white', fontSize: adjust(14), fontFamily: FONT_FAMILIES.REGULAR }
});
