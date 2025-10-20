"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 600);
  const heroScale = Math.max(0.8, 1 - scrollY / 2000);

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-700`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50
          ? `backdrop-blur-2xl ${isDark ? 'bg-black/80 border-white/10' : 'bg-white/80 border-black/10'} border-b`
          : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">RK</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors`}>About</a>
            <a href="#work" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors`}>Work</a>
            <a href="#skills" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors`}>Skills</a>
            <a href="#contact" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors`}>Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 rounded-full transition-all ${isDark
                  ? 'bg-white/10 hover:bg-white/20'
                  : 'bg-black/10 hover:bg-black/20'
                }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="mailto:ravi7284007@gmail.com" className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${isDark
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
              }`}>
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: isDark
                ? 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.2), transparent 70%)'
                : 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.1), transparent 70%)',
              transform: `scale(${1 + scrollY * 0.001}) translateY(${scrollY * 0.3}px)`,
              filter: 'blur(60px)',
            }}
          />
        </div>

        <div
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{
            opacity: heroOpacity,
            transform: `scale(${heroScale}) translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="mb-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${isDark
                ? 'bg-white/5 backdrop-blur-xl border-white/10'
                : 'bg-black/5 backdrop-blur-xl border-black/10'
              }`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>

          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[180px] font-bold mb-8 tracking-tighter leading-none">
            Ravi Kumar
          </h1>

          <p className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-6 tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Frontend Developer
          </p>

          <p className={`text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light ${isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Crafting exceptional digital experiences with React, Next.js, and TypeScript.
            <br />
            <span className={isDark ? 'text-white' : 'text-black'}> 7+ years </span>
            of transforming ideas into reality.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#work" className={`group px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2 ${isDark
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
              }`}>
              <span>View My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:ravi7284007@gmail.com" className={`px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 ${isDark
                ? 'bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20'
                : 'bg-black/10 backdrop-blur-xl border border-black/20 hover:bg-black/20'
              }`}>
              Get in Touch
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 ${isDark ? 'border-white/30' : 'border-black/30'
            }`}>
            <div className={`w-1 h-2 rounded-full animate-bounce ${isDark ? 'bg-white' : 'bg-black'
              }`}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 px-6 relative ${isDark ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                Passion meets
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  precision
                </span>
              </h2>
              <p className={`text-xl leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                As a Frontend Developer with over 7 years of experience, I specialize in building high-performance, user-centric web applications that combine beautiful design with flawless functionality.
              </p>
              <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                My expertise spans React.js, Next.js, TypeScript, and modern UI frameworks, allowing me to deliver scalable solutions that drive business results.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative aspect-square rounded-[40px] bg-gradient-to-br from-blue-600 to-purple-600 flex items-end justify-start text-9xl font-black overflow-hidden">
                <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/20'}`}></div>
                <span className="relative z-10 bottom-0 p-3 text-2xl">Ravi Kumar</span>
                <Image
                  src="/IMG_20581.jpg"
                  alt="Ravi Kumar"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-2xl">
                Available Now
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 px-6 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '7+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '30%', label: 'Performance Boost' }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-32 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Technical
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Mastering the technologies that power modern web experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'React.js', level: 95 },
              { name: 'Next.js', level: 90 },
              { name: 'TypeScript', level: 88 },
              { name: 'JavaScript', level: 92 },
              { name: 'Redux', level: 85 },
              { name: 'Tailwind CSS', level: 93 },
              { name: 'GraphQL', level: 80 },
              { name: 'MongoDB', level: 75 }
            ].map((skill, index) => (
              <div
                key={index}
                className={`group rounded-[32px] p-8 transition-all hover:scale-105 cursor-default ${isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-gray-700'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-300'
                  }`}
              >
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {skill.level}%
                </div>
                <div className="text-lg font-semibold mb-4">{skill.name}</div>
                <div className={`h-1 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 group-hover:scale-x-105 origin-left"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className={`py-32 px-6 ${isDark ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Featured
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Charitable Impact',
                description: 'Scalable fundraising platform with real-time features',
                tech: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'WebSocket'],
                impact: 'Optimized load times by 20%, increased speed by 30%',
                gradient: 'from-blue-600 to-cyan-600'
              },
              {
                title: 'Lamps Plus',
                description: 'E-commerce experience for leading home décor retailer',
                tech: ['React', 'Redux', 'Sass', 'REST API'],
                impact: 'Reduced production issues by 40%',
                gradient: 'from-purple-600 to-pink-600'
              },
              {
                title: 'f3digital',
                description: 'Modern web applications with Material UI',
                tech: ['React', 'Material UI', 'Redux'],
                impact: 'Enhanced performance and maintainability',
                gradient: 'from-orange-600 to-red-600'
              },
              {
                title: 'Vaidaan',
                description: 'E-commerce platform with dynamic filtering',
                tech: ['Vue.js', 'Tailwind', 'Bootstrap'],
                impact: 'Improved user experience significantly',
                gradient: 'from-green-600 to-teal-600'
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`group rounded-[40px] p-8 md:p-12 transition-all hover:scale-[1.01] cursor-default ${isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-gray-700'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-300'
                  }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold mb-4`}>
                      Featured
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                    <p className={`text-xl mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium ${isDark
                            ? 'bg-white/5 backdrop-blur-xl border border-white/10'
                            : 'bg-black/5 backdrop-blur-xl border border-black/10'
                          }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-green-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">{project.impact}</span>
                    </div>
                  </div>
                  <div className={`w-32 h-32 rounded-[32px] bg-gradient-to-br ${project.gradient} flex items-center justify-center text-4xl font-black text-white shadow-2xl group-hover:scale-110 transition-transform`}>
                    0{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-32 px-6 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-20 tracking-tight text-center leading-tight">
            Professional
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <div className="space-y-6">
            {[
              {
                company: 'Infogain India Pvt. Ltd.',
                role: 'Front End Developer',
                period: 'Dec 2021 – Aug 2025',
                location: 'Noida, India'
              },
              {
                company: 'Foreignerds Inc.',
                role: 'Frontend Developer',
                period: 'Jul 2019 - Dec 2021',
                location: 'Noida, India'
              },
              {
                company: 'Oakyweb Pvt. Ltd.',
                role: 'Frontend Developer',
                period: 'Jun 2018 - Jul 2019',
                location: 'Noida, India'
              }
            ].map((exp, index) => (
              <div key={index} className={`rounded-[32px] p-8 transition-all hover:scale-[1.01] ${isDark
                  ? 'bg-gray-50 hover:bg-gray-100'
                  : 'bg-gray-900 hover:bg-gray-800'
                }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className={`text-xl font-semibold mb-1 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{exp.company}</p>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{exp.location}</p>
                  </div>
                  <div className={`px-5 py-2.5 rounded-full text-sm font-medium self-start md:self-auto ${isDark
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                    }`}>
                    {exp.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className={`py-32 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-bold mb-12">Education</h3>
              <div className="space-y-6">
                <div className={`rounded-[32px] p-8 transition-all hover:scale-[1.02] ${isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
                  }`}>
                  <h4 className="text-2xl font-bold mb-2">MCA (Computers)</h4>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Swami Vivekanand Subharti University, Meerut</p>
                  <div className={`flex items-center gap-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span>2022</span>
                    <span>•</span>
                    <span>65%</span>
                  </div>
                </div>

                <div className={`rounded-[32px] p-8 transition-all hover:scale-[1.02] ${isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800'
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
                  }`}>
                  <h4 className="text-2xl font-bold mb-2">B.Com (Commerce)</h4>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Allahabad University</p>
                  <div className={`flex items-center gap-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span>2016</span>
                    <span>•</span>
                    <span>62%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-bold mb-12">Certifications</h3>
              <div className="space-y-3">
                {[
                  'Advanced JavaScript 2: Async JS, APIs',
                  'Programming with JavaScript',
                  'Redux in JavaScript and React',
                  'Complete React Ultimate Guide',
                  'JavaScript Course 2024',
                  'Foundations of Cybersecurity',
                  'Generative AI for Everyone'
                ].map((cert, i) => (
                  <div key={i} className={`rounded-[24px] p-6 transition-all hover:scale-[1.02] ${isDark
                      ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-gray-700'
                      : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-300'
                    }`}>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-32 px-6 ${isDark ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'
        }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tight leading-tight">
            Let's create
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className={`text-2xl mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to bring your next project to life
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a href="mailto:ravi7284007@gmail.com" className={`group px-10 py-5 rounded-full text-lg font-semibold transition-all hover:scale-105 flex items-center gap-2 ${isDark
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
              }`}>
              <Mail size={20} />
              <span>Send Email</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/ravi7284007" target="_blank" rel="noopener noreferrer" className={`px-10 py-5 rounded-full text-lg font-semibold transition-all hover:scale-105 flex items-center gap-2 ${isDark
                ? 'bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20'
                : 'bg-black/10 backdrop-blur-xl border border-black/20 hover:bg-black/20'
              }`}>
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/ravi7284007" target="_blank" rel="noopener noreferrer" className={`px-10 py-5 rounded-full text-lg font-semibold transition-all hover:scale-105 flex items-center gap-2 ${isDark
                ? 'bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20'
                : 'bg-black/10 backdrop-blur-xl border border-black/20 hover:bg-black/20'
              }`}>
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={`rounded-[32px] p-8 text-left transition-all hover:scale-105 ${isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800'
                : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
              }`}>
              <Mail className="mb-4 text-blue-500" size={24} />
              <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
              <p className="font-medium break-all">ravi7284007@gmail.com</p>
            </div>
            <div className={`rounded-[32px] p-8 text-left transition-all hover:scale-105 ${isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800'
                : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
              }`}>
              <Phone className="mb-4 text-purple-500" size={24} />
              <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
              <p className="font-medium">+91-9971706564</p>
            </div>
            <div className={`rounded-[32px] p-8 text-left transition-all hover:scale-105 ${isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800'
                : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
              }`}>
              <MapPin className="mb-4 text-pink-500" size={24} />
              <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Location</p>
              <p className="font-medium">Noida, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'
        }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © 2025 Ravi Kumar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/ravi7284007" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-black'
              }`}>
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/ravi7284007" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-black'
              }`}>
              <Github size={20} />
            </a>
            <a href="mailto:ravi7284007@gmail.com" className={`transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-black'
              }`}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}