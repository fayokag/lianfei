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
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import RollingPic from "../components/RollingPic";
import All from "./tab/All";
import { blue } from "../utils/colors";

const images = [
    require('../imgs/shouye/banner/2.jpg'),
    require('../imgs/shouye/banner/3.jpg'),
    require('../imgs/shouye/banner/1.jpg'),
];

const headerFind = (
    <TouchableOpacity>
        <Image
            style={{ marginLeft: 92, height: 40, width: 200, resizeMode: 'contain', }}
            source={require('../imgs/discovery/btn_not_find.png')}
            onPress={() => console.log(Dimensions.get('window').width)}
        />
    </TouchableOpacity>
)

const headerNotFind = (
    <TouchableOpacity>
        <Image
            style={{ marginLeft: 92, height: 40, width: 200, resizeMode: 'contain', }}
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
            backgroundColor: 'blue',
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
                <ScrollView style={{ flex: 1,backgroundColor:'#fff' }}>
                    <RollingPic images={images} />
                    <ScrollableTabView
                        style={{ backgroundColor: '#fff' }}
                        tabBarUnderlineStyle={{ backgroundColor: '#2E89D9' }}
                        tabBarActiveTextColor='#2E89D9'
                        tabBarInactiveTextColor='#999'
                        locked={true}
                        renderTabBar={() => <DefaultTabBar tabStyle={{ paddingBottom: 0 }} />}
                    >
                        <All tabLabel='全部'
                            navigation={this.props.navigation} />
                        <All tabLabel='菜鸟聊吧'
                            navigation={this.props.navigation} />
                        <All tabLabel='问答区'
                            navigation={this.props.navigation} />
                        <All tabLabel='连飞活动'
                            navigation={this.props.navigation} />
                        <All tabLabel='招募'
                            navigation={this.props.navigation} />
                    </ScrollableTabView>
                </ScrollView>
            )
        }
        else {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <RollingPic images={images} />
                </ScrollView>
            )
        }
    }
}