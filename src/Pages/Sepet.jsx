import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../Redux/Products/productSlice';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
  display: flex;
  min-height: 90vh;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemContainer = styled.div`
  width: 48%;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 130px;
  width: 150px;
  margin-right: 1rem;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const OrderButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 150px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const CartItems = ({ item, removeFromCartHandler }) => (
  <ItemContainer>
    <Img src={item.image} alt={item.title} />
    <div>
      <h3>{item.name}</h3>
      <p>{item.price} TL</p>
      <p>Miktar: {item.amount}</p>
      <RemoveButton onClick={() => removeFromCartHandler(item.id)}>
        Sepetten Çıkar
      </RemoveButton>
    </div>
  </ItemContainer>
);

const Sepet = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const removeFromCartHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div>
      <Navbar />
      <h1>Sepet</h1>
      <Container>
        {cartItems.map((item) => (
          <CartItems
            key={item.id}
            item={item}
            removeFromCartHandler={removeFromCartHandler}
          />
        ))}
      </Container>
      <hr />
      <h2>Toplam Tutar: {totalAmount} TL</h2>
      <OrderButton>Sipariş Ver</OrderButton>

    </div>
  );
};

export default Sepet;
