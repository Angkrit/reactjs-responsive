import styled from "@emotion/styled";
import Constants from "../Constants";

export const Container = styled.div`
  width: 100%;
  max-width: ${Constants.frame}px;
  display: flex;
  flex-direction: ${({ revert }) => (revert ? "row-reverse" : "row")};
`;
