import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "About KTS Kavin - BJP Youth Leader & Political Leader",
  description: "Learn about KTS Kavin's journey, education, political career, and dedication to youth empowerment and community development in Tamil Nadu.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About KTS Kavin</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated leader committed to empowering youth, fostering education, and building stronger communities across Tamil Nadu.
            </p>
          </div>

          {/* Biography Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <Image
                src="/Hero_img.jpeg"
                alt="KTS Kavin"
                width={500}
                height={600}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#fa6c38' }}>Biography</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                KTS Kavin is a passionate political leader and dedicated member of the Bharatiya Janata Party (BJP) since 2019. 
                Born and raised in Tamil Nadu, he has consistently demonstrated unwavering commitment to public service and 
                community development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong educational foundation and deep understanding of grassroots politics, Kavin has emerged as 
                a prominent voice for youth empowerment and progressive governance in the region.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                His journey in politics began with a vision to create meaningful change in society, focusing particularly 
                on education, entrepreneurship, and youth engagement in democratic processes.
              </p>
            </div>
          </div>

          {/* Education & Background */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-l-4" style={{ borderLeftColor: '#fa6c38' }}>
              <CardHeader>
                <CardTitle className="text-2xl" style={{ color: '#fa6c38' }}>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor of Business Administration (BBA)</h3>
                    <p className="text-gray-600">PSG College of Arts & Science, Coimbatore</p>
                    <p className="text-sm text-gray-500">A comprehensive business education that provided strong foundation in leadership and management</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: '#fa6c38' }}>
              <CardHeader>
                <CardTitle className="text-2xl" style={{ color: '#fa6c38' }}>Political Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">BJP Member Since 2019</h3>
                    <p className="text-gray-600">Youth Wing Leadership Roles</p>
                    <p className="text-sm text-gray-500">Active in Perundurai, Erode, and Tiruppur constituencies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values & Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Values & Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🎯</div>
                  <CardTitle className="text-xl" style={{ color: '#fa6c38' }}>Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    To create an empowered society where every youth has the opportunity to contribute meaningfully 
                    to democratic governance and economic development.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🤝</div>
                  <CardTitle className="text-xl" style={{ color: '#fa6c38' }}>Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Bridging the gap between government and citizens through transparent communication, 
                    innovative solutions, and grassroots engagement.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">⚡</div>
                  <CardTitle className="text-xl" style={{ color: '#fa6c38' }}>Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Integrity, accountability, inclusivity, and unwavering commitment to serving the people 
                    with honesty and dedication.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div className="rounded-lg p-8" style={{ backgroundColor: '#fef7f2' }}>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Leadership Philosophy</h2>
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
                "True leadership is not about holding positions of power, but about empowering others to realize their potential. 
                My commitment is to serve as a bridge between the aspirations of our youth and the opportunities that our 
                great nation can provide."
              </blockquote>
              <p className="text-lg font-semibold" style={{ color: '#fa6c38' }}>- KTS Kavin</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
