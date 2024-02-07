import styled from "@emotion/styled";
import { Flex } from "./components/Flex";
import { Container } from "./components/Container";
import Constants from "./Constants";

export const Article = ({
  number,
  title,
  content,
  underlineColor = "#603ebe",
  background = "white",
  contentColor = "black",
  numberColor = "black",
  revert = false,
}) => {
  const ArticleStyled = styled.article`
    display: flex;
    justify-content: center;
    background: ${background};
    padding: 60px 28px;

    @media (max-width: ${Constants.lg}px) {
      padding: 30px 0;
    }

    .content {
      padding-left: 120px;
    }

    @media (max-width: ${Constants.lg}px) {
      .content {
        padding-left: ${revert ? 10 : 20}px;
      }
    }

    @media (max-width: ${Constants.sm}px) {
      padding: 0;

      .space {
        display: none;
      }

      .content {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
  `;

  const Title = styled.div`
    display: flex;

    @media (max-width: ${Constants.lg}px) {
      padding-left: 20px;
    }
  `;

  const TitleNumber = styled.div`
    margin-top: 7px;
    height: 5px;
    width: 22px;
    font-size: 18px;
    letter-spacing: 1.5px;
    text-align: center;
    background: transparent;
    border-radius: 5px;
    box-shadow: 0 23px 0 0 ${underlineColor};
    color: ${numberColor};

    @media (max-width: ${Constants.sm}px) {
      margin-top: 5px;
      font-size: 14px;
      height: 4px;
      width: 18px;
      box-shadow: 0 18px 0 0 ${underlineColor};
    }
  `;

  const TitleText = styled.div`
    margin-left: 10px;
    text-transform: uppercase;
    font-size: 36px;
    letter-spacing: 1.5px;
    color: #c2c2c2;

    @media (max-width: ${Constants.sm}px) {
      font-size: 28px;
    }
  `;

  const Content = styled.div`
    color: ${contentColor};
    margin-top: 20px;
    font-size: 20px;
    line-height: 28px;

    @media (max-width: ${Constants.lg}px) {
      font-size: 18px;
      padding-left: 20px;
      padding-right: ${revert ? 50 : 30}px;
    }

    @media (max-width: ${Constants.sm}px) {
      margin-top: 10px;
      font-size: 15px;
      line-height: normal;
      padding: 0 20px;
    }
  `;

  return (
    <ArticleStyled>
      <Container revert={revert}>
        <Flex sm={1} className="space"></Flex>
        <Flex sm={2} className="content">
          <Title>
            <TitleNumber>{number}</TitleNumber>
            <TitleText>{title}</TitleText>
          </Title>
          <Content>{content}</Content>
        </Flex>
      </Container>
    </ArticleStyled>
  );
};
