import styled from "@emotion/styled";
import { Container } from "./components/Container";
import { Flex } from "./components/Flex";
import player1Desktop from "./assets/player1-desktop.png";
import player1Tablet from "./assets/player1-tablet.png";
import Constants from "./constants";

export const Header = ({ title }) => {
  const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    font-size: 90px;
    text-transform: uppercase;
    color: #e7e7e7;
    margin: 100px 0;

    @media (max-width: ${Constants.lg}px) {
      margin: 70px 0 120px 0;
    }
  `;

  const Absolute = styled(Container)`
    position: absolute;
    width: 100%;
  `;

  const Image = styled.div`
    img {
      position: absolute;
      height: 70vw;
      max-height: 1000px;
      translate: 5% -5%;
    }

    .desktop {
      display: block;
    }
    .tablet {
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
  `;

  return (
    <HeaderStyled>
      <Absolute>
        <Flex sm={1}>
          <Image>
            <img src={player1Desktop} alt="football" className="desktop" />
            <img src={player1Tablet} alt="football" className="tablet" />
          </Image>
        </Flex>
        <Flex sm={2}>
          <div className="title">{title}</div>
        </Flex>
      </Absolute>
    </HeaderStyled>
  );
};
