"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Lock, Shield, Zap } from "lucide-react";
import { AccordionComponent } from "./Accordion";

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
          className="text-4xl md:text-8xl font-bold text-center mb-8"
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
          A scalable and secure, programmatical foundation for building modern online stores,
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

        {/* <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Template Features</h2>
          <ul className="space-y-4">
            {[
              { title: "Design with ShadCN and AcerternityUI" },
              { description: "desc" },
              { title: "Heroku, Google Cloud, and Vercel Deployment" },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                {item.title && (
                  <ChevronDown className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                )}
                <div>
                  {item.title && (
                    <span className="font-semibold">{item.title}</span>
                  )}
                  {item.description && (
                    <span className="">{item.description}</span>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div> */}

        <AccordionComponent />
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
          <a
            href="https://github.com/ruizTechServices/ecommerce-template-1.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            View on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}
