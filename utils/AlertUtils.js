/**
 * Created by Mavio on 2017/8/3.
 */

import React, {PropTypes} from 'react'
import {
    Platform,
    ToastAndroid,
    Alert,
} from 'react-native';
import Toast from 'react-native-root-toast';

export default class AlertUtils {

    static toast(msg){
        if(typeof msg !== 'string'){
            msg = JSON.stringify(msg);
        }
        console.log('AlertUtils toasting : ' + msg);
        Toast.show( msg, {
            duration: Toast.durations.SHORT,
            position: -80 ,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            onShow: () => {
                // calls on toast\`s appear animation start
            },
            onShown: () => {
                // calls on toast\`s appear animation end.
            },
            onHide: () => {
                // calls on toast\`s hide animation start.
            },
            onHidden: () => {
                // calls on toast\`s hide animation end.
            }
        });
    }


    static alert(title, msg, onEnsure, onCancel, cancelable=false){
        let buttons = [];
        if(onEnsure) buttons.push({text: '确定', onPress: onEnsure});
        if(onCancel) buttons.push({text: '取消', onPress: onCancel});
        Alert.alert(title, msg, buttons, { cancelable: cancelable });
    }
}