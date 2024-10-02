"use client";

"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
const images = [
  { src: "/carousel_images/1.jpg", alt: "Image 1" },
  { src: "/carousel_images/2.jpg", alt: "Image 2" },
  { src: "/carousel_images/3.jpg", alt: "Image 3" },
  { src: "/carousel_images/4.jpg", alt: "Image 4" },
  { src: "/carousel_images/5.jpg", alt: "Image 5" },
  { src: "/carousel_images/6.jpg", alt: "Image 6" },

//   { src: "/4.jpg", alt: "Image 4" },
];

export default function HomePageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4"> {/* Outer container with margin and padding */}
      <div className="relative w-full h-96 overflow-hidden">
        {/* Images container */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-96 relative  flex justify-center items-center">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
          >
            &#10095;
          </button>
        </div>

        {/* Dots for navigation */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}




// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// const images = [
//   { src: "/1.jpg", alt: "Image 1" },
//   { src: "/2.jpg", alt: "Image 2" },
//   { src: "/3.jpg", alt: "Image 3" },
//   { src: "/4.jpg", alt: "Image 4" },
// ];

// export default function HomePageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-96 overflow-hidden px-4">
//       {/* Images container */}
//       <div
//         className="flex transition-transform duration-500"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="min-w-full h-96 relative mx-2 flex justify-center items-center"> {/* Center the image */}
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               className="object-cover rounded-lg"
//               style={{ objectFit: 'cover' }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation buttons */}
//       <div className="absolute inset-0 flex justify-between items-center px-4">
//         <button
//           onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
//           className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
//         >
//           &#10094;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
//         >
//           &#10095;
//         </button>
//       </div>

//       {/* Dots for navigation */}
//       <div className="absolute bottom-4 w-full flex justify-center space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
