import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Header from 'header';
import TextBox from '@/Component/TextBox'
import { FONT_FAMILIES, REGEX } from '@/Configration';
import { VALIDATE_FORM } from '@/Constant';
import { loginBody } from 'types';
import CustomButton from '@/Component/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCREENS } from '@/Constant';
import adjust from '@/Component/adjust';
import { Base64 } from 'js-base64';
const { MAIN, REGISTER } = SCREENS;

export default function Login(props: any) {
    const { navigation } = props;
    const [email, setEmail] = useState<string>('');
    const [checkEmail, setCheckEmail] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<string | null>(null);

    const [password, setPassword] = useState<string>('');
    const [checkPassword, setCheckPassword] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<string | null>(null);
    const [encryptedDecryptedValue, setEncryptedDecryptedValue] = useState('');
    // *********************************_emailvalidate**********************************************
    const _emailvalidate = (mail: any) => {
        var emailRegex = REGEX.EMAIL
        if (mail === '') {
            setErrorEmail(VALIDATE_FORM.EMAIL);
            setCheckEmail(true);
        } else if (!emailRegex.test(mail)) {
            setErrorEmail(VALIDATE_FORM.EMAIL_VALID);
            setCheckEmail(true);
        } else {
            setErrorEmail(null);
            setCheckEmail(false);
        }
    };

    // *********************************_passwordvalidate**********************************************
    const _passwordvalidate = (pass: any) => {
        var passwordRegex = REGEX.PASSWORD
        if (pass === '') {
            setErrorPassword(VALIDATE_FORM.PASSWORD);
            setCheckPassword(true);
        } else if (!passwordRegex.test(pass)) {
            setErrorPassword(VALIDATE_FORM.VALID_PASSWORD);
            setCheckPassword(true);
        } else {
            setErrorPassword(null);
            setCheckPassword(false);
        }
    };
    const encryption = () => {
        let encryptValue = Base64.encode(password);
        setEncryptedDecryptedValue(encryptValue)
    }
    const decryption = () => {
        let decryptValue = Base64.decode(encryptedDecryptedValue)
        setEncryptedDecryptedValue(decryptValue)
    }
    // ********************************* validate function *******************************************
    const validate = () => {
        let flag = true;
        if (email === '' || checkEmail) {
            setErrorEmail(errorEmail ? errorEmail : VALIDATE_FORM.EMAIL);
            flag = false;
        }
        if (password === '' || checkPassword) {
            setErrorPassword(errorPassword ? errorPassword : VALIDATE_FORM.PASSWORD);
            flag = false;
        } else {
            return flag;
        }
    };

    // ********************************** User Login ***********************************************
    const userLogin = () => {
        if (validate()) {
            const body: loginBody = {
                'email': email,
                'password': password
            }
            AsyncStorage.setItem('user', JSON.stringify(body))
            encryption()
            navigation.navigate(MAIN);
        }
    }

    // ********************************** User Register ********************************************
    const userRegister = () => {
        navigation.navigate(REGISTER);
    }

    return (
        <View style={styles.container}>
            <Header title={'Login'} isBackHide />
            <View style={styles.main}>
                <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
                    <View style={styles.box}>
                        <TextBox placeholder={'Enter Email'} value={email} setValue={setEmail} validate={_emailvalidate} />
                        {errorEmail !== null ? <Text style={styles.errortxt}>{errorEmail}</Text> : null}
                        <TextBox placeholder={'Enter Password'} value={password} setValue={setPassword} validate={_passwordvalidate} secure style={styles.txt}/>
                        {errorPassword !== null ? <Text style={styles.errortxt}>{errorPassword}</Text> : null}
                        <CustomButton label={'Login'} press={userLogin} txtStyle={styles.txt}/>
                        <CustomButton label={'Register'} press={userRegister} txtStyle={styles.txt}/>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: .8,
        margin: 20,
        justifyContent: 'flex-end'
    },
    box: {
        flex: .8
    },
    errortxt: {
        color: 'red',
        fontSize: adjust(12),
        fontFamily: FONT_FAMILIES.LIGHT
    },
    txt:{
        fontSize:adjust(15)
    }
})
