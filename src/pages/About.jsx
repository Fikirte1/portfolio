import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCode, FiCalendar } from 'react-icons/fi';

// Experience data
export const experiences = [
  {
    year: '2025 - Present ',
    title: 'Full Stack Developer',
    company:'OmishtuJoy Tech solutions',
    description: 'Internship Laravel using Laravel,React,mysql,tailwind,bootstrap',
    icon: <FiBriefcase className="w-4 h-4" />
  },
  {
    year: '2021 - 2023',
    title: 'Mern Stack Developer',
    description: 'react,node,express,mongodb',
    icon: <FiCode className="w-4 h-4" />
  },
  {
    year: '2019 - 2021',
    title: 'Flutter Developer',
    company:'Freelance',    
    description: 'Built responsive and interactive user interfaces using Flutter, firebase and modern UI principles.',
    icon: <FiAward className="w-4 h-4" />
  },
];

// Skills data
export const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Laravel', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Bootstrap', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Figma', level: 70 },
  { name: 'Flutter', level: 65 }
];

export const certificates = [
  {
    title: 'Certified Mern Stack Developer',
    // issuer: 'Amazon Web Services',
    date: 'Sept 2022',
    credential: 'AWS-123456',
    icon: <FiAward />,
    image: 'photo_2025-03-06_08-51-46.jpg',
  },
  // {
  //   title: 'Professional Full Stack Developer',
  //   issuer: 'Meta',
  //   date: 'Aug 2024',
  //   credential: 'META-789012',
  //   icon: <FiAward />,
  //   image: '/photo_2025-03-06_08-52-15.jpg',
  // },
  {
    title: 'Certified Laravel Developer',
    // issuer: 'Google',
    date: 'dec 2025',
    credential: 'GCP-345678',
    icon: <FiAward />,
    image: '/photo_2025-03-06_08-52-15.jpg',
  }
];

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with a keen eye for creating elegant solutions
            to complex problems. With years of experience in web development, I specialize in
            building scalable and performant applications.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 dark:bg-primary-dark/20" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
              } w-full md:w-1/2`}
            >
              <div className="glass p-6 rounded-xl relative">
                <div className={`absolute -left-3 top-6 w-6 h-6 rounded-full flex items-center justify-center text-white ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}>
                  {exp.icon}
                </div>
                <div className="ml-8">
                  <span className="text-sm text-primary font-semibold">{exp.year}</span>
                  <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
           <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical skill set at a glance.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-dark-light rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-primary dark:bg-primary-dark rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements in technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark flex items-center justify-center text-xl">
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
                {cert.image && (
                  <div className="mt-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
     
      </div>
    </div>
  );
};

export default About;