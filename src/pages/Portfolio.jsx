import { useState } from 'react'
import { ExternalLink, Github, Eye, Tag, Calendar, Users, ArrowRight } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive online shopping platform built for scalability and user experience. Features include advanced product management, secure payment processing, inventory tracking, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'Responsive design for all devices',
        'Advanced search and filtering',
        'Secure payment processing',
        'Admin dashboard',
        'Analytics and reporting'
      ],
      duration: '3 months',
      team: 'Solo',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 2,
      title: 'FitTrack Pro - Mobile App',
      description: 'A cross-platform fitness tracking application that helps users monitor workouts, track nutrition, and achieve fitness goals. Features social sharing, progress visualization, and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux', 'Native APIs'],
      features: [
        'Workout tracking and planning',
        'Nutrition logging',
        'Progress analytics',
        'Social features',
        'Offline functionality'
      ],
      duration: '4 months',
      team: 'Solo',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 3,
      title: 'TeamFlow - Project Management Platform',
      description: 'A collaborative project management solution designed for remote teams. Features real-time collaboration, task management, time tracking, and comprehensive reporting tools.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      category: 'web',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'WebSocket', 'Docker'],
      features: [
        'Real-time collaboration',
        'Task and milestone tracking',
        'Time and resource management',
        'Advanced reporting',
        'Integration APIs'
      ],
      duration: '5 months',
      team: '3 developers',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 4,
      title: 'Bella Vista Restaurant Website',
      description: 'A modern, responsive website for an upscale restaurant featuring online reservations, menu management, and customer testimonials. Designed to enhance the dining experience and increase bookings.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=center',
      category: 'web',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      features: [
        'Online reservation system',
        'Dynamic menu management',
        'Customer reviews',
        'Mobile-first design',
        'SEO optimization'
      ],
      duration: '2 months',
      team: 'Solo',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 5,
      title: 'SecureBank Mobile App Design',
      description: 'Complete UI/UX design for a modern banking application focusing on security, accessibility, and user experience. Includes wireframes, prototypes, and design systems.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center',
      category: 'design',
      technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle'],
      features: [
        'User research and personas',
        'Information architecture',
        'Wireframing and prototyping',
        'Design system creation',
        'Usability testing'
      ],
      duration: '2 months',
      team: 'Solo',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 6,
      title: 'LearnHub - E-Learning Platform',
      description: 'A comprehensive online learning management system featuring course creation, student progress tracking, interactive assessments, and multimedia content support.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center',
      category: 'web',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Redis', 'AWS S3'],
      features: [
        'Course management system',
        'Video streaming and hosting',
        'Interactive quizzes',
        'Progress tracking',
        'Analytics dashboard'
      ],
      duration: '6 months',
      team: '4 developers',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 7,
      title: 'Smart Home IoT Dashboard',
      description: 'An intelligent home automation system with real-time monitoring, automated controls, and energy optimization. Features include smart device integration, voice commands, and mobile app control.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center',
      category: 'iot',
      technologies: ['Python', 'Raspberry Pi', 'MQTT', 'React', 'Node.js', 'MongoDB'],
      features: [
        'Real-time device monitoring',
        'Automated scheduling',
        'Energy usage analytics',
        'Voice control integration',
        'Mobile app control'
      ],
      duration: '6 months',
      team: '2 developers',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 8,
      title: 'AI-Powered Chatbot Platform',
      description: 'A conversational AI platform that helps businesses automate customer support. Features natural language processing, sentiment analysis, and seamless integration with existing systems.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI', 'PostgreSQL', 'Docker'],
      features: [
        'Natural language processing',
        'Sentiment analysis',
        'Multi-language support',
        'Integration APIs',
        'Analytics dashboard'
      ],
      duration: '4 months',
      team: 'Solo',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 9,
      title: 'PDF Summarize AI Chatbot',
      description: 'An intelligent AI-powered chatbot that analyzes and summarizes PDF documents in real-time. Features include document processing, natural language understanding, and interactive chat interface for document insights.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
      category: 'ai',
      technologies: ['Python', 'OpenAI GPT', 'LangChain', 'Streamlit', 'PyPDF2', 'NLTK'],
      features: [
        'PDF document processing',
        'AI-powered summarization',
        'Interactive chat interface',
        'Multi-language support',
        'Document analysis insights'
      ],
      duration: '3 months',
      team: 'Solo',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 10,
      title: 'Portfolio Website (This Site)',
      description: 'A modern, responsive portfolio website showcasing professional work and skills. Built with React, Tailwind CSS, and modern web technologies for optimal performance and user experience.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'Responsive Design'],
      features: [
        'Modern responsive design',
        'Interactive portfolio showcase',
        'Contact form integration',
        'SEO optimized',
        'Fast loading performance'
      ],
      duration: '2 weeks',
      team: 'Solo',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'iot', label: 'IoT & Hardware' },
    { id: 'ai', label: 'AI & Machine Learning' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen">
                   {/* Header */}
      <section className="strong-bg-gradient py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full animate-pulse opacity-20"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full animate-bounce opacity-30" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-blue-300 rounded-lg animate-spin" style={{ animationDuration: '15s' }}></div>
        </div>
        
        <div className="container text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Showcasing innovative solutions and successful projects across different technologies and industries.
          </p>
          
          {/* Animated Underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6 animate-expand-width"></div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
                             <button
                 key={filter.id}
                 onClick={() => setActiveFilter(filter.id)}
                 className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                   activeFilter === filter.id
                     ? 'bg-primary-600 text-white shadow-lg scale-105'
                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                 }`}
               >
                 {/* Ripple Effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                 {/* Animated Border */}
                 <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                   activeFilter === filter.id 
                     ? 'ring-2 ring-primary-400 ring-offset-2' 
                     : 'ring-0'
                 }`}></div>
                 <span className="relative z-10">{filter.label}</span>
               </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
                         {filteredProjects.map((project, index) => (
               <div
                 key={project.id}
                 className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group relative animate-scale-in"
                 style={{
                   background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                   boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                   animationDelay: `${index * 0.1}s`
                 }}
               >
                 {/* 3D Light Effect */}
                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="relative">
                                     <img
                     src={project.image}
                     alt={project.title}
                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
                      {project.category === 'web' && 'Web Development'}
                      {project.category === 'mobile' && 'Mobile App'}
                      {project.category === 'design' && 'UI/UX Design'}
                      {project.category === 'iot' && 'IoT & Hardware'}
                      {project.category === 'ai' && 'AI & ML'}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{project.duration}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {project.team}
                    </span>
                  </div>
                  
                                     <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                                             <span
                       key={techIndex}
                       className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-all duration-300 cursor-pointer"
                     >
                       {tech}
                     </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 text-sm flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                                         <a
                       href={project.liveUrl}
                       className="btn btn-primary text-sm px-4 py-2 hover:scale-105 transition-transform duration-300"
                     >
                       <Eye className="h-4 w-4 mr-2" />
                       View Demo
                     </a>
                     <a
                       href={project.githubUrl}
                       className="btn btn-outline text-sm px-4 py-2 hover:scale-105 transition-transform duration-300"
                     >
                       <Github className="h-4 w-4 mr-2" />
                       View Code
                     </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-600 mb-4">
                No projects found for this category
              </h3>
              <p className="text-gray-500">
                Try selecting a different filter or check back later for new projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life with innovative solutions and proven expertise.
          </p>
          <a href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100 group">
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Portfolio 