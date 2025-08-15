import { motion, useScroll, useTransform ,AnimatePresence} from 'framer-motion';
import { useRef, useState,useEffect } from 'react';
import { FiGithub, FiLinkedin, FiSend,FiCalendar, FiAward ,FiDownload, FiArrowDown, FiStar, FiCode, FiLayout, FiServer, FiDatabase, FiSmartphone, FiSearch, FiMail, FiMapPin,FiPhone, FiGlobe } from 'react-icons/fi';
import HeroBackground from '../components/HeroBackground';
import AnimatedText from '../components/AnimatedText';
import CustomCursor from '../components/Custom';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Float, Center } from '@react-three/drei';
import { experiences, skills,certificates } from './About';
import { services } from './Services';
import { testimonials } from './Testimonials';
import Projects from './Projects'; // Adjust the path if it's in a different folder
// import emailjs from '@emailjs/browser';
import { useForm, ValidationError } from '@formspree/react';
import { FaLaravel, FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { SiMongodb, SiFlutter, SiFirebase, SiCanva } from "react-icons/si";


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     await emailjs.sendForm(
  //       'service_abc123',     // Service ID
  //       'template_xyz456',    // Template ID
  //       formRef.current,      // Ref to your form
  //       'MkkRVmPUw0hhDhCd3'    // Public Key
  //     );
      

  //     setSuccess(true);
  //     setForm({
  //       name: '',
  //       email: '',
  //       subject: '',
  //       message: '',
  //     });
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

const FloatingIcon = ({ Icon, index, baseDelay = 0 }) => (
  <motion.div
    className="absolute text-primary/10"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay: baseDelay + index * 0.2,
    }}
  >
    <motion.div
      animate={{
        y: [-20, 20, -20],
        x: index % 2 === 0 ? [-10, 10, -10] : [10, -10, 10],
        rotate: [0, 360],
      }}
      transition={{
        duration: 10 + index * 2,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        fontSize: `${3 + index}rem`,
      }}
    >
      <Icon />
    </motion.div>
  </motion.div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const roles = ["Full Stack Developer", "Flutter Developer"]; // Add or modify roles here
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [roles.length]);


  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null); // Add this line if you don't have it

  const formRef = useRef(null);

  const FORM_ENDPOINT = "https://formspree.io/f/xeognzpn";
 const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);


 const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        setError('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error("Network error during form submission:", error);
      setError('A network error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };
  // const formRef = useRef(null);


  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  // const blogRef = useRef(null);
  // const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <div className="min-h-screen">
      <CustomCursor />
      
 {/* Hero Section */}
<section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-primary/5 dark:from-dark dark:via-dark-light dark:to-primary/10">

  {/* Animated Logo Watermark */}
  <motion.img
    src="/logo.png"
    alt="Logo Watermark"
    className="absolute inset-0 m-auto opacity-5 w-[80%] h-auto pointer-events-none"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 0.05 }}
    transition={{ duration: 2 }}
  />

  {/* Floating Tech Icons */}
  <div className="absolute inset-0 pointer-events-none">
    {[FaLaravel, FaReact, FaNodeJs, SiMongodb, FaDatabase, SiFlutter, SiFirebase, FaFigma, SiCanva].map((Icon, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%` }}
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon size={32} />
      </motion.div>
    ))}
  </div>

  {/* Hero Content - Split Two Columns */}
  <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

      {/* Left Column: Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Fikirte</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
          Full-stack developer skilled in Laravel, React, Node.js, MongoDB, SQL, Flutter, Firebase, Figma, Canva, and more.
        </p>
        <div className="flex gap-4 mb-8">
          <a href="#projects" className="btn-primary px-6 py-3">View My Work</a>
          <a href="#contact" className="btn-secondary px-6 py-3">Contact Me</a>
        </div>
      </motion.div>

      {/* Right Column: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md mx-auto lg:mx-0"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1.05], rotate: [0, 9, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
        >
          <img
            src="/photo_2025-01-04_11-10-34.jpg"
            alt="Creative Workspace"
            className="w-full h-full object-cover object-center"
            style={{ maxHeight: '600px' }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      </motion.div>

    </div>
  </div>

  {/* Scroll Down Indicator */}
  <motion.button
    onClick={() => scrollToSection(aboutRef)}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="p-2 rounded-full bg-primary/10 backdrop-blur-sm"
    >
      <FiArrowDown className="w-6 h-6 text-primary" />
    </motion.div>
  </motion.button>

</section>



      {/* About Section */}


<section ref={aboutRef} className="py-24 relative overflow-hidden">
  {/* Background Gradient + Shapes */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-light opacity-50" />
  <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-blob -z-10" />
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/10 rounded-full filter blur-2xl animate-blob animation-delay-2000 -z-10" />

  <div className="container mx-auto px-4 relative">
    {/* Header + Intro */}
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
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        I'm a passionate full-stack developer with a keen eye for creating elegant solutions
        to complex problems. I specialize in building scalable and performant applications.
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
    <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
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
    </div>

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
</section>






      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50 dark:bg-dark-light relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Services</h2>
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
                className="glass p-6 rounded-xl group hover:shadow-lg transition-shadow"
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
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-light opacity-50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <h2 className="text-4xl font-bold mb-4">Projects</h2> */}
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
            <Projects />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will be added here */}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {/* <section ref={blogRef} className="py-20 bg-gray-50 dark:bg-dark-light relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Blog</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section ref={testimonialsRef} className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-light opacity-50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here's what my clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 ring-2 ring-primary/20"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.text}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section ref={contactRef} className="py-20 bg-gray-50 dark:bg-dark-light relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
         <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FiMail className="text-primary" size={24} />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      your.email@example.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FiPhone className="text-secondary" size={24} />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +1 (123) 456-7890
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FiMapPin className="text-primary" size={24} />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      City, Country
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Social Media</h2>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
                >
                  <FiLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
                >
                  <FiTwitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass p-6 rounded-xl"
          >
    <h2 className="text-4xl font-bold mb-8 text-center text-primary">Contact Me</h2>
            {success && (
              <p className="text-green-600 text-center mb-4">
                Thank you! Your message has been sent successfully.
              </p>
            )}
           <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
         <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="..."
                />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className=""
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className=""
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          className=""
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full ${loading ? 'bg-gray-400' : 'btn-primary'}`}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {success && (
        <p className="text-green-600 text-center mb-4">
          Thank you! Your message has been sent successfully.
        </p>
      )}
      {error && (
        <p className="text-red-600 text-center mb-4">{error}</p>
      )}
    </form>
  
          </motion.div>
        </div>
        
      </section> */}
      
  <section ref={contactRef} className="py-20 bg-gray-50 dark:bg-dark-light relative">    
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-1">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FiMail className="text-primary" size={24} />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      fikirshawul@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FiPhone className="text-secondary" size={24} />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +251 919437584
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FiMapPin className="text-primary" size={24} />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                     Ethiopia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Social Media</h2>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Fikirte1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
                >
                  <FiLinkedin size={24} />
                </a>
                  <a
                 href="https://t.me/Sh123en"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-light transition-colors"
               >
                 <FiSend size={24} /> {/* Telegram-like icon */}
               </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass p-6 rounded-xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-light border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-light border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-light border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-light border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {success && (
                <p className="text-green-500 text-center">
                  Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home; 