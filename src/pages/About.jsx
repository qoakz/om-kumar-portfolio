import { Award, Clock, Users, Target, CheckCircle, Download, Mail, Linkedin, Github, Twitter } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'React/React Native', level: 95 },
    { name: 'Node.js & Python', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Design', level: 88 },
    { name: 'DevOps & AWS', level: 80 },
    { name: 'Project Management', level: 85 }
  ]

  const experience = [
    {
      year: '2023 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'Freelance',
      description: 'Leading development of web and mobile applications for clients across various industries.',
      achievements: [
        'Delivered 15+ successful projects',
        'Maintained 98% client satisfaction rate',
        'Reduced development time by 30%'
      ]
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Tech Startup',
      description: 'Developed responsive web applications and contributed to product strategy.',
      achievements: [
        'Built 3 major product features',
        'Improved app performance by 40%',
        'Mentored junior developers'
      ]
    },
    {
      year: '2019 - 2021',
      title: 'UI/UX Designer',
      company: 'Design Agency',
      description: 'Created user-centered designs for web and mobile applications.',
      achievements: [
        'Designed 20+ user interfaces',
        'Conducted user research studies',
        'Established design systems'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      year: '2019',
      description: 'Specialized in software engineering and web development'
    },
    {
      degree: 'UI/UX Design Certification',
      school: 'Design Institute',
      year: '2020',
      description: 'Advanced user experience and interface design principles'
    }
  ]

  const certifications = [
    'AWS Certified Developer',
    'Google UX Design Professional',
    'React Developer Certification',
    'Agile Project Management'
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="strong-bg-orange py-20">
        <div className="container text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Passionate developer and designer with a mission to create digital solutions that make a difference.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 strong-bg-pink">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer and UI/UX designer with over 5 years of experience 
                  creating digital solutions that drive business growth and user engagement.
                </p>
                <p>
                  My journey began with a curiosity about how technology can solve real-world problems. 
                  Since then, I've worked with startups, agencies, and enterprise clients to deliver 
                  innovative solutions across web, mobile, and design domains.
                </p>
                <p>
                  I believe in the power of user-centered design and clean, maintainable code. 
                  Every project I work on is an opportunity to learn, grow, and create something 
                  that makes a positive impact.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="btn btn-primary"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get In Touch
                </a>
                <a
                  href="#"
                  className="btn btn-outline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">5+ Years Experience</h3>
                  <p className="text-primary-100">
                    Delivering exceptional results across web, mobile, and design projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive skill set developed through years of hands-on experience and continuous learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Full-Stack Development</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Mobile App Development</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">UI/UX Design</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Project Management</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Cloud Architecture</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">DevOps & CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven track record of delivering successful projects and driving business growth.
            </p>
          </div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-8">
                  <div className="bg-gray-50 rounded-xl p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <span className="text-primary-600 font-medium">{exp.company}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-primary-600 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h2>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <Award className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Ready to start your next project? I'd love to hear about it and discuss how I can help bring your vision to life.
          </p>
          <a href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
            Start a Project
          </a>
        </div>
      </section>
    </div>
  )
}

export default About 