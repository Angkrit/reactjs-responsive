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
      margin-top: 50px;
      padding-left: ${revert ? 120 : 60}px;
    }

    @media (max-width: ${Constants.frame}px) {
      .title {
        padding-left: ${revert ? 140 : 60}px;
      }
    }

    @media (max-width: ${Constants.lg}px) {
      margin: 50px 0 70px 0;

      .title {
        position: absolute;
        margin-top: ${revert ? 15 : 0}px;
        padding-left: 30px;
        translate: 0;
      }
    }

    @media (max-width: ${Constants.sm}px) {
      margin-top: ${revert ? 5 : 25}px;
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
    translate: ${revert ? 6 : -2}% ${revert ? -6 : 1}%;

    img {
      height: ${revert ? 50 : 60}vw;
      max-height: ${revert ? 815 : 950}px;
    }

    @media (max-width: 1580px) {
      translate: ${revert ? 5 : 20}% ${revert ? -10 : -3}%;
    }

    @media (max-width: ${Constants.lg}px) {
      translate: 0% ${revert ? 0 : 3}%;

      img {
        height: 100vw;
        max-height: ${revert ? 568 : 719}px;
      }

      position: ${revert ? "relative" : "absolute"};
    }

    @media (max-width: ${Constants.sm}px) {
      display: flex;
      justify-content: center;
      position: absolute;
      translate: 0 ${revert ? 85 : 70}px;

      img {
        max-height: ${revert ? 250 : 280}px;
      }
    }
  `;

  return (
    <HeaderStyled>
      <Absolute style={{ translate: "0 -5%", zIndex: 2 }}>
        <Flex sm={1}>
          <Image>
            <picture>
              <source
                media={`(min-width: ${Constants.lg + 1}px)`}
                srcSet={desktopImage}
              />
              <source
                media={`(min-width: ${Constants.sm + 1}px) and (max-width: ${
                  Constants.lg
                }px)`}
                srcSet={tabletImage}
              />
              <source
                media={`(max-width: ${Constants.sm}px)`}
                srcSet={mobileImage}
              />

              <img alt="football player" />
            </picture>
          </Image>
        </Flex>
        <Flex sm={2}>
          <div className="title">{title}</div>
        </Flex>
      </Absolute>
    </HeaderStyled>
  );
};
