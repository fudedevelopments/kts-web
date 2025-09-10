"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VolunteerForm from "@/components/VolunteerForm";
import SocialLinks from "@/components/SocialLinks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GetInvolvedPage() {
  const volunteerOpportunities = [
    {
      title: "Campaign Volunteer",
      description: "Help organize political campaigns, rallies, and awareness events.",
      commitment: "Event-based",
      icon: "📢"
    },
    {
      title: "Community Outreach",
      description: "Assist with blood donation drives, clean-up campaigns, and social service programs.",
      commitment: "Flexible",
      icon: "🤝"
    },
    {
      title: "Youth Mentor",
      description: "Guide and inspire young people in leadership development and civic engagement.",
      commitment: "Ongoing",
      icon: "👥"
    },
    {
      title: "Digital Volunteer",
      description: "Support social media campaigns, content creation, and online community building.",
      commitment: "Remote",
      icon: "💻"
    },
    {
      title: "Event Coordinator",
      description: "Plan and execute community events, workshops, and educational programs.",
      commitment: "Project-based",
      icon: "🎯"
    },
    {
      title: "Administrative Support",
      description: "Provide organizational and administrative assistance for various initiatives.",
      commitment: "Part-time",
      icon: "📋"
    }
  ];

  const impactAreas = [
    {
      title: "Make a Difference",
      description: "Contribute directly to positive change in your community and society.",
      icon: "🌟"
    },
    {
      title: "Develop Skills",
      description: "Gain valuable experience in leadership, organization, and public service.",
      icon: "🚀"
    },
    {
      title: "Build Networks",
      description: "Connect with like-minded individuals and build lasting professional relationships.",
      icon: "🤝"
    },
    {
      title: "Create Impact",
      description: "Be part of initiatives that create real, measurable impact in people's lives.",
      icon: "💡"
    }
  ];

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Get Involved</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our mission to create positive change. Whether you have an hour a week or a day a month, 
              your contribution can make a meaningful difference in our community.
            </p>
          </div>

          {/* Why Volunteer Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Volunteer With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactAreas.map((area, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="text-3xl mb-2">{area.icon}</div>
                    <CardTitle className="text-lg" style={{ color: '#fa6c38' }}>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Volunteer Opportunities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Volunteer Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerOpportunities.map((opportunity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4" style={{ borderLeftColor: '#fa6c38' }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{opportunity.icon}</span>
                      <CardTitle className="text-lg text-gray-900">{opportunity.title}</CardTitle>
                    </div>
                    <div className="text-sm font-medium" style={{ color: '#fa6c38' }}>{opportunity.commitment}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">
                      {opportunity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Volunteer Form Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Us?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the volunteer registration form below and we'll get in touch with opportunities 
                that match your interests and availability.
              </p>
            </div>
            <VolunteerForm />
          </div>

          {/* Other Ways to Support */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Other Ways to Support</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl mb-2">📢</div>
                  <CardTitle className="text-xl" style={{ color: '#fa6c38' }}>Spread the Word</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 mb-4">
                    Share our mission with friends and family. Follow us on social media and help amplify our message.
                  </CardDescription>
                  <SocialLinks />
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl mb-2">💰</div>
                  <CardTitle className="text-xl" style={{ color: '#fa6c38' }}>Financial Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 mb-4">
                    Support our campaigns and initiatives through donations. Every contribution helps us reach more people.
                  </CardDescription>
                  <Link href="/contact">
                    <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-3xl mb-2">🤝</div>
                  <CardTitle className="text-xl" style={{ color: '#fa6c38' }}>Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 mb-4">
                    Organizations and businesses can partner with us for community development initiatives.
                  </CardDescription>
                  <Link href="/contact">
                    <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-white rounded-lg p-8 text-center" style={{ background: 'linear-gradient(to right, #fa6c38, #e85a2b)' }}>
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of volunteers who are already making a positive impact in Tamil Nadu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-brand-primary hover:bg-gray-100">
                <a href="#volunteer-form">Register as Volunteer</a>
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
                  Ask Questions
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
