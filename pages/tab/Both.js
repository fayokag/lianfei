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
var { height, width } = Dimensions.get('window');
var arr = [
    {
        userName:'咸蛋包包',
        admin:'管理员',
        title:'周三福利君Vol.23:晒小米产品美图，赢千元全面屏手机',
        time:16,
        timeUnit:'秒'
    },
    {
        userName:'发动机',
        admin:'官方团队',
        title:'摇不上号，买外地车牌，',
        time:16,
        timeUnit:'秒'
    }
]
export default class All extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            layoutBottom: true,
        }
    }

    static navigationOptions = {
        // headerLeft:this.state.discovery === true ? headerFind : headerNotFind,
        headerStyle: {
            backgroundColor: 'blue',
        },
    }

    render() {
        return (
            <ScrollView style={css.all}>
                <View style={css.contentAll}>
                    <View style={css.content}>

                        <View style={css.layoutView}>

                            <View style={css.layoutTop}>
                                <View style={css.userPhotoView}>
                                    <Image style={css.userPhoto} source={require('../../imgs/bottom/Icon_fly_s.png')} />
                                </View>
                                <View style={css.userInfo}>
                                    <View style={css.userInfoTop}>
                                        <Text style={css.userName}>咸蛋包包</Text>
                                        <Image style={css.userIcon} source={require('../../imgs/bottom/Icon_fly_s.png')} />
                                        <Image style={css.userIcon} source={require('../../imgs/bottom/Icon_fly_s.png')} />
                                    </View>
                                    <Text style={css.userAdmin}>管理员</Text>
                                </View>
                                <View style={css.userRight}>
                                    <Text style={css.userRightText}>连飞活动</Text>
                                </View>
                            </View>
                            {/* layoutTop */}
                            <Text style={css.layoutTitle}>
                                周三福利君Vol.23:晒小米产品美图，赢千元全面屏手机！
                            </Text>
                            <View style={css.images}>
                                <Image style={css.imagesItem} source={require('../../imgs/discovery/swiper_03.jpg')} />
                                <Image style={css.imagesItem} source={require('../../imgs/discovery/swiper_03.jpg')} />
                                <Image style={css.imagesItem} source={require('../../imgs/discovery/swiper_03.jpg')} />
                                <Image style={css.imagesItem} source={require('../../imgs/discovery/swiper_03.jpg')} />
                            </View>

                            <View style={css.layoutBottom}>
                                <View style={css.touchTop}>
                                    <Text style={css.touchTopText}>置顶</Text>
                                </View>
                                <View style={css.timeBefore}>
                                    <Text style={css.timeBeforeText}>16</Text>
                                    <Text style={css.timeBeforeText}>秒</Text>
                                    <Text style={css.timeBeforeText}>前</Text>
                                </View>
                            </View>

                        </View>
                        {/* 每一个评论最外层的view */}

                    </View>
                </View>
            </ScrollView>
        )
    }
}

const css = StyleSheet.create({
    all: {
        flex: 1,
    },
    contentAll: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    content: {
        width: width * 0.95,
        flexDirection: 'column'
    },
    layoutView: {
        flexDirection: 'column',
        marginTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    layoutTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userPhotoView: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: 'hidden'
    },
    userPhoto: {
        width: 40,
        height: 40,
        resizeMode: 'stretch'
    },
    userInfo: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    userInfoTop: {
        flexDirection: 'row'
    },
    userName: {
        fontSize: 16
    },
    userIcon: {
        backgroundColor: 'blue',
        marginLeft: 10,
        width: 16,
        height: 16,
        resizeMode: 'stretch'
    },
    userAdmin: {
        color: '#999',
        fontSize: 14
    },
    userRight: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#999',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    userRightText: {
        padding: 6,
        fontSize: 12,
    },
    layoutTitle: {
        fontSize: 22,
        marginTop: 20,
        lineHeight: 30
    },
    images: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10
    },
    imagesItem: {
        width: 90,
        height: 90,
        resizeMode: 'stretch',
        marginTop: 10,
    },
    layoutBottom: {
        flexDirection: 'row',
        marginTop: 20
    },
    touchTop: {
        borderWidth: 1,
        borderColor: 'blue',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    touchTopText: {
        padding: 6,
        fontSize: 12,
        color: 'blue'
    },
    timeBefore:{
        marginLeft:10
    },
    timeBeforeText:{
        fontSize:12,
        color:'#999'
    }
})