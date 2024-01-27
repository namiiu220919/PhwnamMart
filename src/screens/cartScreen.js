import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import CustomIcon from '../components/CustomIcon';
import { COLORS } from '../theme/theme';

const ProductScreen = () => {
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <ScrollView showsVerticalScrollIndicator>
      <CustomIcon style={{ flex: 1, position: 'relative', margin: 10 }} name='menu' color={COLORS.primaryOrangeHex} size={25} />
        <View style={styles.productContainer}>
          <ProductCard />
          <ProductCard2 />
          <Text style={{padding:10, color:'black', backgroundColor:COLORS.primaryOrangeHex, borderRadius:10, fontWeight:'bold'}}>Tổng tiền: 10000đ</Text>

          <View style={{alignItems:'center', marginTop:10}}>
          <TouchableOpacity style={{width: 100, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0DCDC', borderRadius: 5 }}><Text style={{ color: '#2F6BFF' }}>Thanh toán</Text></TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../img/BachTuoc.jpg')} />
      <View style={styles.info}>
        <Text style={styles.productName}>Bạch Tuộc</Text>
        <Text style={styles.productPrice}>4,400₫</Text>
        <Text>Số lượng: 2</Text>
      </View>
    </View>
  );
};
const ProductCard2 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../img/CaHoi.jpg')} />
      <View style={styles.info}>
        <Text style={styles.productName}>Cá Hồi</Text>
        <Text style={styles.productPrice}>20,400₫</Text>
        <Text>Số lượng: 20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'column', // Sắp xếp sản phẩm theo chiều dọc
  },
  container: {
    width: '100%', // Sản phẩm chiếm toàn bộ chiều rộng
    height: 150,
    borderRadius: 5,
    padding:10,
    backgroundColor: '#fff',
    flexDirection: 'row', // Sắp xếp hình ảnh và thông tin theo chiều ngang
    alignItems: 'flex-start',
    marginBottom: 10, // Khoảng cách giữa các sản phẩm
  },
  image: {
    width: '40%', // Đặt chiều rộng của hình ảnh
    height: 130,
    borderRadius: 5,
  },
  info: {
    width: '50%', // Đặt chiều rộng của phần thông tin
    padding: 10,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
  },
  productNum: {
    color: '#a7a7a7',
    textAlign: 'left',
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4EC581',
    textAlign: 'left',
  },
});

export default ProductScreen;
