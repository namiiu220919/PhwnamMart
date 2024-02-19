import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator,ToastAndroid } from 'react-native';
import { COLORS } from '../theme/theme';

const ProductScreen = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const getListCart = async () => {
    const url_api = 'https://65baf1bfb4d53c066553b8a3.mockapi.io/carts';

    try {
      const response = await fetch(url_api);
      const json = await response.json();
      setCart(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getListCart();
    });
    return unsubscribe;
  }, [props.navigation]);

  const handleDeleteItem = async (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);

    try {
      await fetch(`https://65baf1bfb4d53c066553b8a3.mockapi.io/carts/${itemId}`, {
        method: 'DELETE',
      });
      console.log('Cart item deleted successfully');
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);

    try {
      await fetch(`https://65baf1bfb4d53c066553b8a3.mockapi.io/carts/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });
      console.log('Cart item updated successfully');
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const handlePayment = async () => {
    // Thực hiện xử lý thanh toán ở đây (ví dụ: gửi yêu cầu thanh toán đến server)

    // Hiển thị thông báo thanh toán thành công
    setPaymentSuccess(true);

    // Xóa giỏ hàng
    setCart([]);

    // Hiển thị thông báo
    ToastAndroid.show('Thanh toán thành công!', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={{ flex: 1, margin: 10 }}>
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                updateQuantity={updateQuantity}
                handleDeleteItem={handleDeleteItem}
              />
            )}
          />
        )}
      </View>
      <View style={styles.footer}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>Tổng tiền: {calculateTotalPrice(cart)}đ</Text>
          <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
            <Text style={styles.paymentButtonText}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const CartItem = ({ item, updateQuantity, handleDeleteItem }) => {
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDelete = () => {
    handleDeleteItem(item.id); // Sử dụng handleDeleteItem thay vì handleDelete
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.info}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}đ</Text>
        <Text>Đơn vị: {item.dvi}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Xoá</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'column',
  },
  container: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  image: {
    width: '40%',
    height: 130,
    borderRadius: 5,
  },
  info: {
    width: '50%',
    padding: 10,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4EC581',
    textAlign: 'left',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.primaryOrangeHex,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 20,
    color:'black',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    paddingHorizontal: 10,
    padding:10,
    borderRadius:5,
    backgroundColor:COLORS.primaryOrangeHex,
    marginBottom:80
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalPriceText: {
    color: 'black',
    fontWeight: 'bold',
  },
  paymentButton: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    
  },
  paymentButtonText: {
    color: 'black',
  },
  paymentSuccess: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  paymentSuccessText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductScreen;
