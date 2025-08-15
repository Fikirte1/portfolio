
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiAward, FiCode, FiCalendar, FiDownload } from 'react-icons/fi';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Float } from '@react-three/drei';

// Experience data
export const experiences = [
  {
    year: 'Sept 2024 - Jan 2025',
    title: 'Full Stack Developer',
    company: 'OmishtuJoy Tech Solutions',
    description: 'Developed web applications using Laravel, React, MySQL, Tailwind CSS, and Bootstrap during an internship, focusing on scalable and responsive solutions.',
    icon: <FiBriefcase className="w-4 h-4" />,
  },
  {
    year: 'Jul 2024 - Sept 2024',
    title: 'MERN Stack Developer',
    company: 'Freelance',
    description: 'Built full-stack applications using React, Node.js, Express, and MongoDB, delivering dynamic and performant user experiences.',
    icon: <FiCode className="w-4 h-4" />,
  },
  {
    year: '2024',
    title: 'Flutter Developer',
    company: 'Freelance',
    description: 'Crafted responsive and interactive mobile applications using Flutter and Firebase, emphasizing modern UI/UX principles.',
    icon: <FiAward className="w-4 h-4" />,
  },
];

// Skills data
export const skills = [
  { name: 'React', level: 90, description: 'Building dynamic and responsive UIs with React and modern JavaScript.' },
  { name: 'Node.js', level: 85, description: 'Creating scalable backend APIs with Node.js and Express.' },
  { name: 'Laravel', level: 80, description: 'Developing robust web applications with Laravel and PHP.' },
  { name: 'MongoDB', level: 75, description: 'Designing NoSQL databases for high-performance applications.' },
  { name: 'Bootstrap', level: 85, description: 'Crafting responsive layouts with Bootstrap.' },
  { name: 'Tailwind CSS', level: 90, description: 'Styling modern interfaces with utility-first Tailwind CSS.' },
  { name: 'Figma', level: 70, description: 'Prototyping and designing UI/UX with Figma.' },
  { name: 'Flutter', level: 65, description: 'Building cross-platform mobile apps with Flutter.' },
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
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm Fikirte, a passionate Full Stack and Flutter developer with expertise in Laravel, Node.js, React, Flutter, Firebase, Tailwind CSS, and Bootstrap. I specialize in building scalable web and mobile applications, while exploring AI and machine learning to create innovative, future-ready solutions. My focus is on delivering clean, efficient code to solve real-world problems.
          </p>
          <motion.a
            href="/Fikirte-Shawul-Res.pdf"
            download
            className="mt-6 inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-primary/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download Fikirte's resume"
          >
            <FiDownload className="mr-2" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in web and mobile development.
          </p>
        </motion.div>
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'} w-full md:w-[45%]`}
            >
              <div className="glass p-6 rounded-xl relative backdrop-blur-md bg-white/20 dark:bg-dark/20 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <motion.div
                  className={`absolute top-6 ${index % 2 === 0 ? '-left-4' : '-right-4'} w-8 h-8 rounded-full flex items-center justify-center text-white ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {exp.icon}
                </motion.div>
                <div className={`${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                  <span className="text-sm font-semibold text-primary dark:text-primary-dark">{exp.year}</span>
                  <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.company}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A snapshot of my technical expertise across web and mobile development.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl relative group hover:shadow-xl transition-all duration-300"
              aria-label={`Skill: ${skill.name}`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                <span className="text-primary dark:text-primary-dark font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-dark-light rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark rounded-full"
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-primary/10 dark:bg-primary-dark/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center p-4">{skill.description}</p>
              </motion.div>
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
            Professional certifications showcasing my commitment to continuous learning.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              className="glass p-6 rounded-xl relative backdrop-blur-md bg-white/20 dark:bg-dark/20 border border-gray-200 dark:border-gray-700 transition-all duration-300"
              aria-label={`Certification: ${cert.title}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark flex items-center justify-center text-xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {cert.icon}
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
                <div>Credential ID: {cert.credential}</div>
              </div>
              {cert.image && (
                <motion.div
                  className="mt-4 relative overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <motion.div
                    className="absolute inset-0 bg-primary/20 dark:bg-primary-dark/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-sm font-semibold">View Certificate</p>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;