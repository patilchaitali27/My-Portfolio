import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileDown, ExternalLink, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Project 2", 
      description: "Mobile-first responsive website with modern UI/UX",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Tailwind CSS", "Firebase"],
      link: "#",
      github: "#"
    },
    {
      title: "Project 3",
      description: "Data visualization dashboard using D3.js",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tech: ["D3.js", "React", "TypeScript"],
      link: "#",
      github: "#"
    }
  ];

  const skills = [
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Spring',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Tech Corp",
      period: "Jun 2023 - Aug 2023",
      description: "Developed and maintained web applications using React.js. Collaborated with senior developers on large-scale projects."
    },
    {
      title: "Web Development Lead",
      company: "University Project",
      period: "Jan 2023 - May 2023",
      description: "Led a team of 4 developers to create a campus event management system."
    },
    {
      title: "Programming Tutor",
      company: "Computer Science Department",
      period: "Sep 2022 - Dec 2022",
      description: "Mentored junior students in programming concepts and data structures."
    }
  ];

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Chaitali's Portfolio</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-gray-300 hover:text-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
            {/* Text Content - Left Side */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse">
                Chaitali Patil
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-8">
                I am a Computer Science student and a passionate developer
              </p>
              <div className="flex gap-4 justify-center md:justify-start mb-8">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto md:mx-0 hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <FileDown size={20} />
                Download CV
              </button>
            </div>

            {/* Profile Photo - Right Side */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse scale-110"></div>
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] rounded-full p-2 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                  <img
                    src="../src/assets/pic.jpg"
                    alt="Chaitali Patil"
                    className="w-full h-full object-cover rounded-full border-2 border-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            About Me
          </h2>
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-[1px] rounded-xl">
            <div className="bg-black p-6 md:p-8 rounded-xl">
              <p className="text-blue-100 leading-relaxed">
                I am a dedicated Computer Science student with a passion for creating innovative solutions through code. 
                My journey in technology has equipped me with strong problem-solving skills and a deep understanding of 
                software development principles. I'm constantly learning and exploring new technologies to stay at the 
                forefront of the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-[1px] rounded-xl group"
              >
                <div className="bg-black p-4 md:p-6 rounded-xl flex flex-col items-center gap-4 transform group-hover:scale-105 transition-all">
                  <div className={`p-3 md:p-4 rounded-lg bg-gradient-to-br ${skill.color} shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300`}>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-8 h-8 md:w-12 md:h-12"
                    />
                  </div>
                  <p className="font-medium text-sm md:text-base text-blue-200">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-[1px] rounded-xl group">
                <div className="bg-black rounded-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-blue-200">{project.title}</h3>
                    <p className="text-blue-100/80 mb-4 text-sm md:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.link} className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a href={project.github} className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            
            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-[1px] rounded-xl ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-black p-6 rounded-xl">
                      <h3 className="text-lg md:text-xl font-semibold text-blue-400">{exp.title}</h3>
                      <p className="text-blue-200/80 mb-2 text-sm md:text-base">{exp.company} • {exp.period}</p>
                      <p className="text-blue-100/70 text-sm md:text-base">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-[1px] rounded-xl">
              <div className="bg-black p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-200">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-blue-300 hover:text-blue-400 transition-colors">
                    <Mail size={20} />
                    your.email@example.com
                  </a>
                  <a href="#" className="flex items-center gap-3 text-blue-300 hover:text-blue-400 transition-colors">
                    <Linkedin size={20} />
                    LinkedIn Profile
                  </a>
                  <a href="#" className="flex items-center gap-3 text-blue-300 hover:text-blue-400 transition-colors">
                    <Github size={20} />
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-[1px] rounded-xl">
              <form onSubmit={handleFormSubmit} className="bg-black p-6 rounded-xl">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;