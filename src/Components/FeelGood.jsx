import { BsFillMusicPlayerFill } from "react-icons/bs";

import { Carousel } from "flowbite-react";
import Tips from "./Tips";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const FeelGood = () => {

  const quotes = [
    {
      author: "Carl Jung",
      quote: "I am not what happened to me, I am what I choose to become."
    },
    {
      author: "Maya Angelou",
      quote: "We may encounter many defeats, but we must not be defeated."
    },
    {
      author: "Sigmund Freud",
      quote: "Being entirely honest with oneself is a good exercise."
    },
    {
      author: "Brene Brown",
      quote: "Courage starts with showing up and letting ourselves be seen."
    },
    {
      author: "Viktor Frankl",
      quote: "When we are no longer able to change a situation, we are challenged to change ourselves."
    }
  ];

  const [tracks, setTracks] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // Fetch tracks
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/music');
        setTracks(data);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };
    fetchTracks();
  }, []);

  // Handle track change
  const changeTrack = (newIndex) => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setActiveIndex(newIndex);
    setProgress(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  // Carousel controls
  const handleNext = () => changeTrack((activeIndex + 1) % tracks.length);
  const handlePrev = () => changeTrack((activeIndex - 1 + tracks.length) % tracks.length);

  // Audio controls
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Progress handling
  const handleTimeUpdate = () => {
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  const handleProgressClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = offsetX / rect.width;
    audioRef.current.currentTime = percentage * audioRef.current.duration;
  };


  return (
    <div className="pt-10">
      <div className="flex justify-between">
        <div className="flex-1 text-center tracking-wide leading-snug text-4xl font-libre text-gray-700 md:text-4xl md:leading-normal lg:text-5xl lg:leading-normal">Feel Good</div>
        <div className="text-right my-auto pe-5">
          <Tips />
        </div>
      </div>

      <div className="p-7">
        <p className="text-center leading-tight font-normal text-base md:text-lg md:leading-snug md:text-justify">

          <p className='pb-3'>Take a moment to breathe and reconnect with yourself. Here, you’ll find soothing melodies, simple yet powerful mental health tips, and thought-provoking quotes that can help shift your perspective and bring calm to your day.
          </p>
          <p> It’s a space to pause, reflect, and nurture your inner peace, offering gentle reminders that small acts of self-care can lead to big changes in how we feel. Whether you're seeking comfort, inspiration, or a gentle nudge to keep going, this is your space to unwind and replenish your energy.
          </p>
        </p>
      </div>




      <div className="relative h-64 sm:h-80 xl:h-96 p-5 bg-gradient-to-r from-[#ede6d7] via-[#BAC3A4] to-[#AAB396] rounded-3xl shadow-lg">
        <Carousel slideInterval={3000} pauseOnHover>
          {quotes.map((quote, index) => (
            <div key={index} className="flex justify-center items-center h-full text-center px-4">
              <div className="max-w-3xl mx-auto">
                <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif italic text-[#4A4A4A]">
                  "{quote.quote}"
                </p>
                <p className="mt-6 text-lg sm:text-xl md:text-2xl font-calligraphy text-[#6A6A6A] opacity-90">
                  - {quote.author}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>




      {/* <div className="justify-start ps-5">
                    <BsFillMusicPlayerFill className="h-10 w-10 fill-prim" />

                </div>
                <div className="flex w-full justify-evenly ">

                    <FaPlayCircle className="h-10 w-10 fill-prim" />
                    <FaPlayCircle className="h-10 w-10 fill-prim" />
                    <FaPlayCircle className="h-10 w-10 fill-prim" />
                    <FaPlayCircle className="h-10 w-10 fill-prim" />
                    <FaPlayCircle className="h-10 w-10 fill-prim" />
                    <FaPlayCircle className="h-10 w-10 fill-prim" />


                </div> */}


<div className="w-full py-8 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
  
    <h2 className="font-libre text-gray-700 text-2xl md:text-3xl lg:text-4xl text-center md:whitespace-nowrap">
      Music: The Universal{" "}
      <span className="md:hidden">Language</span>
      <span className="hidden md:inline">Language</span> of Mankind
    </h2>
    
    {/* Animated Icon */}
    <motion.div 
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex-shrink-0"
    >
      <BsFillMusicPlayerFill className="h-10 w-10 md:h-12 md:w-12 fill-prim transition-transform hover:scale-110" />
    </motion.div>
  </div>
  

  <div className="hidden md:block mt-4 max-w-4xl mx-auto border-t border-prim/20"></div>
</div>




      <div className=" bg-bgcolor flex items-center justify-center p-4">
     
        <div className="relative max-w-md w-full space-y-6">
          {/* Main Disc Container */}
          <div className="relative mx-auto w-64 h-64">
            {/* Animated Gradient Disc */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-prim/40 via-sec/30 to-bgcolor/20 backdrop-blur-lg shadow-xl"
              animate={{
                rotate: isPlaying ? 360 : 0,
                scale: isPlaying ? 1.05 : 1
              }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.3 }
              }}
            >
             
              <div className="absolute inset-4 overflow-hidden rounded-full">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full rounded-full"
                  >
                    {/* <img
                    src={tracks[activeIndex]?.thumbnail}
                    alt="album art"
                    className="w-full h-full object-cover"
                  /> */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-prim/45 via-sec/5 to-prim/45 animate-spin-slow" />

                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Center Control with Earthy Tones */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-prim flex items-center justify-center shadow-lg hover:bg-sec/90 transition-all"
              >
                {isPlaying ? (
                  <FiPause className="text-bgcolor w-6 h-6" />
                ) : (
                  <FiPlay className="text-bgcolor w-6 h-6 pl-1" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center px-4">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              className="text-prim hover:text-sec/80"
            >
              <FiChevronLeft size={32} />
            </motion.button>

            {/* Track Info with Natural Gradient */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center flex-1 mx-4"
              >
                <h2 className="text-xl font-medium bg-gradient-to-r from-prim to-sec bg-clip-text text-transparent truncate">
                  {tracks[activeIndex]?.title}
                </h2>
                <p className="text-sec text-sm truncate mt-1">
                  {tracks[activeIndex]?.artist}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              className="text-prim hover:text-sec/80"
            >
              <FiChevronRight size={32} />
            </motion.button>
          </div>

          {/* Earthy Progress Bar */}
          <div className="px-6">
            <motion.div
              className="h-2.5 bg-sec/20 rounded-full cursor-pointer relative group"
              onClick={handleProgressClick}
            >
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-prim to-sec rounded-full relative"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute right-0 -top-1 w-3 h-3 bg-prim rounded-full shadow-sm transform translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>
            </motion.div>

            <div className="flex justify-between text-sm text-sec mt-2">
              <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
              <span>{formatTime(audioRef.current?.duration || 0)}</span>
            </div>
          </div>

         
          {tracks[activeIndex] && (
            <audio
              ref={audioRef}
              src={tracks[activeIndex].mediaUrl}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />
          )}
        </div>
      </div>







    </div>





  )
}
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};
export default FeelGood