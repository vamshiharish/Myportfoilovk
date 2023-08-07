import React,{useState,useEffect} from "react";

import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

// D:\My certificates\MyPortfolioVk\myportfoilovk\src\assets\certificates\devfoundation.PNG D:\My certificates\MyPortfolioVk\myportfoilovk\src\assets\certificates\devfoundation.png


const images=[
  {
      id:1,
      imgUrl:"https://res.cloudinary.com/dpgviap9s/image/upload/v1691393290/javscript_xzjeln.png"
  },
  {
      id:2,
      imgUrl:"https://res.cloudinary.com/dpgviap9s/image/upload/v1691393266/devfoundation_h1ujvy.png"
  },
  {
      id:3,
      imgUrl:"https://res.cloudinary.com/dpgviap9s/image/upload/v1691393279/dynamic_hmfaxg.png"
  },
  {
      id:4,
      imgUrl:"https://res.cloudinary.com/dpgviap9s/image/upload/v1691393326/responsiveweb_yadazt.png"
  },
  {
      id:5,
      imgUrl:"https://res.cloudinary.com/dpgviap9s/image/upload/v1691393413/staticweb_k8cmnq.png"
  },
  {
      id:6,
      imgUrl:"https://res.cloudinary.com/dpgviap9s/image/upload/v1691393318/python_iprar3.png"
  },
  {
      id:7,
      imgUrl:"https://res.cloudinary.com/dpgviap9s/image/upload/v1691393266/devfoundation_h1ujvy.png"
  },
  {
      id:8,
      imgUrl: "https://res.cloudinary.com/dpgviap9s/image/upload/v1691393305/nodejs_vxuhps.png"
  },
  {
      id:9,
      imgUrl:"https://res.cloudinary.com/dpgviap9s/image/upload/v1691393336/sql_yt4nvm.png"
  }
]

const Certifications =()=>{

    // const totalSlides=images.length


        const [currentIndex, setCurrentIndex] = useState(0);
      
        const previousSlide = () => {
          const lastIndex = images.length - 1;
          const shouldResetIndex = currentIndex === 0;
          const index = shouldResetIndex ? lastIndex : currentIndex - 1;
          setCurrentIndex(index);
        };
      
        const nextSlide = () => {
          const lastIndex = images.length - 1;
          const shouldResetIndex = currentIndex === lastIndex;
          const index = shouldResetIndex ? 0 : currentIndex + 1;
          setCurrentIndex(index);
        };

        useEffect(() => {
            const interval = setInterval(() => {
              setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              );
            }, 3000); // Change slide every 3 seconds
            console.log(interval)
            return () => {
              clearInterval(interval); // Cleanup the interval on component unmount
            };
          },);
          // [images.length]
        return (
          <section id="Certifications">
            <div className="container mx-auto h-fit md:h-screen w-full m-auto  bg-gradient-to-b  from-gray-800 to-black text-white" name="certifications">
                
                <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white text-center">
                    <div>
                        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Certifications</p>
                        <p className="py-6">These are the my Certifications</p>
                    </div>
                    <div className="hidden  md:relative md:flex justify-center items-center">
                    <img
                      className="h-fit  object-cover flex justify-center items-center w-[50%]"
                      src={images[currentIndex].imgUrl}
                      alt="Slider"
                      
                    />
                    <button
                      className="md:absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 rounded-full text-white hidden md:block"
                      onClick={previousSlide}
                    >
                      <BsChevronCompactLeft/>
                    </button>
                    <button
                      className="ml-20 md:absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 rounded-full text-white hidden md:block"
                      onClick={nextSlide}
                    >
                      <BsChevronCompactRight/>
                    </button>
                </div>
                <div className="flex justify-center items-center md:hidden ">
                    <img
                      className="h-fit  object-cover flex justify-center items-center w-[50%]"
                      src={images[currentIndex].imgUrl}
                      alt="Slider"
                    />
                    </div>
                </div>
                
          </div>
        </section>
        );
        

}

export default Certifications