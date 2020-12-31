import React from "react";
import {Text, View, Image} from "react-native";

export default class Home extends React.Component{

    render () {
        const {navigate} = this.props.navigation
        return (
            <View style={{backgroundColor:"#FFF", height: "100%"}}>
                <Image source={require('../images/home.jpg')}
                    style={{width: "100%", height:"70%"}}
                />
                
                <View style={{
                    flexDirection:"row",
                    alignItems: "center",
                    marginHorizontal:55,
                    marginTop:30,
                    paddingHorizontal:60,
                    paddingVertical:2
                }}>
                    <Text>Welcome to Home Page!</Text>
                </View>
            </View>
        )
    }
}