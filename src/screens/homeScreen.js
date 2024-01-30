import React, { Component, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StyleSheet, TextInput, ImageBackground, ActivityIndicator } from 'react-native';
import CustomIcon from '../components/CustomIcon';
import { COLORS } from '../theme/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatList } from 'react-native-gesture-handler';



    
// const ProductView = ({ imageSource, productName, productNum, productPrice, productReview }) => (
//     <TouchableOpacity style={styles.productView}>
//         <Image source={imageSource} style={styles.image} />
//         <Text style={styles.productName}>{productName}</Text>
//         <Text style={styles.productNum}>{productNum}</Text>
//         <Text style={styles.productPrice}>{productPrice}</Text>
//         <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='like' size={25} />
//         <TouchableOpacity style={{ height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primaryOrangeHex, borderRadius: 5 }}><Text style={{ color: 'black' }}>Thêm</Text></TouchableOpacity>
//     </TouchableOpacity>
// );



const RandomProduct = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [dssp, setDssp] = useState([]);

    const getListSp = async () => {
        let url_api ='http://192.168.0.109:3000/products';

        try{
            const response = await fetch(url_api);//load dlieu
            const json = await response.json(); //chuyển dlieu -> json

            setDssp(json);//đổ dl
        }catch(error){
            console.error(error);
        }finally{
            //kết thúc load dl
            setIsLoading(false);
        }
    }



    const [dataThit, setData] = useState([
        {
            id:1,
            name:'Thịt bò Úc xay',
            num:'0.5kg',
            price: 17.02,
            review: 4.2,
            image: 'https://hcm.fstorage.vn/images/2022/8936150841113_7bc1837c-aa53-4a4d-a62c-28bed51c0e98-og.jpg'
        },
        {
            id:2,
            name:'Thịt Ba Rọi',
            num:'1kg',
            price: 30.02,
            review: 4.7,
            image: 'https://hcm.fstorage.vn/images/2022/thit-ba-roi-co-da.jpg'
        },
        {
            id:3,
            name:'Thịt bò Bít Tết',
            num:'1.5kg',
            price: 17.02,
            review: 4.9,
            image: 'https://hcm.fstorage.vn/images/2022/thit-bo-bit-tet-fuji-goi-200g_b5ce6529-6cff-4589-9134-9a06f4754410-og.jpg'
        },
        {
            id:4,
            name:'Bò Canada',
            num:'1kg',
            price: 17.02,
            review: 4.5,
            image: 'https://hcm.fstorage.vn/images/2023/04/8934954012050-20230428083019.png'
        },
        {
            id:5,
            name:'Thịt ba chỉ bò',
            num:'1kg',
            price: 30.02,
            review: 5,
            image: 'https://hcm.fstorage.vn/images/2022/ba-chi-bo-my-cat-lat-dong-lanh-tps-khay-500g_40bdfd3e-abcb-4693-b412-9cf3c3ffb3ea-og.jpg'
        },
    ]);

    const [dataHaiSan, setDataHaiSan] = useState([
        {
            id:6,
            name:'Tôm thịt',
            num:'0.5kg',
            price: 17.02,
            review: 4.2,
            image: 'https://hcm.fstorage.vn/images/2022/40-khay-450g-20221007080806-og.jpg'
        },
        {
            id:7,
            name:'Bạch Tuộc',
            num:'1kg',
            price: 30.02,
            review: 4.7,
            image: 'https://hcm.fstorage.vn/images/2022/9538873065502-og.jpg'
        },
        {
            id:8,
            name:'Ngao',
            num:'1.5kg',
            price: 17.02,
            review: 4.9,
            image: 'https://hcm.fstorage.vn/images/2022/162428239615010053467-hop-sua-bap-non-lif-loc-4-hop-x-180ml-og.jpg'
        },
        {
            id:9,
            name:'Lươn',
            num:'1kg',
            price: 17.02,
            review: 4.5,
            image: 'https://hcm.fstorage.vn/images/2022/luon-lam-sach_8abc26a4-8da6-4b4c-a6cd-29f94ed605fd-og.jpg'
        },
        {
            id:10,
            name:'Cá rô phi lê',
            num:'1kg',
            price: 30.02,
            review: 5,
            image: 'https://hcm.fstorage.vn/images/2022/9642722426910-og.jpg'
        },
    ]);

    const [dataRau, setDataRau] = useState([
        {
            id:11,
            name:'Xà lách',
            num:'0.5kg',
            price: 17.02,
            review: 4.2,
            image: 'https://hcm.fstorage.vn/images/2023/02/xa-lach-mo-wineco-300g.jpg'
        },
        {
            id:12,
            name:'Hành Paro',
            num:'1kg',
            price: 30.02,
            review: 4.7,
            image: 'https://hcm.fstorage.vn/images/2023/02/hanh-paro-wineco-300g.jpg'
        },
        {
            id:13,
            name:'Cải xanh',
            num:'1.5kg',
            price: 17.02,
            review: 4.9,
            image: 'https://hcm.fstorage.vn/images/2023/02/cai-xanh-baby-wineco-300g.jpg'
        },
        {
            id:14,
            name:'Cà rốt',
            num:'1kg',
            price: 17.02,
            review: 4.5,
            image: 'https://hcm.fstorage.vn/images/2023/07/ca-rot-20230721084932.png'
        },
        {
            id:15,
            name:'Bí đỏ',
            num:'1kg',
            price: 30.02,
            review: 5,
            image: 'https://hcm.fstorage.vn/images/2023/02/bi-do-tron.jpeg'
        },
    ]);


    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
          //cập nhật gd ở đây
          getListSp();
        });
        return unsubscribe;
      }, [props.navigation]);

    return(
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
            {/* <Text style={{ margin: 5, fontSize: 20 }}>Thịt</Text>
            <ScrollView style={{ marginBottom: 30 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <ProductView imageSource={require('../img/BachTuoc.jpg')} productName="Bạch Tuộc" productNum="1kg" productPrice="$17.02" productReview="4.6" />
                <ProductView imageSource={require('../img/CaDieu.jpg')} productName="Cá Diêu" productNum="1kg" productPrice="$30.02" productReview="4.3" />
                <ProductView imageSource={require('../img/CaHoi.jpg')} productName="Cá Hồi" productNum="1.5kg" productPrice="$17.02" productReview="4.6" />
                <ProductView imageSource={require('../img/Luon.jpg')} productName="Lươn" productNum="1kg" productPrice="$17.02" productReview="3.6" />
                <ProductView imageSource={require('../img/ThitBaChiBo.jpg')} productName="Thịt ba chỉ bò" productNum="1kg" productPrice="$30.02" productReview="1.6" />
                <ProductView imageSource={require('../img/BachTuoc.jpg')} productName="Bạch Tuộc" productNum="1.5kg" productPrice="$17.02" productReview="4.6" />
            </ScrollView> */}
            <Text style={{ margin: 5, fontSize: 20 }}>Thịt</Text>
            {
                (isLoading) ? (
                    <ActivityIndicator/>
                ) : (
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={dssp}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity style={styles.productView}>
                                    <Image source={{uri: item.image}} style={styles.image} />
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Text style={styles.productNum}>{item.num}</Text>
                                    <Text style={styles.productPrice}>{item.price}đ</Text>
                                    <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='like' size={25} color={'#f1eff2'}/>
                                    <TouchableOpacity style={{ marginTop:10,height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primaryOrangeHex, borderRadius: 5 }}><Text style={{ color: 'black' }}>Thêm</Text></TouchableOpacity>
                                </TouchableOpacity>
                            )
                        }}
                    />
                )
            }

            <Text style={{ margin: 5, fontSize: 20 }}>Thuỷ hải sản</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dataHaiSan}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity style={styles.productView}>
                            <Image source={{uri: item.image}} style={styles.image} />
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productNum}>{item.num}</Text>
                            <Text style={styles.productPrice}>{item.price}đ</Text>
                            <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='like' size={25} color={'#f1eff2'}/>
                            <TouchableOpacity style={{ marginTop:10,height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primaryOrangeHex, borderRadius: 5 }}><Text style={{ color: 'black' }}>Thêm</Text></TouchableOpacity>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
            />

            <Text style={{ margin: 5, fontSize: 20 }}>Rau củ</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dataRau}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity style={styles.productView}>
                            <Image source={{uri: item.image}} style={styles.image} />
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productNum}>{item.num}</Text>
                            <Text style={styles.productPrice}>{item.price}đ</Text>
                            <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='like' size={25} color={'#f1eff2'}/>
                            <TouchableOpacity style={{ marginTop:10,height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primaryOrangeHex, borderRadius: 5 }}><Text style={{ color: 'black' }}>Thêm</Text></TouchableOpacity>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
            />
            

        </ScrollView>
    </SafeAreaView>
    )
            };

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
        elevation: 2,
    },
    image: {
        width: 100,
        height: 98,
        borderRadius: 24,
    },
    productName: {
        fontWeight: 'bold',
    },
    productNum: {
        color: '#a7a7a7',
    },
    productPrice: {
        fontWeight: 'bold',
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