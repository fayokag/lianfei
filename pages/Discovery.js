import React from 'react';
import {
    View,
    Image,
    ListView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import RollingPic from "../components/RollingPic";
import {blue} from "../utils/colors";

const images = [
    require('../imgs/shouye/banner/2.jpg'),
    require('../imgs/shouye/banner/3.jpg'),
    require('../imgs/shouye/banner/1.jpg'),
];

const headerFind =(
    <TouchableOpacity>
        <Image
            style={{marginLeft: 92, height: 40, width: 200, resizeMode: 'contain',}}
            source={require('../imgs/discovery/btn_not_find.png')}
            onPress={() => console.log(Dimensions.get('window').width)}
        />
    </TouchableOpacity>
)

const headerNotFind =(
    <TouchableOpacity>
        <Image
            style={{marginLeft: 92, height: 40, width: 200, resizeMode: 'contain',}}
            source={require('../imgs/discovery/btn_not_find.png')}
            onPress={() => console.log(Dimensions.get('window').width)}
        />
    </TouchableOpacity>
)

export default class Discovery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            discovery: true,
        }
    }

    static navigationOptions = {
        // headerLeft:this.state.discovery === true ? headerFind : headerNotFind,
        headerStyle: {
            backgroundColor: blue,
        },
    }

    state = {
        // discovery: true,
    }

    render() {
        console.log(this.state)
        console.log(Dimensions.get('window').width)

        if (this.state.discovery) {
            return (
                <ScrollView style={{flex: 1}}>
                    <RollingPic images={images}/>
                </ScrollView>
            )
        }
        else {
            return (
                <ScrollView style={{flex: 1}}>
                    <RollingPic images={images}/>
                </ScrollView>
            )
        }
    }
}