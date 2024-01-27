import React, { Component } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StyleSheet, TextInput, ImageBackground } from 'react-native';
import CustomIcon from '../components/CustomIcon';
import { COLORS } from '../theme/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const ProductView = ({ imageSource, productName, productNum, productPrice, productReview }) => (
    <TouchableOpacity style={styles.productView}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.productNum}>{productNum}</Text>
        <Text style={styles.productPrice}>{productPrice}</Text>
        <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='like' size={25} />
        <TouchableOpacity style={{ height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primaryOrangeHex, borderRadius: 5 }}><Text style={{ color: 'black' }}>Thêm</Text></TouchableOpacity>
    </TouchableOpacity>
);



const RandomProduct = () => (
    <SafeAreaView style={styles.container}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        <CustomIcon style={{ flex: 1, position: 'relative', margin: 10 }} name='menu' color={COLORS.primaryOrangeHex} size={25} />

            <TouchableOpacity onPress={() => {
                console.log(this.state.text);
            }}>
                <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='search' color={COLORS.primaryOrangeHex} size={25} />
                <TextInput
                    style={styles.input}
                    placeholder="Tìm kiếm..."

                />
            </TouchableOpacity>
            <ScrollView style={{ marginTop: 10,marginBottom: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <Text style={{marginLeft:10, marginRight:15}}>Tất cả</Text>
                <Text style={{marginLeft:15, marginRight:15}}>Rau củ</Text>
                <Text style={{marginLeft:15, marginRight:15}}>Thịt</Text>
                <Text style={{marginLeft:15, marginRight:15}}>Thuỷ hải sản</Text>
                <Text style={{marginLeft:15, marginRight:15}}>Gia vị</Text>

            </ScrollView>
            <Text style={{ margin: 5, fontSize: 20 }}>Thịt</Text>
            <ScrollView style={{ marginBottom: 30 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <ProductView imageSource={require('../img/BachTuoc.jpg')} productName="Bạch Tuộc" productNum="1kg" productPrice="$17.02" productReview="4.6" />
                <ProductView imageSource={require('../img/CaDieu.jpg')} productName="Cá Diêu" productNum="1kg" productPrice="$30.02" productReview="4.3" />
                <ProductView imageSource={require('../img/CaHoi.jpg')} productName="Cá Hồi" productNum="1.5kg" productPrice="$17.02" productReview="4.6" />
                <ProductView imageSource={require('../img/Luon.jpg')} productName="Lươn" productNum="1kg" productPrice="$17.02" productReview="3.6" />
                <ProductView imageSource={require('../img/ThitBaChiBo.jpg')} productName="Thịt ba chỉ bò" productNum="1kg" productPrice="$30.02" productReview="1.6" />
                <ProductView imageSource={require('../img/BachTuoc.jpg')} productName="Bạch Tuộc" productNum="1.5kg" productPrice="$17.02" productReview="4.6" />
                {/* Thêm các sản phẩm khác nếu cần */}
            </ScrollView>
            <Text style={{ margin: 5, fontSize: 20 }}>Rau củ</Text>
            <ScrollView style={{ marginBottom: 30 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <ProductView imageSource={require('../img/BachTuoc.jpg')} productName="Bạch Tuộc" productNum="1kg" productPrice="$17.02" productReview="4.6" />
                <ProductView imageSource={require('../img/CaDieu.jpg')} productName="Cá Diêu" productNum="1kg" productPrice="$30.02" productReview="4.3" />
                <ProductView imageSource={require('../img/CaHoi.jpg')} productName="Cá Hồi" productNum="1.5kg" productPrice="$17.02" productReview="4.6" />
                <ProductView imageSource={require('../img/Luon.jpg')} productName="Lươn" productNum="1kg" productPrice="$17.02" productReview="3.6" />
                <ProductView imageSource={require('../img/ThitBaChiBo.jpg')} productName="Thịt ba chỉ bò" productNum="1kg" productPrice="$30.02" productReview="1.6" />
                <ProductView imageSource={require('../img/BachTuoc.jpg')} productName="Bạch Tuộc" productNum="1.5kg" productPrice="$17.02" productReview="4.6" />
                {/* Thêm các sản phẩm khác nếu cần */}
            </ScrollView>
            <Text style={{ margin: 5, fontSize: 20 }}>Gia vị</Text>
            <ScrollView style={{ marginBottom: 30 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <ProductView imageSource={require('../img/BachTuoc.jpg')} productName="Bạch Tuộc" productNum="1kg" productPrice="$17.02" productReview="4.6" />
                <ProductView imageSource={require('../img/CaDieu.jpg')} productName="Cá Diêu" productNum="1kg" productPrice="$30.02" productReview="4.3" />
                <ProductView imageSource={require('../img/CaHoi.jpg')} productName="Cá Hồi" productNum="1.5kg" productPrice="$17.02" productReview="4.6" />
                <ProductView imageSource={require('../img/Luon.jpg')} productName="Lươn" productNum="1kg" productPrice="$17.02" productReview="3.6" />
                <ProductView imageSource={require('../img/ThitBaChiBo.jpg')} productName="Thịt ba chỉ bò" productNum="1kg" productPrice="$30.02" productReview="1.6" />
                <ProductView imageSource={require('../img/BachTuoc.jpg')} productName="Bạch Tuộc" productNum="1.5kg" productPrice="$17.02" productReview="4.6" />
                {/* Thêm các sản phẩm khác nếu cần */}
            </ScrollView>

        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    productView: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        paddingBottom: 10,
        position: 'relative',
        marginLeft: 5,
        marginRight: 5,
        height: 220,
    },
    image: {
        width: 103,
        height: 98,
        borderRadius: 24,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    productNum: {
        color: '#a7a7a7',
    },
    productPrice: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#4EC581',
    },
    star: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    review: {
        color: '#FF9416',
    },
    starImage: {
        width: 20,
        height: 20,
    },
    container: {
        margin: 10,
    },
    input: {
        height: 45,
        borderColor: COLORS.primaryOrangeHex,
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        paddingLeft: 45,
        margin: 5,
        backgroundColor: 'white'
    },
});

export default RandomProduct;
































// import { Image, ImageBackground, StyleSheet, Text, View, ScrollView, Touchable} from 'react-native'
// import React, { useState } from 'react'
// import { useStore } from '../store/store'
// import {
//   BORDERRADIUS,
//   COLORS,
//   FONTFAMILY,
//   FONTSIZE,
//   SPACING,
// } from '../theme/theme';
// import {Dimensions} from 'react-native';
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
// import CustomIcon from '../components/CustomIcon';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';



// const getCategoriesFromData = (data:any) => {
//   let temp: any = {};
//   for(let i=0;i<data.length;i++){
//     if(temp[data[i].name] == undefined){
//       temp[data[i].name] = 1;
//     }else{
//       temp[data[i].name] ++;
//     }
//   }
//   let categories = Object.keys(temp);
//   categories.unshift('All');
//   return categories;
// }

// const HomeScreen = () => {
//   const MeatList = useStore((state: any) => state.MeatList);
//   const FishList = useStore((state: any) => state.FishList);
//   const [categories, setCategories] = useState(getCategoriesFromData(MeatList));
//   const [searchText, setsearchText] = useState([undefined]);
//   const [categoryIndex, setCategoryIndex] = useState({
//     index: 0,
//     category: categories[0],
//   });
//   const [sortedMeat, setSortedMeat] = useState(undefined);
//   return (
//     <GestureHandlerRootView style={st.Container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={st.ScrollViewFlex}>

//           {/* Tìm kiếm */}
//           <View style={st.InputContainerComponent}>
//           <TouchableOpacity
//             onPress={() => {
//             }}>
//             <CustomIcon
//               style={st.InputIcon}
//               name="search"
//               size={FONTSIZE.size_18}
//               color={
//                 searchText.length > 0
//                   ? COLORS.primaryOrangeHex
//                   : COLORS.primaryLightGreyHex
//               }
//             />
//           </TouchableOpacity>
//           </View>

//           <FlatList>

//           </FlatList>
//       </ScrollView>
//     </GestureHandlerRootView>
//   )
// }

// export default HomeScreen

// const st = StyleSheet.create({
//   Container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   ScrollViewFlex: {
//     flexGrow: 1,
//   },
//   ScreenTitle: {
//     fontSize: FONTSIZE.size_28,
//     fontFamily: FONTFAMILY.poppins_semibold,
//     color: COLORS.primaryWhiteHex,
//     paddingLeft: SPACING.space_30,
//   },
//   InputContainerComponent: {
//     flexDirection: 'row',
//     margin: SPACING.space_30,
//     borderRadius: BORDERRADIUS.radius_20,
//     backgroundColor: COLORS.primaryDarkGreyHex,
//     alignItems: 'center',
//   },
//   InputIcon: {
//     marginHorizontal: SPACING.space_20,
//   },
//   TextInputContainer: {
//     flex: 1,
//     height: SPACING.space_20 * 3,
//     fontFamily: FONTFAMILY.poppins_medium,
//     fontSize: FONTSIZE.size_14,
//     color: COLORS.primaryWhiteHex,
//   },
//   CategoryScrollViewStyle: {
//     paddingHorizontal: SPACING.space_20,
//     marginBottom: SPACING.space_20,
//   },
//   CategoryScrollViewContainer: {
//     paddingHorizontal: SPACING.space_15,
//   },
//   CategoryScrollViewItem: {
//     alignItems: 'center',
//   },
//   CategoryText: {
//     fontFamily: FONTFAMILY.poppins_semibold,
//     fontSize: FONTSIZE.size_16,
//     color: COLORS.primaryLightGreyHex,
//     marginBottom: SPACING.space_4,
//   },
//   ActiveCategory: {
//     height: SPACING.space_10,
//     width: SPACING.space_10,
//     borderRadius: BORDERRADIUS.radius_10,
//     backgroundColor: COLORS.primaryOrangeHex,
//   },
//   FlatListContainer: {
//     gap: SPACING.space_20,
//     paddingVertical: SPACING.space_20,
//     paddingHorizontal: SPACING.space_30,
//   },
//   EmptyListContainer: {
//     width: Dimensions.get('window').width - SPACING.space_30 * 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: SPACING.space_36 * 3.6,
//   },
//   CoffeeBeansTitle: {
//     fontSize: FONTSIZE.size_18,
//     marginLeft: SPACING.space_30,
//     marginTop: SPACING.space_20,
//     fontFamily: FONTFAMILY.poppins_medium,
//     color: COLORS.secondaryLightGreyHex,
//   },
// })