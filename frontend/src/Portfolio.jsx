import React, { useState, useEffect } from 'react';
import { portfolioData } from './mock';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Separator } from './components/ui/separator';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Lightbulb,
  Globe,
  ChevronDown,
  ExternalLink,
  Calendar,
  Award,
  Languages
} from 'lucide-react';

const Portfolio = () => {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const data = portfolioData[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-slate-900/50' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                {data.name}
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(data.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`text-sm font-medium transition-colors hover:text-slate-300 ${
                    activeSection === key ? 'text-slate-100' : 'text-slate-400'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>

            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-slate-100"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950 z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 z-0"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <p className="text-slate-400 text-sm uppercase tracking-wider">{data.title}</p>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  {data.name}
                </h2>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed">
                {data.tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                {data.about.highlights.map((highlight, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-700/50 transition-colors"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-slate-100 text-slate-950 hover:bg-slate-200 transition-all"
                >
                  {data.contact.title}
                </Button>
                <Button 
                  onClick={() => scrollToSection('experience')}
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-all"
                >
                  {data.nav.experience}
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-900/20 rounded-3xl transform rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl shadow-slate-900/50">
                  <img 
                    src={data.profileImage} 
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{data.about.title}</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-slate-500 to-slate-700"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="bg-slate-900/50 border-slate-800 p-8">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {data.about.bio}
                </p>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="bg-slate-900/50 border-slate-800 p-6">
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-slate-400" />
                  <span>{data.location}</span>
                </div>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800 p-6">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <a href={`mailto:${data.email}`} className="hover:text-slate-100 transition-colors">{data.email}</a>
                </div>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800 p-6">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-slate-400" />
                  <span>{data.phone}</span>
                </div>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800 p-6">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Linkedin className="w-5 h-5 text-slate-400" />
                  <a 
                    href={`https://${data.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-slate-100 transition-colors flex items-center"
                  >
                    LinkedIn
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-12">
            <Card className="bg-slate-900/50 border-slate-800 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Languages className="w-6 h-6 text-slate-400" />
                <h4 className="text-xl font-semibold">{data.languages.title}</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.languages.items.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <p className="font-medium text-slate-200">{item.language}</p>
                    <p className="text-sm text-slate-400">{item.level}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-950/50 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Briefcase className="w-8 h-8 text-slate-400" />
              <h3 className="text-3xl md:text-4xl font-bold">{data.experience.title}</h3>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-slate-500 to-slate-700"></div>
          </div>

          <div className="space-y-6">
            {data.experience.items.map((item, index) => (
              <Card 
                key={item.id} 
                className="bg-slate-900/50 border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Calendar className="w-5 h-5 text-slate-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-xl font-semibold text-slate-100">{item.role}</h4>
                          {item.current && (
                            <Badge className="bg-emerald-900/50 text-emerald-300 border-emerald-700">
                              {language === 'en' ? 'Current' : 'Actual'}
                            </Badge>
                          )}
                        </div>
                        <p className="text-slate-300 font-medium mb-1">{item.company}</p>
                        <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                          <span>{item.period}</span>
                          <span>•</span>
                          <span>{item.location}</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Code2 className="w-8 h-8 text-slate-400" />
              <h3 className="text-3xl md:text-4xl font-bold">{data.skills.title}</h3>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-slate-500 to-slate-700"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.skills.categories.map((category, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 hover:border-slate-700 transition-all">
                <h4 className="text-lg font-semibold mb-4 text-slate-200">{category.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-slate-800/70 text-slate-300 border-slate-700 hover:bg-slate-700/70 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-950/50 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="w-8 h-8 text-slate-400" />
              <h3 className="text-3xl md:text-4xl font-bold">{data.education.title}</h3>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-slate-500 to-slate-700"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.education.items.map((item) => (
              <Card key={item.id} className="bg-slate-900/50 border-slate-800 p-6 hover:border-slate-700 transition-all">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{item.period}</p>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">{item.program}</h4>
                    <p className="text-slate-300 mb-1">{item.institution}</p>
                    {item.location && (
                      <p className="text-sm text-slate-400 mb-2">{item.location}</p>
                    )}
                    <Badge className="bg-slate-800/70 text-slate-400 border-slate-700">
                      {item.type}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Lightbulb className="w-8 h-8 text-slate-400" />
              <h3 className="text-3xl md:text-4xl font-bold">{data.projects.title}</h3>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-slate-500 to-slate-700"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.items.map((project) => (
              <Card key={project.id} className="bg-slate-900/50 border-slate-800 p-6 hover:border-slate-700 transition-all hover:shadow-lg hover:shadow-slate-900/50">
                <Badge className="bg-slate-800/70 text-slate-400 border-slate-700 mb-3">
                  {project.category}
                </Badge>
                <h4 className="text-xl font-semibold text-slate-200 mb-3">{project.name}</h4>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <p className="text-sm text-slate-500">{project.period}</p>
              </Card>
            ))}
          </div>

          {/* Interests */}
          <div className="mt-12">
            <Card className="bg-slate-900/50 border-slate-800 p-8">
              <h4 className="text-xl font-semibold mb-6">{data.interests.title}</h4>
              <div className="flex flex-wrap gap-3">
                {data.interests.items.map((interest, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-slate-800/70 text-slate-300 border-slate-700 hover:bg-slate-700/70 transition-colors text-sm py-2 px-4"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-950/50 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{data.contact.title}</h3>
            <p className="text-xl text-slate-400">{data.contact.subtitle}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-slate-500 to-slate-700 mx-auto mt-6"></div>
          </div>

          <Card className="bg-slate-900/50 border-slate-800 p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {data.contact.form.name}
                </label>
                <Input 
                  type="text" 
                  className="bg-slate-950/50 border-slate-700 text-slate-100 focus:border-slate-500"
                  placeholder={data.contact.form.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {data.contact.form.email}
                </label>
                <Input 
                  type="email" 
                  className="bg-slate-950/50 border-slate-700 text-slate-100 focus:border-slate-500"
                  placeholder={data.contact.form.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {data.contact.form.message}
                </label>
                <Textarea 
                  rows={6}
                  className="bg-slate-950/50 border-slate-700 text-slate-100 focus:border-slate-500"
                  placeholder={data.contact.form.message}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-slate-100 text-slate-950 hover:bg-slate-200 transition-all"
              >
                {data.contact.form.submit}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 {data.name}. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
            </p>
            <div className="flex items-center gap-6">
              <a href={`mailto:${data.email}`} className="text-slate-400 hover:text-slate-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
