"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CampaignsPage() {
  const campaigns = [
    {
      title: "Blood Donation Campaigns",
      description: "Organized large-scale blood donation drives across Tamil Nadu, partnering with hospitals and medical institutions to address critical blood shortages.",
      achievements: [
        "500+ units of blood collected",
        "25+ donation camps organized",
        "Partnership with 10+ hospitals",
        "Hundreds of lives saved"
      ],
      impact: "Life-saving",
      color: "red",
      icon: "🩸"
    },
    {
      title: "Community Clean-Up Drives",
      description: "Led environmental initiatives to clean public spaces, promote waste management, and raise awareness about environmental conservation.",
      achievements: [
        "25+ locations cleaned",
        "1000+ volunteers mobilized",
        "Tons of waste removed",
        "Awareness campaigns conducted"
      ],
      impact: "Environmental",
      color: "green",
      icon: "🌱"
    },
    {
      title: "Disaster Relief Operations",
      description: "Coordinated emergency response and relief efforts during natural calamities, providing essential supplies and support to affected families.",
      achievements: [
        "1000+ families assisted",
        "Emergency supplies distributed",
        "Shelter arrangements made",
        "Medical aid provided"
      ],
      impact: "Humanitarian",
      color: "blue",
      icon: "🤝"
    },
    {
      title: "Political Campaign Rallies",
      description: "Successfully organized political awareness campaigns and rallies to engage citizens in democratic processes and policy discussions.",
      achievements: [
        "50+ events conducted",
        "10,000+ people reached",
        "Youth engagement increased",
        "Democratic participation promoted"
      ],
      impact: "Democratic",
      color: "purple",
      icon: "📢"
    },
    {
      title: "Youth Empowerment Programs",
      description: "Initiated programs focused on skill development, career guidance, and leadership training for young people in the community.",
      achievements: [
        "500+ youth trained",
        "Career guidance sessions",
        "Skill development workshops",
        "Leadership training programs"
      ],
      impact: "Educational",
      color: "orange",
      icon: "👥"
    },
    {
      title: "Healthcare Initiatives",
      description: "Organized health camps, medical check-ups, and awareness programs to improve healthcare access in rural and underserved areas.",
      achievements: [
        "20+ health camps organized",
        "Free medical check-ups",
        "Health awareness campaigns",
        "Vaccination drives supported"
      ],
      impact: "Health & Wellness",
      color: "teal",
      icon: "🏥"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: "border-l-orange-600 bg-orange-50",
      green: "border-l-green-600 bg-green-50",
      blue: "border-l-blue-600 bg-blue-50",
      purple: "border-l-purple-600 bg-purple-50",
      teal: "border-l-teal-600 bg-teal-50"
    };
    return colorMap[color as keyof typeof colorMap] || "border-l-gray-600 bg-gray-50";
  };

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Campaigns & Achievements</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving positive change through dedicated campaigns and community initiatives that make a real difference in people's lives.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#fef7f2' }}>
              <div className="text-3xl font-bold mb-2" style={{ color: '#fa6c38' }}>6+</div>
              <div className="text-gray-700">Years of Service</div>
            </div>
            <div className="text-center bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-700">Events Organized</div>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
              <div className="text-gray-700">People Impacted</div>
            </div>
            <div className="text-center bg-purple-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-gray-700">Constituencies Covered</div>
            </div>
          </div>

          {/* Campaigns Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {campaigns.map((campaign, index) => (
              <Card key={index} className={`border-l-4 ${getColorClasses(campaign.color)} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{campaign.icon}</span>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{campaign.title}</CardTitle>
                      <div className="text-sm font-semibold text-gray-600">{campaign.impact} Impact</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 mb-4">
                    {campaign.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {campaign.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <span className="text-green-600 mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-white rounded-lg p-8 text-center" style={{ background: 'linear-gradient(to right, #fa6c38, #e85a2b)' }}>
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-6 opacity-90">
              Be part of the change. Together, we can build stronger communities and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved">
                <Button size="lg" variant="secondary" className="bg-white text-bjp-primary hover:bg-gray-100">
                  Get Involved
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bjp-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
