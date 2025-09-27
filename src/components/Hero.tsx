"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  
  const slogans = [
    "Empowering Youth. Transforming Communities.",
    "Building a Better Tomorrow Together.",
    "Serving the People. Leading with Purpose.",
    "Creating Opportunities. Driving Change."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slogans.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#f78614] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[80vh]">
          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center px-4 sm:px-0">
            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-lg cursor-pointer">
              {/* Subtle professional glow */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#f78614]/20 to-orange-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Clean professional card design */}
              <div className="relative bg-white rounded-lg p-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <Image 
                  src="/Hero_img.JPG" 
                  alt="KTS Kavin - BJP State Secretary Youth Wing Tamil Nadu" 
                  width={450} 
                  height={550} 
                  className="rounded-lg object-cover w-full h-auto"
                  priority
                />
                
                {/* Hover Overlay with Details */}
                <div className="absolute inset-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">KTS Kavin</h3>
                    <p className="text-sm text-gray-200 mb-3">BJP State Secretary Youth Wing Tamil Nadu & Social Activist</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        <span>6+ Years in Public Service</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>5 Hospital Tie-ups</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span>6+ Blood Camps</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        <span>300+ Units Blood Collected</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link href="/about">
                        <button className="bg-[#f78614] hover:bg-[#e85a2b] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200">
                          Learn More
                        </button>
                      </Link>
                      <Link href="/contact">
                        <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 backdrop-blur-sm">
                          Contact
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
                
              {/* Professional badges */}
              <div className="absolute top-2 left-2 sm:-top-3 sm:-left-3 bg-[#f78614] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-lg z-10">
                State Secretary
              </div>
              
              <div className="absolute bottom-2 right-2 sm:-bottom-3 sm:-right-3 bg-white text-[#f78614] px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-lg border border-orange-200 z-10">
                Since 2019
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🚀 BJP State Secretary Youth Wing Tamil Nadu
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight">
                KTS <span className="text-[#f78614] relative">
                  Kavin
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#f78614] to-orange-500 rounded-full"></div>
                </span>
              </h1>
              
              <div className="h-14 lg:h-16 flex items-center justify-center lg:justify-start">
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 font-medium leading-relaxed transition-all duration-500 ease-in-out">
                  {slogans[currentSlogan]}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Leading with <span className="font-semibold text-[#f78614]">dedication</span> and <span className="font-semibold text-[#f78614]">integrity</span>, 
                committed to education, entrepreneurship, and governance reforms across Tamil Nadu. 
                <span className="block mt-2 font-medium">
                  From Perundurai to the entire state - building bridges between aspiration and achievement.
                </span>
              </p>
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/get-involved">
                <Button size="lg" className="bg-gradient-to-r from-[#f78614] to-[#e85a2b] hover:from-[#e85a2b] hover:to-[#d64e1f] text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                  🤝 Join Our Mission
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-2 border-[#f78614] text-[#f78614] hover:bg-[#f78614] hover:text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                  📖 My Journey
                </Button>
              </Link>
            </div>

            {/* Professional Stats */}
            <div className="mt-8 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105">
                <div className="text-2xl lg:text-3xl font-bold text-[#f78614] mb-2">6+</div>
                <div className="text-sm text-gray-600 font-medium">Years of Service</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105">
                <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">6+</div>
                <div className="text-sm text-gray-600 font-medium">Blood Camps</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">5</div>
                <div className="text-sm text-gray-600 font-medium">Hospital Tie-ups</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-600 font-medium">Constituencies</div>
              </div>
            </div>

            {/* Professional Key Highlights */}
            <div className="mt-6 lg:mt-8 flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
              <span className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-200 hover:scale-105 transition-all duration-200">
                🎓 BBA Graduate
              </span>
              
              <span className="bg-red-100 text-red-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-200 hover:scale-105 transition-all duration-200">
                🩸 300+ Blood Units Collected
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
