"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState("vision");

  const visionPoints = [
    {
      title: "Youth-Centric Governance",
      description: "Creating platforms for young minds to actively participate in policy-making and democratic processes.",
      icon: "🏛️"
    },
    {
      title: "Educational Excellence",
      description: "Ensuring quality education reaches every corner of Tamil Nadu, with focus on skill development and innovation.",
      icon: "📚"
    },
    {
      title: "Economic Empowerment",
      description: "Fostering entrepreneurship and creating sustainable employment opportunities for all sections of society.",
      icon: "💼"
    },
    {
      title: "Social Harmony",
      description: "Building an inclusive society where every individual has equal opportunities to grow and contribute.",
      icon: "🤝"
    }
  ];

  const missionPoints = [
    {
      title: "Grassroots Engagement",
      description: "Working directly with communities to understand their needs and implementing ground-level solutions.",
      icon: "🌱"
    },
    {
      title: "Transparent Leadership",
      description: "Maintaining accountability and transparency in all political and social initiatives.",
      icon: "🔍"
    },
    {
      title: "Innovation in Governance",
      description: "Bringing modern solutions and technology-driven approaches to traditional governance challenges.",
      icon: "💡"
    },
    {
      title: "Collaborative Development",
      description: "Partnering with various stakeholders to create comprehensive development strategies.",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 via-orange-25 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by clear principles and driven by unwavering commitment to serve the people of Tamil Nadu.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg border">
            <Button
              variant={activeTab === "vision" ? "default" : "ghost"}
              onClick={() => setActiveTab("vision")}
              className={`px-8 py-3 text-lg font-semibold ${
                activeTab === "vision" 
                  ? "bg-[#f78614] text-white" 
                  : "text-gray-600 hover:text-[#f78614]"
              }`}
            >
              🎯 Our Vision
            </Button>
            <Button
              variant={activeTab === "mission" ? "default" : "ghost"}
              onClick={() => setActiveTab("mission")}
              className={`px-8 py-3 text-lg font-semibold ${
                activeTab === "mission" 
                  ? "bg-[#f78614] text-white" 
                  : "text-gray-600 hover:text-[#f78614]"
              }`}
            >
              🚀 Our Mission
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {(activeTab === "vision" ? visionPoints : missionPoints).map((point, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#f78614] hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-3xl">{point.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{point.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  {point.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 shadow-xl border border-orange-100 max-w-4xl mx-auto">
            <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-6">
              "True leadership is not about the position you hold, but about the positive impact you create in the lives of others. 
              My commitment is to serve as a bridge between the dreams of our youth and the opportunities our nation provides."
            </blockquote>
            <p className="text-lg font-semibold text-[#f78614]">- KTS Kavin</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/vision">
            <Button size="lg" className="bg-gradient-to-r from-[#f78614] to-orange-500 hover:from-[#e85a2b] hover:to-orange-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              📋 Read Complete Vision Document
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
