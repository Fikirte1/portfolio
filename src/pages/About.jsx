
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiBriefcase, FiAward, FiCode, FiCalendar, FiDownload } from 'react-icons/fi';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Float } from '@react-three/drei';

// Experience data
export const experiences = [
  {
    year: '2025 - Present',
    title: 'Software Engineer',
    company: 'Dallol Tech PLC',
    description:
      'Developing enterprise ERP systems, government digital platforms, commercial booking systems, and Flutter mobile applications using CodeIgniter, Laravel, PostgreSQL, REST APIs, and modern web technologies. Mentoring interns and participating in the complete Software Development Life Cycle.',
    icon: <FiBriefcase className="w-4 h-4" />,
  },
  {
    year: 'Sept 2024 - Jan 2025',
    title: 'Full Stack Developer Intern',
    company: 'Omishtu Joy Tech Solutions',
    description:
      'Developed Survey System and SaaS Asset Management platform using Laravel, MySQL, Blade, Bootstrap, Tailwind CSS, and REST APIs while collaborating in Agile teams.',
    icon: <FiCode className="w-4 h-4" />,
  },
  {
    year: 'Jul 2024 - Sept 2024',
    title: 'MERN Stack Developer',
    company: 'Omishtu Joy Tech Solutions',
    description:
      'Developed scalable backend services and e-commerce solutions using Go (Golang), React, Node.js, Express, MongoDB, and GORM with a focus on performance and clean architecture.',
    icon: <FiAward className="w-4 h-4" />,
  },
];
// Skills data
export const skills = [
  { name: 'Laravel', level: 95 },
  { name: 'CodeIgniter', level: 95 },
  { name: 'Go (Golang)', level: 85 },
  { name: 'React.js', level: 90 },
  { name: 'Flutter', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'PostgreSQL', level: 90 },
  { name: 'MySQL', level: 90 },
  { name: 'MongoDB', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Bootstrap', level: 95 },
  { name: 'Git', level: 90 },
];
// Certificates data
export const certificates = [
  {
    title: 'Certified MERN Stack Developer',
    issuer: 'OmishtuJoy Tech Solutions',
    date: 'Sept 2022',
    credential: 'OMJ-MERN-2022-001',
    icon: <FiAward className="w-6 h-6" />,
    image: '/photo_2025-03-06_08-51-46.jpg',
  },
  {
    title: 'Certified Laravel Developer',
    issuer: 'OmishtuJoy Tech Solutions',
    date: 'Dec 2025',
    credential: 'OMJ-LAR-2025-002',
    icon: <FiAward className="w-6 h-6" />,
    image: '/photo_2025-03-06_08-52-15.jpg',
  },
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const yBackground = useTransform(scrollYProgress, [0, 0.5], ['0%', '10%']);
  const opacityBackground = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-50 to-white dark:from-dark-light dark:to-dark">
      {/* Hero Background with 3D Canvas */}
      <motion.div
        style={{ y: yBackground, opacity: opacityBackground }}
        className="absolute inset-0 z-0"
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
          <Float speed={1} rotationIntensity={0.5}>
            <mesh>
              <icosahedronGeometry args={[0.5, 0]} />
              <meshStandardMaterial color="#3b82f6" wireframe />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
      </motion.div>
       <div className="container mx-auto px-4 py-20 relative z-10">
 <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        About Me
      </h2>
<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
  I am a Software Engineer at <span className="font-semibold text-primary">Dallol Tech PLC</span> with nearly one year of professional experience designing, developing, and maintaining enterprise-grade web and mobile applications. My expertise includes Laravel, CodeIgniter, Go (Golang), React, Flutter, Node.js, PostgreSQL, MySQL, MongoDB, and RESTful API development. I have contributed to ERP systems, government digital infrastructure, commercial booking platforms, and cross-platform mobile applications while working in Agile teams. Passionate about clean architecture, scalable software, and intuitive user experiences, I continuously explore modern technologies to deliver reliable and high-performance solutions. I also mentor intern developers through the Software Development Life Cycle (SDLC), conduct code reviews, and promote best development practices. To improve productivity while maintaining code quality, I effectively utilize AI-powered development tools including Cursor, GitHub Copilot, ChatGPT, and DeepSeek. My goal is to build innovative software that solves real-world problems and creates meaningful impact.
</p>
      <motion.a
        href="/Fikirte-Shawul-Res.pdf"
        download
        className="mt-6 inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg hover:shadow-primary/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Download Fikirte's Resume"
      >
        <FiDownload className="mr-2" />
        Download CV
      </motion.a>
    </motion.div>

    {/* Experience Timeline */}
    <div className="relative mb-20">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.year}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'ml-0 md:ml-auto' : 'ml-0 md:mr-auto'}`}
        >
          <div className="glass p-6 rounded-xl relative hover:shadow-xl transition-shadow">
            <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-lg">
              {exp.icon}
            </div>
            <div className="ml-4">
              <span className="text-sm text-primary font-semibold">{exp.year}</span>
              <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Stats Section */}
   {/* <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      {[
        { value: '15+', label: 'Projects Completed' },
        { value: '5+', label: 'Tech Stacks Mastered' },
        { value: '3+', label: 'Years Experience' }
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="glass p-6 rounded-xl hover:shadow-lg transition-shadow"
        >
          <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
          <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
        </motion.div>
      ))}
    </div>*/}

    {/* Skills Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-xl hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between mb-2">
            <span className="font-semibold">{skill.name}</span>
            <span className="text-primary">{skill.level}%</span>
          </div>
          <div className="h-3 bg-gray-200 dark:bg-dark-light rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
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
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        Certifications
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
          className="glass p-6 rounded-xl hover:shadow-xl transition-shadow flex flex-col justify-between"
        >
          <div>
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
                    className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer"
                    onClick={() => setSelectedCertIndex(index)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Google Drive View Button */}
          {cert.googleDriveLink && (
            <motion.a
              href={cert.googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-primary/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.a>
          )}

          {/* New Modal View Button */}
          <motion.button
            onClick={() => setSelectedCertIndex(index)}
            className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-ful hover: bg-primary-700 transition-colors shadow-md hover:shadow-purple-400/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View in Modal
          </motion.button>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Modal Carousel */}
  <AnimatePresence>
    {selectedCertIndex !== null && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        onClick={() => setSelectedCertIndex(null)}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="bg-white dark:bg-dark p-6 rounded-2xl shadow-xl max-w-lg w-full relative flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedCertIndex(null)}
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 font-bold text-xl"
          >
            ×
          </button>

          <h3 className="text-2xl font-bold mb-2">{certificates[selectedCertIndex].title}</h3>
          <img
            src={certificates[selectedCertIndex].image}
            alt={certificates[selectedCertIndex].title}
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
          />

          <motion.div className="flex justify-between w-full mt-2">
            <button
              onClick={() =>
                setSelectedCertIndex(
                  (prev) => (prev === 0 ? certificates.length - 1 : prev - 1)
                )
              }
              className="px-4 py-2 bg-primary text-white rounded-full"
            >
              Prev
            </button>
            <button
              onClick={() =>
                setSelectedCertIndex(
                  (prev) => (prev === certificates.length - 1 ? 0 : prev + 1)
                )
              }
              className="px-4 py-2 bg-primary text-white rounded-full"
            >
              Next
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  </div>
  );
};

export default About;