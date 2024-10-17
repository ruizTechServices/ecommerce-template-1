import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// Ensure to import the icon

export function AccordionComponent() {
  const features = [
    {
      title: "Design with ShadCN and AcerternityUI",
      description:
        "This template leverages the power of ShadcnUI and AcerternityUI frameworks to provide a consistent and modern design language. ShadcnUI offers a collection of beautifully designed, accessible components that can be easily customized to fit your project's needs. AcerternityUI complements this with its set of high-quality, ready-to-use UI components and animations. Together, they enable rapid development of visually appealing and responsive user interfaces, ensuring a polished look across your entire application.",
    },
    {
      title: "Heroku, Google Cloud, and Vercel Deployment",
      description:
        "This template supports deployment to popular cloud platforms such as Heroku, Google Cloud, and Vercel. These services offer robust hosting solutions, enabling rapid deployment and easy scalability for your application. Each platform provides its own set of tools and integrations, allowing you to choose the best fit for your project's needs. Note that while the template facilitates deployment, you may need to account for any associated costs from these cloud service providers.",
    },
    {
      title: "Supabase, Redis, Google Cloud",
      description:
        "This template supports deployment to popular cloud platforms such as Heroku, Google Cloud, and Vercel. These services offer robust hosting solutions, enabling rapid deployment and easy scalability for your application. Each platform provides its own set of tools and integrations, allowing you to choose the best fit for your project's needs. Note that while the template facilitates deployment, you may need to account for any associated costs from these cloud service providers.",
    },
    {
      title: "Accessibility and Performance",
      description:
        "Built with accessibility in mind, adhering to WAI-ARIA standards, and optimized for performance.",
    },
    {
      title: "Fast Modification & Deployment",
      description:
        "To make things faster, I have added comments throughout the code, making it easier for you to understand and modify the codebase. Additionally, I have provided instructions for deploying the template on various platforms, including Heroku, Google Cloud, and Vercel. These instructions will guide you through the process of deploying your application, ensuring a smooth and efficient deployment experience.",
    },
  ];

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-6">Template Features</h2>

      {/* Accordion Component */}
      <Accordion type="single" collapsible className="w-full">
        {features.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="flexitems-center space-x-2">
              <span>{item.title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <p>{item.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
