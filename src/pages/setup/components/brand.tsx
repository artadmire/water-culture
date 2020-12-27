import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import { height, px } from  '../../../config/common';
import { ChooseAreaProps } from '../../type';

const inputText = [{placeholder: 'Username', key: 'username'}, {placeholder: 'Password', key: 'password'},  {placeholder: 'Country Code', key: 'country code'}]

export default class extends Component<ChooseAreaProps> {
    constructor(props: ChooseAreaProps) {
        super(props);
        this.state = {
            formData: {

            }
        }
    }
    onChangeText= (text: string) => {
        // const { navigate } = this.props.navigation;
        // navigate('Detail_1', { name: 'Jane' });
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.brand}>品牌</Text>
                </View>
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
        alignItems: 'center',
        backgroundColor: '#f0f0f5'
    },
    brand: {
        width: px(750),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItem: 'center',
        fontSize: px(20),
        color: 'rgb(40,150,240)',
    },
    input: {
        width: "100%",
        height: px(50),
        borderWidth: px(1),
        borderColor: 'rgb(40,150,240)',
    }

});
