import { Code2, Database, Palette, Zap, Globe, Smartphone, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const skills = [
    { category: 'Frontend', icon: Code2, items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'], color: 'from-blue-600 to-cyan-500' },
    { category: 'Backend', icon: Database, items: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'n8n'], color: 'from-cyan-600 to-blue-500' },
    { category: 'DevOps', icon: Zap, items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Git', 'Linux'], color: 'from-blue-600 to-green-500' },
    { category: 'Design', icon: Palette, items: ['Figma', 'UI/UX', 'Responsive Design', 'Accessibility', 'Animation', 'Prototyping'], color: 'from-cyan-500 to-green-500' },
    { category: 'Tools', icon: Globe, items: ['VS Code', 'Postman', 'Jira', 'Webpack', 'Vite', 'n8n'], color: 'from-green-500 to-blue-600' }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Fresher',
      period: '2025 - Present',
      description: 'Exploring the different diamontion of web development and software enginerring.',
      achievements: [
        'got the opportunity to create software for the tool department of a stabilized company.',
        'trannie at the Infobeans Foundation Indore.',
      ]
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '1+', icon: TrendingUp },
    { label: 'Projects Completed', value: '5+', icon: Award },
    { label: 'Technologies', value: '7+', icon: Code2 },
    { label: 'Happy Clients', value: '1+', icon: Globe }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate software developer with a proven track record of transforming ideas into reality through clean, efficient code
          </p>
        </div>

         {/* Profile Section */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <img
            src="src/public/Profile.jpg"
            alt="Harshit Kumbhkar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover shadow-md"
          />
          <h1 className="text-2xl font-bold">Harshit Kumbhkar</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            BCA Student, Holkar Science College, Indore
          </p>
        </div>

        {/* Details Section */}
        <div className="mt-6 space-y-3 text-center">
          <p>
            <span className="font-semibold">Mobile:</span> +91 9039140984
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            harshitkumbhkar1@example.com
          </p>
          <p>
            <span className="font-semibold">Educational Status:</span> Pursuing
            BCA (5th Semester)
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-6 border-t border-gray-300 dark:border-blue-700"></div>
        <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
          © 2025 Harshit Kumbhkar. All rights reserved.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Professional Journey</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center mb-4`}>
                  <skillGroup.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Problem Solver at Heart</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            I thrive on tackling complex challenges and building solutions that make a real impact.
            With a strong foundation in both frontend and backend development, I approach every project
            with a focus on scalability, maintainability, and user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
