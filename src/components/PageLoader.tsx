"use client";

import { useLoading } from "@/context/Golobalprovider";
import { Button } from "./ui/button";

interface PageLoaderProps {
  onEnterSite?: () => void;
}

export default function PageLoader({ onEnterSite }: PageLoaderProps) {
  const { isLoading } = useLoading();
  
  const handleEnterSite = () => {
    if (onEnterSite) {
      onEnterSite();
    }
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
            BJP Youth Wing Leader
          </p>
        </div>
        <Button onClick={handleEnterSite} className="mt-4 bg-gradient-to-r from-[#f78614] to-orange-500 hover:from-[#e85a2b] hover:to-orange-600 text-white">
          Let's Enter
        </Button>
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
