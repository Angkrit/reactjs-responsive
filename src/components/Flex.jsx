import styled from "@emotion/styled";
import Constants from "../constants";

export const Flex = styled.div`
  flex: 1;

  @media (max-width: ${Constants.lg}px) {
    flex: ${({ sm }) => sm || 1};
  }
`;
