import React from 'react'
import {View, StatusBar, Image, Button} from 'react-native'
// import {createStore} from "redux";
// import {Provider} from "react-redux";
// import {reducer} from "./reducers";
import {TabNavigator,StackNavigator} from "react-navigation"
import {Ionicons, FontAwesome,Entypo} from '@expo/vector-icons'
import {black, blue, pink, purple, white, yellow} from "./utils/colors";
import {Constants, Icon} from 'expo'

import Discovery from "./pages/Discovery";
import Fly from "./pages/Fly";
import Mine from "./pages/Mine";
import TabBarItem from "./components/icons/TarBarItem";
import Home from "./pages/Home";
import TitleBarItem from "./components/icons/TitleBarItem";
import LoginScreen from "./pages/LoginScreen";




function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

const Tabs = TabNavigator({
    Home: {
        screen: Home,

        navigationOptions: {
            // title:'首页',
            // headerStyle:{
            //     backgroundColor:blue,
            // },
            // headerLeft:({focused,tintColor}) => (
            //     <Image
            //         source={require('./imgs/shouye/shouye_top_l.png')}
            //     />
            // ),
            tabBarLabel: '首页',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./imgs/bottom/Icon_home_n.png')}
                    selectedImage={require('./imgs/bottom/Icon_home_s.png')}
                />
            )
            // tabBarIcon: ({tintColor}) => <Ionicons name='ios-home' size={30} color={tintColor}/>
            // tabBarIcon: ({tintColor}) => <Image source={require('./imgs/Icon_home_s.png')} size={10} color={tintColor}/>

        }
    },
    Discovery: {
        screen: Discovery,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./imgs/bottom/Icon_disco_n.png')}
                    selectedImage={require('./imgs/bottom/Icon_disco_s.png')}
                />
            )
            // tabBarIcon: ({tintColor}) => <Image source={require('./imgs/Icon_disco_s.png')} style={{width:30,height:30}} color={tintColor}/>
        }
    },
    Fly: {
        screen: Fly,
        navigationOptions: {
            tabBarLabel: '连飞',
            tabBarIcon: ({tintColor}) => <FontAwesome name='plane' size={30} color={tintColor}/>
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            title:'我的',
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => <Ionicons name='md-people' size={30} color={tintColor}/>
        }
    },
}, {

    ...TabNavigator.Presets.iOSBottomTabs,
    //     tabBarComponent: 'TabBarBottom',
    //     tabBarPosition: 'bottom',
    //     swipeEnabled: false,
    //     animationEnabled: true,
    tabBarOptions: {
        activateTintColor: blue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
    }
})

const MainNavigator = StackNavigator({
    Home:{
        screen:Tabs,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    // EntryDetail:{
    //     screen:EntryDetail,
    //     navigationOptions: {
    //         headerTintColor: white,
    //         headerStyle:{
    //             backgroundColor:pink,
    //         }
    //     }
    // }

})

const StackOptions = ({navigation}) => {
    let {state,goBack} = navigation;

    // const visible= state.params.isVisible;
    let header;
    // if (visible === true){
    //     header = null;
    // }
    // const headerStyle = {backgroundColor:blue};
    // const headerTitle = state.params.title;
    const headerTitleStyle = {color:black,fontWeight:'500'}
    const headerBackTitle = false;
    const headerLeft = (
        <TitleBarItem
            normalImage={require('./imgs/shouye/shouye_top_l.png')}
        />
    )
    const headerRight = (
        <TitleBarItem
            normalImage={require('./imgs/shouye/shouye_top_r.png')}
        />
    )
    return {
        // headerStyle,
        headerTitleStyle,headerBackTitle,
        // headerLeft,headerRight,
        header}
}


export default class App extends React.Component {

    componentDidMount() {
        // setLocalNotification()
    }

    render() {

        return (
                <View style={{flex: 1}}>
                    <UdaciStatusBar backgroundColor={blue} barStyle='light-content'/>
                    <MainNavigator/>
                </View>
        )
    }
}