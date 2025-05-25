"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    console.log(data)
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success handling
      setFormStatus({
        type: "success",
        message: "Thank you! Your message has been received. We&aposll get back to you shortly.",
      })
      reset()
    } catch (error) {
      console.log(error)
      // Error handling
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 mb-8">
              Have questions or want to work with us? We&aposd love to hear from you. Our team is ready to assist you with
              any inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {formStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-md ${
                      formStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        {formStatus.type === "success" ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{formStatus.message}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="John Doe"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="john@example.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 000-0000"
                      {...register("phone")}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="How can we help you?"
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Please provide details about your inquiry..."
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message should be at least 10 characters",
                        },
                      })}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We&aposre here to help! Reach out to us through any of the channels below or visit our office.
                </p>

                <div className="bg-gray-50 rounded-xl p-8 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                        <p className="mt-1 text-gray-600">
                          123 Business Avenue, Suite 100
                          <br />
                          San Francisco, CA 94107
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Phone Number</h3>
                        <p className="mt-1 text-gray-600">
                          <a href="tel:+14155550123" className="hover:text-blue-600">
                            +1 (415) 555-0123
                          </a>
                        </p>
                        <p className="mt-1 text-gray-500 text-sm">Monday to Friday, 9am to 6pm PST</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Email Address</h3>
                        <p className="mt-1 text-gray-600">
                          <a href="mailto:info@example.com" className="hover:text-blue-600">
                            info@example.com
                          </a>
                        </p>
                        <p className="mt-1 text-gray-500 text-sm">We&aposll respond as soon as possible</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                        <div className="mt-1 text-gray-600 grid grid-cols-2 gap-x-4 gap-y-2">
                          <div>Monday - Friday:</div>
                          <div>9:00 AM - 6:00 PM</div>
                          <div>Saturday:</div>
                          <div>10:00 AM - 4:00 PM</div>
                          <div>Sunday:</div>
                          <div>Closed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden h-64 md:h-80 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">
                      {/* In a real implementation, you would embed a map here */}
                      Interactive Map Would Be Displayed Here
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors">
                      <Facebook className="h-6 w-6 text-gray-700 hover:text-blue-600" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors">
                      <Twitter className="h-6 w-6 text-gray-700 hover:text-blue-600" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors">
                      <Instagram className="h-6 w-6 text-gray-700 hover:text-blue-600" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition-colors">
                      <Linkedin className="h-6 w-6 text-gray-700 hover:text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions about contacting us.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How quickly will I receive a response?",
                  answer:
                    "We strive to respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.",
                },
                {
                  question: "Do you offer support on weekends?",
                  answer:
                    "Our office is open on Saturdays from 10 AM to 4 PM. For urgent weekend support, please use our emergency contact form.",
                },
                {
                  question: "Can I schedule a meeting with your team?",
                  answer:
                    "Yes! You can request a meeting through this contact form or call our office directly to schedule an appointment.",
                },
                {
                  question: "Do you provide international support?",
                  answer:
                    "Absolutely. We serve clients worldwide and can arrange virtual meetings across different time zones.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
