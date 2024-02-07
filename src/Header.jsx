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
      margin: 60px 0 120px 0;

      .title {
        position: absolute;
        padding-left: 30px;
        translate: ${revert ? 2 : -2}%;
      }
    }

    @media (max-width: ${Constants.sm}px) {
      margin-top: 30px;
      font-size: 50px;
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
    position: absolute;
    width: 100%;
    z-index: 2;
    translate: ${revert ? -12 : -2}% ${revert ? -12 : -3}%;

    img {
      height: 100vw;
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

    @media (max-width: ${Constants.lg}px) {
      translate: 0 ${revert ? -2 : 4}%;

      img {
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
      translate: 0 80px;

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
      <Absolute>
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
