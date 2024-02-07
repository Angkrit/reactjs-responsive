import styled from "@emotion/styled";
import { Article } from "./Article";
import { Header } from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { athletes, players } from "./data";
import Constants from "./Constants";

import player1Desktop from "./assets/player1-desktop.png";
import player1Tablet from "./assets/player1-tablet.png";
import player1Mobile from "./assets/player1-mobile.png";

import player2Desktop from "./assets/player2-desktop.png";
import player2Tablet from "./assets/player2-tablet.png";
import player2Mobile from "./assets/player2-mobile.png";

const Main = styled.main`
  .list {
    margin-top: 120px;
  }

  .swiper {
    display: none;
  }

  .swiper-pagination {
    margin-bottom: 15px;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #d8d8d8;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #5c3caf;
  }

  @media (max-width: ${Constants.sm}px) {
    .list {
      display: none;
    }

    .swiper {
      display: block;
      padding-top: 60px;
      padding-bottom: 60px;
      background-color: #f5f4f9;

      &.athlete {
        margin-top: 320px;
      }

      &.player {
        margin-top: 285px;
      }
    }
  }
`;

function App() {
  return (
    <Main>
      <section className="section athletes">
        <Header
          title="Athletes"
          desktopImage={player1Desktop}
          tabletImage={player1Tablet}
          mobileImage={player1Mobile}
        />
        <div className="list">
          {athletes.map((athlete) => (
            <Article key={athlete.number} {...athlete} />
          ))}
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper athlete"
        >
          {athletes.map((athlete) => (
            <SwiperSlide key={athlete.number}>
              <Article
                {...athlete}
                background={null}
                underlineColor="#603EBE"
                contentColor="black"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="section players">
        <Header
          title="Players"
          revert={true}
          desktopImage={player2Desktop}
          tabletImage={player2Tablet}
          mobileImage={player2Mobile}
        />
        <div className="list">
          {players.map((player) => (
            <Article key={player.number} {...player} revert={true} />
          ))}
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper player"
        >
          {players.map((player) => (
            <SwiperSlide key={player.number}>
              <Article
                {...player}
                background={null}
                underlineColor="#603EBE"
                contentColor="black"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Main>
  );
}

export default App;
