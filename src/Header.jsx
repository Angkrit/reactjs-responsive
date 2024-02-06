import styled from "@emotion/styled";
import { Container } from "./components/Container";
import { Flex } from "./components/Flex";
import Constants from "./Constants";
import player1Desktop from "./assets/player1-desktop.png";
import player1Tablet from "./assets/player1-tablet.png";
import player1Mobile from "./assets/player1-mobile.png";

export const Header = ({ title }) => {
  const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    font-size: 90px;
    text-transform: uppercase;
    color: #e7e7e7;
    margin: 100px 0;

    .title {
      padding-left: 30px;
    }

    @media (max-width: ${Constants.lg}px) {
      margin: 70px 0 120px 0;

      .title {
        padding: 0 30px;
      }
    }

    @media (max-width: ${Constants.sm}px) {
      margin-top: 30px;
      font-size: 50px;
    }
  `;

  const Absolute = styled(Container)`
    position: absolute;
    width: 100%;

    @media (max-width: ${Constants.sm}px) {
      position: relative;
      display: flex;
      flex-direction: column-reverse;
    }
  `;

  const Image = styled.div`
    position: absolute;
    width: 100%;
    z-index: 2;

    img {
      height: 50vw;
      max-height: 1000px;
      translate: 0% -5%;
    }

    .desktop {
      display: block;
    }
    .tablet {
      display: none;
    }
    .mobile {
      display: none;
    }

    @media (max-width: ${Constants.lg}px) {
      img {
        translate: 0 5%;
        height: 90vw;
        max-height: 800px;
      }

      .desktop {
        display: none;
      }
      .tablet {
        display: block;
      }
    }

    @media (max-width: ${Constants.sm}px) {
      img {
        max-height: 280px;
      }

      display: flex;
      justify-content: center;

      .tablet {
        display: none;
      }
      .mobile {
        display: block;
      }
    }
  `;

  return (
    <HeaderStyled>
      <Absolute>
        <Flex sm={1}>
          <Image>
            <img src={player1Desktop} alt="football" className="desktop" />
            <img src={player1Tablet} alt="football" className="tablet" />
            <img src={player1Mobile} alt="football" className="mobile" />
          </Image>
        </Flex>
        <Flex sm={2}>
          <div className="title">{title}</div>
        </Flex>
      </Absolute>
    </HeaderStyled>
  );
};
