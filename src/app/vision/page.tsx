"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VisionPage() {
  const visionAreas = [
    {
      title: "Youth Participation in Politics",
      description: "Encouraging and facilitating meaningful youth engagement in democratic processes and governance.",
      goals: [
        "Establish youth leadership development programs",
        "Create platforms for young voices in policy-making",
        "Promote civic education and political awareness",
        "Support youth candidates in elections"
      ],
      icon: "🗳️",
      color: "blue"
    },
    {
      title: "Educational Reforms",
      description: "Transforming the educational landscape to meet modern challenges and opportunities.",
      goals: [
        "Improve digital infrastructure in schools",
        "Enhance teacher training and development",
        "Promote skill-based learning curricula",
        "Increase access to quality higher education"
      ],
      icon: "📚",
      color: "green"
    },
    {
      title: "Entrepreneurship Initiatives",
      description: "Fostering a culture of innovation and entrepreneurship to drive economic growth.",
      goals: [
        "Establish startup incubation centers",
        "Provide mentorship and funding support",
        "Create business-friendly policies",
        "Promote local manufacturing and services"
      ],
      icon: "💼",
      color: "purple"
    },
    {
      title: "Governance Improvements",
      description: "Building transparent, efficient, and citizen-centric governance systems.",
      goals: [
        "Implement digital governance solutions",
        "Enhance transparency in public services",
        "Strengthen anti-corruption measures",
        "Improve citizen grievance redressal"
      ],
      icon: "🏛️",
      color: "red"
    }
  ];

  const strategicPriorities = [
    {
      title: "Digital Tamil Nadu",
      description: "Leveraging technology to transform governance, education, and commerce",
      timeline: "2025-2027"
    },
    {
      title: "Skills for Future",
      description: "Preparing youth with 21st-century skills for emerging job markets",
      timeline: "2025-2030"
    },
    {
      title: "Sustainable Development",
      description: "Balancing economic growth with environmental conservation",
      timeline: "Ongoing"
    },
    {
      title: "Inclusive Growth",
      description: "Ensuring development benefits reach all sections of society",
      timeline: "2025-2035"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-l-blue-600 bg-blue-50",
      green: "border-l-green-600 bg-green-50",
      purple: "border-l-purple-600 bg-purple-50",
      orange: "border-l-orange-600 bg-orange-50"
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
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Vision & Goals</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A comprehensive roadmap for transforming Tamil Nadu through youth empowerment, innovation, and inclusive governance.
            </p>
            <div className="text-white rounded-lg p-8 max-w-4xl mx-auto" style={{ background: 'linear-gradient(to right, #fa6c38, #e85a2b)' }}>
              <h2 className="text-2xl font-bold mb-4">Our Vision Statement</h2>
              <p className="text-lg opacity-90">
                "To build a progressive Tamil Nadu where every citizen, especially the youth, has equal opportunities to thrive, 
                contribute to society, and participate meaningfully in democratic governance while preserving our rich cultural heritage."
              </p>
            </div>
          </div>

          {/* Key Vision Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Focus Areas</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {visionAreas.map((area, index) => (
                <Card key={index} className={`border-l-4 ${getColorClasses(area.color)} hover:shadow-lg transition-shadow duration-300`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{area.icon}</span>
                      <CardTitle className="text-xl text-gray-900">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 mb-4">
                      {area.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Goals:</h4>
                      <ul className="space-y-2">
                        {area.goals.map((goal, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <span className="text-green-600 mr-2 mt-0.5">▶</span>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Strategic Priorities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Strategic Priorities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategicPriorities.map((priority, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ color: '#fa6c38' }}>{priority.title}</CardTitle>
                    <div className="text-sm font-medium text-gray-500">{priority.timeline}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">
                      {priority.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Implementation Framework */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Implementation Framework</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-t-4 border-t-blue-600">
                <CardHeader>
                  <div className="text-3xl mb-2">🎯</div>
                  <CardTitle className="text-xl text-blue-600">Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Comprehensive planning with stakeholder consultation, resource assessment, and timeline development.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-t-green-600">
                <CardHeader>
                  <div className="text-3xl mb-2">⚡</div>
                  <CardTitle className="text-xl text-green-600">Execute</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Systematic implementation with community participation, regular monitoring, and adaptive management.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-t-4 border-t-purple-600">
                <CardHeader>
                  <div className="text-3xl mb-2">📊</div>
                  <CardTitle className="text-xl text-purple-600">Evaluate</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Continuous assessment of impact, feedback incorporation, and strategy refinement for optimal results.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Vision</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              This vision can only be realized through collective effort. Be part of the change and help us build 
              a better future for Tamil Nadu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved">
                <Button size="lg" className="bg-brand-primary text-white hover-orange-dark">
                  Get Involved
                </Button>
              </Link>
              <Link href="/campaigns">
                <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                  View Our Work
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
