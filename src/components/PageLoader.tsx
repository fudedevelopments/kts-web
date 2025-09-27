"use client";

import { useState } from "react";
import { useLoading } from "@/context/Golobalprovider";
import { Button } from "./ui/button";

interface PageLoaderProps {
  onEnterSite?: () => void;
}

export default function PageLoader({ onEnterSite }: PageLoaderProps) {
  const { isLoading, stopLoading } = useLoading();
  const [animationState, setAnimationState] = useState<'idle' | 'transforming' | 'flying' | 'hidden'>('idle');
  
  const handleEnterSite = () => {
    // Start the balloon animation sequence
    setAnimationState('transforming');
    
    // After transform animation completes, start flying
    setTimeout(() => {
      setAnimationState('flying');
      
      // After flying animation completes, hide and show home screen
      setTimeout(() => {
        setAnimationState('hidden');
        stopLoading(); // This will hide the loader and show home screen
        if (onEnterSite) {
          onEnterSite();
        }
      }, 2500); // Flying animation duration (matches CSS)
    }, 800); // Transform animation duration
  };

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="text-center">
        {/* Logo or Brand */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#f78614] to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
            <span className="text-2xl font-bold text-white">KTS</span>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 animate-fade-in-up">
            KTS Kavin
          </h2>
          <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            BJP State Secretary Youth Wing Tamil Nadu
          </p>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Button 
            onClick={handleEnterSite} 
            disabled={animationState !== 'idle'}
            className={`balloon-button bg-gradient-to-r from-[#f78614] to-orange-500 hover:from-[#e85a2b] hover:to-orange-600 text-white transition-all duration-300 relative z-10 flex items-center justify-center ${
              animationState === 'transforming' ? 'animate-balloon-transform !p-0' : 
              animationState === 'flying' ? 'animate-balloon-fly !p-0 !w-[60px] !h-[60px] !min-w-[60px] !rounded-full' : 
              animationState === 'hidden' ? 'animate-balloon-pop !p-0 !w-[60px] !h-[60px] !min-w-[60px] !rounded-full' : 'px-6 py-2'
            } ${
              animationState !== 'idle' ? 'overflow-hidden' : ''
            }`}
          >
            <span className={`transition-all duration-300 flex items-center justify-center text-center ${animationState !== 'idle' ? 'text-2xl leading-none' : 'text-base'}`}>
              {animationState === 'idle' ? "Welcome To KTS" : '🎈'}
            </span>
          </Button>
        </div>
        {/* Loading Bar */}
        {/* <div className="mt-8 w-64 mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#f78614] to-orange-500 rounded-full animate-slide-in-up origin-left"></div>
          </div>
        </div>
         */}
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-[#f78614] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-[#f78614] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-[#f78614] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
