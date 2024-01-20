import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import CustomIcon from '../components/CustomIcon';
import { COLORS } from '../theme/theme';

const ProductScreen = () => {
  return (
    <SafeAreaView style={{ margin: 10 }}>
    <CustomIcon style={{ flex: 1, position: 'relative', margin: 10 }} name='menu' color={COLORS.primaryOrangeHex} size={25} />

      <ScrollView showsVerticalScrollIndicator={false}>
      <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='menu' color={COLORS.primaryOrangeHex} size={25} />

        <View style={styles.productContainer}>
          <Text style={{ flex: 1,fontWeight:'bold', textAlign:'center',margin:5,fontSize:25, color:COLORS.primaryOrangeHex}}>Danh Sách Yêu Thích</Text>
          <ProductCard />
          <ProductCard2 />
          <ProductCard3 />
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
        <Text style={styles.productPrice}>Bạch tuộc là nguồn thực phẩm quan trọng trong nhiều nền văn hóa, được ưa chuộng vì thịt của chúng có hương vị độc đáo và dinh dưỡng cao. Thịt bạch tuộc thường được chế biến thành nhiều món ăn ngon như sushi, salad, hoặc nước súp.</Text>
        <CustomIcon style={{ flex: 1, position: 'absolute', paddingLeft:320, paddingTop:8 }} name='like' size={25} />

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
        <Text style={styles.productPrice}>Cá hồi là nguồn thực phẩm giàu axit béo omega-3, protein, vitamin D và B12, cũng như khoáng chất như sắt và canxi. Thịt cá hồi thường được coi là một phần quan trọng của chế độ ăn lành mạnh.</Text>
        <CustomIcon style={{ flex: 1, position: 'absolute', paddingLeft:320, paddingTop:8 }} name='like' size={25} />

      </View>
    </View>
  );
};
const ProductCard3 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../img/Luon.jpg')} />
      <View style={styles.info}>
        <Text style={styles.productName}>Lươn</Text>
        <Text style={styles.productPrice}>Thịt lươn là nguồn protein chất lượng cao, giàu axit béo omega-3, vitamin B12, sắt và kẽm. Được coi là một thực phẩm dinh dưỡng quan trọng cho sức khỏe con người.</Text>
        <CustomIcon style={{ flex: 1, position: 'absolute', paddingLeft:320, paddingTop:8 }} name='like' size={25} />

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
    height: 400,
    borderRadius: 5,
    padding:10,
    backgroundColor: '#fff',
    flexDirection: 'column', // Sắp xếp hình ảnh và thông tin theo chiều ngang
    alignItems: 'center',
    marginBottom: 10, // Khoảng cách giữa các sản phẩm
  },
  image: {
    width: '80%',
    alignContent:'center', // Đặt chiều rộng của hình ảnh
    height: 250,
    borderRadius: 5,
  },
  info: {
    width: '100%', // Đặt chiều rộng của phần thông tin
    padding: 10,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
  },
  productNum: {
    color: '#a7a7a7',
    textAlign: 'left',
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'left',
  },
});

export default ProductScreen;
