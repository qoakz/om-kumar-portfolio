import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Smartphone, Palette, TrendingUp, ChevronRight, Zap, Sparkles, Eye, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      color: 'bg-blue-500'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      color: 'bg-green-500'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience and drive engagement.',
      color: 'bg-purple-500'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions including chatbots, data analysis, and predictive modeling.',
      color: 'bg-indigo-500'
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'IoT & Hardware',
      description: 'Smart device integration, automation systems, and hardware-software solutions.',
      color: 'bg-teal-500'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Consulting',
      description: 'Strategic guidance and technical consulting to optimize your digital presence.',
      color: 'bg-orange-500'
    }
  ]

  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive online shopping platform built for scalability and user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'Web Development'
    },
    {
      title: 'PDF Summarize AI Chatbot',
      description: 'AI-powered chatbot that analyzes and summarizes PDF documents with natural language processing.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center',
      tags: ['Python', 'OpenAI GPT', 'LangChain'],
      category: 'AI & ML'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Cross-platform mobile application for tracking workouts and health metrics.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      category: 'Mobile App'
    }
  ]

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="strong-bg-cyber py-20 lg:py-32 relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
          <div className="absolute top-60 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.5s' }}></div>
          <div className="absolute top-32 right-1/3 w-4 h-4 bg-primary-300 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
          <div className="absolute top-80 left-1/2 w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
        </div>
        
        {/* Lightning Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Lightning Bolt 1 */}
          <div className="absolute top-10 right-1/4 w-1 h-16 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '3s', animationDuration: '0.3s' }}></div>
          <div className="absolute top-10 right-1/4 w-1 h-16 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '6s', animationDuration: '0.2s' }}></div>
          
          {/* Lightning Bolt 2 */}
          <div className="absolute top-32 left-1/3 w-1 h-20 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '4.5s', animationDuration: '0.25s' }}></div>
          <div className="absolute top-32 left-1/3 w-1 h-20 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '7.5s', animationDuration: '0.15s' }}></div>
          
          {/* Electric Sparks */}
          <div className="absolute top-16 right-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-spark opacity-0" style={{ animationDelay: '2s', animationDuration: '0.1s' }}></div>
          <div className="absolute top-24 left-1/4 w-1.5 h-1.5 bg-orange-500 rounded-full animate-spark opacity-0" style={{ animationDelay: '5s', animationDuration: '0.1s' }}></div>
          <div className="absolute top-40 right-1/6 w-1 h-1 bg-red-500 rounded-full animate-spark opacity-0" style={{ animationDelay: '8s', animationDuration: '0.1s' }}></div>
        </div>
       
        {/* Floating Geometric Shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-primary-200 rounded-lg animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-primary-200 to-blue-200 rounded-full animate-pulse opacity-30"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Professional Solutions for Your{' '}
                <span className="text-yellow-300 relative">
                  Business
                  {/* Lightning Icon */}
                  <Zap className="absolute -top-2 -right-8 h-8 w-8 text-yellow-500 animate-pulse" />
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-200 leading-relaxed"
                variants={itemVariants}
              >
                Delivering exceptional results through innovative strategies and proven expertise. 
                From concept to deployment, I help businesses thrive in the digital landscape.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/portfolio" className="btn btn-primary group relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.2)'
                    }}>
                    {/* 3D Light Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 via-transparent to-indigo-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"></div>
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact" className="btn btn-outline group relative overflow-hidden">
                    {/* Lightning Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/15 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Get In Touch</span>
                    <Zap className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center" 
                alt="Professional Developer Workspace" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {/* 3D Light Effect on Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"></div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* 3D Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl p-4 text-white relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/30 via-transparent to-blue-400/30 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none rounded-xl"></div>
                  <Code2 className="h-12 w-12 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Modern Web Solutions</h3>
                  <p className="text-primary-100 text-sm">Built with cutting-edge technologies</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 strong-bg-purple">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-title relative">
              What I Offer
              {/* Lightning Icons */}
              <Zap className="absolute -left-8 top-1/2 transform -translate-y-1/2 h-6 w-6 text-yellow-500 animate-pulse" />
              <Zap className="absolute -right-8 top-1/2 transform -translate-y-1/2 h-6 w-6 text-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. 
              From development to design, I provide end-to-end services that drive results.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* 3D Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none"></div>
                <div className={`${service.color} text-white p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform relative overflow-hidden`}>
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Electric Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-orange-500/20 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Floating Animation */}
                  <div className="relative z-10 animate-float" style={{ animationDuration: '3s', animationDelay: `${index * 0.2}s` }}>
                    {service.icon}
                  </div>
                  {/* Lightning Spark */}
                  <Zap className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/services" className="btn btn-outline group">
              View All Services
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 strong-bg-sunset relative overflow-hidden">
        {/* Night Lightning Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Lightning Bolt 1 - Top Left */}
          <div className="absolute top-10 left-10 w-1 h-24 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '2s', animationDuration: '0.2s' }}></div>
          <div className="absolute top-10 left-10 w-1 h-24 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '8s', animationDuration: '0.15s' }}></div>
          
          {/* Lightning Bolt 2 - Top Right */}
          <div className="absolute top-8 right-16 w-1 h-20 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '4s', animationDuration: '0.25s' }}></div>
          <div className="absolute top-8 right-16 w-1 h-20 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '12s', animationDuration: '0.18s' }}></div>
          
          {/* Lightning Bolt 3 - Middle */}
          <div className="absolute top-20 left-1/2 w-1 h-28 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '6s', animationDuration: '0.3s' }}></div>
          <div className="absolute top-20 left-1/2 w-1 h-28 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '15s', animationDuration: '0.22s' }}></div>
          
          {/* Lightning Bolt 4 - Bottom Left */}
          <div className="absolute bottom-20 left-20 w-1 h-16 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '5s', animationDuration: '0.18s' }}></div>
          <div className="absolute bottom-20 left-20 w-1 h-16 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '14s', animationDuration: '0.25s' }}></div>
          
          {/* Lightning Bolt 5 - Bottom Right */}
          <div className="absolute bottom-16 right-24 w-1 h-18 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '9s', animationDuration: '0.2s' }}></div>
          <div className="absolute bottom-16 right-24 w-1 h-18 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 animate-lightning opacity-0" style={{ animationDelay: '16s', animationDuration: '0.15s' }}></div>
          
          {/* Electric Sparks */}
          <div className="absolute top-16 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-spark opacity-0" style={{ animationDelay: '3s', animationDuration: '0.1s' }}></div>
          <div className="absolute top-24 right-1/3 w-1.5 h-1.5 bg-orange-500 rounded-full animate-spark opacity-0" style={{ animationDelay: '7s', animationDuration: '0.1s' }}></div>
          <div className="absolute top-32 left-1/6 w-1 h-1 bg-red-500 rounded-full animate-spark opacity-0" style={{ animationDelay: '10s', animationDuration: '0.1s' }}></div>
          <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-spark opacity-0" style={{ animationDelay: '13s', animationDuration: '0.1s' }}></div>
          <div className="absolute bottom-24 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-spark opacity-0" style={{ animationDelay: '11s', animationDuration: '0.1s' }}></div>
          <div className="absolute bottom-32 right-1/6 w-1 h-1 bg-red-400 rounded-full animate-spark opacity-0" style={{ animationDelay: '17s', animationDuration: '0.1s' }}></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-title relative">
              Featured Work
              {/* Lightning Icons */}
              <Zap className="absolute -left-8 top-1/2 transform -translate-y-1/2 h-6 w-6 text-yellow-500 animate-pulse" />
              <Zap className="absolute -right-8 top-1/2 transform -translate-y-1/2 h-6 w-6 text-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of my recent projects that demonstrate expertise across different technologies and industries.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group relative"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* 3D Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none"></div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  {/* Lightning Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/15 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  {/* Lightning Icon */}
                  <Zap className="absolute top-4 right-4 h-5 w-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                  
                  {/* Random Lightning Flashes on Project Images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-orange-500/20 to-red-600/15 opacity-0 animate-lightning pointer-events-none" 
                       style={{ 
                         animationDelay: `${(index + 1) * 3}s`, 
                         animationDuration: '0.15s',
                         animationIterationCount: 'infinite'
                       }}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-orange-500/20 to-red-600/15 opacity-0 animate-lightning pointer-events-none" 
                       style={{ 
                         animationDelay: `${(index + 1) * 3 + 7}s`, 
                         animationDuration: '0.12s',
                         animationIterationCount: 'infinite'
                       }}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded hover:bg-primary-100 hover:text-primary-700 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                      >
                        {/* Lightning Effect on Tag Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/15 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <span className="relative z-10">{tag}</span>
                        {/* Mini Lightning Spark */}
                        <Zap className="absolute -top-1 -right-1 h-3 w-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Action Buttons with Lightning Effects */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="btn btn-primary text-sm px-4 py-2 hover:scale-105 transition-transform duration-300 group relative overflow-hidden"
                    >
                      {/* Lightning Effect on Button Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/15 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      <span className="relative z-10 flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        View Demo
                      </span>
                      {/* Lightning Spark */}
                      <Zap className="absolute -right-1 top-1/2 transform -translate-y-1/2 h-3 w-3 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-outline text-sm px-4 py-2 hover:scale-105 transition-transform duration-300 group relative overflow-hidden"
                    >
                      {/* Lightning Effect on Button Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/15 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      <span className="relative z-10 flex items-center">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </span>
                      {/* Lightning Spark */}
                      <Zap className="absolute -right-1 top-1/2 transform -translate-y-1/2 h-3 w-3 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/portfolio" className="btn btn-primary group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.2)'
              }}>
              {/* 3D Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 via-transparent to-indigo-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"></div>
              {/* Lightning Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/15 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <span className="relative z-10">View Full Portfolio</span>
              {/* Lightning Icon */}
              <Zap className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-6 relative"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Ready to Start Your Project?
            {/* Lightning Icons */}
            <Zap className="absolute -left-12 top-1/2 transform -translate-y-1/2 h-8 w-8 text-yellow-400 animate-pulse" />
            <Zap className="absolute -right-12 top-1/2 transform -translate-y-1/2 h-8 w-8 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </motion.h2>
          <motion.p 
            className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Let's discuss how I can help bring your vision to life with innovative solutions and proven expertise.
          </motion.p>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100 group relative overflow-hidden">
              {/* Lightning Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/15 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get In Touch</span>
              <Zap className="absolute -right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home 