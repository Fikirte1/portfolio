# Modern Portfolio Website

A beautiful and responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features include dark/light mode, smooth animations, 3D elements, and a contact form with email integration.

## Features

- 🎨 Modern UI/UX with glassmorphism design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎮 Interactive 3D elements with Three.js
- 📝 Blog section with filtering
- 📬 Contact form with EmailJS integration
- 🖼️ Project showcase with filtering
- 🔍 SEO optimized

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- EmailJS
- React Router DOM
- React Icons

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

1. Update personal information in the components:
   - `src/pages/Home.jsx`: Update your name, bio, and social links
   - `src/pages/Projects.jsx`: Add your projects
   - `src/pages/Blog.jsx`: Add your blog posts
   - `src/pages/Contact.jsx`: Update contact information

2. Customize the theme colors in `tailwind.config.js`

3. Add your own images to the `public` directory

## Deployment

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy the `dist` directory to your preferred hosting service (Netlify, Vercel, etc.)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
