import React, { Component, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StyleSheet, TextInput, ImageBackground, ActivityIndicator, FlatList, Modal, Button } from 'react-native';
import CustomIcon from '../components/CustomIcon';
import { COLORS } from '../theme/theme';

const HomeScreen = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [dssp, setDssp] = useState([]);
    const [meatList, setmeatList] = useState([]);
    const [fishList, setfishList] = useState([]);
    const [vegetaList, setvegetaList] = useState([]);
    const [cartItems, setcartItems] = useState([]);

    //Tạo các state cho hiển thị chi tiết

    const [idProd, setidProd] = useState('');
    const [imgProd, setimgProd] = useState('')
    const [nameProd, setnameProd] = useState('');
    const [dviProd, setdviProd] = useState('');
    const [priceProd, setpriceProd] = useState('');
    const [description, setdescription] = useState('');
    const [quantity, setquantity] = useState('');
    const [modalVisible, setmodalVisible] = useState(false);


    const getListSp = async () => {
        let url_api = 'https://65baf1bfb4d53c066553b8a3.mockapi.io/products';

        try {
            const response = await fetch(url_api);//load dlieu
            const json = await response.json(); //chuyển dlieu -> json
            setmeatList(json.filter(item => item.type === 'meat'));
            setfishList(json.filter(item => item.type === 'fish'));
            setvegetaList(json.filter(item => item.type === 'vegetables'));
            setDssp(json);//đổ dl
        } catch (error) {
            console.error(error);
        } finally {
            //kết thúc load dl
            setIsLoading(false);
        }
    }

    const addToCart = async () => {
        const item = {
            idProd: idProd,
            image: imgProd,
            name: nameProd,
            price: priceProd,
            dvi: dviProd,
            quantity: 1
            //'https://65baf1bfb4d53c066553b8a3.mockapi.io/carts'
        };
        fetch('https://65baf1bfb4d53c066553b8a3.mockapi.io/carts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
        .then ((res)=>{
            if(res.status ==201)
            console.log('Thêm thành công'); 
        })
        .catch((ex)=>{
            console.log(ex);
        });

    };


    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            //cập nhật gd ở đây
            getListSp();
        });
        return unsubscribe;
    }, [props.navigation]);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Menu')}>
                    <CustomIcon style={{ flex: 1, position: 'relative', margin: 10 }} name='menu' color={COLORS.primaryOrangeHex} size={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    console.log(this.state.text);
                }}>
                    <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='search' color={COLORS.primaryOrangeHex} size={25} />
                    <TextInput
                        style={styles.input}
                        placeholder="Tìm kiếm..."
                    />
                </TouchableOpacity>
                <ScrollView style={{ marginTop: 10, marginBottom: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Text style={{ marginLeft: 10, marginRight: 15 }}>Tất cả</Text>
                    <Text style={{ marginLeft: 15, marginRight: 15 }}>Rau củ</Text>
                    <Text style={{ marginLeft: 15, marginRight: 15 }}>Thịt</Text>
                    <Text style={{ marginLeft: 15, marginRight: 15 }}>Thuỷ hải sản</Text>
                    <Text style={{ marginLeft: 15, marginRight: 15 }}>Gia vị</Text>

                </ScrollView>

                <Text style={{ margin: 5, fontSize: 20 }}>Thịt</Text>
                {
                    (isLoading) ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={meatList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={styles.productView} onPress={() => {
                                        //gán dữ liệu cho state
                                        setidProd(item.id);
                                        setimgProd(item.image);
                                        setnameProd(item.name);
                                        setdviProd(item.dvi);
                                        setpriceProd(item.price);
                                        setdescription(item.description);
                                        setmodalVisible(true)
                                    }}>
                                        <Image source={{ uri: item.image }} style={styles.image} />
                                        <Text style={styles.productName}>{item.name}</Text>
                                        <Text style={styles.productNum}>Đơn vị: {item.dvi}</Text>
                                        <Text style={styles.productPrice}>{item.price}đ</Text>
                                        <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='like' size={25} color={'#f1eff2'} />
                                        <TouchableOpacity style={{ marginTop: 10, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primaryOrangeHex, borderRadius: 5 }} onPress={addToCart}><Text style={{ color: 'black' }}>Thêm</Text></TouchableOpacity>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    )
                }

                <Text style={{ margin: 5, fontSize: 20 }}>Thuỷ hải sản</Text>
                {
                    (isLoading) ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={fishList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={styles.productView} onPress={() => {
                                        //gán dữ liệu cho state
                                        setidProd(item.id);
                                        setimgProd(item.image);
                                        setnameProd(item.name);
                                        setdviProd(item.dvi);
                                        setpriceProd(item.price);
                                        setdescription(item.description);
                                        setmodalVisible(true)
                                    }}>
                                        <Image source={{ uri: item.image }} style={styles.image} />
                                        <Text style={styles.productName}>{item.name}</Text>
                                        <Text style={styles.productNum}>Đơn vị: {item.dvi}</Text>
                                        <Text style={styles.productPrice}>{item.price}đ</Text>
                                        <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='like' size={25} color={'#f1eff2'} />
                                        <TouchableOpacity style={{ marginTop: 10, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primaryOrangeHex, borderRadius: 5 }}><Text style={{ color: 'black' }}>Thêm</Text></TouchableOpacity>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    )
                }

                <Text style={{ margin: 5, fontSize: 20 }}>Rau củ</Text>
                {
                    (isLoading) ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={vegetaList}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={styles.productView} onPress={() => {
                                        //gán dữ liệu cho state
                                        setidProd(item.id);
                                        setimgProd(item.image);
                                        setnameProd(item.name);
                                        setdviProd(item.dvi);
                                        setpriceProd(item.price);
                                        setdescription(item.description);
                                        setmodalVisible(true)
                                    }}>
                                        <Image source={{ uri: item.image }} style={styles.image} />
                                        <Text style={styles.productName}>{item.name}</Text>
                                        <Text style={styles.productNum}>Đơn vị: {item.dvi}</Text>
                                        <Text style={styles.productPrice}>{item.price}đ</Text>
                                        <CustomIcon style={{ flex: 1, position: 'absolute', margin: 10 }} name='like' size={25} color={'#f1eff2'} />
                                        <TouchableOpacity style={{ marginTop: 10, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primaryOrangeHex, borderRadius: 5 }}><Text style={{ color: 'black' }}>Thêm</Text></TouchableOpacity>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    )
                }


            </ScrollView>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setmodalVisible(!modalVisible);
                }}
            >
                <SafeAreaView>
                    <ScrollView>
                        <View style={{ backgroundColor: 'white', flex: 1, width: '100%', padding: 16 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 24, padding: 10, marginBottom: 10, textAlign: 'center', color: 'black' }}>Chi tiết sản phẩm</Text>
                            <View style={{ flex: 1.5, alignItems: 'center', backgroundColor: 'white' }}>
                                <Image source={{ uri: imgProd }} style={{ width: '70%', height: 250 }} />
                            </View>

                            <View style={{ flex: 3, marginTop: 30 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginTop: 5 }}>{nameProd}</Text>
                                <Text style={{ marginTop: 5 }}>Đơn vị: {dviProd}</Text>
                                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 19, marginTop: 5 }}>{priceProd} $</Text>
                                <TouchableOpacity style={{ padding: 1, marginTop: 10, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primaryOrangeHex, borderRadius: 5 }}><Text style={{ color: 'black' }}>Thêm vào giỏ</Text></TouchableOpacity>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginTop: 15 }}>Thông tin sản phẩm:</Text>
                                <Text style={{ fontSize: 16, marginTop: 15, lineHeight: 24 }}>{description}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>


            </Modal>
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
        width: 120,
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

export default HomeScreen;



