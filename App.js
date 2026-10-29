import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// Ex1: User-defined component Movie with properties title and year
const Movie = ({title, year, icon_name, icon_color, poster}) => {
  return (
      <View>
          <Image source={poster} style = {{width:400, height:500}}/>
          <Text>
              Movie: {title} {year}
          </Text>
          <FontAwesome6 name={icon_name} size={40} color={icon_color} />
      </View>
  );
};

class AllMovies extends React.Component {
    render() {
        return (
            <ScrollView>
                <Movie title={'Doctor Sleep'} year={2019} icon_name={"skull"} icon_color={"gray"} poster={require("./img/doctor-sleep.jpg")}/>
                <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"red"} poster={require("./img/midway.jpg")}/>
                <Movie title={"Route"} year={2212} icon_name={"pager"} icon_color={"blue"} poster={{uri: "https://images.pexels.com/photos/29596194/pexels-photo-29596194.jpeg"}}/>
            </ScrollView>
        )
    }
}

export default AllMovies;
