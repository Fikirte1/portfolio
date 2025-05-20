import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCalendar } from 'react-icons/fi';

// Experience Data
export const experiences = [
  {
    year: '2021 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading development of enterprise web applications using React and Node.js.',
    icon: <FiBriefcase />
  },
  {
    year: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'Digital Innovations',
    description: 'Developed responsive web applications and improved UI/UX.',
    icon: <FiBriefcase />
  },
  {
    year: '2017 - 2019',
    title: 'Web Developer',
    company: 'Creative Agency',
    description: 'Built custom websites and implemented client requirements.',
    icon: <FiBriefcase />
  }
];

// Certificate Data
export const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2022',
    credential: 'AWS-123456',
    icon: <FiAward />,
    image: '/photo_2025-03-06_08-52-15.jpg',
  },
  {
    title: 'Professional Full Stack Developer',
    issuer: 'Meta',
    date: 'Aug 2022',
    credential: 'META-789012',
    icon: <FiAward />,
    image: '/photo_2025-03-06_08-52-15.jpg',
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google',
    date: 'Mar 2022',
    credential: 'GCP-345678',
    icon: <FiAward />,
    image: '/photo_2025-03-06_08-52-15.jpg',
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen py-20">
      {/* Experience Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey in the tech industry and professional achievements.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
              }`}
            >
              <div className="glass p-6 rounded-xl relative hover:shadow-lg transition-shadow">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
                  {exp.icon}
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    <FiCalendar />
                    <span>{exp.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements in technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
                <div>Credential ID: {cert.credential}</div>
                <div className="mt-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
