import { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectDetailProps {
  projectId: string;
  onNavigate: (page: string) => void;
}

export default function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const project = projects.find(p => p.id === projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => onNavigate('projects')}
            className="text-blue-600 hover:underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => onNavigate('projects')}
          className="flex items-center space-x-2 text-blue-600 dark:text-cyan-400 hover:underline mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          <div className="relative h-100 bg-gradient-to-br from-blue-600 to-cyan-500 overflow-hidden">
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setLightboxOpen(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h1>
                  {project.featured && (
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Category</h3>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{project.category}</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies</h3>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{project.technologies.length} Used</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Status</h3>
                <p className="text-lg font-medium text-green-600 dark:text-green-400">Completed</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About This Project</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setLightboxOpen(true);
                    }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="max-w-full max-h-[90vh] object-contain"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
