
import React from "react";
import { View, Text, TouchableOpacity,  TextInput, StyleSheet, StatusBar, Image, Alert } from 'react-native';
import { AuthContext } from '../components/context'

const Register = ({navigation}) =>{

    const [data, setData] = React.useState ({
        login: '',
        password: '',
        confirmPassword: ''
    })

    const { signUp } = React.useContext(AuthContext)

    const handleLoginChange = (val) => {
        setData({
            ...data,
            login:val
        })
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password:val
        })
    }
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword:val
        })
    }


    const registerHandle = (login, password) => {
        
        if ( data.password !== data.confirmPassword ) {
            Alert.alert('Wrong Input!', 'Password doesn\'t match', [
                {text: 'Okay'}
            ]);
            return;
        }  else {
            navigation.navigate("Login")
            signUp(login, password)
        }
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='light-content'/>
            <View style={styles.header}>
                <Image source={require('../images/register.jpg')}
                                    style={{width: "100%", height:"100%"}}
                                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Login</Text>
                <View style={styles.action}>
                    <TextInput 
                        placeholder="Your Login"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleLoginChange(val)}
                    />
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <TextInput 
                        placeholder="Your Password"
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <TextInput 
                        placeholder="Confirm Your Password"
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                </View>
                <TouchableOpacity  
                    style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop:25
                        }]}
                        onPress={()=> {registerHandle(data.login, data.password)}}
                        >
                    <Text style={styles.textSign}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop:15
                    }]}
                    onPress={() => navigation.goBack()}>
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }

export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: '#009387'
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
