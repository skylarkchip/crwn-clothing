import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CollectionPreviewTitle = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
