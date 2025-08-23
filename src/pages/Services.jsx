import { CheckCircle, Clock, Users, Zap, Code2, Smartphone, Palette, TrendingUp, Database, Globe, Shield, BarChart3 } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: [
        'Responsive design for all devices',
        'SEO optimization',
        'Performance optimization',
        'Content management systems',
        'E-commerce solutions',
        'API development and integration'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'PHP', 'WordPress'],
      color: 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700',
      cardBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400'
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance monitoring'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      color: 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600',
      cardBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200',
      hoverBorder: 'hover:border-emerald-400'
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience and drive engagement.',
      features: [
        'User research and personas',
        'Wireframing and prototyping',
        'Visual design systems',
        'Interactive prototypes',
        'Usability testing',
        'Design handoff'
      ],
      technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle', 'Protopie'],
      color: 'bg-gradient-to-br from-pink-500 via-rose-500 to-red-600',
      cardBg: 'bg-gradient-to-br from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      hoverBorder: 'hover:border-pink-400'
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Digital Consulting',
      description: 'Strategic guidance and technical consulting to optimize your digital presence.',
      features: [
        'Technology assessment',
        'Digital strategy planning',
        'Performance optimization',
        'Security audits',
        'Scalability planning',
        'Team training'
      ],
      technologies: ['Analytics', 'SEO', 'Performance', 'Security', 'Cloud', 'DevOps'],
      color: 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-600',
      cardBg: 'bg-gradient-to-br from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      hoverBorder: 'hover:border-amber-400'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your business goals, target audience, and project requirements.',
      icon: <Users className="h-8 w-8" />
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes for your approval.',
      icon: <Palette className="h-8 w-8" />
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution using modern technologies and best practices.',
      icon: <Code2 className="h-8 w-8" />
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing across devices and platforms before going live.',
      icon: <CheckCircle className="h-8 w-8" />
    }
  ]

  const additionalServices = [
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Database Design',
      description: 'Optimized database architecture and management systems.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Hosting & Deployment',
      description: 'Reliable hosting solutions and automated deployment processes.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security Implementation',
      description: 'Comprehensive security measures and compliance standards.'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and performance monitoring tools.'
    }
  ]

  return (
    <div className="min-h-screen">
                    {/* Header */}
       <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 relative overflow-hidden">
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
           <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
           <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-purple-400/30 rounded-lg animate-spin" style={{ animationDuration: '15s' }}></div>
         </div>
         
         <div className="container text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. 
            From concept to deployment, I provide end-to-end services that drive results.
          </p>
        </div>
      </section>

             {/* Main Services */}
       <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
                         {services.map((service, index) => (
               <div
                 key={index}
                 className={`group p-8 rounded-2xl border-2 ${service.borderColor} ${service.hoverBorder} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${service.cardBg} relative overflow-hidden`}
               >
                 {/* Animated Background Pattern */}
                 <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                   <div className="absolute top-0 left-0 w-20 h-20 border-2 border-current rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                   <div className="absolute bottom-0 right-0 w-16 h-16 border-2 border-current rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                 </div>
                 
                 {/* Icon Container with Glow Effect */}
                 <div className={`${service.color} text-white p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden shadow-lg`}>
                   {/* Glow Effect */}
                   <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                   {/* Icon */}
                   <div className="relative z-10">{service.icon}</div>
                   {/* Sparkle Effect */}
                   <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                 </div>
                 
                 <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">{service.title}</h3>
                 <p className="text-gray-700 text-lg mb-6 leading-relaxed">{service.description}</p>
                 
                 <div className="mb-6">
                   <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                     <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                     Key Features:
                   </h4>
                   <ul className="space-y-2">
                     {service.features.map((feature, featureIndex) => (
                       <li key={featureIndex} className="flex items-center text-gray-600 group/item">
                         <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                         <span className="group-hover/item:text-gray-800 transition-colors duration-200">{feature}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 <div>
                   <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                     <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-2"></span>
                     Technologies:
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {service.technologies.map((tech, techIndex) => (
                       <span
                         key={techIndex}
                         className="bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 hover:bg-white hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer"
                       >
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
                 
                 {/* Hover Glow Effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 strong-bg-sunset">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">How I Work</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A proven process that ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-primary-600 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the core services, I offer specialized solutions to ensure your project's success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how I can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Start a Project
            </a>
            <a href="/portfolio" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-600">
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 