import React, { useState, useEffect } from "react";

const WebinarPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date("2025-02-22T14:00:00-05:00");
      const now = new Date();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    const timer = setInterval(calculateTime, 1000);
    calculateTime();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ClipLabs
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-medium mb-2">
            The Newest Side Hustle 2025
          </div>

          <div className="inline-block px-4 py-2 bg-purple-100 rounded-lg mb-4 mt-2">
            <span className="text-purple-600 font-semibold">🚀 Official Launch Event</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            The Fast & Easy Way To Make 10k/Month From Home
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-semibold text-gray-800">
            (Getting Paid From Famous Influencers And Brands)
          </p>

          <a
            href="https://event.webinarjam.com/register/3/wwvkka7"
            className="inline-block px-16 py-6 text-3xl font-bold text-white rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_40px_rgba(147,51,234,0.6)] hover:shadow-[0_0_60px_rgba(147,51,234,0.8)] transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none border-2 border-white/20"
          >
            Register
          </a>

          <div className="mt-2 text-sm text-gray-600">
            Secure your free seat above and avoid missing out
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarPage;
