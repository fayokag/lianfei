import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native'
import Swiper from 'react-native-swiper'


export default function RollingPic (props){

    const listImages = props.images

    return (
        <ScrollView
            style={styles.container}>
            <Swiper
                style={styles.swiperStyle}
                height={200}
                autoplayTimeout={1}
                horizontal={true}
                autolay={true}
                loop={true}
                paginationStyle={{bottom:10}}
                dotStyle={{backgroundColor:'rgba(0,0,0,.2)', width: 6, height: 6}}
                activeDotStyle={{backgroundColor:'rgba(0,0,0,.5)', width: 6, height: 6}}
            >

                {
                    listImages.map((image) => (
                    <View style={styles.swiperItem} key={image}>
                        <Image style={styles.imageStyle} source={image}></Image>
                    </View>
                    ))
                }
            </Swiper>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:200,
    },
    swiperStyle:{

    },
    swiperItem:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'transparent',
    },
    imageStyle:{
        flex:1,
    },
})