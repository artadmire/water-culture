import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Image,
} from 'react-native';
import { px } from  '../../config/common';
import { ChooseAreaProps } from '../type';

export default class extends Component<ChooseAreaProps> {
    constructor(props: ChooseAreaProps) {
        super(props);
        this.jumpNext = this.jumpNext.bind(this);
    }
    jumpNext() {
        const { navigate } = this.props.navigation;

        navigate('Detail_1', { name: 'Jane' });
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.ul}>
                       
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#f0f0f5'
    },
    ul: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        backgroundColor: '#ffffff',
        marginTop: px(10),
        width: px(750)
    },
});
