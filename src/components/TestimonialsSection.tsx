"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Medical Officer, Government Hospital",
      location: "Perundurai",
      text: "KTS Kavin's blood donation drives have been a lifesaver for our hospital. His dedication to healthcare initiatives and community service is truly commendable. We've saved countless lives together.",
      rating: 5
    },
    {
      name: "Priya Selvam",
      role: "College Student & Volunteer",
      location: "Erode",
      text: "As a young person, I'm inspired by Kavin sir's vision for youth empowerment. The skill development programs have helped me and many of my friends gain confidence and new abilities.",
      rating: 5
    },
    {
      name: "Murugan S",
      role: "Local Business Owner",
      location: "Tiruppur",
      text: "The entrepreneurship support and business guidance provided by KTS Kavin has helped many small businesses in our area. His understanding of ground-level challenges is remarkable.",
      rating: 5
    },
    {
      name: "Lakshmi Devi",
      role: "Women's Self Help Group Leader",
      location: "Chennimalai",
      text: "During the floods last year, Kavin sir was the first to reach our village with relief materials. His quick response and genuine care for people is what makes him a true leader.",
      rating: 5
    },
    {
      name: "Arun Prakash",
      role: "Environmental Activist",
      location: "Perundurai",
      text: "The tree plantation drives and environmental awareness campaigns led by KTS Kavin show his commitment to sustainable development. He truly cares about our future generations.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real voices from the community speaking about the impact and difference we're making together. 
            These testimonials reflect our commitment to genuine service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fa6c38] to-orange-500"></div>
            
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
            </CardHeader>

            <CardContent className="text-center px-8 pb-8">
              <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#fa6c38] to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#fa6c38] font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    📍 {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              onClick={prevTestimonial}
              className="border-[#fa6c38] text-[#fa6c38] hover:bg-[#fa6c38] hover:text-white"
            >
              ← Previous
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial 
                      ? 'bg-[#fa6c38]' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextTestimonial}
              className="border-[#fa6c38] text-[#fa6c38] hover:bg-[#fa6c38] hover:text-white"
            >
              Next →
            </Button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg border border-orange-100">
            <div className="text-4xl font-bold text-[#fa6c38] mb-2">4.9/5</div>
            <div className="text-gray-700 font-medium">Community Satisfaction Rating</div>
            <div className="text-sm text-gray-500 mt-1">Based on 500+ feedback responses</div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg border border-blue-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-700 font-medium">Project Completion Rate</div>
            <div className="text-sm text-gray-500 mt-1">Successful implementation of initiatives</div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg border border-green-100">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Community Support</div>
            <div className="text-sm text-gray-500 mt-1">Available for urgent matters</div>
          </div>
        </div>
      </div>
    </section>
  );
}
