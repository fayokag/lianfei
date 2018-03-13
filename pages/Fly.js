import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Dimensions,} from 'react-native';
import {Constants} from "expo";

import {gSizes} from '../styles/GlobalData'
import {black, blue} from "../utils/colors";

export default class Fly extends React.Component {

    static navigationOptions = {
        title: '天巡',
        headerStyle:{
            backgroundColor:blue,
        },
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.outViewS}>
                    <Image
                        style={styles.iconImg}
                        source={require('../imgs/lianfei/icon_mession.png')}
                    />
                    <Text>任务中心</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outViewS}>
                    <Image
                        style={styles.iconImg}
                        source={require('../imgs/lianfei/icon_shop.png')}
                    />
                    <Text>道具商城</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outViewS}>
                    <Image
                        style={styles.iconImg}
                        source={require('../imgs/lianfei/icon_aircontrol.png')}
                    />
                    <Text>空管中心</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outViewS}>
                    <Image
                        style={styles.iconImg}
                        source={require('../imgs/lianfei/icon_flyteach.png')}
                    />
                    <Text>飞行教学</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outViewS}>
                    <Image
                        style={styles.iconImg}
                        source={require('../imgs/lianfei/icon_flytalk.png')}
                    />
                    <Text>飞行交流</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outViewS}>
                    <Image
                        style={styles.iconImg}
                        source={require('../imgs/lianfei/icon_harddrive.png')}
                    />
                    <Text>硬件交流</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outViewS}>
                    <Image
                        style={styles.iconImg}
                        source={require('../imgs/lianfei/icon_weather.png')}
                    />
                    <Text>天气</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outViewS}>
                    <Image
                        style={styles.iconImg}
                        source={require('../imgs/lianfei/icon_lianfei.png')}
                    />
                    <Text>联飞</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outViewS}>
                    <Image
                        style={styles.iconImg}
                        source={require('../imgs/lianfei/icon_map.png')}
                    />
                    <Text>地图</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', //设置主轴方向
        flexWrap: 'wrap', //超出换行
        // backgroundColor: 'yellow',
        // backGroundImage:require('../imgs/shouye/icon_huodong.png'),
        alignItems: 'center',
        width: gSizes.screen_width,  //宽度等于屏幕宽度
        height: Constants.screen_height,
    },
    outViewS: {
        // backgroundColor: 'gray',
        alignItems: 'center',   //交叉轴的对齐方式
        width: (gSizes.screen_width - 3) / 3,
        height: 100,
        marginLeft: 1,
        marginTop: -1,
        // borderWidth: 1,
        borderColor: black

    },
    iconImg: {
        width:50,
        height: 50,
        resizeMode: 'contain',
        marginTop:10,
    }


})