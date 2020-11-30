import React from "react";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// Redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

//styled-components
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
