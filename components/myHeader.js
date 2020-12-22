import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class MyHeader extends Component {
    render() {
        return (
            <Header
                centerComponent={{ text: "Request Book", style: { color: "#76a5ed", fontSize: 25, fontWeight: "bold" } }}
                backgroundColor="#F8BE85" />
        );
    }
}
