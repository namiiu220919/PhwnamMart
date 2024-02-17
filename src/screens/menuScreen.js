import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme';

const MenuScreen = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
            <Text style={{color: COLORS.primaryOrangeHex, fontWeight: 'bold', fontSize: 12}}> Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Person')}>
            <Text style={{color: COLORS.primaryOrangeHex, fontWeight: 'bold', fontSize: 12}}> Liên hệ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: COLORS.primaryOrangeHex, fontWeight: 'bold', fontSize: 12}}> Đăng xuất</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({})