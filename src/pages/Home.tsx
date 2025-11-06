import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Database, Palette } from 'lucide-react';
import { projects } from '../data/projects';

interface HomeProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Code2 size={48} className="text-blue-600" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Software Developer
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Turning complex problems into elegant solutions with clean, efficient code
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://github.com/Harshit-prajapti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-transform"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/harshit-kumbhkar-7b07a4305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition-transform"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:scale-105 transition-transform"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </button>
            </div>

            <button className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        <div className="absolute mt-5 bottom-0   left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-600 dark:border-cyan-400 rounded-full p-1">
            <div className="w-1.5 h-3 bg-blue-600 dark:bg-cyan-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Core Competencies
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A comprehensive skill set spanning modern web technologies and best practices
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Frontend Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Building responsive, accessible, and performant user interfaces with modern frameworks
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-cyan-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Designing scalable APIs and database architectures for robust applications
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'MongoDB', 'REST APIs','node.js', 'n8n'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-cyan-50 dark:from-gray-800 dark:to-green-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Creating intuitive user experiences with attention to detail and accessibility
              </p>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Responsive Design', 'Animation', 'Prototyping'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Practical implementations showcasing problem-solving abilities and technical expertise
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('project-detail', project.id)}
                    className="flex items-center space-x-2 text-blue-600 dark:text-cyan-400 hover:underline font-medium"
                  >
                    <span>View Details</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:scale-105 transition-transform font-medium"
            >
              <span>View All Projects</span>
              <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
