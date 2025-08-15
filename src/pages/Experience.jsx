import { motion } from 'framer-motion';
import { FiAward, FiCalendar } from 'react-icons/fi';

// Certificate Data
export const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2022',
    credential: 'AWS-123456',
    description: 'Mastered designing scalable cloud architectures using AWS services like EC2, S3, and Lambda, optimizing for performance and cost.',
    icon: FiAward,
    image: 'https://drive.google.com/uc?export=view&id=1VHMOcYc8NH8fgV1FkqQljuYxlQoPm-qd', // preview image
    viewLink: 'https://drive.google.com/file/d/1VHMOcYc8NH8fgV1FkqQljuYxlQoPm-qd/view?usp=drive_link', // opens in Google Drive
    downloadLink: 'https://drive.google.com/uc?export=download&id=1VHMOcYc8NH8fgV1FkqQljuYxlQoPm-qd', // direct download
  },
  // ...add other certificates here
];

const Experience = () => (
  <div className="min-h-screen py-20">
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
        {certificates.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
                    {Icon && <Icon className="w-6 h-6" />}
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
              </div>

     {/* Buttons */}
<div className="flex gap-3 mt-4">
  {/* View Certificate */}
  <a
    href={cert.viewLink} // use the certificate's own link
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
  >
    View
  </a>

  {/* Direct Download */}
  <a
    href={cert.downloadLink} // use the certificate's own download link
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
  >
    Download
  </a>
</div>


            </motion.div>
          );
        })}
      </div>
    </section>
  </div>
);

export default Experience;
