// /**
//  * Created by Mavio on 2017/5/27.
//  */
//
//
// import React, {Component, PropTypes} from 'react'
// import {
//     Animated,
//     StyleSheet,
//     Text,
//     View
// } from 'react-native'
// // import {log} from './LogUtils'
// import Storage from 'react-native-storage'
// import { AsyncStorage } from 'react-native';
//
//
// export default class UserController{
//
//
//     loginIdx
//     floorIdx_Fx
//     phone
//     static getLoginedUser(uIdx,phone){
//         storage.save({
//             key: 'uIdx',
//             data: uIdx,
//             expires: null
//         });
//
//         storage.save({
//             key: 'phone',
//             data: phone,
//             expires: null
//         });
//         this.loginIdx = uIdx;
//         this.phone = phone;
//     }
//
//     static loginout(){
//         this.loginIdx = null;
//         storage.remove({
//             key: 'uIdx'
//         });
//     }
//
//     static getLoginedUserId(){
//         return this.loginIdx;
//     }
//
//     static getUserId(user){
//         if(!user) return null;
//         else if(user.id) return user.id;
//         else if(user.UserId) return user.UserId;
//         else if(user._id) return user._id;
//         else return null;
//     }
//
//     static isLoginUser(user){
//         if(!user) return false;
//         if(user === UserController.getLoginedUser()) return true;
//         return UserController.getUserId(user) === UserController.getLoginedUserId();
//     }
// }