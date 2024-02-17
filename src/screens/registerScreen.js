import { Button,TouchableOpacity, StyleSheet, Text, TextInput, View, Image,ScrollView } from 'react-native'
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../theme/theme';

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{backgroundColor:'white'}}>
        <Image
        style={{ width: 200, alignSelf: 'center' }}
        source={require('../img/PhwNamShoplogo.png')}
      />
      <Text style={st.welcome}>Kính chào quý khách !</Text>
      <Text style={{ textAlign: 'center', fontSize: 12, marginBottom: 20 }}>
        Đăng ký để tiếp tục
      </Text>
      <TextInput style={st.txtInput} placeholder='Nhập họ tên' />
      <TextInput style={st.txtInput} placeholder='Nhập địa chỉ Email' />
      <TextInput style={st.txtInput} secureTextEntry={true} placeholder='Nhập mật khẩu' />
      <TextInput style={st.txtInput} secureTextEntry={true} placeholder='Nhập lại mật khẩu' />
      <TextInput style={st.txtInput} placeholder='Nhập số điện thoại' />
      <TextInput style={st.txtInput} placeholder='Nhập địa chỉ' />
      <TouchableOpacity style={st.button}>
        <Text style={st.buttonText}>Đăng ký</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'center',marginTop:30}}>
          <Text style={{color: '#828282', fontWeight: 'bold', fontSize: 12}}>
            Đã có tài khoản?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.primaryOrangeHex, fontWeight: 'bold', fontSize: 12}}> Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      
    </ScrollView>
    </SafeAreaView>
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