import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center my-8 py-4 px-4 border border-[#EEEEEE] rounded-xl bg-white w-full max-w-xl mx-auto"
    >
      <p className="text-lg font-semibold text-slate-800 mb-4">
        <span className="font-bold text-slate-900">Launch-Angebot</span> endet in:
      </p>
      <div className="flex justify-center gap-4 md:gap-8">
        <div className="flex flex-col items-center">
          <motion.div 
            key={`days-${timeLeft.days}`}
            initial={{ opacity: 0.8, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-slate-800 min-w-[3rem]"
          >
            {timeLeft.days}
          </motion.div>
          <span className="text-sm font-medium mt-1 text-slate-600">Tage</span>
        </div>
        <div className="flex flex-col items-center">
          <motion.div 
            key={`hours-${timeLeft.hours}`}
            initial={{ opacity: 0.8, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-slate-800 min-w-[3rem]"
          >
            {timeLeft.hours}
          </motion.div>
          <span className="text-sm font-medium mt-1 text-slate-600">Stunden</span>
        </div>
        <div className="flex flex-col items-center">
          <motion.div 
            key={`minutes-${timeLeft.minutes}`}
            initial={{ opacity: 0.8, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-slate-800 min-w-[3rem]"
          >
            {timeLeft.minutes}
          </motion.div>
          <span className="text-sm font-medium mt-1 text-slate-600">Minuten</span>
        </div>
        <div className="flex flex-col items-center">
          <motion.div 
            key={`seconds-${timeLeft.seconds}`}
            initial={{ opacity: 0.8, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-slate-800 min-w-[3rem]"
          >
            {timeLeft.seconds}
          </motion.div>
          <span className="text-sm font-medium mt-1 text-slate-600">Sekunden</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
