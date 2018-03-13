import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default function TitleBarItem(props){

        return (
            <TouchableOpacity>
                <Image source={props.normalImage}
                       style={{tintColor: props.tintColor, width: 20, height: 20, margin: 13,}}
                />
            </TouchableOpacity>
        )

}