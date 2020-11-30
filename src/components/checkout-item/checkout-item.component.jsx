import React from "react";
import { connect } from "react-redux";

// Redux
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

// styled-components
import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutItemDescription,
  CheckoutItemQuantity,
  CheckoutItemValue,
  ArrowContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {

  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <CheckoutItemDescription>{name}</CheckoutItemDescription>
      <CheckoutItemQuantity>
        <ArrowContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrowContainer>
        <CheckoutItemValue>{quantity}</CheckoutItemValue>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </CheckoutItemQuantity>
      <CheckoutItemDescription>${price}</CheckoutItemDescription>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
