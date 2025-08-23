import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('idle')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('loading')
    
    console.log('Form submitted with data:', formData)
    
    try {
             // Use a simple working contact form service
       const response = await fetch('https://formspree.io/f/mvgqebej', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })

      console.log('Form response:', response)

      if (response.ok) {
        console.log('Message sent successfully!')
        setFormStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        console.log('Form response not ok:', response)
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission failed:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'kom647579@gmail.com',
      link: 'mailto:kom647579@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+91 92634 59869',
      link: 'tel:+919263459869'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen">
                   {/* Header */}
      <section className="strong-bg-cyber py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full animate-float opacity-30" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-red-200 to-pink-200 rounded-full animate-bounce opacity-25" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-yellow-300 rounded-lg animate-spin" style={{ animationDuration: '12s' }}></div>
        </div>
        
        <div className="container text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Ready to start your next project? I'd love to hear about it and discuss how I can help bring your vision to life.
          </p>
           
           {/* Animated Icons */}
           <div className="flex justify-center space-x-6 mt-8">
             <div className="animate-bounce" style={{ animationDelay: '0.5s' }}>
               <Mail className="h-8 w-8 text-primary-500" />
             </div>
             <div className="animate-bounce" style={{ animationDelay: '0.7s' }}>
               <Phone className="h-8 w-8 text-blue-500" />
             </div>
             <div className="animate-bounce" style={{ animationDelay: '0.9s' }}>
               <MapPin className="h-8 w-8 text-indigo-500" />
             </div>
           </div>
         </div>
       </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                                     <div className="relative">
                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                       Your Name *
                     </label>
                     <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleInputChange}
                       required
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-300 focus:scale-[1.02] transform"
                       placeholder="John Doe"
                       style={{
                         background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                         boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                       }}
                     />
                     {/* 3D Light Effect */}
                     <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
                   </div>
                  
                                     <div className="relative">
                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                       Email Address *
                     </label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleInputChange}
                       required
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-300 focus:scale-[1.02] transform"
                       placeholder="john@example.com"
                       style={{
                         background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                         boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                       }}
                     />
                     {/* 3D Light Effect */}
                     <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
                   </div>
                </div>
                
                                 <div className="relative">
                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                     Subject *
                   </label>
                   <input
                     type="text"
                     id="subject"
                     name="subject"
                     value={formData.subject}
                     onChange={handleInputChange}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-300 focus:scale-[1.02] transform"
                     placeholder="Project Inquiry"
                     style={{
                       background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                       boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                     }}
                   />
                   {/* 3D Light Effect */}
                   <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
                 </div>
                
                                 <div className="relative">
                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                     Message *
                   </label>
                   <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     required
                     rows="6"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-300 focus:scale-[1.02] transform resize-none"
                     placeholder="Tell me about your project, goals, and timeline..."
                     style={{
                       background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                       boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                     }}
                   ></textarea>
                   {/* 3D Light Effect */}
                   <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
                 </div>
                
                {formStatus === 'success' && (
                  <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-green-700">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                    <span className="text-red-700">Failed to send message. Please try again or contact me directly.</span>
                  </div>
                )}
                
                                 <button
                   type="submit"
                   disabled={formStatus === 'loading'}
                   className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-300 active:scale-95"
                 >
                  {formStatus === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                                     <div key={index} className="flex items-start space-x-4 group cursor-pointer hover:scale-105 transition-all duration-300 relative">
                     <div className="bg-primary-100 text-primary-600 p-3 rounded-lg group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300 relative overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                            boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)'
                          }}>
                       {/* 3D Light Effect */}
                       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                       {info.icon}
                     </div>
                     <div>
                       <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">{info.title}</h3>
                       <a
                         href={info.link}
                         className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                       >
                         {info.value}
                       </a>
                     </div>
                   </div>
                ))}
              </div>
              
              {/* WhatsApp CTA */}
                             <div className="bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                      boxShadow: '0 10px 25px -5px rgba(34, 197, 94, 0.1), 0 10px 10px -5px rgba(34, 197, 94, 0.04)'
                    }}>
                 {/* 3D Light Effect */}
                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                 {/* Glow Effect */}
                 <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 via-transparent to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none"></div>
                 <div className="flex items-center mb-4">
                   <MessageCircle className="h-8 w-8 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                   <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">Quick Chat on WhatsApp</h3>
                 </div>
                 <p className="text-gray-600 mb-4">
                   Prefer to chat? Send me a quick message on WhatsApp for faster response times.
                 </p>
                                   <a
                    href="https://wa.me/919263459869?text=Hi Om Kumar! I'd like to discuss a project with you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 hover:scale-105 transition-all duration-300 active:scale-95"
                  >
                    💬 Chat on WhatsApp
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. I'm excited to hear about your project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <a
               href="https://wa.me/919263459869?text=Hi Om Kumar! I'd like to discuss a project with you."
               target="_blank"
               rel="noopener noreferrer"
               className="btn bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition-transform duration-300 active:scale-95"
             >
               💬 WhatsApp Chat
             </a>
             <a href="mailto:kom647579@gmail.com" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-600 hover:scale-105 transition-transform duration-300 active:scale-95">
               📧 Send Email
             </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 