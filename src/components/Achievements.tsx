import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Achievements() {
  const achievements = [
    {
      title: "Blood Donation Drives",
      description: "Organized multiple blood donation camps, saving hundreds of lives across Tamil Nadu.",
      impact: "500+ units collected",
      image: "🩸",
    },
    {
      title: "Community Clean-Up",
      description: "Led environmental initiatives to clean public spaces and promote sustainability.",
      impact: "25+ locations cleaned",
      image: "🌱",
    },
    {
      title: "Relief Operations",
      description: "Coordinated disaster relief efforts during natural calamities and emergencies.",
      impact: "1000+ families helped",
      image: "🤝",
    },
    {
      title: "Campaign Rallies",
      description: "Successfully organized political rallies and awareness campaigns across constituencies.",
      impact: "50+ events conducted",
      image: "📢",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming communities through dedicated service and impactful initiatives that make a real difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#fa6c38]">
              <CardHeader>
                <div className="text-4xl mb-4">{achievement.image}</div>
                <CardTitle className="text-lg text-gray-900">{achievement.title}</CardTitle>
                <div className="text-sm font-semibold text-[#fa6c38]">{achievement.impact}</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {achievement.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/campaigns">
            <Button size="lg" className="bg-[#fa6c38] hover:bg-[#e85a2b] text-white">
              View All Campaigns
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
