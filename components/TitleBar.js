

import React, {Component, PropTypes} from 'react'
import {
    Animated,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    Platform,
} from 'react-native'

import {
    gSizes,
    gColors,
    gStyles,
    IOS,
} from '../GlobalData/GlobalData'

import sources from '../imgs/_sources'

import {Actions} from 'react-native-router-flux'

export default class TitleBar extends Component {

    static propTypes = {
        showLeft: PropTypes.bool,
        leftIcon: PropTypes.number,
        leftText: PropTypes.string,
        onPressLeft: PropTypes.func,

        titleText: PropTypes.string,
        renderTitleComponent: PropTypes.func,

        rightIcon: PropTypes.number,
        rightText: PropTypes.string,
        onPressRight: PropTypes.func,

        rightIcon2: PropTypes.number,
        rightText2: PropTypes.string,
        onPressRight2: PropTypes.func,

        needDelay: PropTypes.bool,//是否需要按钮延时点击

        textColor: PropTypes.string,
        backgroundColor: PropTypes.string,
    };
    static defaultProps = {
        showLeft: true,

        needDelay: false,

        titleText: '',

        textColor: gColors.text_normal,
        backgroundColor: 'white',
    };

    constructor(props) {
        super(props);
        this.state = {
            isDisable_right : false,
            isDisable_right2 : false,
        }
    }

    render() {
        return (
            <View>
                <View style={{height: gSizes.height_title_status_bar,backgroundColor: this.props.backgroundColor}}>
                    <StatusBar
                        backgroundColor={this.props.backgroundColor}
                        barStyle="default"
                    />
                </View>
                <View
                    style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>

                    <View
                        style={styles.titleAbsoluteGroup}>
                        {this._renderTitleGroup()}
                    </View>

                    {this._renderLeft()}

                    <View style={{flex: 1, zIndex: -1}}/>

                    <View
                        style={styles.rightGroups}>
                        {this._renderRight2()}
                        {this._renderRight()}
                    </View>
                </View>
            </View>

        );
    }

    _renderLeft(){
        if(!this.props.showLeft) return null;
        const leftIcon = this.props.leftIcon ? this.props.leftIcon : sources.ic_arrow_left;
        return (
            <TouchableOpacity
                style={styles.leftGroup}
                onPress={this.onPressLeft.bind(this)}>
                {
                    this.props.leftText?
                        <Text
                            style={[styles.leftText, {color: this.props.textColor}]}>
                            {this.props.leftText}
                        </Text>
                        :
                        <Image
                            style={styles.icon}
                            resizeMode="contain"
                            source={leftIcon}
                        />
                }
            </TouchableOpacity>
        )
    }

    _renderTitleGroup(){
        return (
            <View
                style={styles.titleGroup}>
                {
                    this.props.renderTitleComponent?
                        this.props.renderTitleComponent()
                        :
                        <Text
                            style={[styles.titleText, {color: this.props.textColor}]}>
                            {this.props.titleText}
                        </Text>
                }
            </View>
        )
    }

    _renderRight(){
        if(!this.props.rightText && !this.props.rightIcon){
            return null;
        }
        return (
            <TouchableOpacity
                {...this.props}
                style={styles.rightGroup}
                disabled={this.props.needDelay ? this.state.isDisable_right : false}
                onPress={this.onPressRight.bind(this)}>
                {
                    this.props.rightIcon?
                        <Image
                            style={styles.icon}
                            resizeMode="contain"
                            source={this.props.rightIcon}
                            />
                        : null
                }
                {
                    this.props.rightText?
                        <Text
                            style={[styles.rightText, {color: this.props.textColor}]}>
                            {this.props.rightText}
                        </Text>
                        : null
                }
            </TouchableOpacity>
        )
    }

    _renderRight2(){
        if(!this.props.rightText2 && !this.props.rightIcon2){
            return null;
        }
        return (
            <TouchableOpacity
                {...this.props}
                style={styles.rightGroup}
                disabled={this.props.needDelay ? this.state.isDisable_right2 : false}
                onPress={this.onPressRight2.bind(this)}>
                {
                    this.props.rightIcon2?
                        <Image
                            style={styles.icon}
                            resizeMode="contain"
                            source={this.props.rightIcon2}
                        />
                        : null
                }
                {
                    this.props.rightText2?
                        <Text
                            style={[styles.rightText, {color: this.props.textColor}]}>
                            {this.props.rightText2}
                        </Text>
                        : null
                }
            </TouchableOpacity>
        )
    }

    onPressLeft(){
        if(!this.props.onPressLeft){
            Actions.pop();
        }else{
            this.props.onPressLeft();
        }
    }

    onPressRight(){
        const {onPressRight} = this.props;
        onPressRight && onPressRight()
        this.setState({isDisable_right: true})
        this.timer = setTimeout(()=> {
            this.setState({isDisable_right: false})
        },8000);
    }

    onPressRight2(){
        const {onPressRight2} = this.props;
        onPressRight2 && onPressRight2()
        this.setState({isDisable_right2: true})
        this.timer = setInterval(async () => {
            this.setState({isDisable_right2: false})
        }, 8000)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: gSizes.height_title,
        alignItems: 'stretch',
    },

    leftGroup: {
        marginLeft: gSizes.space_border,
        paddingLeft: gSizes.space_border,
        paddingRight: gSizes.space_border,
        alignItems: 'center',
        justifyContent: 'center',
    },

    leftIcon: {
        width: 8,
        height: 16,
    },

    leftText: {
        textAlign: 'center',
        fontSize: gSizes.text_subtitle,
    },

    titleAbsoluteGroup: {
        position: 'absolute',
        width: gSizes.screen_width,
        height: gSizes.height_title,
    },

    titleGroup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleText: {
        textAlign: 'center',
        fontSize: gSizes.text_title,
    },

    rightGroups: {
        flexDirection: 'row',
        marginRight: gSizes.space_border,
        alignItems: 'stretch',
    },

    rightGroup: {
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: gSizes.space_border,
    },

    rightText: {
        margin: gSizes.space_border,
        textAlign: 'center',
        fontSize: gSizes.text_subtitle,
    },

    icon: {
        width: gSizes.height_title - 27,
        height: gSizes.height_title - 22,
    },
});
exports.styles = styles;