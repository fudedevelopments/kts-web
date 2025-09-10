"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function VolunteerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    skills: "",
    interests: "",
    availability: "",
    experience: "",
    motivation: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.age.trim()) newErrors.age = "Age is required";
    if (!form.interests.trim()) newErrors.interests = "Please select your interests";
    if (!form.motivation.trim()) newErrors.motivation = "Please tell us your motivation";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        age: "",
        occupation: "",
        skills: "",
        interests: "",
        availability: "",
        experience: "",
        motivation: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="text-4xl mb-4">🎉</div>
          <CardTitle className="text-xl text-green-600">Welcome to the Team!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-gray-600 mb-4">
            Thank you for volunteering! We'll contact you soon with opportunities to get involved.
          </CardDescription>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-[#fa6c38]">Volunteer Registration</CardTitle>
        <CardDescription>
          Join our mission to create positive change in the community. Fill out this form to become a volunteer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                  Age *
                </label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="Your age"
                  className={errors.age ? "border-red-500" : ""}
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="9994894844"
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">
                Occupation/Profession
              </label>
              <Input
                id="occupation"
                name="occupation"
                value={form.occupation}
                onChange={handleChange}
                placeholder="Student, Professional, Business, etc."
              />
            </div>
          </div>

          {/* Skills and Interests */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Interests</h3>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                Skills & Expertise
              </label>
              <Textarea
                id="skills"
                name="skills"
                value={form.skills}
                onChange={handleChange}
                placeholder="e.g., Event organization, Social media, Public speaking, Technical skills..."
                rows={3}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                Areas of Interest *
              </label>
              <Textarea
                id="interests"
                name="interests"
                value={form.interests}
                onChange={handleChange}
                placeholder="e.g., Youth empowerment, Education, Healthcare, Environment, Political campaigns..."
                rows={3}
                className={errors.interests ? "border-red-500" : ""}
              />
              {errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests}</p>}
            </div>
          </div>

          {/* Availability and Experience */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability & Experience</h3>
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <Textarea
                id="availability"
                name="availability"
                value={form.availability}
                onChange={handleChange}
                placeholder="e.g., Weekends, Evenings, Specific days, Event-based..."
                rows={2}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Previous Volunteer Experience
              </label>
              <Textarea
                id="experience"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="Tell us about any previous volunteer work or community involvement..."
                rows={3}
              />
            </div>
          </div>

          {/* Motivation */}
          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
              Why do you want to volunteer with us? *
            </label>
            <Textarea
              id="motivation"
              name="motivation"
              value={form.motivation}
              onChange={handleChange}
              placeholder="Share your motivation and what you hope to contribute..."
              rows={4}
              className={errors.motivation ? "border-red-500" : ""}
            />
            {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#fa6c38] hover:bg-[#e85a2b] text-white"
          >
            {isSubmitting ? "Submitting..." : "Submit Volunteer Application"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
