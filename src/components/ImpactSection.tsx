import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ImpactSection() {
  const impactStats = [
    {
      number: "500+",
      label: "Blood Units Donated",
      description: "Life-saving blood donation drives across Tamil Nadu",
      icon: "🩸",
      color: "orange"
    },
    {
      number: "25+",
      label: "Locations Cleaned",
      description: "Environmental clean-up initiatives in communities",
      icon: "🌱",
      color: "green"
    },
    {
      number: "1000+",
      label: "Families Supported",
      description: "Emergency relief and disaster support operations",
      icon: "🤝",
      color: "blue"
    },
    {
      number: "50+",
      label: "Youth Programs",
      description: "Leadership development and skill training sessions",
      icon: "👥",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: "bg-orange-50 border-orange-200 text-orange-800",
      green: "bg-green-50 border-green-200 text-green-800",
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-50 border-gray-200 text-gray-800";
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Impact, Real Change</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers tell the story of our commitment to community service and positive transformation. 
            Every statistic represents lives touched and communities strengthened.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className={`text-center hover:shadow-xl transition-all duration-300 border-2 ${getColorClasses(stat.color)} hover:scale-105`}>
              <CardHeader className="pb-4">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <CardTitle className="text-3xl font-bold mb-2">{stat.number}</CardTitle>
                <CardDescription className="font-semibold text-lg text-gray-800">
                  {stat.label}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/campaigns">
            <Button size="lg" className="bg-[#fa6c38] hover:bg-[#e85a2b] text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              🎯 Explore All Campaigns
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
