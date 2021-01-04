import React, { useState, useEffect } from 'react';
import { 
  View,
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert
 } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Location from 'expo-location';

const Dev_Height = Dimensions.get('window').height
const Dev_Width = Dimensions.get('window').width


const  Weather = () => {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied')
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetch('http://api.openweathermap.org/data/2.5/forecast?lat='+location.coords.latitude+'&lon='+location.coords.longitude+'&appid=de68b0392ab9d2b6c38dfd49641e76be')  
        .then((responce)=>responce.json())
        .then((json=>{
          setData({
            temp:((json.list[0].main.temp-273.15).toFixed(1)+" °C"),
            cityDisplay:json.city.name,
            country:json.city.country,
            icon:json.list[0].weather[0].icon,
            main:json.list[0].weather[0].main,
            desc:json.list[0].weather[0].description,
            pressure:json.list[0].main.pressure+" hPa",
            wind:json.list[0].wind.speed+" m/s"
            })
        })).catch((err)=> console.log(err))
      setLocation(location);
    })();
  }, []);
  

  const [data, setData] = React.useState ({
      city:"",
      icon:"",
      cityDisplay:"",
      desc:"",
      main:"",
      wind: "",
      pressure:"",
      country:"",
  })
  
  console.log(location)
 
  const fetchWeather=(i)=>{
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+data.city+'&appid=de68b0392ab9d2b6c38dfd49641e76be')  
    .then((responce)=>responce.json())
    .then((json=>{
      setData({...data,
        temp:((json.list[i].main.temp-273.15).toFixed(1)+" °C"),
        cityDisplay:json.city.name,
        country:json.city.country,
        icon:json.list[i].weather[0].icon,
        main:json.list[i].weather[0].main,
        desc:json.list[i].weather[0].description,
        pressure:json.list[i].main.pressure+" hPa",
        wind:json.list[i].wind.speed+" m/s"
        })
    })).catch(()=> Alert.alert('Can\'t find city with that name!'))
  }

  const handleCityChange = (val) => {
    setData({
        ...data,
        city:val
    })
}


  return(
      <SafeAreaView style={styles.container}>
        <ImageBackground source={{
          uri:"https://images.unsplash.com/photo-1513628253939-010e64ac66cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}
          style={styles.imageBackgroundStyle}>
            <View style={styles.searchBoxView}>
              <TextInput
                placeholder="Search"
                placeholderTextColor="#FFF"
                style={styles.searchBox}
                onChangeText={(val) => handleCityChange(val)}
              />  
          </View>

          <View style={styles.searchButtonView}>
              <TouchableOpacity style={styles.buttonSearch} onPress={()=>fetchWeather(0)}>
                <Icon name="search-outline" size={24} color ="#FFF"><Text style={styles.buttonText}> Today</Text></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSearch} onPress={()=>fetchWeather(8)}>
                <Icon name="search-outline" size={24} color ="#FFF"><Text style={styles.buttonText}> Tomorrow</Text></Icon>
              </TouchableOpacity>  
              <TouchableOpacity style={styles.buttonSearch} onPress={()=>fetchWeather(16)}>
                <Icon name="search-outline" size={24} color ="#FFF"><Text style={styles.buttonText}> Day after tomorrow</Text></Icon>
              </TouchableOpacity> 
          </View>

          <View style={styles.weatherBoxMain}>
            <View style={styles.weatherHolderView}>
              <Image source={{uri:"http://openweathermap.org/img/wn/"+data.icon+"@2x.png"}} style={styles.weatherImage}/>
              <View>
                <Text style={styles.temperatureText}>{data.temp}</Text>
                <Text style={styles.cityText}>{data.cityDisplay}</Text>
                <Text style={styles.cityText}>{data.country}</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBoxView}>
            <View style={styles.infoHolderView}>
              <Text style={styles.mainWeatherText}>{data.main}</Text>
              <Text style={styles.descText}>Description: {data.desc}</Text>
              <Text style={styles.otherText}>Pressure: {data.pressure}</Text>
              <Text style={styles.otherText}>Wind: {data.wind}</Text>
            </View>
          </View>
        </ImageBackground>
  
      </SafeAreaView>
    )
  }
 

 export default Weather
 const styles = StyleSheet.create({
   container: {
     height: Dev_Height,
     width: Dev_Width
   },
   imageBackgroundStyle: {
     height:"100%",
     width:"100%"
   },
   searchBoxView: {
     height:"12%",
     width:"100%",
     justifyContent:"center",
     alignItems:"center",
     flexDirection:"row"
   },
   searchBox: {
    height:"45%",
    width:"80%",
    borderColor:"#009387",
    backgroundColor:"rgba(0, 147, 135,0.1)",
    borderRadius:15,
    borderWidth:1,
    color:"#FFF",
    paddingHorizontal:15
  },
  searchButtonView: {
    height:"12%",
    width:"70%",
    marginBottom:"5%",
    marginLeft:"3%",
    
  },
  buttonSearch:{
    borderColor:"#009387",
    backgroundColor:"rgba(0, 147, 135,0.4)",
    borderRadius:15,
    borderWidth:1,
    color:"#FFF",
    paddingHorizontal:15,
    marginLeft:"10%",
    marginBottom:"3%",
  },
  buttonText:{
    fontSize:20
  },
  weatherBoxMain:{
    height:"30%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row", 
  },
  weatherHolderView:{
    height:"80%",
    width:"90%",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius:15,
    alignItems:"center",
    flexDirection:"row",
  },
  weatherImage:{
    height:"80%",
    width:"50%"
  },
  temperatureText:{
    fontSize:30,
    color:"#FFF",
    marginLeft:"5%"
  },
  cityText:{
    fontSize:20,
    color:"#FFF",
    marginLeft:"5%",
    marginTop:"3%"
  },
  infoHolderView:{
    height:"80%",
    width:"90%",
    backgroundColor:"rgba(255,255,255,0.7)",
    borderRadius:15,
  },

  infoBoxView:{
    height:"24%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
  mainWeatherText:{
    fontSize:28,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"1%"
  },
  descText:{
    fontSize:20,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"2%"
  },
  otherText:{
    fontSize:18,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"2%"
  }
 })


























// const DetailsScreen = ({navigation}) => {
//     return (
//       <View>
//         <Image source={require('../images/details.jpg')}
//                             style={{width: "100%", height:"80%"}}
//                         />
//         <View style={styles.container}>
//             <Text>Details Screen</Text>
          
//             <Button
//                 title="Go to home"
//                 onPress={() => navigation.navigate("Home")}
//             />
      
//         </View>
//       </View>
//     );
// };

// export default DetailsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });
