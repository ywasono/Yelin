import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, MapPin, Phone, Mail, ChevronDown, Menu, X, Award, Handshake, Leaf, CheckCircle2, Truck, Search, Sun, MessageCircle } from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentMawIndex, setCurrentMawIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const fishMawImages = [
    "https://i.imgur.com/U27R4sa.jpeg",
    "https://i.imgur.com/crbDp7z.jpeg",
    "https://i.imgur.com/LKj78Ud.jpeg",
    "https://i.imgur.com/iJmJTx1.jpeg"
  ];

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMawIndex((prev) => (prev + 1) % fishMawImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden selection:bg-green-100 selection:text-green-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-lg shadow-sm">
              <img 
                src="https://i.imgur.com/IOsOG7M.jpeg" 
                alt="CV Yelin Shan Hang Logo" 
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>CV Yelin Shan Hang</span>
              <span className={`text-[9px] font-medium tracking-[0.2em] uppercase ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>Hasil Laut & Hasil Bumi</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className={`hover:text-green-600 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>{t.nav.home}</a>
            <a href="#about" className={`hover:text-green-600 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>{t.nav.about}</a>
            <a href="#agricultural" className={`hover:text-green-600 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>{t.nav.agricultural}</a>
            <a href="#marine" className={`hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>{t.nav.marine}</a>
            <a href="#contact" className={`hover:text-green-600 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>{t.nav.contact}</a>
            
            <div className="relative group">
              <button className={`flex items-center gap-1 px-3 py-1 rounded-full border transition-all ${scrolled ? 'border-gray-300 text-gray-700' : 'border-white/30 text-white'}`}>
                <Globe size={16} />
                <span className="uppercase text-sm font-medium">{lang}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden border border-gray-100">
                <button onClick={() => toggleLang('id')} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors">Bahasa Indonesia</button>
                <button onClick={() => toggleLang('en')} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors">English</button>
                <button onClick={() => toggleLang('zh')} className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors">中文 (Mandarin)</button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu size={28} className={scrolled ? 'text-gray-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-2xl font-medium"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
            <a href="#agricultural" onClick={() => setIsMenuOpen(false)}>{t.nav.agricultural}</a>
            <a href="#marine" onClick={() => setIsMenuOpen(false)}>{t.nav.marine}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
            <div className="flex gap-4 mt-4">
              <button onClick={() => toggleLang('id')} className={`px-4 py-2 rounded-full border ${lang === 'id' ? 'bg-green-600 text-white border-green-600' : 'border-gray-300'}`}>ID</button>
              <button onClick={() => toggleLang('en')} className={`px-4 py-2 rounded-full border ${lang === 'en' ? 'bg-green-600 text-white border-green-600' : 'border-gray-300'}`}>EN</button>
              <button onClick={() => toggleLang('zh')} className={`px-4 py-2 rounded-full border ${lang === 'zh' ? 'bg-green-600 text-white border-green-600' : 'border-gray-300'}`}>ZH</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.pinimg.com/736x/9f/06/4e/9f064ea26b5e6acbae3c45eb29cceae6.jpg" 
            alt="Green Field Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-light"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a href="#agricultural" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-green-900/20">
              {t.nav.agricultural}
            </a>
            <a href="#marine" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-900/20">
              {t.nav.marine}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-green-900/10 p-8 md:p-12 grid md:grid-cols-3 gap-8 border border-green-50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:border-r border-gray-100 last:border-0"
          >
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{t.stats.experience}</div>
            <div className="text-gray-500 font-medium uppercase tracking-widest text-xs">{t.stats.experienceLabel}</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:border-r border-gray-100 last:border-0"
          >
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{t.stats.countries}</div>
            <div className="text-gray-500 font-medium uppercase tracking-widest text-xs">{t.stats.countriesLabel}</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{t.stats.volume}</div>
            <div className="text-gray-500 font-medium uppercase tracking-widest text-xs">{t.stats.volumeLabel}</div>
          </motion.div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 p-10 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center text-sm">V</span>
                {t.about.vision.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.about.vision.content}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-10 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">M</span>
                {t.about.mission.title}
              </h3>
              <ul className="space-y-3">
                {t.about.mission.items.map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-700 leading-relaxed">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-10">{t.about.values.title}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600">
                  <Award size={32} />
                </div>
                <h4 className="font-bold mb-2">{t.about.values.items.quality}</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600">
                  <Handshake size={32} />
                </div>
                <h4 className="font-bold mb-2">{t.about.values.items.integrity}</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600">
                  <Leaf size={32} />
                </div>
                <h4 className="font-bold mb-2">{t.about.values.items.sustainability}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{t.process.title}</h2>
            <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-green-100 -translate-y-1/2 z-0"></div>
            
            {[
              { icon: Search, color: 'bg-green-100 text-green-600', step: t.process.steps.sourcing },
              { icon: Sun, color: 'bg-orange-100 text-orange-600', step: t.process.steps.drying },
              { icon: CheckCircle2, color: 'bg-blue-100 text-blue-600', step: t.process.steps.sorting },
              { icon: Truck, color: 'bg-purple-100 text-purple-600', step: t.process.steps.packaging },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 text-center group hover:border-green-200 transition-all"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agricultural Section (Hasil Bumi) */}
      <section id="agricultural" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1754060761486-e336111fa58c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8" 
            alt="Agricultural Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">{t.agricultural.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t.agricultural.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nutmeg Shell */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-50 flex flex-col"
            >
              <div className="h-64">
                <img 
                  src="https://i.imgur.com/a3v8iz5.jpeg" 
                  alt="Nutmeg Shell" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-green-600 font-semibold uppercase tracking-widest text-xs mb-2">Premium Quality</span>
                <h3 className="text-2xl font-bold mb-3">{t.agricultural.products.nutmegShell.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {t.agricultural.products.nutmegShell.desc}
                </p>
                <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
                  <Globe size={16} />
                  <span>Export Standard</span>
                </div>
              </div>
            </motion.div>

            {/* Nutmeg No Shell */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-50 flex flex-col"
            >
              <div className="h-64">
                <img 
                  src="https://i.imgur.com/BQWknYb.jpeg" 
                  alt="Nutmeg No Shell" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-green-600 font-semibold uppercase tracking-widest text-xs mb-2">Premium Quality</span>
                <h3 className="text-2xl font-bold mb-3">{t.agricultural.products.nutmegNoShell.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {t.agricultural.products.nutmegNoShell.desc}
                </p>
                <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
                  <Globe size={16} />
                  <span>Export Standard</span>
                </div>
              </div>
            </motion.div>

            {/* Long Nutmeg */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-50 flex flex-col"
            >
              <div className="h-64">
                <img 
                  src="https://i.imgur.com/3RrgCaJ.jpeg" 
                  alt="Long Nutmeg" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-green-600 font-semibold uppercase tracking-widest text-xs mb-2">Premium Quality</span>
                <h3 className="text-2xl font-bold mb-3">{t.agricultural.products.longNutmeg.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {t.agricultural.products.longNutmeg.desc}
                </p>
                <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
                  <Globe size={16} />
                  <span>Export Standard</span>
                </div>
              </div>
            </motion.div>

            {/* Cloves */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-50 flex flex-col"
            >
              <div className="h-64">
                <img 
                  src="https://i.imgur.com/ExewWcx.jpeg" 
                  alt="Cloves" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-green-600 font-semibold uppercase tracking-widest text-xs mb-2">Premium Quality</span>
                <h3 className="text-2xl font-bold mb-3">{t.agricultural.products.cloves.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {t.agricultural.products.cloves.desc}
                </p>
                <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
                  <Globe size={16} />
                  <span>Export Standard</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marine Section (Hasil Laut) */}
      <section id="marine" className="relative py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/underwater/1920/1080" 
            alt="Underwater Marine Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{t.marine.title}</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">{t.marine.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20"
            >
              <div className="h-64">
                <img 
                  src="https://i.imgur.com/s0glaOD.jpeg" 
                  alt="Dried Seaworm" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{t.marine.products.driedSeaworm.name}</h3>
                <p className="text-blue-50 leading-relaxed">
                  {t.marine.products.driedSeaworm.desc}
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20"
            >
              <div className="h-64 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentMawIndex}
                    src={fishMawImages[currentMawIndex]} 
                    alt={`Dried Fish Maw ${currentMawIndex + 1}`} 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {fishMawImages.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentMawIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{t.marine.products.driedFishMaw.name}</h3>
                <p className="text-blue-50 leading-relaxed">
                  {t.marine.products.driedFishMaw.desc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">{t.contact.title}</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t.contact.address}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t.contact.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-600">88yl.yelin@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t.contact.form.firstName}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t.contact.form.lastName}</label>
                    <input 
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">{t.contact.form.message}</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
                    status === 'submitting' 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-green-600 hover:bg-green-700 text-white shadow-green-900/10'
                  }`}
                >
                  {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
                </button>
                
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-green-600 text-sm font-medium text-center mt-2"
                    >
                      {t.contact.form.success}
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-600 text-sm font-medium text-center mt-2"
                    >
                      {t.contact.form.error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[450px] relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.056586326176!2d112.6715613!3d-7.2343467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f960f6767676%3A0x656733911375!2sMutiara+Margomulyo+Indah!5e0!3m2!1sen!2sid!4v1711616783123!5m2!1sen!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="CV Yelin Shan Hang Office Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">YL</div>
            <span className="font-bold text-lg tracking-tight">CV Yelin Shan Hang</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2026 CV Yelin Shan Hang. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
