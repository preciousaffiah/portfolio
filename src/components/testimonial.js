import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../App.css"

const Testimonial = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold pb-3">
        Look what people have to say...
      </h1>

      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Set slidesPerView to 1
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="swiper"
      >
        <SwiperSlide>
          <div>
            <p className="text-base italics pb-2">
              "Precious Affiah is a highly skilled Backend Node.js Developer
              with a proven track record of delivering high-quality solutions.
              her ability to quickly understand and translate complex
              requirements into efficient code sets her apart. A collaborative
              team player, Precious Affiah contributes valuable insights and
              ensures project deadlines are met. I strongly recommend Precious
              Affiah."
            </p>
            <div className="flex items-center justify-center gap-x-2">
              <h2 className="text-white text-base">
                ~ Ferdinand Ekpo, Overwatch
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="text-base italics pb-2">
              "Precious Affiah is a highly skilled Backend Node.js Developer
              with a proven track record of delivering high-quality solutions.
              her ability to quickly understand and translate complex
              requirements into efficient code sets her apart. A collaborative
              team player, Precious Affiah contributes valuable insights and
              ensures project deadlines are met. I strongly recommend Precious
              Affiah."
            </p>
            <div className="flex items-center justify-center gap-x-2">
              <h2 className="text-white text-base">
                ~ Emmanuel Eyo, Iko Africa
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="text-base italics pb-2">
              "I had the pleasure of working with Precious, an exceptional
              Software Engineer, on several projects. Her technical expertise,
              problem-solving skills, and dedication to excellence consistently
              impressed me. I highly recommend Precious for any software
              engineering role. Her combination of technical skills,
              professionalism, and teamwork makes her an invaluable asset to any
              team."
            </p>
            <div className="flex items-center justify-center gap-x-2">
              <h2 className="text-white text-base">
                ~ Jonathan Felicity, Lorgrithm
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
