import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FocusAreas() {
  const focusAreas = [
    {
      title: "Youth Empowerment",
      description: "Inspiring and engaging young minds to participate actively in politics and community development.",
      icon: "👥",
    },
    {
      title: "Education Reforms",
      description: "Advocating for quality education, skill development, and educational infrastructure improvements.",
      icon: "📚",
    },
    {
      title: "Entrepreneurship",
      description: "Supporting startups, promoting business opportunities, and fostering economic growth in local communities.",
      icon: "💼",
    },
    {
      title: "Good Governance",
      description: "Working towards transparent, accountable, and citizen-centric governance at all levels.",
      icon: "🏛️",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Focus Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to creating positive change through focused initiatives that address the core needs of our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{area.icon}</div>
                <CardTitle className="text-xl text-[#fa6c38]">{area.title}</CardTitle>
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
    </section>
  );
}
