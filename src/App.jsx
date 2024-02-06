import styled from "@emotion/styled";
import { Article } from "./Article";
import { Header } from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { athletes } from "./data";
import Constants from "./Constants";

const Main = styled.main`
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
      margin-top: 255px;
      padding-top: 60px;
      padding-bottom: 60px;
      background-color: #f5f4f9;
    }
  }
`;

function App() {
  return (
    <Main>
      <section className="section athletes">
        <Header title="Athletes" />
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
          className="swiper"
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
      <section className="section players"></section>
    </Main>
  );
}

export default App;
