 "use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Award, TrendingUp, ChevronRight } from "lucide-react"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission")

  const stats = [
    { id: 1, name: "Years of Experience", value: "10+" },
    { id: 2, name: "Team Members", value: "50+" },
    { id: 3, name: "Clients Worldwide", value: "500+" },
    { id: 4, name: "Projects Completed", value: "1,200+" },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
      icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnership with our clients to achieve exceptional results.",
      icon: <Users className="h-6 w-6 text-indigo-600" />,
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality in everything we do, exceeding expectations.",
      icon: <Award className="h-6 w-6 text-indigo-600" />,
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of industry experience, Sarah founded our company with a vision to transform digital experiences.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael leads our technical strategy and ensures we stay at the forefront of technological innovation.",
    },
    {
      name: "Priya Patel",
      role: "Design Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Priya brings creative vision and user-centered design principles to every project we undertake.",
    },
    {
      name: "James Wilson",
      role: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "James ensures our day-to-day operations run smoothly and efficiently to deliver exceptional client service.",
    },
  ]

  const testimonials = [
    {
      content:
        "Working with this team transformed our business. Their innovative approach and attention to detail exceeded our expectations.",
      author: "Alex Rivera",
      position: "CEO, TechNova",
    },
    {
      content:
        "The team&aposs expertise and dedication to our project was impressive. They delivered on time and with exceptional quality.",
      author: "Emma Thompson",
      position: "Marketing Director, GrowthFirst",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent"></div>
          <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Company</h1>
            <p className="text-xl text-indigo-100 mb-8">
              We&aposre a passionate team dedicated to creating exceptional digital experiences that drive growth and
              innovation.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors"
              >
                Get in touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex border-b border-gray-200 mb-8">
              <button
                className={`pb-4 px-4 text-lg font-medium ${
                  activeTab === "mission"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
              <button
                className={`pb-4 px-4 text-lg font-medium ${
                  activeTab === "vision"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("vision")}
              >
                Our Vision
              </button>
              <button
                className={`pb-4 px-4 text-lg font-medium ${
                  activeTab === "story"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("story")}
              >
                Our Story
              </button>
            </div>

            <div className="prose prose-lg max-w-none">
              {activeTab === "mission" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-gray-600 mb-6">
                    Our mission is to empower businesses through innovative digital solutions that drive growth, enhance
                    user experiences, and create lasting value. We are committed to excellence in every project we
                    undertake, combining technical expertise with creative thinking to solve complex challenges.
                  </p>
                  <p className="text-gray-600">
                    We believe in building strong partnerships with our clients, understanding their unique needs, and
                    delivering solutions that exceed expectations. Our collaborative approach ensures that we not only
                    meet the immediate requirements but also contribute to the long-term success of our clients.
                  </p>
                </div>
              )}

              {activeTab === "vision" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                  <p className="text-gray-600 mb-6">
                    We envision a future where technology seamlessly enhances human experiences, making life more
                    connected, efficient, and enjoyable. Our goal is to be at the forefront of this transformation,
                    pioneering solutions that bridge the gap between people and technology.
                  </p>
                  <p className="text-gray-600">
                    By staying ahead of industry trends and continuously innovating, we aim to shape the digital
                    landscape and set new standards for excellence. We strive to be recognized not just for what we
                    create, but for the positive impact our work has on businesses and communities worldwide.
                  </p>
                </div>
              )}

              {activeTab === "story" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                  <p className="text-gray-600 mb-6">
                    Founded in 2013, our company began with a small team of passionate innovators who shared a common
                    vision: to create digital solutions that make a difference. What started as a modest venture in a
                    small office has grown into a thriving organization with a global presence.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Over the years, we&aposve navigated the rapidly evolving technological landscape, adapting to changes
                    while staying true to our core values. We&aposve celebrated successes, learned from challenges, and
                    continuously refined our approach to deliver exceptional results.
                  </p>
                  <p className="text-gray-600">
                    Today, we&aposre proud to have a diverse team of experts across multiple disciplines, serving clients
                    from various industries around the world. Our journey continues as we explore new horizons and push
                    the boundaries of what&aposs possible in the digital realm.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles guide our decisions, shape our culture, and define how we work with our clients and each
              other.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Talented individuals who bring diverse expertise and shared passion to drive our company forward.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-indigo-600 mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don&apost just take our word for it — hear from some of our satisfied clients.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic mb-6">&quot;{testimonial.content}&quot;</blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let&aposs discuss how we can help you achieve your goals and take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-indigo-700 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-800 transition-colors"
              >
                Contact Us <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
