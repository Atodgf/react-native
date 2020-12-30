import React from "react";
import { View, StyleSheet } from "react-native";
import { 
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
 } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { AuthContext } from '../components/context'

export default function DrawerContent (props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false)

    const { signOut } = React.useContext(AuthContext)

    const { HomeScreen } = React.useContext(AuthContext)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}> 
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image source={{
                                uri: 'https://images.unsplash.com/photo-1609259725872-c0066636a008?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Tyrell James</Title>
                                <Caption style={styles.caption}>@visualsbytyy</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>636</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>507</Paragraph>
                                <Caption style={styles.caption}>Follower</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item 
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                                label="Home"
                                onPress={() => {props.navigation.navigate('HomeScreen')}}
                        />
                         
                         
                        <Drawer.Item 
                        icon={({color, size}) => (
                                <Icon 
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                                )}
                                label="Details"
                                onPress={() => {props.navigation.navigate('DetailsScreen')}}
                            />                
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={() => {toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDarkTheme}/>
                                    </View>
                                </View>
                            </TouchableRipple>
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
    userInfoSection: {
        paddingLeft:20,
    },
    title: {
        fontSize:16,
        marginTop:3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize:14,
        lineHeight:14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection:'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight:'bold',
        marginRight:3,
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