import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/myHeader';

export default class RequestScreen extends Component {
    constructor() {
        super();
        this.state = {
            userID: firebase.auth().currentUser.email,
            bookName: '',
            reasonToRequest: '',
        }
    }

    createUniqueID = () => {
        return Math.random().toString(36).substring(7);
    }

    addRequest = (bookName, reasonToRequest) => {
        var userID = this.state.userID;
        var randomRequestID = this.createUniqueID();

        db.collection('requestBooks').add({
            "userID": userID,
            "bookName": bookName,
            "reasonToRequest": reasonToRequest,
            "requestID": randomRequestID,
        })

        this.setState({
            bookName: '',
            reasonToRequest: '',
        })

        return Alert.alert("Book Request Added!");
    }

    render() {
        return (
            <View>
                <MyHeader />
                <KeyboardAvoidingView>
                    <TextInput
                        placeholder="Book Name"
                        value={this.state.bookName}
                        onChangeText={text => {
                            this.setState({
                                bookName: text,
                            })
                        }}></TextInput>
                    <TextInput
                        placeholder="Description"
                        value={this.state.reasonToRequest}
                        multiline
                        numberOfLines={8}
                        onChangeText={text => {
                            this.setState({
                                reasonToRequest: text,
                            })
                        }}></TextInput>
                    <TouchableOpacity
                        onPress={() => {
                            this.addRequest(bookName, reasonToRequest);
                        }}>
                        <Text>Submit Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}