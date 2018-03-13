import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView, TouchableOpacity, ListView,
    Platform,
} from 'react-native'
import RollingPic from "../components/RollingPic";
import {white} from "../utils/colors";
import TitleBarItem from "../components/icons/TitleBarItem";

const images = [
    require('../imgs/shouye/banner/1.jpg'),
    require('../imgs/shouye/banner/2.jpg'),
    require('../imgs/shouye/banner/3.jpg'),
]

const headerLeft = (
    <TitleBarItem
        normalImage={require('../imgs/shouye/shouye_top_l.png')}
    />
)
const headerRight = (
    <TitleBarItem
        normalImage={require('../imgs/shouye/shouye_top_r.png')}
    />
)

export default class Home extends React.Component {
    static navigationOptions = {
        title: '首页',
        headerStyle: {
            backgroundColor: white,
        },
        headerLeft: headerLeft,
        headerRight,
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.rollingPic}>
                    <RollingPic images={images}/>
                </View>
                <View style={styles.notice}>
                    <Image source={require('../imgs/shouye/notice.png')}
                           style={{marginLeft: 10, height: 15, resizeMode: 'contain'}}/>
                    <Text>上海今天小雨</Text>
                </View>
                <View style={styles.listIcons}>
                    <View>
                        <TouchableOpacity style={{alignItems: 'center'}}>
                            <Image
                                source={require('../imgs/shouye/icon_peixun.png')}
                                style={styles.icon}
                            />
                            <Text>培训公告</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{alignItems: 'center'}}>
                            <Image
                                source={require('../imgs/shouye/icon_huodong.png')}
                                style={styles.icon}
                            />
                            <Text>活动公告</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{alignItems: 'center'}}>
                            <Image
                                source={require('../imgs/shouye/icon_redian.png')}
                                style={styles.icon}
                            />
                            <Text>热点新闻</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{alignItems: 'center'}}>
                            <Image
                                source={require('../imgs/shouye/icon_mingren.png')}
                                style={styles.icon}
                            />
                            <Text>名人堂</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.activates}>
                    <Text style={{marginLeft: 10,}}>热门活动</Text>
                    <Text style={{marginLeft: 250,marginRight: 20}}>更多</Text>
                    <Image
                        source={require('../imgs/shouye/single_r_arrow.png')}
                        style={{marginRight: 10, height: 10, resizeMode: 'contain'}}
                    />
                </TouchableOpacity>
                <View style={{height: 100}}>
                    <TouchableOpacity>
                        <Image/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{flex: 1, flexDirection: 'row', height: 10, alignItems: 'center',}}>
                    <Text style={{marginLeft: 10, marginRight: 260}}>新闻预览</Text>
                    <Text style={{marginRight: 20}}>更多</Text>
                    <Image
                        style={{marginRight: 10, height: 10, resizeMode: 'contain'}}
                        source={require('../imgs/shouye/single_r_arrow.png')}
                    />
                </TouchableOpacity>

                <ScrollView>

                </ScrollView>
                {/*<RefreshList/>*/}
                {/*<ListView>*/}
                {/*</ListView>*/}
            </View>
        )
    }
}

const styles = Platform.OS === 'ios'
    ? StyleSheet.create({
        container: {
            flex: 1
        },
        rollingPic: {
            height: 200,
        },
        notice: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        listIcons: {
            flex: 1,
            flexDirection: 'row',
            height: 10,
            alignItems: 'center',

        },
        icon: {
            height: 70,
            resizeMode: 'contain',
        },
        activates: {
            flex: 1,
            flexDirection: 'row',
            height: 10,
            alignItems: 'center',
        },

    })
    : StyleSheet.create({
        container: {
            flex: 1
        },
        rollingPic: {
            height: 180,
        },
        notice: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        listIcons: {
            flex: 1,
            flexDirection: 'row',
            height: 10,
            alignItems: 'center',

        },
        icon: {
            height: 30,
            resizeMode: 'contain',
        },
        activates: {
            flex: 1,
            flexDirection: 'row',
            height: 10,
            alignItems: 'center',
        },
    })