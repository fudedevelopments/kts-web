"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Phone",
      value: "99948-94844",
      description: "Call us for urgent matters or direct communication",
      icon: "📞",
      link: "tel:+919994894844"
    },
    {
      title: "Email",
      value: "kavin95pri@gmail.com",
      description: "Send us detailed inquiries or documents",
      icon: "✉️",
      link: "mailto:kavin95pri@gmail.com"
    },
    {
      title: "Address",
      value: "72/23,24 Chennimalai Road, Perundurai – 638052, Tamil Nadu",
      description: "Visit our office for in-person meetings",
      icon: "📍",
      link: "https://maps.google.com/?q=Perundurai,Tamil+Nadu+638052"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "By Appointment Only" }
  ];

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to listen, help, and work together towards building a better community. 
              Reach out to us through any of the channels below.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-3xl mb-2">{method.icon}</div>
                  <CardTitle className="text-xl" style={{ color: '#fa6c38' }}>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {method.link ? (
                    <a 
                      href={method.link}
                      className="text-lg font-semibold text-gray-900 hover:text-brand-primary transition-colors block mb-2"
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-gray-900 mb-2">{method.value}</p>
                  )}
                  <CardDescription className="text-gray-600">
                    {method.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Office Info */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Office Information */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl" style={{ color: '#fa6c38' }}>Office Hours</CardTitle>
                  <CardDescription>
                    Visit us during these hours for in-person consultations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl" style={{ color: '#fa6c38' }}>Quick Contact</CardTitle>
                  <CardDescription>
                    For immediate assistance or urgent matters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Emergency Contact</p>
                      <a href="tel:+919994894844" className="text-brand-primary hover:underline">
                        +91 99948-94844
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">General Inquiries</p>
                      <a href="mailto:kavin95pri@gmail.com" className="text-brand-primary hover:underline">
                        kavin95pri@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl" style={{ color: '#fa6c38' }}>Follow Us</CardTitle>
                  <CardDescription>
                    Stay updated with our latest activities and announcements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SocialLinks />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Visit Our Office</h2>
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🗺️</div>
                    <p className="text-lg font-semibold text-gray-700 mb-2">Office Location</p>
                    <p className="text-gray-600 mb-4">72/23,24 Chennimalai Road<br />Perundurai – 638052, Tamil Nadu</p>
                    <a
                      href="https://maps.google.com/?q=Perundurai,Tamil+Nadu+638052"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-brand-primary text-white px-6 py-2 rounded-lg hover-orange-dark transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Guidelines */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Contact Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#fa6c38' }}>What to Expect</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Response within 24-48 hours for email inquiries
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Immediate attention for urgent matters via phone
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Professional and courteous assistance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Confidential handling of all communications
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#fa6c38' }}>How We Can Help</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">▶</span>
                    Policy inquiries and clarifications
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">▶</span>
                    Community development initiatives
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">▶</span>
                    Volunteer and partnership opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">▶</span>
                    Media and press-related queries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
