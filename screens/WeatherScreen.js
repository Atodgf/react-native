import React from 'react';
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

 const Dev_Height = Dimensions.get('window').height
 const Dev_Width = Dimensions.get('window').width

 export default class Weather extends React.Component {
  
  constructor(props) {
    super(props)
    this.state={
      city:"Minsk",
      icon:"",
      cityDisplay:"",
      desc:"",
      main:"",
      wind: "",
      pressure:"",
      country:"",
    }
    this.fetchWeather()
  }

  fetchWeather=()=>{
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+this.state.city+'&appid=de68b0392ab9d2b6c38dfd49641e76be')  
    .then((responce)=>responce.json())
    .then((json=>{
      this.setState({temp:(json.list[0].main.temp-273.15).toFixed(1)+" °C"})
      this.setState({cityDisplay:json.city.name})
      this.setState({country:json.city.country})
      this.setState({icon:json.list[0].weather[0].icon})
      this.setState({main:json.list[0].weather[0].main})
      this.setState({desc:json.list[0].weather[0].description})
      this.setState({pressure:json.list[0].main.pressure+" hPa"})
      this.setState({wind:json.list[0].wind.speed+" m/s"})
    })).catch(()=> Alert.alert('Can\'t find city with that name!'))
  }
  fetchWeatherTomorrow=()=>{
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+this.state.city+'&appid=de68b0392ab9d2b6c38dfd49641e76be')  
    .then((responce)=>responce.json())
    .then((json=>{
      this.setState({temp:(json.list[8].main.temp-273.15).toFixed(1)+" C"})
      this.setState({cityDisplay:json.city.name})
      this.setState({country:json.city.country})
      this.setState({icon:json.list[8].weather[0].icon})
      this.setState({main:json.list[8].weather[0].main})
      this.setState({desc:json.list[8].weather[0].description})
      this.setState({pressure:json.list[8].main.pressure+" hPa"})
      this.setState({wind:json.list[8].wind.speed+" m/s"})
    })).catch(()=> Alert.alert('Can\'t find city with that name!'))
  }
  fetchWeatherDayAfterTomorrow=()=>{
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+this.state.city+'&appid=de68b0392ab9d2b6c38dfd49641e76be')  
    .then((responce)=>responce.json())
    .then((json=>{
      this.setState({temp:(json.list[16].main.temp-273.15).toFixed(1)+" C"})
      this.setState({cityDisplay:json.city.name})
      this.setState({country:json.city.country})
      this.setState({icon:json.list[16].weather[0].icon})
      this.setState({main:json.list[16].weather[0].main})
      this.setState({desc:json.list[16].weather[0].description})
      this.setState({pressure:json.list[16].main.pressure+" hPa"})
      this.setState({wind:json.list[16].wind.speed+" m/s"})
    })).catch(()=> Alert.alert('Can\'t find city with that name!'))
  }

  render() {

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
                onChangeText={(text)=>this.setState({city:text})}
              />  
          </View>

          <View style={styles.searchButtonView}>
              <TouchableOpacity style={styles.buttonSearch} onPress={this.fetchWeather}>
                <Icon name="search-outline" size={24} color ="#FFF"><Text style={styles.buttonText}> Today</Text></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSearch} onPress={this.fetchWeatherTomorrow}>
                <Icon name="search-outline" size={24} color ="#FFF"><Text style={styles.buttonText}> Tomorrow</Text></Icon>
              </TouchableOpacity>  
              <TouchableOpacity style={styles.buttonSearch} onPress={this.fetchWeatherDayAfterTomorrow}>
                <Icon name="search-outline" size={24} color ="#FFF"><Text style={styles.buttonText}> Day after tomorrow</Text></Icon>
              </TouchableOpacity> 
          </View>

          <View style={styles.weatherBoxMain}>
            <View style={styles.weatherHolderView}>
              <Image source={{uri:"http://openweathermap.org/img/wn/"+this.state.icon+"@2x.png"}} style={styles.weatherImage}/>
              <View>
                <Text style={styles.temperatureText}>{this.state.temp}</Text>
                <Text style={styles.cityText}>{this.state.cityDisplay}</Text>
                <Text style={styles.cityText}>{this.state.country}</Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBoxView}>
            <View style={styles.infoHolderView}>
              <Text style={styles.mainWeatherText}>{this.state.main}</Text>
              <Text style={styles.descText}>{this.state.desc}</Text>
              <Text style={styles.otherText}>Pressure: {this.state.pressure}</Text>
              <Text style={styles.otherText}>Wind: {this.state.wind}</Text>
            </View>
          </View>
        </ImageBackground>
  
       </SafeAreaView>
     )
   }
 }

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
