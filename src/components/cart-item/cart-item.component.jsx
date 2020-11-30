import React from "react";

//styled-components
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemName,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt={name} />
    <ItemDetailsContainer>
      <CartItemName>{name}</CartItemName>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
