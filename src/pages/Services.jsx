import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiDatabase, FiSmartphone, FiSearch, FiDribbble } from 'react-icons/fi';

// Services data
export const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: <FiCode className="w-8 h-8" />,
    features: [
      'Responsive Design',
      'Performance Optimization',
      'Cross-browser Compatibility',
      'Modern UI/UX'
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Beautiful and interactive user interfaces that engage your users.',
    icon: <FiLayout className="w-8 h-8" />,
    features: [
      'React Development',
      'Component Architecture',
      'State Management',
      'Animation & Transitions'
    ]
  },
  {
    title: 'Backend Development',
    description: 'Scalable and secure server-side solutions for your applications.',
    icon: <FiServer className="w-8 h-8" />,
    features: [
      'API Development',
      'Database Design',
      'Authentication & Authorization',
      'Cloud Integration'
    ]
  },
  {
    title: 'Database Solutions',
    description: 'Efficient data management and storage solutions for your business.',
    icon: <FiDatabase className="w-8 h-8" />,
    features: [
      'Database Design',
      'Query Optimization',
      'Data Migration',
      'Backup & Recovery'
    ]
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications that work seamlessly.',
    icon: <FiSmartphone className="w-8 h-8" />,
    features: [
      'Flutter',
      'Mobile UI/UX',
      'App Store Deployment'
    ]
  },
  {
    title: 'Figma Design',
    description: 'Modern and clean UI designs crafted in Figma for seamless development handoff.',
    icon: <FiDribbble className="w-8 h-8" />,
    features: [
      'UI/UX Wireframes',
      'Prototyping',
      'Component Systems',
      'Developer Handoff'
    ]
  },
   {
    title: 'Laravel',
    description: 'Modern and clean UI designs crafted in Figma for seamless development handoff.',
    icon: <FiLayout className="w-8 h-8" />,
    features: [
      'UI/UX Wireframes',
      'Prototyping',
      'Component Systems',
      'Developer Handoff'
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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a comprehensive range of web development services to help you build
            the perfect digital solution for your business.
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
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Contact me to discuss your project
            and get a free consultation.
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