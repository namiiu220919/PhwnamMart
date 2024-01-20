import { Button,TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React, {useState} from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../theme/theme';
const RegisterScreen = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <ScrollView style={{backgroundColor:'white'}}>
      <Text style={{ flex: 1,fontWeight:'bold', textAlign:'center',margin:5,fontSize:25, color:COLORS.primaryOrangeHex}}>Thông tin</Text>

        <Image
        style={{ width:200,height:200, alignSelf: 'center', margin:20 }}
        source={require('../img/avata.png')}
      />
      
      <TextInput style={st.txtInput} placeholder='Nhập họ tên' />
      <TextInput style={st.txtInput} placeholder='Nhập địa chỉ Email' />
      <TextInput style={st.txtInput} secureTextEntry={true} placeholder='Nhập mật khẩu' />
      <TextInput style={st.txtInput} secureTextEntry={true} placeholder='Nhập lại mật khẩu' />
      <TextInput style={st.txtInput} placeholder='Nhập số điện thoại' />
      <TextInput style={st.txtInput} placeholder='Nhập địa chỉ' />
      <TouchableOpacity style={st.button}>
        <Text style={st.buttonText}>Lưu</Text>
      </TouchableOpacity>
      
    </ScrollView>
    </GestureHandlerRootView>
  )
}

export default RegisterScreen

const st = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    justifyContent:'center',
    textAlign:'center',
    backgroundColor:'white',
  },
  logo: {
    width:400,
    height: 400
  },
  welcome: {
    textAlign:'center',
    margin: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  txtInput: {
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 12 ,
    marginLeft:12,
    marginRight: 12,
    padding:10
  },
  bigBtn: {
    backgroundColor: '#FACF23',
    borderWidth:1,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#FACF23', 
    padding: 15,
    marginTop: 12 ,
    marginLeft:12,
    marginRight: 12,
    borderRadius: 12,
  },
  button1: {
    backgroundColor: 'white', 
    padding: 15,
    marginTop: 12 ,
    marginLeft:12,
    marginRight: 12,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 12,
  },
  button2: {
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 12,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    textAlign:'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonText1: {
    color: 'black',
    textAlign:'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#FACF23',
    fontSize: 14,
    fontWeight: 'bold',
  },




})