import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Tool Department Software',
    description: 'This is the real time software that builds for tool department to predict the production need of tools based on work orders',
    longDescription: "This software that works on the basis of work orders when user enters the work orders and its related tool scedule (A schedule that defines that which tool we need to make this particular products) to make particular product than this will automatically calculate the number of all tools with quanitity of each that are needed to complete this work order with the raw material of different category to complete this work order it also provide the support of ai chatbot to get guidence about are software. and here i also provide a feture of live projects when a department works on a particular project that is related  to the any other department in chain so the other department will be able to see the status of that project.",
    technologies: ['Next.js', 'MongoDB', 'AI', 'Tailwind CSS'],
    category: 'Full Stack',
    liveUrl : '#',
    thumbnail: 'src/public/thumbnail1.png',
    images: [
      'public/images/thumbnail1.png',
      'public/images/image8.png',
      'public/images/image7.png',
      'public/images/image6.png',
      'public/images/image5.png',
      'public/images/image4.png',
      'public/images/image3.png',
      'public/images/image2.png',
      'public/images/image.png'
    ],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    featured: true
  },
  {
    id: 'task-management-app',
    title: 'Sales Management With Ai',
    description: 'Collaborative task management tool with real-time updates and team features',
    longDescription: 'A powerful sales management application designed for retailers. Built with next.js and MongoDB, it offers real-time tracking of sales, graphically representation of revenue and sales, project timelines, predection of market trands with ai, and grouth rate.',
    technologies: ['Next.js', 'MongoDB', 'TypeScript', 'Material-UI'],
    category: 'Full-Stack',
    thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'src/public/image9.png',
      'src/public/image10.png',
      'src/public/image11.png',
      'src/public/image12.png'
    ],
    // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    liveUrl: 'https://growlens.vercel.app/',
    githubUrl: 'https://github.com/yourusername/task-management',
    featured: true
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Analytics Dashboard',
    description: 'Real-time weather monitoring dashboard with data visualization and forecasting',
    longDescription: 'An advanced weather analytics platform that aggregates data from multiple weather APIs to provide comprehensive weather insights. Features interactive maps, historical data analysis, customizable alerts, multi-location tracking, and detailed forecasts. Built with modern data visualization libraries to present complex weather patterns in an intuitive interface.',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Chart.js'],
    category: 'Frontend',
    thumbnail: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    featured: false
  },
  {
    id: 'social-media-api',
    title: 'Social Media REST API',
    description: 'Scalable REST API for social networking with authentication and real-time features',
    longDescription: 'A robust backend API service designed for social media applications. Implements user authentication with JWT, post creation and management, friend connections, real-time messaging with WebSockets, image upload and processing, news feed algorithms, and comprehensive rate limiting. Built with scalability in mind using microservices architecture.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io'],
    category: 'Backend',
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    liveUrl: 'https://api.example-social.com',
    githubUrl: 'https://github.com/yourusername/social-api',
    featured: true
  }
];
