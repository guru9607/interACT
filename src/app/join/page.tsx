"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Event Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
              Join the Movement
            </h1>
            <p className="text-xl text-text-muted mb-10">
              Ready to start your journey? Register for our upcoming global workshops and events.
            </p>

            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <h2 className="text-2xl font-bold text-text-main mb-6">Upcoming Event</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Calendar className="text-primary mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-text-main">Global Youth Summit 2026</h3>
                    <p className="text-text-muted">January 15th, 2026</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-text-main">Time</h3>
                    <p className="text-text-muted">10:00 AM - 2:00 PM (GMT)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-primary mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-text-main">Location</h3>
                    <p className="text-text-muted">Online (Zoom) & Local Hubs</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-teal-200">
                <p className="text-sm text-text-muted">
                  Join thousands of youth from around the world in this transformative experience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-text-main mb-6">Register Now</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-2xl">✓</div>
                  <h3 className="text-xl font-bold text-text-main mb-2">Registration Successful!</h3>
                  <p className="text-text-muted">We've sent a confirmation email with details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-text-main mb-2">First Name</label>
                      <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-text-main mb-2">Last Name</label>
                      <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">Email Address</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-text-main mb-2">Country</label>
                    <select id="country" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                      <option>Select a country</option>
                      <option>India</option>
                      <option>USA</option>
                      <option>UK</option>
                      <option>Kenya</option>
                      <option>Japan</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-md hover:shadow-lg">
                    Complete Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
