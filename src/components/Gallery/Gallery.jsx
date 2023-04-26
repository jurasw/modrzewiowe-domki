import css from "./Gallery.module.css";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "../../images/domki-przód.png";
import img2 from "../../images/domki-tył.jpg";
import img3 from "../../images/plac-zabaw1.jpg";
import img4 from "../../images/plac-zabaw2.jpg";
import img5 from "../../images/domki-przód.png";
import img6 from "../../images/domki-tył.jpg";
import img7 from "../../images/plac-zabaw1.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={css.Gallery}>
      <h6 id="Gallery"></h6>
      <h2>Galeria</h2>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        grabCursor={true}
        className='product-images-slider'
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="zdjęcie" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='product-images-slider-thumbs'
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
                      <div className="product-images-slider-thumbs-wrapper">
              <img src={item} alt="zdjęcie" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
