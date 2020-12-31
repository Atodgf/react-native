
import React from "react";
import { View, Text, TouchableOpacity,  TextInput, StyleSheet, StatusBar, Image } from 'react-native';
import { AuthContext } from '../components/context'

const Login = ({navigation}) =>{

    const [data, setData] = React.useState ({
        login: '',
        password: ''
    })

    const { signIn } = React.useContext(AuthContext)

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

    const loginHandle = (login, password) => {
        
        signIn(login, password)
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='light-content'/>
            <View style={styles.header}>
                <Image source={require('../images/login.jpg')}
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
                <TouchableOpacity  
                    style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop:15
                        }]}
                        onPress={()=> {loginHandle(data.login, data.password)}}>
                    <Text style={styles.textSign}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop:15
                    }]}
                    onPress={() => navigation.navigate("Register")}>

                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up!</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }

export default Login;

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
