"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const slogans = [
    "Empowering Youth. Transforming Communities.",
    "Building a Better Tomorrow Together.",
    "Serving the People. Leading with Purpose.",
    "Creating Opportunities. Driving Change."
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [slogans.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className={`absolute top-20 left-10 w-72 h-72 bg-[#fa6c38] rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-x-0 translate-y-0 opacity-5' : '-translate-x-20 -translate-y-20 opacity-0'
          }`}
        ></div>
        <div 
          className={`absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl transition-all duration-1200 ease-out ${
            isLoaded ? 'translate-x-0 translate-y-0 opacity-5' : 'translate-x-20 translate-y-20 opacity-0'
          }`}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[80vh]">
          {/* Hero Image */}
          <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative group w-full max-w-md lg:max-w-lg cursor-pointer">
              {/* Subtle professional glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#fa6c38]/20 to-orange-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Clean professional card design */}
              <div className={`relative bg-white rounded-lg p-2 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                isLoaded ? 'scale-100' : 'scale-95'
              }`}>
                <Image 
                  src="/Hero_img.jpeg" 
                  alt="KTS Kavin - BJP Youth Leader" 
                  width={450} 
                  height={550} 
                  className="rounded-lg object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                
                {/* Hover Overlay with Details */}
                <div className="absolute inset-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">KTS Kavin</h3>
                    <p className="text-sm text-gray-200 mb-3">BJP Youth Wing Leader & Social Activist</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        <span>6+ Years in Public Service</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>5000+ Lives Impacted</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span>100+ Community Events</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        <span>Blood Donation Champion</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link href="/about">
                        <button className="bg-[#fa6c38] hover:bg-[#e85a2b] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                          Learn More
                        </button>
                      </Link>
                      <Link href="/contact">
                        <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 backdrop-blur-sm">
                          Contact
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
                
              {/* Professional badges */}
              <div className={`absolute -top-3 -left-3 bg-[#fa6c38] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg z-10 transition-all duration-700 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}>
                BJP Leader
              </div>
              
              <div className={`absolute -bottom-3 -right-3 bg-white text-[#fa6c38] px-4 py-2 rounded-lg font-semibold text-sm shadow-lg border border-orange-200 z-10 transition-all duration-900 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                Since 2019
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className={`lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8 transition-all duration-1200 ease-out ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="space-y-4">
              <div className={`inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                🚀 Bharatiya Janata Party Youth Wing Leader
              </div>
              
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight transition-all duration-700 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                KTS <span className="text-[#fa6c38] relative">
                  Kavin
                  <div className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#fa6c38] to-orange-500 rounded-full transition-all duration-1000 ease-out ${
                    isLoaded ? 'scale-x-100' : 'scale-x-0'
                  }`}></div>
                </span>
              </h1>
              
              <div className={`h-14 lg:h-16 flex items-center justify-center lg:justify-start transition-all duration-900 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 font-medium leading-relaxed transition-all duration-500 ease-in-out">
                  {slogans[currentSlogan]}
                </p>
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Leading with <span className="font-semibold text-[#fa6c38]">dedication</span> and <span className="font-semibold text-[#fa6c38]">integrity</span>, 
                committed to education, entrepreneurship, and governance reforms across Tamil Nadu. 
                <span className="block mt-2 font-medium">
                  From Perundurai to the entire state - building bridges between aspiration and achievement.
                </span>
              </p>
            </div>
            
            {/* Call to Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1200 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <Link href="/get-involved">
                <Button size="lg" className="bg-gradient-to-r from-[#fa6c38] to-[#e85a2b] hover:from-[#e85a2b] hover:to-[#d64e1f] text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                  🤝 Join Our Mission
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-2 border-[#fa6c38] text-[#fa6c38] hover:bg-[#fa6c38] hover:text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                  📖 My Journey
                </Button>
              </Link>
            </div>

            {/* Professional Stats */}
            <div className="mt-8 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className={`bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: isLoaded ? '400ms' : '0ms' }}>
                <div className="text-2xl lg:text-3xl font-bold text-[#fa6c38] mb-2">6+</div>
                <div className="text-sm text-gray-600 font-medium">Years of Service</div>
              </div>
              
              <div className={`bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: isLoaded ? '600ms' : '0ms' }}>
                <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-sm text-gray-600 font-medium">Community Events</div>
              </div>
              
              <div className={`bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: isLoaded ? '800ms' : '0ms' }}>
                <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">5000+</div>
                <div className="text-sm text-gray-600 font-medium">Lives Impacted</div>
              </div>
              
              <div className={`bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: isLoaded ? '1000ms' : '0ms' }}>
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-600 font-medium">Constituencies</div>
              </div>
            </div>

            {/* Professional Key Highlights */}
            <div className={`mt-6 lg:mt-8 flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: isLoaded ? '1200ms' : '0ms' }}>
              <span className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-200 hover:scale-105 transition-all duration-200">
                🎓 BBA Graduate
              </span>
              
              <span className="bg-red-100 text-red-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-200 hover:scale-105 transition-all duration-200">
                🩸 Blood Donation Advocate
              </span>
              
              <span className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-200 hover:scale-105 transition-all duration-200">
                🌱 Environmental Champion
              </span>
              
              <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 hover:scale-105 transition-all duration-200">
                👥 Youth Mentor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
