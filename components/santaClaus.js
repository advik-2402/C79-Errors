import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

export default class SantaClaus extends Component {
    render() {
        return (
            <LottieView source={require('../assets/11861-santa-claus-on-the-chimney.json')} autoPlay loop>

            </LottieView>
        )
    }
}