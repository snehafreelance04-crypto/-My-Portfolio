"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

interface ReviewProps {
  videoPath?: string;
}

interface Review {
  text: string;
  author: string;
  rating: number;
  featured?: boolean;
}

export default function Reviews({ videoPath = "/atharv-sir-review.mp4" }: ReviewProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const reviews: Review[] = [
    {
      text: "Sneha Sharma was great to work with. I gave him a challenging brief and supplied some code that was difficult to work with. His communication was great and we worked well together to get the new apps upgraded and published on the app stores. I will definitely be using Sneha Sharma for future app work. Highly recommended!",
      author: "Client",
      rating: 5,
    },
    {
      text: "Fantastic work, done quickly and communicates effectively as well as promptly. Definitely would hire again!",
      author: "Client",
      rating: 5,
    },
    {
      text: "He is really good and understanding and adjustable person. He will be able to complete the task on time even if any of the components are not known by him. He learns and completes the project on time.",
      author: "Client",
      rating: 5,
    },
    {
      text: "Sneha Sharma is very responsive and quick to adjust. He is someone who initiates by himself. I respected his work and the level of quality he provides.",
      author: "Client",
      rating: 5,
    },
    {
      text: "I hired Sneha Sharma for extracting e-commerce products from many e-commerce websites which used proxies, and he did a great job. He is a great communicator, a great guy!!",
      author: "Client",
      rating: 5,
    },
    {
      text: "Excellent work, very satisfied with the quality and effort provided.",
      author: "Client",
      rating: 5,
    },
    {
      text: "Sneha Sharma is very good hands on coding with both frontend and backend. He is quick with understanding and also delivering code. I will definitely use him again with my other work and I recommend him for any of your work.",
      author: "Client",
      rating: 5,
    },
    {
      text: "Sneha Sharma is awesome. Really talented, really nice to work with. Looking forward to working with him again.",
      author: "Client",
      rating: 5,
    },
    {
      text: "I had an incredible experience working with you, Sneha Sharma! You delivered a fantastic Android app in React Native with such hard work and precision. The app works flawlessly and looks amazing, exactly as envisioned. I really appreciate how you stayed on top of everything and completed the project on time. Your dedication and responsiveness made the process smooth and enjoyable. Highly recommend your skills!",
      author: "Featured Client",
      rating: 5,
      featured: true,
    },
  ];

  // Auto-rotate reviews
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && inView) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, inView, reviews.length]);

  // Auto-play/pause video based on visibility
  useEffect(() => {
    if (videoRef.current && inView) {
      videoRef.current.play().catch((error: Error) => {
        // Handle autoplay restrictions gracefully
        console.log("Video autoplay prevented:", error);
      });
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [inView]);

  const nextReview = (): void => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = (): void => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number): void => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <motion.section
      ref={ref}
      id="testimonials"
      className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Client Testimonials</SectionHeading>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Video Column */}
          <motion.div
  className="w-full aspect-[9/10] rounded-xl overflow-hidden shadow-lg relative bg-black"
  initial={{ opacity: 0, x: -50 }}
  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <video 
    ref={videoRef}
    className="w-full h-full object-cover"
    controls
    preload="metadata"
  >
    <source src={videoPath} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>

          
          {/* Reviews Column */}
          <div className="relative h-80 md:h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full flex flex-col justify-between">
                  <div>
                    <FaQuoteLeft className="text-blue-500 text-opacity-30 text-4xl mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      {reviews[currentIndex].text}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {reviews[currentIndex].author}
                      </p>
                      <div className="flex items-center mt-1">
                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-500 text-sm" />
                        ))}
                      </div>
                    </div>
                    <FaQuoteRight className="text-blue-500 text-opacity-30 text-2xl" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Controls */}
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-2 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-blue-600 w-6"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg z-10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Previous review"
            >
              <BsArrowLeftCircle size={28} />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg z-10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Next review"
            >
              <BsArrowRightCircle size={28} />
            </button>
          </div>
        </div>
        
        {/* Featured Reviews Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Featured Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.filter(review => review.featured || Math.random() > 0.6).slice(0, 3).map((review, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300">
                      {review.author.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{review.author}</span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-sm" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-5">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}