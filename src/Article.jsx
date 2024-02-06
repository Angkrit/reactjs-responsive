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
}) => {
  const ArticleStyled = styled.article`
    display: flex;
    justify-content: center;
    background: ${background};
    padding: 60px 30px;

    @media (max-width: ${Constants.lg}px) {
      padding: 40px;
    }

    .content {
      padding-left: 25px;
    }
  `;

  const Title = styled.div`
    display: flex;
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
    color: black;
  `;

  const TitleText = styled.div`
    margin-left: 10px;
    text-transform: uppercase;
    font-size: 36px;
    letter-spacing: 1.5px;
    color: #c2c2c2;
  `;

  const Content = styled.div`
    color: ${contentColor};
    margin-top: 20px;
    font-size: 20px;
    line-height: 28px;

    @media (max-width: ${Constants.lg}px) {
      font-size: 18px;
    }
  `;

  return (
    <ArticleStyled>
      <Container>
        <Flex sm={1}></Flex>
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
