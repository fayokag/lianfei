/**
 * Created by Jason on 2017/510/19.
 */


import React, {Component, PropTypes} from 'react'
import {
    Animated,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    ScrollView,
    Button,
    Dimensions,
    Alert,
    KeyboardAvoidingView,
    StatusBar,
    AsyncStorage,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native'

import {
    gStyles,
    gSizes,
    gColors,
    IOS
} from '../styles/GlobalData';
// import sources from '../../imgs/_sources';
// import TitleBar from '../components/TitleBar'
// import {Actions} from 'react-native-router-flux'
import ApiUrls from "../apis/ApiUrls";
import UserController from "../utils/UserController";

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        //TODO
        this.state = {
            username: '',
            password: '',
            firstLoad: '2',
        }
        // this.state = {
        //     username: '13761868551 liyong',
        //     password: '111111',
        // }
    };

    componentDidMount() {
        // storage.load({
        //     key: 'firstLoad',
        //     autoSync: true,
        //     syncInBackground: true,
        // }).then(ret => {
        //     if (ret) {
        //         this.setState({firstLoad:'2'})
        //     } else {
        //         this.setState({firstLoad:'1'})
        //     }
        // }).catch(err => {
        //     this.setState({firstLoad:'1'})
        // })
    }

    componentWillUnmount() {
    }

    componentWillMount() {
    }

    _renderData(){
        switch (this.state.firstLoad) {
            case '0':
                return (
                    <View style={styles.container}/>
                )
                break;
            case '1':
                return (
                    <ScrollView style={{flex:1}}
                                contentContainerStyle={{height:gSizes.screen_height,width:gSizes.screen_width*4}}
                                horizontal={true}
                                pagingEnabled={true}>
                        {/*<Image source={sources.welcome01} resizeMode='stretch' style={{flex:1,height:gSizes.screen_height,width:gSizes.screen_width}}/>*/}
                        {/*<Image source={sources.welcome02} resizeMode='stretch' style={{flex:1,height:gSizes.screen_height,width:gSizes.screen_width}}/>*/}
                        {/*<Image source={sources.wolcome03} resizeMode='stretch' style={{flex:1,height:gSizes.screen_height,width:gSizes.screen_width}}/>*/}
                        <TouchableWithoutFeedback onPress={() => {
                            storage.save({
                                key: 'firstLoad',
                                data: '2',
                                expires: null,
                            })
                            this.setState({
                                firstLoad:'2',
                            })
                        }}>
                            {/*<Image source={sources.wolcome04} resizeMode='stretch' style={{flex:1,height:gSizes.screen_height,width:gSizes.screen_width}}/>*/}
                        </TouchableWithoutFeedback>
                    </ScrollView>
                )
                break;
            case '2':
                return (
                    <View>
                        <Image
                            // source={sources.login_banner}
                            style={styles.bg}>
                        </Image>
                        <TextInput
                            style={styles.textInput}
                            maxLength={11}
                            underlineColorAndroid="white"
                            defaultValue={this.state.username}
                            onChangeText={(username) => this.setState({username})}
                            placeholder='请输入账号'/>
                        <TextInput
                            style={[styles.textInput, {marginTop: 2}]}
                            maxLength={20}
                            underlineColorAndroid="white"
                            defaultValue={this.state.password}
                            // secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                            placeholder='密码'/>

                        <View style={[styles.loginBtnBg,{backgroundColor:(this.state.username.length > 0)? gColors.primary : 'rgb(170,170,170)'}]}>
                            <TouchableHighlight style={styles.loginBtn} onPress={this._login.bind(this)}>
                                <Text style={[gStyles.text_normal, {color: 'white'}]}>登录</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                );
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderData()}
            </View>
        );

    };

    _login(){

        if(!this.state.username || this.state.username === ''){
            // AlertUtils.toast('请输入用户名');
            return;
        }
        if(!this.state.password || this.state.password === ''){
            // AlertUtils.toast('请输入密码');
            return;
        }

        // userApi.login(this.state.username,this.state.password)
        //     .execute((data)=> {
        //         UserController.getLoginedUser(data.uIdx,this.state.username);
        //         // Actions.MainScreen({type:'reset'});
        //     })
    }
}


let styles = StyleSheet.create({
    container: {
        backgroundColor: gColors.page_gray,
        flex: 1,
    },
    bg: {
        width: gSizes.screen_width,
        height: 200,
    },
    textInput: {
        marginTop: 10,
        width: gSizes.screen_width,
        height: gSizes.singleLineInput,
        backgroundColor: 'white',
        paddingHorizontal: gSizes.space_screen
    },
    loginBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    loginBtnBg: {
        marginTop: 10,
        width: gSizes.screen_width - gSizes.space_screen * 2,
        height: gSizes.singleLineInput,
        borderRadius: gSizes.btnRadius,
        alignSelf:'center'
    }
});
