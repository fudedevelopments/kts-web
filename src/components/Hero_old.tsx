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
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#fa6c38] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[80vh]">
          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group w-full max-w-md lg:max-w-lg">
              {/* Subtle professional glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#fa6c38]/20 to-orange-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Clean professional card design */}
              <div className="relative bg-white rounded-lg p-2 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src="/Hero_img.jpeg" 
                  alt="KTS Kavin - BJP Youth Leader" 
                  width={450} 
                  height={550} 
                  className="rounded-lg object-cover w-full h-auto"
                  priority
                />
              </div>
                
              {/* Professional badges */}
              <div className="absolute -top-3 -left-3 bg-[#fa6c38] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                BJP Leader
              </div>
              
              <div className="absolute -bottom-3 -right-3 bg-white text-[#fa6c38] px-4 py-2 rounded-lg font-semibold text-sm shadow-lg border border-orange-200">
                Since 2019
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🚀 Bharatiya Janata Party Youth Wing Leader
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight">
                KTS <span className="text-[#fa6c38] relative">
                  Kavin
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#fa6c38] to-orange-500 rounded-full"></div>
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
                Leading with <span className="font-semibold text-[#fa6c38]">dedication</span> and <span className="font-semibold text-[#fa6c38]">integrity</span>, 
                committed to education, entrepreneurship, and governance reforms across Tamil Nadu. 
                <span className="block mt-2 font-medium">
                  From Perundurai to the entire state - building bridges between aspiration and achievement.
                </span>
              </p>
            </div>
            
            {/* Enhanced Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/get-involved">
                <Button size="lg" className="bg-gradient-to-r from-[#fa6c38] to-[#e85a2b] hover:from-[#e85a2b] hover:to-[#d64e1f] text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  🤝 Join Our Mission
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-2 border-[#fa6c38] text-[#fa6c38] hover:bg-[#fa6c38] hover:text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  📖 My Journey
                </Button>
              </Link>
            </div>

            {/* Professional Stats */}
            <div className="mt-8 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-[#fa6c38] mb-2">6+</div>
                <div className="text-sm text-gray-600 font-medium">Years of Service</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-sm text-gray-600 font-medium">Community Events</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">5000+</div>
                <div className="text-sm text-gray-600 font-medium">Lives Impacted</div>
              </div>
              
              <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-600 font-medium">Constituencies</div>
              </div>
            </div>

            {/* Professional Key Highlights */}
            <div className="mt-6 lg:mt-8 flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
              <span className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-200 transition-colors duration-200">
                🎓 BBA Graduate
              </span>
              
              <span className="bg-red-100 text-red-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors duration-200">
                🩸 Blood Donation Advocate
              </span>
              
              <span className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors duration-200">
                🌱 Environmental Champion
              </span>
              
              <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
                👥 Youth Mentor
              </span>
            </div>

            {/* New Achievement Cards Section */}
            <div className="mt-8 lg:mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center lg:text-left">Recent Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group bg-gradient-to-br from-white to-orange-50 rounded-xl p-4 shadow-lg border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200 to-transparent rounded-bl-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">🏆</div>
                      <div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-orange-800 transition-colors duration-300">Youth Leadership Award</h4>
                        <p className="text-xs text-gray-500">December 2024</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Recognized for outstanding contribution to youth empowerment programs across Tamil Nadu.
                    </p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">State Level Recognition</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 shadow-lg border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200 to-transparent rounded-bl-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">🎓</div>
                      <div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">Education Initiative</h4>
                        <p className="text-xs text-gray-500">Ongoing Program</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Launched scholarship program benefiting 200+ students from underprivileged families.
                    </p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Active Program</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Action Cards */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-orange-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📞</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-800 transition-colors duration-300">Get In Touch</h3>
              <p className="text-sm text-gray-600 mb-4">Have questions or need assistance? Reach out to us directly.</p>
              <div className="text-xs text-orange-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                → Contact our office
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-green-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-800 transition-colors duration-300">Join Our Programs</h3>
              <p className="text-sm text-gray-600 mb-4">Participate in community development and social welfare initiatives.</p>
              <div className="text-xs text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                → View all programs
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📰</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-800 transition-colors duration-300">Latest Updates</h3>
              <p className="text-sm text-gray-600 mb-4">Stay informed about our latest initiatives and community impact.</p>
              <div className="text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                → Read more news
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Fixed positioning */}
        {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:flex">
          <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-[#fa6c38] transition-colors duration-300">
            <span className="text-xs mb-1 font-medium">Discover More</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div> */}
      </div>
    </section>
  );
}
