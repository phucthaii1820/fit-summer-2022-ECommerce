import { Table, Image, InputNumber, Button, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { getProductInfo } from "@/API/product";
import { addShoppingCart, getProfileUser, removeShoppingCart } from "@/API/user";
import { Link } from "react-router-dom";

const { Option } = Select;

export default function ShoppingCartList({visible}) {
  const [userInfo, setUserInfo] = useState([]);
  const [shoppingCartData, setShoppingCartData] = useState([]);
  const [cartProductsInfo, setCartProductsInfo] = useState([]);
  const [productInfo, setProductInfo] = useState([]);

  function shoppingCart() {
    this.key = "";
    this.productKey = "";
    this.name = "";
    this.image = "";

    this.quantity = 0;
    this.limitedQuantity = 0;

    this.color = [];
    this.defaultColor = "";

    this.price = 0;
    this.total = 0;
  }

  useEffect(() => {
    async function fetchShoppingCart() {
      const resUser = await getProfileUser();
      setUserInfo(resUser?.user_data);
      console.log(resUser?.user_data?.cart)
      setShoppingCartData(resUser?.user_data?.cart);
    }
    fetchShoppingCart();
  }, [visible]);

  useEffect(() => {
    async function fetchCartsInfo() {
      try {
        const productsInfo = [];
        const shoppingCarts = [];

        for (let i = 0; i < shoppingCartData.length; i++) {
          const resProduct = await getProductInfo(
            shoppingCartData[i]?.product_id
          );

          if (resProduct?.data) {
            productsInfo.push(resProduct.data);
          }
        }
        setProductInfo(productsInfo);
        for (let i = 0; i < shoppingCartData.length; i++) {
          var cart = new shoppingCart();
          cart.key = shoppingCartData[i]?._id;
          cart.productKey = shoppingCartData[i]?.product_id;

          cart.name = productsInfo[i]?.title;
          cart.image = productsInfo[i]?.image[0];

          var obj = productsInfo[i]?.type.find(
            (val) => val._id === shoppingCartData[i]?.type_id
          );
          var index = productsInfo[i]?.type.indexOf(obj);

          productsInfo[i]?.type.forEach((val) => {
            cart.color.push(val.color);
          });

          cart.defaultColor = productsInfo[i]?.type[index]?.color;

          cart.limitedQuantity = productsInfo[i]?.type[index]?.quantity;
          if(shoppingCartData[i].quantity > cart.limitedQuantity){
            shoppingCartData[i].quantity = cart.limitedQuantity;
          }
          cart.quantity = shoppingCartData[i]?.quantity;

          cart.price = productsInfo[i]?.type[index]?.price;
          cart.total = cart.price * cart.quantity;
          shoppingCarts.push(cart);
        }
        setCartProductsInfo(shoppingCarts);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCartsInfo();
  }, [shoppingCartData]);

  const columns = [
    {
      title: "Hình Ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) =>
        image ? (
          <img
            src={image}
            alt="productImg"
            className="w-16 h-16 bg-cover"
          ></img>
        ) : (
          <p>No image</p>
        ),
    },
    {
      title: "Sản Phẩm",
      dataIndex: "name",
      key: "name",
      render: (name, { productKey }) => (
        <Link to={"/product-detail/" + productKey}>{name}</Link>
      ),
    },
    {
      title: "Màu Sắc",
      dataIndex: "color",
      key: "color",
      render: (color, {key, defaultColor}) => (
        <Select width={50} defaultValue={defaultColor} onChange={(e) => onUpdateProductColor(e, key)} >
          {color.map((val, index) => (
            <Option key={index} value={val}>
              <div className="h-4 w-4" style={{ backgroundColor: val, marginTop: "6px" }}></div>
            </Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Số Lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, {limitedQuantity, key}) =>
        limitedQuantity !== 0 ? (
          <InputNumber
            min={1}
            max={limitedQuantity}
            value={quantity}
            width={50}
            onChange={(e) => onUpdateCartQuantity(e, key)}
          />            
        ) : (
          <span className="text-red font-bold">Hết hàng</span>
        )
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <span>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(price)}
        </span>
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "total",
      key: "total",
      render: (total) => (
        <span>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(total)}
        </span>
      ),
    },
    {
      title: "Xóa",
      dataIndex: "delete",
      render: (_, {key}) => (
        <Button type="danger" shape="circle" icon={<DeleteOutlined />} onClick={() => onDeleteProductFromCart(key)}/>
      ),
    },
  ];

  const removeCart = async (cartID) => {
    try {
      const res = await removeShoppingCart({ cart_id: cartID });
    } catch (err) {
      message.error("Hệ thống đang xử lý!");
    }
  };

  const addCart = async (productID, typeID, quantity) => {
    try {
      const res = await addShoppingCart({ product_id: productID, type_id: typeID, quantity: quantity });
    } catch (err) {
      message.error("Hệ thống đang xử lý!");
    }
  };

  const updateCart = async (cartID, productID, typeID, quantity) => {
    try {
      const resRemove = await removeShoppingCart({ cart_id: cartID });
      const resAdd = await addShoppingCart({ product_id: productID, type_id: typeID, quantity: quantity });
    } catch (err) {
      message.error("Hệ thống đang xử lý!");
    }
  }

  const onDeleteProductFromCart = (key) => {
    for(let i = 0; i < shoppingCartData.length; i++){
      if(shoppingCartData[i]._id === key){
        removeCart(shoppingCartData[i]._id);   
      }
    } 
    const newCart = shoppingCartData.filter(
      (cart) => cart._id !== key
    );
    setShoppingCartData(newCart);
  };

  const onUpdateCartQuantity = (e, key) => {
    let oldQuantity = 0;
    const newCart = shoppingCartData.map((cart) => {
      if (cart._id === key) {
        oldQuantity = cart.quantity;
        cart.quantity = e;
      }
      return cart;
    });

    for(let i = 0; i < newCart.length; i++){
      if(newCart[i]._id === key){
        addCart(newCart[i].product_id, newCart[i].type_id, newCart[i].quantity - oldQuantity);
      }
    }    
    setShoppingCartData(newCart);  
  };

  const onUpdateProductColor = (e, key) => {
    const newCart = shoppingCartData.map((cart) => {
      if (cart._id === key) {
        for(let i = 0; i < productInfo.length; i++){
          if(productInfo[i]._id === cart.product_id){
            for(let j = 0; j < productInfo[i]?.type.length; j++){
              if(productInfo[i].type[j].color === e){
                cart.type_id = productInfo[i].type[j]._id;
              }
            }
          }
        }
      }
      return cart;
    });

    for(let i = 0; i < newCart.length; i++){
      if(newCart[i]._id === key){
        updateCart(newCart[i]._id, newCart[i].product_id, newCart[i].type_id, newCart[i].quantity)
      }
    }
    setShoppingCartData(newCart);
  };

  const countTotalPrice = () => {
    let totalPrice = 0;
    cartProductsInfo.forEach((cart) => {
      totalPrice += cart.price * cart.quantity;
    });
    return totalPrice;
  };

  return (
    <div className="w-auto">
      <Table
        columns={columns}
        dataSource={cartProductsInfo}
        pagination={false}
        scroll={{ y: 200 }}
      />
      <div className="flex mt-7">
        <span className="mr-2 font-bold text-base">Tổng Tiền: </span>
        <span className="text-red-500 text-base">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(countTotalPrice())}
        </span>
      </div>
    </div>
  );
}
