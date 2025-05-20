import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = '', delay = 0 }) => {
  return (
    <div className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + index * 0.05 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-1 h-6 ml-1 bg-primary"
        animate={{
          opacity: [1, 0, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  );
};

export default AnimatedText; 