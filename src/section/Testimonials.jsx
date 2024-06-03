import { useEffect, useState, useRef } from 'react'
import {testimonials} from '../constants'
import ChevronLeft from '../assets/icons/ChevronLeft'
import ChevronRight from '../assets/icons/ChevronRight'
import { useSwipeable } from 'react-swipeable'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const dots = [1, 2, 3] //numbers of indicators for carousel
  const intervalRef = useRef(null)

  // STOP INTERVAL WHEN BUTTON IS CLICKED
  const stopInterval = () => {
    if (intervalRef.current){
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 
      ? testimonials.length - 1 : prevIndex - 1))
    stopInterval()
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
    stopInterval();
  }

  const handleDots = (index) => {
    setCurrentIndex(index)
    stopInterval();
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1)% testimonials.length)
    },4000)
    intervalRef.current = interval

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      {...swipeHandlers}
      className="relative w-full max-container pt-14"
    >
      <h1 className="font-fontF text-4xl text-center max-md:text-3xl">
        Testimonials
      </h1>

      {/* TESTIMONIALS CARD */}
      <div className="overflow-hidden pt-5">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full pt-6">
              <div className="flex flex-col items-center rounded-lg">
                <p className="text-subtextColor text-center font-fontF text-lg max-md:text-md mb-4 2xl:px-[20%] lg:px-[15%]">
                  {testimonial.label}
                </p>
                <img
                  src={testimonial.imgURL}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover mt-10"
                />
                <h3 className="text-sm text-black/70 font-fontF font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-subtextColor pt-1">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHEVRON BUTTONS */}
      <div className="max-md:hidden">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 bg-pcColor p-4 rounded-full hover:bg-primary group transition-all duration-500"
        >
          <ChevronLeft className="w-6 h-6 group-hover:text-white transition-colors duration-200" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 bg-pcColor p-4 rounded-full hover:bg-primary group transition-all duration-500"
        >
          <ChevronRight className="w-6 h-6 group-hover:text-white transition-colors duration-200" />
        </button>
      </div>

      {/* DOTS CARD POSITION */}
      <div className="flex absolute left-1/2 -bottom-16 -translate-x-1/2 gap-1">
        {dots.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDots(index)}
            className={`text-6xl font-medium  hover:text-primary
              ${
                currentIndex === index ? "text-primary" : "text-black/20"
              }            
            `}
          >
            .
          </button>
        ))}
      </div>
    </div>
  );
}

export default Testimonials