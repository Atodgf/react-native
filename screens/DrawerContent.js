import React from "react";
import { View, StyleSheet } from "react-native";
import { Drawer } from "react-native-paper";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../components/context'

export default function DrawerContent ({props, navigation}) {

    const { signOut } = React.useContext(AuthContext)


    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}> 
                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item 
                            icon={({color, size}) => (
                                <Icon 
                                    name="format-list-bulleted"
                                    color={color}
                                    size={size}
                                />
                            )}
                                label="Menu"
                                style={{borderBottomWidth: 2,borderBottomColor:"#009387"}}
                        />
                        <Drawer.Item 
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                                label="Home"
                                onPress={() => navigation.navigate("Home")}
                        />
                        <Drawer.Item 
                        icon={({color, size}) => (
                                <Icon 
                                    name="cloud-outline"
                                    color={color}
                                    size={size}
                                />
                                )}
                                label="Weather"
                                onPress={() => navigation.navigate('Weather')}
                            />                
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Drawer.Item 
                    icon={({color, size}) => (
                        <Icon 
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex:1,
    },
    drawerSection: {
        marginTop:15,
    },
    bottomDrawerSection: {
        marginBottom:15,
        borderTopColor: '#f4f4f4',
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    }
})