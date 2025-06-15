import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Code, Palette, Database, Globe, Server, Brain, Cpu, Layers, BarChart, FileText, Github, Linkedin, Mail, Smartphone, Monitor, Cloud, GitBranch, Terminal, DatabaseZap, BarChart3, FileSpreadsheet, MessageSquare as MessageSquareHeart } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGenericClick = (featureName) => {
    toast({
      title: `🚧 ${featureName} feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const portfolioData = {
    name: "Aishjahan Khan",
    tagline: "Computer Science graduate specializing in Machine Learning, Data Science, and Full Stack Development. Building smart, data-driven, and scalable web solutions.",
    heroImage: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d76b3ac2-ad7d-4223-9dd0-64c3eaa968a4/15d3ee84f37ca58e943a6311f621b06a.jpg", 
    about: {
      description1: "I am a passionate Computer Science graduate with a strong foundation in Machine Learning, Data Science, and Full Stack Development. Through hands-on experience as a Machine Learning Intern, I enhanced customer segmentation and developed accurate predictive models.",
      description2: "Proficient in MERN stack development and eager to apply my skills in challenging roles within dynamic teams.",
      profileImage: "https://storage.googleapis.com/hostinger-horizons-assets-prod/d76b3ac2-ad7d-4223-9dd0-64c3eaa968a4/69b41e8a88d028a82496eed3523a35d0.jpg",
    },
    education: {
      degree: "Bachelor of Technology (Computer Science Engineering)",
      university: "Dr. Shakuntala Misra National Rehabilitation University",
      cgpa: "8.94/10",
      graduationYear: "2025",
      location: "Lucknow",
      intermediate: {
        school: "Canossa School",
        percentage: "92.8/100",
        year: "2020"
      }
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "Expertise across the full spectrum of modern data science and full-stack development",
      categories: [
        {
          name: "Data Science & Machine Learning",
          items: [
            { name: 'Python', icon: Brain, color: 'from-blue-500 to-purple-600' },
            { name: 'Scikit-learn', icon: Cpu, color: 'from-orange-400 to-red-500' },
            { name: 'TensorFlow', icon: Layers, color: 'from-yellow-400 to-orange-500' },
            { name: 'PyTorch', icon: Layers, color: 'from-red-500 to-pink-500' },
            { name: 'Pandas', icon: BarChart, color: 'from-indigo-400 to-purple-500' },
            { name: 'NumPy', icon: BarChart, color: 'from-blue-400 to-cyan-500' },
            { name: 'Matplotlib', icon: Palette, color: 'from-green-400 to-teal-500' },
            { name: 'Hugging Face', icon: Brain, color: 'from-yellow-500 to-amber-600' },
            { name: 'OpenAI API', icon: Cpu, color: 'from-teal-400 to-cyan-500' },
          ]
        },
        {
          name: "Full Stack Development",
          items: [
            { name: 'MongoDB', icon: Database, color: 'from-green-500 to-teal-600' },
            { name: 'Express.js', icon: Server, color: 'from-gray-700 to-gray-900' },
            { name: 'React', icon: Smartphone, color: 'from-cyan-400 to-blue-500' },
            { name: 'Node.js', icon: Server, color: 'from-green-400 to-green-600' },
            { name: 'HTML', icon: Code, color: 'from-orange-400 to-red-500' },
            { name: 'CSS', icon: Palette, color: 'from-blue-400 to-blue-600' },
            { name: 'JavaScript', icon: Code, color: 'from-yellow-400 to-orange-500' },
          ]
        },
        {
          name: "Development & Tools",
          items: [
            { name: 'GitHub', icon: GitBranch, color: 'from-gray-600 to-gray-800' },
            { name: 'Docker', icon: Cloud, color: 'from-blue-400 to-sky-500' },
            { name: 'FastAPI', icon: Server, color: 'from-teal-500 to-emerald-600' },
            { name: 'Jupyter', icon: FileText, color: 'from-orange-500 to-amber-600' },
            { name: 'Kubernetes', icon: Cloud, color: 'from-blue-600 to-indigo-700' },
            { name: 'C++', icon: Code, color: 'from-sky-500 to-blue-600' },
          ]
        },
        {
          name: "Databases & Analytics",
          items: [
            { name: 'MySQL', icon: DatabaseZap, color: 'from-blue-500 to-cyan-600' },
            { name: 'PowerBI', icon: BarChart3, color: 'from-yellow-400 to-amber-500' },
            { name: 'Excel', icon: FileSpreadsheet, color: 'from-green-500 to-lime-600' },
          ]
        }
      ]
    },
    projects: [
      {
        title: "LectroAI - AI Powered Lecture Assistant Platform",
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        description: "Developed an AI-powered lecture assistant using Flask, Hugging Face Transformers, and Python to auto-generate lecture summaries, quizzes, and audio content, boosting learning efficiency by 70%.",
        tech: ["Flask", "Hugging Face", "React", "ShadCN"],
        achievements: ["70% boost in learning efficiency", "Integrated LLMs for content generation", "Audio lecture playback functionality"],
        image: "LectroAI - AI Powered Lecture Assistant interface",
        github: "#",
        live: "#"
      },
      {
        title: "FitSense AI",
        url:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
        description: "Advanced fitness intelligence system achieving 97% accuracy in exercise classification using smartwatch sensor data. Features real-time posture correction and automated workout analysis.",
        tech: ["Python", "NumPy", "SciPy", "FFT"],
        achievements: ["97% accuracy in exercise classification", "Real-time posture correction system", "Automated exercise tracking & analysis"],
        image: "FitSense AI interface",
        github: "https://github.com/Aishjahan/Fitness-Tracker-With-Sensor-Data",
        live: "#"
      },
      {
        title: "MIRA - Food Ordering Assistant",
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        description: "AI-powered chatbot using Dialogflow, FastAPI, and Python with MySQL integration. Achieves 95% intent recognition accuracy and supports 1K+ concurrent users.",
        tech: ["Dialogflow", "FastAPI", "MySQL", "Python"],
        achievements: ["95% intent recognition accuracy", "40% reduced response time", "Scalable backend for 1K+ users"],
        image: "MIRA - Food Ordering Assistant interface",
        github: "https://github.com/Aishjahan/MIRA",
        live: "#"
      }, 
      {
        title: "Mental Health Insights with NLP",
        url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        description: "Implemented a Language Detection Model using Natural Language Processing techniques with CountVectorizer for text conversion and Naive Bayes classifier for language prediction, applied to mental health insights.",
        tech: ["Python", "Scikit-learn", "Pandas", "NLTK"],
        achievements: ["CountVectorizer for text processing", "Naive Bayes classification model", "Emotion detection from text"],
        image: "Mental health app interface with emotion charts",
        github: "https://github.com/Aishjahan/Leveraging-NLP-for-Emotion-Detection-and-Mental-Health-Insights",
        live: "#",
        icon: MessageSquareHeart
      }
    ],
    experiences: [
      {
        title: "Machine Learning Intern",
        company: "FeyNN Labs",
        period: "Dec 2024 - Jan 2025",
        location: "Remote",
        description: [
          "Optimized deep learning models, improving accuracy by 15% through advanced hyperparameter tuning and architecture refinement.",
          "Automated data preprocessing workflows, reducing manual effort by 40% using Python, Pandas, and Scikit-learn for structured dataset preparation.",
          "Designed and fine-tuned ML models, improving predictive accuracy by 18% through hyperparameter tuning and feature engineering techniques.",
          "Developed real-time inference pipelines, enabling seamless model deployment using FastAPI and optimizing response time for large-scale predictions."
        ],
        tag: "🌟 Latest Role"
      },
      {
        title: "Machine Learning Intern",
        company: "AtliQ Technologies",
        period: "Oct 2024 - Nov 2024",
        location: "Remote",
        description: [
          "Enhanced customer segmentation accuracy by 5% using KMeans and hierarchical clustering, driving more precise and data-driven marketing strategies.",
          "Developed and optimized advanced predictive models for customer behavior analysis, reducing overall churn rate by 7% through personalized targeted interventions.",
          "Automated complex data preprocessing pipelines with Python, SQL, and Scikit Learn, cutting down extensive manual effort by 20% and significantly enhancing model efficiency."
        ],
        tag: "📈 Previous Role"
      }
    ],
    achievements: [
      { title: "Smart India Hackathon 2023", description: "Finalist in the top 5 out of 100+ teams in the national-level Smart India Hackathon 2023." },
      { title: "National Environment Youth Parliament", description: "Represented Uttar Pradesh at Delhi Parliament House" },
      { title: "Open Source Contributor", description: "Active in GSSOC, SSOC, and Hacktoberfest" }
    ],
    contact: {
      email: "aishjahankhan7376@gmail.com",
      linkedin: "linkedin.com/in/Aishjahan",
      github: "github.com/Aishjahan",
      cta: "Ready to collaborate on innovative projects or discuss opportunities in Software Development",
      buttonText: "Send Email",
      connectButtonText: "Connect"
    },
    footer: {
      name: "Aishjahan Khan",
      role: "",
      copyright: "© 2025 Aishjahan Khan. All rights reserved."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 text-sm scroll-smooth">
      <Toaster />
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        portfolioName={portfolioData.name.split(' ')[0]}
      />
      <HeroSection 
        name={portfolioData.name} 
        tagline={portfolioData.tagline}
        heroImage={portfolioData.heroImage}
        scrollToSection={scrollToSection}
        onViewWork={() => scrollToSection('projects')}
        onGetInTouch={() => scrollToSection('contact')}
      />
      <AboutSection 
        aboutData={portfolioData.about} 
        educationData={portfolioData.education}
      />
      <SkillsSection skillsData={portfolioData.skills} />
      <ProjectsSection 
        projectsData={portfolioData.projects} 
        onViewAllProjects={() => handleGenericClick("View All Projects")}
        onProjectInteraction={(projectName) => handleGenericClick(`${projectName} interaction`)}
      />
      <ExperienceSection 
        experiencesData={portfolioData.experiences} 
        achievementsData={portfolioData.achievements}
      />
      <ContactSection 
        contactData={portfolioData.contact}
        onSendEmail={() => handleGenericClick("Send Email")}
        onSocialConnect={(platform) => handleGenericClick(`${platform} Connect`)}
      />
      <Footer 
        footerData={portfolioData.footer}
        onSocialConnect={(platform) => handleGenericClick(`${platform} Footer Connect`)}
      />
    </div>
  );
};

export default App;
