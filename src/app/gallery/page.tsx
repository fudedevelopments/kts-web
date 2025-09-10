"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Generate gallery images from collections folder
  const galleryImages = [
    { src: "/collections/collections_1.jpeg", alt: "Community Event - Blood Donation Drive", category: "Blood Camps" },
    { src: "/collections/collections_2.jpeg", alt: "Political Rally - Youth Engagement", category: "Rallies" },
    { src: "/collections/collections_3.jpeg", alt: "Clean-up Drive - Environmental Initiative", category: "Clean-Up Drives" },
    { src: "/collections/collections_4.jpeg", alt: "Community Service - Relief Distribution", category: "Community Events" },
    { src: "/collections/collections_5.jpeg", alt: "Blood Donation Camp - Saving Lives", category: "Blood Camps" },
    { src: "/collections/collections_6.jpeg", alt: "Political Awareness Campaign", category: "Rallies" },
    { src: "/collections/collections_7.jpeg", alt: "Environmental Clean-up Initiative", category: "Clean-Up Drives" },
    { src: "/collections/collections_8.jpeg", alt: "Community Development Program", category: "Community Events" },
    { src: "/collections/collections_9.jpeg", alt: "Healthcare Awareness Campaign", category: "Blood Camps" },
    { src: "/collections/collections_10.jpeg", alt: "Youth Leadership Rally", category: "Rallies" },
    { src: "/collections/collections_11.jpeg", alt: "Public Space Cleaning Drive", category: "Clean-Up Drives" },
    { src: "/collections/collections_12.jpeg", alt: "Cultural Community Event", category: "Community Events" },
    { src: "/collections/collections_13.jpeg", alt: "Medical Check-up Camp", category: "Blood Camps" },
    { src: "/collections/collections_14.jpeg", alt: "Democratic Participation Rally", category: "Rallies" },
    { src: "/collections/collections_15.jpeg", alt: "Waste Management Initiative", category: "Clean-Up Drives" },
  ];

  const categories = ["All", "Blood Camps", "Rallies", "Clean-Up Drives", "Community Events"];

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore moments of impact, community engagement, and positive change through our visual journey of service and leadership.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                style={{
                  backgroundColor: selectedCategory === category ? '#fa6c38' : 'transparent',
                  color: selectedCategory === category ? 'white' : '#fa6c38'
                }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Category Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#fef7f2' }}>
              <div className="text-2xl font-bold mb-1" style={{ color: '#fa6c38' }}>
                {galleryImages.filter(img => img.category === "Blood Camps").length}
              </div>
              <div className="text-sm text-gray-600">Blood Camps</div>
            </div>
            <div className="text-center bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {galleryImages.filter(img => img.category === "Rallies").length}
              </div>
              <div className="text-sm text-gray-600">Political Rallies</div>
            </div>
            <div className="text-center bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {galleryImages.filter(img => img.category === "Clean-Up Drives").length}
              </div>
              <div className="text-sm text-gray-600">Clean-Up Drives</div>
            </div>
            <div className="text-center bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {galleryImages.filter(img => img.category === "Community Events").length}
              </div>
              <div className="text-sm text-gray-600">Community Events</div>
            </div>
          </div>

          {/* Gallery Grid */}
          <GalleryGrid images={galleryImages} selectedCategory={selectedCategory} />

          {/* Additional Info */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Behind Every Image</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each photograph represents real impact in our communities. From life-saving blood donation drives to 
              environmental conservation efforts, every initiative reflects our commitment to creating positive change 
              and building a better future for Tamil Nadu.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
