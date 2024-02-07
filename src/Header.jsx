import styled from "@emotion/styled";
import { Container } from "./components/Container";
import { Flex } from "./components/Flex";
import Constants from "./Constants";

export const Header = ({
  title,
  revert = false,
  desktopImage,
  tabletImage,
  mobileImage,
}) => {
  const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    font-size: 90px;
    text-transform: uppercase;
    color: #e7e7e7;
    margin: 100px 0;

    .title {
      padding-left: ${revert ? 120 : 60}px;
    }

    @media (max-width: ${Constants.lg}px) {
      margin: 50px 0 120px 0;

      .title {
        position: absolute;
        padding-left: 30px;
        translate: 0;
      }
    }

    @media (max-width: ${Constants.sm}px) {
      margin-top: 30px;
      font-size: 50px;

      .title {
        padding-left: 20px;
      }
    }
  `;

  const Absolute = styled(Container)`
    position: absolute;
    flex-direction: ${revert ? "row-reverse" : "row"};
    width: 100%;

    @media (max-width: ${Constants.sm}px) {
      position: relative;
      display: flex;
      flex-direction: column-reverse;
    }
  `;

  const Image = styled.div`
    position: relative;
    width: 100%;
    translate: ${revert ? 6 : -2}% ${revert ? -10 : -3}%;

    img {
      height: ${revert ? 50 : 60}vw;
      max-height: ${revert ? 815 : 950}px;
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

    @media (max-width: 1580px) {
      translate: ${revert ? 5 : 20}% ${revert ? -10 : -3}%;
    }

    @media (max-width: ${Constants.lg}px) {
      translate: 0% ${revert ? -2 : 4}%;

      img {
        height: 100vw;
        max-height: ${revert ? 568 : 719}px;
      }

      position: ${revert ? "relative" : "absolute"};

      .desktop {
        display: none;
      }
      .tablet {
        display: block;
      }
    }

    @media (max-width: ${Constants.sm}px) {
      display: flex;
      justify-content: center;
      position: absolute;
      translate: 0 70px;

      img {
        max-height: ${revert ? 250 : 280}px;
      }

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
      <Absolute style={{ translate: "0 -10px", zIndex: 2 }}>
        <Flex sm={1}>
          <Image>
            <img src={desktopImage} alt="football" className="desktop" />
            <img src={tabletImage} alt="football" className="tablet" />
            <img src={mobileImage} alt="football" className="mobile" />
          </Image>
        </Flex>
        <Flex sm={2}>
          <div className="title">{title}</div>
        </Flex>
      </Absolute>
    </HeaderStyled>
  );
};
