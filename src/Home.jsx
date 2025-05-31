import Nav from "./component/Nav";
import Footer from "./component/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="">
        <header className="grid md:grid-cols-2 md:p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:justify-center">
          <div>
            <img
              src="./images/std.jpg"
              className="rounded-full animate__animated animate__pulse animate__infinite border-2 border-white shadow-lg"
              style={{
                height: "300px",
                width: "300px",
              }}
            />
          </div>
          <div className="flex flex-col gap-6 md:justify-center">
            <h1 className="text-6xl font-bold text-white mb-4">"Say Hello !</h1>
            <p className="text-2xl font-semibold">
              Enjoy Complete digilat Learning Courses with CodeSchool by Coding
              Ott
            </p>
            <div className="flex gap-4">
              <button className="bg-[#100d22] text-white px-12 py-3 rounded-lg shadow-lg text-lg hover:bg-orange-500 transition duration-300 ease-in-out font-semibold">
                Learn More
              </button>
              <button className="border-2 border-[#100d22] text-[#100d22] px-12 py-3 rounded-lg shadow-lg text-lg font-semibold">
                Watch Now
              </button>
            </div>
          </div>
        </header>
        <div className="p-24">
          <h1 className="text-center text-4xl font-bold">
            Benifits & Advantages
          </h1>
          <p class="text-gray-600 text-center mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            doloremque distinctio voluptatum soluta exercitationem ducimus
            labore fuga dignissimos, minima magni?
          </p>
          <div>
            <div className="w-12/12 mx-auto mt-12 grid grid-cols-3 gap-6">
              <div className="shadow-lg rounded-md p-4 border border-1 border-gray-300 text-center">
                <i class="ri-artboard-line text-6xl"></i>
                <h1 className="text-2xl font-semibold text-center mb-2">
                  Great Faculty
                </h1>
                <p className="text-gray-600 text-center mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="shadow-lg rounded-md p-4 border border-1 border-gray-300 text-center">
                <i class="ri-edit-box-line text-6xl"></i>
                <h1 className="text-2xl font-semibold text-center mb-2">
                  Latest Curiculum
                </h1>
                <p className="text-gray-600 text-center mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="shadow-lg rounded-md p-4 border border-1 border-gray-300 text-center">
                <i class="ri-tree-line text-6xl"></i>
                <h1 className="text-2xl font-semibold text-center mb-2">
                  Green Environment
                </h1>
                <p className="text-gray-600 text-center mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:justify-center">
          <h1 className="text-4xl text-center font-bold">Campus Portfolio</h1>
          <p className="text-white text-center mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id
            earum assumenda veniam magnam quae corporis necessitatibus debitis
            ratione magni.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-6 p-12">
            <div className="w-full h-96 overflow-hidden">
              <Swiper className="mySwiper w-8/12">
                <SwiperSlide>
                  <img src="./images/slider-1.jpg" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/slider-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/slider-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/slider-4.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              {" "}
              <h1 className="text-6xl font-bold text-white mb-4">
                "Say Hello !
              </h1>
              <p className="text-2xl font-semibold">
                Enjoy Complete digilat Learning Courses with CodeSchool by
                Coding Ott
              </p>
              <div className="flex gap-4">
                <button className="bg-[#100d22] text-white px-12 py-3 rounded-lg shadow-lg text-lg hover:bg-orange-500 transition duration-300 ease-in-out font-semibold">
                  Learn More
                </button>
                <button className="border-2 border-[#100d22] text-[#100d22] px-12 py-3 rounded-lg shadow-lg text-lg font-semibold">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
