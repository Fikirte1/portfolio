import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'TaskManagement mern stack',
    description: 'A full-stack web application built with React and Node.js',
    image: 'Screenshot (979).png',
    tags: ['React', 'Node.js', 'MongoDB','Full Stack'],
    github: 'https://github.com/Fikirte1/TaskManagement',
    demo: 'https://project1.com',
  },
  {
    id: 2,
    title: 'Survey website',
    description: 'Survey System user website built with laravel',
    image: 'Screenshot (959).png',
    tags: ['Laravel', 'full stack'],
    github: 'https://github.com/Fikirte1/survey',
    demo: 'https://project2.com',
  },
  {
    id: 3,
    title: 'Survey System',
    description: 'A survey System admin  built with laravel.',
    image: 'Screenshot (961).png',
    tags: [ 'Backend','Laravel','full stack'],
    github: 'https://github.com/Fikirte1/survey',
    demo: 'https://project3.com',
  },
  {
    id: 4,
    title: 'figma  deign',
    description: 'Figma website design .',
    image: 'Mnas.png',
    tags: ['UI Design'],
    github: 'https://figma.com',
    demo: 'https://figma.com',
  },
   {
    id: 5,
    title: 'website deign',
    description: 'canva website design',
    image: 'photo_2024-11-16_20-53-38.jpg',
    tags: [ 'UI Design'],
    github: 'https://canva.com',
    demo: 'https://figma.com',
  },
  {
    id: 6,
    title: 'juice website',
    description: 'A juice website  UI.',
    image: 'Screenshot (980).png',
    tags: ['javascript', 'Frontend'],
    github: 'https://github.com/Fikirte1/penny',
    demo: 'https://food-delivery-app-demo.com',
  },
 {
    id: 7,
    title: 'Food Delivery App with Flutter and firebase',
    description: 'A mobile food delivery application UI.',
    image: 'Screenshot (1007).png',
    tags: ['firebase', 'Flutter'],
    github: 'https://github.com/Fikirte1/FoodDeliveryApp',
    demo: 'https://food-delivery-app-demo.com',
  },
   {
    id: 8,
    title: 'Asset Management System',
    description: 'laravel and react team collabration project',
    image: 'Screenshot (963).png',
    tags: ['React','Laravel', 'Frontend','Backend','full stack'],
    github: 'https://github.com/Fikirte1/FoodDeliveryApp',
    demo: 'https://food-delivery-app-demo.com',
  },
   {
    id: 9,
    title: 'Mekaup School system',
    description: 'Mern Stack Makeup Training school system',
    image: 'photo_2024-11-27_14-11-45.jpg',
    tags: ['React', 'Frontend','Backend','Full Stack'],
    github: 'https://github.com/Fikirte1/FoodDeliveryApp',
    demo: 'https://food-delivery-app-demo.com',
  },
  
  // Add more projects as needed
];

const categories = ['All', 'React', 'Full Stack', 'Frontend', 'Laravel','Flutter','firebase', 'UI Design'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projects.filter((project) =>
    selectedCategory === 'All' || project.tags.includes(selectedCategory)
  );

  const categoryCounts = categories.reduce((acc, category) => {
    if (category === 'All') {
      acc[category] = projects.length;
    } else {
      acc[category] = projects.filter(p => p.tags.includes(category)).length;
    }
    return acc;
  }, {});

  const handleViewDetails = (projectId) => {
    console.log(`View details for project ID: ${projectId}`);
    // Here you would typically open a modal or navigate to a details page
  };

  return (
    <div className="section pt-24">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-dark-light text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark'
              }`}
            >
              {category} {categoryCounts[category] !== undefined && category !== 'All' ? `(${categoryCounts[category]})` : (category === 'All' ? `(${categoryCounts[category]})` : '')}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      <FiGithub size={24} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      <FiExternalLink size={24} />
                    </a>
                    <button
                      onClick={() => handleViewDetails(project.id)}
                      className="bg-primary text-white rounded-md py-2 px-4 hover:bg-primary-dark transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-dark-light text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;