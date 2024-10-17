"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Lock, Shield, Zap } from "lucide-react";

export default function Introduction() {
  const [activeTab, setActiveTab] = useState("confidentiality");

  const features = [
    {
      id: "confidentiality",
      title: "Confidentiality",
      icon: <Lock className="w-6 h-6" />,
      content:
        "Protect sensitive information with robust security measures, including NextAuth for secure authentication and authorization. User data is stored securely in PostgreSQL databases, with encryption both in transit and at rest.",
    },
    {
      id: "integrity",
      title: "Integrity",
      icon: <Shield className="w-6 h-6" />,
      content:
        "Maintain data accuracy and consistency through stringent validation mechanisms and secure transaction protocols. Implement CI/CD pipelines for safe code deployment and regular database backups.",
    },
    {
      id: "availability",
      title: "Availability",
      icon: <Zap className="w-6 h-6" />,
      content:
        "Ensure high uptime and performance with multi-region cloud deployment, auto-scaling, and load balancing. Integrate CDN for global content distribution and optimal user experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          E-commerce Template Overview
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          A scalable and secure foundation for building modern online stores,
          adhering to industry best practices and the CIA triad principles.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${
                activeTab === feature.id ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setActiveTab(feature.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full p-2 mr-4">
                  {feature.icon}
                </div>
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Additional Considerations</h2>
          <ul className="space-y-4">
            {[
              "Responsive Design: Mobile-first approach for seamless browsing on any device.",
              "SEO Optimization: Best practices to enhance visibility and ranking in search engines.",
              "Payment Integration: Secure gateways like Stripe, Square, or PayPal for smooth transactions.",
              "Analytics and Monitoring: Tools to track user behavior and optimize performance.",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                <ChevronDown className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8">
            Build your secure and scalable e-commerce platform today!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
}
