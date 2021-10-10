import { AnimeOfSeasonContext } from "../../providers/animeOfSeason";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Scroll, Span } from "./styles";
import Carousel from "react-grid-carousel";

const CardAnimeOfSeason = () => {
  const { animeOfSeason } = useContext(AnimeOfSeasonContext);
  let history = useHistory();

  function handleClick(item) {
    history.push(`/anime/${item.title}`);
  }

  return (
    <Scroll>
      <Carousel
        cols={6}
        rows={1}
        gap={10}
        loop={true}
        autoplay={5000}
        containerStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        responsiveLayout={[
          {
            breakpoint: 1300,
            cols: 5,
          },
          {
            breakpoint: 1100,
            cols: 4,
          },
          {
            breakpoint: 900,
            cols: 3,
          },
          {
            breakpoint: 700,
            cols: 2,
          },
        ]}
        mobileBreakpoint={350}
      >
        {animeOfSeason.map((item) => {
          return (
            <Carousel.Item>
              <img
                onClick={() => handleClick(item)}
                width="100%"
                height="300px"
                src={item.image_url}
                alt=""
              ></img>
              <Span>{item.score === null ? "5.0" : item.score}</Span>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Scroll>
  );
};

export default CardAnimeOfSeason;
