import styled from "@emotion/styled";
import Constants from "../Constants";

export const Flex = styled.div`
  flex: 1;

  @media (max-width: ${Constants.lg}px) {
    flex: ${({ sm }) => sm || 1};
  }
`;
