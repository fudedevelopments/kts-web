import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LatestUpdates() {
  const updates = [
    {
      date: "September 2025",
      title: "Healthcare Initiative Launch",
      description: "Launched comprehensive healthcare awareness program in Perundurai constituency with free medical check-ups for 500+ families.",
      image: "/collections/collections_1.jpeg",
      category: "Healthcare",
      impact: "500+ Beneficiaries"
    },
    {
      date: "August 2025",
      title: "Youth Skill Development Program",
      description: "Organized skill development workshops for unemployed youth, focusing on digital literacy and entrepreneurship.",
      image: "/collections/collections_2.jpeg",
      category: "Education",
      impact: "200+ Youth Trained"
    },
    {
      date: "July 2025",
      title: "Environmental Conservation Drive",
      description: "Led massive tree plantation drive and waste management awareness campaign across 15 villages.",
      image: "/collections/collections_3.jpeg",
      category: "Environment",
      impact: "1000+ Trees Planted"
    }
  ];

  const quickActions = [
    {
      title: "Report an Issue",
      description: "Bring community problems to our attention",
      icon: "📢",
      link: "/contact",
      color: "orange"
    },
    {
      title: "Join Volunteer Team",
      description: "Become part of our community service initiatives",
      icon: "🤝",
      link: "/get-involved",
      color: "blue"
    },
    {
      title: "Request Meeting",
      description: "Schedule a personal consultation or discussion",
      icon: "📅",
      link: "/contact",
      color: "green"
    },
    {
      title: "Suggest Ideas",
      description: "Share your thoughts for community development",
      icon: "💡",
      link: "/contact",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Latest Updates */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about our recent initiatives, community programs, and ongoing projects 
              that are making a difference in people's lives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {updates.map((update, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#fa6c38] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {update.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {update.date}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-[#fa6c38] transition-colors">
                    {update.title}
                  </CardTitle>
                  <div className="text-sm font-semibold text-green-600">{update.impact}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 leading-relaxed">
                    {update.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/campaigns">
              <Button variant="outline" className="border-[#fa6c38] text-[#fa6c38] hover:bg-[#fa6c38] hover:text-white px-8 py-3 text-lg font-semibold">
                📰 View All Updates
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your voice matters. Whether you need assistance, want to contribute, or have ideas to share, 
              we're here to listen and act.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.link}>
                <Card className={`text-center hover:shadow-xl transition-all duration-300 border-2 ${getColorClasses(action.color)} hover:scale-105 cursor-pointer`}>
                  <CardHeader>
                    <div className="text-4xl mb-3">{action.icon}</div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">
                      {action.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-[#fa6c38] to-[#e85a2b] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference Together?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of citizens who are already part of our movement for positive change. 
            Your participation can help us build the Tamil Nadu we all dream of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button size="lg" variant="secondary" className="bg-white text-[#fa6c38] hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                🚀 Get Involved Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#fa6c38] px-8 py-3 text-lg font-semibold">
                💬 Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
