import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HomeSlider() {
  return (
    <div className="w-full mt-0">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        className="w-full overflow-hidden"
      >

        {/* Slide 1 */}
        <SwiperSlide>
        <div className="relative w-full h-[350px] md:h-[420px]">

            {/* Background Image */}
            <img
            src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
            className="w-full h-full object-cover"
            />

            {/* Content (overlay text WITHOUT fade) */}
            <div className="absolute inset-0 flex items-center px-10">

            <div className="text-black">

                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Starting ₹199
                </h2>

                <p className="mb-6">
                Discover everyday fashion at unbeatable prices
                </p>

                <button className="bg-black text-white px-6 py-2 rounded-full">
                Shop Now
                </button>

            </div>

            </div>

        </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
        <div className="relative w-full h-[350px] md:h-[420px]">

            {/* Background Image */}
            <img
            src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg"
            className="w-full h-full object-cover"
            />

            {/* Content (overlay text WITHOUT fade) */}
            <div className="absolute inset-0 flex items-center px-10">

            <div className="text-black">

                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Starting ₹199
                </h2>

                <p className="mb-6">
                Discover everyday fashion at unbeatable prices
                </p>

                <button className="bg-black text-white px-6 py-2 rounded-full">
                Shop Now
                </button>

            </div>

            </div>

        </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
        <div className="relative w-full h-[350px] md:h-[420px]">

            {/* Background Image */}
            <img
            src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg"
            className="w-full h-full object-cover"
            />

            {/* Content (overlay text WITHOUT fade) */}
            <div className="absolute inset-0 flex items-center px-10">

            <div className="text-black">

                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Starting ₹199
                </h2>

                <p className="mb-6">
                Discover everyday fashion at unbeatable prices
                </p>

                <button className="bg-black text-white px-6 py-2 rounded-full">
                Shop Now
                </button>

            </div>

            </div>

        </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
}

export default HomeSlider;