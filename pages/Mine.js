import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {lightgray, white} from "../utils/colors";

export default class Mine extends React.Component {



    render() {

        return (
            <ScrollView style={{flex: 1,backgroundColor:lightgray}}>
                <TouchableOpacity style={{flexDirection:'row',backgroundColor:white}}>
                    <Image source={require('../imgs/mine/icon/wodedingdan.png')}/>
                    <Text>我的订单</Text>
                    <Image source={require('../imgs/mine/icon/wodedingdan.png')}/>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}