import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiLayout, 
  FiServer, 
  FiDatabase, 
  FiSmartphone, 
  FiGlobe, 
  FiDribbble 
} from 'react-icons/fi';

// Services data
export const services = [
  {
    title: 'Web Development',
    description: 'High-quality custom websites and web applications built with modern frameworks, optimized for speed, security, and scalability.',
    icon: <FiCode className="w-8 h-8" />,
    features: [
      'Responsive & Mobile-First Design',
      'Performance Optimization',
      'Cross-browser Compatibility',
      'SEO-Friendly Code'
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Visually stunning and highly interactive user interfaces that deliver seamless user experiences.',
    icon: <FiLayout className="w-8 h-8" />,
    features: [
      'React.js Development',
      'Component-Based Architecture',
      'State Management',
      'Smooth Animations & Transitions'
    ]
  },
  {
    title: 'Backend Development',
    description: 'Secure, reliable, and scalable server-side solutions that power your digital products.',
    icon: <FiServer className="w-8 h-8" />,
    features: [
      'RESTful & GraphQL API Development',
      'Authentication & Authorization',
      'Cloud & Server Deployment',
      'Integration with Third-Party Services'
    ]
  },
  {
    title: 'Database Solutions',
    description: 'Efficient and well-structured data storage solutions to handle all your business information.',
    icon: <FiDatabase className="w-8 h-8" />,
    features: [
      'Database Schema Design',
      'Query Performance Optimization',
      'Data Migration & Backup',
      'Data Recovery Solutions'
    ]
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps that look and feel native on both iOS and Android.',
    icon: <FiSmartphone className="w-8 h-8" />,
    features: [
      'Flutter Development',
      'Intuitive Mobile UI/UX',
      'App Store & Play Store Deployment'
    ]
  },
  {
    title: 'UI/UX & Figma Design',
    description: 'Beautiful, user-focused designs created in Figma for smooth collaboration with developers.',
    icon: <FiDribbble className="w-8 h-8" />,
    features: [
      'UI/UX Wireframes & Prototypes',
      'Component Libraries',
      'Interactive Mockups',
      'Developer-Ready Handoff'
    ]
  },
  {
    title: 'Laravel Development',
    description: 'Robust backend development using Laravel, perfect for secure, scalable, and feature-rich applications.',
    icon: <FiLayout className="w-8 h-8" />,
    features: [
      'Full-Stack Laravel Solutions',
      'REST API Development',
      'Database Management',
      'Authentication & Security'
    ]
  },
  {
    title: 'Multi-Language & Localization',
    description: 'Expand your reach globally with multi-language support and culturally adapted content for websites and applications.',
    icon: <FiGlobe className="w-8 h-8" />,
    features: [
      'Multi-Language Website Setup',
      'Language Switcher Integration',
      'Translation & Localization',
      'RTL (Right-to-Left) Language Support'
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From crafting beautiful websites to building powerful applications, 
            I provide end-to-end solutions tailored to your needs — including multi-language support 
            to connect you with a global audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether it’s a modern website, a mobile app, or a multi-language platform, 
            I can help bring your vision to life. Let’s create something impactful together.
          </p>
          <a href="/#ContactRef" className="btn-primary">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
