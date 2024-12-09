import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../App.css"

const Testimonial = () => {
  const test = [
    {
      name: "Ferdinand Ekpo, Overwatch",
      testimonial:
        "Precious Affiah is a highly skilled Backend Node.js Developer with a proven track record of delivering high-quality solutions. her ability to quickly understand and translate complex requirements into efficient code sets her apart. A collaborative team player, Precious Affiah contributes valuable insights and ensures project deadlines are met. I strongly recommend Precious Affiah.",
    },
    {
      name: "Emmanuel Eyo, Iko Africa",
      testimonial:
        "Precious is an absolute pleasure to work with! She played a pivotal role in helping us build the Iko Africa web app in record time, delivering an amazing, responsive, and user-friendly platform. Truly a rockstar!"    },
    {
      name: "Jonathan Felicity, Lorgarithm",
      testimonial:
        "I had the pleasure of working with Precious, an exceptional Software Engineer, on several projects. Her technical expertise, problem-solving skills, and dedication to excellence consistently impressed me. I highly recommend Precious for any software engineering role. Her combination of technical skills, professionalism, and teamwork makes her an invaluable asset to any team.",
    },
  ];
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
        {test.map((item) => (
          <SwiperSlide>
            <div>
              <p className="text-base italics pb-2">"{item.testimonial}"</p>
              <div className="flex items-center justify-center gap-x-2">
                <h2 className="text-white text-base">~ {item.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
