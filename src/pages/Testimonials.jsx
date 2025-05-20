import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

// Testimonials data
export const testimonials = [
  {
    name: 'John Smith',
    position: 'CEO, TechStart',
    text: 'Working with this developer was an absolute pleasure. They delivered beyond our expectations and helped us create a beautiful, functional website that drives results.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Sarah Johnson',
    position: 'Product Manager, InnovateCorp',
    text: 'The attention to detail and technical expertise was impressive. They helped us optimize our application performance and improve user experience significantly.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Michael Chen',
    position: 'CTO, DataFlow',
    text: 'A true professional who understands both technical requirements and business needs. Their solutions are scalable and maintainable.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Emily Davis',
    position: 'Design Director, CreativeHub',
    text: 'The collaboration was seamless. They implemented our designs perfectly and added valuable technical insights to improve the final product.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'David Wilson',
    position: 'Founder, StartupX',
    text: 'Exceptional work on our mobile app. The code quality and documentation were outstanding, making future maintenance a breeze.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    name: 'Lisa Anderson',
    position: 'Marketing Director, GrowthCo',
    text: 'They helped us create a stunning website that perfectly represents our brand. The performance optimization was impressive.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
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
              className="glass p-6 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the list of satisfied clients and let's create something amazing together.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials; 