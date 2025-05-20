import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter,FiCalendar, FiAward ,FiDownload, FiArrowDown, FiStar, FiCode, FiLayout, FiServer, FiDatabase, FiSmartphone, FiSearch, FiMail, FiMapPin,FiPhone, FiGlobe } from 'react-icons/fi';
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
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1, 1],
              rotate: [0, 90, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {[FiCode, FiLayout, FiServer].map((Icon, index) => (
              <FloatingIcon 
                key={index} 
                Icon={Icon} 
                index={index} 
                baseDelay={1.5}
                style={{
                  left: `${20 + index * 30}%`,
                  top: `${30 + index * 20}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-left relative"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="glass px-6 py-2 rounded-full text-primary font-semibold backdrop-blur-sm border border-primary/20">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Welcome to my portfolio
                  </motion.span>
                </div>
              </motion.div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                      Hi, I'm{" "}
                    </span>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-primary relative inline-block"
                    >
                      Fikirte
                      <motion.span
                        className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      />
                    </motion.span>
                  </h1>
                  <AnimatedText 
                    text="Full Stack Developer" 
                    className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white text-transparent bg-clip-text" 
                  />
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
              >
                I create beautiful and functional web applications that help businesses grow and succeed in the digital world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  onClick={() => scrollToSection(projectsRef)}
                  className="btn-primary group relative overflow-hidden px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/50 to-purple-500/50"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection(contactRef)}
                  className="btn-secondary group relative overflow-hidden px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">contact me</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
                {/* <motion.a
                  href="#ContactRef"
                  className="btn-secondary group relative overflow-hidden px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Contact Me</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 mt-8"
              >
                {[
                  { icon: FiGithub, link: "https://github.com/Fikirte1", color: "hover:text-[#333]" },
                  { icon: FiLinkedin, link: "https://linkedin.com/in/Fikirte Shawul", color: "hover:text-[#0077b5]" },
                  { icon: FiTwitter, link: "https://twitter.com/yourusername", color: "hover:text-[#1da1f2]" }
                ].map((social, index) => (
                  <motion.a
                    key={social.link}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link relative group ${social.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <social.icon size={24} className="relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-current rounded-full opacity-20"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Workspace Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md mx-auto lg:mx-0"
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1.5],
                  rotate: [0, 9, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
              >
                <img
                  src="/photo_2025-01-04_11-10-34.jpg"
                  alt="Creative Workspace"
                  className="w-full h-full object-cover object-center"
                  style={{ maxHeight: '350px' }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
        </div>

        <motion.button
          onClick={() => scrollToSection(aboutRef)}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="p-2 rounded-full bg-primary/10 backdrop-blur-sm"
          >
            <FiArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.button>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-light opacity-50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm a passionate full-stack developer with a keen eye for creating elegant solutions
              to complex problems. With years of experience in web development, I specialize in
              building scalable and performant applications.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative mb-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'ml-0 md:ml-auto' : 'ml-0 md:mr-auto'
                } md:w-1/2`}
              >
                <div className="glass p-6 rounded-xl relative hover:shadow-lg transition-shadow">
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
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
        
          <div className="glass p-6 rounded-xl">
            <h3 className="text-3xl font-bold text-primary">15+</h3>
            <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
          </div>
          <div className="glass p-6 rounded-xl">
            <h3 className="text-3xl font-bold text-primary">5+</h3>
            <p className="text-gray-600 dark:text-gray-300">Tech Stacks Mastered</p>
          </div>
        </div>
        
        
        
          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="h-2 bg-gray-200 dark:bg-dark-light rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
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
        </div>
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
      
       <section ref={contactRef} className="py-20 relative bg-gray-50 dark:bg-dark-secondary">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Contact Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg shadow-md dark:bg-dark-primary"
          >
            <div className="flex items-center mb-4 text-primary">
              <FiMail className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold dark:text-gray-100">Email</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">fikirte.shawul@example.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg shadow-md dark:bg-dark-primary"
          >
            <div className="flex items-center mb-4 text-primary">
              <FiPhone className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold dark:text-gray-100">Phone</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">+251 919437584</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg shadow-md dark:bg-dark-primary"
          >
            <div className="flex items-center mb-4 text-primary">
              <FiMapPin className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold dark:text-gray-100">Location</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Addis Ababa, Ethiopia</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 rounded-lg shadow-lg p-8 dark:bg-dark-primary"
        >
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Send me a message</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline dark:bg-dark-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline dark:bg-dark-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline dark:bg-dark-secondary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline dark:bg-dark-secondary"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`btn-primary group relative overflow-hidden py-3 px-6 rounded-md font-semibold ${
                loading ? 'cursor-wait' : ''
              }`}
              disabled={loading}
            >
              <span className="relative z-10">{loading ? 'Sending...' : 'Send Message'}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/50 to-purple-500/50"
                initial={{ x: "-100%" }}
                animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                transition={{ duration: 0.5 }}
              />
            </button>

            {success && (
              <div className="text-green-500 mt-4">Thank you! Your message has been sent.</div>
            )}
            {error && (
              <div className="text-red-500 mt-4">{error}</div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default Home; 