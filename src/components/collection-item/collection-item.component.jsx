import React from "react";

// Redux
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

// Components
import CustomButton from "../custom-button/custom-button.component";

// styled-components
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  CollectionItemName,
  CollectionItemPrice,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <ImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>{price}</CollectionItemPrice>
      </CollectionFooterContainer>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
