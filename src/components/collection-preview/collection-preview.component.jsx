import React from "react";

// components
import CollectionItem from "../../components/collection-item/collection-item.component";

// styled-components
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle to={`shop/${title.toLowerCase()}`}>
      {title.toUpperCase()}
    </CollectionPreviewTitle>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
