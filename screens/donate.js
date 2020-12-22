import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import db from '../config';
import MyHeader from '../components/myHeader';
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default class DonateScreen extends Component {
    constructor() {
        super();
        this.state = {
            requestedBookList: [],
        }

        this.ref = null
    }

    getBookList = () => {
        this.ref = db.collection('requestBooks')
            .onSnapshot((snapShot) => {
                var requestedBookList = snapShot.docs.map(document => {
                    document.data();
                })
                this.setState({
                    requestedBookList: requestedBookList,
                })
            })
    }

    keyExtractor = (item, index) => {
        index.toString();
    }

    renderItem = ({ item, i }) => {
        return (
            <ListItem>
                key = {i}
                title = {item.bookName}
                subtitle = {item.reasonToRequest}
                titleStyle = {styles.title}
                rightElement = {
                    <TouchableOpacity>
                        <Text>View</Text>
                    </TouchableOpacity>
                }
            </ListItem>
        )
    }

    render() {
        return (
            <View>
                <View>
                    <Text>Book Donate Screen</Text>
                </View>
                <View>
                    {this.state.requestedBookList.length === 0
                        ? (<View>
                            <Text>List of All Requested Books!</Text>
                        </View>)
                        : (
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.requestedBookList}
                                renderItem={this.renderItem}
                            >
                            </FlatList>
                        )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontWeight: 'bold',
    }
})