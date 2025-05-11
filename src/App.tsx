import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          to_name: "Chaitali",
          from_email: formData.email,
          to_email: "patilchaitali079@gmail.com",
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const projects = [
    {
      title: "Converges Techfest Website",
      description:
        "An AI-powered study assistant that helps students organize their learning materials and create study schedules.",
      image: "../public/p2.png",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "Javascript",
      link: "https://converges.rcpit.ac.in/",
      github: "https://github.com/Bhumikapatil22/Converges-Official-Site",
    },
    {
      title: "Online Testing and Monitoring of Medicines and Consumables",
      description:
        "A system using pH testing to verify whether medicines are fake or degraded, ensuring pharmaceutical quality and safety.",
      image: "../public/p1.png",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      category: "Mern",
      github:
        "https://github.com/patilchaitali27/Online-Testing-and-Monitoring-the-Quality-of-Medicines-and-Consumales-",
    },
    {
      title: "Inventory Management Tool",
      description:
        "Developed using Java and Spring Framework, this tool simplifies inventory handling with CRUD operations.",
      image: "../public/1.png",
      tech: ["Spring", "Java", "MySQL", "Bootstrap"],
      category: "Java",
      github: "https://github.com/patilchaitali27/Inventory-Management-Tool",
    },
    {
      title: "Steganographic Image Text Hiding Tool",
      description:
        "A simple tool to hide and extract secret messages within images using LSB steganography.",
      image: "../public/image.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Javascript",
      github:
        "https://github.com/patilchaitali27/Steganographic-Image-text-hiding-tool",
    },
    {
      title: "R3sys Digital Bank",
      description:
        "A platform connecting programming students with mentors for real-time code reviews and guidance.",
      image: "../public/bank.jpg", // Replace with actual image path for this project
      tech: ["Spring", "Java", "MySQL"],
      category: "Java",
      github: "", // Replace with the actual GitHub repository URL
    },
    {
      title: "Netflix Clone",
      description:
        "A responsive clone of the Netflix homepage built using HTML and CSS to replicate its UI and layout.",
      image: "../public/netflix.png",
      tech: ["HTML", "CSS"],
      category: "Frontend",
      github: "https://github.com/patilchaitali27/Netflix--Clone",
    },
  ];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const skills = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark",
  },
  {
    name: "Spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    color: "from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark",
  },
];

  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-background-dark text-text-dark"
          : "bg-background-light text-text-light"
      } transition-colors duration-300`}
    >
      <Toaster position="top-right" />

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-40 ${
          isDarkMode ? "bg-surface-dark/20" : "bg-surface-light/20"
        } backdrop-blur-sm border-b border-primary-light/20 dark:border-primary-dark/20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold font-space bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
            >
              Chaitali's Portfolio
            </motion.span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className={`${
                    isDarkMode
                      ? "text-text-dark hover:text-primary-dark"
                      : "text-text-light hover:text-primary-light"
                  } transition-colors font-medium`}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${
                isDarkMode ? "bg-surface-dark/95" : "bg-surface-light/95"
              } backdrop-blur-sm`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`block px-3 py-2 ${
                      isDarkMode
                        ? "text-text-dark hover:text-primary-dark"
                        : "text-text-light hover:text-primary-light"
                    } transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-light/10 dark:from-primary-dark/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left order-2 md:order-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 font-space bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark animate-gradient-x">
                Chaitali Patil
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-text-light dark:text-text-dark mb-8">
                I am a Computer Science student and a passionate developer
              </p>
              <div className="flex gap-4 justify-center md:justify-start mb-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/chaitali-patil-88531a259/"
                  className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/patilchaitali27"
                  className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:patilchaitali079@gmail.com"
                  className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="../public/updated.pdf"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white px-6 py-3 rounded-lg hover:from-primary-light/90 hover:to-secondary-light/90 dark:hover:from-primary-dark/90 dark:hover:to-secondary-dark/90 transition-all transform shadow-lg"
              >
                <FileDown size={20} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Profile Photo - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-end order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-full blur-2xl opacity-50 animate-pulse scale-110"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] rounded-full p-2 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark shadow-xl"
                >
                  <img
                    src="../public/pic.jpg"
                    alt="Chaitali Patil"
                    className="w-full h-full object-cover rounded-full border-2 border-background-dark dark:border-background-light"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-space bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
            About Me
          </h2>
          <div className="bg-gradient-to-r from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/10 p-[1px] rounded-xl">
            <div
              className={`${
                isDarkMode ? "bg-surface-dark" : "bg-surface-light"
              } p-8 rounded-xl relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light/5 to-secondary-light/5 dark:from-primary-dark/5 dark:to-secondary-dark/5 animate-gradient-xy"></div>
              <div className="relative z-10">
                <p
                  className={`${
                    isDarkMode ? "text-text-dark" : "text-text-light"
                  } leading-relaxed text-lg font-light`}
                >
                  I am a dedicated Computer Science student with a passion for
                  creating innovative solutions through code. My journey in
                  technology has equipped me with strong problem-solving skills
                  and a deep understanding of software development principles.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`p-4 rounded-lg ${
                      isDarkMode ? "bg-primary-dark/10" : "bg-primary-light/10"
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-primary-light dark:text-primary-dark">
                      Education
                    </h3>
                    <p
                      className={`${
                        isDarkMode ? "text-text-dark" : "text-text-light"
                      }`}
                    >
                      Bachelor of Engineering in Computer Science
                    </p>
                  </div>
                  <div
                    className={`p-4 rounded-lg ${
                      isDarkMode ? "bg-primary-dark/10" : "bg-primary-light/10"
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-primary-light dark:text-primary-dark">
                      Interests
                    </h3>
                    <p
                      className={`${
                        isDarkMode ? "text-text-dark" : "text-text-light"
                      }`}
                    >
                      Web Development, Software Architecture, AI/ML
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-16 md:py-20 px-4 ${
          isDarkMode ? "bg-surface-dark" : "bg-surface-light"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold mb-12 text-center font-space bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark drop-shadow-md"
          >
            Experience
          </motion.h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-light via-secondary-light to-primary-light dark:from-primary-dark dark:via-secondary-dark dark:to-primary-dark shadow-[0_0_25px_rgba(59,130,246,0.6)]" />

            <div className="space-y-16">
              {[
                {
                  title: "Java Developer Intern",
                  company: "R3 SYSTEMS INDIA PVT. LTD.",
                  period: "Jul 2024",
                  description:
                    "Gained hands-on experience in Java, JDBC, Servlets, and the Spring Framework. Worked on scalable web applications, enhanced database performance, and collaborated on real-time projects under professional mentorship.",
                },
                {
                  title: "Frontend Developer",
                  company: "Akatsuki Coding Club",
                  period: "Sep 2024 – Present",
                  description:
                    "Actively contributed to multiple frontend development projects. Took part in planning and managing technical operations during coding events and workshops organized by the club.",
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark shadow-[0_0_25px_rgba(59,130,246,0.8)]" />

                  <div
                    className={`w-full md:w-1/2 p-[2px] rounded-2xl bg-gradient-to-r from-primary-light/30 to-secondary-light/30 dark:from-primary-dark/30 dark:to-secondary-dark/30 hover:shadow-lg hover:shadow-secondary-light/20 dark:hover:shadow-secondary-dark/20 transition-all duration-300 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <div
                      className={`${
                        isDarkMode ? "bg-surface-dark" : "bg-surface-light"
                      } p-6 md:p-8 rounded-2xl`}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-primary-light dark:text-primary-dark">
                        {exp.title}
                      </h3>
                      <p
                        className={`${
                          isDarkMode
                            ? "text-text-dark/80"
                            : "text-text-light/80"
                        } mb-2 text-sm md:text-base font-medium`}
                      >
                        {exp.company} • {exp.period}
                      </p>
                      <p
                        className={`${
                          isDarkMode
                            ? "text-text-dark/80"
                            : "text-text-light/80"
                        } text-sm md:text-base leading-relaxed`}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* skills section */}
      <section
        id="skills"
        className={`py-16 md:py-20 px-4 ${
          isDarkMode
            ? "bg-gradient-to-b from-surface-dark via-background-dark to-surface-dark"
            : "bg-gradient-to-b from-surface-light via-background-light to-surface-light"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-center font-space bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
          >
            My Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mt-3 mb-10 text-center text-sm md:text-base ${
              isDarkMode ? "text-text-dark" : "text-text-light"
            } italic`}
          >
            Combining strong technical skills with a passion for continuous
            learning and real-world problem solving.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`${
                  isDarkMode
                    ? "bg-surface-dark bg-opacity-60"
                    : "bg-surface-light"
                } backdrop-blur border ${
                  isDarkMode
                    ? "border-primary-dark/20"
                    : "border-primary-light/20"
                } hover:border-secondary-light dark:hover:border-secondary-dark rounded-xl shadow-lg hover:shadow-secondary-light/30 dark:hover:shadow-secondary-dark/30 p-5 group transition-all duration-300`}
              >
                <div className="flex flex-col items-center gap-4">
                  {skill.name.toLowerCase() === "express" ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain invert group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <p
                    className={`font-medium text-sm md:text-base ${
                      isDarkMode ? "text-text-dark" : "text-text-light"
                    } text-center`}
                  >
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center font-space bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
          >
            Projects
          </motion.h2>

          {/* Project Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            {["All", "Javascript", "Java", "Mern"].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white"
                    : `${
                        isDarkMode
                          ? "bg-surface-dark text-text-dark"
                          : "bg-surface-light text-text-light"
                      } hover:bg-primary-light/20 dark:hover:bg-primary-dark/20`
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/10 p-[1px] rounded-xl group"
                >
                  <div
                    className={`${
                      isDarkMode ? "bg-surface-dark" : "bg-surface-light"
                    } rounded-xl overflow-hidden`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3
                        className={`text-xl font-semibold mb-3 ${
                          isDarkMode ? "text-text-dark" : "text-text-light"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`${
                          isDarkMode
                            ? "text-text-dark/80"
                            : "text-text-light/80"
                        } mb-4 text-sm md:text-base`}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className={`text-xs ${
                              isDarkMode
                                ? "bg-primary-dark/20 text-primary-dark"
                                : "bg-primary-light/20 text-primary-light"
                            } px-2 py-1 rounded`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.link && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.link}
                            className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark flex items-center gap-1 text-sm"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </motion.a>
                        )}
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark flex items-center gap-1 text-sm"
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center font-space bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
          >
            Get In Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-r from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/10 p-[1px] rounded-xl"
            >
              <div
                className={`${
                  isDarkMode ? "bg-surface-dark" : "bg-surface-light"
                } p-6 rounded-xl`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    isDarkMode ? "text-text-dark" : "text-text-light"
                  }`}
                >
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <motion.a
                    whileHover={{ scale: 1.05, x: 10 }}
                    href="mailto:patilchaitali079@gmail.com"
                    className={`flex items-center gap-3 ${
                      isDarkMode
                        ? "text-primary-dark hover:text-secondary-dark"
                        : "text-primary-light hover:text-secondary-light"
                    } transition-colors`}
                  >
                    <Mail size={20} />
                    patilchaitali079@gmail.com
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, x: 10 }}
                    href="https://www.linkedin.com/in/chaitali-patil-88531a259/"
                    className={`flex items-center gap-3 ${
                      isDarkMode
                        ? "text-primary-dark hover:text-secondary-dark"
                        : "text-primary-light hover:text-secondary-light"
                    } transition-colors`}
                  >
                    <Linkedin size={20} />
                    LinkedIn Profile
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, x: 10 }}
                    href="https://github.com/patilchaitali27"
                    className={`flex items-center gap-3 ${
                      isDarkMode
                        ? "text-primary-dark hover:text-secondary-dark"
                        : "text-primary-light hover:text-secondary-light"
                    } transition-colors`}
                  >
                    <Github size={20} />
                    GitHub Profile
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-r from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/10 p-[1px] rounded-xl"
            >
              <form
                onSubmit={handleFormSubmit}
                className={`${
                  isDarkMode ? "bg-surface-dark" : "bg-surface-light"
                } p-6 rounded-xl`}
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-text-dark" : "text-text-light"
                      } mb-1`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg ${
                        isDarkMode
                          ? "bg-primary-dark/10 border border-primary-dark/20 text-text-dark"
                          : "bg-primary-light/10 border border-primary-light/20 text-text-light"
                      } focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent`}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-text-dark" : "text-text-light"
                      } mb-1`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg ${
                        isDarkMode
                          ? "bg-primary-dark/10 border border-primary-dark/20 text-text-dark"
                          : "bg-primary-light/10 border border-primary-light/20 text-text-light"
                      } focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent`}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-text-dark" : "text-text-light"
                      } mb-1`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-2 rounded-lg ${
                        isDarkMode
                          ? "bg-primary-dark/10 border border-primary-dark/20 text-text-dark"
                          : "bg-primary-light/10 border border-primary-light/20 text-text-light"
                      } focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent`}
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white px-6 py-3 rounded-lg hover:from-primary-light/90 hover:to-secondary-light/90 dark:hover:from-primary-dark/90 dark:hover:to-secondary-dark/90 transition-all transform shadow-lg"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
