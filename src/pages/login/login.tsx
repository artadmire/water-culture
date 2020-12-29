import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import { height, px } from  '../../config/common';
import { ChooseAreaProps } from '../type';
import { BRAND } from '../../config/constant'
import { Console } from 'console';

const inputText = [{placeholder: 'Username', key: 'username'}, {placeholder: 'Password', key: 'password'},  {placeholder: 'Country Code', key: 'country code'}]
interface  State {

}
export default class extends Component<ChooseAreaProps,State> {
    constructor(props: ChooseAreaProps) {
        super(props);
        console.log('login')
        // this.state = {
        //     formData: {
            
        //     }
        // }

       
    }
    componentDidMount() {
        // console.log("this",this)
    }
    componentDidUpdate(){
        // console.log("Update",this)
    }
    onChangeText= (text: string,field:string) => {
         this.setState({
           [field]:text
         },() =>{
            console.log(this.state)
         })

    }
    render() {
        return (
             <View style={styles.container}>
                <View style={styles.innerTop}>
                        <View  style={styles.brandText}>
                            <Text style={styles.brand}>Sign In</Text>
                            <Text style={styles.brand}>Your {BRAND} Account</Text>
                        </View>
                        <View>
                        {
                            inputText.map((item: any) => (<TextInput 
                                key={item.key} 
                                placeholder={item.placeholder}  
                                style={styles.input} 
                                onChangeText={(text: string,key: string )=> this.onChangeText(text,item.key)}>
                            </TextInput>)
                            )
                        }
                        </View>
                </View>

                <View  style={styles.innerBottom}>
                        <Button style={styles.btnGo} title="Learn More" color="#841584" />
                </View>
             </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:"100%",
        backgroundColor: '#f1f8fe',
        paddingLeft:25,
        paddingRight:25,
        paddingTop:95,
        paddingBottom:75
       
    },
    innerTop:{
        backgroundColor:'#fff',
        paddingBottom:65,
        paddingLeft:25,
        paddingRight:25,
        paddingTop:50
    },
    innerBottom:{
      marginTop:35,
     
    },
    btnGo:{
        width:60,
        heigth:60,
        borderRadius:'50%'
    },
    brandText:{
       textAlign:'center'
    },
    brand: {
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        // borderColor: '#e6e6e6',
        // backgroundColor: '#ffffff',
        // marginTop: px(10),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItem: 'center',
        fontSize: px(20),
        color: '#3c96ec',
        lineHeight:30
    },
    input: {
        width: "100%",
        height:50,
        borderWidth: px(1),
        borderColor: 'rgb(40,150,240)',
        marginTop:32,
        textIndent:17
    }

});
