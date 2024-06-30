import React, { useState, useRef, useEffect } from 'react';
import SkillCard from './SkillCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import 'swiper/css';
import "swiper/css/free-mode";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";


const SkillContainer = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPagination, setShowPagination] = useState(false);
  const swiperRef = useRef(null);

  const checkPaginationVisibility = () => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;
    const { slidesPerView } = swiperInstance.params;
    const totalSlides = skills.length;

    if (typeof slidesPerView === 'number') {
      setShowPagination(totalSlides > slidesPerView);
    } else {
      const activeBreakpoint = Object.keys(slidesPerView)
        .map((bp) => parseInt(bp, 10))
        .sort((a, b) => b - a)
        .find((bp) => window.innerWidth >= bp);

      setShowPagination(totalSlides > slidesPerView[activeBreakpoint]);
    }
  };

  useEffect(() => {
    checkPaginationVisibility();
    window.addEventListener('resize', checkPaginationVisibility);

    return () => {
      window.removeEventListener('resize', checkPaginationVisibility);
    };
  }, [skills]);

  const handlePrev = () => {
    if (swiperRef.current && currentIndex > 0) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && currentIndex < skills.length - 1) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const isLastSlideVisible = () => {
    if (!swiperRef.current) return false;
    const swiperInstance = swiperRef.current.swiper;
    return currentIndex >= skills.length - swiperInstance.params.slidesPerView;
  };

  return (
    <div className="relative w-full">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          481: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          781: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1001: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1201: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        loop={false}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full h-[388px] mt-5"
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        onInit={checkPaginationVisibility}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <SkillCard skill={skill} />
          </SwiperSlide>
        ))}
      </Swiper>

      {showPagination && currentIndex > 0 && (
        <button
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handlePrev}
        >
          <IoIosArrowDropleft size={30} />
        </button>
      )}

      {showPagination && !isLastSlideVisible() && (
        <button
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10"
          onClick={handleNext}
        >
          <IoIosArrowDropright size={30} />
        </button>
      )}
    </div>
  );
};

export default SkillContainer;
